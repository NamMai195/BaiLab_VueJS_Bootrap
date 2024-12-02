<template>
  <div>
    <h5 class="text-left">Form Đăng Ký Thông Tin</h5>
    <div class="card p-2">
      <form @submit.prevent="register"> 
        <div class="mb-3">
          <label for="name" class="form-label">Họ Và Tên</label>
          <input type="text" class="form-control" id="name" v-model="name" placeholder="Nhập họ và tên" required>
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input type="email" class="form-control" id="email" v-model="email" placeholder="Nhập Email" required>
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Mật Khẩu</label>
          <input type="password" class="form-control" id="password" v-model="password" placeholder="Nhập Mật Khẩu" required>
        </div>
        <div class="mb-3">
          <label for="confirmPassword" class="form-label">Xác Nhận Mật Khẩu</label>
          <input type="password" class="form-control" id="confirmPassword" v-model="confirmPassword" placeholder="Xác Nhận Mật Khẩu" required>
        </div>
        <button type="submit" class="btn btn-primary mt-3">Đăng Ký</button>
        <div v-if="errorMessage" class="text-danger mt-2">{{ errorMessage }}</div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      errorMessage: ''
    };
  },
  methods: {
    async register() {
      this.errorMessage = ''; // Xóa thông báo lỗi cũ

      if (this.password !== this.confirmPassword) {
        this.errorMessage = 'Mật khẩu không khớp';
        return;
      }

      try {
        const response = await axios.post('http://localhost:8001/api/users/register', {
          name: this.name,
          email: this.email,
          password: this.password
        });

        if (response.status === 201) {
          // Đăng ký thành công
          this.$router.push('/login'); // trang đăng nhập
        }
      } catch (error) {
        if (error.response && error.response.status === 409) {
          this.errorMessage = 'Email đã tồn tại';
        } else {
          this.errorMessage = 'Lỗi đăng ký';
          console.error(error);
        }
      }
    }
  }
};
</script>