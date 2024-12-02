<template>
  <div>
    <LoginComponent v-if="!isLoggedIn" @loggedIn="handleLoginSuccess" />

    <CommentComponent v-else :username="loggedInUser" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import LoginComponent from './bai4/loginComponent.vue';
import CommentComponent from './bai4/commentComponent.vue';

// Quản lý trạng thái đăng nhập và tên người dùng đã đăng nhập
const isLoggedIn = ref(false);
const loggedInUser = ref('');

// Xử lý khi người dùng đăng nhập thành công
function handleLoginSuccess(username) {
  loggedInUser.value = username;
  isLoggedIn.value = true;
}
</script>