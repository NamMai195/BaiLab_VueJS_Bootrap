<template>
  <div class="container my-5">
    <div class="row">
      <div class="col-md-6">
        <div class="card shadow-sm">
          <div class="card-header bg-primary text-white">
            <h5 class="mb-0">{{ isEdit ? "Chỉnh Sửa Bài Viết" : "Đăng Bài Mới" }}</h5>
          </div>
          <div class="card-body">
            <form @submit.prevent="savePost">
              <div class="mb-3">
                <label for="title" class="form-label">Tiêu đề</label>
                <input
                  type="text"
                  class="form-control"
                  id="title"
                  v-model="title"
                  placeholder="Nhập tiêu đề bài viết"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="content" class="form-label">Nội dung</label>
                <textarea
                  class="form-control"
                  id="content"
                  v-model="content"
                  rows="5"
                  placeholder="Nhập nội dung bài viết"
                  required
                ></textarea>
              </div>
              <div class="mb-3">
                <label for="image" class="form-label">Hình ảnh</label>
                <input
                  type="file"
                  ref="fileInput"
                  class="form-control"
                  id="image"
                  @change="onFileSelected"
                />
                <img
                  v-if="imageUrl"
                  :src="imageUrl"
                  alt="Image Preview"
                  class="img-thumbnail mt-2"
                  style="max-height: 150px"
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
            <h5 class="mb-0">Danh sách bài viết</h5>
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col">Tiêu đề</th>
                    <th scope="col">Nội dung</th>
                    <th scope="col">Lượt xem</th>
                    <th scope="col">Hành động</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="post in posts"
                    :key="post.id"
                    class="cursor-pointer"
                    @click="loadPostData(post)"
                  >
                    <td>{{ post.title }}</td>
                    <td class="truncate-with-dots">{{ post.content }}</td>
                    <td>{{ post.views || 0 }}</td>
                    <td>
                      <button
                        @click.stop="showPostDetails(post)"
                        class="btn btn-sm btn-warning me-2"
                      >
                        Chi tiết
                      </button>
                      <button
                        @click.stop="deletePost(post.id)"
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

    <div v-if="selectedPost" class="modal fade show d-block" tabindex="-1" role="dialog">
      <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
        <div class="modal-content shadow">
          <div class="modal-header">
            <h5 class="modal-title">{{ selectedPost.title }}</h5>
            <button type="button" class="btn-close" @click="closePostDetails"></button>
          </div>
          <div class="modal-body">
            <div class="container">
              <img
                v-if="selectedPost.image"
                :src="selectedPost.image"
                alt="Hình ảnh bài viết"
                class="img-fluid mb-3"
              />
              <p>{{ selectedPost.content }}</p>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" @click="closePostDetails">
              Đóng
            </button>
          </div>
        </div>
      </div>
    </div>
    <div v-if="selectedPost" class="modal-backdrop fade show"></div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      id: "",
      title: "",
      content: "",
      imageData: null,
      errorMessage: "",
      posts: [],
      selectedPost: null,
      isEdit: false,
      user: null,
    };
  },
  created() {
    this.fetchPosts();
    const userStr = localStorage.getItem("user");
    if (userStr) {
      this.user = JSON.parse(userStr);
    }
  },
  methods: {
    async onFileSelected(event) {
      this.imageData = event.target.files[0];
      // Thêm dòng này để cập nhật imageUrl ngay khi chọn file
      this.imageUrl = URL.createObjectURL(this.imageData);
    },
    async readImageFile() {
      return new Promise((resolve, reject) => {
        if (!this.imageData) return resolve(null);
        const reader = new FileReader();
        reader.readAsDataURL(this.imageData);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
      });
    },
    async fetchPosts() {
      try {
        const response = await axios.get("http://localhost:8001/api/posts");
        this.posts = response.data.filter(post => post.userid === this.user.id); 
      } catch (error) {
        console.error("Lỗi khi lấy danh sách bài viết", error);
      }
    },
    async savePost() {
      this.errorMessage = "";
      try {
        const base64Image = await this.readImageFile();
        let response;
        if (this.isEdit) {
          if (!this.id) {
            throw new Error("Không tìm thấy bài viết để chỉnh sửa.");
          }
          response = await axios.put(`http://localhost:8001/api/posts/${this.id}`, {
            title: this.title,
            content: this.content,
            image: base64Image || this.image, // Sử dụng ảnh cũ nếu không có ảnh mới
            userid: this.user.id,
          });
        } else {
          response = await axios.post("http://localhost:8001/api/posts", {
            title: this.title,
            content: this.content,
            image: base64Image,
            userid: this.user.id,
          });
        }
        if (response.status === 200 || response.status === 201) {
          this.resetForm();
          this.fetchPosts();
        }
      } catch (error) {
        this.errorMessage = error.message || "Lỗi khi lưu bài viết.";
        console.error(error);
      }
    },
    async deletePost(postId) {
      try {
        if (confirm("Bạn có chắc chắn muốn xóa bài viết này?")) {
          const response = await axios.delete(
            `http://localhost:8001/api/posts/${postId}`
          );
          if (response.status === 200) {
            this.fetchPosts();
          }
        }
      } catch (error) {
        console.error("Lỗi khi xóa bài viết", error);
      }
    },
    showPostDetails(post) {
      this.selectedPost = post;
    },
    closePostDetails() {
      this.selectedPost = null;
    },
    loadPostData(post) {
      this.isEdit = true;
      this.id = post.id;
      this.title = post.title;
      this.content = post.content;
      this.imageUrl = post.image; // Hiển thị ảnh hiện tại khi chỉnh sửa
    },
    resetForm() {
      this.title = "";
      this.content = "";
      this.imageData = null;
      this.imageUrl = null; // Xóa preview ảnh
      this.selectedPost = null;
      this.isEdit = false;
      this.$refs.fileInput.value = "";
    },
  },
};
</script>

<style scoped>
.truncate-with-dots {
  max-width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.modal-backdrop {
  z-index: 1040;
}
</style>
