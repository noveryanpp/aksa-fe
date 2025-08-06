<script setup lang="ts">

</script>

<template>
  <div class="container">
    <Navbar />
    <main>
      <slot />
    </main>
    <Footer />
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  main {
    flex: 1;
    width: 100%;
  }
}

</style>
