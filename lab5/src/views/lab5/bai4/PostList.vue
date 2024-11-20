<template>
    <div class="container">
      <h2>Danh sách bài viết</h2>
      <div class="list-group">
        <div v-for="(post, index) in posts" :key="index" 
             class="list-group-item"
             :class="{ 'list-group-item-primary': index % 2 === 0, 'list-group-item-secondary': index % 2 !== 0 }">
          <h3 class="mb-1">{{ post.title }}</h3>
          <p class="mb-1">Tác giả: {{ post.author }}</p>
          <p class="mb-1">{{ post.content }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    posts: {
      type: Array,
      required: true
    }
  });
  </script>