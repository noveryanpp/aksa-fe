<template>
  <section class="leadership-section">
    <div class="leadership-container">
      <h2 class="section-heading-1">Our Leadership Team</h2>
      <p class="section-subtitle">Meet the visionary leaders driving Aksa Digital Group's success and innovation</p>

      <div class="leadership-grid">
        <div
          v-for="(leader, index) in leaders"
          :key="index"
          class="leader-card"
        >
          <div class="leader-image">
            <div class="image-placeholder" :style="{ backgroundColor: leader.color }">
              <span class="leader-initials">{{ leader.initials }}</span>
            </div>
          </div>
          <div class="leader-info">
            <h3 class="leader-name">{{ leader.name }}</h3>
            <p class="leader-position">{{ leader.position }}</p>
            <p class="leader-bio">{{ leader.bio }}</p>
            <div class="leader-social">
              <a v-if="leader.linkedin" :href="leader.linkedin" class="social-link" aria-label="LinkedIn">
                <span class="social-icon">💼</span>
              </a>
              <a v-if="leader.twitter" :href="leader.twitter" class="social-link" aria-label="Twitter">
                <span class="social-icon">🐦</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="board-section">
        <h3 class="board-title">Board of Directors</h3>
        <div class="board-grid">
          <div
            v-for="(director, index) in boardMembers"
            :key="index"
            class="board-card"
          >
            <div class="board-image">
              <div class="image-placeholder" :style="{ backgroundColor: director.color }">
                <span class="director-initials">{{ director.initials }}</span>
              </div>
            </div>
            <div class="board-info">
              <h4 class="director-name">{{ director.name }}</h4>
              <p class="director-role">{{ director.role }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const leaders = [
  {
    name: 'Alexander Rodriguez',
    position: 'Chief Executive Officer',
    bio: 'With over 15 years of experience in business development and strategic planning, Alexander leads Aksa Group with a vision for sustainable growth and innovation.',
    initials: 'AR',
    color: '#0097d7',
    linkedin: '#',
    twitter: '#'
  },
  {
    name: 'Sarah Chen',
    position: 'Chief Technology Officer',
    bio: 'Sarah brings cutting-edge technology expertise to Aksa Group, overseeing our digital transformation initiatives and technical innovation across all companies.',
    initials: 'SC',
    color: '#0057ad',
    linkedin: '#'
  },
  {
    name: 'Michael Johnson',
    position: 'Chief Operating Officer',
    bio: 'Michael ensures operational excellence across all Aksa companies, with a focus on efficiency, quality, and customer satisfaction.',
    initials: 'MJ',
    color: '#114ba8',
    linkedin: '#',
    twitter: '#'
  },
  {
    name: 'Emily Davis',
    position: 'Chief Financial Officer',
    bio: 'Emily manages the financial strategy and growth of Aksa Group, bringing expertise in corporate finance and investment management.',
    initials: 'ED',
    color: '#11234c',
    linkedin: '#'
  },
  {
    name: 'David Kim',
    position: 'Chief Marketing Officer',
    bio: 'David leads our marketing and brand strategy, ensuring consistent messaging and growth across all Aksa Group companies.',
    initials: 'DK',
    color: '#0097d7',
    linkedin: '#'
  },
  {
    name: 'Lisa Thompson',
    position: 'Chief Human Resources Officer',
    bio: 'Lisa focuses on talent acquisition, development, and company culture, ensuring Aksa Group attracts and retains top talent.',
    initials: 'LT',
    color: '#0057ad',
    linkedin: '#'
  }
];

const boardMembers = [
  { name: 'Robert Anderson', role: 'Chairman of the Board', initials: 'RA', color: '#0097d7' },
  { name: 'Jennifer White', role: 'Independent Director', initials: 'JW', color: '#0057ad' },
  { name: 'Carlos Martinez', role: 'Independent Director', initials: 'CM', color: '#114ba8' },
  { name: 'Dr. Amy Foster', role: 'Independent Director', initials: 'AF', color: '#11234c' }
];
</script>

<style scoped lang="scss">
.leadership-section {
  padding: 80px 20px;
  background: $white;

  .leadership-container {
    max-width: 1200px;
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

    .leadership-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 30px;
      margin-bottom: 80px;

      .leader-card {
        @extend %card-base;
        text-align: center;
        transition: all 0.3s ease;

        &:hover {
          transform: translateY(-8px);
          box-shadow: 0 8px 25px rgba($black, 0.15);
        }

        .leader-image {
          margin-bottom: 20px;

          .image-placeholder {
            width: 120px;
            height: 120px;
            border-radius: 50%;
            margin: 0 auto;
            display: flex;
            align-items: center;
            justify-content: center;

            .leader-initials {
              color: $white;
              font-size: 2rem;
              font-weight: 700;
              font-family: 'Poppins Devanagari', sans-serif;
            }
          }
        }

        .leader-info {
          .leader-name {
            font-size: 1.3rem;
            font-weight: 600;
            color: $blue-400;
            margin-bottom: 8px;
            font-family: 'Poppins Devanagari', sans-serif;
          }

          .leader-position {
            font-size: 1rem;
            color: $blue-200;
            font-weight: 500;
            margin-bottom: 16px;
          }

          .leader-bio {
            font-size: 0.9rem;
            line-height: 1.5;
            color: $blue-400;
            opacity: 0.8;
            margin-bottom: 20px;
          }

          .leader-social {
            display: flex;
            justify-content: center;
            gap: 12px;

            .social-link {
              width: 36px;
              height: 36px;
              background: $gradient-200;
              border-radius: 8px;
              display: flex;
              align-items: center;
              justify-content: center;
              text-decoration: none;
              transition: all 0.3s ease;

              &:hover {
                background: $blue-100;
                transform: translateY(-2px);

                .social-icon {
                  filter: brightness(0) invert(1);
                }
              }

              .social-icon {
                font-size: 1rem;
              }
            }
          }
        }
      }
    }

    .board-section {
      .board-title {
        font-size: 2rem;
        font-weight: 600;
        color: $blue-400;
        text-align: center;
        margin-bottom: 40px;
        font-family: 'Poppins Devanagari', sans-serif;
      }

      .board-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 24px;

        .board-card {
          @extend %card-base;
          text-align: center;
          padding: 24px 16px;
          transition: all 0.3s ease;

          &:hover {
            transform: translateY(-4px);
            box-shadow: 0 6px 20px rgba($black, 0.12);
          }

          .board-image {
            margin-bottom: 16px;

            .image-placeholder {
              width: 80px;
              height: 80px;
              border-radius: 50%;
              margin: 0 auto;
              display: flex;
              align-items: center;
              justify-content: center;

              .director-initials {
                color: $white;
                font-size: 1.2rem;
                font-weight: 600;
                font-family: 'Poppins Devanagari', sans-serif;
              }
            }
          }

          .board-info {
            .director-name {
              font-size: 1rem;
              font-weight: 600;
              color: $blue-400;
              margin-bottom: 6px;
              font-family: 'Poppins Devanagari', sans-serif;
            }

            .director-role {
              font-size: 0.85rem;
              color: $blue-300;
              margin: 0;
            }
          }
        }
      }
    }
  }
}

@media (max-width: 1024px) {
  .leadership-section .leadership-container {
    .leadership-grid {
      grid-template-columns: repeat(2, 1fr);
    }

    .board-section .board-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}

@media (max-width: 768px) {
  .leadership-section {
    padding: 60px 20px;

    .leadership-container {
      .leadership-grid {
        grid-template-columns: 1fr;
        gap: 24px;
        margin-bottom: 60px;
      }

      .board-section .board-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
      }
    }
  }
}

@media (max-width: 480px) {
  .leadership-section {
    padding: 40px 15px;

    .leadership-container .board-section .board-grid {
      grid-template-columns: 1fr;
    }
  }
}
</style>

