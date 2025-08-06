<template>
  <div class="card">
    <Icon class="card-icon" name="carbon:3d-print-mesh" />
    <span class="card-text">
      {{ service }}
    </span>
  </div>
</template>

<style scoped lang="scss">
.card {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  .card-icon {
    width: 24px;
    height: 24px;
  }
  .card-text {
    font-size: 1.2rem;
    white-space: nowrap;
    font-weight: 500;
  }
}
</style>

<script setup lang="ts">
defineProps({
  service: {
    type: String,
    required: true
  }
})
</script>