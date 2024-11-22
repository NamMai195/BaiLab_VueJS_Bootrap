<template>
  <button @click="ok = !ok">{{ ok ? "ẩnn" : "hiện" }}</button> <br />
  <span v-show="ok">xin chào</span>
</template>
<script setup>
import { ref } from "vue";
const ok = ref(false);
// const clickHandler = () => {
//   ok.value = !ok.value;
// };
</script>
