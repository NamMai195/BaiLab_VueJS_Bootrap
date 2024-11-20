<script setup>
import slider from "./common/slider.vue"
</script>

<template>
    <slider></slider>
    <section class="container mt-4">
        <h2 class="text-info mb-4">Blog Xu Hướng</h2>
        <div class="row">
            <!-- Blog card 1 -->
            <div class="col-md-6 mb-4">
                <div class="card">
                    <img src="@/images/tap-piltes.jpg" alt="lỗi" class="card-img-top" />
                    <div class="card-body">
                        <h5 class="card-title">
                            Phương pháp tập Pilates giúp phục hồi chấn thương cột sống
                            <i class="bi bi-chat-left-fill"></i> 16
                        </h5>
                        <p class="card-text">
                            Ngoài việc giúp duy trì vóc dáng, cải thiện sự linh hoạt, dẻo
                            dai cho người tập, Pilates giúp cơ bắp và các khớp mọc dài
                            hơn, kéo giãn hơn...
                        </p>
                    </div>
                </div>
            </div>

            <!-- Blog card 2 -->
            <div class="col-md-6 mb-4">
                <div class="list-group">
                    <a href="#" class="list-group-item list-group-item-action">
                        <div class="d-flex">
                            <div class="col-4">
                                <img
                                    src="@/images/corevalue.jpg"
                                    alt="biết ơn đời"
                                    class="rounded-circle mx-auto d-block"
                                    style="width: 60px; height: 60px; object-fit: cover"
                                />
                            </div>
                            <div class="col-8">
                                <h6 class="mb-0">Biết ơn đời, đời sẽ thương ta</h6>
                                <span class="text-muted">
                                    <i class="bi bi-chat-fill"></i> 30
                                </span>
                            </div>
                        </div>
                    </a>

                    <a href="#" class="list-group-item list-group-item-action">
                        <div class="d-flex">
                            <div class="col-4">
                                <img
                                    src="@/images/orange_300x300.jpg"
                                    alt="quả cam"
                                    class="rounded-circle mx-auto d-block"
                                    style="width: 60px; height: 60px; object-fit: cover"
                                />
                            </div>
                            <div class="col-8">
                                <h6 class="mb-0">9 tác dụng tuyệt vời của quả cam</h6>
                                <span class="text-muted">
                                    <i class="bi bi-chat-fill"></i> 28
                                </span>
                            </div>
                        </div>
                    </a>

                    <a href="#" class="list-group-item list-group-item-action">
                        <div class="d-flex">
                            <div class="col-4">
                                <img
                                    src="@/images/sesameoil_300x300.jpg"
                                    alt="dầu dừa"
                                    class="rounded-circle mx-auto d-block"
                                    style="width: 60px; height: 60px; object-fit: cover"
                                />
                            </div>
                            <div class="col-8">
                                <h6 class="mb-0">10 công dụng bất ngờ từ dầu dừa</h6>
                                <span class="text-muted">
                                    <i class="bi bi-chat-fill"></i> 15
                                </span>
                            </div>
                        </div>
                    </a>

                    <a href="#" class="list-group-item list-group-item-action">
                        <div class="d-flex">
                            <div class="col-4">
                                <img
                                    src="@/images/spinach_300x300.jpg"
                                    alt="rau xanh"
                                    class="rounded-circle mx-auto d-block"
                                    style="width: 60px; height: 60px; object-fit: cover"
                                />
                            </div>
                            <div class="col-8">
                                <h6 class="mb-0">Tác dụng tuyệt vời của rau xanh</h6>
                                <span class="text-muted">
                                    <i class="bi bi-chat-fill"></i> 21
                                </span>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>

        <!-- Load More Button -->
        <div class="d-flex justify-content-center mt-3">
            <button class="btn btn-info text-white px-4">Xem thêm</button>
        </div>

        <h4 class="text-center text-info mt-5">VIDEO - ĐỪNG BỎ LỠ</h4>

        <div class="row">
            <!-- Video Card 1 -->
            <div class="col-sm-6 mb-4">
                <div class="card text-start">
                    <img class="card-img-top" src="@/images/video1.jpg" alt="Title" />
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
            </div>

            <!-- Video Card 2 -->
            <div class="col-sm-6 mb-4">
                <div class="card text-start">
                    <img class="card-img-top" src="@/images/video2.jpg" alt="Title" />
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
        </div>

        <div class="row">
            <!-- Video Card 3 -->
            <div class="col-sm-6 mb-4">
                <div class="card text-start">
                    <img class="card-img-top" src="@/images/video3.jpg" alt="Title" />
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
            </div>

            <!-- Video Card 4 -->
            <div class="col-sm-6 mb-4">
                <div class="card text-start">
                    <img class="card-img-top" src="@/images/video4.jpg" alt="Title" />
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

        <!-- Load More Button for Videos -->
        <div class="d-flex justify-content-center mt-3">
            <button class="btn btn-info text-white px-4">Xem thêm</button>
        </div>
    </section>
</template>

