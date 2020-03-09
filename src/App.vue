<template>
  <main id="app">
    <!--  -->
    <VideoHeader youtube-id="8yhT-VIIe2Y">
      <div class="p-5 text-center text-dark" :style="{ background: 'rgba(255,255,255,0.85)' }">
        <h1 class="display-1 tagline">Develop in the Center of Innovation</h1>
      </div>
    </VideoHeader>

    <!--  -->
    <HomeBanner />

    <!--  -->
    <HomeCards />

    <!--  -->
    <Video youtube-id="cMcTLMW-HCs" class="py-5" container />
    <!-- <Video youtube-id="3Ev3czmj3Ns" class="py-5" /> -->

    <!--  -->
    <h2
      id="university-area"
      class="display-2 bg-dark m-0 py-5 text-center text-light"
    >Innovation District Context</h2>
    <AreaMap aria-labelledby="university-area" />

    <!--  -->
    <PointsOfInterest />

    <!--  -->
    <AboutTampa youtube-id="0sSfb6QJNrw" />

    <!--  -->
    <Resources />
  </main>
</template>

<script>
import VideoHeader from '@/components/VideoHeader'
import HomeBanner from '@/components/HomeBanner'
import HomeCards from '@/components/HomeCards'
import Video from '@/components/Video'
import AreaMap from '@/components/AreaMap'
import PointsOfInterest from '@/components/PointsOfInterest'
import AboutTampa from '@/components/AboutTampa'
import Resources from '@/components/Resources'

export default {
  created() {
    this.removeHcFixesStyles()
  },
  components: {
    VideoHeader,
    HomeBanner,
    HomeCards,
    Video,
    AreaMap,
    PointsOfInterest,
    AboutTampa,
    Resources
  },
  methods: {
    removeHcFixesStyles() {
      try {
        const fixesStylesheet = document.querySelectorAll(
          '[href*="fixes.css"]'
        )[0]
        fixesStylesheet.disabled = true
        fixesStylesheet.parentNode.removeChild(fixesStylesheet)
      } catch (error) {
        // console.warn(error)
      }
    }
  }
}
</script>

<style lang="scss" src="@/assets/main.scss"></style>
