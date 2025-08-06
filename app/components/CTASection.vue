<template>
  <section class="cta-section">
    <div class="cta-background">
      <div class="gradient-overlay"></div>
      <div class="pattern-overlay"></div>
    </div>

    <div class="cta-container">
      <div class="cta-card">
        <div class="cta-content">
          <h2 class="cta-heading">Ready to Transform Your Business?</h2>
          <p class="cta-description">
            Join hundreds of successful businesses that have partnered with Aksa Digital Group.
            Let's discuss how we can help you achieve your goals and take your business to the next level.
          </p>


          <div class="cta-buttons">
            <AnimatedButton :size="24" class="primary-cta">
              Start Your Project
            </AnimatedButton>
            <AnimatedButton :size="24" type="outline" class="secondary-cta">
              Schedule Consultation
            </AnimatedButton>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.cta-section {
  position: relative;
  width: 100vw;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  padding: 50px 0px;
  overflow: hidden;
  min-height: 600px;
  display: flex;
  align-items: center;

  .cta-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #11234c 0%, #114ba8 20%, #0057ad 40%, #0097d7 60%, #114ba8 80%, #11234c 100%);
    background-size: 400% 400%;
    animation: gradientShift 15s ease infinite;

    .gradient-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: radial-gradient(circle at 30% 20%, rgba(255, 255, 255, 0.15) 0%, transparent 50%),
      radial-gradient(circle at 70% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
      linear-gradient(45deg, rgba(255, 255, 255, 0.05) 0%, transparent 100%);
    }

    .pattern-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
      radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
      background-size: 60px 60px;
      background-position: 0 0, 30px 30px;
      opacity: 0.3;
    }
  }

  .cta-container {
    position: relative;
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    z-index: 2;

    .cta-card {
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(20px);
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 24px;
      padding: 60px 40px;
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1),
      inset 0 1px 0 rgba(255, 255, 255, 0.2);
      transition: all 0.3s ease;

      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 30px 60px rgba(0, 0, 0, 0.15),
        inset 0 1px 0 rgba(255, 255, 255, 0.3);
      }

      .cta-content {
        text-align: center;
        display: flex;
        flex-direction: column;
        color: white;

        .cta-heading {
          font-size: 3.5rem;
          font-weight: 700;
          margin-bottom: 24px;
          line-height: 1.2;
          background: linear-gradient(135deg, #ffffff 0%, #f0f9ff 100%);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .cta-description {
          font-size: 1.3rem;
          line-height: 1.6;
          margin: 0 auto 50px auto;
          opacity: 0.95;
          max-width: 700px;
          text-align: center;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
        }

        .cta-buttons {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin-bottom: 50px;
          flex-wrap: wrap;

          .primary-cta {
            background: rgba(255, 255, 255, 0.9);
            color: #1a1a2e;
            border: none;
            font-weight: 600;

            &:hover {
              background: white;
              transform: translateY(-3px);
              box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
            }
          }

          .secondary-cta {
            background: transparent;
            border: 2px solid rgba(255, 255, 255, 0.6);
            color: white;
            font-weight: 600;

            &:hover {
              background: rgba(255, 255, 255, 0.1);
              border-color: white;
              transform: translateY(-3px);
            }
          }
        }
      }
    }
  }
}

@keyframes gradientShift {
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

@media (max-width: 1024px) {
  .cta-section {
    padding: 100px 20px;

    .cta-container .cta-card {
      padding: 50px 30px;

      .cta-content .cta-heading {
        font-size: 3rem;
      }
    }
  }
}

@media (max-width: 768px) {
  .cta-section {
    padding: 80px 15px;

    .cta-container .cta-card {
      padding: 40px 25px;

      .cta-content {
        .cta-heading {
          font-size: 2.5rem;
        }

        .cta-description {
          font-size: 1.1rem;
          margin-bottom: 40px;
        }

        .cta-stats {
          grid-template-columns: 1fr;
          gap: 20px;
          margin: 40px auto;

          .stat-item {
            .stat-number {
              font-size: 2.5rem;
            }
          }
        }

        .cta-buttons {
          flex-direction: column;
          align-items: center;
          gap: 15px;
        }

        .contact-methods {
          flex-direction: column;
          gap: 15px;
        }
      }
    }
  }
}

@media (max-width: 480px) {
  .cta-section {
    .cta-container .cta-card {
      padding: 30px 20px;

      .cta-content {
        .cta-heading {
          font-size: 2rem;
        }

        .cta-stats .stat-item .stat-number {
          font-size: 2rem;
        }
      }
    }
  }
}
</style>
