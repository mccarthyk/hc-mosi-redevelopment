<template>
  <section class="bg-dark pb-5 slide-up slide-up-light">
    <div class="container">
      <div class="d-lg-flex">
        <!--  -->
        <div class="col-lg-7">
          <div class="embed-responsive embed-responsive-16by9">
            <iframe
              class="embed-responsive-item"
              :src="`https://www.youtube.com/embed/${youtubeId}`"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <!--  -->
        <div class="col-lg-5 align-self-end slide-down text-light">
          <p
            class="lead"
          >The Tampa Bay area is among the most desirable cities in the Southeast United States. Money Magazine ranks it number one based on a robust job market, affordable property prices, and international aspirations.</p>
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
