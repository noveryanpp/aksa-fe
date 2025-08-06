<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="main-footer">
    <div class="footer-container">
      <div class="footer-content">
        <div class="footer-section company-info">
          <div class="company-logo">
            <LogoWithText />
          </div>
          <p class="company-description">
            Aksa Digital Group is a leading conglomerate that builds sustainable businesses, not just startups.
            We transform innovative ideas into profitable enterprises through strategic thinking, cutting-edge technology,
            and deep market understanding.
          </p>
          <div class="social-links">
            <a href="#" class="social-link" aria-label="LinkedIn">
              <Icon name="cib:linkedin" class="social-icon"/>
            </a>
          </div>
        </div>

        <div class="footer-section sitemap">
          <h3 class="section-title">Quick Links</h3>
          <ul class="footer-links">
            <li><a href="#hero">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#companies">Our Companies</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#partners">Partners</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div class="footer-section contact">
          <h3 class="section-title">Contact Info</h3>
          <div class="contact-info">
            <div class="contact-item">
              <div class="contact-icon">
                <Icon name="carbon:location" />
              </div>
              <div class="contact-details">
                <span class="contact-label">Address</span>
                <span class="contact-value">Jl. Wongso Permono No.26, Klidon, Sukoharjo, Kec. Ngaglik, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55581</span>
              </div>
            </div>
            <div class="contact-item">
              <div class="contact-icon">
                <Icon name="carbon:phone" />
              </div>
              <div class="contact-details">
                <span class="contact-label">Phone</span>
                <span class="contact-value">+62 898-290-9000</span>
              </div>
            </div>
            <div class="contact-item">
              <div class="contact-icon">
                <Icon name="carbon:email" />
              </div>
              <div class="contact-details">
                <span class="contact-label">Email</span>
                <span class="contact-value">info@aksa.id</span>
              </div>
            </div>
            <div class="contact-item">
              <div class="contact-icon">
                <Icon name="carbon:time" />
              </div>
              <div class="contact-details">
                <span class="contact-label">Hours</span>
                <span class="contact-value">Mon-Fri: 9AM-3PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="footer-bottom-content">
          <div class="copyright">
            <p>&copy; {{ currentYear }} Aksa Digital Group. All rights reserved.</p>
          </div>
          <div class="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.main-footer {
  background: $gradient-400;
  color: $white;

  .footer-container {
    max-width: 1280px;
    margin: 0 auto;

    .footer-content {
      padding: 80px 20px 40px;
      display: grid;
      grid-template-columns: 2fr 1fr 2fr;
      gap: 50px;

      .footer-section {
        .section-title {
          font-size: 1.3rem;
          font-weight: 600;
          margin-bottom: 24px;
          color: $white;
          font-family: 'Poppins Devanagari', sans-serif;
        }

        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;

          li {
            margin-bottom: 12px;

            a {
              color: $white;
              text-decoration: none;
              opacity: 0.8;
              transition: all 0.3s ease;
              font-size: 0.95rem;

              &:hover {
                opacity: 1;
                color: $gray-100;
                text-decoration: underline;
              }
            }
          }
        }
      }

      .company-info {
        .company-logo {
          margin-bottom: 24px;
        }

        .company-description {
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 30px;
          opacity: 0.9;
        }

        .social-links {
          display: flex;
          gap: 16px;

          .social-link {
            width: 44px;
            height: 44px;
            background: rgba($white, 0.1);
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
            text-decoration: none;

            &:hover {
              background: rgba($white, 0.2);
              transform: translateY(-2px);
            }

            .social-icon {
              font-size: 1.5rem;
              color: $white;
            }
          }
        }
      }

      .contact {
        .contact-info {
          .contact-item {
            display: flex;
            align-items: flex-start;
            gap: 12px;
            margin-bottom: 20px;

            .contact-icon {
              font-size: 1.5rem;
              margin-top: 2px;
            }

            .contact-details {
              display: flex;
              flex-direction: column;

              .contact-label {
                font-size: 0.8rem;
                opacity: 0.7;
                margin-bottom: 4px;
              }

              .contact-value {
                font-size: 0.95rem;
                opacity: 0.9;
              }
            }
          }
        }
      }
    }

    .footer-bottom {
      border-top: 1px solid rgba($white, 0.2);
      padding: 24px 20px;

      .footer-bottom-content {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .copyright {
          p {
            margin: 0;
            font-size: 0.9rem;
            opacity: 0.8;
          }
        }

        .footer-bottom-links {
          display: flex;
          gap: 24px;

          a {
            color: $white;
            text-decoration: none;
            font-size: 0.9rem;
            opacity: 0.8;
            transition: all 0.3s ease;

            &:hover {
              opacity: 1;
              text-decoration: underline;
            }
          }
        }
      }
    }
  }
}

@media (max-width: 1024px) {
  .main-footer .footer-container .footer-content {
    grid-template-columns: 1fr 1fr;
    gap: 40px;
  }
}

@media (max-width: 768px) {
  .main-footer .footer-container {
    .footer-content {
      grid-template-columns: 1fr;
      gap: 40px;
      padding: 60px 20px 30px;
      text-align: center;

      .company-info .social-links {
        justify-content: center;
      }

      .contact .contact-info .contact-item {
        justify-content: center;
        text-align: left;
      }
    }

    .footer-bottom .footer-bottom-content {
      flex-direction: column;
      gap: 20px;
      text-align: center;

      .footer-bottom-links {
        flex-wrap: wrap;
        justify-content: center;
        gap: 16px;
      }
    }
  }
}

@media (max-width: 480px) {
  .main-footer .footer-container {
    .footer-content {
      padding: 40px 15px 20px;
    }

    .footer-bottom {
      padding: 20px 15px;

      .footer-bottom-content .footer-bottom-links {
        flex-direction: column;
        gap: 12px;
      }
    }
  }
}
</style>
