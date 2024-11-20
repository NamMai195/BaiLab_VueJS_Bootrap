<template>
          <h5 class="text-left">Form Đăng Ký Thông Tin</h5>
          <div class="card p-2">
            <form action="">
              <div class="mb-3">
                <label for="" class="form-label">Họ Và Tên</label>
                <input
                  type="text"
                  class="form-control"
                  name=""
                  id=""
                  aria-describedby="helpId"
                  placeholder="Nhập họ và tên"
                />
              </div>
              <div class="mb-3">
                <label for="" class="form-label">Email</label>
                <input
                  type="email"
                  class="form-control"
                  name=""
                  id=""
                  aria-describedby="helpId"
                  placeholder="Nhập Email"
                />
              </div>

              <div class="mb-3">
                <label for="" class="form-label">Số Điện Thoại</label>
                <input
                  type="text"
                  class="form-control"
                  name=""
                  id=""
                  aria-describedby="helpId"
                  placeholder="Nhập Số Điện Thoại"
                />
              </div>

              <div class="mb-3">
                <label for="" class="form-label">Mật Khẩu</label>
                <input
                  type="password"
                  class="form-control"
                  name=""
                  id=""
                  aria-describedby="helpId"
                  placeholder="Nhập Mật Khẩu"
                />
              </div>

              <div class="mb-3">
                <label for="" class="form-label">Xác Nhận Mật Khẩu</label>
                <input
                  type="password"
                  class="form-control"
                  name=""
                  id=""
                  aria-describedby="helpId"
                  placeholder="Xác Nhận Mật Khẩu"
                />
              </div>

              <label class="form-check-label">Giới Tính:</label>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="gender" />

                <label class="form-check-label" for="male">Nam</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="gender" />

                <label class="form-check-label" for="female">Nữ</label>
              </div>

              <div class="mb-3">
                <label for="" class="form-label">Ngôn Ngữ</label>
                <select class="form-select form-select-lg" name="" id="">
                  <option selected>Tiếng Anh</option>
                  <option value="">Tiếng Việt</option>
                </select>
              </div>

              <div class="form-check">
                <label class="form-check-label">
                  <input
                    class="form-check-input"
                    name=""
                    id=""
                    type="checkbox"
                    value="checkedValue"
                    aria-label="Text for screen reader"
                  />
                  Tôi đồng ý với các điều khoản và điều kiện
                </label>
              </div>

              <button type="submit" class="btn btn-primary mt-3">
                Đăng Ký
              </button>
            </form>
          </div>
</template>