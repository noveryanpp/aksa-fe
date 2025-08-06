<template>
  <section class="news-section">
    <div class="news-container">
      <h2 class="section-heading-1">Latest News & Press</h2>
      <p class="section-subtitle">Stay updated with Aksa Group's latest announcements, achievements, and industry insights</p>

      <div class="featured-news">
        <div class="featured-article">
          <div class="article-image">
            <div class="image-placeholder">
              <span class="news-icon">📰</span>
            </div>
          </div>
          <div class="article-content">
            <div class="article-meta">
              <span class="article-category">Company News</span>
              <span class="article-date">{{ formatDate(featuredNews.date) }}</span>
            </div>
            <h3 class="article-title">{{ featuredNews.title }}</h3>
            <p class="article-excerpt">{{ featuredNews.excerpt }}</p>
            <AnimatedButton :size="16" class="read-more-btn">Read Full Article</AnimatedButton>
          </div>
        </div>
      </div>

      <div class="news-grid">
        <div
          v-for="(article, index) in newsArticles"
          :key="index"
          class="news-card"
        >
          <div class="news-image">
            <div class="image-placeholder" :style="{ backgroundColor: article.color }">
              <span class="news-type-icon">{{ article.icon }}</span>
            </div>
          </div>
          <div class="news-content">
            <div class="news-meta">
              <span class="news-category">{{ article.category }}</span>
              <span class="news-date">{{ formatDate(article.date) }}</span>
            </div>
            <h4 class="news-title">{{ article.title }}</h4>
            <p class="news-excerpt">{{ article.excerpt }}</p>
          </div>
        </div>
      </div>

      <div class="awards-section">
        <h3 class="awards-title">Recent Recognition</h3>
        <div class="awards-grid">
          <div
            v-for="(award, index) in awards"
            :key="index"
            class="award-card"
          >
            <div class="award-icon">
              <span class="trophy-icon">🏆</span>
            </div>
            <div class="award-info">
              <h5 class="award-name">{{ award.name }}</h5>
              <p class="award-organization">{{ award.organization }}</p>
              <span class="award-year">{{ award.year }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import AnimatedButton from "~/components/AnimatedButton.vue";

const featuredNews = {
  title: 'Aksa Group Expands Operations with New Technology Center',
  excerpt: 'We are excited to announce the opening of our new state-of-the-art technology center, which will serve as the hub for innovation across all our companies. This expansion represents our commitment to technological excellence and growth.',
  date: new Date('2024-11-15'),
  category: 'Company News'
};

const newsArticles = [
  {
    title: 'Aksa Digital Marketing Wins Industry Excellence Award',
    excerpt: 'Our digital marketing division has been recognized for outstanding campaign performance and innovation in digital strategy.',
    date: new Date('2024-11-10'),
    category: 'Awards',
    icon: '🏆',
    color: '#0097d7'
  },
  {
    title: 'Partnership Announcement with Global Tech Leader',
    excerpt: 'Aksa Group announces strategic partnership to enhance our cloud services and expand market reach.',
    date: new Date('2024-11-05'),
    category: 'Partnership',
    icon: '🤝',
    color: '#0057ad'
  },
  {
    title: 'Quarterly Report Shows 35% Growth',
    excerpt: 'Our latest financial results demonstrate strong performance across all business units with significant revenue growth.',
    date: new Date('2024-10-28'),
    category: 'Financial',
    icon: '📈',
    color: '#114ba8'
  },
  {
    title: 'New Sustainability Initiative Launched',
    excerpt: 'Aksa Group commits to carbon neutrality by 2030 with comprehensive environmental responsibility program.',
    date: new Date('2024-10-20'),
    category: 'Sustainability',
    icon: '🌱',
    color: '#11234c'
  },
  {
    title: 'Investment in AI Research & Development',
    excerpt: 'Major investment announced to advance artificial intelligence capabilities across our technology solutions.',
    date: new Date('2024-10-15'),
    category: 'Technology',
    icon: '🤖',
    color: '#0097d7'
  },
  {
    title: 'Employee Recognition Program Expansion',
    excerpt: 'New comprehensive employee benefits and recognition programs launched across all Aksa companies.',
    date: new Date('2024-10-10'),
    category: 'HR',
    icon: '👥',
    color: '#0057ad'
  }
];

const awards = [
  { name: 'Best Business Group 2024', organization: 'Business Excellence Awards', year: '2024' },
  { name: 'Innovation Leader', organization: 'Tech Industry Council', year: '2024' },
  { name: 'Employer of Choice', organization: 'HR Excellence Awards', year: '2023' },
  { name: 'Sustainability Champion', organization: 'Green Business Alliance', year: '2023' }
];

const formatDate = (date: Date) => {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};
</script>

<style scoped lang="scss">
.news-section {
  padding: 80px 20px;
  background: $gradient-200;

  .news-container {
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

    .featured-news {
      margin-bottom: 60px;

      .featured-article {
        @extend %card-base;
        display: grid;
        grid-template-columns: 300px 1fr;
        gap: 30px;
        padding: 30px;

        .article-image {
          .image-placeholder {
            width: 100%;
            height: 200px;
            background: $gradient-100;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;

            .news-icon {
              font-size: 3rem;
            }
          }
        }

        .article-content {
          display: flex;
          flex-direction: column;
          justify-content: center;

          .article-meta {
            display: flex;
            gap: 16px;
            margin-bottom: 16px;

            .article-category {
              background: $blue-100;
              color: $white;
              padding: 4px 12px;
              border-radius: 16px;
              font-size: 0.8rem;
              font-weight: 500;
            }

            .article-date {
              color: $blue-400;
              opacity: 0.6;
              font-size: 0.9rem;
            }
          }

          .article-title {
            font-size: 1.8rem;
            font-weight: 600;
            color: $blue-400;
            margin-bottom: 16px;
            line-height: 1.3;
            font-family: 'Poppins Devanagari', sans-serif;
          }

          .article-excerpt {
            font-size: 1rem;
            line-height: 1.6;
            color: $blue-400;
            opacity: 0.8;
            margin-bottom: 24px;
          }

          .read-more-btn {
            align-self: flex-start;
          }
        }
      }
    }

    .news-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 24px;
      margin-bottom: 60px;

      .news-card {
        @extend %card-base;
        transition: all 0.3s ease;
        cursor: pointer;

        &:hover {
          transform: translateY(-6px);
          box-shadow: 0 8px 25px rgba($black, 0.15);
        }

        .news-image {
          margin-bottom: 16px;

          .image-placeholder {
            width: 100%;
            height: 140px;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;

            .news-type-icon {
              font-size: 2rem;
            }
          }
        }

        .news-content {
          .news-meta {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 12px;

            .news-category {
              background: rgba($blue-100, 0.1);
              color: $blue-200;
              padding: 2px 8px;
              border-radius: 12px;
              font-size: 0.75rem;
              font-weight: 500;
            }

            .news-date {
              color: $blue-400;
              opacity: 0.5;
              font-size: 0.8rem;
            }
          }

          .news-title {
            font-size: 1.1rem;
            font-weight: 600;
            color: $blue-400;
            margin-bottom: 12px;
            line-height: 1.3;
            font-family: 'Poppins Devanagari', sans-serif;
          }

          .news-excerpt {
            font-size: 0.9rem;
            line-height: 1.4;
            color: $blue-400;
            opacity: 0.7;
            margin: 0;
          }
        }
      }
    }

    .awards-section {
      .awards-title {
        font-size: 1.8rem;
        font-weight: 600;
        color: $blue-400;
        text-align: center;
        margin-bottom: 40px;
        font-family: 'Poppins Devanagari', sans-serif;
      }

      .awards-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 20px;

        .award-card {
          @extend %card-base;
          text-align: center;
          padding: 24px 16px;
          transition: all 0.3s ease;

          &:hover {
            transform: translateY(-4px);
            box-shadow: 0 6px 20px rgba($black, 0.12);
          }

          .award-icon {
            margin-bottom: 16px;

            .trophy-icon {
              font-size: 2.5rem;
            }
          }

          .award-info {
            .award-name {
              font-size: 1rem;
              font-weight: 600;
              color: $blue-400;
              margin-bottom: 8px;
              font-family: 'Poppins Devanagari', sans-serif;
            }

            .award-organization {
              font-size: 0.85rem;
              color: $blue-300;
              margin-bottom: 8px;
            }

            .award-year {
              font-size: 0.8rem;
              color: $blue-100;
              font-weight: 500;
            }
          }
        }
      }
    }
  }
}

@media (max-width: 1024px) {
  .news-section .news-container {
    .featured-news .featured-article {
      grid-template-columns: 1fr;
      gap: 20px;
    }

    .news-grid {
      grid-template-columns: repeat(2, 1fr);
    }

    .awards-section .awards-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}

@media (max-width: 768px) {
  .news-section {
    padding: 60px 20px;

    .news-container {
      .featured-news .featured-article {
        padding: 20px;

        .article-content .article-title {
          font-size: 1.4rem;
        }
      }

      .news-grid {
        grid-template-columns: 1fr;
        gap: 20px;
      }

      .awards-section .awards-grid {
        grid-template-columns: 1fr;
        gap: 16px;
      }
    }
  }
}

@media (max-width: 480px) {
  .news-section {
    padding: 40px 15px;

    .news-container .featured-news .featured-article .article-content .article-title {
      font-size: 1.2rem;
    }
  }
}
</style>

