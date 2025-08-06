<script setup lang="ts">
const navigations = ref([
  {name: 'Home', path: '/'},
  {name: 'About', path: '#about'},
  {name: 'Services', path: '#services'},
  {name: 'Portfolio', path: '#portfolio'},
  {name: 'Partners', path: '#partners'},
  {name: 'Contact', path: '#contact'}
])

const isMobileMenuOpen = ref(false)
const isScrolled = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

// Handle scroll effect
onMounted(() => {
  const handleScroll = () => {
    isScrolled.value = window.scrollY > 50
  }

  window.addEventListener('scroll', handleScroll)

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
})

// Close mobile menu when clicking outside
onMounted(() => {
  const handleClickOutside = (event: Event) => {
    const navbar = document.querySelector('.navbar')
    if (navbar && !navbar.contains(event.target as Node)) {
      closeMobileMenu()
    }
  }

  document.addEventListener('click', handleClickOutside)

  onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside)
  })
})
</script>

<template>
  <nav class="navbar" :class="{ 'scrolled': isScrolled, 'mobile-open': isMobileMenuOpen }">
    <div class="navbar-container">
      <div class="navbar-content">
        <NuxtLink to="/" class="navbar-logo" @click="closeMobileMenu">
          <LogoWithText/>
        </NuxtLink>

        <div class="navbar-navigation desktop-nav">
          <NuxtLink
            v-for="navigation in navigations"
            :key="navigation.path"
            :to="navigation.path"
            class="nav-link"
            @click="closeMobileMenu"
          >
            {{ navigation.name }}
          </NuxtLink>
        </div>

        <div class="navbar-cta desktop-cta">
          <AnimatedButton :size="14">Get Started</AnimatedButton>
        </div>

        <button
          class="mobile-menu-button"
          @click="toggleMobileMenu"
          :class="{ 'active': isMobileMenuOpen }"
          aria-label="Toggle navigation menu"
        >
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
        </button>
      </div>

      <div class="mobile-navigation" :class="{ 'open': isMobileMenuOpen }">
        <div class="mobile-nav-content">
          <NuxtLink
            v-for="navigation in navigations"
            :key="navigation.path"
            :to="navigation.path"
            class="mobile-nav-link"
            @click="closeMobileMenu"
          >
            {{ navigation.name }}
          </NuxtLink>
          <div class="mobile-cta">
            <AnimatedButton :size="16" @click="closeMobileMenu">Get Started</AnimatedButton>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped lang="scss">
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba($white, 0.95);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba($gray-200, 0.3);
  transition: all 0.3s ease;

  &.scrolled {
    background: rgba($white, 0.98);
    box-shadow: 0 2px 20px rgba($black, 0.1);
    border-bottom-color: rgba($gray-200, 0.5);
  }

  .navbar-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;

    .navbar-content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 70px;

      .navbar-logo {
        display: flex;
        align-items: center;
        text-decoration: none;
        z-index: 1001;

        svg {
          height: 32px;
          width: auto;
        }
      }

      .navbar-navigation {
        display: flex;
        align-items: center;
        gap: 32px;

        .nav-link {
          text-decoration: none;
          color: $blue-400;
          font-weight: 500;
          font-size: 0.95rem;
          position: relative;
          transition: all 0.3s ease;

          &:hover {
            color: $blue-100;
          }

          &::after {
            content: '';
            position: absolute;
            bottom: -4px;
            left: 0;
            width: 0;
            height: 2px;
            background: $blue-100;
            transition: width 0.3s ease;
          }

          &:hover::after,
          &.router-link-active::after {
            width: 100%;
          }
        }
      }

      .navbar-cta {
        display: flex;
        align-items: center;
      }

      .mobile-menu-button {
        display: none;
        flex-direction: column;
        justify-content: center;
        width: 30px;
        height: 30px;
        background: none;
        border: none;
        cursor: pointer;
        padding: 0;
        z-index: 1001;

        .hamburger-line {
          display: block;
          width: 25px;
          height: 3px;
          background: $blue-400;
          margin: 3px 0;
          transition: all 0.3s ease;
          border-radius: 2px;
        }

        &.active {
          .hamburger-line:nth-child(1) {
            transform: rotate(45deg) translate(6px, 6px);
          }

          .hamburger-line:nth-child(2) {
            opacity: 0;
          }

          .hamburger-line:nth-child(3) {
            transform: rotate(-45deg) translate(6px, -6px);
          }
        }
      }
    }

    .mobile-navigation {
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      background: rgba($white, 0.98);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      border-bottom: 1px solid rgba($gray-200, 0.5);
      transform: translateY(-100%);
      opacity: 0;
      visibility: hidden;
      transition: all 0.3s ease;

      &.open {
        transform: translateY(0);
        opacity: 1;
        visibility: visible;
      }

      .mobile-nav-content {
        padding: 20px;
        display: flex;
        flex-direction: column;
        gap: 16px;

        .mobile-nav-link {
          text-decoration: none;
          color: $blue-400;
          font-weight: 500;
          font-size: 1.1rem;
          padding: 12px 0;
          border-bottom: 1px solid rgba($gray-200, 0.3);
          transition: all 0.3s ease;

          &:hover {
            color: $blue-100;
            padding-left: 8px;
          }

          &:last-of-type {
            border-bottom: none;
          }
        }

        .mobile-cta {
          margin-top: 16px;
          padding-top: 16px;
          border-top: 1px solid rgba($gray-200, 0.3);
        }
      }
    }
  }
}

@media (max-width: 968px) {
  .navbar .navbar-container .navbar-content {
    .desktop-nav,
    .desktop-cta {
      display: none;
    }

    .mobile-menu-button {
      display: flex;
    }
  }
}

@media (max-width: 768px) {
  .navbar .navbar-container {
    padding: 0 16px;

    .navbar-content {
      height: 60px;

      .navbar-logo svg {
        height: 28px;
      }
    }
  }
}

@media (max-width: 480px) {
  .navbar .navbar-container {
    padding: 0 12px;

    .mobile-navigation .mobile-nav-content {
      padding: 16px;
    }
  }
}

.navbar.mobile-open ~ * {
  overflow: hidden;
}
</style>
