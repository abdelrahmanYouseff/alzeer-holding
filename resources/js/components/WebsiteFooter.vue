<template>
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
              <li><a href="#" class="footer-link" @click="scrollToAbout">About Us</a></li>
              <li><a href="#" class="footer-link" @click="scrollToContact">Contact Us</a></li>
            </ul>
          </div>
        </div>

        <!-- Contact Info -->
        <div class="col-lg-6 col-md-6 mb-4">
          <div class="footer-section">
            <h5 class="footer-title">Contact Information</h5>
            <div class="contact-info">
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
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { usePage } from '@inertiajs/vue3'

// Get contact data from backend
const page = usePage()
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
const currentLanguage = ref('EN')

onMounted(() => {
    fetchSocialMediaData();
});

// Content translations
const content = ref({
  EN: {
    copyright: "© 2024 Alzeer Holding. All rights reserved.",
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",
    cookiePolicy: "Cookie Policy"
  },
  AR: {
    copyright: "© 2024 شركة الزير القابضة. جميع الحقوق محفوظة.",
    privacyPolicy: "سياسة الخصوصية",
    termsOfService: "شروط الخدمة",
    cookiePolicy: "سياسة ملفات تعريف الارتباط"
  }
})

// Computed property for current content
const currentContent = computed(() => content.value[currentLanguage.value as keyof typeof content.value])

// Functions for navigation
const scrollToAbout = (event: Event) => {
  event.preventDefault()
  console.log('Navigating to About Us section')

  // Try to find and scroll to about section
  const aboutSection = document.querySelector('#about-us')
  if (aboutSection) {
    aboutSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
    console.log('Scrolled to About Us section')
  } else {
    console.log('About Us section not found, navigating to main page')
    window.location.href = '/#about-us'
  }
}

const scrollToContact = (event: Event) => {
  event.preventDefault()
  console.log('Navigating to Contact section')

  // Try to find and scroll to contact section
  const contactSection = document.querySelector('#contact')
  if (contactSection) {
    contactSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
    console.log('Scrolled to Contact section')
  } else {
    console.log('Contact section not found, navigating to main page')
    window.location.href = '/#contact'
  }
}

</script>

<style scoped>
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
</style>
