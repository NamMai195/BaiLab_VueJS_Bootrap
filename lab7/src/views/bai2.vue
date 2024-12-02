<template>
    <div v-if="!isLoggedIn" class="p-5 col-sm-4">
      <h3>Đăng Nhập</h3>
      <form action="" @submit.prevent="login">
        <div class="mb-3">
          <label for="" class="form-label">Email</label>
          <input
            type="email"
            class="form-control"
            name=""
            id=""
            placeholder="abc@mail.com"
            v-model="email"
          />  
          <p v-if="emailError" class="text-danger">{{ emailError }}</p>
        </div>
        <div class="mb-3">
          <label for="" class="form-label">PassWord</label>
          <input
            type="password"
            class="form-control"
            name=""
            id=""
            placeholder="password"
            v-model="password"
          />  
          <p v-if="passwordError" class="text-danger">{{ passwordError }}</p>
        </div>
        <button type="submit" class="btn btn-primary">Đăng Nhập</button>
      </form>
    </div>
    <div v-else class="p-5 col-sm-4">
      <h3>Chào mừng, {{ email }}</h3>
      <button @click="logout" class="btn btn-primary">Đăng xuất</button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const isLoggedIn = ref(false);
  const email = ref('');
  const password = ref('');
  const emailError = ref('');
  const passwordError = ref('');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  const login = () => {
    // Reset thông điệp lỗi
    emailError.value = '';
    passwordError.value = '';
  
    // Validate email
    if (!email.value) {
      emailError.value = 'Email là bắt buộc.';
    } else if (!emailRegex.test(email.value)) {
      emailError.value = 'Vui lòng nhập email hợp lệ.';
    }
    if (!password.value) {
      passwordError.value = 'Mật khẩu là bắt buộc.';
    }
  
    if (!emailError.value && !passwordError.value) {
      isLoggedIn.value = true;
    }
  };
  
  const logout = () => {
    isLoggedIn.value = false;
    email.value = '';
    password.value = '';
    emailError.value = '';
    passwordError.value = '';
  };
  </script>