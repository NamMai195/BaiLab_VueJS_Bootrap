<template>
          <section class="row">
        <aside class="col-sm-4 p-5">
          <h2 class="text-info mb-3">Về Tôi</h2>
          <div class="card blog">
            <img src="@/images/avatar.png" alt="Avatar" class="card-img-top" />
            <div class="card-body">
              <h5 class="card-title">Giới thiệu bản thân</h5>
              <p class="card-text">
                Mai Văn Nam Tổ chức tư vấn sức khỏe quốc tế độc lập <br />
                Châm ngôn: Ta không được chọn nơi mình sinh ra, nhưng ta được
                chọn cách mình sẽ sống
              </p>
            </div>
          </div>
          <!-- Nav tabs -->
          <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="home-tab"
                data-bs-toggle="tab"
                data-bs-target="#home"
                type="button"
                role="tab"
                aria-controls="home"
                aria-selected="true"
              >
                <h4 class="text-info text-center mt-2">Đọc Nhiều</h4>
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#profile"
                type="button"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
              >
                <h4 class="text-info text-center mt-2">Xem Nhiều</h4>
              </button>
            </li>
          </ul>

          <!-- Tab panes -->
          <div class="tab-content">
            <div
              class="tab-pane active"
              id="home"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <div class="list-group">
                <a
                  href="#"
                  class="list-group-item list-group-item-action"
                  aria-current="true"
                >
                  <div class="d-flex">
                    <div class="col-4">
                      <img
                        src="@/images/corevalue.jpg"
                        alt="Biết ơn đời"
                        class="rounded mx-auto d-block"
                        style="width: 60px; height: 60px; object-fit: cover"
                      />
                    </div>
                    <div class="col-8">
                      <h6 class="mb-0">Biết ơn đời, đời sẽ thương ta</h6>
                      <span class="text-muted"
                        ><i class="bi bi-chat-fill"></i> 30</span
                      >
                    </div>
                  </div>
                </a>

                <a href="#" class="list-group-item list-group-item-action">
                  <div class="d-flex">
                    <div class="col-4">
                      <img
                        src="@/images/orange_300x300.jpg"
                        alt="Quả cam"
                        class="rounded mx-auto d-block"
                        style="width: 60px; height: 60px; object-fit: cover"
                      />
                    </div>
                    <div class="col-8">
                      <h6 class="mb-0">9 tác dụng tuyệt vời của quả cam</h6>
                      <span class="text-muted"
                        ><i class="bi bi-chat-fill"></i> 28</span
                      >
                    </div>
                  </div>
                </a>

                <a href="#" class="list-group-item list-group-item-action">
                  <div class="d-flex">
                    <div class="col-4">
                      <img
                        src="@/images/sesameoil_300x300.jpg"
                        alt="Dầu dừa"
                        class="rounded mx-auto d-block"
                        style="width: 60px; height: 60px; object-fit: cover"
                      />
                    </div>
                    <div class="col-8">
                      <h6 class="mb-0">10 công dụng bất ngờ từ dầu dừa</h6>
                      <span class="text-muted"
                        ><i class="bi bi-chat-fill"></i> 15</span
                      >
                    </div>
                  </div>
                </a>

                <a href="#" class="list-group-item list-group-item-action">
                  <div class="d-flex">
                    <div class="col-4">
                      <img
                        src="@/images/spinach_300x300.jpg"
                        alt="Rau xanh"
                        class="rounded mx-auto d-block"
                        style="width: 60px; height: 60px; object-fit: cover"
                      />
                    </div>
                    <div class="col-8">
                      <h6 class="mb-0">Tác dụng tuyệt vời của rau xanh</h6>
                      <span class="text-muted"
                        ><i class="bi bi-chat-fill"></i> 21</span
                      >
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              class="tab-pane"
              id="profile"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <div class="list-group">
                <a
                  href="#"
                  class="list-group-item list-group-item-action"
                  aria-current="true"
                >
                  <div class="d-flex">
                    <div class="col-4">
                      <img
                        src="@/images/corevalue.jpg"
                        alt="Biết ơn đời"
                        class="rounded mx-auto d-block"
                        style="width: 60px; height: 60px; object-fit: cover"
                      />
                    </div>
                    <div class="col-8">
                      <h6 class="mb-0">Biết ơn đời, đời sẽ thương ta</h6>
                      <span class="text-muted"
                        ><i class="bi bi-chat-fill"></i> 30</span
                      >
                    </div>
                  </div>
                </a>

                <a href="#" class="list-group-item list-group-item-action">
                  <div class="d-flex">
                    <div class="col-4">
                      <img
                        src="@/images/orange_300x300.jpg"
                        alt="Quả cam"
                        class="rounded mx-auto d-block"
                        style="width: 60px; height: 60px; object-fit: cover"
                      />
                    </div>
                    <div class="col-8">
                      <h6 class="mb-0">9 tác dụng tuyệt vời của quả cam</h6>
                      <span class="text-muted"
                        ><i class="bi bi-chat-fill"></i> 28</span
                      >
                    </div>
                  </div>
                </a>

                <a href="#" class="list-group-item list-group-item-action">
                  <div class="d-flex">
                    <div class="col-4">
                      <img
                        src="@/images/sesameoil_300x300.jpg"
                        alt="Dầu dừa"
                        class="rounded mx-auto d-block"
                        style="width: 60px; height: 60px; object-fit: cover"
                      />
                    </div>
                    <div class="col-8">
                      <h6 class="mb-0">10 công dụng bất ngờ từ dầu dừa</h6>
                      <span class="text-muted"
                        ><i class="bi bi-chat-fill"></i> 15</span
                      >
                    </div>
                  </div>
                </a>

                <a href="#" class="list-group-item list-group-item-action">
                  <div class="d-flex">
                    <div class="col-4">
                      <img
                        src="@/images/spinach_300x300.jpg"
                        alt="Rau xanh"
                        class="rounded mx-auto d-block"
                        style="width: 60px; height: 60px; object-fit: cover"
                      />
                    </div>
                    <div class="col-8">
                      <h6 class="mb-0">Tác tuyệt vời của rau xanh</h6>
                      <span class="text-muted"
                        ><i class="bi bi-chat-fill"></i> 21</span
                      >
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </aside>
        <article class="col-sm-8 p-5">
          <h2 class="text-info mb-3">Blog của tôi</h2>
          <div class="row">
            <div class="card blog col-6">
              <div class="card-body">
                <h5 class="card-title">
                  Phương pháp tập Pilates giúp phục hồi chấn thương cột sống
                  <i class="bi bi-chat-left-fill"></i>16
                </h5>
                <img src="@/images/tap-piltes.jpg" alt="lỗi" class="card-img" />
                <p class="card-text">
                  Ngoài việc giúp duy trì vóc dáng, cải thiện sự linh hoạt, dẻo
                  dai cho người tập, Pilates giúp cơ bắp và các khớp mọc dài
                  hơn, kéo giãn hơn...
                </p>
              </div>
            </div>
            <div class="card col-6">
              <div class="list-group">
                <a
                  href="#"
                  class="list-group-item list-group-item-action"
                  aria-current="true"
                >
                  <div class="d-flex">
                    <div class="col-4">
                      <img
                        src="@/images/corevalue.jpg"
                        alt="biết ơn đời"
                        class="rounded mx-auto d-block"
                        style="width: 60px; height: 60px; object-fit: cover"
                      />
                    </div>
                    <div class="col-8">
                      <h6 class="mb-0">Biết ơn đời, đời sẽ thương ta</h6>
                      <span class="text-muted"
                        ><i class="bi bi-chat-fill"></i> 30</span
                      >
                    </div>
                  </div>
                </a>

                <a href="#" class="list-group-item list-group-item-action">
                  <div class="d-flex">
                    <div class="col-4">
                      <img
                        src="@/images/orange_300x300.jpg"
                        alt="quả cam"
                        class="rounded mx-auto d-block"
                        style="width: 60px; height: 60px; object-fit: cover"
                      />
                    </div>
                    <div class="col-8">
                      <h6 class="mb-0">9 tác dụng tuyệt vời của quả cam</h6>
                      <span class="text-muted"
                        ><i class="bi bi-chat-fill"></i> 28</span
                      >
                    </div>
                  </div>
                </a>

                <a href="#" class="list-group-item list-group-item-action">
                  <div class="d-flex">
                    <div class="col-4">
                      <img
                        src="@/images/sesameoil_300x300.jpg"
                        alt="dầu dừa"
                        class="rounded mx-auto d-block"
                        style="width: 60px; height: 60px; object-fit: cover"
                      />
                    </div>
                    <div class="col-8">
                      <h6 class="mb-0">10 công dụng bất ngờ từ dầu dừa</h6>
                      <span class="text-muted"
                        ><i class="bi bi-chat-fill"></i> 15</span
                      >
                    </div>
                  </div>
                </a>

                <a href="#" class="list-group-item list-group-item-action">
                  <div class="d-flex">
                    <div class="col-4">
                      <img
                        src="@/images/spinach_300x300.jpg"
                        alt="rau xanh"
                        class="rounded mx-auto d-block"
                        style="width: 60px; height: 60px; object-fit: cover"
                      />
                    </div>
                    <div class="col-8">
                      <h6 class="mb-0">Tác dụng tuyệt vời của rau xanh</h6>
                      <span class="text-muted"
                        ><i class="bi bi-chat-fill"></i> 21</span
                      >
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div class="d-flex justify-content-center mt-3">
            <button class="btn btn-info text-white px-4">Xem thêm</button>
          </div>
          <h4 class="text-center text-info mt-2">VIDEO -ĐỪNG BỎ LỠ</h4>
          <div class="row">
            <div class="col-sm-6">
              <div class="card text-start">
                <img
                  class="card-img-top"
                  src="@/images/video1.jpg"
                  alt="Title"
                />
                <div class="card-body">
                  <h4 class="card-title">cncjndc</h4>
                  <p class="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Molestias, nihil ducimus omnis quae porro impedit at nam
                    eius, officiis asperiores suscipit, reiciendis incidunt
                    repellendus? Doloremque ullam quae quibusdam sapiente nihil!
                  </p>
                </div>
              </div>
              <div class="card text-start">
                <img
                  class="card-img-top"
                  src="@/images/video2.jpg"
                  alt="Title"
                />
                <div class="card-body">
                  <h4 class="card-title">csc</h4>
                  <p class="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Molestias, nihil ducimus omnis quae porro impedit at nam
                    eius, officiis asperiores suscipit, reiciendis incidunt
                    repellendus? Doloremque ullam quae quibusdam sapiente nihil!
                  </p>
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="card text-start">
                <img
                  class="card-img-top"
                  src="@/images/video3.jpg"
                  alt="Title"
                />
                <div class="card-body">
                  <h4 class="card-title">fvdfv</h4>
                  <p class="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Molestias, nihil ducimus omnis quae porro impedit at nam
                    eius, officiis asperiores suscipit, reiciendis incidunt
                    repellendus? Doloremque ullam quae quibusdam sapiente nihil!
                  </p>
                </div>
              </div>
              <div class="card text-start">
                <img
                  class="card-img-top"
                  src="@/images/video4.jpg"
                  alt="Title"
                />
                <div class="card-body">
                  <h4 class="card-title">svsv</h4>
                  <p class="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Molestias, nihil ducimus omnis quae porro impedit at nam
                    eius, officiis asperiores suscipit, reiciendis incidunt
                    repellendus? Doloremque ullam quae quibusdam sapiente nihil!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="d-flex justify-content-center mt-3">
            <button class="btn btn-info text-white px-4">Xem thêm</button>
          </div>
        </article>
      </section>
</template>