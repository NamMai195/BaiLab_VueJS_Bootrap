<template>
  <div class="container my-5">
    <div class="row">
      <div class="col-md-6">
        <div class="card shadow-sm">
          <div class="card-header bg-primary text-white">
            <h5 class="mb-0">{{ isEdit ? "Chỉnh Sửa Video" : "Đăng Video Mới" }}</h5>
          </div>
          <div class="card-body">
            <form @submit.prevent="saveVideo">
              <div class="mb-3">
                <label for="title" class="form-label">Tiêu đề</label>
                <input
                  type="text"
                  class="form-control"
                  id="title"
                  v-model="title"
                  placeholder="Nhập tiêu đề video"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="description" class="form-label">Mô tả</label>
                <textarea
                  class="form-control"
                  id="description"  
                  v-model="description"
                  rows="3"
                  placeholder="Nhập mô tả video"
                ></textarea>
              </div>
              <div class="mb-3">
                <label for="youtubeLink" class="form-label">Link YouTube</label>
                <input
                  type="text"
                  class="form-control"
                  id="youtubeLink"
                  v-model="youtubeLink"
                  placeholder="Nhập link YouTube của video"
                  required
                />
              </div>
              <button type="submit" class="btn btn-primary me-2">
                {{ isEdit ? "Cập nhật" : "Thêm" }}
              </button>
              <button @click="resetForm" class="btn btn-secondary">Reset</button>
              <div v-if="errorMessage" class="text-danger mt-2">{{ errorMessage }}</div>
            </form>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="card shadow-sm">
          <div class="card-header bg-success text-white">
            <h5 class="mb-0">Danh sách video</h5>
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col">Tiêu đề</th>
                    <th scope="col">Mô tả</th>
                    <th scope="col">Lượt xem</th>
                    <th scope="col">Hành động</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="video in videos"
                    :key="video.id"
                    class="cursor-pointer"
                    @click="loadVideoData(video)"
                  >
                    <td>{{ video.title }}</td>
                    <td>{{ video.description }}</td>
                    <td>{{ video.views || 0 }}</td>
                    <td>
                      <button
                        @click.stop="showVideoDetails(video)"
                        class="btn btn-sm btn-warning me-2"
                      >
                        Chi tiết
                      </button>
                      <button
                        @click.stop="deleteVideo(video.id)"
                        class="btn btn-sm btn-danger"
                      >
                        Xóa
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="selectedVideo" class="modal fade show d-block" tabindex="-1" role="dialog">
      <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
        <div class="modal-content shadow">
          <div class="modal-header">
            <h5 class="modal-title">{{ selectedVideo.title }}</h5>
            <button type="button" class="btn-close" @click="closeVideoDetails"></button>
          </div>
          <div class="modal-body">
            <div class="container">
              <p>{{ selectedVideo.description }}</p>
              <iframe 
                :src="getEmbedUrl(selectedVideo.youtubeLink)" 
                width="100%" 
                height="315" 
                frameborder="0" 
                allowfullscreen
              ></iframe>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" @click="closeVideoDetails">
              Đóng
            </button>
          </div>
        </div>
      </div>
    </div>
    <div v-if="selectedVideo" class="modal-backdrop fade show"></div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      id: "",
      title: "", // Thêm title vào data
      description: "", // Thêm description vào data
      youtubeLink: "",
      errorMessage: "",
      videos: [],
      selectedVideo: null,
      isEdit: false,
      user: null,
    };
  },
  created() {
    this.fetchVideos();
    const userStr = localStorage.getItem("user");
    if (userStr) {
      this.user = JSON.parse(userStr);
    }
  },
  methods: {
    getEmbedUrl(url) {
      const videoId = this.getYoutubeVideoId(url);
      return `https://www.youtube.com/embed/${videoId}`;
    },
    getYoutubeVideoId(url) {
      const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
      const match = url.match(regExp);
      return (match && match[2].length === 11) ? match[2] : null;
    },
    async fetchVideos() {
      try {
        const response = await axios.get("http://localhost:8001/api/videos");
        this.videos = response.data.filter(video => video.userid === this.user.id); 
      } catch (error) {
        console.error("Lỗi khi lấy danh sách video", error);
      }
    },
    async saveVideo() {
      this.errorMessage = "";
      try {
        let response;
        if (this.isEdit) {
          if (!this.id) {
            throw new Error("Không tìm thấy video để chỉnh sửa.");
          }
          response = await axios.put(`http://localhost:8001/api/videos/${this.id}`, {
            title: this.title, // Gửi title khi cập nhật
            description: this.description, // Gửi description khi cập nhật
            youtubeLink: this.youtubeLink,
            userid: this.user.id,
          });
        } else {
          response = await axios.post("http://localhost:8001/api/videos", { 
            title: this.title, // Gửi title khi tạo mới
            description: this.description, // Gửi description khi tạo mới
            youtubeLink: this.youtubeLink,
            userid: this.user.id,
          });
        }
        if (response.status === 200 || response.status === 201) {
          this.resetForm();
          this.fetchVideos();
        }
      } catch (error) {
        this.errorMessage = error.message || "Lỗi khi lưu video.";
        console.error(error);
      }
    },
    async deleteVideo(videoId) {
      try {
        if (confirm("Bạn có chắc chắn muốn xóa video này?")) {
          const response = await axios.delete(
            `http://localhost:8001/api/videos/${videoId}`
          );
          if (response.status === 200) {
            this.fetchVideos();
          }
        }
      } catch (error) {
        console.error("Lỗi khi xóa video", error);
      }
    },
    showVideoDetails(video) {
      this.selectedVideo = video;
    },
    closeVideoDetails() {
      this.selectedVideo = null;
    },
    loadVideoData(video) {
      this.isEdit = true;
      this.id = video.id;
      this.title = video.title; // Lấy title khi chỉnh sửa
      this.description = video.description; // Lấy description khi chỉnh sửa
      this.youtubeLink = video.youtubeLink; 
    },
    resetForm() {
      this.title = ""; // Reset title
      this.description = ""; // Reset description
      this.youtubeLink = "";
      this.selectedVideo = null;
      this.isEdit = false;
      this.id = null;
    },
  },
};
</script>

<style scoped>
.modal-backdrop {
  z-index: 1040;
}
</style>