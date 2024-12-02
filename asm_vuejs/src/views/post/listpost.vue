<template>
  <div class="row">
    <div class="col-12">
      <h2 class="text-info mb-3 text-center">Blog</h2>
      <div class="row">
        <div class="col-md-4 mb-4" v-for="post in paginatedPosts" :key="post.id"> 
          <div class="card text-start h-100">
            <router-link :to="`/post/${post.id}`">
              <img class="card-img-top" :src="post.image" alt="post.title" />
            </router-link>
            <div class="card-body">
              <h4 class="card-title">{{ post.title }}</h4>
              <p class="card-text">
                {{ truncateText(post.content, 100) }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <nav aria-label="Page navigation">
        <ul class="pagination d-flex justify-content-center">
          <li class="page-item" :class="{ disabled: currentPage === 1 }">
            <a class="page-link" href="#" aria-label="Previous" @click.prevent="goToPage(currentPage - 1)">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li class="page-item" v-for="page in totalPages" :key="page" :class="{ active: currentPage === page }">
            <a class="page-link" href="#" @click.prevent="goToPage(page)">
              {{ page }}
            </a>
          </li>
          <li class="page-item" :class="{ disabled: currentPage === totalPages }">
            <a class="page-link" href="#" aria-label="Next" @click.prevent="goToPage(currentPage + 1)">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      posts: [],
      relatedPosts: [],
      totalPages: 1,
      currentPage: 1,
      postsPerPage: 6
    };
  },
  computed: {
    paginatedPosts() { 
      const startIndex = (this.currentPage - 1) * this.postsPerPage;
      const endIndex = startIndex + this.postsPerPage;
      return this.posts.slice(startIndex, endIndex);
    }
  },
  created() {
    this.fetchPosts();
    this.fetchRelatedPosts();
  },
  methods: {
    async fetchPosts() {
      try {
        const response = await axios.get('http://localhost:8001/api/posts');
        this.posts = response.data;
        this.totalPages = Math.ceil(this.posts.length / this.postsPerPage);
      } catch (error) {
        console.error('Lỗi khi lấy danh sách bài viết', error);
      }
    },
    async fetchRelatedPosts() {
      try {
        // Thay thế API này bằng API lấy bài viết cùng thể loại thực tế
        const response = await axios.get('http://localhost:8001/api/posts');
        this.relatedPosts = response.data.slice(0, 4);
      } catch (error) {
        console.error('Lỗi khi lấy danh sách bài viết liên quan', error);
      }
    },
    truncateText(text, maxLength) {
      if (text.length <= maxLength) {
        return text;
      }
      return text.substring(0, maxLength) + '...';
    },
    goToPage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
      }
    }
  }
};
</script>