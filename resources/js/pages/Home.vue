<template>
  <div class="page-wrapper">
    <!-- Header -->
    <header class="header">
      <div class="container">
        <div class="header-content">
          <!-- Logo -->
          <div class="logo-section">
            <img src="/asset/logos/44.png" alt="Alzeer Group Holding" class="logo-image" />
        </div>

          <!-- Navigation - Desktop -->
          <nav class="nav-desktop">
            <a href="#home" class="nav-link">{{ labels.home }}</a>
            <a href="/about" class="nav-link">{{ labels.about }}</a>
            <a href="#companies" class="nav-link">{{ labels.companies }}</a>
            <a href="#portfolio" class="nav-link">{{ labels.portfolio }}</a>
            <a href="/contact" class="nav-link">{{ labels.contact }}</a>
          </nav>

          <!-- Actions -->
          <div class="header-actions">
            <div class="language-switch">
              <button class="lang-btn" :class="{ active: currentLanguage === 'EN' }" @click="setLanguage('EN')">EN</button>
              <button class="lang-btn" :class="{ active: currentLanguage === 'AR' }" @click="setLanguage('AR')">AR</button>
          </div>
            <button class="btn-menu-mobile" @click="toggleMobileMenu">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="4" x2="20" y1="12" y2="12"/>
                <line x1="4" x2="20" y1="6" y2="6"/>
                <line x1="4" x2="20" y1="18" y2="18"/>
              </svg>
        </button>
        </div>
      </div>
              </div>

      <!-- Mobile Menu -->
      <transition name="mobile-menu">
        <div v-if="mobileMenuOpen" class="mobile-menu">
          <nav class="mobile-nav">
            <a href="#home" class="mobile-nav-link" @click="toggleMobileMenu">{{ labels.home }}</a>
            <a href="/about" class="mobile-nav-link" @click="toggleMobileMenu">{{ labels.about }}</a>
            <a href="#companies" class="mobile-nav-link" @click="toggleMobileMenu">{{ labels.companies }}</a>
            <a href="#portfolio" class="mobile-nav-link" @click="toggleMobileMenu">{{ labels.portfolio }}</a>
            <a href="/contact" class="mobile-nav-link" @click="toggleMobileMenu">{{ labels.contact }}</a>
    </nav>
                </div>
      </transition>
    </header>

    <!-- Hero Section -->
    <section id="home" class="hero-section">
      <!-- Video Background -->
      <div class="video-background">
      <video
        autoplay
        muted
        loop
        playsinline
          class="video-element"
      >
          <source src="/asset/background-video.mp4" type="video/mp4" />
      </video>
      <div class="video-overlay"></div>
            </div>

      <!-- Animated Background Elements -->
      <div class="animated-bg">
        <div class="bg-circle bg-circle-1"></div>
        <div class="bg-circle bg-circle-2"></div>
          </div>

      <!-- Content -->
      <div class="hero-content">
        <div class="hero-badge">
          <span class="badge-text">{{ labels.heroBadge }}</span>
        </div>

        <h1 class="hero-title" v-html="labels.heroTitle"></h1>

        <p class="hero-description" v-html="labels.heroDescription"></p>

        <div class="hero-actions">
          <button class="btn-primary">
            {{ labels.heroCtaPrimary }}
            <svg
              class="btn-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
                </div>

              </div>
      </section>

    <!-- Companies Section -->
    <section id="companies" class="services-section">
      <div class="services-container">
        <!-- Section Header -->
        <div class="services-header">
          <span class="services-badge">{{ labels.companiesBadge }}</span>
          <h2 class="services-title" v-html="labels.companiesTitle"></h2>
          <p class="services-description" v-html="labels.companiesDescription"></p>
              </div>

        <!-- Companies Grid (Circular Icons) -->
        <div class="companies-grid">
          <div
            v-for="company in companies"
            :key="company.id"
            class="company-circle"
            @click="openCompanyWebsite(company.website)"
            :title="company.name"
          >
            <img v-if="company.logo_path" :src="`/storage/${company.logo_path}`" :alt="company.name" class="company-circle-logo" />
            <div v-else class="company-circle-fallback">{{ (company.name || '?').charAt(0) }}</div>
          </div>
        </div>

        <!-- Call to Action -->
        <div class="services-cta">
          <div class="cta-box">
            <h3 class="cta-title" v-html="labels.companiesCtaTitle"></h3>
            <p class="cta-description" v-html="labels.companiesCtaDescription"></p>
            <button class="cta-button">
              {{ labels.companiesCtaButton }}
                </button>
              </div>
              </div>
            </div>
    </section>

      <!-- Footer -->
    <footer class="footer-section">
      <div class="footer-container">
        <div class="footer-grid">
            <!-- Company Info -->
          <div class="footer-company">
            <div class="footer-logo-section">
              <img src="/asset/logos/44.png" alt="Alzeer Group Holding" class="footer-logo-image" />
              </div>
            <p class="footer-company-description">{{ labels.footerCompanyDescription || ' ' }}</p>
            <div class="footer-social-links">
              <a href="#" class="social-icon-link">
                <svg class="social-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="#" class="social-icon-link">
                <svg class="social-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a href="#" class="social-icon-link">
                <svg class="social-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                </a>
              </div>
            </div>

            <!-- Quick Links -->
          <div class="footer-links-section">
            <h4 class="footer-section-title">{{ labels.footerQuickLinks }}</h4>
            <ul class="footer-links-list">
              <li><a href="#about" class="footer-link">{{ labels.about }}</a></li>
              <li><a href="#companies" class="footer-link">{{ labels.companies }}</a></li>
              <li><a href="#portfolio" class="footer-link">{{ labels.footerQuickLinks === 'روابط سريعة' ? 'هويتنا' : 'Portfolio' }}</a></li>
              <li><a href="#" class="footer-link">{{ labels.footerQuickLinks === 'روابط سريعة' ? 'الوظائف' : 'Careers' }}</a></li>
              <li><a href="#" class="footer-link">{{ labels.footerQuickLinks === 'روابط سريعة' ? 'الأخبار' : 'News' }}</a></li>
              </ul>
            </div>

          <!-- Contact Info -->
          <div class="footer-contact-section">
            <h4 class="footer-section-title">{{ labels.footerContact }}</h4>
            <div class="footer-contact-list">
              <div class="footer-contact-item">
                <svg class="contact-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span class="contact-text">Dubai, UAE</span>
              </div>
              <div class="footer-contact-item">
                <svg class="contact-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span class="contact-text">+971 4 XXX XXXX</span>
              </div>
              <div class="footer-contact-item">
                <svg class="contact-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
                <span class="contact-text">info@alzeergroup.com</span>
              </div>
            </div>
          </div>
          </div>

        <!-- Bottom Bar -->
          <div class="footer-bottom">
          <div class="footer-bottom-content">
            <p class="footer-copyright">{{ labels.footerCopyright }}</p>
              <div class="footer-bottom-links">
              <a href="#" class="footer-bottom-link">{{ labels.footerPrivacy }}</a>
              <a href="#" class="footer-bottom-link">{{ labels.footerTerms }}</a>
              <a href="#" class="footer-bottom-link">{{ labels.footerLegal }}</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { usePage } from '@inertiajs/vue3'
import { t, setLanguage as i18nSetLanguage, currentLanguage as i18nLang } from '../lib/i18n'

const mobileMenuOpen = ref(false)
const toggleMobileMenu = () => { mobileMenuOpen.value = !mobileMenuOpen.value }

// Companies from server (Inertia props)
const page = usePage()
const companies = computed(() => (page.props.companies as any[]) || [])

function openCompanyWebsite(url?: string) {
  if (!url) return
  try {
    const normalized = url.startsWith('http') ? url : `https://${url}`
    window.open(normalized, '_blank', 'noopener,noreferrer')
  } catch (e) {
    console.error('Invalid website url:', url)
  }
}

// Language management via i18n helper
const currentLanguage = i18nLang
function setLanguage(code: 'EN' | 'AR') { i18nSetLanguage(code) }

// Labels computed to ensure reactivity is tracked explicitly
const labels = computed(() => ({
  home: t('header.home'),
  about: t('header.about'),
  companies: t('header.companies'),
  portfolio: t('header.portfolio'),
  contact: t('header.contact'),
  heroBadge: t('hero.badge'),
  heroTitle: t('hero.title'),
  heroDescription: t('hero.description'),
  heroCtaPrimary: t('hero.ctaPrimary'),
  heroCtaSecondary: t('hero.ctaSecondary'),
  companiesBadge: t('companies.badge'),
  companiesTitle: t('companies.title'),
  companiesDescription: t('companies.description'),
  companiesCtaTitle: t('companies.ctaTitle'),
  companiesCtaDescription: t('companies.ctaDescription'),
  companiesCtaButton: t('companies.ctaButton'),
  footerQuickLinks: t('footer.quickLinks'),
  footerPrivacy: t('footer.privacy'),
  footerTerms: t('footer.terms'),
  footerLegal: t('footer.legal'),
  footerContact: t('header.contact'),
  footerCompanyDescription: t('footer.companyDescription'),
  footerCopyright: t('footer.copyright'),
}))
</script>

<style scoped>
.page-wrapper {
  width: 100%;
  min-height: 100vh;
  background: #ffffff; /* site background white */
}

/* Header Styles */
.header {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 50;
  background: transparent;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(217, 187, 89, 0.1);
}

.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
}

/* Logo Section */
.logo-section {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.logo-image {
  height: 5rem;
  width: auto;
  object-fit: contain;
}

.logo-text {
  font-size: 1.25rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0;
}

/* Desktop Navigation */
.nav-desktop {
  display: none;
  align-items: center;
  gap: 2rem;
}

.nav-link {
  color: #ffffff;
  text-decoration: none;
  transition: color 0.3s ease;
  font-weight: 500;
}

.nav-link:hover {
  color: #d9bb59;
}

/* Header Actions */
.header-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.language-switch {
  display: inline-flex;
  background: rgba(255, 255, 255, 0.6);
  border: 1px solid rgba(0,0,0,0.1);
  border-radius: 9999px;
  overflow: hidden;
}

.lang-btn {
  padding: 0.35rem 0.75rem;
  font-size: 0.85rem;
  font-weight: 600;
  color: #111827;
  background: transparent;
  border: none;
  cursor: pointer;
}

.lang-btn.active {
  background: #111827;
  color: #ffffff;
}

/* Removed Get Started button */

.btn-menu-mobile {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  background: transparent;
  border: none;
  color: #ffffff;
  cursor: pointer;
  transition: color 0.3s ease;
}

.btn-menu-mobile:hover {
  color: #d9bb59;
}

/* Mobile Menu */
.mobile-menu {
  background: rgba(0, 0, 0, 0.95);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-top: 1px solid rgba(217, 187, 89, 0.2);
}

.mobile-nav {
  display: flex;
  flex-direction: column;
  padding: 1rem 1.5rem;
}

.mobile-nav-link {
  color: #ffffff;
  text-decoration: none;
  padding: 1rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  transition: color 0.3s ease;
  font-weight: 500;
}

.mobile-nav-link:hover {
  color: #d9bb59;
}

.mobile-nav-link:last-child {
  border-bottom: none;
}

/* Mobile Menu Animation */
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.3s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}


/* Desktop Styles */
@media (min-width: 768px) {
  .nav-desktop {
  display: flex;
  }

  .btn-get-started {
  display: inline-flex;
  }

  .btn-menu-mobile {
    display: none;
  }

  .mobile-menu {
    display: none;
  }
}

/* Larger Screens */
@media (min-width: 1024px) {
  .container {
    padding: 0 2rem;
  }
}

/* Hero Section */
.hero-section {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  overflow: hidden;
  margin-top: 0;
  padding-top: 0 !important;
}

/* Language-specific positioning for hero section */
[dir="rtl"] .hero-section {
  justify-content: flex-end;
  padding-right: 2rem;
}

[dir="ltr"] .hero-section {
  justify-content: flex-start;
  padding-left: 2rem;
}

/* Video Background */
.video-background {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.video-element {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.video-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
}

/* Animated Background Elements */
.animated-bg {
  position: absolute;
  inset: 0;
  z-index: 10;
}

.bg-circle {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
}

.bg-circle-1 {
  top: 25%;
  left: 25%;
  width: 16rem;
  height: 16rem;
  background: rgba(217, 187, 89, 0.1);
  animation: pulse 3s ease-in-out infinite;
}

.bg-circle-2 {
  bottom: 25%;
  right: 25%;
  width: 24rem;
  height: 24rem;
  background: rgba(245, 158, 11, 0.05);
  animation: pulse 3s ease-in-out infinite;
  animation-delay: 1s;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.1);
  }
}

/* Hero Content */
.hero-content {
  position: absolute;
  z-index: 20;
  text-align: center;
  max-width: 56rem;
  padding: 0 1.5rem;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
}

/* Language-specific positioning for hero content */
[dir="rtl"] .hero-content {
  text-align: right;
  left: auto;
  right: 5%;
  transform: none;
  max-width: 50rem;
}

[dir="ltr"] .hero-content {
  text-align: left;
  left: 5%;
  right: auto;
  transform: none;
  max-width: 50rem;
}

.hero-badge {
  margin-bottom: 1.5rem;
}

.badge-text {
  display: inline-block;
  padding: 0.5rem 1rem;
  background: rgba(217, 187, 89, 0.2);
  border: 1px solid rgba(217, 187, 89, 0.3);
  border-radius: 9999px;
  color: #d9bb59;
  font-size: 0.875rem;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  }

  .hero-title {
    font-size: 3rem;
  font-weight: 700;
    margin-bottom: 1.5rem;
  background: linear-gradient(to right, #ffffff, #d9bb59, #f59e0b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.1;
}

.hero-description {
  font-size: 1.25rem;
  color: #d1d5db;
  margin-bottom: 2rem;
  max-width: 42rem;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.75;
}

/* Hero Actions */
.hero-actions {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1rem;
  margin-top: 1rem;
}

/* Language-specific positioning for hero actions */
[dir="rtl"] .hero-actions {
  align-items: flex-end;
  text-align: right;
}

[dir="ltr"] .hero-actions {
  align-items: flex-start;
  text-align: left;
}

/* More specific targeting for the button */
[dir="rtl"] .hero-actions .btn-primary {
  margin-left: auto;
  margin-right: 0;
  align-self: flex-end;
  transform: translateX(0);
}

[dir="ltr"] .hero-actions .btn-primary {
  margin-left: 0;
  margin-right: auto;
  align-self: flex-start;
  transform: translateX(0);
}

/* Force the positioning to be more visible */
[dir="rtl"] .hero-actions {
  justify-content: flex-end;
}

[dir="ltr"] .hero-actions {
  justify-content: flex-start;
}

.btn-primary,
.btn-secondary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem;
    font-size: 1rem;
  font-weight: 500;
  border-radius: 9999px;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  gap: 0.5rem;
}

.btn-primary {
  background: #d9bb59;
  color: #000000;
}

.btn-primary:hover {
  background: rgba(217, 187, 89, 0.9);
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(217, 187, 89, 0.3);
}

.btn-primary .btn-icon {
  transition: transform 0.3s ease;
}

.btn-primary:hover .btn-icon {
  transform: translateX(4px);
}

.btn-secondary {
  background: transparent;
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
}

.btn-icon-left {
  transition: transform 0.3s ease;
}

.btn-secondary:hover .btn-icon-left {
  transform: scale(1.1);
}


/* Hero Responsive */
@media (min-width: 640px) {
  .hero-actions {
    flex-direction: row;
  }
}

@media (min-width: 768px) {
  .hero-title {
    font-size: 4rem;
  }

  .hero-description {
    font-size: 1.5rem;
  }
}

@media (min-width: 1024px) {
  .hero-title {
    font-size: 5rem;
  }
}

/* Services Section */
.services-section {
  padding: 6rem 0;
  background: #ffffff;
}

.services-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

/* Services Header */
.services-header {
  text-align: center;
  margin-bottom: 4rem;
}

.services-badge {
  display: inline-block;
  padding: 0.5rem 1rem;
  background: rgba(217, 187, 89, 0.2);
  border: 1px solid rgba(217, 187, 89, 0.3);
  border-radius: 9999px;
  color: #d9bb59;
  font-size: 0.875rem;
  margin-bottom: 1rem;
}

.services-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  background: linear-gradient(to right, #ffffff, #d9bb59);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.2;
}

.services-description {
  font-size: 1.25rem;
  color: #d1d5db;
  max-width: 48rem;
  margin: 0 auto;
  line-height: 1.75;
}

/* Companies Grid - Circular Icons */
.companies-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin-bottom: 4rem;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
}

/* Company Circle */
.company-circle {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: #ffffff;
  border: 3px solid rgba(217, 187, 89, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.company-circle:hover {
  border-color: #d9bb59;
  transform: scale(1.1);
  box-shadow: 0 8px 25px rgba(217, 187, 89, 0.3);
}

.company-circle-logo {
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 15px;
}

.company-circle-fallback {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #d9bb59, #f59e0b);
  color: #ffffff;
  font-weight: 700;
  font-size: 2rem;
}

/* Services Grid */
.services-grid {
  display: grid;
  gap: 2rem;
  margin-bottom: 4rem;
  align-items: stretch; /* ensure equal height cards */
}

/* Service Card */
.service-card {
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 1rem;
  transition: all 0.5s ease;
  cursor: pointer;
  height: 100%;
}

.service-card:active {
  transform: scale(0.995);
}

.service-card:hover {
  border-color: rgba(0, 0, 0, 0.15);
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
}

.service-content {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  height: 100%;
}

/* Service Icon */
.service-icon-wrapper {
  width: 4rem;
  height: 4rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  transition: transform 0.3s ease;
}

.service-card:hover .service-icon-wrapper {
  transform: scale(1.1);
}

.service-icon {
  width: 2rem;
  height: 2rem;
  color: #ffffff;
}

/* Company logo inside card */
.company-logo {
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 0.75rem;
}

.company-logo-fallback {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f3f4f6;
  color: #111827;
  font-weight: 700;
  border-radius: 0.75rem;
}

.service-icon-blue {
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(6, 182, 212, 0.2));
}

.service-icon-purple {
  background: linear-gradient(135deg, rgba(168, 85, 247, 0.2), rgba(236, 72, 153, 0.2));
}

.service-icon-red {
  background: linear-gradient(135deg, rgba(239, 68, 68, 0.2), rgba(249, 115, 22, 0.2));
}

.service-icon-green {
  background: linear-gradient(135deg, rgba(34, 197, 94, 0.2), rgba(16, 185, 129, 0.2));
}

.service-icon-yellow {
  background: linear-gradient(135deg, rgba(234, 179, 8, 0.2), rgba(245, 158, 11, 0.2));
}

.service-icon-indigo {
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(59, 130, 246, 0.2));
}

/* Service Content */
.service-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #000000;
  margin-bottom: 1rem;
  transition: color 0.3s ease;
}

.service-card:hover .service-title {
  color: #d9bb59;
}

.service-text {
  color: #9ca3af;
  line-height: 1.75;
  margin-bottom: 0;
  max-height: 0; /* hidden by default */
  opacity: 0;
  overflow: hidden;
  transition: max-height 0.3s ease, opacity 0.3s ease;
}

.service-card:hover .service-text {
  max-height: 200px;
  opacity: 1;
}

/* Service Footer */
.service-footer {
  margin-top: auto; /* push footer to bottom for equal heights */
  padding-top: 1rem;
  border-top: 1px solid #e5e7eb;
}

.service-link {
  display: flex;
  align-items: center;
  color: #d9bb59;
  font-size: 0.875rem;
  font-weight: 500;
  transition: transform 0.3s ease;
}

.service-card:hover .service-link {
  transform: translateX(0.5rem);
}

.service-arrow {
  width: 1rem;
  height: 1rem;
  margin-left: 0.5rem;
}

/* Call to Action */
.services-cta {
  text-align: center;
  margin-top: 4rem;
}

.cta-box {
  background: linear-gradient(to right, rgba(217, 187, 89, 0.1), rgba(245, 158, 11, 0.1));
  border: 1px solid rgba(217, 187, 89, 0.2);
  border-radius: 1.5rem;
  padding: 2rem;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

.cta-title {
  font-size: 1.875rem;
  font-weight: 700;
  color: #000000;
  margin-bottom: 1rem;
}

.cta-description {
  color: #d1d5db;
  font-size: 1.125rem;
  margin-bottom: 2rem;
  max-width: 42rem;
  margin-left: auto;
  margin-right: auto;
}

.cta-button {
  background: #d9bb59;
  color: #000000;
  padding: 1rem 2rem;
  border-radius: 9999px;
  font-weight: 500;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.cta-button:hover {
  background: rgba(217, 187, 89, 0.9);
  transform: scale(1.05);
  box-shadow: 0 10px 30px rgba(217, 187, 89, 0.3);
}

/* Companies Responsive */
@media (min-width: 640px) {
  .companies-grid {
    gap: 2.5rem;
  }
}

@media (min-width: 768px) {
  .companies-grid {
    gap: 3rem;
  }

  .services-title {
    font-size: 3.75rem;
  }

  .cta-box {
    padding: 3rem;
  }
}

@media (min-width: 1024px) {
  .companies-grid {
    gap: 3rem;
  }
}

/* Services Responsive */
@media (min-width: 768px) {
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .services-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* Footer Section */
.footer-section {
  background: linear-gradient(to bottom, #1a1a1a, #000000);
  padding: 4rem 0;
  border-top: 1px solid rgba(217, 187, 89, 0.2);
}

.footer-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

/* Footer Grid */
.footer-grid {
  display: grid;
  gap: 2rem;
  margin-bottom: 3rem;
}

/* Company Section */
.footer-company {
  grid-column: span 2;
}

.footer-logo-section {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.footer-logo-image {
  height: 6rem;
  width: auto;
  object-fit: contain;
}

.footer-logo-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0;
}

.footer-company-description {
  color: #9ca3af;
  margin-bottom: 1.5rem;
  line-height: 1.75;
  max-width: 28rem;
}

/* Social Links */
.footer-social-links {
  display: flex;
  gap: 1rem;
}

.social-icon-link {
  width: 2.5rem;
  height: 2.5rem;
  background: rgba(217, 187, 89, 0.2);
  border: 1px solid rgba(217, 187, 89, 0.3);
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #d9bb59;
  transition: all 0.3s ease;
  text-decoration: none;
}

.social-icon-link:hover {
  background: #d9bb59;
  color: #000000;
  transform: translateY(-2px);
}

.social-icon {
  width: 1.25rem;
  height: 1.25rem;
}

/* Footer Links Section */
.footer-links-section,
.footer-contact-section {
  display: flex;
  flex-direction: column;
}

.footer-section-title {
  color: #ffffff;
  font-weight: 700;
  margin-bottom: 1rem;
  font-size: 1rem;
}

.footer-links-list {
  list-style: none;
    padding: 0;
  margin: 0;
  display: flex;
    flex-direction: column;
  gap: 0.5rem;
}

.footer-link {
  color: #9ca3af;
  text-decoration: none;
  transition: color 0.3s ease;
  font-size: 0.9rem;
}

.footer-link:hover {
  color: #d9bb59;
}

/* Contact Section */
.footer-contact-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.footer-contact-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: #9ca3af;
}

.contact-icon {
  width: 1rem;
  height: 1rem;
  color: #d9bb59;
  flex-shrink: 0;
}

.contact-text {
  font-size: 0.875rem;
}

/* Footer Bottom */
.footer-bottom {
  border-top: 1px solid #1f2937;
  padding-top: 2rem;
}

.footer-bottom-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
    gap: 1rem;
  }

.footer-copyright {
  color: #9ca3af;
  font-size: 0.875rem;
  margin: 0;
}

.footer-bottom-links {
  display: flex;
    gap: 1.5rem;
  }

.footer-bottom-link {
  color: #9ca3af;
  text-decoration: none;
  font-size: 0.875rem;
  transition: color 0.3s ease;
}

.footer-bottom-link:hover {
  color: #d9bb59;
}

/* Footer Responsive */
@media (min-width: 768px) {
  .footer-grid {
    grid-template-columns: repeat(4, 1fr);
  }

  .footer-company {
    grid-column: span 2;
  }

  .footer-bottom-content {
    flex-direction: row;
  }
}

/* Force hero content positioning for both languages */
.hero-content {
  position: absolute !important;
  top: 20% !important;
  z-index: 20 !important;
}

[dir="rtl"] .hero-content {
  position: absolute !important;
  top: 20% !important;
  right: 5% !important;
  left: auto !important;
  transform: none !important;
  z-index: 20 !important;
}

[dir="ltr"] .hero-content {
  position: absolute !important;
  top: 20% !important;
  left: 5% !important;
  right: auto !important;
  transform: none !important;
  z-index: 20 !important;
}
</style>
