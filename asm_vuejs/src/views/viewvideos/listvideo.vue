<template>
  <div class="container my-5">
    <h2 class="text-info mb-3">Video</h2>
    <div class="row">
      <div class="col-md-4 mb-4" v-for="(video, index) in displayedVideos" :key="index">
        <div class="card text-start h-100">
          <router-link :to="`/video/${video.id}`" @click.native="increaseViews(video.id)"> 
            <img class="card-img-top" :src="getThumbnailUrl(video.youtubeLink)" alt="Video thumbnail">
          </router-link>
          <div class="card-body">
            <h4 class="card-title">{{ video.title }}</h4>
            <p class="card-text">
              {{ truncateText(video.description, 100) }}
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
          <a class="page-link" href="#" @click.prevent="goToPage(page)">{{ page }}</a>
        </li>
        <li class="page-item" :class="{ disabled: currentPage === totalPages }">
          <a class="page-link" href="#" aria-label="Next" @click.prevent="goToPage(currentPage + 1)">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      videos: [],
      currentPage: 1,
      videosPerPage: 6, 
      totalPages: 1,
    };
  },
  created() {
    this.fetchVideos();
  },
  methods: {
    async fetchVideos() {
      try {
        const response = await axios.get("http://localhost:8001/api/videos");
        this.videos = response.data;
        this.totalPages = Math.ceil(this.videos.length / this.videosPerPage);
      } catch (error) {
        console.error("Lỗi khi lấy danh sách video", error);
      }
    },
    goToPage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
      }
    },
    truncateText(text, maxLength) { 
      if (text.length <= maxLength) {
        return text;
      }
      return text.substring(0, maxLength) + '...';
    },
    getYoutubeVideoId(url) {
      const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
      const match = url.match(regExp);
      return (match && match[2].length === 11) ? match[2] : null;   

    },
    getThumbnailUrl(youtubeLink) {
      const videoId = this.getYoutubeVideoId(youtubeLink);
      console.log(videoId);
      return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`; // Sửa lỗi tại đây
    },
    async increaseViews(videoId) {
      try {
        await axios.put(`http://localhost:8001/api/videos/${videoId}`, {
          views: this.videos.find(video => video.id === videoId).views + 1 
        });
        this.fetchVideos(); 
      } catch (error) {
        console.error("Lỗi khi tăng lượt xem", error);
      }
    },
  },
  computed: {
    displayedVideos() {
      const startIndex = (this.currentPage - 1) * this.videosPerPage;
      const endIndex = startIndex + this.videosPerPage;
      return this.videos.slice(startIndex, endIndex);
    }
  }
};
</script>