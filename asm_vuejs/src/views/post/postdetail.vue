<template>
  <section class="row">
    <div class="col-8">
      <h2 class="text-info text-center">
        {{ post.title }} 
      </h2>
      <img :src="post.image" alt="post.title" class="card-img-bottom" /> 
      <p>{{ post.content }}</p> 

      </div>
    <div class="col-4">
      <h4 class="mb-4">Post Cùng Thể Loại</h4>
      <div class="list-group">
        <RouterLink :to="`/post/${relatedPost.id}`" class="list-group-item list-group-item-action" v-for="relatedPost in relatedPosts" :key="relatedPost.id"> 
         <div class="d-flex">
            <div class="col-4">
              <img :src="relatedPost.image" :alt="relatedPost.title" class="rounded-circle mx-auto d-block" style="width: 60px; height: 60px; object-fit: cover" />
            </div>
            <div class="col-8">
              <h6 class="mb-0">{{ relatedPost.title }}</h6>
              <span class="text-muted"> <i class="bi bi-chat-fill"></i> {{ relatedPost.comments || 0 }} </span>
            </div>
          </div>
        </RouterLink>
      </div>
      </div>
  </section>

  <div class="fb-comments" :data-href="`https://yourwebsite.com/post/${post.id}`" data-width="100%" data-numposts="5"></div> 
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      post: null,
      relatedPosts: []
    };
  },
  async created() { 
    this.fetchPost();
    this.fetchRelatedPosts();
  },
  methods: {
    async fetchPost() {
      try {
        const postId = this.$route.params.id;
        const response = await axios.get(`http://localhost:8001/api/posts/${postId}`);
        this.post = response.data;

        // Tăng views sau khi lấy dữ liệu bài viết
        this.post.views = (this.post.views || 0) + 1; 
        await axios.put(`http://localhost:8001/api/posts/${postId}`, this.post); 

      } catch (error) {
        console.error('Lỗi khi lấy bài viết', error);
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
    }
  },
  watch:{
    '$route.params.id'(newId) {
      this.post = null;
      this.fetchPost();
    }
  }
};
</script>