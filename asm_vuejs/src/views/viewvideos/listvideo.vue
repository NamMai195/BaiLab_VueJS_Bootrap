<template>
  <div class="row">
    <h2 class="text-info mb-3">Video</h2>
    <div class="row">
      <div class="col-sm-6">
        <div class="card text-start">
          <router-link to="videodetail">
            <img class="card-img-top" src="@/images/video1.jpg" alt="Title"
          /></router-link>

          <div class="card-body">
            <h4 class="card-title">cncjndc</h4>
            <p class="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, nihil
              ducimus omnis quae porro impedit at nam eius, officiis asperiores suscipit,
              reiciendis incidunt repellendus? Doloremque ullam quae quibusdam sapiente
              nihil!
            </p>
          </div>
        </div>
        <div class="card text-start">
          <img class="card-img-top" src="@/images/video2.jpg" alt="Title" />
          <div class="card-body">
            <h4 class="card-title">csc</h4>
            <p class="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, nihil
              ducimus omnis quae porro impedit at nam eius, officiis asperiores suscipit,
              reiciendis incidunt repellendus? Doloremque ullam quae quibusdam sapiente
              nihil!
            </p>
          </div>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="card text-start">
          <img class="card-img-top" src="@/images/video3.jpg" alt="Title" />
          <div class="card-body">
            <h4 class="card-title">fvdfv</h4>
            <p class="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, nihil
              ducimus omnis quae porro impedit at nam eius, officiis asperiores suscipit,
              reiciendis incidunt repellendus? Doloremque ullam quae quibusdam sapiente
              nihil!
            </p>
          </div>
        </div>
        <div class="card text-start">
          <img class="card-img-top" src="@/images/video4.jpg" alt="Title" />
          <div class="card-body">
            <h4 class="card-title">svsv</h4>
            <p class="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, nihil
              ducimus omnis quae porro impedit at nam eius, officiis asperiores suscipit,
              reiciendis incidunt repellendus? Doloremque ullam quae quibusdam sapiente
              nihil
            </p>
          </div>
        </div>
      </div>
    </div>

    <nav aria-label="Page navigation">
      <ul class="pagination d-flex justify-content-center">
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <!-- Giả định có 10 trang -->
        <li class="page-item"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>
