<script setup lang="ts"></script>

<template>
  <main>
    <!-- <NuxtLayout></NuxtLayout> -->

    <VideoHeader youtube-id="8yhT-VIIe2Y">
      <div
        class="p-5 text-center text-dark"
        :style="{ background: 'rgba(255,255,255,0.85)' }"
      >
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
    >
      Innovation District Context
    </h2>
    <AreaMap aria-labelledby="university-area" />

    <!--  -->
    <PointsOfInterest />

    <!--  -->
    <AboutTampa youtube-id="0sSfb6QJNrw" />

    <!--  -->
    <Resources />
  </main>
</template>
