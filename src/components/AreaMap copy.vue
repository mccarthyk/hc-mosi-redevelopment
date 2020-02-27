<template>
  <section class="pb-5 bg-white map-area">
    <div class="container">
      <div class="row mb-5">
        <!--  -->
        <div class="col-md-7">
          <div class="embed-responsive embed-responsive-4by3">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3521.0447836590542!2d-82.4081588836949!3d28.053657182649705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2c7cf5b3da1ab%3A0x893a7dbee70e0852!2sMuseum%20Of%20Science%20%26%20Industry!5e0!3m2!1sen!2sus!4v1582567802041!5m2!1sen!2sus"
              class="embed-responsive-item"
              frameborder="0"
              style="border:0;"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <!--  -->
        <div class="col-md-5 map-description align-self-end">
          <p
            class="lead"
          >The MOSI property sits within a portion of Tampa known as the University Area and is adjacent to many of Tampa’s largest and most influential institutions.</p>
        </div>
      </div>

      <!--  -->
      <PointsOfInterest />
    </div>
  </section>
</template>

<script>
import PointsOfInterest from '@/components/PointsOfInterest'

export default {
  components: {
    PointsOfInterest
  }
}
</script>
