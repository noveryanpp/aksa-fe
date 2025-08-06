<script setup lang="ts">
import { ref } from 'vue';

const isOpen = ref(false);

defineProps({
  size: {
    type: Number,
    default: 24
  },
});
</script>

<template>
  <div class="menu-button" @click="isOpen = !isOpen" :style="`width: ${size}px; height: ${size}px;`">
    <span :class="['bar', isOpen ? 'open' : '']"></span>
    <span :class="['bar', isOpen ? 'open' : '']"></span>
  </div>
</template>

<style scoped lang="scss">
.menu-button {
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  .bar {
    width: 100%;
    position: absolute;
    height: 2px;
    border-radius: 2px;
    background-color: $black;
    top: 35%;
    transition: .3s ease-in-out;
    &:nth-child(1) {
      top: 65%;
    }
  }
  .bar.open {
    width: 100%;
    position: absolute;
    height: 2px;
    border-radius: 2px;
    background-color: $black;
    top: 45%;
    transform: rotate(45deg);
    &:nth-child(1) {
      top: 45%;
      transform: rotate(-45deg);
    }
  }
}
</style>
