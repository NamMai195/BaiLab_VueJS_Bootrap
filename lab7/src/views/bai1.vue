<template>
 <div class="col-sm-4 p-5">
 <h3 class="text-center"> Quản Lý Công Việc</h3>
 <!-- form -->
 <form @submit.prevent="addlist">
   <div class="mb-3">
    <label for="" class="form-label">Tên Công Việc:</label>
    <input
        type="text"
        class="form-control"
        name=""
        id=""
        placeholder="Tên Công Việc" v-model="jobs"
    />
   </div>
   <button type="submit" class="btn btn-primary">Thêm Công Việc</button>
 </form>
 <ul class="list-group mt-4">
 <li class="list-group-item d-flex justify-content-between align-items-center" v-for="(job, index) in listjobs" :key="index">
 {{job}} <button class="btn btn-danger btn-sm" @click="removelist(index)">Xóa</button></li>
 </ul>
 </div>
</template>
<script setup>
import { ref } from 'vue';
const jobs= ref('');
const listjobs= ref(['ăn sáng','đi học','chơi bóng rổ']);
const addlist=()=>{
    if(jobs.value.trim()){
        listjobs.value.push(jobs.value);
        jobs.value='';
    }
};
const removelist =(index) =>{
    listjobs.value.splice(index,1);
}
</script>