<template>
  <section class="industries-section">
    <div class="industries-container">
      <div class="industries-section">
        <h3 class="section-heading-1">Industries We Serve</h3>
        <div class="industries-grid">
          <div
            v-for="(industry, index) in industries"
            :key="index"
            class="industry-card"
          >
            <div class="industry-icon" :style="{ backgroundColor: industry.color }">
              <Icon :name="industry.icon" class="icon" />
            </div>
            <h5 class="industry-name">{{ industry.name }}</h5>
            <p class="industry-description">{{ industry.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const industries = [
  {
    name: 'Technology',
    description: 'Software companies, startups, and tech enterprises',
    icon: 'carbon:laptop',
    color: '#0097d7'
  },
  {
    name: 'Healthcare',
    description: 'Medical practices, hospitals, and health tech',
    icon: 'carbon:health-cross',
    color: '#ff1f1f'
  },
  {
    name: 'Finance',
    description: 'Banks, fintech, and financial services',
    icon: 'carbon:piggy-bank',
    color: '#118c4f'
  },
  {
    name: 'E-commerce',
    description: 'Online retailers and marketplace platforms',
    icon: 'carbon:shopping-cart',
    color: '#11234c'
  },
  {
    name: 'Education',
    description: 'Schools, universities, and EdTech companies',
    icon: 'carbon:education',
    color: '#f98129'
  },
  {
    name: 'Manufacturing',
    description: 'Industrial companies and supply chain',
    icon: 'carbon:factor',
    color: '#ffef00'
  }
];
</script>

<style scoped lang="scss">
.industries-section {
  background: $white;
  padding: 1rem 0 3rem 0;

  .industries-container {
    max-width: 1200px;
    margin: 0 auto;

    .section-heading-1 {
      text-align: center;
      color: $blue-400;
      margin-bottom: 20px;
      font-family: 'Poppins Devanagari', sans-serif;
    }

    .industries-section {
      .industries-title {
        font-size: 2rem;
        font-weight: 600;
        color: $blue-400;
        text-align: center;
        margin-bottom: 40px;
        font-family: 'Poppins Devanagari', sans-serif;
      }

      .industries-grid {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        gap: 20px;

        .industry-card {
          @extend %card-base;
          text-align: center;
          padding: 24px 16px;
          transition: all 0.3s ease;

          &:hover {
            transform: translateY(-4px);
            box-shadow: 0 6px 20px rgba($black, 0.12);
          }

          .industry-icon {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            margin: 0 auto 16px;
            display: flex;
            align-items: center;
            justify-content: center;

            .icon {
              font-size: 2rem;
              color: $white;
            }
          }

          .industry-name {
            font-size: 1rem;
            font-weight: 600;
            color: $blue-400;
            margin-bottom: 8px;
            font-family: 'Poppins Devanagari', sans-serif;
          }

          .industry-description {
            font-size: 0.8rem;
            line-height: 1.3;
            color: $blue-400;
            opacity: 0.7;
            margin: 0;
          }
        }
      }
    }
  }
}

@media (max-width: 1024px) {
  .industries-section .industries-container {
    .featured-case-study .featured-content {
      grid-template-columns: 1fr;
      gap: 30px;
    }

    .industries-grid {
      grid-template-columns: 1fr;
    }

    .industries-section .industries-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }
}

@media (max-width: 768px) {
  .industries-section {
    padding: 60px 20px;

    .industries-container {
      .featured-case-study .featured-content {
        padding: 24px;

        .featured-info .results-grid {
          grid-template-columns: 1fr;
          gap: 12px;
        }
      }

      .industries-section .industries-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 16px;
      }
    }
  }
}

@media (max-width: 480px) {
  .industries-section {
    padding: 40px 15px;

    .industries-container {
      .featured-case-study .featured-content {
        padding: 20px;
      }

      .industries-section .industries-grid {
        grid-template-columns: 1fr;
      }
    }
  }
}
</style>

