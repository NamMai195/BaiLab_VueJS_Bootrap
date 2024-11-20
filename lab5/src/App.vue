<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
 
      <nav class="nav justify-content-center">
        <RouterLink class="nav-link" href="#" aria-current="page"
          >Bài 1</RouterLink
        >
        <RouterLink class="nav-link" href="#">Bài 2</RouterLink>
        <RouterLink class="nav-link" href="#">Bài 3</RouterLink>
      </nav>
   
  <RouterView></RouterView>
</template>

<style scoped></style>
