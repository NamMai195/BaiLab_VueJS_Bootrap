<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <Hello msg="Welcome"/>
  <Bai3 msg="Welcome"/>
  <Bai4/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Hello from './components/Hello.vue'
import Bai3 from './components/Bai3.vue'
import Bai4 from './components/Bai4.vue'
export default {
  name: 'App',
  components: {
    HelloWorld, // Add a comma here
    Hello,
    Bai3,
    Bai4
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
