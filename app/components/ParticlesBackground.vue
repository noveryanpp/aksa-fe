<template>
  <client-only>
    <vue-particles
        id="tsparticles"
        :options="options"
        class="particles-background"
    />
  </client-only>
</template>

<script setup lang="ts">
import particlesConfig from '~/assets/particles.json';

const options = particlesConfig;
</script>

<style scoped lang="scss">
.particles-background {
  width: 100%;
  height: 100dvh;
  z-index: -1;
  background:
    radial-gradient(circle at bottom left, rgba($blue-300, 0.8) 0%, transparent 40%),
    radial-gradient(circle at top right, rgb($blue-100, 0.8) 0%, transparent 40%);
}
</style>