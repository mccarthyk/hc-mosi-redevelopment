<template>
  <section class="py-5 bg-white">
    <div class="container">
      <ul class="list-group">
        <li v-for="poi in pois" :key="poi.name" class="list-group-item rounded-0 p-5">
          <div class="d-flex align-items-center">
            <div class="p-5">
              <i
                class="fa fa-map-marker text-primary"
                :style="{ fontSize: '4em' }"
                aria-hidden="true"
              ></i>
            </div>
            <div>
              <p class="h2">{{ poi.name }}</p>
              <p v-html="poi.excerpt"></p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    pois: [
      {
        name: 'University of South Florida',
        excerpt:
          'The University of South Florida is ranked in the top 10 in the nation for patent production asserting its status as a top research university. A $40 million Indoor Athletic Facility bordering Fowler Avenue with a 40,000-seat, approximately $200 million football stadium.'
      },
      {
        name: 'Moffitt Cancer Center',
        excerpt:
          'Announced a 10-year, $800 million expansion project in 2016. Recently acquired an industrial property (10901 McKinley Drive) directly across from its M2Gen facility.'
      },
      {
        name: 'AdventHealth Tampa (Florida Hospital)',
        excerpt:
          'Plans for $300 million of investment at the corner of Bruce B. Downs Boulevard and East Fletcher Avenue.'
      },
      {
        name: 'James A. Haley Veterans Hospital',
        excerpt:
          'Kicked off a three-year, $148.6 million expansion project in August 2018.'
      },
      {
        name: 'Uptown (former University Mall)',
        excerpt:
          'Purchased by RD Management in 2014. RD Management has announced plans for $1 billion of investment to convert the site to a mixed-use district.'
      },
      {
        name: 'Yuengling Tampa Brewery',
        excerpt:
          'The Yuengling family is exploring plans to expand its current operation to include an entertainment destination with a restaurant, retail and hospitality offerings.'
      }
    ]
  })
}
</script>
