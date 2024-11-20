<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
 
      <nav class="nav justify-content-center">
        <RouterLink class="nav-link"to="/lab5bai1"
          >Bài 1</RouterLink
        >
        <RouterLink class="nav-link" to="/lab5bai2">Bài 2</RouterLink>
        <RouterLink class="nav-link" to="/lab5bai3">Bài 3</RouterLink>
        <RouterLink class="nav-link" to="/lab5bai4">Bài 4</RouterLink>
      </nav>
   
  <RouterView></RouterView>
</template>

<style scoped></style>
