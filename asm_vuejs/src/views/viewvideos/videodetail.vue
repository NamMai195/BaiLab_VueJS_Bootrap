<template>
  <div class="row">
    <!-- Video chính -->
    <div class="col-8">
      <div class="card">
        <iframe
          class="card-img-top"
          height="500"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <div class="card-body">
          <h4 class="card-title">Nhạc Chill Nhạc Chill Nhạc Chill Nhạc Chill</h4>
          <p class="card-text">Nhạc Chill Chill</p>
        </div>
      </div>
    </div>

    <!-- Các video khác -->
    <div class="col-4">
      <h4>Các Video Khác</h4>
      <div class="list-group">
        <a
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          class="list-group-item list-group-item-action"
        >
          <iframe
            width="100%"
            height="120"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <p class="mt-2">Video Chill 1</p>
        </a>
        <a
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          class="list-group-item list-group-item-action"
        >
          <iframe
            width="100%"
            height="120"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <p class="mt-2">Video Chill 2</p>
        </a>
        <a
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          class="list-group-item list-group-item-action"
        >
          <iframe
            width="100%"
            height="120"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <p class="mt-2">Video Chill 3</p>
        </a>
      </div>
    </div>
  </div>
  <div
    class="fb-comments"
    data-href="https://yourwebsite.com/your-article"
    data-width="100%"
    data-numposts="5"
  ></div>
</template>

<script>
export default {
  name: "VideoPage",
};
</script>

<style scoped>
.card-img-top {
  border-radius: 10px;
}
.list-group-item {
  margin-bottom: 10px;
}
</style>
