<template>
  <section class="bg-dark py-5" aria-labelledby="cards">
    <div class="container">
      <!--  -->
      <h2
        id="cards"
        class="display-2 text-center text-warning mt-5"
      >The Opportunity</h2>

      <!-- showcase -->
      <div class="d-md-flex flex-wrap align-items-stretch">
        <div v-for="(showcase, i) in showcases" :key="i" class="col-md-6 my-4">
          <div class="card bg-light rounded-0 h-100">
            <div class="embed-responsive embed-responsive-4by3">
              <div class="embed-responsive-item d-flex flex-column p-3">
                <img :src="showcase.imgSrc" alt class="img-fluid my-auto" />
              </div>
            </div>
            <div class="card-body">
              <h3 class="card-title text-lowercase text-capitalize font-weight-bold">{{ showcase.heading }}</h3>
              <p class="card-text">{{ showcase.text }}</p>
            </div>
          </div>
        </div>
      </div>

      <p class="text-center mt-5">
        <a
          href="https://www.hillsboroughcounty.org/library/hillsborough/media-center/documents/procurement-services/rfps/mosi.pdf"
          class="btn btn-lg btn-outline-warning text-capitalize display-4 px-5"
        >View the RFP Booklet</a>
      </p>
    </div>
  </section>
</template>

<script>
import * as img1 from '@/assets/redevelopment-coveted-location.png'
import * as img2 from '@/assets/redevelopment-growing-community.png'
import * as img3 from '@/assets/redevelopment-meds-eds.png'
import * as img4 from '@/assets/redevelopment-ride-wave.png'

export default {
  data: () => ({
    showcases: [
      {
        heading: 'A Coveted Location',
        text:
          'The approximately 74 acres is located on a major arterial roadway with high visibility, adjacent to the University of South Florida and connected by pedestrian bridge – just 2 miles from I-275 to the west and 3 miles from I-75 to the east.',
        imgSrc: img1.default
      },
      {
        heading: 'An Exciting, Growing Community',
        text:
          'Hillsborough County ranks 10th in the U.S. for population growth adding 27,000 new residents last year, leads the state in new STEM jobs and was ranked the No. 2 Best Community for Young Entrepreneurs (Forbes/Nerdwallet).',
        imgSrc: img2.default
      },
      {
        heading: 'Meds and Eds',
        text:
          'The redevelopment site is located in the heart of Tampa Bay’s Innovation District home to Moffitt Cancer Center, M2Gen, USF School of Medicine, James A. Haley V.A. Medical Center, Advent Health, Shriner’s Children’s Hospital, USF Research Park and nearly 50,000 USF students.',
        imgSrc: img3.default
      },
      {
        heading: 'Ride the Wave',
        text:
          'With plans for more than one billion dollars of investment by anchor institutions, the area is at the beginning of a sustained upcycle of redevelopment activity, offering a unique opportunity and a bright future.',
        imgSrc: img4.default
      }
    ]
  })
}
</script>
