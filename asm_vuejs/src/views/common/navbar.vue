<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary sticky-top">
    <div class="container-fluid">
      <RouterLink class="navbar-brand" to="/">
        <img
          src="@/images/logo-energy-pilates.png"
          alt="Logo Energy Pilates"
          style="width: 150px"
        />
      </RouterLink>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/post" class="nav-link active"
              ><i class="bi bi-list"></i> Bài viết</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/crudpost" class="nav-link active"
              ><i class="bi bi-list"></i>Đăng Bài</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/video" class="nav-link active"
              ><i class="bi bi-camera-video"></i> Video</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/info" class="nav-link active">
              <i class="bi bi-info-circle-fill"></i> Giới Thiệu</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/chuaco" class="nav-link active">
              <i class="bi bi-calendar-event"></i> Sự Kiện</router-link
            >
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              ><i class="bi bi-person-circle text-success"></i> Tài Khoản
            </a>
            <ul class="dropdown-menu">
              <li><RouterLink class="dropdown-item" to="/login">Đăng nhập</RouterLink>
              </li>
              <li><RouterLink class="dropdown-item" to="/fogot">Quên mật khẩu</RouterLink></li>
              <li>
                <hr class="dropdown-divider" />
              </li>
              <li>
                <RouterLink class="dropdown-item" to="/resgin">Đăng ký thành viên</RouterLink>
              </li>
            </ul>
          </li>
        </ul>
        <div class="d-flex">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="#">Tiếng Anh</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Tiếng Việt</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>
