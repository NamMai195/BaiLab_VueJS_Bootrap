<template>
  <div class="p-5 items-center">
    <p >{{ message }}</p>
    <button class="btn btn-dark" @click="updateMessage">Thay đổi thông điệp</button>
  </div>
</template>
<script setup>
import { ref } from "vue";

const message = ref("Thông điệp ban đầu");

const updateMessage = () => {
  message.value =
    message.value === "Thông điệp ban đầu"
      ? "Thông điệp đã được thay đổi!"
      : "Thông điệp ban đầu";
};
</script>
