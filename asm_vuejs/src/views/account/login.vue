<template>
  <div>
    <h2>Đăng nhập</h2>
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" class="form-control" required>
      </div>
      <div class="form-group">
        <label for="password">Mật khẩu:</label>
        <input type="password" id="password" v-model="password" class="form-control" required>
      </div>
      <button type="submit" class="btn btn-primary">Đăng nhập</button>
      <div v-if="errorMessage" class="text-danger">{{ errorMessage }}</div> 
    </form>
  </div>
</template>

<script>
import axios from 'axios'; // Nhớ cài đặt axios: npm install axios

export default {
  data() {
    return {
      email: '',
      password: '',
      errorMessage: '' // Biến lưu trữ thông báo lỗi
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post('http://localhost:8001/api/login', { 
          email: this.email, 
          password: this.password 
        });

        if (response.data.success === false) {
          this.errorMessage = 'Sai email hoặc mật khẩu'; 
        } else {
          // Lưu token vào localStorage
          localStorage.setItem('user', JSON.stringify(response.data.user)); 

          // Chuyển hướng đến trang chủ hoặc trang dashboard
          this.$router.push('/'); 
        }
      } catch (error) {
        this.errorMessage = 'Lỗi đăng nhập';
        console.error(error); 
      }
    }
  }
};
</script>