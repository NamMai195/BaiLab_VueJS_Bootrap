<template>
  <div class="row">
    <h1>Form Đăng Ký</h1>
    <div class="col-sm-6">
      <form @submit.prevent="dk = !dk">
        <div class="mb-3">
          <label>Họ và Tên:</label>
          <input
            v-model="userInfo.name"
            type="text"
            class="form-control"
            placeholder="Nhập họ và tên"
            required
          />
        </div>
        <div class="mb-3">
          <label>Email:</label>
          <input
            v-model="userInfo.email"
            type="email"
            class="form-control"
            placeholder="Nhập email"
            required
          />
        </div>
        <div class="mb-3">
          <label>Password:</label>
          <input
            v-model="userInfo.password"
            type="password"
            class="form-control"
            placeholder="Nhập Password"
            required
          />
        </div>
        <div class="mb-3">
          <label>Ngày Sinh:</label>
          <input v-model="userInfo.birthday" type="date" class="form-control"  required/>
        </div>
        <div class="mb-3">
          <label>Giới Tính:</label> <br />
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="gender"
              id="male"
              value="Nam"
              v-model="userInfo.gender"
              required
            />
            <label class="form-check-label" for="male">Nam</label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="gender"
              id="female"
              value="Nữ"
              v-model="userInfo.gender"
              required
            />
            <label class="form-check-label" for="female">Nữ</label>
          </div>
        </div>
        <div class="mb-3">
          <label>Ngôn Ngữ:</label> <br />
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="checkbox1"
              value="Tiếng Việt"
              v-model="userInfo.languages"
            />
            <label class="form-check-label" for="checkbox1">Tiếng Việt</label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="checkbox2"
              value="Tiếng Anh"
              v-model="userInfo.languages"
            />
            <label class="form-check-label" for="checkbox2">Tiếng Anh</label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="checkbox3"
              value="Tiếng Nhật"
              v-model="userInfo.languages"
            />
            <label class="form-check-label" for="checkbox3">Tiếng Nhật</label>
          </div>
        </div>
        <button type="submit" class="btn btn-primary">{{dk? 'Hủy' :'Đăng Ký'}}</button>
      </form>
    </div>
    <div class="col-sm-6">
      <div class="info-display mt-4 p-3 bg-dark text-white rounded">
        <h2>Thông tin đã nhập:</h2>
        <p >
          <strong>Họ và Tên:</strong> <span v-if="dk">{{ userInfo.name }}</span>
        </p>
        <p>
          <strong>Email:</strong> <span v-if="dk">{{ userInfo.email }}</span>
        </p>
        <!-- <p >
          <strong>Password:</strong> <span v-if="dk">{{ userInfo.password }}</span>
        </p> -->
        <p >
          <strong>Ngày Sinh:</strong> <span v-if="dk">{{ userInfo.birthday }}</span>
        </p>
        <p >
          <strong>Giới Tính:</strong> <span v-if="dk">{{ userInfo.gender }}</span>
        </p>
        <p >
          <strong>Ngôn Ngữ:</strong> <span v-if="dk">{{ userInfo.languages.join(", ") }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { ref } from "vue";
const dk = ref(false);

const userInfo = reactive({
  name: "",
  email: "",
  password: "",
  birthday: null,
  gender: null,
  languages: [],
});
</script>
