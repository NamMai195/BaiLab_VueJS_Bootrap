<template>
  <div class="row">
    <div class="col-sm-4">
      <form @submit.prevent="isEditing ? updateStudent() : addStudent()">
        <h1>{{ isEditing ? "Sửa Học Sinh" : "Thêm Học Sinh" }}</h1>

        <div class="mb-3">
          <label>Họ và Tên:</label>
          <input
            type="text"
            class="form-control"
            v-model="Student.name"
            placeholder="Nhập họ và tên"
            required
          />
        </div>
        <div class="mb-3">
          <label>Điểm:</label>
          <input
            type="number"
            class="form-control"
            v-model="Student.score"
            placeholder="Nhập Điểm"
            min="0"
            max="10"
            required
          />
        </div>
        <div class="mb-3">
          <label>Ngày Sinh:</label>
          <input
            type="date"
            class="form-control"
            v-model="Student.dob"
            placeholder="Nhập Ngày Sinh"
            required
          />
        </div>
        <button type="submit" class="btn btn-success">
          {{ isEditing ? "Cập Nhật" : "Thêm" }}
        </button>
        <button
          type="button"
          class="btn btn-secondary"
          v-if="isEditing"
          @click="cancelEdit"
        >
          Hủy
        </button>
      </form>
    </div>
    <div class="col-sm-8">
      <h1>Danh Sách Học Sinh</h1>
      <div class="table-responsive">
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">Họ Và Tên</th>
              <th scope="col">Điểm</th>
              <th scope="col">Ngày Sinh</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(student, index) in students" :key="index">
              <td>{{ student.name }}</td>
              <td>{{ student.score }}</td>
              <td>{{ student.dob }}</td>
              <td>
                <button class="btn btn-warning" @click="editStudent(index)">
                  Sửa
                </button>
                <button class="btn btn-danger" @click="deleteStudent(index)">
                  Xóa
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// State quản lý danh sách học sinh
const students = ref([]);

// State quản lý học sinh mới
const Student = ref({
  name: "",
  score: null,
  dob: "",
});

// 
const isEditing = ref(false);
const editingIndex = ref(null);

// addddd 
function addStudent() {
  students.value.push({ ...Student.value });
  resetForm();
}

// Bắt đầu sửa học sinh
function editStudent(index) {
  isEditing.value = true;
  editingIndex.value = index;
  Student.value = { ...students.value[index] };
}

// Cập nhật học sinh
function updateStudent() {
  if (editingIndex.value !== null) {
    students.value[editingIndex.value] = { ...Student.value };
    resetForm();
  }
}

// Xóa học sinh
function deleteStudent(index) {
  students.value.splice(index, 1);
}

// Hủy sửa
function cancelEdit() {
  resetForm();
}

// Reset form
function resetForm() {
  Student.value = {
    name: "",
    score: null,
    dob: "",
  };
  isEditing.value = false;
  editingIndex.value = null;
}
</script>

