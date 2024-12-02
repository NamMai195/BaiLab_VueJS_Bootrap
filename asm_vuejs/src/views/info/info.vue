<template>
  <div class="container my-5">
    <div class="row">
      <div class="col-md-4">
        <div class="card">
          <img :src="user.avatar || defaultAvatar" alt="Avatar" class="card-img-top">
          <div class="card-body">
            <h5 class="card-title">{{ user.name }}</h5>
            <p class="card-text">{{ user.email }}</p>
            <p class="card-text">
              <span v-if="user.isAdmin" class="badge bg-primary">Admin</span>
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">
            Thông tin chi tiết
          </div>
          <div class="card-body">
            <form @submit.prevent="updateProfile">
              <div class="mb-3">
                <label for="name" class="form-label">Họ và tên</label>
                <input type="text" class="form-control" id="name" v-model="user.name">
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" id="email" v-model="user.email">
              </div>
              <div class="mb-3">
                <label for="password" class="form-label">Mật khẩu</label>
                <input type="password" class="form-control" id="password" v-model="user.password">
              </div>
              <div class="mb-3">
                <label for="avatar" class="form-label">Avatar</label>
                <input type="file" class="form-control" id="avatar" @change="onAvatarSelected">
              </div>
              <button type="submit" class="btn btn-primary">Cập nhật</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import avatar from '@/images/avatar.png';

export default {
  data() {
    return {
      user: {
        name: "",
        email: "",
        password: "",
        avatar: null,
      },
      defaultAvatar: avatar,
    };
  },
  created() {
    this.loadUserData();
  },
  methods: {
    loadUserData() {
      const userStr = localStorage.getItem("user");
      if (userStr) {
        this.user = JSON.parse(userStr);
      }
    },
    onAvatarSelected(event) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        this.user.avatar = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    async updateProfile() {
      try {
        const response = await axios.put(`http://localhost:8001/api/users/${this.user.id}`, { 
          name: this.user.name,
          email: this.user.email,
          password: this.user.password,
          avatar: this.user.avatar,
        });

        if (response.status === 200) {
          localStorage.setItem("user", JSON.stringify(this.user));
          alert("Cập nhật thông tin thành công!");
        } else {
          throw new Error("Lỗi khi cập nhật thông tin");
        }
      } catch (error) {
        console.error("Lỗi khi cập nhật thông tin", error);
        alert("Cập nhật thông tin thất bại!");
      }
    },
  },
};
</script>