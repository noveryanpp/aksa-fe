<template>
  <div
      class="button"
      :class="type || 'solid'"
      @click="onClick"
      :style="`font-size: ${size}px;`">
    <slot/>
  </div>
</template>

<script setup lang="ts">
interface ButtonProps {
  onClick?: () => void;
  size?: number;
  type?: 'solid' | 'outline';
}

defineProps<ButtonProps>();
</script>

<style scoped lang="scss">
.button {
  display: inline-block;
  padding: 8px 28px;
  border: none;
  border-radius: 16px;
  cursor: pointer;
  font-weight: 600;
  text-align: center;
  transition:
      background-position 0.3s ease,
      transform 0.3s ease-in-out,
      color 0.3s ease;

  &.solid {
    background: linear-gradient(90deg, $blue-300 0%, $blue-100 50%, $blue-100 50%, $blue-300 100%);
    background-size: 200% 100%;
    color: white;
    animation: gradientBoost 2s ease infinite;
    animation-play-state: paused;

    &:hover {
      animation-play-state: running;
      animation: gradientBoost 2s ease infinite;
    }
  }

  &.outline {
    background: linear-gradient(90deg, $blue-100 0%, $blue-100 50%, transparent  50%, transparent 100%);
    background-size: 200% 100%;
    background-position: 100% 50%;
    box-shadow: inset 0 0 0 3px $blue-100;
    color: $blue-100;

    &:hover {
      background-position: 0% 50%;
      color: white;
    }
  }
}

@keyframes gradientBoost {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>