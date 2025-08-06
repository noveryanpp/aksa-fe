<template>
  <section class="about-us-section">
    <div class="about-container">
      <div class="about-image">
        <img src="~/assets/images/companystock.jpg" alt="About Us Image" class="image-placeholder" />
      </div>
      <div class="about-content">
        <h2 class="section-heading-1">About Aksa Digital Group</h2>
        <div class="about-description">
          <p>
            At Aksa Digital Group, we don't just create startups – we build sustainable, thriving businesses that stand the test of time. With over a decade of experience in the industry, we've established ourselves as a leading conglomerate that transforms innovative ideas into profitable enterprises.
          </p>
          <p>
            Our approach combines strategic thinking, cutting-edge technology, and deep market understanding to deliver exceptional results for our clients and partners. We believe in building long-term relationships and creating value that extends beyond immediate gains.
          </p>
          <div class="stats-grid">
            <div class="stat-item">
              <span class="stat-number">500+</span>
              <span class="stat-label">Projects Completed</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">50+</span>
              <span class="stat-label">Partner Companies</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">10+</span>
              <span class="stat-label">Years Experience</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.about-us-section {
  padding: 80px 20px;
  background: $gradient-100;

  .about-container {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    gap: 60px;
    align-items: center;

    .about-image {
      display: flex;
      justify-content: center;

      .image-placeholder {
        width: 500px;
        height: 400px;
        border-radius: 16px;
        overflow: hidden;
        box-shadow: 0 8px 32px rgba($black, 0.1);
        object-fit: cover;
      }
    }

    .about-content {
      .section-heading-1 {
        color: $blue-400;
        margin-bottom: 30px;
        font-family: 'Poppins Devanagari', sans-serif;
      }

      .about-description {
        p {
          font-size: 1.1rem;
          line-height: 1.7;
          color: $blue-400;
          margin-bottom: 20px;
          opacity: 0.8;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          margin-top: 40px;

          .stat-item {
            text-align: center;

            .stat-number {
              display: block;
              font-size: 2.5rem;
              font-weight: 700;
              color: $blue-100;
              font-family: 'Poppins Devanagari', sans-serif;
            }

            .stat-label {
              display: block;
              font-size: 0.9rem;
              color: $blue-400;
              opacity: 0.7;
              margin-top: 5px;
            }
          }
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .about-us-section {
    padding: 60px 20px;

    .about-container {
      grid-template-columns: 1fr;
      gap: 40px;
      text-align: center;

      .about-image .image-placeholder {
        width: 250px;
        height: 250px;
      }

      .about-content .about-description .stats-grid {
        grid-template-columns: 1fr;
        gap: 20px;
      }
    }
  }
}

@media (max-width: 480px) {
  .about-us-section {
    padding: 40px 15px;

    .about-container .about-image .image-placeholder {
      width: 200px;
      height: 200px;
    }
  }
}
</style>
