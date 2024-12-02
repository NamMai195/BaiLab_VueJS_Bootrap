<template>
  <div class="container my-5">
    <h2 class="text-info mb-3 text-center">Chi tiết Video</h2>
    <div class="row">
      <div class="col-md-8"> 
        <div class="card">
          <iframe
            class="card-img-top"
            height="450" 
            :src="getEmbedUrl(video.youtubeLink)" 
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <div class="card-body">
            <h4 class="card-title">{{ video.title }}</h4>
            <p class="card-text">{{ video.description }}</p>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <h4>Các Video Khác</h4> 
        <div class="list-group">
          <router-link 
            v-for="relatedVideo in relatedVideos" 
            :key="relatedVideo.id"
            :to="`/video/${relatedVideo.id}`" 
            class="list-group-item list-group-item-action"
          >
            <img :src="getThumbnailUrl(relatedVideo.youtubeLink)" alt="Video thumbnail" class="img-fluid"> 
            <p class="mt-2">{{ relatedVideo.title }}</p>
          </router-link>
        </div>
      </div>
    </div>
    <div class="fb-comments" data-href="https://yourwebsite.com/your-article" data-width="100%" data-numposts="5"></div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      video: {}, 
      relatedVideos: [],
    };
  },
  created() {
    this.fetchVideo();
    this.fetchRelatedVideos();
  },
  methods: {
    async fetchVideo() {
      try {
        const videoId = this.$route.params.id; 
        const response = await axios.get(`http://localhost:8001/api/videos/${videoId}`);
        this.video = response.data;
      } catch (error) {
        console.error("Lỗi khi lấy thông tin video", error);
        this.errorMessage = "Không tìm thấy video.";
      }
    },
    async fetchRelatedVideos() {
      try {
        const response = await axios.get("http://localhost:8001/api/videos");
        this.relatedVideos = response.data.slice(0, 3); 
      } catch (error) {
        console.error("Lỗi khi lấy danh sách video liên quan", error);
      }
    },
    getEmbedUrl(url) {
      const videoId = this.getYoutubeVideoId(url);
      return `https://www.youtube.com/embed/${videoId}`;
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
    reloadVideoDetail() {
      this.$router.go(0); 
    },
  },watch: {
  '$route.params.id'(newId) {
    this.fetchVideo(newId);
  }
}
};
</script>