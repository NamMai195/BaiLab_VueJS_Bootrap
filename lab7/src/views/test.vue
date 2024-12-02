<template>
    <div class="container">
      
        <h2 class="text-center mb-4">Máy Tính</h2> 
        <div class="form-group">
          <label for="a">A:</label>
          <input type="text" id="a" name="a" class="form-control" v-model="a">
        </div>
        <div class="form-group">
          <label for="b">B:</label>
          <input type="text" id="b" name="b" class="form-control" v-model="b"> 
        </div>
        <div class="form-group">
          <label for="KQ">KQ:</label>
          <input type="text" id="KQ" name="KQ" class="form-control" v-model="KQ"> 
        </div>
        <div class="d-flex justify-content-center"> 
          <button class="btn btn-primary mr-2" @click="PhepTinh('+')"</button>
          <button class="btn btn-secondary mr-2" @click="PhepTinh('-')">-</button>
          <button class="btn btn-success mr-2" @click="PhepTinh('/')">/</button>
          <button class="btn btn-danger" @click="PhepTinh('*')">*</button>
        </div>
     
    </div>
  </template>
  <script setup>
  import { ref } from 'vue';
  const a = ref('');
  const b = ref('');
  const KQ = ref('');
  const PhepTinh =(pheptinh) =>{
 if(a.value == '' || b.value == ''){
      alert('Vui lòng nhập đầy đủ các giá trị!');
      return;
    }
    else{
  if(pheptinh==='+'){
    KQ.value = parseInt(a.value) + parseInt(b.value);
    console.log(KQ.value);
  }
  else if(pheptinh==='-'){
    KQ.value = parseInt(a.value) - parseInt(b.value);
  }
  else if(pheptinh==='/'){
    if(b.value === '0'){
      alert('Không thể chia cho 0!');
      return;
    }
    else{
      KQ.value = parseInt(a.value) / parseInt(b.value);
    }

    }
    else if(pheptinh==='*'){
      KQ.value = parseInt(a.value) * parseInt(b.value);
    }}}
  </script>