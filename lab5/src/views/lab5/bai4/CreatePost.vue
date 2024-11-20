<template>
    <div>
      <h2>Tạo bài viết mới</h2>
      <form @submit.prevent="addPost" class="row g-3 needs-validation" novalidate>
        <div class="col-md-12">
          <label for="title" class="form-label">Tiêu đề:</label>
          <input type="text" id="title" v-model="title" class="form-control" required>
          <div class="invalid-feedback">
            Vui lòng nhập tiêu đề.
          </div>
        </div>
        <div class="col-md-12">
          <label for="author" class="form-label">Tác giả:</label>
          <input type="text" id="author" v-model="author" class="form-control" required>
          <div class="invalid-feedback">
            Vui lòng nhập tên tác giả.
          </div>
        </div>
        <div class="col-md-12">
          <label for="content" class="form-label">Nội dung:</label>
          <textarea id="content" v-model="content" class="form-control" rows="5" required></textarea>
          <div class="invalid-feedback">
            Vui lòng nhập nội dung.
          </div>
        </div>
        <div class="col-12">
          <button type="submit" class="btn btn-primary">Đăng bài</button>
        </div>
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