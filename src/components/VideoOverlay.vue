<template>
  <section class="text-white">
    <div class="embed-responsive embed-responsive-16by9">
      <iframe
        frameborder="0"
        class="embed-responsive-item"
        src="https://youtube.com/embed/7d5zBph8-S0?loop=1&mute=1&autoplay=1&controls=0&autohide=1&modestbranding=1&rel=0&playlist=7d5zBph8-S0"
      ></iframe>
      <div style="position: absolute; top: 0; bottom: 0; left: 0; right: 0;">
        <div class="d-flex h-100">
          <div class="container my-auto">
            <slot>
              <!-- <p class="h1 text-white text-center my-5" :style="{ fontSize: '120px', textShadow: '2px 2px #000' }">Tag line</p> -->
            </slot>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import videoMixin from '@/mixins/video'

export default {
  mixins: [videoMixin]
}
</script>
