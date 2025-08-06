<template>
  <section class="case-studies-section">
    <div class="case-studies-container">
      <h2 class="section-heading-1">Case Studies</h2>
      <p class="section-subtitle">Explore how we've helped businesses achieve remarkable results through innovative solutions and strategic partnerships</p>

      <div class="featured-case-study">
        <div class="featured-content">
          <div class="featured-info">
            <div class="client-badge">
              <span class="client-initial" :style="{ backgroundColor: featuredCase.color }">
                {{ featuredCase.clientInitial }}
              </span>
              <div class="client-details">
                <h3 class="client-name">{{ featuredCase.clientName }}</h3>
                <p class="client-industry">{{ featuredCase.industry }}</p>
              </div>
            </div>

            <h4 class="case-title">{{ featuredCase.title }}</h4>
            <p class="case-description">{{ featuredCase.description }}</p>

            <div class="results-grid">
              <div
                v-for="(result, index) in featuredCase.results"
                :key="index"
                class="result-item"
              >
                <span class="result-number">{{ result.value }}</span>
                <span class="result-label">{{ result.label }}</span>
              </div>
            </div>

            <div class="case-tags">
              <span
                v-for="tag in featuredCase.tags"
                :key="tag"
                class="case-tag"
              >
                {{ tag }}
              </span>
            </div>

            <AnimatedButton :size="16" class="case-study-btn">View Full Case Study</AnimatedButton>
          </div>

          <div class="featured-visual">
            <div class="visual-placeholder" :style="{ backgroundColor: featuredCase.color }">
              <span class="visual-icon">📊</span>
            </div>
          </div>
        </div>
      </div>

      <div class="case-studies-grid">
        <div
          v-for="(caseStudy, index) in caseStudies"
          :key="index"
          class="case-study-card"
        >
          <div class="case-header">
            <div class="case-client">
              <span class="client-avatar" :style="{ backgroundColor: caseStudy.color }">
                {{ caseStudy.clientInitial }}
              </span>
              <div class="client-info">
                <h5 class="client-name">{{ caseStudy.clientName }}</h5>
                <p class="client-industry">{{ caseStudy.industry }}</p>
              </div>
            </div>
            <span class="case-duration">{{ caseStudy.duration }}</span>
          </div>

          <h4 class="case-title">{{ caseStudy.title }}</h4>
          <p class="case-summary">{{ caseStudy.summary }}</p>

          <div class="case-metrics">
            <div
              v-for="(metric, idx) in caseStudy.keyMetrics"
              :key="idx"
              class="metric-item"
            >
              <span class="metric-value">{{ metric.value }}</span>
              <span class="metric-label">{{ metric.label }}</span>
            </div>
          </div>

          <div class="services-used">
            <span
              v-for="service in caseStudy.services"
              :key="service"
              class="service-badge"
            >
              {{ service }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const featuredCase = {
  clientName: 'TechCorp Global',
  clientInitial: 'TG',
  industry: 'Technology & Software',
  title: 'Digital Transformation & Platform Modernization',
  description: 'Complete overhaul of legacy systems resulting in improved performance, user experience, and operational efficiency. Our comprehensive approach included cloud migration, UI/UX redesign, and process automation.',
  color: '#0097d7',
  results: [
    { value: '300%', label: 'Performance Increase' },
    { value: '85%', label: 'Cost Reduction' },
    { value: '150%', label: 'User Engagement' },
    { value: '6 Months', label: 'ROI Timeline' }
  ],
  tags: ['Web Development', 'Cloud Migration', 'UI/UX Design', 'Process Automation']
};

const caseStudies = [
  {
    clientName: 'FinanceFlow',
    clientInitial: 'FF',
    industry: 'Financial Services',
    title: 'Mobile Banking App Development',
    summary: 'Built a secure, user-friendly mobile banking application with advanced features and compliance standards.',
    duration: '8 months',
    color: '#0057ad',
    keyMetrics: [
      { value: '2M+', label: 'Active Users' },
      { value: '4.8/5', label: 'App Rating' }
    ],
    services: ['Mobile Development', 'Security', 'UI/UX']
  },
  {
    clientName: 'EcoRetail',
    clientInitial: 'ER',
    industry: 'E-commerce',
    title: 'E-commerce Platform Optimization',
    summary: 'Optimized online store performance and implemented advanced analytics for better customer insights.',
    duration: '5 months',
    color: '#114ba8',
    keyMetrics: [
      { value: '45%', label: 'Sales Increase' },
      { value: '60%', label: 'Page Speed' }
    ],
    services: ['E-commerce', 'Analytics', 'Optimization']
  },
  {
    clientName: 'HealthPlus',
    clientInitial: 'HP',
    industry: 'Healthcare',
    title: 'Patient Management System',
    summary: 'Developed comprehensive patient management system with telemedicine capabilities and data security.',
    duration: '12 months',
    color: '#11234c',
    keyMetrics: [
      { value: '10,000+', label: 'Patients' },
      { value: '99.9%', label: 'Uptime' }
    ],
    services: ['Web Development', 'Database', 'Security']
  },
  {
    clientName: 'EduTech Pro',
    clientInitial: 'EP',
    industry: 'Education',
    title: 'Learning Management Platform',
    summary: 'Created scalable LMS with interactive features, progress tracking, and multi-device compatibility.',
    duration: '10 months',
    color: '#0097d7',
    keyMetrics: [
      { value: '50,000+', label: 'Students' },
      { value: '95%', label: 'Satisfaction' }
    ],
    services: ['Platform Development', 'Mobile App', 'Analytics']
  }
];
</script>

<style scoped lang="scss">
.case-studies-section {
  padding: 80px 20px;
  background: $white;

  .case-studies-container {
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

    .featured-case-study {
      margin-bottom: 80px;

      .featured-content {
        @extend %card-base;
        display: grid;
        grid-template-columns: 1.5fr 1fr;
        gap: 40px;
        padding: 40px;

        .featured-info {
          .client-badge {
            display: flex;
            align-items: center;
            gap: 16px;
            margin-bottom: 24px;

            .client-initial {
              width: 60px;
              height: 60px;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              color: $white;
              font-size: 1.5rem;
              font-weight: 700;
              font-family: 'Poppins Devanagari', sans-serif;
            }

            .client-details {
              .client-name {
                font-size: 1.3rem;
                font-weight: 600;
                color: $blue-400;
                margin-bottom: 4px;
                font-family: 'Poppins Devanagari', sans-serif;
              }

              .client-industry {
                font-size: 0.9rem;
                color: $blue-300;
                margin: 0;
              }
            }
          }

          .case-title {
            font-size: 1.6rem;
            font-weight: 600;
            color: $blue-400;
            margin-bottom: 16px;
            line-height: 1.3;
            font-family: 'Poppins Devanagari', sans-serif;
          }

          .case-description {
            font-size: 1rem;
            line-height: 1.6;
            color: $blue-400;
            opacity: 0.8;
            margin-bottom: 30px;
          }

          .results-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
            margin-bottom: 30px;

            .result-item {
              text-align: center;
              padding: 16px;
              background: $gradient-200;
              border-radius: 12px;

              .result-number {
                display: block;
                font-size: 1.8rem;
                font-weight: 700;
                color: $blue-100;
                margin-bottom: 4px;
                font-family: 'Poppins Devanagari', sans-serif;
              }

              .result-label {
                font-size: 0.8rem;
                color: $blue-400;
                opacity: 0.7;
              }
            }
          }

          .case-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin-bottom: 30px;

            .case-tag {
              background: rgba($blue-100, 0.1);
              color: $blue-200;
              padding: 4px 12px;
              border-radius: 16px;
              font-size: 0.8rem;
              font-weight: 500;
            }
          }
        }

        .featured-visual {
          display: flex;
          align-items: center;
          justify-content: center;

          .visual-placeholder {
            width: 100%;
            height: 300px;
            border-radius: 16px;
            display: flex;
            align-items: center;
            justify-content: center;

            .visual-icon {
              font-size: 4rem;
              opacity: 0.3;
            }
          }
        }
      }
    }

    .case-studies-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 30px;
      margin-bottom: 80px;

      .case-study-card {
        @extend %card-base;
        transition: all 0.3s ease;
        cursor: pointer;

        &:hover {
          transform: translateY(-6px);
          box-shadow: 0 8px 25px rgba($black, 0.15);
        }

        .case-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 16px;

          .case-client {
            display: flex;
            align-items: center;
            gap: 12px;

            .client-avatar {
              width: 40px;
              height: 40px;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              color: $white;
              font-size: 1rem;
              font-weight: 600;
              font-family: 'Poppins Devanagari', sans-serif;
            }

            .client-info {
              .client-name {
                font-size: 1rem;
                font-weight: 600;
                color: $blue-400;
                margin-bottom: 2px;
                font-family: 'Poppins Devanagari', sans-serif;
              }

              .client-industry {
                font-size: 0.8rem;
                color: $blue-300;
                margin: 0;
              }
            }
          }

          .case-duration {
            font-size: 0.8rem;
            color: $blue-400;
            opacity: 0.6;
            background: $gradient-200;
            padding: 4px 8px;
            border-radius: 8px;
          }
        }

        .case-title {
          font-size: 1.2rem;
          font-weight: 600;
          color: $blue-400;
          margin-bottom: 12px;
          line-height: 1.3;
          font-family: 'Poppins Devanagari', sans-serif;
        }

        .case-summary {
          font-size: 0.9rem;
          line-height: 1.4;
          color: $blue-400;
          opacity: 0.8;
          margin-bottom: 20px;
        }

        .case-metrics {
          display: flex;
          gap: 20px;
          margin-bottom: 16px;

          .metric-item {
            text-align: center;

            .metric-value {
              display: block;
              font-size: 1.3rem;
              font-weight: 700;
              color: $blue-200;
              font-family: 'Poppins Devanagari', sans-serif;
            }

            .metric-label {
              font-size: 0.7rem;
              color: $blue-400;
              opacity: 0.6;
            }
          }
        }

        .services-used {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;

          .service-badge {
            background: rgba($blue-300, 0.1);
            color: $blue-300;
            padding: 2px 8px;
            border-radius: 12px;
            font-size: 0.7rem;
            font-weight: 500;
          }
        }
      }
    }
  }
}

@media (max-width: 1024px) {
  .case-studies-section .case-studies-container {
    .featured-case-study .featured-content {
      grid-template-columns: 1fr;
      gap: 30px;
    }

    .case-studies-grid {
      grid-template-columns: 1fr;
    }

    .industries-section .industries-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }
}

@media (max-width: 768px) {
  .case-studies-section {
    padding: 60px 20px;

    .case-studies-container {
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
  .case-studies-section {
    padding: 40px 15px;

    .case-studies-container {
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

