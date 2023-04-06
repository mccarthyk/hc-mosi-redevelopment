<template>
  <section class="bg-dark">
    <div :class="container ? 'container' : null">
      <div class="embed-responsive embed-responsive-16by9">
        <iframe
          frameborder="0"
          class="embed-responsive-item"
          :src="embedSrc"
        ></iframe>
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
