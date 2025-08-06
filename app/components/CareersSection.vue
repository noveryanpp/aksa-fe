<template>
  <section class="careers-section">
    <div class="careers-container">
      <h2 class="section-heading-1">Join Our Team</h2>
      <p class="section-subtitle">Discover exciting career opportunities across the Aksa Group companies and be part of our innovative journey</p>

      <div class="culture-section">
        <h3 class="culture-title">Why Work With Us?</h3>
        <div class="culture-grid">
          <div
            v-for="(benefit, index) in benefits"
            :key="index"
            class="benefit-card"
          >
            <div class="benefit-icon" :style="{ backgroundColor: benefit.color }">
              <span class="icon">{{ benefit.icon }}</span>
            </div>
            <div class="benefit-info">
              <h4 class="benefit-title">{{ benefit.title }}</h4>
              <p class="benefit-description">{{ benefit.description }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="positions-section">
        <h3 class="positions-title">Open Positions</h3>
        <div class="positions-filter">
          <button
            v-for="company in companies"
            :key="company"
            @click="selectedCompany = company"
            :class="['filter-btn', { active: selectedCompany === company }]"
          >
            {{ company }}
          </button>
        </div>

        <div class="positions-grid">
          <div
            v-for="(position, index) in filteredPositions"
            :key="index"
            class="position-card"
          >
            <div class="position-header">
              <div class="position-info">
                <h4 class="position-title">{{ position.title }}</h4>
                <p class="position-company">{{ position.company }}</p>
              </div>
              <div class="position-meta">
                <span class="position-type" :class="position.type.toLowerCase()">{{ position.type }}</span>
                <span class="position-location">{{ position.location }}</span>
              </div>
            </div>
            <p class="position-description">{{ position.description }}</p>
            <div class="position-requirements">
              <h5>Key Requirements:</h5>
              <ul class="requirements-list">
                <li v-for="req in position.requirements.slice(0, 3)" :key="req">{{ req }}</li>
              </ul>
            </div>
            <div class="position-footer">
              <span class="position-salary">{{ position.salary }}</span>
              <AnimatedButton :size="14" class="apply-btn">Apply Now</AnimatedButton>
            </div>
          </div>
        </div>
      </div>

      <div class="process-section">
        <h3 class="process-title">Application Process</h3>
        <div class="process-steps">
          <div
            v-for="(step, index) in applicationSteps"
            :key="index"
            class="step-card"
          >
            <div class="step-number">{{ index + 1 }}</div>
            <div class="step-info">
              <h4 class="step-title">{{ step.title }}</h4>
              <p class="step-description">{{ step.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import AnimatedButton from "~/components/AnimatedButton.vue";

const benefits = [
  {
    title: 'Competitive Compensation',
    description: 'Industry-leading salaries with performance bonuses and equity opportunities',
    icon: '💰',
    color: '#0097d7'
  },
  {
    title: 'Professional Growth',
    description: 'Continuous learning opportunities, mentorship programs, and career advancement',
    icon: '📈',
    color: '#0057ad'
  },
  {
    title: 'Work-Life Balance',
    description: 'Flexible working hours, remote work options, and generous vacation policies',
    icon: '⚖️',
    color: '#114ba8'
  },
  {
    title: 'Health & Wellness',
    description: 'Comprehensive health insurance, wellness programs, and fitness memberships',
    icon: '🏥',
    color: '#11234c'
  },
  {
    title: 'Innovation Culture',
    description: 'Work on cutting-edge projects with the latest technologies and methodologies',
    icon: '💡',
    color: '#0097d7'
  },
  {
    title: 'Global Opportunities',
    description: 'International projects and potential for global career advancement',
    icon: '🌍',
    color: '#0057ad'
  }
];

const companies = ref(['All Companies', 'Aksa Tech', 'Aksa Digital', 'Aksa Design', 'Aksa Cloud', 'Aksa Consulting']);
const selectedCompany = ref('All Companies');

const positions = [
  {
    title: 'Senior Full Stack Developer',
    company: 'Aksa Tech',
    type: 'Full-Time',
    location: 'Remote/Hybrid',
    salary: '$80,000 - $120,000',
    description: 'Join our development team to build scalable web applications using modern technologies.',
    requirements: [
      '5+ years experience with JavaScript/TypeScript',
      'Experience with Vue.js/Nuxt.js and Node.js',
      'Strong understanding of database systems',
      'Experience with cloud platforms (AWS/Azure)'
    ]
  },
  {
    title: 'Digital Marketing Specialist',
    company: 'Aksa Digital',
    type: 'Full-Time',
    location: 'On-site',
    salary: '$50,000 - $70,000',
    description: 'Drive digital marketing campaigns and strategies for our diverse client portfolio.',
    requirements: [
      '3+ years in digital marketing',
      'Experience with Google Ads and social media advertising',
      'Strong analytical and data interpretation skills',
      'Content creation and copywriting abilities'
    ]
  },
  {
    title: 'UX/UI Designer',
    company: 'Aksa Design',
    type: 'Full-Time',
    location: 'Hybrid',
    salary: '$60,000 - $85,000',
    description: 'Create exceptional user experiences and beautiful interfaces for web and mobile applications.',
    requirements: [
      'Portfolio demonstrating strong design skills',
      'Proficiency in Figma, Sketch, or Adobe Creative Suite',
      'Understanding of user-centered design principles',
      'Experience with design systems and prototyping'
    ]
  },
  {
    title: 'Cloud Solutions Architect',
    company: 'Aksa Cloud',
    type: 'Full-Time',
    location: 'Remote',
    salary: '$100,000 - $140,000',
    description: 'Design and implement cloud infrastructure solutions for enterprise clients.',
    requirements: [
      '7+ years in cloud architecture',
      'AWS/Azure/GCP certifications preferred',
      'Experience with containerization and microservices',
      'Strong communication and client-facing skills'
    ]
  },
  {
    title: 'Business Analyst',
    company: 'Aksa Consulting',
    type: 'Contract',
    location: 'On-site',
    salary: '$70,000 - $90,000',
    description: 'Analyze business processes and provide strategic recommendations to improve efficiency.',
    requirements: [
      'MBA or equivalent business education',
      'Experience in process optimization',
      'Strong analytical and problem-solving skills',
      'Excellent presentation and communication abilities'
    ]
  },
  {
    title: 'DevOps Engineer',
    company: 'Aksa Tech',
    type: 'Full-Time',
    location: 'Remote',
    salary: '$85,000 - $115,000',
    description: 'Maintain and optimize our CI/CD pipelines and infrastructure automation.',
    requirements: [
      'Experience with Docker, Kubernetes',
      'Proficiency in Infrastructure as Code',
      'Knowledge of monitoring and logging tools',
      'Experience with Git workflows and automation'
    ]
  }
];

const applicationSteps = [
  {
    title: 'Submit Application',
    description: 'Apply online with your resume and cover letter tailored to the specific role.'
  },
  {
    title: 'Initial Screening',
    description: 'Our HR team will review your application and conduct an initial phone screening.'
  },
  {
    title: 'Technical Assessment',
    description: 'Complete a role-specific assessment or technical challenge relevant to the position.'
  },
  {
    title: 'Team Interview',
    description: 'Meet with the hiring manager and potential team members for a comprehensive interview.'
  },
  {
    title: 'Final Decision',
    description: 'Reference checks, final approval, and offer presentation with onboarding details.'
  }
];

const filteredPositions = computed(() => {
  if (selectedCompany.value === 'All Companies') {
    return positions;
  }
  return positions.filter(position =>
    position.company.toLowerCase().includes(selectedCompany.value.toLowerCase().replace('aksa ', ''))
  );
});
</script>

<style scoped lang="scss">
.careers-section {
  padding: 80px 20px;
  background: $white;

  .careers-container {
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

    .culture-section {
      margin-bottom: 80px;

      .culture-title {
        font-size: 2rem;
        font-weight: 600;
        color: $blue-400;
        text-align: center;
        margin-bottom: 40px;
        font-family: 'Poppins Devanagari', sans-serif;
      }

      .culture-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 30px;

        .benefit-card {
          @extend %card-base;
          display: flex;
          align-items: flex-start;
          gap: 20px;
          transition: all 0.3s ease;

          &:hover {
            transform: translateY(-4px);
            box-shadow: 0 6px 20px rgba($black, 0.12);
          }

          .benefit-icon {
            width: 60px;
            height: 60px;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;

            .icon {
              font-size: 1.5rem;
            }
          }

          .benefit-info {
            .benefit-title {
              font-size: 1.1rem;
              font-weight: 600;
              color: $blue-400;
              margin-bottom: 8px;
              font-family: 'Poppins Devanagari', sans-serif;
            }

            .benefit-description {
              font-size: 0.9rem;
              line-height: 1.4;
              color: $blue-400;
              opacity: 0.7;
              margin: 0;
            }
          }
        }
      }
    }

    .positions-section {
      margin-bottom: 80px;

      .positions-title {
        font-size: 2rem;
        font-weight: 600;
        color: $blue-400;
        text-align: center;
        margin-bottom: 30px;
        font-family: 'Poppins Devanagari', sans-serif;
      }

      .positions-filter {
        display: flex;
        justify-content: center;
        gap: 12px;
        margin-bottom: 40px;
        flex-wrap: wrap;

        .filter-btn {
          padding: 8px 16px;
          border: 2px solid $gray-200;
          background: $white;
          color: $blue-400;
          border-radius: 20px;
          cursor: pointer;
          font-size: 0.9rem;
          transition: all 0.3s ease;

          &:hover, &.active {
            border-color: $blue-100;
            background: $blue-100;
            color: $white;
          }
        }
      }

      .positions-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 24px;

        .position-card {
          @extend %card-base;
          transition: all 0.3s ease;

          &:hover {
            transform: translateY(-4px);
            box-shadow: 0 6px 20px rgba($black, 0.12);
          }

          .position-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 16px;

            .position-info {
              .position-title {
                font-size: 1.2rem;
                font-weight: 600;
                color: $blue-400;
                margin-bottom: 4px;
                font-family: 'Poppins Devanagari', sans-serif;
              }

              .position-company {
                font-size: 0.9rem;
                color: $blue-200;
                margin: 0;
              }
            }

            .position-meta {
              display: flex;
              flex-direction: column;
              align-items: flex-end;
              gap: 4px;

              .position-type {
                padding: 2px 8px;
                border-radius: 12px;
                font-size: 0.75rem;
                font-weight: 500;

                &.full-time {
                  background: rgba($blue-100, 0.1);
                  color: $blue-100;
                }

                &.contract {
                  background: rgba($blue-300, 0.1);
                  color: $blue-300;
                }
              }

              .position-location {
                font-size: 0.8rem;
                color: $blue-400;
                opacity: 0.6;
              }
            }
          }

          .position-description {
            font-size: 0.9rem;
            line-height: 1.4;
            color: $blue-400;
            opacity: 0.8;
            margin-bottom: 16px;
          }

          .position-requirements {
            margin-bottom: 20px;

            h5 {
              font-size: 0.9rem;
              font-weight: 600;
              color: $blue-400;
              margin-bottom: 8px;
            }

            .requirements-list {
              list-style: none;
              padding: 0;
              margin: 0;

              li {
                font-size: 0.8rem;
                color: $blue-400;
                opacity: 0.7;
                margin-bottom: 4px;
                position: relative;
                padding-left: 16px;

                &::before {
                  content: '•';
                  color: $blue-100;
                  position: absolute;
                  left: 0;
                }
              }
            }
          }

          .position-footer {
            display: flex;
            justify-content: space-between;
            align-items: center;

            .position-salary {
              font-size: 0.9rem;
              font-weight: 600;
              color: $blue-200;
            }
          }
        }
      }
    }

    .process-section {
      .process-title {
        font-size: 2rem;
        font-weight: 600;
        color: $blue-400;
        text-align: center;
        margin-bottom: 40px;
        font-family: 'Poppins Devanagari', sans-serif;
      }

      .process-steps {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 20px;

        .step-card {
          @extend %card-base;
          text-align: center;
          padding: 24px 16px;

          .step-number {
            width: 40px;
            height: 40px;
            background: $blue-100;
            color: $white;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 600;
            margin: 0 auto 16px;
            font-family: 'Poppins Devanagari', sans-serif;
          }

          .step-info {
            .step-title {
              font-size: 1rem;
              font-weight: 600;
              color: $blue-400;
              margin-bottom: 8px;
              font-family: 'Poppins Devanagari', sans-serif;
            }

            .step-description {
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
}

@media (max-width: 1024px) {
  .careers-section .careers-container {
    .culture-section .culture-grid {
      grid-template-columns: repeat(2, 1fr);
    }

    .positions-section .positions-grid {
      grid-template-columns: 1fr;
    }

    .process-section .process-steps {
      grid-template-columns: repeat(3, 1fr);
    }
  }
}

@media (max-width: 768px) {
  .careers-section {
    padding: 60px 20px;

    .careers-container {
      .culture-section .culture-grid {
        grid-template-columns: 1fr;
        gap: 20px;
      }

      .process-section .process-steps {
        grid-template-columns: 1fr;
        gap: 16px;
      }
    }
  }
}

@media (max-width: 480px) {
  .careers-section {
    padding: 40px 15px;

    .careers-container .positions-section .positions-filter {
      .filter-btn {
        font-size: 0.8rem;
        padding: 6px 12px;
      }
    }
  }
}
</style>

