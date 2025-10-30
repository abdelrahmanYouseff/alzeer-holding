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
            <a href="/about" class="nav-link">{{ labels.about }}</a>
            <a href="/#companies" class="nav-link">{{ labels.companies }}</a>
            <a href="/Company%20Profile%20FAHAD%20(1).pdf" class="nav-link" target="_blank" rel="noopener">{{ labels.portfolio }}</a>
            <a href="/contact" class="nav-link active">{{ labels.contact }}</a>
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
    <section class="contact-hero-section">
      <div class="contact-hero-content">
        <div class="contact-hero-badge">
          <span class="badge-text">{{ labels.contactBadge }}</span>
        </div>
        <h1 class="contact-hero-title" v-html="labels.contactTitle"></h1>
        <p class="contact-hero-description" v-html="labels.contactDescription"></p>
      </div>
    </section>

    <!-- Contact Info Section -->
    <section class="contact-info-section">
      <div class="contact-info-container">
        <div class="contact-info-grid">
          <!-- Address -->
          <div class="contact-info-card">
            <div class="contact-info-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <h3 class="contact-info-title">{{ labels.addressTitle }}</h3>
            <p class="contact-info-text">{{ labels.addressText }}</p>
          </div>

          <!-- Phone -->
          <div class="contact-info-card">
            <div class="contact-info-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </div>
            <h3 class="contact-info-title">{{ labels.phoneTitle }}</h3>
            <p class="contact-info-text">{{ labels.phoneText }}</p>
          </div>

          <!-- Email -->
          <div class="contact-info-card">
            <div class="contact-info-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>
            </div>
            <h3 class="contact-info-title">{{ labels.emailTitle }}</h3>
            <p class="contact-info-text">{{ labels.emailText }}</p>
          </div>

          <!-- Business Hours -->
          <div class="contact-info-card">
            <div class="contact-info-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12,6 12,12 16,14"></polyline>
              </svg>
            </div>
            <h3 class="contact-info-title">{{ labels.hoursTitle }}</h3>
            <p class="contact-info-text">{{ labels.hoursText }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Form Section -->
    <section class="contact-form-section">
      <div class="contact-form-container">
        <div class="contact-form-header">
          <span class="contact-form-badge">{{ labels.formBadge }}</span>
          <h2 class="contact-form-title" v-html="labels.formTitle"></h2>
          <p class="contact-form-description" v-html="labels.formDescription"></p>
        </div>

        <div class="contact-form-wrapper">
          <form class="contact-form" @submit.prevent="submitForm">
            <div class="form-row">
              <div class="form-group">
                <label for="firstName" class="form-label">{{ labels.firstName }}</label>
                <input
                  type="text"
                  id="firstName"
                  v-model="form.firstName"
                  class="form-input"
                  :placeholder="labels.firstNamePlaceholder"
                  required
                />
              </div>
              <div class="form-group">
                <label for="lastName" class="form-label">{{ labels.lastName }}</label>
                <input
                  type="text"
                  id="lastName"
                  v-model="form.lastName"
                  class="form-input"
                  :placeholder="labels.lastNamePlaceholder"
                  required
                />
              </div>
            </div>

            <div class="form-row">
              <div class="form-group">
                <label for="email" class="form-label">{{ labels.email }}</label>
                <input
                  type="email"
                  id="email"
                  v-model="form.email"
                  class="form-input"
                  :placeholder="labels.emailPlaceholder"
                  required
                />
              </div>
              <div class="form-group">
                <label for="phone" class="form-label">{{ labels.phone }}</label>
                <input
                  type="tel"
                  id="phone"
                  v-model="form.phone"
                  class="form-input"
                  :placeholder="labels.phonePlaceholder"
                  required
                />
              </div>
            </div>

            <div class="form-group">
              <label for="company" class="form-label">{{ labels.company }}</label>
              <input
                type="text"
                id="company"
                v-model="form.company"
                class="form-input"
                :placeholder="labels.companyPlaceholder"
              />
            </div>

            <div class="form-group">
              <label for="subject" class="form-label">{{ labels.subject }}</label>
              <select id="subject" v-model="form.subject" class="form-select" required>
                <option value="">{{ labels.subjectPlaceholder }}</option>
                <option value="general">{{ labels.subjectGeneral }}</option>
                <option value="investment">{{ labels.subjectInvestment }}</option>
                <option value="partnership">{{ labels.subjectPartnership }}</option>
                <option value="careers">{{ labels.subjectCareers }}</option>
                <option value="other">{{ labels.subjectOther }}</option>
              </select>
            </div>

            <div class="form-group">
              <label for="message" class="form-label">{{ labels.message }}</label>
              <textarea
                id="message"
                v-model="form.message"
                class="form-textarea"
                :placeholder="labels.messagePlaceholder"
                rows="6"
                required
              ></textarea>
            </div>

            <div class="form-group">
              <label class="form-checkbox">
                <input type="checkbox" v-model="form.agreeTerms" required />
                <span class="checkbox-text">{{ labels.agreeTerms }}</span>
              </label>
            </div>

            <div class="form-actions">
              <button type="submit" class="btn-primary" :disabled="isSubmitting">
                <span v-if="!isSubmitting">{{ labels.submitButton }}</span>
                <span v-else>{{ labels.submitting }}</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>

    <!-- Map Section -->
    <section class="map-section">
      <div class="map-container">
        <div class="map-header">
          <span class="map-badge">{{ labels.mapBadge }}</span>
          <h2 class="map-title" v-html="labels.mapTitle"></h2>
          <p class="map-description" v-html="labels.mapDescription"></p>
        </div>
        <div class="map-wrapper">
          <div class="google-map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.123456789!2d55.123456789!3d25.123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x14f7058b66c0ee22!2zMjXCsDA3JzI0LjQiTiA1NcKwMDcnMjQuNCJF!5e0!3m2!1sen!2sae!4v1234567890123!5m2!1sen!2sae"
              width="100%"
              height="400"
              style="border:0; border-radius: 1rem;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="Alzeer Group Holding Location"
            ></iframe>
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

// Form data
const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  company: '',
  subject: '',
  message: '',
  agreeTerms: false
})

const isSubmitting = ref(false)

// Form submission
const submitForm = async () => {
  isSubmitting.value = true

  // Simulate form submission
  setTimeout(() => {
    isSubmitting.value = false
    // Reset form
    form.value = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      company: '',
      subject: '',
      message: '',
      agreeTerms: false
    }
    alert(currentLanguage.value === 'AR' ? 'تم إرسال الرسالة بنجاح!' : 'Message sent successfully!')
  }, 2000)
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

  contactBadge: t('contact.badge'),
  contactTitle: t('contact.title'),
  contactDescription: t('contact.description'),

  addressTitle: t('contact.addressTitle'),
  addressText: t('contact.addressText'),
  phoneTitle: t('contact.phoneTitle'),
  phoneText: t('contact.phoneText'),
  emailTitle: t('contact.emailTitle'),
  emailText: t('contact.emailText'),
  hoursTitle: t('contact.hoursTitle'),
  hoursText: t('contact.hoursText'),

  formBadge: t('contact.formBadge'),
  formTitle: t('contact.formTitle'),
  formDescription: t('contact.formDescription'),

  firstName: t('contact.firstName'),
  firstNamePlaceholder: t('contact.firstNamePlaceholder'),
  lastName: t('contact.lastName'),
  lastNamePlaceholder: t('contact.lastNamePlaceholder'),
  email: t('contact.email'),
  emailPlaceholder: t('contact.emailPlaceholder'),
  phone: t('contact.phone'),
  phonePlaceholder: t('contact.phonePlaceholder'),
  company: t('contact.company'),
  companyPlaceholder: t('contact.companyPlaceholder'),
  subject: t('contact.subject'),
  subjectPlaceholder: t('contact.subjectPlaceholder'),
  subjectGeneral: t('contact.subjectGeneral'),
  subjectInvestment: t('contact.subjectInvestment'),
  subjectPartnership: t('contact.subjectPartnership'),
  subjectCareers: t('contact.subjectCareers'),
  subjectOther: t('contact.subjectOther'),
  message: t('contact.message'),
  messagePlaceholder: t('contact.messagePlaceholder'),
  agreeTerms: t('contact.agreeTerms'),
  submitButton: t('contact.submitButton'),
  submitting: t('contact.submitting'),

  mapBadge: t('contact.mapBadge'),
  mapTitle: t('contact.mapTitle'),
  mapDescription: t('contact.mapDescription'),
  mapPlaceholderTitle: t('contact.mapPlaceholderTitle'),
  mapPlaceholderText: t('contact.mapPlaceholderText'),

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

/* Header Styles - Same as other pages */
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

/* Contact Hero Section */
.contact-hero-section {
  padding: 8rem 0 6rem;
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  color: #ffffff;
  position: relative;
  overflow: hidden;
}

.contact-hero-section::before {
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

.contact-hero-content {
  position: relative;
  z-index: 2;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
  text-align: center;
}

.contact-hero-badge {
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

.contact-hero-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  background: linear-gradient(to right, #ffffff, #d9bb59, #f59e0b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.1;
}

.contact-hero-description {
  font-size: 1.25rem;
  color: #d1d5db;
  margin-bottom: 2rem;
  max-width: 48rem;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.75;
}

/* Contact Info Section */
.contact-info-section {
  padding: 6rem 0;
  background: #ffffff;
}

.contact-info-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.contact-info-grid {
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr;
}

.contact-info-card {
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 1.5rem;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
}

.contact-info-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.contact-info-icon {
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

.contact-info-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #000000;
  margin-bottom: 0.75rem;
}

.contact-info-text {
  color: #6b7280;
  line-height: 1.6;
}

/* Contact Form Section */
.contact-form-section {
  padding: 6rem 0;
  background: #f8fafc;
}

.contact-form-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.contact-form-header {
  text-align: center;
  margin-bottom: 4rem;
}

.contact-form-badge {
  display: inline-block;
  padding: 0.5rem 1rem;
  background: rgba(217, 187, 89, 0.2);
  border: 1px solid rgba(217, 187, 89, 0.3);
  border-radius: 9999px;
  color: #d9bb59;
  font-size: 0.875rem;
  margin-bottom: 1rem;
}

.contact-form-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  background: linear-gradient(to right, #1a1a1a, #d9bb59);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.2;
}

.contact-form-description {
  font-size: 1.25rem;
  color: #6b7280;
  max-width: 48rem;
  margin: 0 auto;
  line-height: 1.75;
}

.contact-form-wrapper {
  max-width: 48rem;
  margin: 0 auto;
}

.contact-form {
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 1.5rem;
  padding: 3rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
}

.form-row {
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr;
  margin-bottom: 1.5rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-label {
  display: block;
  font-size: 0.875rem;
  font-weight: 600;
  color: #374151;
  margin-bottom: 0.5rem;
}

.form-input,
.form-select,
.form-textarea {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: #ffffff;
}

.form-input:focus,
.form-select:focus,
.form-textarea:focus {
  outline: none;
  border-color: #d9bb59;
  box-shadow: 0 0 0 3px rgba(217, 187, 89, 0.1);
}

.form-textarea {
  resize: vertical;
  min-height: 120px;
}

.form-checkbox {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  cursor: pointer;
}

.form-checkbox input[type="checkbox"] {
  margin: 0;
  width: 1rem;
  height: 1rem;
  accent-color: #d9bb59;
}

.checkbox-text {
  font-size: 0.875rem;
  color: #6b7280;
  line-height: 1.5;
}

.form-actions {
  margin-top: 2rem;
  text-align: center;
}

.btn-primary {
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
  background: #d9bb59;
  color: #000000;
  min-width: 200px;
}

.btn-primary:hover:not(:disabled) {
  background: rgba(217, 187, 89, 0.9);
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(217, 187, 89, 0.3);
}

.btn-primary:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* Map Section */
.map-section {
  padding: 6rem 0;
  background: #ffffff;
}

.map-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.map-header {
  text-align: center;
  margin-bottom: 4rem;
}

.map-badge {
  display: inline-block;
  padding: 0.5rem 1rem;
  background: rgba(217, 187, 89, 0.2);
  border: 1px solid rgba(217, 187, 89, 0.3);
  border-radius: 9999px;
  color: #d9bb59;
  font-size: 0.875rem;
  margin-bottom: 1rem;
}

.map-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  background: linear-gradient(to right, #1a1a1a, #d9bb59);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.2;
}

.map-description {
  font-size: 1.25rem;
  color: #6b7280;
  max-width: 48rem;
  margin: 0 auto;
  line-height: 1.75;
}

.map-wrapper {
  max-width: 48rem;
  margin: 0 auto;
}

.google-map-container {
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.google-map-container:hover {
  transform: translateY(-2px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.google-map-container iframe {
  display: block;
  width: 100%;
  height: 400px;
  border: none;
  border-radius: 1rem;
}

/* Footer Section - Same as other pages */
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
  .form-row {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 768px) {
  .contact-info-grid {
    grid-template-columns: repeat(2, 1fr);
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
  .contact-info-grid {
    grid-template-columns: repeat(4, 1fr);
  }

  .contact-hero-title {
    font-size: 4rem;
  }

  .contact-hero-description {
    font-size: 1.5rem;
  }

  .google-map-container iframe {
    height: 500px;
  }
}

@media (max-width: 768px) {
  .google-map-container iframe {
    height: 300px;
  }
}
</style>
