<template>
     <h5 class="text-left">Quên Mật Khẩu</h5>
          <div class="card p-2">
            <form action="">
              <div class="mb-3">
                <label for="" class="form-label">Email</label>
                <input
                  type="email"
                  class="form-control"
                  name=""
                  id=""
                  aria-describedby="emailHelpId"
                  placeholder="nhập email đã đăng ký"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="" class="form-label">Mã Xác Nhận</label>
                <input
                  type="password"
                  class="form-control"
                  name=""
                  id=""
                  placeholder="Nhập Mã Xác Nhận"
                  required
                />
              </div>
              <RouterLink to="/chuaco" class="btn btn-primary mt-3">
                Submit
              </RouterLink>
            </form>
          </div>
</template>