<template>
  <section aria-labelledby="resources" class="py-5 bg-info text-white">
    <div class="container">
      <h2 id="resources" class="display-4">Additional Resources</h2>

      <nav class="nav row border-top border-white">
        <a
          v-for="(link, i) in links"
          :key="i"
          :href="link.src"
          class="col-md-6 nav-link text-white"
          :target="link.target || '_blank'"
        >
          <div class="border-bottom border-white my-auto p-3">{{ link.text }}</div>
        </a>
      </nav>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    links: [
      {
        text: 'Request for Master Developer Qualifications/Proposals Booklet',
        src: 'booklet.pdf',
        target: undefined
      },
      {
        text: 'Tampa Planning, Design & Development Coordination',
        src: 'https://www.tampagov.net/PDDC',
        target: undefined
      },
      {
        text: 'Contact Hillsborough County Procurement Services',
        src: 'tel:8133017087',
        target: undefined
      }
    ]
  })
}
</script>
