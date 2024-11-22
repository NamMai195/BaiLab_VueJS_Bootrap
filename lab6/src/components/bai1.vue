<template>
   <div class="card">
     <h2>Nhập điểm đi cu</h2>
    <div class="card-body">
        <input v-model="index" class="card-title" type="text"></input>
        <p class="card-text" v-if='index < 5 && index>=0'>Yếu</p>
        <p class="card-text" v-else-if='index >= 5 && index <6.5'>Trung Bình</p>
        <p class="card-text" v-else-if='index >= 6.5  && index <8'>Khá</p>
        <p class="card-text" v-else-if='index >= 8  && index <9'>Giỏi</p>
        <p class="card-text" v-else-if='index >= 9 && index <=10'>Xuất Sắc</p>
        <p class="card-text" v-else>Điểm không hợp lệ</p>
    </div>
   </div>
   
    
</template>
<script setup>
  import { ref } from 'vue';
  const index=ref(0);
</script>