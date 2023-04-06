<template>
  <section>
    <div class="embed-responsive embed-responsive-16by9">
      <iframe
        frameborder="0"
        class="embed-responsive-item"
        :src="embedSrc"
      ></iframe>

      <div style="position: absolute; top: 0; bottom: 0; left: 0; right: 0">
        <div class="d-flex h-100">
          <div class="m-auto">
            <slot>
              <!-- <p
                class="h1 text-white text-center my-5"
                :style="{ fontSize: '120px', textShadow: '2px 2px #000' }"
              >Tag line</p>-->
            </slot>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    youtubeId: {
      type: String,
      required: true,
    },
    container: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    embedSrc() {
      return `https://youtube.com/embed/${this.youtubeId}?loop=1&mute=1&autoplay=1&controls=0&autohide=1&modestbranding=1&rel=0&playlist=${this.youtubeId}`
    },
  },
}
</script>
