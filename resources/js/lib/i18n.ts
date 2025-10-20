import { ref, computed } from 'vue'

export type LangCode = 'EN' | 'AR'

const defaultLang: LangCode = (typeof window !== 'undefined' && (localStorage.getItem('lang') as LangCode)) || 'AR'

export const language = ref<LangCode>(defaultLang)

export function setLanguage(code: LangCode) {
  language.value = code
  if (typeof window !== 'undefined') {
    localStorage.setItem('lang', code)
  }
  if (code === 'AR') {
    document.documentElement.dir = 'rtl'
    document.documentElement.lang = 'ar'
  } else {
    document.documentElement.dir = 'ltr'
    document.documentElement.lang = 'en'
  }
}

// Basic translation dictionary. Add keys as needed across the app.
const messages = {
  EN: {
    'header.home': 'Home',
    'header.about': 'About',
    'header.companies': 'Companies',
    'header.portfolio': 'Portfolio',
    'header.contact': 'Contact',

    'hero.badge': 'Leading the Future of Investment',
    'hero.title': 'ALZEER GROUP<br/>HOLDING',
    'hero.description': 'Pioneering excellence across diverse industries through strategic investments and innovative solutions for a sustainable future.',
    'hero.ctaPrimary': 'Explore Our Vision',
    'hero.ctaSecondary': 'Watch Story',

    'footer.quickLinks': 'Quick Links',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.legal': 'Legal',
    'footer.companyDescription': 'Leading the future of strategic investment with innovative solutions and sustainable growth across global markets.',
    'footer.copyright': '© 2024 Alzeer Group Holding. All rights reserved.',

    'companies.badge': 'Our Portfolio',
    'companies.title': 'Our Holding<br/>Companies',
    'companies.description': 'Discover the diverse portfolio of companies under Alzeer Group Holding, each leading innovation and excellence in their respective industries.',
    'companies.ctaTitle': 'Join Our Growing Portfolio of Companies',
    'companies.ctaDescription': 'Become part of the Alzeer Group Holding family and benefit from our extensive network, resources, and expertise across multiple industries.',
    'companies.ctaButton': 'Explore Partnership',
  },
  AR: {
    'header.home': 'الرئيسية',
    'header.about': 'من نحن',
    'header.companies': 'الشركات',
    'header.portfolio': 'المحفظة',
    'header.contact': 'تواصل',

    'hero.badge': 'ريادة مستقبل الاستثمار',
    'hero.title': 'فهد نواف الزير القابضة',
    'hero.description': 'ريادة في التميز عبر قطاعات متعددة من خلال استثمارات استراتيجية وحلول مبتكرة لمستقبل مستدام.',
    'hero.ctaPrimary': 'اكتشف رؤيتنا',
    'hero.ctaSecondary': 'شاهد القصة',

    'footer.quickLinks': 'روابط سريعة',
    'footer.privacy': 'سياسة الخصوصية',
    'footer.terms': 'شروط الخدمة',
    'footer.legal': 'قانوني',
    'footer.companyDescription': 'قيادة مستقبل الاستثمار الاستراتيجي بحلول مبتكرة ونمو مستدام عبر الأسواق العالمية.',
    'footer.copyright': '© 2024 فهد نواف الزير القابضة. جميع الحقوق محفوظة.',

    'companies.badge': 'محفظتنا',
    'companies.title': 'شركاتنا القابضة',
    'companies.description': 'اكتشف محفظة الشركات المتنوعة التابعة لفهد نواف الزير القابضة، حيث تقود كل شركة الابتكار والتميز في قطاعها.',
    'companies.ctaTitle': 'انضم إلى محفظتنا المتنامية من الشركات',
    'companies.ctaDescription': 'كن جزءاً من عائلة فهد نواف الزير القابضة واستفد من شبكتنا الواسعة ومواردنا وخبراتنا عبر عدة صناعات.',
    'companies.ctaButton': 'استكشف الشراكة',
  },
} as const

export function t(key: keyof typeof messages['EN']) {
  const lang = language.value
  return (messages as any)[lang][key] ?? key
}

// Ensure document direction on initial load
if (typeof window !== 'undefined') {
  setLanguage(language.value)
}

export const currentLanguage = computed(() => language.value)


