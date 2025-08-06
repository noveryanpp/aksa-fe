<template>
  <div class="fob-section">
    <div class="fob-content">
      <h1 class="section-heading-1">Family of Businesses</h1>
      <p class="section-subtitle">Discover the diverse portfolio of businesses under the Aksa Digital Group</p>

      <div class="card-container">
        <FOBSectionCard class="card-item" v-for="index in dummyLength" :key="index"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const dummyLength = 9;
</script>

<style scoped lang="scss">
.fob-section {
  display: flex;
  justify-content: center;
  padding: $section-padding;

  .fob-content {
    width: 1280px;

    .card-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 32px;
      padding: 0 64px;

      .card-item {
        flex: 0 0 item-width(5, 32px);
        box-sizing: border-box;
        background: transparent;
      }
    }
  }
}
</style>