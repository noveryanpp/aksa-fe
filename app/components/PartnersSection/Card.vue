<template>
  <div class="card">
    <div class="image"></div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.card {
  @extend %card-base;
  .image {
    width: 100%;
    aspect-ratio: 1 / 1;
    background: $gradient-200;
    border-radius: 8px;
  }
}
</style>