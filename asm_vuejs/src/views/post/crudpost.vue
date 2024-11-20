<template>
      <nav>
      <div class="nav nav-tabs" id="nav-tab" role="tablist">
        <button
          class="nav-link active"
          id="nav-home-tab"
          data-bs-toggle="tab"
          data-bs-target="#nav-home"
          type="button"
          role="tab"
          aria-controls="nav-home"
          aria-selected="true"
        >
          Đăng Bài
        </button>
        <button
          class="nav-link"
          id="nav-profile-tab"
          data-bs-toggle="tab"
          data-bs-target="#nav-profile"
          type="button"
          role="tab"
          aria-controls="nav-profile"
          aria-selected="false"
        >
          Danh Sách Bài Viết Đã Đăng
        </button>
      </div>
    </nav>
    <div class="tab-content" id="nav-tabContent">
      <div
        class="tab-pane fade show active card"
        id="nav-home"
        role="tabpanel"
        aria-labelledby="nav-home-tab"
        tabindex="0"
      >
        <h5 class="text-left">Form Đăng Bài</h5>
        <div class="card">
          <form action="">
            <div class="mb-3">
              <label for="" class="form-label">Title</label>
              <input
                type="text"
                class="form-control"
                name="fullName"
                id="fullName"
                placeholder="Nhập tiêu đề bài"
                required
              />
            </div>

            <div class="mb-3">
              <label for="" class="form-label">Nội Dung Bài Viết</label>
              <textarea
                type="email"
                class="form-control"
                name="email"
                id="email"
                placeholder="nội dung bài viết"
                required
              />
            </div>
            <label class="form-check-label">Hình Ảnh</label>
            <div class="form-check form-check-inline">
              <input
                type="file"
                required
              />  
            </div>


            <div class="form-check">
              <label class="form-check-label">
                <input
                  class="form-check-input"
                  type="checkbox"
                  name="terms"
                  id="terms"
                  value="checkedValue"
                  required
                />
                Tôi đồng ý với các điều khoản và điều kiện
              </label>
            </div>

            <button type="submit" class="btn btn-primary mt-3">Đăng Ký</button>
          </form>
        </div>
      </div>
      <div
        class="tab-pane fade"
        id="nav-profile"
        role="tabpanel"
        aria-labelledby="nav-profile-tab"
        tabindex="0"
      >
        <h5 class="text-left">Bài Viết Đã Đăng</h5>
       <div
        class="table-responsive"
       >
        <table
            class="table table-primary"
        >
            <thead>
                <tr>
                    <th scope="col">Tiêu Đề</th>
                    <th scope="col">Content</th>
                    <th scope="col">Views</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr class="">
                    <td scope="row">Bài Viết 1</td>
                    <td>Đây là nội dung bài viết 1</td>
                    <td>10</td>
                    <td><button class="bg-warning">Detail</button> <button class="bg-danger">delete</button></td>
                </tr>
                <tr class="">
                    <td scope="row">Bài Viết 2</td>
                    <td>Đây là nội dung bài viết 2</td>
                    <td>15</td>
                    <td><button class="bg-warning">Detail</button> <button class="bg-danger">delete</button></td>
                </tr>
              
            </tbody>
        </table>
       </div>
       
      </div>
    </div>
</template>