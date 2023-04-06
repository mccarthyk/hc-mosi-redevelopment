<script setup lang="ts"></script>

<template>
  <main
    :style="{
      '--grid-spacing-vertical': '1rem',
    }"
  >
    <section class="container">
      <h1
        :style="{
          textAlign: 'center',
        }"
      >
        Hillsborough County Seeks Master Developer to Redevelop 74-acre site in
        the heart of Tampa Bay's Innovation District
      </h1>

      <article data-theme="dark">
        <div
          class="grid"
          :style="{
            alignItems: 'center',
            justifyItems: 'center',
          }"
        >
          <div
            :style="{
              gridColumn: '1 / span 2',
            }"
          >
            <p>
              Hillsborough County has a historic opportunity to redevelop the
              site of the Museum of Science and Industry (MOSI) at 4801 Fowler
              Ave, Tampa, Florida. The County seeks a visionary development
              partner who will leverage the innovation that surrounds the site
              and the area's booming economy to create an urban, mixed-use hub
              for cutting-edge companies, sustainable living and community
              advancement.
            </p>
          </div>

          <img
            src="@/assets/undraw_urban_design_kpu8.svg"
            class="img-responsive img-fluid"
            :style="{
              backgroundImage:
                'radial-gradient(rgba(187,198,206,1), rgba(187,198,206,0.25), rgba(0,0,0,0))',
              borderRadius: '50%',
              padding: '1rem',
              maxWidth: '300px',
            }"
          />
        </div>

        <footer>
          <div class="grid">
            <a
              href="https://www.hillsboroughcounty.org/library/hillsborough/media-center/documents/procurement-services/rfps/mosi.pdf"
              target="_blank"
              role="button"
              class="contrast outline"
              >View the RFP</a
            >

            <a
              href="https://www.hillsboroughcounty.org/en/government/departments/procurement"
              target="_blank"
              role="button"
              class="contrast outline"
              >Contact Procurement Services</a
            >
          </div>
        </footer>
      </article>

      <div
        class="grid"
        :style="{
          alignItems: 'center',
        }"
      >
        <div>
          <p>
            The property sits within an urban area known as the Innovation
            District which is anchored by the University of South Florida - a
            preeminent research university - and is adjacent to many of Tampa
            Bay's largest and most influential institutions.
          </p>
        </div>

        <Video youtube-id="cMcTLMW-HCs"></Video>
      </div>
    </section>
  </main>
</template>
