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
            <a href="/" class="nav-link">{{ labels.home }}</a>
            <a href="/about" class="nav-link active">{{ labels.about }}</a>
            <a href="/#companies" class="nav-link">{{ labels.companies }}</a>
            <a href="/Company%20Profile%20FAHAD%20(1).pdf" class="nav-link" target="_blank" rel="noopener">{{ labels.portfolio }}</a>
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
            <a href="/" class="mobile-nav-link" @click="toggleMobileMenu">{{ labels.home }}</a>
            <a href="/about" class="mobile-nav-link" @click="toggleMobileMenu">{{ labels.about }}</a>
            <a href="/#companies" class="mobile-nav-link" @click="toggleMobileMenu">{{ labels.companies }}</a>
            <a href="/Company%20Profile%20FAHAD%20(1).pdf" class="mobile-nav-link" target="_blank" rel="noopener" @click="toggleMobileMenu">{{ labels.portfolio }}</a>
            <a href="/contact" class="mobile-nav-link" @click="toggleMobileMenu">{{ labels.contact }}</a>
          </nav>
        </div>
      </transition>
    </header>

    <!-- Hero Section -->
    <section class="about-hero-section">
      <div class="about-hero-content">
        <div class="about-hero-badge">
          <span class="badge-text">{{ labels.aboutBadge }}</span>
        </div>
        <h1 class="about-hero-title" v-html="labels.aboutTitle"></h1>
        <p class="about-hero-description" v-html="labels.aboutDescription"></p>
      </div>
    </section>

    <!-- Mission & Vision Section -->
    <section class="mission-vision-section">
      <div class="mission-vision-container">
        <div class="mission-vision-grid">
          <!-- Mission -->
          <div class="mission-card">
            <div class="mission-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                <path d="M2 17l10 5 10-5"/>
                <path d="M2 12l10 5 10-5"/>
              </svg>
            </div>
            <h3 class="mission-title">{{ labels.missionTitle }}</h3>
            <p class="mission-description" v-html="labels.missionDescription"></p>
          </div>

          <!-- Vision -->
          <div class="vision-card">
            <div class="vision-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                <circle cx="12" cy="12" r="3"/>
              </svg>
            </div>
            <h3 class="vision-title">{{ labels.visionTitle }}</h3>
            <p class="vision-description" v-html="labels.visionDescription"></p>
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="values-section">
      <div class="values-container">
        <div class="values-header">
          <span class="values-badge">{{ labels.valuesBadge }}</span>
          <h2 class="values-title" v-html="labels.valuesTitle"></h2>
          <p class="values-description" v-html="labels.valuesDescription"></p>
        </div>

        <div class="values-grid">
          <div class="value-card" v-for="(value, index) in values" :key="index">
            <div class="value-icon">
              <component :is="value.icon" />
            </div>
            <h4 class="value-title">{{ value.title }}</h4>
            <p class="value-description">{{ value.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Leadership Section -->
    <section class="leadership-section">
      <div class="leadership-container">
        <div class="leadership-header">
          <span class="leadership-badge">{{ labels.leadershipBadge }}</span>
          <h2 class="leadership-title" v-html="labels.leadershipTitle"></h2>
          <p class="leadership-description" v-html="labels.leadershipDescription"></p>
        </div>

        <div class="leadership-content">
          <div class="leader-card">
            <div class="leader-image">
              <img src="/asset/leadership/leader.jpg" alt="Fahad Nawaf Alzeer" class="leader-photo" />
            </div>
            <div class="leader-info">
              <h3 class="leader-name">{{ labels.leaderName }}</h3>
              <p class="leader-position">{{ labels.leaderPosition }}</p>
              <p class="leader-bio" v-html="labels.leaderBio"></p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- History Section -->
    <section class="history-section">
      <div class="history-container">
        <div class="history-header">
          <span class="history-badge">{{ labels.historyBadge }}</span>
          <h2 class="history-title" v-html="labels.historyTitle"></h2>
          <p class="history-description" v-html="labels.historyDescription"></p>
        </div>

        <div class="timeline">
          <div class="timeline-item" v-for="(milestone, index) in milestones" :key="index">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <div class="timeline-year">{{ milestone.year }}</div>
              <h4 class="timeline-title">{{ milestone.title }}</h4>
              <p class="timeline-description">{{ milestone.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="about-cta-section">
      <div class="about-cta-container">
        <div class="about-cta-content">
          <h2 class="about-cta-title" v-html="labels.aboutCtaTitle"></h2>
          <p class="about-cta-description" v-html="labels.aboutCtaDescription"></p>
          <div class="about-cta-actions">
            <a href="/#companies" class="btn-primary">
              {{ labels.aboutCtaButton }}
              <svg class="btn-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
            <a href="/#contact" class="btn-secondary">
              {{ labels.aboutCtaSecondary }}
            </a>
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
              <li><a href="/about" class="footer-link">{{ labels.about }}</a></li>
              <li><a href="/#companies" class="footer-link">{{ labels.companies }}</a></li>
              <li>
                <a href="/Company%20Profile%20FAHAD%20(1).pdf" class="footer-link" target="_blank" rel="noopener">
                  {{ labels.footerQuickLinks === 'روابط سريعة' ? 'هويتنا' : 'Portfolio' }}
                </a>
              </li>
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
import { t, setLanguage as i18nSetLanguage, currentLanguage as i18nLang } from '../lib/i18n'

const mobileMenuOpen = ref(false)
const toggleMobileMenu = () => { mobileMenuOpen.value = !mobileMenuOpen.value }

// Language management via i18n helper
const currentLanguage = i18nLang
function setLanguage(code: 'EN' | 'AR') { i18nSetLanguage(code) }

// Values data
const values = computed(() => [
  {
    icon: 'svg',
    title: currentLanguage.value === 'AR' ? 'التميز' : 'Excellence',
    description: currentLanguage.value === 'AR' ? 'نسعى للتميز في كل ما نقوم به، من خلال تقديم أعلى معايير الجودة والابتكار في جميع استثماراتنا.' : 'We strive for excellence in everything we do, delivering the highest standards of quality and innovation in all our investments.'
  },
  {
    icon: 'svg',
    title: currentLanguage.value === 'AR' ? 'الابتكار' : 'Innovation',
    description: currentLanguage.value === 'AR' ? 'نؤمن بقوة الابتكار في دفع النمو المستدام وخلق فرص جديدة في الأسواق الناشئة.' : 'We believe in the power of innovation to drive sustainable growth and create new opportunities in emerging markets.'
  },
  {
    icon: 'svg',
    title: currentLanguage.value === 'AR' ? 'الاستدامة' : 'Sustainability',
    description: currentLanguage.value === 'AR' ? 'نلتزم بممارسات الاستثمار المستدامة التي تحترم البيئة وتدعم المجتمعات المحلية.' : 'We are committed to sustainable investment practices that respect the environment and support local communities.'
  },
  {
    icon: 'svg',
    title: currentLanguage.value === 'AR' ? 'الشراكة' : 'Partnership',
    description: currentLanguage.value === 'AR' ? 'نؤمن بقوة الشراكة الاستراتيجية في بناء علاقات طويلة الأمد مع شركائنا ومستثمرينا.' : 'We believe in the power of strategic partnerships to build long-term relationships with our partners and investors.'
  }
])

// Milestones data
const milestones = computed(() => [
  {
    year: '2020',
    title: currentLanguage.value === 'AR' ? 'تأسيس المجموعة' : 'Foundation',
    description: currentLanguage.value === 'AR' ? 'تأسيس فهد نواف الزير القابضة كشركة استثمارية رائدة في دولة الإمارات العربية المتحدة.' : 'Establishment of Alzeer Group Holding as a leading investment company in the United Arab Emirates.'
  },
  {
    year: '2021',
    title: currentLanguage.value === 'AR' ? 'التوسع الأول' : 'First Expansion',
    description: currentLanguage.value === 'AR' ? 'بدء التوسع في قطاعات متعددة مع استثمارات استراتيجية في التكنولوجيا والطاقة المتجددة.' : 'Beginning expansion into multiple sectors with strategic investments in technology and renewable energy.'
  },
  {
    year: '2022',
    title: currentLanguage.value === 'AR' ? 'الشراكات الاستراتيجية' : 'Strategic Partnerships',
    description: currentLanguage.value === 'AR' ? 'إقامة شراكات استراتيجية مع شركات عالمية رائدة في مختلف القطاعات.' : 'Establishing strategic partnerships with leading global companies across various sectors.'
  },
  {
    year: '2023',
    title: currentLanguage.value === 'AR' ? 'التميز في الأداء' : 'Performance Excellence',
    description: currentLanguage.value === 'AR' ? 'تحقيق نمو استثنائي في المحفظة الاستثمارية مع عوائد متميزة للمستثمرين.' : 'Achieving exceptional growth in the investment portfolio with outstanding returns for investors.'
  },
  {
    year: '2024',
    title: currentLanguage.value === 'AR' ? 'الرؤية المستقبلية' : 'Future Vision',
    description: currentLanguage.value === 'AR' ? 'إطلاق رؤية طموحة للتوسع الإقليمي والعالمي مع التركيز على الاستدامة والابتكار.' : 'Launching an ambitious vision for regional and global expansion with a focus on sustainability and innovation.'
  }
])

// Labels computed to ensure reactivity is tracked explicitly
const labels = computed(() => ({
  home: t('header.home'),
  about: t('header.about'),
  companies: t('header.companies'),
  portfolio: t('header.portfolio'),
  contact: t('header.contact'),

  aboutBadge: t('about.badge'),
  aboutTitle: t('about.title'),
  aboutDescription: t('about.description'),

  missionTitle: t('about.missionTitle'),
  missionDescription: t('about.missionDescription'),

  visionTitle: t('about.visionTitle'),
  visionDescription: t('about.visionDescription'),

  valuesBadge: t('about.valuesBadge'),
  valuesTitle: t('about.valuesTitle'),
  valuesDescription: t('about.valuesDescription'),

  leadershipBadge: t('about.leadershipBadge'),
  leadershipTitle: t('about.leadershipTitle'),
  leadershipDescription: t('about.leadershipDescription'),

  leaderName: t('about.leaderName'),
  leaderPosition: t('about.leaderPosition'),
  leaderBio: t('about.leaderBio'),

  historyBadge: t('about.historyBadge'),
  historyTitle: t('about.historyTitle'),
  historyDescription: t('about.historyDescription'),

  aboutCtaTitle: t('about.ctaTitle'),
  aboutCtaDescription: t('about.ctaDescription'),
  aboutCtaButton: t('about.ctaButton'),
  aboutCtaSecondary: t('about.ctaSecondary'),

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
  background: #ffffff;
}

/* Header Styles - Same as Home page */
.header {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 50;
  background: rgba(0, 0, 0, 0.95);
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

.nav-link:hover,
.nav-link.active {
  color: #d9bb59;
}

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
  .btn-menu-mobile {
    display: none;
  }
  .mobile-menu {
    display: none;
  }
}

@media (min-width: 1024px) {
  .container {
    padding: 0 2rem;
  }
}

/* About Hero Section */
.about-hero-section {
  padding: 8rem 0 6rem;
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  color: #ffffff;
  position: relative;
  overflow: hidden;
}

.about-hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('/asset/patterns/dots.svg') repeat;
  opacity: 0.1;
  z-index: 1;
}

.about-hero-content {
  position: relative;
  z-index: 2;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
  text-align: center;
}

.about-hero-badge {
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

.about-hero-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  background: linear-gradient(to right, #ffffff, #d9bb59, #f59e0b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.1;
}

.about-hero-description {
  font-size: 1.25rem;
  color: #d1d5db;
  margin-bottom: 2rem;
  max-width: 48rem;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.75;
}

/* Mission & Vision Section */
.mission-vision-section {
  padding: 6rem 0;
  background: #ffffff;
}

.mission-vision-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.mission-vision-grid {
  display: grid;
  gap: 3rem;
  grid-template-columns: 1fr;
}

.mission-card,
.vision-card {
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 1.5rem;
  padding: 3rem;
  text-align: center;
  transition: all 0.3s ease;
}

.mission-card:hover,
.vision-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.mission-icon,
.vision-icon {
  width: 4rem;
  height: 4rem;
  background: linear-gradient(135deg, rgba(217, 187, 89, 0.2), rgba(245, 158, 11, 0.2));
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  color: #d9bb59;
}

.mission-title,
.vision-title {
  font-size: 1.875rem;
  font-weight: 700;
  color: #000000;
  margin-bottom: 1rem;
}

.mission-description,
.vision-description {
  color: #6b7280;
  line-height: 1.75;
  font-size: 1.125rem;
}

/* Values Section */
.values-section {
  padding: 6rem 0;
  background: #f8fafc;
}

.values-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.values-header {
  text-align: center;
  margin-bottom: 4rem;
}

.values-badge {
  display: inline-block;
  padding: 0.5rem 1rem;
  background: rgba(217, 187, 89, 0.2);
  border: 1px solid rgba(217, 187, 89, 0.3);
  border-radius: 9999px;
  color: #d9bb59;
  font-size: 0.875rem;
  margin-bottom: 1rem;
}

.values-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  background: linear-gradient(to right, #1a1a1a, #d9bb59);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.2;
}

.values-description {
  font-size: 1.25rem;
  color: #6b7280;
  max-width: 48rem;
  margin: 0 auto;
  line-height: 1.75;
}

.values-grid {
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr;
}

.value-card {
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 1rem;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
}

.value-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.value-icon {
  width: 3rem;
  height: 3rem;
  background: linear-gradient(135deg, rgba(217, 187, 89, 0.2), rgba(245, 158, 11, 0.2));
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  color: #d9bb59;
}

.value-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #000000;
  margin-bottom: 0.75rem;
}

.value-description {
  color: #6b7280;
  line-height: 1.6;
}

/* Leadership Section */
.leadership-section {
  padding: 6rem 0;
  background: #ffffff;
}

.leadership-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.leadership-header {
  text-align: center;
  margin-bottom: 4rem;
}

.leadership-badge {
  display: inline-block;
  padding: 0.5rem 1rem;
  background: rgba(217, 187, 89, 0.2);
  border: 1px solid rgba(217, 187, 89, 0.3);
  border-radius: 9999px;
  color: #d9bb59;
  font-size: 0.875rem;
  margin-bottom: 1rem;
}

.leadership-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  background: linear-gradient(to right, #1a1a1a, #d9bb59);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.2;
}

.leadership-description {
  font-size: 1.25rem;
  color: #6b7280;
  max-width: 48rem;
  margin: 0 auto;
  line-height: 1.75;
}

.leadership-content {
  max-width: 48rem;
  margin: 0 auto;
}

.leader-card {
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 1.5rem;
  padding: 3rem;
  display: flex;
  gap: 2rem;
  align-items: center;
  transition: all 0.3s ease;
}

.leader-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.leader-image {
  flex-shrink: 0;
}

.leader-photo {
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #d9bb59;
}

.leader-info {
  flex: 1;
}

.leader-name {
  font-size: 1.875rem;
  font-weight: 700;
  color: #000000;
  margin-bottom: 0.5rem;
}

.leader-position {
  font-size: 1.125rem;
  color: #d9bb59;
  font-weight: 600;
  margin-bottom: 1rem;
}

.leader-bio {
  color: #6b7280;
  line-height: 1.75;
  font-size: 1rem;
}

/* History Section */
.history-section {
  padding: 6rem 0;
  background: #f8fafc;
}

.history-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.history-header {
  text-align: center;
  margin-bottom: 4rem;
}

.history-badge {
  display: inline-block;
  padding: 0.5rem 1rem;
  background: rgba(217, 187, 89, 0.2);
  border: 1px solid rgba(217, 187, 89, 0.3);
  border-radius: 9999px;
  color: #d9bb59;
  font-size: 0.875rem;
  margin-bottom: 1rem;
}

.history-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  background: linear-gradient(to right, #1a1a1a, #d9bb59);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.2;
}

.history-description {
  font-size: 1.25rem;
  color: #6b7280;
  max-width: 48rem;
  margin: 0 auto;
  line-height: 1.75;
}

.timeline {
  position: relative;
  max-width: 48rem;
  margin: 0 auto;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 2rem;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(to bottom, #d9bb59, #f59e0b);
}

.timeline-item {
  position: relative;
  margin-bottom: 3rem;
  padding-left: 5rem;
}

.timeline-marker {
  position: absolute;
  left: 1.5rem;
  top: 0.5rem;
  width: 1rem;
  height: 1rem;
  background: #d9bb59;
  border-radius: 50%;
  border: 3px solid #ffffff;
  box-shadow: 0 0 0 3px #d9bb59;
}

.timeline-content {
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 1rem;
  padding: 2rem;
  transition: all 0.3s ease;
}

.timeline-content:hover {
  transform: translateX(5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.timeline-year {
  font-size: 1.25rem;
  font-weight: 700;
  color: #d9bb59;
  margin-bottom: 0.5rem;
}

.timeline-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #000000;
  margin-bottom: 0.75rem;
}

.timeline-description {
  color: #6b7280;
  line-height: 1.6;
}

/* CTA Section */
.about-cta-section {
  padding: 6rem 0;
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  color: #ffffff;
}

.about-cta-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.about-cta-content {
  text-align: center;
  max-width: 48rem;
  margin: 0 auto;
}

.about-cta-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  background: linear-gradient(to right, #ffffff, #d9bb59);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.2;
}

.about-cta-description {
  font-size: 1.25rem;
  color: #d1d5db;
  margin-bottom: 2rem;
  line-height: 1.75;
}

.about-cta-actions {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
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
  text-decoration: none;
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

/* Footer Section - Same as Home page */
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

.footer-grid {
  display: grid;
  gap: 2rem;
  margin-bottom: 3rem;
}

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

.footer-company-description {
  color: #9ca3af;
  margin-bottom: 1.5rem;
  line-height: 1.75;
  max-width: 28rem;
}

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

/* Responsive Design */
@media (min-width: 640px) {
  .about-cta-actions {
    flex-direction: row;
    justify-content: center;
  }
}

@media (min-width: 768px) {
  .mission-vision-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .values-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .leader-card {
    flex-direction: row;
  }

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

@media (min-width: 1024px) {
  .values-grid {
    grid-template-columns: repeat(4, 1fr);
  }

  .about-hero-title {
    font-size: 4rem;
  }

  .about-hero-description {
    font-size: 1.5rem;
  }
}
</style>
