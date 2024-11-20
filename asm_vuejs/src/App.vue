<script setup>
import { RouterLink, RouterView } from 'vue-router'
import home from './views/index.vue'
import navbar from './views/common/navbar.vue'
import footer1 from './views/common/footer.vue'
</script>

<template>
  <div class="container">
    <navbar></navbar>
    <router-view></router-view>
    <footer1></footer1>
    </div>
</template>

<style scoped>

</style>
