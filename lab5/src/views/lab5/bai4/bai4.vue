<template>
    <div>
      <CreatePost @add-post="addPost" />
      <PostList :posts="posts" />
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import CreatePost from '../bai4/CreatePost.vue';
  import PostList from '../bai4/PostList.vue';
  
  const posts = ref([]);
  
  const addPost = (newPost) => {
    posts.value.push(newPost);
  };
  </script>