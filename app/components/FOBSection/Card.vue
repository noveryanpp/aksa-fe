<template>
  <div class="card-wrapper">
    <div class="card">
      <div class="image-placeholder">
      </div>
    </div>
    <div class="card-info">
      Additional information here okay im very okay with this text being long and wrapping around. This is a test of the card info section.
    </div>
  </div>
</template>

<style scoped lang="scss">
.card-wrapper {
  position: relative;
  .card {
    @extend %card-base;
    position: relative;
    transition: border-radius 0.2s, z-index 0s;
    z-index: 1;
    &:hover {
      box-shadow: none;
      border-bottom: none;
      border-radius: 16px 16px 0 0;
      z-index: 10;
    }
    .image-placeholder {
      width: 100%;
      height: 85px;
      background: $gradient-200;
      border-radius: 8px;
      position: relative;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      color: #666;
    }
  }
  .card-info {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.2s, top 0.2s;
    transform: translateY(-1px);
    background: $gradient-100;
    border-radius: 0 0 8px 8px;
    border: 1px solid $gray-200;
    border-top: none;
    box-shadow: 0 8px 16px -5px rgba(0,0,0,0.15);
    padding: 1rem;
    z-index: 5;
  }

  &:hover .card-info {
    opacity: 1;
    pointer-events: auto;
    top: 100%;
  }
}
</style>
<script setup lang="ts">
</script>