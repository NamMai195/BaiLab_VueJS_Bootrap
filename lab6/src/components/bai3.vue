<template>
  <div class="container mt-5">
    <h1 class="text-center">Kiến thức sức khỏe cộng đồng</h1>
    <div class="row">
      <div class="col-sm-4" v-for="(item, index) in items" :key="index">
        <div class="card h-100">
          <img :src="item.image" class="card-img-top" alt="Hình ảnh về: {{ item.title }}" /> 
          <div class="card-body d-flex flex-column">
            <h3 class="card-title">{{ item.title }}</h3>
            <button class="btn btn-info mt-auto" @click="item.showDetails = !item.showDetails">
              {{ item.showDetails ? "Ẩn chi tiết" : "Hiện chi tiết" }}
            </button>
            <p class="card-text" v-show="item.showDetails">{{ item.content }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
// Import hình ảnh từ thư mục assets
import img1 from "../assets/logo.svg";
import img2 from "../assets/logo.svg";
import img3 from "../assets/logo.svg";

const items = reactive([
  {
    title: "8 loại rau củ quả giàu canxi",
    content: "Canxi là...",
    image: img1,
    showDetails: false 
  },
  {
    title: "Các loại gia vị tốt cho sức khỏe",
    content: "Một số loại...",
    image: img2,
    showDetails: false
  },
  {
    title: "9 loại đậu bổ dưỡng nên dùng nhiều",
    content: "Đậu lăng...",
    image: img3,
    showDetails: false
  },
]);
</script>