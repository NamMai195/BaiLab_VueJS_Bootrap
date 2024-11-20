<template>
    <div>
      <h2>Tạo bài viết mới</h2>
      <form @submit.prevent="addPost"> 
        <div>
          <label for="title">Tiêu đề:</label>
          <input type="text" id="title" v-model="title">
        </div>
        <div>
          <label for="author">Tác giả:</label>
          <input type="text" id="author" v-model="author">
        </div>
        <div>
          <label for="content">Nội dung:</label>
          <textarea id="content" v-model="content"></textarea>
        </div>
        <button type="submit">Đăng bài</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  const emit = defineEmits(['add-post']);
  
  const title = ref('');
  const author = ref('');
  const content = ref('');
  
  const addPost = () => {
    emit('add-post', {
      title: title.value,
      author: author.value,
      content: content.value
    });
    // Reset form
    title.value = '';
    author.value = '';
    content.value = '';
  };
  </script>