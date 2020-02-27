<template>
  <section class="bg-dark">
    <div :class="container ? 'container' : null">
      <div class="embed-responsive embed-responsive-16by9">
        <iframe frameborder="0" class="embed-responsive-item" :src="embedSrc"></iframe>
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
