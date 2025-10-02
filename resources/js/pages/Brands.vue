<template>
  <div class="brands-page" :class="{ 'rtl': isRTL }">
    <!-- Navigation Bar -->
    <nav class="navbar navbar-dark fixed-top" :class="{ 'navbar-hidden': !showNavbar }">
      <div class="container-fluid">
        <!-- Logo at the top center -->
        <div class="navbar-brand-centered">
          <img src="/asset/Screenshot_1447-03-29_at_10.51.05_AM-removebg-preview.png" alt="Alzeer Holding Logo" class="logo-img" />
        </div>

        <!-- Desktop Navigation Links - Centered below logo -->
        <div class="d-none d-md-flex navbar-menu-centered">
          <ul class="navbar-nav flex-row">
            <li class="nav-item">
              <a class="nav-link text-white" href="/">{{ currentContent.home }}</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="/#about-us">{{ currentContent.about }}</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" :href="`/portfolio?t=${Date.now()}`" target="_blank">{{ currentContent.portfolio }}</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white active" href="/brands">{{ currentContent.brands }}</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="/#contact">{{ currentContent.contact }}</a>
            </li>
          </ul>

          <!-- Language Selector -->
          <div class="language-selector">
            <button class="language-btn" @click="toggleLanguage">
              <img src="/asset/icons/earth-globe.png" alt="Language" class="language-icon" />
              <span class="language-text">{{ currentLanguage }}</span>
            </button>
          </div>
        </div>

        <!-- Mobile Menu Button -->
        <button
          class="navbar-toggler d-md-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Mobile Navigation Menu -->
        <div class="collapse navbar-collapse d-md-none" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link text-white" href="/">{{ currentContent.home }}</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="/#about-us">{{ currentContent.about }}</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" :href="`/portfolio?t=${Date.now()}`" target="_blank">{{ currentContent.portfolio }}</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white active" href="/brands">{{ currentContent.brands }}</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="/#contact">{{ currentContent.contact }}</a>
            </li>
            <li class="nav-item">
              <button class="nav-link text-white language-btn-mobile" @click="toggleLanguage">
                <img src="/asset/icons/earth-globe.png" alt="Language" class="language-icon" />
                <span class="language-text">{{ currentLanguage }}</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Hero Video Section -->
    <section class="hero-video-section">
      <video
        class="hero-video"
        autoplay
        muted
        loop
        playsinline
        preload="auto"
      >
        <source src="/asset/background-video.mp4" type="video/mp4">
        <source src="/asset/القابضة بالعرض-copy(1).mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>

      <!-- Video Overlay -->
      <div class="video-overlay"></div>

      <!-- Hero Content -->
      <div class="hero-content">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-8 col-xl-7">
              <h1 class="hero-title" v-html="currentContent.heroTitle"></h1>
              <p class="hero-subtitle" v-html="currentContent.heroSubtitle"></p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <div class="main-content">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h1 class="page-title">{{ currentContent.brands }}</h1>
            <p class="page-subtitle">Group Companies</p>
          </div>
        </div>

        <!-- Companies Section -->
        <div class="companies-section">
          <div class="row">
            <template v-for="(company, index) in companies" :key="company.id">
              <div class="col-lg-6 col-md-12 mb-5">
                <div class="company-card" :class="{ 'coming-soon': !company.is_active }">
                  <div class="company-header">
                    <div class="company-logo">
                      <img
                        v-if="company.logo_path"
                        :src="`/storage/${company.logo_path}`"
                        :alt="currentLanguage === 'AR' ? company.name_ar : company.name"
                        class="company-logo-img"
                      />
                      <div v-else class="logo-placeholder">{{ String(index + 1).padStart(2, '0') }}</div>
                    </div>
                    <div class="company-info">
                      <h3 class="company-name">{{ currentLanguage === 'AR' ? company.name_ar : company.name }}</h3>
                      <p class="company-location">{{ currentLanguage === 'AR' ? company.location_ar : company.location }}</p>
                    </div>
                  </div>

                  <div class="company-description">
                    <p>{{ currentLanguage === 'AR' ? company.description_ar : company.description }}</p>
                  </div>

                  <div class="company-social" v-if="company.is_active">
                    <h4>Follow Us</h4>
                    <div class="social-links">
                      <a v-if="company.website" :href="company.website" class="social-link website-link" title="Website" target="_blank">
                        <img src="/icons/web (1).png" alt="Website" class="social-icon website-icon" />
                      </a>
                      <a v-if="company.linkedin" :href="company.linkedin" class="social-link linkedin-link" title="LinkedIn" target="_blank">
                        <img src="/icons/linkedin.png" alt="LinkedIn" class="social-icon linkedin-icon" />
                      </a>
                      <a v-if="company.twitter" :href="company.twitter" class="social-link" title="Twitter" target="_blank">
                        <img src="/icons/twitter.png" alt="Twitter" class="social-icon" />
                      </a>
                      <a v-if="company.instagram" :href="company.instagram" class="social-link" title="Instagram" target="_blank">
                        <img src="/icons/instagram.png" alt="Instagram" class="social-icon" />
                      </a>
                      <a v-if="company.facebook" :href="company.facebook" class="social-link facebook-link" title="Facebook" target="_blank">
                        <img src="/icons/facebook (1).png" alt="Facebook" class="social-icon facebook-icon" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';" />
                        <i class="fab fa-facebook-f" style="display: none; font-size: 1.3rem;"></i>
                      </a>
                      <a v-if="company.youtube" :href="company.youtube" class="social-link" title="YouTube" target="_blank">
                        <img src="/icons/youtube.png" alt="YouTube" class="social-icon" />
                      </a>
                      <a v-if="company.whatsapp" :href="`https://wa.me/${company.whatsapp}`" class="social-link" title="WhatsApp" target="_blank">
                        <img src="/icons/whatsapp.png" alt="WhatsApp" class="social-icon" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { usePage } from '@inertiajs/vue3'

// Get companies data from backend
const page = usePage()
const companies = computed(() => (page.props.companies as any[]) || [])

// Language state
const currentLanguage = ref('AR')

// Navbar visibility state
const showNavbar = ref(true)
let lastScrollPosition = 0

// Handle navbar visibility on scroll
const handleScroll = () => {
    const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop

    // If scrolling down and past 100px, hide navbar
    if (currentScrollPosition > lastScrollPosition && currentScrollPosition > 100) {
        showNavbar.value = false
    }
    // If scrolling up, show navbar
    else if (currentScrollPosition < lastScrollPosition) {
        showNavbar.value = true
    }

    lastScrollPosition = currentScrollPosition
}

onMounted(() => {
    // Set default language direction to Arabic (RTL)
    document.documentElement.dir = 'rtl'
    document.documentElement.lang = 'ar'

    // Add scroll event listener for navbar
    window.addEventListener('scroll', handleScroll)
});

// Available languages
const languages = [
  { code: 'EN', name: 'English' },
  { code: 'AR', name: 'العربية' }
]

// Content translations
const content = ref({
  EN: {
    heroTitle: "Fahad Nawaf Al-Zeer Holding,<br>we redefine the essence of investment",
    heroSubtitle: "by turning ambition into tangible achievements",
    home: "Home",
    about: "About",
    brands: "Group Companies",
    contact: "Contact",
    portfolio: "Portfolio",
  },
  AR: {
    heroTitle: "فهد نواف الزير القابضة،<br>نعيد تعريف جوهر الاستثمار",
    heroSubtitle: "بتحويل الطموح إلى إنجازات ملموسة",
    home: "الرئيسية",
    about: "من نحن",
    brands: "شركات المجموعة",
    contact: "تواصل معنا",
    portfolio: "المحفظة",
  }
})

// Toggle language function
const toggleLanguage = () => {
  const currentIndex = languages.findIndex(lang => lang.code === currentLanguage.value)
  const nextIndex = (currentIndex + 1) % languages.length
  currentLanguage.value = languages[nextIndex].code

  // Update document direction
  if (currentLanguage.value === 'AR') {
    document.documentElement.dir = 'rtl'
    document.documentElement.lang = 'ar'
  } else {
    document.documentElement.dir = 'ltr'
    document.documentElement.lang = 'en'
  }

  console.log('Language changed to:', currentLanguage.value)
}

// Computed property for current content
const currentContent = computed(() => content.value[currentLanguage.value as keyof typeof content.value])

// Computed property for text direction
const isRTL = computed(() => currentLanguage.value === 'AR')
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@400&display=swap');

.brands-page {
  min-height: 100vh;
  background-color: white;
  font-family: 'Roboto', sans-serif;
}

/* Navigation Styles */
.navbar {
  background-color: transparent !important;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  padding: 1.5rem 0 1rem 0;
  box-shadow: none;
  transition: transform 0.3s ease, background-color 0.3s ease;
  transform: translateY(0);
}

.navbar-hidden {
  transform: translateY(-100%);
}

.navbar .container-fluid {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

/* Logo centered at top */
.navbar-brand-centered {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 0.5rem;
}

.logo-img {
  height: 70px;
  width: auto;
  transition: transform 0.3s ease;
}

.logo-img:hover {
  transform: scale(1.05);
}

/* Menu centered below logo */
.navbar-menu-centered {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  width: 100%;
}

.navbar-nav {
  gap: 2.5rem;
  align-items: center;
}

.navbar-nav .nav-link {
  font-weight: 500;
  font-size: 17px;
  transition: all 0.3s ease;
  padding: 0.5rem 1rem;
  position: relative;
}

.navbar-nav .nav-link:hover,
.navbar-nav .nav-link.active {
  color: #ffd700 !important;
  transform: translateY(-2px);
}

.navbar-nav .nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 2px;
  background-color: #ffd700;
  transition: width 0.3s ease;
}

.navbar-nav .nav-link:hover::after,
.navbar-nav .nav-link.active::after {
  width: 80%;
}

/* Language Selector Styles */
.language-selector {
  /* margin-left removed - now part of flex container */
}

.language-btn {
  background: transparent;
  border: none;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  font-size: 14px;
  font-weight: 500;
  min-width: 120px;
  justify-content: center;
}

.language-btn:hover {
  background: rgba(255, 255, 255, 0.1);
  color: white;
  transform: translateY(-1px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.language-icon {
  width: 16px;
  height: 16px;
  object-fit: contain;
  filter: brightness(0) invert(1);
}

.language-text {
  font-weight: 400;
}

.language-btn-mobile {
  background: transparent;
  border: none;
  color: white;
  padding: 0.75rem 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  font-size: 16px;
  width: 100%;
  text-align: left;
}

.language-btn-mobile:hover {
  background: rgba(255, 255, 255, 0.1);
  color: white;
}

/* Hero Video Section */
.hero-video-section {
  position: relative;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
}

.video-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(0, 0, 0, 0.7) 0%,
    rgba(0, 0, 0, 0.6) 50%,
    rgba(0, 0, 0, 0.4) 100%
  );
  z-index: 2;
}

.hero-content {
  position: relative;
  z-index: 3;
  color: white;
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0;
  margin: 0;
  width: 100%;
}

.hero-content .container-fluid {
  width: 100%;
  padding-left: 3rem;
  padding-right: 3rem;
}

.hero-title {
  font-size: 3rem;
  font-weight: 600;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.6);
  animation: fadeInUp 1s ease-out;
  line-height: 1.4;
  text-align: right;
  letter-spacing: 0.5px;
}

.hero-subtitle {
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 2rem;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.5);
  animation: fadeInUp 1s ease-out 0.3s both;
  line-height: 1.4;
  text-align: right;
  letter-spacing: 0.3px;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Main Content */
.main-content {
  padding: 4rem 0;
  background-color: white;
}

/* Companies Section */
.companies-section {
  margin-top: 3rem;
}

.company-card {
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  border-radius: 25px;
  padding: 2.5rem;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.08);
  transition: all 0.4s ease;
  border: 1px solid #e9ecef;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
}

.company-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
  border-radius: 25px 25px 0 0;
}

.company-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.company-card.coming-soon {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border: 2px dashed #dee2e6;
}

.company-header {
  display: flex;
  align-items: flex-start;
  margin-bottom: 2rem;
  gap: 1.5rem;
  padding: 1rem;
  background: rgba(102, 126, 234, 0.05);
  border-radius: 15px;
  border: 1px solid rgba(102, 126, 234, 0.1);
}

.company-logo {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo-placeholder {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  box-shadow: 0 5px 15px rgba(102, 126, 234, 0.3);
}

.company-logo-img {
  width: 80px;
  height: 80px;
  border-radius: 20px;
  object-fit: contain;
  object-position: center;
  background-color: #ffffff;
  padding: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  border: 2px solid #f0f0f0;
}

.company-logo-img:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  border-color: #667eea;
}

.company-card.coming-soon .logo-placeholder {
  background: linear-gradient(135deg, #a8a8a8 0%, #6c757d 100%);
  box-shadow: 0 5px 15px rgba(108, 117, 125, 0.3);
}

.company-info {
  flex: 1;
}

.company-name {
  font-size: 1.5rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 0.5rem;
  line-height: 1.3;
}

.company-location {
  color: #6c757d;
  font-size: 1rem;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.company-location::before {
  content: "📍";
  font-size: 0.9rem;
}

.company-description {
  margin-bottom: 2rem;
  flex: 1;
}

.company-description p {
  color: #555;
  line-height: 1.7;
  font-size: 1rem;
  margin: 0;
}

.company-social {
  border-top: 1px solid #e9ecef;
  padding-top: 1.5rem;
  margin-top: auto;
}

.company-social h4 {
  font-size: 1.1rem;
  color: #2c3e50;
  margin-bottom: 1rem;
  font-weight: 600;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-link {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 1.3rem;
  position: relative;
  overflow: hidden;
  padding: 8px;
  box-sizing: border-box;
}

.social-icon {
  width: 24px;
  height: 24px;
  object-fit: contain;
  object-position: center;
  filter: brightness(0) invert(1);
  transition: all 0.3s ease;
  display: block;
  max-width: 100%;
  max-height: 100%;
  background: transparent;
}

/* Override filter for Facebook icon */
.facebook-icon {
  filter: none !important;
  background: white;
  border-radius: 4px;
  padding: 2px;
}

.social-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
  transition: left 0.5s;
}

.social-link:hover::before {
  left: 100%;
}

.social-link:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.4);
  color: white;
  text-decoration: none;
}

.social-link:hover .social-icon {
  transform: scale(1.1);
}

/* Facebook icon specific styles */
.facebook-link {
  background: #475a94 !important;
}

.facebook-icon {
  filter: none !important;
  opacity: 1 !important;
  visibility: visible !important;
  background: white;
  border-radius: 4px;
}

/* LinkedIn icon specific styles */
.linkedin-link {
  background: #0077b5 !important;
}

.linkedin-icon {
  filter: none !important;
  opacity: 1 !important;
  visibility: visible !important;
  background: white;
  border-radius: 4px;
  padding: 2px;
}

/* Website icon specific styles */
.website-link {
  background: white !important;
  border: 2px solid #e9ecef;
}

.website-icon {
  filter: none !important;
  opacity: 1 !important;
  visibility: visible !important;
  background: transparent;
  border-radius: 4px;
  padding: 2px;
}

.social-link:nth-child(1) { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); }
.social-link:nth-child(2) { background: linear-gradient(135deg, #0077b5 0%, #005885 100%); }
.social-link:nth-child(3) { background: linear-gradient(135deg, #1da1f2 0%, #0d8bd9 100%); }
.social-link:nth-child(4) { background: linear-gradient(135deg, #e4405f 0%, #c13584 100%); }
.social-link:nth-child(5) { background: linear-gradient(135deg, #1877f2 0%, #0d5bb8 100%); }
.social-link:nth-child(6) { background: linear-gradient(135deg, #ff0000 0%, #cc0000 100%); }
.social-link:nth-child(7) { background: linear-gradient(135deg, #25d366 0%, #128c7e 100%); }
.social-link:nth-child(8) { background: linear-gradient(135deg, #ea4335 0%, #d33b2c 100%); }

.page-title {
  font-size: 3rem;
  font-weight: 700;
  color: #333;
  text-align: center;
  margin-bottom: 1rem;
}

.page-subtitle {
  font-size: 1.5rem;
  color: #666;
  text-align: center;
  margin-bottom: 3rem;
}

/* RTL Support */
[dir="rtl"] * {
  font-family: 'Noto Sans Arabic', sans-serif !important;
}

[dir="rtl"] .navbar-toggler {
  right: auto;
  left: 1rem;
}

[dir="ltr"] .hero-title {
  text-align: left;
}

[dir="ltr"] .hero-subtitle {
  text-align: left;
}

/* Mobile Responsive Adjustments */
@media (max-width: 767.98px) {
  .navbar {
    padding: 1rem 0;
  }

  .navbar .container-fluid {
    position: relative;
  }

  .navbar-brand-centered {
    margin-bottom: 0;
  }

  .logo-img {
    height: 60px;
  }

  .navbar-toggler {
    position: absolute;
    top: 50%;
    right: 1rem;
    transform: translateY(-50%);
  }

  .hero-video-section {
    height: 100vh;
  }

  .hero-title {
    font-size: 2rem;
    margin-bottom: 1.5rem;
    line-height: 1.3;
  }

  .hero-subtitle {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    line-height: 1.4;
  }

  .main-content {
    padding: 2rem 0;
  }

  .page-title {
    font-size: 2rem;
  }

  .page-subtitle {
    font-size: 1.2rem;
  }

  .company-card {
    padding: 2rem;
  }

  .company-header {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }

  .company-name {
    font-size: 1.3rem;
  }

  .social-links {
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.8rem;
  }

  .social-link {
    width: 45px;
    height: 45px;
    font-size: 1.1rem;
    padding: 6px;
    box-sizing: border-box;
  }

  .social-icon {
    width: 20px;
    height: 20px;
    object-fit: contain;
    object-position: center;
    display: block;
    max-width: 100%;
    max-height: 100%;
  }


  .company-logo-img {
    width: 70px;
    height: 70px;
    padding: 6px;
  }

  .logo-placeholder {
    width: 70px;
    height: 70px;
    font-size: 1.2rem;
  }

  .company-header {
    padding: 0.8rem;
    gap: 1rem;
  }
}
</style>
