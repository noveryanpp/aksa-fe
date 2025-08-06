<template>
  <section class="contact-section">
    <div class="contact-container">
      <h2 class="section-heading-1">Get In Touch</h2>
      <p class="section-subtitle">Ready to start your project or have questions? We're here to help you achieve your business goals</p>

      <div class="contact-content">
        <div class="contact-form-section">
          <h3 class="form-title">Send Us a Message</h3>
          <form class="contact-form" @submit.prevent="submitForm">
            <div class="form-row">
              <div class="form-group">
                <label for="firstName">First Name *</label>
                <input
                  type="text"
                  id="firstName"
                  v-model="form.firstName"
                  required
                  class="form-input"
                >
              </div>
              <div class="form-group">
                <label for="lastName">Last Name *</label>
                <input
                  type="text"
                  id="lastName"
                  v-model="form.lastName"
                  required
                  class="form-input"
                >
              </div>
            </div>

            <div class="form-row">
              <div class="form-group">
                <label for="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  v-model="form.email"
                  required
                  class="form-input"
                >
              </div>
              <div class="form-group">
                <label for="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  v-model="form.phone"
                  class="form-input"
                >
              </div>
            </div>

            <div class="form-group">
              <label for="company">Company Name</label>
              <input
                type="text"
                id="company"
                v-model="form.company"
                class="form-input"
              >
            </div>

            <div class="form-group">
              <label for="service">Service Interested In</label>
              <select id="service" v-model="form.service" class="form-select">
                <option value="">Select a service</option>
                <option value="web-development">Web Development</option>
                <option value="mobile-app">Mobile App Development</option>
                <option value="ui-ux-design">UI/UX Design</option>
                <option value="digital-marketing">Digital Marketing</option>
                <option value="cloud-solutions">Cloud Solutions</option>
                <option value="consulting">Business Consulting</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div class="form-group">
              <label for="budget">Project Budget Range</label>
              <select id="budget" v-model="form.budget" class="form-select">
                <option value="">Select budget range</option>
                <option value="under-10k">Under $10,000</option>
                <option value="10k-25k">$10,000 - $25,000</option>
                <option value="25k-50k">$25,000 - $50,000</option>
                <option value="50k-100k">$50,000 - $100,000</option>
                <option value="over-100k">Over $100,000</option>
              </select>
            </div>

            <div class="form-group">
              <label for="message">Project Details *</label>
              <textarea
                id="message"
                v-model="form.message"
                required
                rows="5"
                class="form-textarea"
                placeholder="Tell us about your project, timeline, and specific requirements..."
              ></textarea>
            </div>

            <AnimatedButton :size="18" type="submit" class="submit-btn">
              Send Message
            </AnimatedButton>
          </form>
        </div>

        <div class="contact-info-section">
          <h3 class="info-title">Contact Information</h3>

          <div class="contact-methods">
            <div class="contact-method">
              <div class="method-icon">
                <span class="icon">📍</span>
              </div>
              <div class="method-details">
                <h4>Our Office</h4>
                <p>123 Business District<br>Tech City, TC 12345<br>United States</p>
              </div>
            </div>

            <div class="contact-method">
              <div class="method-icon">
                <span class="icon">📞</span>
              </div>
              <div class="method-details">
                <h4>Phone</h4>
                <p>+1 (555) 123-4567<br>Mon-Fri: 9AM-6PM EST</p>
              </div>
            </div>

            <div class="contact-method">
              <div class="method-icon">
                <span class="icon">✉️</span>
              </div>
              <div class="method-details">
                <h4>Email</h4>
                <p>hello@aksagroup.com<br>Response within 24 hours</p>
              </div>
            </div>

            <div class="contact-method">
              <div class="method-icon">
                <span class="icon">💬</span>
              </div>
              <div class="method-details">
                <h4>Live Chat</h4>
                <p>Available on our website<br>Instant responses during business hours</p>
              </div>
            </div>
          </div>

          <div class="response-times">
            <h4 class="response-title">Response Times</h4>
            <div class="response-grid">
              <div class="response-item">
                <span class="response-type">General Inquiries</span>
                <span class="response-time">Within 4 hours</span>
              </div>
              <div class="response-item">
                <span class="response-type">Project Quotes</span>
                <span class="response-time">Within 24 hours</span>
              </div>
              <div class="response-item">
                <span class="response-type">Support Requests</span>
                <span class="response-time">Within 2 hours</span>
              </div>
            </div>
          </div>

          <div class="office-hours">
            <h4 class="hours-title">Office Hours</h4>
            <div class="hours-grid">
              <div class="hours-item">
                <span class="day">Monday - Friday</span>
                <span class="time">9:00 AM - 6:00 PM</span>
              </div>
              <div class="hours-item">
                <span class="day">Saturday</span>
                <span class="time">10:00 AM - 2:00 PM</span>
              </div>
              <div class="hours-item">
                <span class="day">Sunday</span>
                <span class="time">Closed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import AnimatedButton from "~/components/AnimatedButton.vue";

const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  company: '',
  service: '',
  budget: '',
  message: ''
});

const submitForm = () => {
  console.log('Form submitted:', form);
};
</script>

<style scoped lang="scss">
.contact-section {
  padding: 80px 20px;
  background: $gradient-100;

  .contact-container {
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

    .contact-content {
      display: grid;
      grid-template-columns: 1.5fr 1fr;
      gap: 60px;

      .contact-form-section {
        .form-title {
          font-size: 1.8rem;
          font-weight: 600;
          color: $blue-400;
          margin-bottom: 30px;
          font-family: 'Poppins Devanagari', sans-serif;
        }

        .contact-form {
          @extend %card-base;
          padding: 30px;

          .form-row {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            margin-bottom: 20px;
          }

          .form-group {
            margin-bottom: 20px;

            label {
              display: block;
              font-size: 0.9rem;
              font-weight: 600;
              color: $blue-400;
              margin-bottom: 8px;
            }

            .form-input, .form-select, .form-textarea {
              width: 100%;
              padding: 12px 16px;
              border: 2px solid $gray-200;
              border-radius: 8px;
              font-size: 0.9rem;
              color: $blue-400;
              background: $white;
              transition: all 0.3s ease;

              &:focus {
                outline: none;
                border-color: $blue-100;
                box-shadow: 0 0 0 3px rgba($blue-100, 0.1);
              }

              &::placeholder {
                color: $blue-400;
                opacity: 0.5;
              }
            }

            .form-textarea {
              resize: vertical;
              min-height: 120px;
              font-family: inherit;
            }
          }

          .submit-btn {
            width: 100%;
            margin-top: 10px;
          }
        }
      }

      .contact-info-section {
        .info-title {
          font-size: 1.8rem;
          font-weight: 600;
          color: $blue-400;
          margin-bottom: 30px;
          font-family: 'Poppins Devanagari', sans-serif;
        }

        .contact-methods {
          margin-bottom: 40px;

          .contact-method {
            @extend %card-base;
            display: flex;
            align-items: flex-start;
            gap: 16px;
            margin-bottom: 16px;
            padding: 20px;

            .method-icon {
              width: 50px;
              height: 50px;
              background: $gradient-200;
              border-radius: 12px;
              display: flex;
              align-items: center;
              justify-content: center;
              flex-shrink: 0;

              .icon {
                font-size: 1.3rem;
              }
            }

            .method-details {
              h4 {
                font-size: 1.1rem;
                font-weight: 600;
                color: $blue-400;
                margin-bottom: 6px;
                font-family: 'Poppins Devanagari', sans-serif;
              }

              p {
                font-size: 0.9rem;
                line-height: 1.4;
                color: $blue-400;
                opacity: 0.7;
                margin: 0;
              }
            }
          }
        }

        .response-times, .office-hours {
          @extend %card-base;
          padding: 24px;
          margin-bottom: 20px;

          .response-title, .hours-title {
            font-size: 1.2rem;
            font-weight: 600;
            color: $blue-400;
            margin-bottom: 16px;
            font-family: 'Poppins Devanagari', sans-serif;
          }

          .response-grid, .hours-grid {
            display: flex;
            flex-direction: column;
            gap: 12px;

            .response-item, .hours-item {
              display: flex;
              justify-content: space-between;
              align-items: center;
              padding: 8px 0;
              border-bottom: 1px solid $gray-200;

              &:last-child {
                border-bottom: none;
              }

              .response-type, .day {
                font-size: 0.9rem;
                color: $blue-400;
                opacity: 0.8;
              }

              .response-time, .time {
                font-size: 0.9rem;
                font-weight: 600;
                color: $blue-200;
              }
            }
          }
        }
      }
    }
  }
}

@media (max-width: 1024px) {
  .contact-section .contact-container .contact-content {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}

@media (max-width: 768px) {
  .contact-section {
    padding: 60px 20px;

    .contact-container .contact-content .contact-form-section .contact-form {
      padding: 20px;

      .form-row {
        grid-template-columns: 1fr;
        gap: 0;
      }
    }
  }
}

@media (max-width: 480px) {
  .contact-section {
    padding: 40px 15px;

    .contact-container .contact-content .contact-form-section .contact-form {
      padding: 16px;
    }
  }
}
</style>

