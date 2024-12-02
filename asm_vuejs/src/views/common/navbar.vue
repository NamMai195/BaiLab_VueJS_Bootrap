<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary sticky-top">
    <div class="container-fluid">
      <RouterLink class="navbar-brand" to="/">
        <img src="@/images/logo-energy-pilates.png" alt="Logo Energy Pilates" style="width: 150px" />
      </RouterLink>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <i class="bi bi-newspaper"></i> Nội dung
            </a>
            <ul class="dropdown-menu">
              <li>
                <router-link to="/post" class="dropdown-item">
                  <i class="bi bi-eye"></i> Xem bài viết
                </router-link>
              </li>
              <li v-show="isLoggedIn">
                <router-link to="/crudpost" class="dropdown-item">
                  <i class="bi bi-pencil-square"></i> Đăng bài
                </router-link>
              </li>
              <li><hr class="dropdown-divider"></li> 
              <li>
                <router-link to="/video" class="dropdown-item">
                  <i class="bi bi-play-btn"></i> Xem video
                </router-link>
              </li>
              <li v-show="isLoggedIn">
                <router-link to="/crudvideo" class="dropdown-item">
                  <i class="bi bi-cloud-upload"></i> Đăng video
                </router-link>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <router-link to="/info" class="nav-link active">
              <i class="bi bi-info-circle-fill"></i> Giới thiệu
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/chuaco" class="nav-link active">
              <i class="bi bi-calendar-event"></i> Sự kiện
            </router-link>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <i class="bi bi-person-circle" :class="{ 'text-success': isLoggedIn }"></i> 
              {{ isLoggedIn ? user.name : 'Tài khoản' }} 
            </a>
            <ul class="dropdown-menu">
              <li v-if="!isLoggedIn">
                <RouterLink class="dropdown-item" to="/login">Đăng nhập</RouterLink>
              </li>
              <li v-if="!isLoggedIn">
                <RouterLink class="dropdown-item" to="/fogot">Quên mật khẩu</RouterLink>
              </li>
              <li v-if="!isLoggedIn">
                <hr class="dropdown-divider" />
              </li>
              <li v-if="!isLoggedIn">
                <RouterLink class="dropdown-item" to="/register">Đăng ký thành viên</RouterLink>
              </li>
              <li v-if="isLoggedIn">
                <router-link to="/profile" class="dropdown-item"> 
                  <i class="bi bi-person-fill"></i> Thông tin cá nhân
                </router-link>
              </li>
              <li v-if="isLoggedIn">
                <a class="dropdown-item" href="#" @click="logout">
                  <i class="bi bi-box-arrow-right"></i> Đăng xuất
                </a>
              </li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <i class="bi bi-translate"></i> Ngôn ngữ
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Tiếng Anh</a></li>
              <li><a class="dropdown-item" href="#">Tiếng Việt</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      user: null,
    };
  },
  computed: {
    isLoggedIn() {
      return this.user !== null;
    },
  },
  created() {
    this.loadUserFromLocalStorage();
  },
  methods: {
    loadUserFromLocalStorage() {
      const token = localStorage.getItem("user");
      if (token) {
        this.user = JSON.parse(token);
        console.log(this.user.name);
      }
    },
    logout() {
      localStorage.removeItem("user");
      this.user = null;
      // Chuyển hướng đến trang đăng nhập (nếu cần)
      this.$router.push("/login");
    },
  },
  watch: {
    // Đặt watch ở đây
    $route(to, from) {
      this.loadUserFromLocalStorage();
    },
  },
};
</script>
