<template>
  <section class="portfolios-section">
    <div class="portfolios-container">
      <h2 class="section-heading-1">Our Portfolio</h2>
      <p class="section-subtitle">Showcasing successful projects and satisfied clients across various industries</p>

      <div class="card-container">
        <div
          v-for="(portfolio, index) in portfolios"
          :key="index"
          class="item-card"
        >
          <div class="portfolio-logo">
            <div class="logo-placeholder">
            </div>
          </div>
          <div class="portfolio-info">
            <h3 class="client-name" :class="{ 'long-name': portfolio.name.length > 25 }">
              {{ portfolio.name }}
            </h3>
            <p class="project-type">{{ portfolio.type }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const portfolios = [
  { name: 'TechCorp Solutions', initials: 'TC', type: 'Web Development', color: '#0097d7' },
  { name: 'Global Finance Ltd', initials: 'GF', type: 'Fintech App', color: '#0057ad' },
  { name: 'EcoGreen Industries', initials: 'EG', type: 'E-commerce', color: '#114ba8' },
  { name: 'HealthCare Plus', initials: 'HC', type: 'Healthcare System', color: '#11234c' },
  { name: 'EduTech Academy', initials: 'EA', type: 'Learning Platform', color: '#0097d7' },
  { name: 'RetailMax Chain', initials: 'RC', type: 'POS System', color: '#0057ad' },
  { name: 'StartupHub Accelerator', initials: 'SH', type: 'Business Platform', color: '#114ba8' },
  { name: 'FoodieExpress Delivery', initials: 'FE', type: 'Mobile App', color: '#11234c' },
  { name: 'AutoParts Direct', initials: 'AD', type: 'Inventory System', color: '#0097d7' },
  { name: 'MediaPro Studios', initials: 'MP', type: 'Content Management', color: '#0057ad' },
  { name: 'FitLife Wellness', initials: 'FL', type: 'Fitness App', color: '#114ba8' },
  { name: 'SmartHome Solutions', initials: 'SS', type: 'IoT Platform', color: '#11234c' },
  { name: 'TravelBooking Pro', initials: 'TB', type: 'Booking System', color: '#0097d7' },
  { name: 'CryptoTrader Hub', initials: 'CT', type: 'Trading Platform', color: '#0057ad' },
];
</script>

<style scoped lang="scss">
.portfolios-section {
  padding: $section-padding;
  background: $gradient-200;

  .portfolios-container {
    max-width: 1280px;
    margin: 0 auto;

    .section-heading-1 {
      text-align: center;
      color: $blue-400;
      margin-bottom: 20px;
      font-family: 'Poppins Devanagari', sans-serif;
    }

    .section-subtitle {
      text-align: center;
      color: $blue-400;
      opacity: 0.7;
      font-size: 1.1rem;
      margin-bottom: 60px;
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
    }

    .card-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 16px;

      .item-card {
        @extend %card-base;
        flex: 0 0 item-width(7, 16px);
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 16px;
        transition: all 0.3s ease;
        cursor: pointer;

        &:hover {
          transform: translateY(-8px);
          box-shadow: 0 8px 25px rgba($black, 0.15);
        }

        .portfolio-logo {
          width: 100%;
          aspect-ratio: 1 / 1;

          .logo-placeholder {
            width: 100%;
            height: 100%;
            background: $gradient-200;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;

            .logo-text {
              color: $white;
              font-weight: 700;
              font-size: 1.5rem;
              font-family: 'Poppins Devanagari', sans-serif;
            }
          }
        }

        .portfolio-info {
          text-align: center;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: start;

          .client-name {
            font-size: 0.85rem;
            font-weight: 600;
            color: $blue-400;
            margin-bottom: auto;
            line-height: 1.2;
            font-family: 'Poppins Devanagari', sans-serif;

            &.long-name {
              font-size: 0.7rem;
              line-height: 1.1;
            }
          }

          .project-type {
            font-size: 0.65rem;
            color: $blue-400;
            opacity: 0.6;
            margin: 8px 0 0 0;
          }
        }
      }
    }
  }
}

@media (max-width: 1200px) {
  .portfolios-section .portfolios-container .portfolios-grid {
    grid-template-columns: repeat(6, 1fr);
  }
}

@media (max-width: 1024px) {
  .portfolios-section .portfolios-container .portfolios-grid {
    grid-template-columns: repeat(5, 1fr);
  }
}

@media (max-width: 768px) {
  .portfolios-section {
    padding: 60px 20px;

    .portfolios-container .portfolios-grid {
      grid-template-columns: repeat(3, 1fr);
      gap: 16px;
    }
  }
}

@media (max-width: 480px) {
  .portfolios-section {
    padding: 40px 15px;

    .portfolios-container .portfolios-grid {
      grid-template-columns: repeat(2, 1fr);

      .portfolio-card {
        width: 120px;
        height: 180px;
        padding: 12px;

        .portfolio-logo {
          width: 60px;
          height: 60px;

          .logo-placeholder .logo-text {
            font-size: 1.2rem;
          }
        }
      }
    }
  }
}
</style>