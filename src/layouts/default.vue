<template>
  <main id="app" class>
    <nuxt />
  </main>
</template>

<script>
export default {
  created () {
    this.removeHcFixesStyles()
  },
  methods: {
    removeHcFixesStyles () {
      try {
        const fixesStylesheet = document.querySelectorAll(
          '[href*="fixes.css"]'
        )[0]
        fixesStylesheet.disabled = true
        fixesStylesheet.parentNode.removeChild(fixesStylesheet)
        console.log('removed')
      } catch (error) {
        console.warn(error)
      }
    }
  }
}
</script>

<style lang="scss" src="@/assets/main.scss"></style>
