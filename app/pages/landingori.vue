<script setup lang="ts">
import { ref } from 'vue';
useHead({
  title: 'Aksa Digital Group',
  meta: [
    { name: 'description', content: 'This is the home page of our application.' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ]
});

</script>

<template>
  <div class="container">
    <Hero />
    <ServicesSection />
    <FOBSection />
    <PortfoliosSection />
    <PartnersSection />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 64px;
  width: 100%;
  margin: 0 auto;
  padding-bottom: 64px;
}
</style>