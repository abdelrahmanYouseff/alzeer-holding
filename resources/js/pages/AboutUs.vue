<template>
  <div class="about-page">
    <!-- Hero Section with Video Background -->
    <section class="hero-section position-relative vh-100 d-flex align-items-center justify-content-center">
      <!-- Video Background -->
      <div class="video-background position-absolute top-0 start-0 w-100 h-100">
        <video
          ref="videoRef"
          autoplay
          muted
          loop
          playsinline
          class="background-video w-100 h-100 object-fit-cover"
          preload="auto"
          webkit-playsinline
          x5-playsinline
          disablepictureinpicture
          controlslist="nodownload nofullscreen noremoteplayback"
        >
          <source src="/asset/background-video.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
        <div class="video-overlay position-absolute top-0 start-0 w-100 h-100"></div>
      </div>

      <!-- Logo Above Navigation -->
      <div class="logo-above-nav position-absolute top-0 start-50 translate-middle-x" :class="{ 'd-none': isScrolled }">
        <img src="/asset/logos/44.png" alt="Alzeer Holding Logo" class="main-logo" />
      </div>


      <!-- Mission Statement -->
      <div class="mission-statement text-center position-relative z-1">
        <h1 class="mission-text display-1 fw-bold text-white">
          About us
        </h1>
      </div>

      <!-- Scroll Down Indicator -->
      <div class="scroll-indicator position-absolute bottom-0 start-50 translate-middle-x text-center">
        <div class="scroll-line mx-auto mb-2"></div>
        <div class="scroll-text">SCROLL DOWN</div>
      </div>
    </section>

    <!-- Introduction Section -->
    <section class="introduction-section py-5">
      <div class="container">
        <!-- Introduction Content -->
        <div class="row justify-content-center mb-5">
          <div class="col-lg-10">
            <div class="introduction-content bg-white rounded shadow-lg p-4 p-md-5">
              <div class="introduction-header d-flex flex-column flex-md-row align-items-center mb-4">
                <img src="/asset/logos/44.png" alt="Alzeer Holding Logo" class="main-logo me-md-4 mb-3 mb-md-0" />
                <h2 class="section-title text-center text-md-start mb-0">Introduction</h2>
              </div>
              <div class="introduction-text text-muted">
                <p class="mb-2">Fahad Nawaf Al-Zeer Holding, we redefine</p>
                <p class="mb-2">the essence of investment by turning ambition</p>
                <p class="mb-2">into tangible achievements and forging a bridge</p>
                <p class="mb-2">from today to a future enriched with value</p>
                <p class="mb-0">and meaningful impact.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Vision Content -->
        <div class="row justify-content-center mb-5">
          <div class="col-lg-10">
            <div class="vision-content bg-white rounded shadow-lg p-4 p-md-5">
              <h2 class="section-title text-center mb-4">Vision</h2>
              <div class="introduction-text text-muted">
                <p class="mb-2">To be a guiding light in investment, inspiring generations</p>
                <p class="mb-2">and creating opportunities that shape a brighter,</p>
                <p class="mb-0">sustainable, and prosperous future for all.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Mission Content -->
        <div class="row justify-content-center">
          <div class="col-lg-10">
            <div class="mission-content bg-white rounded shadow-lg p-4 p-md-5">
              <h2 class="section-title text-center mb-4">Mission</h2>
              <div class="introduction-text text-muted">
                <p class="mb-2">We nurture human potential and spark innovation,</p>
                <p class="mb-2">building a values-driven ecosystem that delivers</p>
                <p class="mb-2">meaningful achievements, strengthens our economy,</p>
                <p class="mb-0">and enriches the lives of our communities.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer bg-dark text-white py-5">
      <div class="container">
        <!-- Main Footer Content -->
        <div class="row">
          <!-- Company Info -->
          <div class="col-lg-4 col-md-6 mb-4">
            <div class="footer-logo mb-3">
              <img src="/asset/logos/44.png" alt="Al Zeer Holding Logo" class="footer-logo mb-3" />
            </div>
            <p class="footer-description text-muted mb-4">
              We are one of the world's leading and most successful diversified investment holding companies delivering continuous and sustainable growth.
            </p>
            <div class="social-links d-flex gap-3">
              <a href="https://twitter.com/AlzeerHoldingSA" target="_blank" class="social-link text-white" title="Twitter">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" class="social-link text-white" title="LinkedIn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" class="social-link text-white" title="Instagram">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          <!-- Quick Links -->
          <div class="col-lg-2 col-md-6 mb-4">
            <h5 class="footer-title mb-3">Quick Links</h5>
            <ul class="footer-links list-unstyled">
              <li class="mb-2"><a href="/about-us" class="footer-link text-muted text-decoration-none">About Us</a></li>
              <li class="mb-2"><a href="/asset/pdf/%D8%A8%D8%B1%D9%88%D9%81%D8%A7%D9%8A%D9%84%20%D8%A7%D9%84%D9%82%D8%A7%D8%A8%D8%B6%D8%A9%20(1).pdf" target="_blank" class="footer-link text-muted text-decoration-none">Portfolio</a></li>
              <li class="mb-2"><a href="#" class="footer-link text-muted text-decoration-none">Investor Relations</a></li>
              <li class="mb-2"><a href="#" class="footer-link text-muted text-decoration-none">Contact Us</a></li>
            </ul>
          </div>

          <!-- Industries -->
          <div class="col-lg-2 col-md-6 mb-4">
            <h5 class="footer-title mb-3">Industries</h5>
            <ul class="footer-links list-unstyled">
              <li class="mb-2"><a href="#" class="footer-link text-muted text-decoration-none">Aviation</a></li>
              <li class="mb-2"><a href="#" class="footer-link text-muted text-decoration-none">Real Estate</a></li>
              <li class="mb-2"><a href="#" class="footer-link text-muted text-decoration-none">Technology</a></li>
              <li class="mb-2"><a href="#" class="footer-link text-muted text-decoration-none">Healthcare</a></li>
              <li class="mb-2"><a href="#" class="footer-link text-muted text-decoration-none">Education</a></li>
            </ul>
          </div>

          <!-- Contact Info -->
          <div class="col-lg-4 col-md-6 mb-4">
            <h5 class="footer-title mb-3">Contact Info</h5>
            <div class="contact-info">
              <div class="contact-item d-flex align-items-center mb-3">
                <svg class="contact-icon me-3" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <span class="text-muted">Riyadh, Saudi Arabia</span>
              </div>
              <div class="contact-item d-flex align-items-center mb-3">
                <svg class="contact-icon me-3" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                <span class="text-muted">+966 XX XXX XXXX</span>
              </div>
              <div class="contact-item d-flex align-items-center">
                <svg class="contact-icon me-3" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <span class="text-muted">info@alzeerholding.com</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Footer Bottom -->
        <div class="footer-bottom border-top border-secondary pt-4 mt-4">
          <div class="row align-items-center">
            <div class="col-md-6">
              <p class="copyright text-muted mb-0">&copy; 2024 Al Zeer Holding Company. All rights reserved.</p>
            </div>
            <div class="col-md-6">
              <div class="footer-bottom-links d-flex justify-content-md-end gap-3 mt-3 mt-md-0">
                <a href="#" class="footer-bottom-link text-muted text-decoration-none">Privacy Policy</a>
                <span class="footer-separator text-muted">|</span>
                <a href="#" class="footer-bottom-link text-muted text-decoration-none">Terms of Service</a>
                <span class="footer-separator text-muted">|</span>
                <a href="#" class="footer-bottom-link text-muted text-decoration-none">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, onUnmounted } from 'vue'

const videoRef = ref<HTMLVideoElement>()
const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

// Function to toggle mobile menu
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

// Function to ensure video plays continuously
const ensureVideoPlays = () => {
  if (videoRef.value) {
    videoRef.value.play().catch((error) => {
      console.log('Video play failed:', error)
    })
  }
}

// Function to handle scroll and hide header
const handleScroll = () => {
  const scrollPosition = window.scrollY
  isScrolled.value = scrollPosition > 100 // Hide after scrolling 100px
}

// Handle resize events
const handleResize = () => {
  if (window.innerWidth > 768) {
    isMobileMenuOpen.value = false
  }
}

// Close mobile menu when clicking on a link
const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

onMounted(() => {
  ensureVideoPlays()
  window.addEventListener('scroll', handleScroll)
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', handleResize)
})

// Function to restart video if it stops
const handleVideoEnd = () => {
  if (videoRef.value) {
    videoRef.value.currentTime = 0
    videoRef.value.play().catch(() => {})
  }
}

// Function to handle video pause and restart
const handleVideoPause = () => {
  if (videoRef.value && !videoRef.value.ended) {
  setTimeout(() => {
    if (videoRef.value && videoRef.value.paused) {
      videoRef.value.play().catch(() => {})
    }
  }, 100)
  }
}

onMounted(() => {
  // Ensure video plays on all devices
  if (videoRef.value) {
    // Set video properties for continuous playback
    videoRef.value.muted = true
    videoRef.value.loop = true
    videoRef.value.playsInline = true
    videoRef.value.autoplay = true
    videoRef.value.controls = false
    videoRef.value.preload = 'auto'

    // Add event listeners for continuous playback
    videoRef.value.addEventListener('ended', handleVideoEnd)
    videoRef.value.addEventListener('pause', handleVideoPause)
    videoRef.value.addEventListener('error', () => {
      console.log('Video error occurred, attempting to reload')
      videoRef.value?.load()
      setTimeout(ensureVideoPlays, 1000)
    })

    // Load the video
    videoRef.value.load()

    // Try to play immediately and retry if needed
    const playVideo = () => {
      videoRef.value?.play().then(() => {
  console.log('Video started playing successfully')
        // Force video to be visible
        if (videoRef.value) {
          videoRef.value.style.opacity = '1'
          videoRef.value.style.visibility = 'visible'
        }
      }).catch((error) => {
        console.log('Video autoplay failed:', error)
        // Retry after a short delay
        setTimeout(playVideo, 1000)
      })
    }

    // Start playing
    setTimeout(playVideo, 500)

    // Fallback: try to play on user interaction
    const playOnInteraction = () => {
      ensureVideoPlays()
      document.removeEventListener('click', playOnInteraction)
      document.removeEventListener('touchstart', playOnInteraction)
      document.removeEventListener('keydown', playOnInteraction)
    }

    document.addEventListener('click', playOnInteraction)
    document.addEventListener('touchstart', playOnInteraction)
    document.addEventListener('keydown', playOnInteraction)

    // Periodic check to ensure video is playing
    const checkVideoStatus = setInterval(() => {
      if (videoRef.value && videoRef.value.paused && !videoRef.value.ended) {
        ensureVideoPlays()
      }
    }, 5000)

    // Clean up interval on unmount
    onUnmounted(() => {
      clearInterval(checkVideoStatus)
    })
  }
})
</script>

<style scoped>
/* Global Font */
@import url('https://fonts.googleapis.com/css2?family=Righteous&display=swap');

* {
  font-family: 'Righteous', sans-serif !important;
}

body, html {
  font-family: 'Righteous', sans-serif !important;
}

.about-page {
  position: relative;
  width: 100%;
  font-family: 'Righteous', sans-serif;
  background: #ffffff;
}

/* Hero Section */
.hero-section {
  position: relative;
  width: 100%;
  overflow: hidden;
}

/* Video Background */
.video-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  overflow: hidden;
}

.background-video {
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  transform: translate(-50%, -50%);
  object-fit: cover;
  filter: brightness(0.4) blur(1px);
  z-index: 2;
  pointer-events: none;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  opacity: 1;
  visibility: visible;
  display: block;
}

.video-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 3;
}

/* Fallback background */
.video-background::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  z-index: -3;
}

/* Navigation Bar */
.navbar {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 20px 0;
  z-index: 20;
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
}

.nav-left {
  display: flex;
  align-items: center;
  gap: 60px;
  position: fixed;
  top: 50px;
  right: 20px;
  z-index: 1000;
  background: transparent;
  padding: 15px 0;
  border-radius: 0;
  backdrop-filter: none;
  border: none;
  box-shadow: none;
  white-space: nowrap;
  flex-wrap: nowrap;
  transition: all 0.3s ease;
}

.nav-left.hidden {
  opacity: 0;
  visibility: hidden;
  transform: translateY(-100px);
}

.nav-right {
  display: none;
}

.logo-above-nav {
  position: fixed;
  top: 20px;
  left: 80px;
  z-index: 1001;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  visibility: visible;
  opacity: 1;
  transform: translateZ(0);
  will-change: transform;
  transition: all 0.3s ease;
}

.logo-above-nav.hidden {
  opacity: 0;
  visibility: hidden;
  transform: translateY(-100px);
}

.main-logo {
  height: 120px;
  width: auto;
  object-fit: contain;
  filter: brightness(1.1);
}

.nav-link {
  color: white;
  text-decoration: none;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 1px;
  transition: opacity 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
}

.nav-link:hover {
  opacity: 0.7;
}

.nav-separator {
  width: 1px;
  height: 20px;
  background: rgba(255, 255, 255, 0.3);
}

/* Icons */
.twitter-icon,
.globe-icon,
.search-icon {
  width: 16px;
  height: 16px;
  fill: white;
}

.twitter-link {
  color: #1DA1F2;
}

.twitter-link .twitter-icon {
  fill: #1DA1F2;
}

/* Main Content */
.main-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 10;
  width: 100%;
  max-width: 1000px;
  padding: 0 40px;
}

/* Mission Statement */
.mission-statement {
  margin-bottom: 80px;
}

.mission-text {
  font-size: 64px;
  line-height: 1.6;
  color: white;
  font-weight: 300;
  font-family: 'Righteous', sans-serif;
  margin: 0;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

/* Statistics */
.statistics {
  display: flex;
  justify-content: space-between;
  gap: 60px;
  max-width: 800px;
  margin: 0 auto;
}

.stat-item {
  flex: 1;
  text-align: center;
}

.stat-number {
  font-size: 48px;
  font-weight: bold;
  color: white;
  font-family: 'Righteous', sans-serif;
  margin-bottom: 10px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

.stat-description {
  font-size: 14px;
  color: white;
  font-weight: 400;
  line-height: 1.4;
  font-family: 'Righteous', sans-serif;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
}

/* Scroll Indicator */
.scroll-indicator {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  z-index: 20;
}

.scroll-line {
  width: 2px;
  height: 30px;
  background: white;
  margin: 0 auto 10px;
}

.scroll-text {
  color: white;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 1px;
  font-family: 'Righteous', sans-serif;
}

/* Mobile Menu Toggle Button */
.mobile-menu-toggle {
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: auto;
  min-width: 120px;
  height: 45px;
  background: rgba(45, 90, 39, 0.9);
  border: 2px solid rgba(45, 90, 39, 0.8);
  border-radius: 25px;
  cursor: pointer;
  padding: 0 15px;
  z-index: 1001;
  position: relative;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
}

.mobile-menu-toggle:hover {
  background: rgba(45, 90, 39, 0.9);
  border-color: rgba(45, 90, 39, 0.8);
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(45, 90, 39, 0.3);
}

.menu-text {
  color: white;
  font-size: 14px;
  font-weight: bold;
  font-family: 'Righteous', sans-serif;
  letter-spacing: 1px;
  margin-right: 10px;
}

.hamburger {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 20px;
  height: 20px;
}

.hamburger span {
  width: 100%;
  height: 2px;
  background: white;
  border-radius: 2px;
  transition: all 0.3s ease;
  transform-origin: center;
}

.mobile-menu-toggle.active .hamburger span:nth-child(1) {
  transform: rotate(45deg) translate(4px, 4px);
}

.mobile-menu-toggle.active .hamburger span:nth-child(2) {
  opacity: 0;
}

.mobile-menu-toggle.active .hamburger span:nth-child(3) {
  transform: rotate(-45deg) translate(4px, -4px);
}

.mobile-menu-toggle.active {
  background: rgba(45, 90, 39, 1);
  border-color: rgba(45, 90, 39, 1);
}

/* Mobile Dropdown Menu */
.mobile-dropdown {
  position: fixed;
  top: 85px;
  right: 20px;
  background: rgba(0, 0, 0, 0.95);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  border-radius: 15px;
  padding: 20px;
  min-width: 200px;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1002;
  border: 1px solid rgba(45, 90, 39, 0.3);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
}

.mobile-dropdown.active {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.mobile-nav-link {
  display: block;
  color: white;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  font-family: 'Righteous', sans-serif;
  padding: 12px 20px;
  margin: 8px 0;
  border-radius: 10px;
  transition: all 0.3s ease;
  text-align: center;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid transparent;
}

.mobile-nav-link:hover {
  background: rgba(45, 90, 39, 0.4);
  border-color: rgba(45, 90, 39, 0.6);
  transform: translateX(5px);
  color: #2d5a27;
}

/* Responsive Design */
@media (max-width: 768px) {
  .nav-container {
    padding: 15px 20px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;
    z-index: 1002;
  }

  /* Show mobile menu toggle */
  .mobile-menu-toggle {
    display: flex !important;
    order: 2;
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 1003;
  }

  /* Hide desktop navigation */
  .desktop-nav {
    display: none !important;
  }

  /* Hide right navigation on mobile */
  .nav-right {
    display: none;
  }

  /* Hero section mobile adjustments */
  .hero-section {
    height: 70vh;
    min-height: 500px;
  }

  .mission-statement {
    padding: 30px 20px;
    margin: 20px;
  }

  .mission-text {
    font-size: 18px;
    line-height: 1.5;
    text-align: center;
  }

  .scroll-indicator {
    bottom: 20px;
  }

  /* Logo positioning on mobile */
  .logo-above-nav {
    top: 15px;
    left: 20px;
    z-index: 1003;
  }

  .logo-above-nav {
    top: 15px;
    left: 60px;
    visibility: visible;
    opacity: 1;
    transform: translateZ(0);
    will-change: transform;
  }

  .main-logo {
    height: 95px;
  }

  .nav-link {
    font-size: 12px;
  }

  .mission-text {
    font-size: 48px;
  }

  .statistics {
    flex-direction: column;
    gap: 40px;
  }

  .stat-number {
    font-size: 36px;
  }

  .stat-description {
    font-size: 12px;
  }
}

@media (max-width: 480px) {
  .nav-container {
    padding: 10px 15px;
  }

  .mobile-menu-toggle {
    min-width: 100px;
    height: 40px;
    padding: 0 12px;
  }

  .menu-text {
    font-size: 12px;
    margin-right: 8px;
  }

  .hamburger {
    width: 18px;
    height: 18px;
  }

  .mobile-dropdown {
    right: 15px;
    top: 80px;
    min-width: 180px;
    padding: 15px;
  }

  .mobile-menu-toggle {
    top: 15px;
    right: 15px;
  }

  .mobile-nav-link {
    font-size: 14px;
    padding: 10px 15px;
    margin: 6px 0;
  }

  .nav-left {
    padding: 70px 15px 30px;
  }

  .nav-left .nav-link {
    font-size: 18px;
    padding: 15px 25px;
    margin: 12px 0;
    width: 95%;
    max-width: 250px;
  }

  .logo-above-nav {
    top: 10px;
    left: 15px;
  }

  .main-logo {
    height: 50px;
  }

  .introduction-section {
    padding: 40px 0;
  }

  .container {
    padding: 0 15px;
  }

  .section-title {
    font-size: 28px;
    margin-bottom: 15px;
  }

  .introduction-text {
    font-size: 16px;
    line-height: 1.5;
  }

  .introduction-content,
  .vision-content,
  .mission-content {
    margin: 0 0 40px 0;
  }
}

/* Introduction Section */
.introduction-section {
  padding: 120px 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  position: relative;
  overflow: hidden;
}

.introduction-header {
  display: flex;
  align-items: center;
  gap: 30px;
  margin-bottom: 40px;
}

.main-logo {
  height: 80px;
  width: auto;
  object-fit: contain;
  filter: brightness(1.1);
}

.introduction-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent 0%, #2d5a27 50%, transparent 100%);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
  position: relative;
}

.introduction-content {
  text-align: left;
  max-width: 900px;
  margin: 0 0 80px 0;
  position: relative;
  z-index: 2;
}

.vision-content {
  text-align: right;
  max-width: 900px;
  margin: 0 0 80px auto;
  position: relative;
  z-index: 2;
}

.mission-content {
  text-align: left;
  max-width: 900px;
  margin: 0;
  position: relative;
  z-index: 2;
}

.section-title {
  font-size: 48px;
  font-weight: 700;
  color: #2d5a27;
  margin-bottom: 40px;
  font-family: 'Righteous', sans-serif;
  letter-spacing: 2px;
  position: relative;
  display: inline-block;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -15px;
  left: 0;
  width: 80px;
  height: 3px;
  background: linear-gradient(90deg, #2d5a27, #4ade80);
  border-radius: 2px;
}

.vision-content .section-title::after {
  left: auto;
  right: 0;
  background: linear-gradient(90deg, #4ade80, #2d5a27);
}

.introduction-text {
  font-size: 24px;
  line-height: 1.8;
  color: #495057;
  font-weight: 400;
  font-family: 'Righteous', sans-serif;
  margin: 0;
  letter-spacing: 0.5px;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}

/* Decorative Elements */
.introduction-section::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 200px;
  background: radial-gradient(circle, rgba(45, 90, 39, 0.05) 0%, transparent 70%);
  border-radius: 50%;
  z-index: 1;
}

/* Responsive Design for Introduction */
@media (max-width: 768px) {
  .introduction-section {
    padding: 60px 0;
  }

  .container {
    padding: 0 20px;
    max-width: 100%;
  }

  .introduction-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    margin-bottom: 30px;
  }

  .main-logo {
    height: 60px;
    align-self: center;
  }

  .introduction-content,
  .vision-content,
  .mission-content {
    max-width: 100%;
    margin: 0 0 50px 0;
  }

  .section-title {
    font-size: 32px;
    letter-spacing: 1px;
    text-align: center;
    margin-bottom: 20px;
  }

.introduction-text {
  font-size: 14px;
  line-height: 1.6;
  text-align: center;
}

.introduction-text p {
  margin-bottom: 0.5rem;
  font-weight: 400;
}

@media (min-width: 576px) {
  .introduction-text {
    font-size: 15px;
  }
}

@media (min-width: 768px) {
  .introduction-text {
    font-size: 16px;
    text-align: left;
  }

  .introduction-text p {
    margin-bottom: 0.75rem;
  }
}

@media (min-width: 992px) {
  .introduction-text {
    font-size: 17px;
  }
}
}

@media (max-width: 480px) {
  .introduction-section {
    padding: 60px 0;
  }

  .section-title {
    font-size: 28px;
    letter-spacing: 0.5px;
  }

  .introduction-text {
    font-size: 18px;
    line-height: 1.6;
  }
}

/* Footer */
.footer {
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  color: white;
  padding: 60px 0 20px;
  position: relative;
  z-index: 5;
}

.footer::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent 0%, #2d5a27 50%, transparent 100%);
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
}

.footer-main {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 50px;
  margin-bottom: 40px;
}

.footer-section {
  display: flex;
  flex-direction: column;
}

.company-section {
  max-width: 400px;
}

.footer-logo {
  margin-bottom: 20px;
}

.logo-container {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
}

.logo-icon img {
  height: 80px;
  width: auto;
  object-fit: contain;
  filter: brightness(1.1);
}

.logo-text {
  font-size: 24px;
  font-weight: bold;
  color: white;
  font-family: 'Righteous', sans-serif;
}

.footer-description {
  font-size: 14px;
  line-height: 1.6;
  color: #d0d0d0;
  margin-bottom: 25px;
  font-family: 'Righteous', sans-serif;
}

.social-links {
  display: flex;
  gap: 15px;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgba(45, 90, 39, 0.2);
  border: 1px solid rgba(45, 90, 39, 0.3);
  border-radius: 50%;
  color: #2d5a27;
  text-decoration: none;
  transition: all 0.3s ease;
}

.social-link:hover {
  background: #2d5a27;
  color: white;
  transform: translateY(-2px);
}

.social-link svg {
  width: 20px;
  height: 20px;
}

.footer-title {
  font-size: 18px;
  font-weight: bold;
  color: white;
  margin-bottom: 20px;
  font-family: 'Righteous', sans-serif;
  position: relative;
}

.footer-title::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 30px;
  height: 2px;
  background: #2d5a27;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: 12px;
}

.footer-link {
  color: #d0d0d0;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.3s ease;
  font-family: 'Righteous', sans-serif;
  position: relative;
}

.footer-link:hover {
  color: #2d5a27;
}

.footer-link::before {
  content: '';
  position: absolute;
  left: -15px;
  top: 50%;
  transform: translateY(-50%);
  width: 0;
  height: 1px;
  background: #2d5a27;
  transition: width 0.3s ease;
}

.footer-link:hover::before {
  width: 10px;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 12px;
  color: #d0d0d0;
  font-size: 14px;
  font-family: 'Righteous', sans-serif;
}

.contact-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  color: #2d5a27;
}

.contact-icon svg {
  width: 16px;
  height: 16px;
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 20px;
}

.footer-bottom-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
}

.copyright p {
  color: #b0b0b0;
  font-size: 14px;
  margin: 0;
  font-family: 'Righteous', sans-serif;
}

.footer-bottom-links {
  display: flex;
  gap: 30px;
}

.footer-bottom-link {
  color: #d0d0d0;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.3s ease;
  font-family: 'Righteous', sans-serif;
}

.footer-bottom-link:hover {
  color: #2d5a27;
}

/* Responsive Design for Footer */
@media (max-width: 1024px) {
  .footer-main {
    grid-template-columns: 1fr 1fr;
    gap: 40px;
  }

  .company-section {
    grid-column: 1 / -1;
    max-width: 100%;
  }
}

@media (max-width: 768px) {
  .footer {
    padding: 40px 0 20px;
  }

  .footer-container {
    padding: 0 20px;
  }

  .footer-main {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .footer-bottom-content {
    flex-direction: column;
    text-align: center;
    gap: 15px;
  }

  .footer-bottom-links {
    gap: 20px;
  }
}

@media (max-width: 480px) {
  .logo-container {
    flex-direction: column;
    text-align: center;
    gap: 10px;
  }

  .logo-text {
    font-size: 20px;
  }

  .footer-bottom-links {
    flex-direction: column;
    gap: 10px;
  }
}
</style>
