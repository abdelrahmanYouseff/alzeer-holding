<template>
  <div class="homepage" :class="{ 'rtl': isRTL }">
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
              <a class="nav-link text-white" href="#about-us">{{ currentContent.about }}</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" :href="`/portfolio?t=${Date.now()}`" target="_blank">{{ currentContent.portfolio }}</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="#contact">{{ currentContent.contact }}</a>
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
              <a class="nav-link text-white" href="#about-us">{{ currentContent.about }}</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" :href="`/portfolio?t=${Date.now()}`" target="_blank">{{ currentContent.portfolio }}</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="#contact">{{ currentContent.contact }}</a>
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

    <!-- Brands Section -->
    <section class="brands-section">
      <div class="container-fluid">
        <div class="brands-header text-center mb-5">
          <h2 class="brands-title">{{ currentContent.brandsTitle }}</h2>
          <p class="brands-subtitle">{{ currentContent.brandsSubtitle }}</p>
          </div>

        <!-- First Row - Moving Left -->
        <div class="brands-row brands-row-1">
          <div class="brands-container">
            <!-- Original brands -->
            <template v-for="brand in brands" :key="brand.id">
              <div class="brand-item">
                <img
                  v-if="brand.logo_path"
                  :src="`/storage/${brand.logo_path}`"
                  :alt="brand.name"
                  class="brand-logo"
                />
                <div v-else class="brand-logo brand-placeholder">
                  {{ brand.name.charAt(0) }}
                </div>
              </div>
            </template>
            <!-- Duplicate for seamless loop (only if we have brands) -->
            <template v-for="brand in brands" :key="`duplicate-${brand.id}`" v-if="brands.length > 0">
              <div class="brand-item">
                <img
                  v-if="brand.logo_path"
                  :src="`/storage/${brand.logo_path}`"
                  :alt="brand.name"
                  class="brand-logo"
                />
                <div v-else class="brand-logo brand-placeholder">
                  {{ brand.name.charAt(0) }}
                </div>
              </div>
            </template>
            <!-- Fallback if no brands -->
            <div v-if="brands.length === 0" class="brand-item">
              <div class="brand-logo brand-placeholder">
                A
              </div>
            </div>
          </div>
        </div>

        <!-- Second Row - Moving Right -->
        <div class="brands-row brands-row-2">
          <div class="brands-container">
            <!-- Original brands -->
            <template v-for="brand in brands" :key="`second-${brand.id}`">
              <div class="brand-item">
                <img
                  v-if="brand.logo_path"
                  :src="`/storage/${brand.logo_path}`"
                  :alt="brand.name"
                  class="brand-logo"
                />
                <div v-else class="brand-logo brand-placeholder">
                  {{ brand.name.charAt(0) }}
                </div>
              </div>
            </template>
            <!-- Duplicate for seamless loop (only if we have brands) -->
            <template v-for="brand in brands" :key="`second-duplicate-${brand.id}`" v-if="brands.length > 0">
              <div class="brand-item">
                <img
                  v-if="brand.logo_path"
                  :src="`/storage/${brand.logo_path}`"
                  :alt="brand.name"
                  class="brand-logo"
                />
                <div v-else class="brand-logo brand-placeholder">
                  {{ brand.name.charAt(0) }}
                </div>
              </div>
            </template>
            <!-- Fallback if no brands -->
            <div v-if="brands.length === 0" class="brand-item">
              <div class="brand-logo brand-placeholder">
                A
              </div>
            </div>
          </div>
        </div>
              </div>
      </section>

    <!-- About Us Section -->
    <section id="about-us" class="about-us-section">
      <div class="container">
        <!-- About Us Title -->
        <div class="row">
          <div class="col-12">
            <h2 class="about-us-title text-center">{{ currentContent.aboutUs }}</h2>
            <div class="about-us-underline"></div>
                </div>
              </div>

        <!-- Introduction Section -->
        <div class="row">
          <div class="col-12">
            <div class="introduction-content">
              <div class="introduction-logo">
                <img src="/asset/Screenshot_1447-03-29_at_10.51.05_AM-removebg-preview.png" alt="Alzeer Holding Logo" class="intro-logo-img" />
                </div>
              <div class="introduction-text">
                <h2 class="introduction-title">{{ currentContent.introduction }}</h2>
                <div class="title-underline"></div>
                <p class="introduction-description" v-html="currentContent.introductionText">
                </p>
              </div>
                </div>
              </div>
                </div>

        <!-- Vision Section -->
        <div class="row mt-5">
          <div class="col-12">
            <div class="vision-content">
              <h2 class="vision-title">{{ currentContent.vision }}</h2>
              <div class="vision-underline"></div>
              <p class="vision-description" v-html="currentContent.visionText">
              </p>
              </div>
                </div>
              </div>

        <!-- Mission Section -->
        <div class="row mt-5">
          <div class="col-12">
            <div class="mission-content">
              <h2 class="mission-title">{{ currentContent.mission }}</h2>
              <div class="mission-underline"></div>
              <p class="mission-description" v-html="currentContent.missionText">
              </p>
                </div>
              </div>
                </div>

              </div>
      </section>

    <!-- Contact Us Section -->
    <section id="contact" class="contact-section">
      <div class="container">
        <!-- Contact Title -->
        <div class="row">
          <div class="col-12">
            <h2 class="contact-title text-center">{{ currentContent.contactTitle }}</h2>
            <div class="contact-underline"></div>
                </div>
              </div>

        <!-- Contact Content -->
        <div class="row">
          <!-- Contact Information -->
          <div class="col-lg-6 mb-5">
            <div class="contact-info">
              <h3 class="contact-subtitle">{{ currentContent.getInTouch }}</h3>
              <p class="contact-description" v-html="currentContent.contactDescription">
              </p>

              <div class="contact-details">
                <div class="contact-item">
                  <div class="contact-icon">
                    <img src="/asset/icons/pin.png" alt="Address" class="custom-icon" />
                </div>
                  <div class="contact-text">
                    <h4>Address</h4>
                    <p>{{ contactInfo.address || 'Riyadh, Kingdom of Saudi Arabia' }}</p>
              </div>
                </div>

                <div class="contact-item">
                  <div class="contact-icon">
                    <img src="/asset/icons/telephone.png" alt="Phone" class="custom-icon" />
              </div>
                  <div class="contact-text">
                    <h4>Phone</h4>
                    <p>{{ contactInfo.phone || '+966 XX XXX XXXX' }}</p>
                </div>
              </div>

                <div class="contact-item">
                  <div class="contact-icon">
                    <img src="/asset/icons/mail.png" alt="Email" class="custom-icon" />
                </div>
                  <div class="contact-text">
                    <h4>Email</h4>
                    <p>{{ contactInfo.email || 'info@alzeerholding.com' }}</p>
              </div>
            </div>

                <div class="contact-item">
                  <div class="contact-icon">
                    <img src="/asset/icons/24-7.png" alt="Business Hours" class="custom-icon" />
            </div>
                  <div class="contact-text">
                    <h4>Business Hours</h4>
                    <p>Sunday - Thursday: 9:00 AM - 6:00 PM</p>
          </div>
              </div>
              </div>
              </div>
            </div>

          <!-- Contact Form -->
          <div class="col-lg-6 mb-5">
            <div class="contact-form-container">
              <h3 class="contact-subtitle">{{ currentContent.contactForm }}</h3>
              <form class="contact-form">
                <div class="form-group">
                  <input type="text" class="form-control" :placeholder="currentContent.name" required>
                </div>
                <div class="form-group">
                  <input type="email" class="form-control" :placeholder="currentContent.email" required>
              </div>
                <div class="form-group">
                  <input type="text" class="form-control" :placeholder="currentContent.phone" required>
              </div>
                <div class="form-group">
                  <textarea class="form-control" rows="5" :placeholder="currentContent.message" required></textarea>
            </div>
                <button type="submit" class="contact-btn">
                  <span>{{ currentContent.submit }}</span>
                  <img src="/asset/icons/mail.png" alt="Send" class="btn-icon" />
                </button>
              </form>
                </div>
              </div>
              </div>
            </div>
    </section>

    <!-- Main Content -->
    <main class="main-content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <div class="content-area">
              <!-- Content will be added here -->
                </div>
              </div>
              </div>
            </div>
    </main>

      <!-- Footer -->
      <footer class="footer">
      <div class="container">
        <div class="row">
            <!-- Company Info -->
          <div class="col-lg-4 col-md-6 mb-4">
            <div class="footer-section">
              <div class="footer-logo mb-3">
                <img src="/asset/Screenshot_1447-03-29_at_10.51.05_AM-removebg-preview.png" alt="Alzeer Holding Logo" class="footer-logo-img" />
              </div>
              <p class="footer-description">
                Building the future of investment through strategic partnerships,
                innovative solutions, and sustainable growth across diverse sectors.
              </p>
              <div class="social-links">
                <!-- Facebook -->
                <a
                  v-if="socialMedia?.facebook"
                  href="#"
                  class="social-link"
                  @click.prevent="openSocialLink(socialMedia.facebook, 'Facebook')"
                >
                  <img src="/asset/icons/facebook.png" alt="Facebook" class="social-icon" />
                </a>

                <!-- Twitter/X -->
                <a
                  v-if="socialMedia?.twitter"
                  href="#"
                  class="social-link"
                  @click.prevent="openSocialLink(socialMedia.twitter, 'Twitter')"
                >
                  <img src="/asset/icons/twitter.png" alt="Twitter" class="social-icon" />
                </a>

                <!-- LinkedIn -->
                <a
                  v-if="socialMedia?.linkedin"
                  href="#"
                  class="social-link"
                  @click.prevent="openSocialLink(socialMedia.linkedin, 'LinkedIn')"
                >
                  <svg class="social-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>

                <!-- Instagram -->
                <a
                  v-if="socialMedia?.instagram"
                  href="#"
                  class="social-link"
                  @click.prevent="openSocialLink(socialMedia.instagram, 'Instagram')"
                >
                  <img src="/asset/icons/instagram.png" alt="Instagram" class="social-icon" />
                </a>
              </div>
              </div>
            </div>

            <!-- Quick Links -->
          <div class="col-lg-2 col-md-6 mb-4">
            <div class="footer-section">
              <h5 class="footer-title">Quick Links</h5>
              <ul class="footer-links">
                <li><a href="/" class="footer-link">Home</a></li>
                <li><a href="#about-us" class="footer-link">About Us</a></li>
                <li><a href="/asset/pdf/%D8%A8%D8%B1%D9%88%D9%81%D8%A7%D9%8ي%D9%84%20%D8%A7%D9%84%D9%82%D8%A7%D8%A8%D8%B6%D8%A9%20(1).pdf" target="_blank" class="footer-link">Portfolio</a></li>
                <li><a href="#contact" class="footer-link">Contact Us</a></li>
              </ul>
            </div>
            </div>


          </div>

          <!-- Footer Bottom -->
          <div class="footer-bottom">
          <div class="row align-items-center">
            <div class="col-md-6">
              <p class="copyright">
                {{ currentContent.copyright }}
              </p>
              </div>
            <div class="col-md-6">
              <div class="footer-bottom-links">
                <a href="#" class="footer-bottom-link">{{ currentContent.privacyPolicy }}</a>
                <a href="#" class="footer-bottom-link">{{ currentContent.termsOfService }}</a>
                <a href="#" class="footer-bottom-link">{{ currentContent.cookiePolicy }}</a>
              </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { usePage } from '@inertiajs/vue3'

// Get brands and contact data from backend
const page = usePage()
const brands = computed(() => (page.props.brands as any[]) || [])
const contactInfo = computed(() => (page.props.contactInfo as any) || {})

// Social media data
interface SocialMediaLink {
    id?: number;
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    instagram?: string;
}

const socialMedia = ref<SocialMediaLink | null>(null);

// Fetch social media data from API
const fetchSocialMediaData = async () => {
    try {
        const response = await fetch('/api/website-data');
        const data = await response.json();
        socialMedia.value = data.socialMedia;
    } catch (error) {
        console.error('Error fetching social media data:', error);
    }
};

// Function to open social media links
const openSocialLink = (url: string, platform: string) => {
    if (!url || url.trim() === '') {
        console.error(`No URL found for ${platform}`);
        return;
    }

    // Simple and direct approach
    window.open(url, '_blank', 'noopener,noreferrer');
};

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
    fetchSocialMediaData();

    // Set default language direction to Arabic (RTL)
    document.documentElement.dir = 'rtl'
    document.documentElement.lang = 'ar'

    // Add scroll event listener for navbar
    window.addEventListener('scroll', handleScroll)

    // Add click event listeners for smooth scrolling
    const aboutLinks = document.querySelectorAll('a[href="#about-us"]')
    const contactLinks = document.querySelectorAll('a[href="#contact"]')

    aboutLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault()
            smoothScrollTo('#about-us')
        })
    })

    contactLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault()
            smoothScrollTo('#contact')
        })
    })
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
    aboutUs: "About us",
    brandsTitle: "Our Brands",
    brandsSubtitle: "Discover the diverse portfolio of Alzeer Holding",
    home: "Home",
    about: "About",
    brands: "Brands",
    contact: "Contact",
    portfolio: "Portfolio",
    introduction: "Introduction",
    introductionText: "Fahad Nawaf Al-Zeer Holding, we redefine<br>the essence of investment by turning ambition<br>into tangible achievements and forging a bridge<br>from today to a future enriched with value<br>and meaningful impact.",
    vision: "Vision",
    visionText: "To be the leading investment holding company<br>in the region, creating sustainable value<br>through innovative strategies and strategic partnerships.",
    mission: "Mission",
    missionText: "We are committed to building a diversified<br>portfolio of investments that drive growth,<br>create opportunities, and contribute to the<br>development of our communities.",
    contactUs: "Contact Us",
    getInTouch: "Get in Touch",
    sendMessage: "Send Message",
    contactTitle: "Contact us",
    contactInfo: "Contact Information",
    contactForm: "Send us a message",
    name: "Name",
    email: "Email",
    phone: "Phone",
    message: "Message",
    submit: "Send Message",
    contactDescription: "We're here to help and answer any question you might have.<br>We look forward to hearing from you.",
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",
    cookiePolicy: "Cookie Policy",
    copyright: "© 2024 Alzeer Holding. All rights reserved."
  },
  AR: {
    heroTitle: "فهد نواف الزير القابضة،<br>نعيد تعريف جوهر الاستثمار",
    heroSubtitle: "بتحويل الطموح إلى إنجازات ملموسة",
    aboutUs: "من نحن",
    brandsTitle: "علاماتنا التجارية",
    brandsSubtitle: "اكتشف محفظة الزير القابضة المتنوعة",
    home: "الرئيسية",
    about: "من نحن",
    brands: "العلامات التجارية",
    contact: "تواصل معنا",
    portfolio: "المحفظة",
    introduction: "مقدمة",
    introductionText: "فهد نواف الزير القابضة، نعيد تعريف<br>جوهر الاستثمار بتحويل الطموح إلى<br>إنجازات ملموسة وبناء جسر من اليوم<br>إلى مستقبل مليء بالقيمة والتأثير ذي المعنى.",
    vision: "رؤيتنا",
    visionText: "أن نكون شركة القابضة الاستثمارية الرائدة<br>في المنطقة، وخلق قيمة مستدامة<br>من خلال استراتيجيات مبتكرة وشراكات استراتيجية.",
    mission: "مهمتنا",
    missionText: "نحن ملتزمون ببناء محفظة متنوعة<br>من الاستثمارات التي تحفز النمو،<br>وخلق الفرص، والمساهمة في<br>تطوير مجتمعاتنا.",
    contactUs: "تواصل معنا",
    getInTouch: "تواصل معنا",
    sendMessage: "إرسال رسالة",
    contactTitle: "تواصل معنا",
    contactInfo: "معلومات التواصل",
    contactForm: "أرسل لنا رسالة",
    name: "الاسم",
    email: "البريد الإلكتروني",
    phone: "الهاتف",
    message: "الرسالة",
    submit: "إرسال الرسالة",
    contactDescription: "نحن هنا لمساعدتك والإجابة على أي سؤال قد يكون لديك.<br>نتطلع إلى سماع منك.",
    privacyPolicy: "سياسة الخصوصية",
    termsOfService: "شروط الخدمة",
    cookiePolicy: "سياسة ملفات تعريف الارتباط",
    copyright: "© 2024 شركة الزير القابضة. جميع الحقوق محفوظة."
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

// Smooth scroll function for anchor links
const smoothScrollTo = (targetId: string) => {
  const targetElement = document.querySelector(targetId)
  if (targetElement) {
    targetElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
}

// Computed property for current content
const currentContent = computed(() => content.value[currentLanguage.value as keyof typeof content.value])

// Computed property for text direction
const isRTL = computed(() => currentLanguage.value === 'AR')
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@400&display=swap');

.homepage {
  min-height: 100vh;
  background: #ffffff;
  font-family: 'Roboto', sans-serif;
}

/* Smooth scrolling for anchor links */
html {
  scroll-behavior: smooth;
}

/* Apply Roboto font to all text elements */
* {
  font-family: 'Roboto', sans-serif !important;
}

/* RTL Support */
[dir="rtl"] * {
  font-family: 'Noto Sans Arabic', sans-serif !important;
}

/* RTL Layout Adjustments */
[dir="rtl"] .introduction-content {
  flex-direction: row-reverse;
}

[dir="rtl"] .vision-content {
  margin-left: auto;
  margin-right: 180px;
  text-align: right;
}

[dir="rtl"] .mission-content {
  margin-left: 180px;
  margin-right: auto;
  text-align: left;
}

[dir="rtl"] .hero-content .container-fluid {
  direction: rtl;
}

[dir="ltr"] .hero-title {
  text-align: left;
}

[dir="ltr"] .hero-subtitle {
  text-align: left;
}

[dir="rtl"] .footer-bottom-links {
  justify-content: flex-start;
}

[dir="rtl"] .language-selector {
  margin-right: 0;
  margin-left: 0;
}

[dir="rtl"] .navbar-toggler {
  right: auto;
  left: 1rem;
}

h1, h2, h3, h4, h5, h6, p, span, div, a, li, ul, ol, button, input, textarea, label {
  font-family: 'Roboto', sans-serif !important;
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

.navbar-nav .nav-link:hover {
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

.navbar-nav .nav-link:hover::after {
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
  border-bottom: 1px solid rgba(255,255,255,0.1);
  justify-content: center;
  margin: 0.5rem 0;
  border-radius: 5px;
}

.language-btn-mobile:hover {
  background: rgba(255, 255, 255, 0.1);
  color: white;
  transform: translateX(5px);
}

.language-btn-mobile .language-icon {
  width: 18px;
  height: 18px;
  object-fit: contain;
  filter: brightness(0) invert(1);
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
    rgba(0, 0, 0, 0.4) 0%,
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

/* Brands Section */
.brands-section {
  background: #f8f9fa;
  padding: 4rem 0;
  overflow: hidden;
}

.brands-header {
  margin-bottom: 3rem;
}

.brands-title {
  font-size: 2.5rem;
  font-weight: 400;
  color: #000000;
  margin-bottom: 1rem;
}

.brands-subtitle {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 0;
}

.brands-row {
  margin-bottom: 2rem;
  overflow: hidden;
    white-space: nowrap;
}

.brands-container {
  display: inline-flex;
  animation-duration: 30s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  gap: 2rem;
}

.brands-row-1 .brands-container {
  animation-name: moveLeft;
}

.brands-row-2 .brands-container {
  animation-name: moveRight;
}

.brand-item {
  background: white;
  border-radius: 15px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  min-width: 150px;
  height: 150px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.brand-item:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.brand-logo {
  width: 160px;
  height: 160px;
  object-fit: contain;
  transition: transform 0.3s ease;
}

.brand-placeholder {
  width: 160px;
  height: 160px;
  background: linear-gradient(135deg, #FFD700, #FFA500);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  font-weight: bold;
  color: white;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
  box-shadow: 0 4px 15px rgba(255, 215, 0, 0.3);
}

.brand-item:hover .brand-logo {
  transform: scale(1.1);
}

.brand-item:hover .brand-placeholder {
  transform: scale(1.1);
  box-shadow: 0 6px 20px rgba(255, 215, 0, 0.5);
}

@keyframes moveLeft {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

@keyframes moveRight {
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0);
  }
}

/* Main Content */
.main-content {
  padding: 2rem 0;
}

.content-area {
  text-align: center;
  padding: 2rem;
}

.content-area h1 {
  color: #333;
  margin-bottom: 1rem;
}

.content-area p {
  color: #666;
  font-size: 18px;
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
    font-size: 3rem;
    margin-bottom: 1.5rem;
    line-height: 1.3;
  }

  .hero-subtitle {
    font-size: 2rem;
    margin-bottom: 1.5rem;
    line-height: 1.4;
  }

  .content-area {
    padding: 1rem;
  }

  .navbar-nav .nav-link {
    padding: 0.75rem 1rem;
    border-bottom: 1px solid rgba(255,255,255,0.1);
  }

  .navbar-nav .nav-item:last-child .nav-link {
    border-bottom: none;
  }

  .language-selector {
    display: none !important;
  }
}

@media (max-width: 575.98px) {
  .logo-img {
    height: 55px;
  }

  .hero-title {
    font-size: 2rem;
    margin-bottom: 0.75rem;
  }

  .hero-subtitle {
    font-size: 1rem;
    margin-bottom: 1rem;
  }

  .brands-section {
    padding: 2rem 0;
  }

  .brands-title {
    font-size: 2rem;
  }

  .brands-subtitle {
    font-size: 1rem;
  }

  .brand-item {
    min-width: 120px;
    height: 120px;
    padding: 1.5rem;
  }

  .brand-logo {
    width: 80px;
    height: 80px;
  }

  .brands-container {
    gap: 1rem;
  }
}

/* Footer Styles */
.footer {
  background: #444444;
  color: #ffffff;
  padding: 4rem 0 2rem;
  margin-top: 4rem;
}

.footer-section {
  margin-bottom: 2rem;
}

.footer-logo-img {
  height: 100px;
  width: auto;
  filter: brightness(0) invert(1);
}

.footer-title {
  color: #ffd700;
  font-size: 1.3rem;
  font-weight: 400;
  margin-bottom: 1.5rem;
  position: relative;
}

.footer-title::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 40px;
  height: 2px;
  background: #ffd700;
}

.footer-description {
  color: #cccccc;
  line-height: 1.6;
  margin-bottom: 2rem;
  font-size: 0.95rem;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgba(255, 215, 0, 0.1);
  color: #ffd700;
  border-radius: 50%;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 215, 0, 0.3);
}

.social-link:hover {
  background: #ffd700;
  color: #1a1a1a;
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(255, 215, 0, 0.3);
}

.social-icon {
  width: 24px;
  height: 24px;
  object-fit: contain;
  filter: brightness(0) invert(1);
  transition: all 0.3s ease;
}

.social-link:hover .social-icon {
  filter: brightness(0) invert(0);
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: 0.8rem;
}

.footer-link {
  color: #cccccc;
  text-decoration: none;
  transition: color 0.3s ease;
  font-size: 0.95rem;
}

.footer-link:hover {
  color: #ffd700;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  color: #cccccc;
  font-size: 0.95rem;
}

.contact-item i {
  color: #ffd700;
  width: 20px;
  text-align: center;
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 2rem;
  margin-top: 2rem;
}

.copyright {
  color: #999999;
  margin: 0;
  font-size: 0.9rem;
}

.footer-bottom-links {
  display: flex;
  gap: 2rem;
  justify-content: flex-end;
}

.footer-bottom-link {
  color: #999999;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s ease;
}

.footer-bottom-link:hover {
  color: #ffd700;
}

/* Mobile Responsive Footer */
@media (max-width: 768px) {
  .footer {
    padding: 3rem 0 1.5rem;
  }

  .footer-bottom-links {
    justify-content: flex-start;
    margin-top: 1rem;
    gap: 1.5rem;
}

  .footer-bottom .row {
    text-align: center;
  }

  .social-links {
    justify-content: center;
  }

  .footer-title {
    font-size: 1.2rem;
  }
}

@media (max-width: 576px) {
  .footer-bottom-links {
    flex-direction: column;
    gap: 1rem;
  }

  .footer-bottom-link {
    display: block;
  }
}

/* About Us Section */
.about-us-section {
  background: #ffffff;
  padding: 5rem 0;
  scroll-margin-top: 80px; /* Account for fixed navbar */
}

.about-us-title {
  color: #000000;
  font-size: 3rem;
  font-weight: 400;
  margin-bottom: 1rem;
  margin-top: 0;
}

.about-us-underline {
  width: 120px;
  height: 4px;
  background: linear-gradient(135deg, #d9bb59 0%, #c4a84a 100%);
  margin: 0 auto 3rem;
  border-radius: 2px;
}

/* Introduction Section */
.introduction-section {
  background: #ffffff;
  padding: 0;
}

.introduction-content {
  display: flex;
  align-items: flex-start;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
}

.introduction-logo {
  flex-shrink: 0;
}

.intro-logo-img {
  width: 80px;
  height: 80px;
  object-fit: contain;
  border-radius: 50%;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.introduction-text {
  flex: 1;
  text-align: left;
}

.introduction-title {
  color: #d9bb59;
  font-size: 2.5rem;
  font-weight: 400;
  margin-bottom: 1rem;
  margin-top: 0;
}

.title-underline {
  width: 100px;
  height: 3px;
  background: linear-gradient(135deg, #d9bb59 0%, #c4a84a 100%);
  margin-bottom: 2rem;
  border-radius: 2px;
}

.introduction-description {
  color: #666666;
  font-size: 1.1rem;
  line-height: 1.8;
  margin: 0;
  font-weight: 400;
}

/* Vision Section */
.vision-section {
  background: #ffffff;
  padding: 5rem 0;
}

.vision-content {
  max-width: 800px;
  margin-left: auto;
  text-align: right;
}

.vision-title {
  color: #d9bb59;
  font-size: 2.8rem;
  font-weight: 400;
  margin-bottom: 1rem;
  margin-top: 0;
  display: inline-block;
}

.vision-underline {
  width: 100px;
  height: 3px;
  background: linear-gradient(135deg, #c4a84a 0%, #d9bb59 100%);
  margin-bottom: 2rem;
  margin-left: auto;
  border-radius: 2px;
}

.vision-description {
  color: #555555;
  font-size: 1.2rem;
  line-height: 1.8;
  margin: 0;
  font-weight: 400;
}

/* Mission Section */
.mission-content {
  max-width: 1200px;
  margin-left: 180px;
  margin-right: auto;
  text-align: left;
}

.mission-title {
  color: #d9bb59;
  font-size: 2.8rem;
  font-weight: 400;
  margin-bottom: 1rem;
  margin-top: 0;
  display: inline-block;
}

.mission-underline {
  width: 100px;
  height: 3px;
  background: linear-gradient(135deg, #c4a84a 0%, #d9bb59 100%);
  margin-bottom: 2rem;
  margin-right: auto;
  border-radius: 2px;
}

.mission-description {
  color: #555555;
  font-size: 1.2rem;
  line-height: 1.8;
  margin: 0;
  font-weight: 400;
}

/* Contact Us Section */
.contact-section {
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
  padding: 5rem 0;
  scroll-margin-top: 80px;
}

.contact-title {
  color: #000000;
  font-size: 3rem;
  font-weight: 400;
  margin-bottom: 1rem;
  margin-top: 0;
}

.contact-underline {
  width: 120px;
  height: 4px;
  background: linear-gradient(135deg, #d9bb59 0%, #c4a84a 100%);
  margin: 0 auto 3rem;
  border-radius: 2px;
}

.contact-subtitle {
  color: #d9bb59;
  font-size: 1.8rem;
  font-weight: 400;
  margin-bottom: 1.5rem;
}

.contact-description {
  color: #666666;
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 2rem;
}

.contact-form-container {
  background: #ffffff;
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  height: 100%;
}

.contact-form .form-group {
  margin-bottom: 1.5rem;
}

.contact-form .form-control {
  border: 2px solid #e9ecef;
  border-radius: 10px;
  padding: 1rem 1.5rem;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: #f8f9fa;
  width: 100%;
}

.contact-form .form-control:focus {
  border-color: #d9bb59;
  box-shadow: 0 0 0 0.2rem rgba(217, 187, 89, 0.25);
  background: #ffffff;
  outline: none;
}

.contact-form .form-control::placeholder {
  color: #999999;
}

.contact-btn {
  background: linear-gradient(135deg, #d9bb59 0%, #c4a84a 100%);
  color: #ffffff;
  border: none;
  border-radius: 10px;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 400;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  width: 100%;
  justify-content: center;
  cursor: pointer;
}

.contact-btn:hover {
  background: linear-gradient(135deg, #c4a84a 0%, #d9bb59 100%);
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(217, 187, 89, 0.3);
}

.btn-icon {
  width: 20px;
  height: 20px;
  object-fit: contain;
  filter: brightness(0) invert(1);
}

.contact-info {
  background: #ffffff;
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  height: 100%;
}

.contact-details {
  margin-top: 2rem;
}

.contact-item {
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: #f8f9fa;
  border-radius: 15px;
  transition: all 0.3s ease;
}

.contact-item:hover {
  background: #e9ecef;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.contact-icon {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #d9bb59 0%, #c4a84a 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.contact-icon .custom-icon {
  width: 24px;
  height: 24px;
  object-fit: contain;
  filter: brightness(0) invert(1);
}

.contact-text h4 {
  color: #d9bb59;
  font-size: 1.2rem;
  font-weight: 400;
  margin-bottom: 0.5rem;
}

.contact-text p {
  color: #666666;
  font-size: 1rem;
  margin: 0;
}


/* Mobile Responsive for About Us */
@media (max-width: 768px) {
  .about-us-section {
    padding: 3rem 0;
  }

  .about-us-title {
    font-size: 2.5rem;
  }

  .about-us-underline {
    width: 100px;
  }

  .introduction-section {
    padding: 0;
  }

  .introduction-content {
    flex-direction: column;
    gap: 2rem;
    text-align: center;
  }

  .introduction-logo {
    align-self: center;
  }

  .intro-logo-img {
    width: 60px;
    height: 60px;
  }

  .introduction-text {
  text-align: center;
}

  .introduction-title {
    font-size: 2rem;
  }

  .introduction-description {
    font-size: 1rem;
  }

  .vision-section {
    padding: 3rem 0;
  }

  .vision-content {
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }

  .vision-title {
    font-size: 2.2rem;
  }

  .vision-underline {
    margin-left: auto;
    margin-right: auto;
  }

  .vision-description {
    font-size: 1.1rem;
  }

  .mission-content {
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }

  .mission-title {
    font-size: 2.2rem;
  }

  .mission-underline {
    margin-left: auto;
    margin-right: auto;
  }

  .mission-description {
    font-size: 1.1rem;
  }

  .contact-section {
    padding: 3rem 0;
  }

  .contact-title {
    font-size: 2.5rem;
  }

  .contact-underline {
    width: 100px;
  }

  .contact-info,
  .contact-form-container {
    padding: 2rem;
  }

  .contact-item {
    padding: 1rem;
    gap: 1rem;
  }

  .contact-icon {
    width: 40px;
    height: 40px;
  }

  .contact-icon .custom-icon {
    width: 20px;
    height: 20px;
  }
}

@media (max-width: 576px) {
  .about-us-title {
    font-size: 2rem;
  }

  .about-us-underline {
    width: 80px;
  }

  .introduction-content {
    gap: 1.5rem;
  }

  .intro-logo-img {
    width: 50px;
    height: 50px;
  }

  .introduction-title {
    font-size: 1.8rem;
  }

  .introduction-description {
    font-size: 0.95rem;
  }

  .vision-title {
    font-size: 1.8rem;
  }

  .vision-description {
    font-size: 1rem;
  }

  .mission-title {
    font-size: 1.8rem;
  }

  .mission-description {
    font-size: 1rem;
  }

  .contact-title {
    font-size: 2rem;
  }

  .contact-underline {
    width: 80px;
  }

  .contact-info,
  .contact-form-container {
    padding: 1.5rem;
  }

  .contact-item {
    padding: 0.8rem;
    gap: 0.8rem;
  }

  .contact-icon {
    width: 35px;
    height: 35px;
  }

  .contact-icon .custom-icon {
    width: 18px;
    height: 18px;
  }
}
</style>
