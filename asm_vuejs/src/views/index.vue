<template>
    <!-- <slider></slider> -->
    <section class="container mt-4">
      <h2 class="text-info mb-4 text-center">Blog Xu Hướng</h2> 
      <div class="row">
        <div class="col-md-4 mb-4" v-for="post in paginatedPosts" :key="post.id">
          <div class="card h-100"> 
            <router-link :to="`/post/${post.id}`">
              <img :src="post.image" :alt="post.title" class="card-img-top" />
            </router-link>
            <div class="card-body d-flex flex-column"> 
              <h5 class="card-title">
                {{ post.title }}
              </h5>
              <p class="card-text flex-grow-1"> 
                {{ truncateText(post.content, 100) }}
              </p>
              <div class="mt-auto"> 
                <span class="text-muted">
                  <i class="bi bi-eye-fill"></i> {{ post.views || 0 }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <div class="d-flex justify-content-center mt-3">
        <nav aria-label="Page navigation example">
          <ul class="pagination">
            <li class="page-item" :class="{ disabled: currentPagePosts === 1 }">
              <a class="page-link" href="#" aria-label="Previous" @click.prevent="goToPagePosts(currentPagePosts - 1)">
                <span aria-hidden="true">«</span>
              </a>
            </li>
            <li class="page-item" v-for="page in totalPagesPosts" :key="page" :class="{ active: currentPagePosts === page }">
              <a class="page-link" href="#" @click.prevent="goToPagePosts(page)">{{ page }}</a>
            </li>
            <li class="page-item" :class="{ disabled: currentPagePosts === totalPagesPosts }">
              <a class="page-link" href="#" aria-label="Next" @click.prevent="goToPagePosts(currentPagePosts + 1)">
                <span aria-hidden="true">»</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
  
      <h4 class="text-center text-info mt-5">VIDEO - ĐỪNG BỎ LỠ</h4>
      <div class="row">
        <div class="col-md-4 mb-4" v-for="video in paginatedVideos" :key="video.id">
          <div class="card text-start h-100"> 
            <router-link :to="`/video/${video.id}`">
              <img class="card-img-top" :src="getThumbnailUrl(video.youtubeLink)" alt="Video thumbnail">
            </router-link>
            <div class="card-body d-flex flex-column"> 
              <h4 class="card-title">{{ video.title }}</h4>
              <p class="card-text flex-grow-1"> 
                {{ truncateText(video.description, 100) }}
              </p>
              <div class="mt-auto"> 
                <span class="text-muted">
                  <i class="bi bi-eye-fill"></i> {{ video.views || 0 }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <div class="d-flex justify-content-center mt-3">
        <nav aria-label="Page navigation example">
          <ul class="pagination">
            <li class="page-item" :class="{ disabled: currentPageVideos === 1 }">
              <a class="page-link" href="#" aria-label="Previous" @click.prevent="goToPageVideos(currentPageVideos - 1)">
                <span aria-hidden="true">«</span>
              </a>
            </li>
            <li class="page-item" v-for="page in totalPagesVideos" :key="page" :class="{ active: currentPageVideos === page }">
              <a class="page-link" href="#" @click.prevent="goToPageVideos(page)">{{ page }}</a>
            </li>
            <li class="page-item" :class="{ disabled: currentPageVideos === totalPagesVideos }">
              <a class="page-link" href="#" aria-label="Next" @click.prevent="goToPageVideos(currentPageVideos + 1)">
                <span aria-hidden="true">»</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  </template>

<script>
import axios from "axios";

export default {
  components: {
    slider: () => import("./common/slider.vue"),
  },
  data() {
    return {
      posts: [],
      relatedPosts: [],
      videos: [],
      currentPagePosts: 1,
      currentPageVideos: 1,
      postsPerPage: 3, // Hiển thị 2 bài viết trên mỗi trang
      videosPerPage: 4, // Hiển thị 4 video trên mỗi trang
    };
  },
  computed: {
    paginatedPosts() {
      const startIndex = (this.currentPagePosts - 1) * this.postsPerPage;
      const endIndex = startIndex + this.postsPerPage;
      return this.posts.slice(startIndex, endIndex);
    },
    paginatedVideos() {
      const startIndex = (this.currentPageVideos - 1) * this.videosPerPage;
      const endIndex = startIndex + this.videosPerPage;
      return this.videos.slice(startIndex, endIndex);
    },
    totalPagesPosts() {
      return Math.ceil(this.posts.length / this.postsPerPage);
    },
    totalPagesVideos() {
      return Math.ceil(this.videos.length / this.videosPerPage);
    },
  },
  created() {
    this.fetchPosts();
    this.fetchRelatedPosts();
    this.fetchVideos();
  },
  methods: {
    async fetchPosts() {
      try {
        const response = await axios.get("http://localhost:8001/api/posts");
        this.posts = response.data;
      } catch (error) {
        console.error("Lỗi khi lấy danh sách bài viết", error);
      }
    },
    async fetchRelatedPosts() {
      try {
        const response = await axios.get("http://localhost:8001/api/posts");
        this.relatedPosts = response.data.slice(0, 4);
      } catch (error) {
        console.error("Lỗi khi lấy danh sách bài viết liên quan", error);
      }
    },
    async fetchVideos() {
      try {
        const response = await axios.get("http://localhost:8001/api/videos");
        this.videos = response.data;
      } catch (error) {
        console.error("Lỗi khi lấy danh sách video", error);
      }
    },
    truncateText(text, maxLength) {
      if (text.length <= maxLength) {
        return text;
      }
      return text.substring(0, maxLength) + "...";
    },
    goToPagePosts(page) {
      if (page >= 1 && page <= this.totalPagesPosts) {
        this.currentPagePosts = page;
      }
    },
    goToPageVideos(page) {
      if (page >= 1 && page <= this.totalPagesVideos) {
        this.currentPageVideos = page;
      }
    },
    getYoutubeVideoId(url) {
      const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
      const match = url.match(regExp);
      return (match && match[2].length === 11) ? match[2] : null;   

    },
    getThumbnailUrl(youtubeLink) {
      const videoId = this.getYoutubeVideoId(youtubeLink);
      return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`; 
    },
  },
};
</script>
