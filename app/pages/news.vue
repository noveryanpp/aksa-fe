<template>
  <div class="news-page">
    <div class="news-hero">
      <div class="container">
        <h1 class="page-title">News & Press</h1>
        <p class="page-subtitle">Stay updated with Aksa Group's latest announcements, achievements, and industry insights</p>
      </div>
    </div>

    <div class="news-content">
      <div class="container">
        <div class="news-filters">
          <button
            v-for="category in categories"
            :key="category"
            @click="selectedCategory = category"
            :class="['filter-btn', { active: selectedCategory === category }]"
          >
            {{ category }}
          </button>
        </div>

        <div class="featured-section" v-if="featuredArticle">
          <div class="featured-article">
            <div class="featured-image">
              <div class="image-placeholder">
                <span class="news-icon">📰</span>
              </div>
            </div>
            <div class="featured-content">
              <div class="article-meta">
                <span class="category">{{ featuredArticle.category }}</span>
                <span class="date">{{ formatDate(featuredArticle.date) }}</span>
              </div>
              <h2 class="featured-title">{{ featuredArticle.title }}</h2>
              <p class="featured-excerpt">{{ featuredArticle.excerpt }}</p>
              <AnimatedButton class="read-more-btn">Read Full Article</AnimatedButton>
            </div>
          </div>
        </div>

        <div class="articles-grid">
          <div
            v-for="article in filteredArticles"
            :key="article.id"
            class="article-card"
          >
            <div class="article-image">
              <div class="image-placeholder">
                <span class="news-icon">📄</span>
              </div>
            </div>
            <div class="article-content">
              <div class="article-meta">
                <span class="category">{{ article.category }}</span>
                <span class="date">{{ formatDate(article.date) }}</span>
              </div>
              <h3 class="article-title">{{ article.title }}</h3>
              <p class="article-excerpt">{{ article.excerpt }}</p>
              <a href="#" class="read-more">Read More →</a>
            </div>
          </div>
        </div>

        <div class="pagination">
          <button
            v-for="page in totalPages"
            :key="page"
            @click="currentPage = page"
            :class="['page-btn', { active: currentPage === page }]"
          >
            {{ page }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'News & Press - Aksa Digital Group',
  meta: [
    {
      name: 'description',
      content: 'Latest news, press releases, and announcements from Aksa Digital Group. Stay updated with our achievements and industry insights.'
    }
  ]
})

const selectedCategory = ref('All')
const currentPage = ref(1)
const articlesPerPage = 9

const categories = ['All', 'Company News', 'Press Releases', 'Industry Insights', 'Awards', 'Partnerships']

const featuredArticle = ref({
  id: 1,
  title: 'Aksa Group Expands Portfolio with Strategic Acquisition',
  excerpt: 'We are excited to announce our latest strategic acquisition that strengthens our position in the digital transformation space.',
  category: 'Company News',
  date: new Date('2024-01-15'),
  featured: true
})

const articles = ref([
  {
    id: 2,
    title: 'Innovation Award for Outstanding Digital Solutions',
    excerpt: 'Aksa Group receives prestigious innovation award for breakthrough digital transformation solutions.',
    category: 'Awards',
    date: new Date('2024-01-10')
  },
  {
    id: 3,
    title: 'New Partnership Announcement with Tech Giants',
    excerpt: 'Strategic partnership established to deliver cutting-edge solutions to enterprise clients.',
    category: 'Partnerships',
    date: new Date('2024-01-05')
  },
  {
    id: 4,
    title: 'Q4 Financial Results Show Strong Growth',
    excerpt: 'Aksa Group reports exceptional Q4 performance with 40% year-over-year growth.',
    category: 'Press Releases',
    date: new Date('2023-12-28')
  },
  {
    id: 5,
    title: 'The Future of Digital Transformation',
    excerpt: 'Industry insights on emerging trends and technologies shaping the digital landscape.',
    category: 'Industry Insights',
    date: new Date('2023-12-20')
  },
  {
    id: 6,
    title: 'Opening New Development Center',
    excerpt: 'Aksa Group announces the opening of a new state-of-the-art development center.',
    category: 'Company News',
    date: new Date('2023-12-15')
  }
])

const filteredArticles = computed(() => {
  const filtered = selectedCategory.value === 'All'
    ? articles.value
    : articles.value.filter(article => article.category === selectedCategory.value)

  const start = (currentPage.value - 1) * articlesPerPage
  const end = start + articlesPerPage
  return filtered.slice(start, end)
})

const totalPages = computed(() => {
  const filtered = selectedCategory.value === 'All'
    ? articles.value
    : articles.value.filter(article => article.category === selectedCategory.value)
  return Math.ceil(filtered.length / articlesPerPage)
})

const formatDate = (date: Date) => {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>

<style scoped lang="scss">
.news-page {
  width: 100%;
  min-height: 100vh;
}

.news-hero {
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
    margin: 0 auto;
    line-height: 1.6;
  }
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.news-content {
  padding: 80px 0;
}

.news-filters {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;

  .filter-btn {
    padding: 12px 24px;
    border: 2px solid #e0e6ed;
    border-radius: 30px;
    background: white;
    color: #64748b;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover, &.active {
      border-color: #4facfe;
      background: #4facfe;
      color: white;
      transform: translateY(-2px);
    }
  }
}

.featured-section {
  margin-bottom: 4rem;

  .featured-article {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    background: white;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;

    &:hover {
      transform: translateY(-5px);
    }

    .featured-image {
      height: 400px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      display: flex;
      align-items: center;
      justify-content: center;

      .image-placeholder {
        .news-icon {
          font-size: 4rem;
        }
      }
    }

    .featured-content {
      padding: 2rem;
      display: flex;
      flex-direction: column;
      justify-content: center;

      .article-meta {
        display: flex;
        gap: 1rem;
        margin-bottom: 1rem;

        .category {
          padding: 6px 12px;
          background: #4facfe;
          color: white;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 500;
        }

        .date {
          color: #64748b;
          font-size: 0.9rem;
        }
      }

      .featured-title {
        font-size: 1.8rem;
        font-weight: 700;
        color: #1a1a2e;
        margin-bottom: 1rem;
        line-height: 1.3;
      }

      .featured-excerpt {
        color: #64748b;
        line-height: 1.6;
        margin-bottom: 2rem;
        font-size: 1.1rem;
      }
    }
  }
}

.articles-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;

  .article-card {
    background: white;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
    }

    .article-image {
      height: 200px;
      background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
      display: flex;
      align-items: center;
      justify-content: center;

      .image-placeholder {
        .news-icon {
          font-size: 2.5rem;
          color: white;
        }
      }
    }

    .article-content {
      padding: 1.5rem;

      .article-meta {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;

        .category {
          padding: 4px 8px;
          background: #f1f5f9;
          color: #4facfe;
          border-radius: 12px;
          font-size: 0.75rem;
          font-weight: 500;
        }

        .date {
          color: #94a3b8;
          font-size: 0.8rem;
        }
      }

      .article-title {
        font-size: 1.2rem;
        font-weight: 600;
        color: #1a1a2e;
        margin-bottom: 0.5rem;
        line-height: 1.4;
      }

      .article-excerpt {
        color: #64748b;
        line-height: 1.5;
        margin-bottom: 1rem;
        font-size: 0.9rem;
      }

      .read-more {
        color: #4facfe;
        font-weight: 500;
        text-decoration: none;
        transition: color 0.3s ease;

        &:hover {
          color: #00f2fe;
        }
      }
    }
  }
}

.pagination {
  display: flex;
  justify-content: center;
  gap: 0.5rem;

  .page-btn {
    width: 40px;
    height: 40px;
    border: 2px solid #e0e6ed;
    border-radius: 8px;
    background: white;
    color: #64748b;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover, &.active {
      border-color: #4facfe;
      background: #4facfe;
      color: white;
    }
  }
}

@media (max-width: 768px) {
  .news-hero {
    padding: 100px 0 60px;

    .page-title {
      font-size: 2.5rem;
    }

    .page-subtitle {
      font-size: 1rem;
    }
  }

  .news-content {
    padding: 60px 0;
  }

  .featured-article {
    grid-template-columns: 1fr !important;

    .featured-image {
      height: 250px;
    }
  }

  .articles-grid {
    grid-template-columns: 1fr;
  }

  .news-filters {
    gap: 0.5rem;

    .filter-btn {
      padding: 10px 16px;
      font-size: 0.9rem;
    }
  }
}
</style>
