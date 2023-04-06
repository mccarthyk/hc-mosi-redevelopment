<script setup lang="ts">
const { preview } = useRoute().query

onBeforeMount(() => {
  try {
    const fixesStylesheet = document.querySelectorAll('[href*="fixes.css"]')[0]
    // fixesStylesheet.disabled = true
    fixesStylesheet.parentNode?.removeChild(fixesStylesheet)
  } catch (error) {
    // console.warn(error)
  }
})
</script>

<template>
  <NuxtPage />

  <Link
    v-if="preview || $dev"
    rel="stylesheet"
    href="https://www.hillsboroughcounty.org/assets/css/vendor?v=QID2bUIAtfWCxxWSwQ2j26PN-OBNmTBYAoJNGdkM9t81"
  />
  <Link
    v-if="preview || $dev"
    rel="stylesheet"
    href="https://www.hillsboroughcounty.org/assets/css/vendor?v=QID2bUIAtfWCxxWSwQ2j26PN-OBNmTBYAoJNGdkM9t81"
  />
</template>
