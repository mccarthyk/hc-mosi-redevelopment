export default {
  props: {
    youtubeId: {
      type: String,
      required: true
    },
    container: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    embedSrc () {
      return `https://youtube.com/embed/${this.youtubeId}?loop=1&mute=1&autoplay=1&controls=0&autohide=1&modestbranding=1&rel=0&playlist=${this.youtubeId}`
    }
  }
}
