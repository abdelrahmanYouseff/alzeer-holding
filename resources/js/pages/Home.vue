<template>
  <div class="homepage">
    <!-- Navigation Bar -->
    <nav class="navbar navbar-dark bg-dark fixed-top">
      <div class="container-fluid d-flex justify-content-between align-items-center">
        <!-- Logo on the left -->
        <div class="navbar-brand">
          <img src="/asset/logos/44.png" alt="Alzeer Holding Logo" class="logo-img" />
        </div>

        <!-- Desktop Navigation Links -->
        <div class="d-none d-md-flex align-items-center">
          <ul class="navbar-nav flex-row me-3">
            <li class="nav-item">
              <a class="nav-link text-white px-3" href="/">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white px-3" href="#about-us">About Us</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white px-3" href="/asset/pdf/%D8%A8%D8%B1%D9%88%D9%81%D8%A7%D9%8A%D9%84%20%D8%A7%D9%84%D9%82%D8%A7%D8%A8%D8%B6%D8%A9%20(1).pdf" target="_blank">Portfolio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white px-3" href="#contact">Contact Us</a>
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
              <a class="nav-link text-white" href="/">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="#about-us">About Us</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="/asset/pdf/%D8%A8%D8%B1%D9%88%D9%81%D8%A7%D9%8A%D9%84%20%D8%A7%D9%84%D9%82%D8%A7%D8%A8%D8%B6%D8%A9%20(1).pdf" target="_blank">Portfolio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="#contact">Contact Us</a>
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
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-8 text-center">
              <h1 class="hero-title">At Fahad Nawaf Al-Zeer Holding, we redefine</h1>
              <p class="hero-subtitle">essence of investment by turning ambition into tangible<br>
              achievements and forging a bridge from today to<br>
              future enriched with value and meaningful impact.</p>
    </div>
        </div>
        </div>
      </div>
    </section>

    <!-- Brands Section -->
    <section class="brands-section">
      <div class="container-fluid">
        <div class="brands-header text-center mb-5">
          <h2 class="brands-title">Alzeer Holding</h2>
          <p class="brands-subtitle">Discover the diverse portfolio of Alzeer Holding</p>
          </div>

        <!-- First Row - Moving Left -->
        <div class="brands-row brands-row-1">
          <div class="brands-container">
            <div class="brand-item">
              <img src="/asset/logos/44.png" alt="Alzeer Holding" class="brand-logo" />
                </div>
            <div class="brand-item">
              <img src="/asset/logos/44.png" alt="Alzeer Holding" class="brand-logo" />
              </div>
            <div class="brand-item">
              <img src="/asset/logos/44.png" alt="Alzeer Holding" class="brand-logo" />
                </div>
            <div class="brand-item">
              <img src="/asset/logos/44.png" alt="Alzeer Holding" class="brand-logo" />
              </div>
            <div class="brand-item">
              <img src="/asset/logos/44.png" alt="Alzeer Holding" class="brand-logo" />
                </div>
              <!-- Duplicate for seamless loop -->
            <div class="brand-item">
              <img src="/asset/logos/44.png" alt="Alzeer Holding" class="brand-logo" />
              </div>
            <div class="brand-item">
              <img src="/asset/logos/44.png" alt="Alzeer Holding" class="brand-logo" />
                </div>
            <div class="brand-item">
              <img src="/asset/logos/44.png" alt="Alzeer Holding" class="brand-logo" />
              </div>
            <div class="brand-item">
              <img src="/asset/logos/44.png" alt="Alzeer Holding" class="brand-logo" />
                </div>
            <div class="brand-item">
              <img src="/asset/logos/44.png" alt="Alzeer Holding" class="brand-logo" />
              </div>
                </div>
              </div>

        <!-- Second Row - Moving Right -->
        <div class="brands-row brands-row-2">
          <div class="brands-container">
            <div class="brand-item">
              <img src="/asset/logos/44.png" alt="Alzeer Holding" class="brand-logo" />
                </div>
            <div class="brand-item">
              <img src="/asset/logos/44.png" alt="Alzeer Holding" class="brand-logo" />
              </div>
            <div class="brand-item">
              <img src="/asset/logos/44.png" alt="Alzeer Holding" class="brand-logo" />
                </div>
            <div class="brand-item">
              <img src="/asset/logos/44.png" alt="Alzeer Holding" class="brand-logo" />
              </div>
            <div class="brand-item">
              <img src="/asset/logos/44.png" alt="Alzeer Holding" class="brand-logo" />
              </div>
              <!-- Duplicate for seamless loop -->
            <div class="brand-item">
              <img src="/asset/logos/44.png" alt="Alzeer Holding" class="brand-logo" />
                </div>
            <div class="brand-item">
              <img src="/asset/logos/44.png" alt="Alzeer Holding" class="brand-logo" />
              </div>
            <div class="brand-item">
              <img src="/asset/logos/44.png" alt="Alzeer Holding" class="brand-logo" />
                </div>
            <div class="brand-item">
              <img src="/asset/logos/44.png" alt="Alzeer Holding" class="brand-logo" />
              </div>
            <div class="brand-item">
              <img src="/asset/logos/44.png" alt="Alzeer Holding" class="brand-logo" />
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
            <h2 class="about-us-title text-center">About us</h2>
            <div class="about-us-underline"></div>
                </div>
              </div>

        <!-- Introduction Section -->
        <div class="row">
          <div class="col-12">
            <div class="introduction-content">
              <div class="introduction-logo">
                <img src="/asset/logos/44.png" alt="Alzeer Holding Logo" class="intro-logo-img" />
                </div>
              <div class="introduction-text">
                <h2 class="introduction-title">Introduction</h2>
                <div class="title-underline"></div>
                <p class="introduction-description">
                  At Fahad Nawaf Al-Zeer Holding, we redefine<br>
                  the essence of investment by turning ambition<br>
                  into tangible achievements and forging a bridge<br>
                  from today to a future enriched with value<br>
                  and meaningful impact.
                </p>
              </div>
                </div>
              </div>
                </div>

        <!-- Vision Section -->
        <div class="row mt-5">
          <div class="col-12">
            <div class="vision-content">
              <h2 class="vision-title">Vision</h2>
              <div class="vision-underline"></div>
              <p class="vision-description">
                To be a guiding light in investment, inspiring generations<br>
                and creating opportunities that shape a brighter,<br>
                sustainable, and prosperous future for all.
              </p>
              </div>
                </div>
              </div>

        <!-- Mission Section -->
        <div class="row mt-5">
          <div class="col-12">
            <div class="mission-content">
              <h2 class="mission-title">Mission</h2>
              <div class="mission-underline"></div>
              <p class="mission-description">
                We nurture human potential and spark innovation,<br>
                building a values-driven ecosystem that delivers<br>
                meaningful achievements, strengthens our economy,<br>
                and enriches the lives of our communities.
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
            <h2 class="contact-title text-center">Contact us</h2>
            <div class="contact-underline"></div>
                </div>
              </div>

        <!-- Contact Content -->
        <div class="row">
          <!-- Contact Information -->
          <div class="col-lg-6 mb-5">
            <div class="contact-info">
              <h3 class="contact-subtitle">Get in Touch</h3>
              <p class="contact-description">
                We're here to help and answer any question you might have.
                We look forward to hearing from you.
              </p>

              <div class="contact-details">
                <div class="contact-item">
                  <div class="contact-icon">
                    <img src="/asset/icons/pin.png" alt="Address" class="custom-icon" />
                </div>
                  <div class="contact-text">
                    <h4>Address</h4>
                    <p>Riyadh, Kingdom of Saudi Arabia</p>
              </div>
                </div>

                <div class="contact-item">
                  <div class="contact-icon">
                    <img src="/asset/icons/telephone.png" alt="Phone" class="custom-icon" />
              </div>
                  <div class="contact-text">
                    <h4>Phone</h4>
                    <p>+966 XX XXX XXXX</p>
                </div>
              </div>

                <div class="contact-item">
                  <div class="contact-icon">
                    <img src="/asset/icons/mail.png" alt="Email" class="custom-icon" />
                </div>
                  <div class="contact-text">
                    <h4>Email</h4>
                    <p>info@alzeerholding.com</p>
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
              <h3 class="contact-subtitle">Send us a Message</h3>
              <form class="contact-form">
                <div class="form-group">
                  <input type="text" class="form-control" placeholder="Your Name" required>
                </div>
                <div class="form-group">
                  <input type="email" class="form-control" placeholder="Your Email" required>
              </div>
                <div class="form-group">
                  <input type="text" class="form-control" placeholder="Subject" required>
              </div>
                <div class="form-group">
                  <textarea class="form-control" rows="5" placeholder="Your Message" required></textarea>
            </div>
                <button type="submit" class="contact-btn">
                  <span>Send Message</span>
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
                <img src="/asset/logos/44.png" alt="Alzeer Holding Logo" class="footer-logo-img" />
              </div>
              <p class="footer-description">
                Building the future of investment through strategic partnerships,
                innovative solutions, and sustainable growth across diverse sectors.
              </p>
              <div class="social-links">
                <a href="#" class="social-link">
                  <img src="/asset/icons/facebook.png" alt="Facebook" class="social-icon" />
                </a>
                <a href="#" class="social-link">
                  <img src="/asset/icons/twitter.png" alt="Twitter" class="social-icon" />
                </a>
                <a href="#" class="social-link">
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
                <li><a href="/about-us" class="footer-link">About Us</a></li>
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
                &copy; 2024 Alzeer Holding. All rights reserved.
              </p>
              </div>
            <div class="col-md-6">
              <div class="footer-bottom-links">
                <a href="#" class="footer-bottom-link">Privacy Policy</a>
                <a href="#" class="footer-bottom-link">Terms of Service</a>
                <a href="#" class="footer-bottom-link">Cookie Policy</a>
              </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// Language state
const currentLanguage = ref('EN')

// Available languages
const languages = [
  { code: 'EN', name: 'English' },
  { code: 'AR', name: 'العربية' }
]

// Toggle language function
const toggleLanguage = () => {
  const currentIndex = languages.findIndex(lang => lang.code === currentLanguage.value)
  const nextIndex = (currentIndex + 1) % languages.length
  currentLanguage.value = languages[nextIndex].code

  // You can add language switching logic here
  console.log('Language changed to:', currentLanguage.value)
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Righteous&display=swap');

.homepage {
  min-height: 100vh;
  background: #ffffff;
  font-family: 'Righteous', sans-serif;
}

/* Apply Righteous font to all text elements */
* {
  font-family: 'Righteous', sans-serif !important;
}

h1, h2, h3, h4, h5, h6, p, span, div, a, li, ul, ol, button, input, textarea, label {
  font-family: 'Righteous', sans-serif !important;
}

/* Navigation Styles */
.navbar {
  background-color: #000000 !important;
  padding: 1rem 0;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.logo-img {
  height: 80px;
  width: auto;
  transition: transform 0.3s ease;
  margin-left: 2rem;
}

.logo-img:hover {
  transform: scale(1.05);
}

.navbar-nav .nav-link {
  font-weight: 500;
  font-size: 16px;
  transition: color 0.3s ease;
}

.navbar-nav .nav-link:hover {
  color: #ffd700 !important;
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
  font-weight: 600;
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
  text-align: center;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  animation: fadeInUp 1s ease-out;
}

.hero-subtitle {
  font-size: 1.5rem;
  font-weight: 300;
  margin-bottom: 2rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
  animation: fadeInUp 1s ease-out 0.3s both;
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
  font-weight: 700;
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
  width: 100px;
  height: 100px;
  object-fit: contain;
  transition: transform 0.3s ease;
}

.brand-item:hover .brand-logo {
  transform: scale(1.1);
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
    padding: 0.75rem 0;
  }

  .logo-img {
    height: 65px;
  }

  .hero-video-section {
    height: 100vh;
  }

  .hero-title {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  .hero-subtitle {
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
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
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
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
  font-weight: 600;
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
  font-weight: 700;
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
  font-weight: 700;
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
  font-weight: 700;
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
  font-weight: 700;
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
  font-weight: 700;
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
  font-weight: 700;
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
  font-weight: 600;
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
  font-weight: 700;
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
