<template>
  <section>
    <div class="embed-responsive embed-responsive-16by9">
      <iframe frameborder="0" class="embed-responsive-item" :src="embedSrc"></iframe>

      <div style="position: absolute; top: 0; bottom: 0; left: 0; right: 0;">
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
import videoMixin from '@/mixins/video'

export default {
  mixins: [videoMixin]
}
</script>
