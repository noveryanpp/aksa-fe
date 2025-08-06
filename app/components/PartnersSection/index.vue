<template>
  <div class="fob-section">
    <div class="fob-content">
      <h1 class="section-heading-1">Partners</h1>
      <div class="card-container">
        <div
          v-for="(partner, index) in partners"
          :key="index"
          class="partner-card"
        >
          <div class="partner-logo">
            <div class="logo-placeholder">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const partners = [
  { name: 'JetBrains', bgColor: '#000000', textColor: '#ffffff' },
  { name: 'Canva', bgColor: '#00C4CC', textColor: '#ffffff' },
  { name: 'Microsoft', bgColor: '#00BCF2', textColor: '#ffffff' },
  { name: 'Google', bgColor: '#4285F4', textColor: '#ffffff' },
  { name: 'Adobe', bgColor: '#FF0000', textColor: '#ffffff' },
  { name: 'Amazon', bgColor: '#FF9900', textColor: '#ffffff' },
  { name: 'Meta', bgColor: '#1877F2', textColor: '#ffffff' },
  { name: 'Apple', bgColor: '#000000', textColor: '#ffffff' },
  { name: 'Netflix', bgColor: '#E50914', textColor: '#ffffff' },
  { name: 'Spotify', bgColor: '#1DB954', textColor: '#ffffff' },
  { name: 'Slack', bgColor: '#4A154B', textColor: '#ffffff' },
  { name: 'Shopify', bgColor: '#96BF48', textColor: '#ffffff' },
  { name: 'Figma', bgColor: '#F24E1E', textColor: '#ffffff' },
  { name: 'Notion', bgColor: '#000000', textColor: '#ffffff' },
  { name: 'Discord', bgColor: '#5865F2', textColor: '#ffffff' },
  { name: 'GitHub', bgColor: '#181717', textColor: '#ffffff' },
  { name: 'Stripe', bgColor: '#635BFF', textColor: '#ffffff' },
  { name: 'Vercel', bgColor: '#000000', textColor: '#ffffff' }
];
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
      gap: 16px;

      .partner-card {
        @extend %card-base;
        flex: 0 0 item-width(9, 16px);
        box-sizing: border-box;
        display: flex;
        border-radius: 16px;
        box-shadow: 0 2px 8px rgba($black, 0.1);
        border: 1px solid $gray-200;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s ease;
        cursor: pointer;

        &:hover {
          transform: scale(1.05);
          box-shadow: 0 8px 25px rgba($black, 0.15);
        }

        .partner-logo {
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

            .partner-name {
              font-weight: 700;
              font-size: 0.9rem;
              text-align: center;
              font-family: 'Poppins Devanagari', sans-serif;
            }
          }
        }
      }
    }
  }
}

@media (max-width: 1200px) {
  .fob-section .fob-content .card-container {
    grid-template-columns: repeat(6, 1fr);
  }
}

@media (max-width: 960px) {
  .fob-section .fob-content .card-container {
    grid-template-columns: repeat(5, 1fr);

    .partner-card {
      width: 120px;
      height: 120px;
    }
  }
}

@media (max-width: 768px) {
  .fob-section {
    padding: 60px 20px;

    .fob-content .card-container {
      grid-template-columns: repeat(4, 1fr);
      gap: 14px;

      .partner-card {
        width: 100px;
        height: 100px;

        .partner-logo .logo-container .partner-name {
          font-size: 0.8rem;
        }
      }
    }
  }
}

@media (max-width: 480px) {
  .fob-section {
    padding: 40px 15px;

    .fob-content .card-container {
      grid-template-columns: repeat(3, 1fr);
      gap: 12px;

      .partner-card {
        width: 90px;
        height: 90px;

        .partner-logo .logo-container .partner-name {
          font-size: 0.7rem;
        }
      }
    }
  }
}
</style>