<template>
  <div class="hero-section">
    <div class="hero-background">
      <ParticlesBackground />
    </div>
    <div class="hero-content">
      <Logo class="hero-logo"/>
      <div class="hero-heading">
        <h1>We Build a Business,</h1>
        <h1>Not a Startup</h1>
      </div>
      <div class="cta-buttons">
        <AnimatedButton :size="20" >Learn More</AnimatedButton>
        <AnimatedButton :size="20" type="outline">Contact Us</AnimatedButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.hero-section {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;

  .hero-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-color: #fff;
  }

  .hero-content {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    text-align: center;
    color: #333;
    gap: 2rem;

    .hero-logo {
      width: 300px;
    }

    .hero-heading {
      display: flex;
      flex-direction: column;

      h1 {
        font-size: 5rem;
        font-weight: 400;
        margin: 0;
        line-height: 1.2;
        color: #11234c;
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }
    }

    .cta-buttons {
      display: flex;
      gap: 2rem;
    }
  }
}

@media (max-width: 768px) {
  .hero-section .hero-content {
    .hero-logo {
      width: 150px;
    }

    .hero-heading h1 {
      font-size: 3.5rem;
    }

    .cta-buttons {
      flex-direction: column;
      align-items: center;
      gap: 1rem;
    }
  }
}

@media (max-width: 480px) {
  .hero-section .hero-content {
    .hero-logo {
      width: 120px;
    }

    .hero-heading h1 {
      font-size: 2.5rem;
    }
  }
}
</style>
