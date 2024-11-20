<template>
    <div>
      <h2>Danh sách bài viết</h2>
      <ul>
        <li v-for="(post, index) in posts" :key="index" 
            :class="{ even: index % 2 === 0 }"
            :style="{ backgroundColor: index % 2 === 0 ? 'lightblue' : 'lightgreen' }">
          <h3>{{ post.title }}</h3>
          <p>Tác giả: {{ post.author }}</p>
          <p>{{ post.content }}</p>
        </li>
      </ul>
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