<script setup>
import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
    <div id="app">
        <h1>Lab6</h1>
        <nav>
            <RouterLink to="/">Bai1</RouterLink> |
            <RouterLink to="/bai2">Bai2</RouterLink>|
            <RouterLink to="/bai3">Bai3</RouterLink>
        </nav>

        <div>
            <RouterView />
        </div>
    </div>
</template>

<style scoped>
</style>
 