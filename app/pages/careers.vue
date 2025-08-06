<template>
  <div class="careers-page">
    <div class="careers-hero">
      <div class="container">
        <h1 class="page-title">Join Our Team</h1>
        <p class="page-subtitle">Discover exciting career opportunities across the Aksa Group companies and be part of our innovative journey</p>
        <div class="hero-stats">
          <div class="stat">
            <span class="stat-number">500+</span>
            <span class="stat-label">Team Members</span>
          </div>
          <div class="stat">
            <span class="stat-number">15+</span>
            <span class="stat-label">Countries</span>
          </div>
          <div class="stat">
            <span class="stat-number">25+</span>
            <span class="stat-label">Open Positions</span>
          </div>
        </div>
      </div>
    </div>

    <div class="careers-content">
      <div class="container">
        <div class="culture-section">
          <h2 class="section-title">Why Work With Us?</h2>
          <div class="benefits-grid">
            <div
              v-for="benefit in benefits"
              :key="benefit.id"
              class="benefit-card"
            >
              <div class="benefit-icon" :style="{ backgroundColor: benefit.color }">
                <span class="icon">{{ benefit.icon }}</span>
              </div>
              <div class="benefit-content">
                <h3 class="benefit-title">{{ benefit.title }}</h3>
                <p class="benefit-description">{{ benefit.description }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="positions-section">
          <h2 class="section-title">Open Positions</h2>

          <div class="filters-section">
            <div class="filter-group">
              <label>Department:</label>
              <select v-model="selectedDepartment" class="filter-select">
                <option value="">All Departments</option>
                <option v-for="dept in departments" :key="dept" :value="dept">{{ dept }}</option>
              </select>
            </div>

            <div class="filter-group">
              <label>Location:</label>
              <select v-model="selectedLocation" class="filter-select">
                <option value="">All Locations</option>
                <option v-for="location in locations" :key="location" :value="location">{{ location }}</option>
              </select>
            </div>

            <div class="filter-group">
              <label>Type:</label>
              <select v-model="selectedType" class="filter-select">
                <option value="">All Types</option>
                <option v-for="type in jobTypes" :key="type" :value="type">{{ type }}</option>
              </select>
            </div>
          </div>

          <div class="positions-grid">
            <div
              v-for="position in filteredPositions"
              :key="position.id"
              class="position-card"
            >
              <div class="position-header">
                <h3 class="position-title">{{ position.title }}</h3>
                <div class="position-meta">
                  <span class="department">{{ position.department }}</span>
                  <span class="location">📍 {{ position.location }}</span>
                  <span class="type">{{ position.type }}</span>
                </div>
              </div>

              <div class="position-content">
                <p class="position-description">{{ position.description }}</p>

                <div class="requirements">
                  <h4>Key Requirements:</h4>
                  <ul>
                    <li v-for="req in position.requirements.slice(0, 3)" :key="req">{{ req }}</li>
                  </ul>
                </div>
              </div>

              <div class="position-footer">
                <span class="posted-date">Posted {{ getRelativeTime(position.postedDate) }}</span>
                <AnimatedButton :size="14" class="apply-btn">Apply Now</AnimatedButton>
              </div>
            </div>
          </div>
        </div>

        <div class="application-process">
          <h2 class="section-title">Our Hiring Process</h2>
          <div class="process-steps">
            <div
              v-for="(step, index) in hiringProcess"
              :key="step.id"
              class="process-step"
            >
              <div class="step-number">{{ index + 1 }}</div>
              <div class="step-content">
                <div class="step-icon">{{ step.icon }}</div>
                <h3 class="step-title">{{ step.title }}</h3>
                <p class="step-description">{{ step.description }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="cta-section">
          <div class="cta-content">
            <h2>Don't See the Right Role?</h2>
            <p>We're always looking for talented individuals to join our team. Send us your resume and we'll keep you in mind for future opportunities.</p>
            <AnimatedButton class="contact-btn">Send Your Resume</AnimatedButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Careers - Aksa Digital Group',
  meta: [
    {
      name: 'description',
      content: 'Join Aksa Digital Group and build your career with us. Explore exciting opportunities across our companies and be part of our innovative journey.'
    }
  ]
})

const selectedDepartment = ref('')
const selectedLocation = ref('')
const selectedType = ref('')

const benefits = ref([
  {
    id: 1,
    icon: '💰',
    title: 'Competitive Salary',
    description: 'We offer competitive compensation packages with performance bonuses and equity options.',
    color: '#4facfe'
  },
  {
    id: 2,
    icon: '🌱',
    title: 'Growth Opportunities',
    description: 'Continuous learning and development programs to advance your career.',
    color: '#00f2fe'
  },
  {
    id: 3,
    icon: '🏠',
    title: 'Work-Life Balance',
    description: 'Flexible working arrangements and comprehensive health benefits.',
    color: '#667eea'
  },
  {
    id: 4,
    icon: '🌍',
    title: 'Global Impact',
    description: 'Work on projects that make a difference across multiple countries and industries.',
    color: '#764ba2'
  },
  {
    id: 5,
    icon: '🤝',
    title: 'Collaborative Culture',
    description: 'Join a diverse, inclusive team that values innovation and creativity.',
    color: '#f093fb'
  },
  {
    id: 6,
    icon: '🚀',
    title: 'Cutting-edge Tech',
    description: 'Work with the latest technologies and tools in the industry.',
    color: '#f5576c'
  }
])

const positions = ref([
  {
    id: 1,
    title: 'Senior Full Stack Developer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    description: 'Join our engineering team to build scalable web applications using modern technologies.',
    requirements: [
      '5+ years of experience with React/Vue.js',
      'Strong backend development skills (Node.js, Python)',
      'Experience with cloud platforms (AWS, Azure)',
      'Database design and optimization skills'
    ],
    postedDate: new Date('2024-01-10')
  },
  {
    id: 2,
    title: 'UX/UI Designer',
    department: 'Design',
    location: 'New York',
    type: 'Full-time',
    description: 'Create intuitive and beautiful user experiences for our digital products.',
    requirements: [
      '3+ years of UX/UI design experience',
      'Proficiency in Figma, Sketch, or Adobe XD',
      'Strong portfolio demonstrating design thinking',
      'Understanding of front-end development principles'
    ],
    postedDate: new Date('2024-01-08')
  },
  {
    id: 3,
    title: 'Digital Marketing Manager',
    department: 'Marketing',
    location: 'London',
    type: 'Full-time',
    description: 'Lead digital marketing campaigns and drive growth across multiple channels.',
    requirements: [
      '4+ years of digital marketing experience',
      'Experience with Google Ads, Facebook Ads, SEO',
      'Analytics and data-driven decision making',
      'Content marketing and social media expertise'
    ],
    postedDate: new Date('2024-01-05')
  },
  {
    id: 4,
    title: 'Data Scientist',
    department: 'Engineering',
    location: 'Singapore',
    type: 'Full-time',
    description: 'Analyze data to drive business insights and build machine learning models.',
    requirements: [
      'PhD or Masters in Data Science, Statistics, or related field',
      'Experience with Python, R, SQL',
      'Machine learning and statistical modeling experience',
      'Strong communication skills'
    ],
    postedDate: new Date('2024-01-03')
  },
  {
    id: 5,
    title: 'Business Development Intern',
    department: 'Business Development',
    location: 'Tokyo',
    type: 'Internship',
    description: 'Support our business development team in identifying and pursuing new opportunities.',
    requirements: [
      'Currently pursuing MBA or Business degree',
      'Strong analytical and research skills',
      'Excellent communication skills',
      'Interest in technology and innovation'
    ],
    postedDate: new Date('2024-01-01')
  }
])

const departments = computed(() => [...new Set(positions.value.map(p => p.department))])
const locations = computed(() => [...new Set(positions.value.map(p => p.location))])
const jobTypes = computed(() => [...new Set(positions.value.map(p => p.type))])

const filteredPositions = computed(() => {
  return positions.value.filter(position => {
    return (!selectedDepartment.value || position.department === selectedDepartment.value) &&
           (!selectedLocation.value || position.location === selectedLocation.value) &&
           (!selectedType.value || position.type === selectedType.value)
  })
})

const hiringProcess = ref([
  {
    id: 1,
    icon: '📝',
    title: 'Application',
    description: 'Submit your application with resume and cover letter through our careers portal.'
  },
  {
    id: 2,
    icon: '📞',
    title: 'Phone Screening',
    description: 'Initial phone call with our HR team to discuss your background and interest.'
  },
  {
    id: 3,
    icon: '💻',
    title: 'Technical Interview',
    description: 'Technical assessment and interview with our engineering team.'
  },
  {
    id: 4,
    icon: '🤝',
    title: 'Final Interview',
    description: 'Meet with the hiring manager and team members for cultural fit assessment.'
  },
  {
    id: 5,
    icon: '🎉',
    title: 'Offer',
    description: 'Receive your offer and join our amazing team!'
  }
])

const getRelativeTime = (date: Date) => {
  const now = new Date()
  const diffTime = Math.abs(now.getTime() - date.getTime())
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

  if (diffDays === 1) return '1 day ago'
  if (diffDays < 7) return `${diffDays} days ago`
  if (diffDays < 14) return '1 week ago'
  return `${Math.floor(diffDays / 7)} weeks ago`
}
</script>

<style scoped lang="scss">
.careers-page {
  width: 100%;
  min-height: 100vh;
}

.careers-hero {
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  padding: 120px 0 80px;
  color: white;
  text-align: center;

  .page-title {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 1rem;
    background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .page-subtitle {
    font-size: 1.2rem;
    opacity: 0.9;
    max-width: 600px;
    margin: 0 auto 3rem;
    line-height: 1.6;
  }

  .hero-stats {
    display: flex;
    justify-content: center;
    gap: 3rem;

    .stat {
      display: flex;
      flex-direction: column;
      align-items: center;

      .stat-number {
        font-size: 2.5rem;
        font-weight: 700;
        background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      .stat-label {
        font-size: 0.9rem;
        opacity: 0.8;
        margin-top: 0.5rem;
      }
    }
  }
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.careers-content {
  padding: 80px 0;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  color: #1a1a2e;
  margin-bottom: 3rem;
}

.culture-section {
  margin-bottom: 5rem;

  .benefits-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;

    .benefit-card {
      background: white;
      padding: 2rem;
      border-radius: 20px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
      transition: all 0.3s ease;
      display: flex;
      gap: 1.5rem;

      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
      }

      .benefit-icon {
        width: 60px;
        height: 60px;
        border-radius: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;

        .icon {
          font-size: 1.5rem;
        }
      }

      .benefit-content {
        .benefit-title {
          font-size: 1.3rem;
          font-weight: 600;
          color: #1a1a2e;
          margin-bottom: 0.5rem;
        }

        .benefit-description {
          color: #64748b;
          line-height: 1.6;
        }
      }
    }
  }
}

.positions-section {
  margin-bottom: 5rem;

  .filters-section {
    display: flex;
    gap: 2rem;
    margin-bottom: 3rem;
    flex-wrap: wrap;

    .filter-group {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      label {
        font-weight: 500;
        color: #1a1a2e;
      }

      .filter-select {
        padding: 12px 16px;
        border: 2px solid #e0e6ed;
        border-radius: 8px;
        background: white;
        color: #64748b;
        cursor: pointer;
        transition: border-color 0.3s ease;

        &:focus {
          outline: none;
          border-color: #4facfe;
        }
      }
    }
  }

  .positions-grid {
    display: grid;
    gap: 2rem;

    .position-card {
      background: white;
      border-radius: 16px;
      padding: 2rem;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
      transition: all 0.3s ease;

      &:hover {
        transform: translateY(-3px);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
      }

      .position-header {
        margin-bottom: 1.5rem;

        .position-title {
          font-size: 1.5rem;
          font-weight: 600;
          color: #1a1a2e;
          margin-bottom: 0.5rem;
        }

        .position-meta {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;

          span {
            padding: 6px 12px;
            border-radius: 20px;
            font-size: 0.8rem;
            font-weight: 500;
          }

          .department {
            background: #4facfe;
            color: white;
          }

          .location {
            background: #f1f5f9;
            color: #64748b;
          }

          .type {
            background: #00f2fe;
            color: white;
          }
        }
      }

      .position-content {
        margin-bottom: 2rem;

        .position-description {
          color: #64748b;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .requirements {
          h4 {
            font-size: 1rem;
            font-weight: 600;
            color: #1a1a2e;
            margin-bottom: 0.5rem;
          }

          ul {
            list-style: none;
            padding: 0;

            li {
              color: #64748b;
              padding: 0.25rem 0;
              position: relative;
              padding-left: 1.5rem;

              &::before {
                content: '✓';
                position: absolute;
                left: 0;
                color: #4facfe;
                font-weight: bold;
              }
            }
          }
        }
      }

      .position-footer {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .posted-date {
          color: #94a3b8;
          font-size: 0.9rem;
        }
      }
    }
  }
}

.application-process {
  margin-bottom: 5rem;

  .process-steps {
    display: flex;
    justify-content: space-between;
    gap: 2rem;
    flex-wrap: wrap;

    .process-step {
      flex: 1;
      min-width: 200px;
      text-align: center;
      position: relative;

      .step-number {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 700;
        font-size: 1.2rem;
        margin: 0 auto 1rem;
      }

      .step-content {
        .step-icon {
          font-size: 2rem;
          margin-bottom: 1rem;
        }

        .step-title {
          font-size: 1.2rem;
          font-weight: 600;
          color: #1a1a2e;
          margin-bottom: 0.5rem;
        }

        .step-description {
          color: #64748b;
          line-height: 1.6;
          font-size: 0.9rem;
        }
      }
    }
  }
}

.cta-section {
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  border-radius: 20px;
  padding: 3rem;
  text-align: center;

  .cta-content {
    h2 {
      font-size: 2rem;
      font-weight: 700;
      color: #1a1a2e;
      margin-bottom: 1rem;
    }

    p {
      color: #64748b;
      line-height: 1.6;
      margin-bottom: 2rem;
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
    }
  }
}

@media (max-width: 768px) {
  .careers-hero {
    padding: 100px 0 60px;

    .page-title {
      font-size: 2.5rem;
    }

    .hero-stats {
      gap: 2rem;

      .stat .stat-number {
        font-size: 2rem;
      }
    }
  }

  .careers-content {
    padding: 60px 0;
  }

  .benefits-grid {
    grid-template-columns: 1fr !important;
  }

  .filters-section {
    flex-direction: column;
    gap: 1rem !important;
  }

  .process-steps {
    flex-direction: column;
    gap: 3rem !important;
  }

  .cta-section {
    padding: 2rem;

    .cta-content h2 {
      font-size: 1.5rem;
    }
  }
}
</style>
