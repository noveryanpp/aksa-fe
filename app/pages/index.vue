<template>
  <div class="landing-page">
    <Hero />

    <AboutUsSection />

    <ServicesSection />

    <FOBSection />

    <IndustriesSection />

    <PortfoliosSection />

    <PartnersSection />

    <CTASection />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Aksa Digital Group - We Build as Business, Not a Startup',
  meta: [
    {
      name: 'description',
      content: 'Aksa Digital Group is a leading business conglomerate offering comprehensive services including web development, mobile apps, digital marketing, and innovative solutions.'
    },
    {
      property: 'og:title',
      content: 'Aksa Digital Group - We Build a Business, Not a Startup'
    },
    {
      property: 'og:description',
      content: 'Comprehensive business solutions from web development to digital marketing and beyond.'
    }
  ]
})
</script>

<style scoped lang="scss">
.landing-page {
  width: 100%;
  overflow-x: hidden;
}
</style>