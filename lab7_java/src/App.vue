<template>
  <div class="container mt-4">
    <h2 class="text-center mb-4">Form Nhập Thông Tin</h2>
    <form @submit.prevent="submitForm">
      <div class="row">
        <div class="col-6">
          <div>
            <label for="id" class="form-label">ID</label>
            <input
              type="text"
              class="form-control"
              id="id"
              v-model="formData.id"
              placeholder="Nhập ID"
              :readonly="formData.id !== ''"
              required
            />
          </div>
          <div>
            <label for="fullName" class="form-label">Full Name</label>
            <input
              type="text"
              class="form-control"
              id="fullName"
              v-model="formData.username"
              placeholder="Nhập Full Name"
              required
            />
          </div>

          <div class="d-flex align-items-center gap-3">
            <label for="">Role:</label>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                id="roleAdmin"
                v-model="formData.role"
                :value="true"
              />
              <label class="form-check-label" for="roleAdmin">Admin</label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                id="roleUser"
                v-model="formData.role"
                :value="false"
              />
              <label class="form-check-label" for="roleUser">User</label>
            </div>
          </div>
        </div>
        <div class="col-6">
          <div>
            <label for="email" class="form-label">Email</label>
            <input
              type="email"
              class="form-control"
              id="email"
              v-model="formData.email"
              placeholder="Nhập Email"
              required
            />
          </div>
          <div>
            <label for="password" class="form-label">Password</label>
            <input
              type="password"
              class="form-control"
              id="password"
              v-model="formData.password"
              placeholder="Nhập Password"
            />
          </div>

          <div class="d-flex align-items-center gap-3">
            <label class="form-label">Trạng Thái:</label>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                id="active"
                v-model="formData.isActive"
                :value="true"
                required
              />
              <label class="form-check-label" for="active">Đang Hoạt Động</label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                id="locked"
                v-model="formData.isActive"
                :value="false"
              />
              <label class="form-check-label" for="locked">Khóa</label>
            </div>
          </div>
        </div>
      </div>

      <button type="submit" class="btn btn-primary">Thêm</button>
      <button type="button" class="btn btn-warning" @click="resetForm">Reset</button>
    </form>

    <h3 class="mt-5">Danh Sách Người Dùng</h3>
    <div class="table-responsive mt-3">
      <table class="table table-striped">
        <thead class="table-dark">
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Password</th>
            <th>Email</th>
            <th>Role</th>
            <th>Trạng Thái</th>
            <th>Hành Động</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in users" :key="user.id">
            <td>{{ user.id }}</td>
            <td>{{ user.username }}</td>
            <td>{{ user.password }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.role ? "Admin" : "User" }}</td>
            <td>
              <span :class="user.isActive ? 'text-success' : 'text-danger'">
                {{ user.isActive ? "Đang Hoạt Động" : "Khóa" }}
              </span>
            </td>
            <td>
              <button class="btn btn-warning btn-sm" @click="loadFrom(index)">Sửa</button>
              <button
                class="btn btn-danger btn-sm"
                @click="deleteUser(user.id)"
              >
                Xóa
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const users = ref([]);
const formData = ref({
  id: "",
  username: "",
  password: "",
  email: "",
  role: false,
  isActive: true,
});

// Lấy danh sách người dùng từ server
const fetchUsers = async () => {
  try {
    const response = await axios.get(
      "http://localhost:8080/SOF3011Slide7/userapi/users"
    );
    users.value = response.data;
  } catch (error) {
    console.error("Lỗi khi gọi API:", error);
  }
};

// Tải dữ liệu người dùng lên form
const loadFrom = (index) => {
  if (index >= 0 && index < users.value.length) {
    formData.value = { ...users.value[index] };
  } else {
    console.error("Chỉ số không hợp lệ:", index);
  }
};

// Reset form về trạng thái ban đầu
const resetForm = () => {
  formData.value = {
    id: "",
    username: "",
    password: "",
    email: "",
    role: false,
    isActive: true,
  };
};

// Xóa người dùng
const deleteUser = async (id) => {
  if (confirm("Bạn có chắc chắn muốn xóa người dùng này?")) {
    try {
      await axios.delete(`http://localhost:8080/SOF3011Slide7/userapi/users/${id}`);
      alert("Xóa người dùng thành công!");
      fetchUsers();
    } catch (error) {
      console.error("Lỗi khi xóa:", error);
    }
  }
};

// Thêm hoặc cập nhật người dùng
const submitForm = async () => {
  if (!formData.value.id.trim()) {
    alert("ID không được để trống!");
    return;
  }

  if (!formData.value.username.trim()) {
    alert("Tên người dùng không được để trống!");
    return;
  }

  const existingUser = users.value.find((user) => user.id === formData.value.id);

  try {
    if (existingUser) {
      // Cập nhật
      await axios.put(
        `http://localhost:8080/SOF3011Slide7/userapi/users/${formData.value.id}`,
        formData.value
      );
      alert("Cập nhật người dùng thành công!");
    } else {
      // Thêm mới
      await axios.post(
        "http://localhost:8080/SOF3011Slide7/userapi/users",
        formData.value
      );
      alert("Thêm người dùng thành công!");
    }
    fetchUsers();
    resetForm();
  } catch (error) {
    console.error("Lỗi khi xử lý:", error);
  }
};

// Lấy danh sách người dùng khi khởi tạo
onMounted(fetchUsers);
</script>
