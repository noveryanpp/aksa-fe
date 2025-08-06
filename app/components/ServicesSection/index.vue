<template>
  <div class="services-section">
    <div class="services-content">
      <h1 class="section-heading-1">Our Services</h1>
      <div class="card-marquee">
        <div class="card-container">
          <ServicesSectionCard
              class="card-item"
              v-for="(service, idx) in doubledServices"
              :key="'a' + idx"
              :service="service"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const services = [
  'Web Development',
  'Mobile App Development',
  'UI/UX Design',
  'SEO Optimization',
  'Cloud Solutions',
  'E-commerce Integration',
  'API Development',
  'Digital Marketing',
  'Brand Strategy',
  'Content Creation'
];

const doubledServices = [ ...services, ...services ];
</script>

<style scoped lang="scss">
.services-section {
  background: $gradient-300;
  display: flex;
  width: 100%;
  justify-content: center;

  .section-heading-1 {
    color: $white;
  }

  .services-content {
    width: 100%;
    color: $white;

    .card-marquee {
      overflow: hidden;
      width: 100%;
      padding-bottom: 48px;
    }

    .card-container {
      display: flex;
      gap: 2rem;
      animation: marquee-left 60s linear infinite;
      will-change: transform;

      .card-item {
        flex-grow: 1;
        justify-content: center;
        box-sizing: border-box;
      }
    }
  }
}

@keyframes marquee-left {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>