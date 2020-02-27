<template>
  <section class="bg-dark py-5" aria-labelledby="cards">
    <div class="container">
      <!--  -->
      <h2
        id="cards"
        class="display-2 text-center text-warning mt-5"
      >Museum of Science and Industry Complex</h2>

      <!-- showcase -->
      <div class="row align-items-stretch">
        <div v-for="(showcase, i) in showcases" :key="i" class="col-md-6 my-4">
          <div class="card bg-light rounded-0 h-100">
            <div class="embed-responsive embed-responsive-4by3">
              <div class="embed-responsive-item d-flex flex-column p-3">
                <img :src="showcase.imgSrc" alt class="img-fluid my-auto" />
              </div>
            </div>
            <div class="card-body">
              <h3 class="card-title text-lowercase text-capitalize">{{ showcase.heading }}</h3>
              <p class="card-text">{{ showcase.text }}</p>
            </div>
          </div>
        </div>
      </div>

      <p class="text-center mt-5">
        <a
          href="booklet.pdf"
          class="btn btn-lg btn-outline-warning text-capitalize display-4 px-5"
        >View the RFP Booklet</a>
      </p>
    </div>
  </section>
</template>

<script>
import * as img1 from '@/assets/undraw_best_place_r685.svg'
import * as img2 from '@/assets/undraw_town_r6pc.svg'
import * as img3 from '@/assets/undraw_city_girl_ccpd.svg'
import * as img4 from '@/assets/undraw_professor_8lrt.svg'

export default {
  data: () => ({
    showcases: [
      {
        heading: 'Available for Immediate Redevelopment',
        text:
          'The approximately 74 acres is bounded by Fowler Avenue to the north, North 46th Street to the west, and North 50th Street to the east. A park with four softball fields bounds the property to the southeast, with commercial properties across the southwestern border.',
        imgSrc: img1.default
      },
      {
        heading: 'Heavy commercial and service uses',
        text:
          'Planned Development districts allow land uses that conform with the future land use element of the Tampa Comprehensive Plan while encouraging maximum land development opportunities and well-designed developments.',
        imgSrc: img2.default
      },
      {
        heading: 'Economic Development Overlay District',
        text:
          'As part of the City of Tampa 2040 Comprehensive Plan Update, the MOSI site and surrounding property are designated as being within an Economic Development Overlay District. ',
        imgSrc: img3.default
      },
      {
        heading: 'University Area',
        text:
          'With plans for more than one billion dollars of investment, the University Area seems to be at the beginning of a redevelopment cycle, with a variety of real estate development projects in the pipeline or planning stages.',
        imgSrc: img4.default
      }
    ]
  })
}
</script>
