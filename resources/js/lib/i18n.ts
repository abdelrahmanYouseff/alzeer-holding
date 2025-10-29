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
    'companies.title': 'Our Companies',
    'companies.description': 'Discover the diverse portfolio of companies under Alzeer Group Holding, each leading innovation and excellence in their respective industries.',
    'companies.ctaTitle': 'Join Our Growing Portfolio of Companies',
    'companies.ctaDescription': 'Become part of the Alzeer Group Holding family and benefit from our extensive network, resources, and expertise across multiple industries.',
    'companies.ctaButton': 'Explore Partnership',

    'about.badge': 'About Us',
    'about.title': 'Alzeer Group Holding<br/>A Story of Success & Excellence',
    'about.description': 'We are a leading investment company founded on an ambitious vision to lead the future of investment in the region. Through our diverse portfolio of companies, we contribute to building a sustainable and prosperous economy.',
    'about.missionTitle': 'Our Mission',
    'about.missionDescription': 'We strive to create sustainable value through strategic, well-considered investments in diverse sectors, focusing on innovation and performance excellence for all stakeholders.',
    'about.visionTitle': 'Our Vision',
    'about.visionDescription': 'To be the leading investment company in the region, globally recognized for our excellence in portfolio management and creating exceptional growth opportunities.',
    'about.valuesBadge': 'Our Values',
    'about.valuesTitle': 'Values That Guide Us',
    'about.valuesDescription': 'All our decisions and activities are based on a set of core values that shape our identity and guide our future vision.',
    'about.leadershipBadge': 'Leadership',
    'about.leadershipTitle': 'Excellence in Leadership',
    'about.leadershipDescription': 'We are led by a team of distinguished experts who combine deep experience with strategic vision to achieve our ambitious goals.',
    'about.leaderName': 'Fahad Nawaf Alzeer',
    'about.leaderPosition': 'CEO & Founder',
    'about.leaderBio': 'A pioneer in the investment world with over 15 years of experience in portfolio management and strategic partnerships. Fahad leads the group\'s vision towards excellence and innovation in all its investments.',
    'about.historyBadge': 'Our History',
    'about.historyTitle': 'A Journey of Growth & Excellence',
    'about.historyDescription': 'Since its establishment, the group has witnessed exceptional growth and expansion across multiple sectors, making it one of the leading investment companies in the region.',
    'about.ctaTitle': 'Join Our Journey Towards Excellence',
    'about.ctaDescription': 'Discover the diverse investment opportunities we offer and be part of a prosperous investment future.',
    'about.ctaButton': 'Explore Our Investments',
    'about.ctaSecondary': 'Contact Us',

    'contact.badge': 'Get In Touch',
    'contact.title': 'Contact<br/>Us Today',
    'contact.description': 'We\'d love to hear from you. Send us a message and we\'ll respond as soon as possible.',
    'contact.addressTitle': 'Our Address',
    'contact.addressText': 'الرياض، المملكة العربية السعودية',
    'contact.phoneTitle': 'Phone Number',
    'contact.phoneText': '+971 4 XXX XXXX',
    'contact.emailTitle': 'Email Address',
    'contact.emailText': 'info@alzeergroup.com',
    'contact.hoursTitle': 'Business Hours',
    'contact.hoursText': 'Sunday - Thursday: 9:00 AM - 6:00 PM',
    'contact.formBadge': 'Send Message',
    'contact.formTitle': 'Send Us a Message',
    'contact.formDescription': 'Fill out the form below and we\'ll get back to you within 24 hours.',
    'contact.firstName': 'First Name',
    'contact.firstNamePlaceholder': 'Enter your first name',
    'contact.lastName': 'Last Name',
    'contact.lastNamePlaceholder': 'Enter your last name',
    'contact.email': 'Email',
    'contact.emailPlaceholder': 'Enter your email address',
    'contact.phone': 'Phone',
    'contact.phonePlaceholder': 'Enter your phone number',
    'contact.company': 'Company',
    'contact.companyPlaceholder': 'Enter your company name (optional)',
    'contact.subject': 'Subject',
    'contact.subjectPlaceholder': 'Select a subject',
    'contact.subjectGeneral': 'General Inquiry',
    'contact.subjectInvestment': 'Investment Opportunity',
    'contact.subjectPartnership': 'Partnership',
    'contact.subjectCareers': 'Careers',
    'contact.subjectOther': 'Other',
    'contact.message': 'Message',
    'contact.messagePlaceholder': 'Tell us how we can help you...',
    'contact.agreeTerms': 'I agree to the terms and conditions',
    'contact.submitButton': 'Send Message',
    'contact.submitting': 'Sending...',
    'contact.mapBadge': 'Find Us',
    'contact.mapTitle': 'Our Location',
    'contact.mapDescription': 'Visit our office in Riyadh for a face-to-face meeting.',
    'contact.mapPlaceholderTitle': 'Interactive Map Coming Soon',
    'contact.mapPlaceholderText': 'We\'re working on adding an interactive map to show our exact location.',
  },
  AR: {
    'header.home': 'الرئيسية',
    'header.about': 'من نحن',
    'header.companies': 'الشركات',
    'header.portfolio': 'هويتنا',
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
    'companies.title': 'شركاتنا',
    'companies.description': 'اكتشف محفظة الشركات المتنوعة التابعة لفهد نواف الزير القابضة، حيث تقود كل شركة الابتكار والتميز في قطاعها.',
    'companies.ctaTitle': 'انضم إلى محفظتنا المتنامية من الشركات',
    'companies.ctaDescription': 'كن جزءاً من عائلة فهد نواف الزير القابضة واستفد من شبكتنا الواسعة ومواردنا وخبراتنا عبر عدة صناعات.',
    'companies.ctaButton': 'استكشف الشراكة',

    'about.badge': 'من نحن',
    'about.title': 'فهد نواف الزير القابضة<br/>قصة النجاح والتميز',
    'about.description': 'نحن شركة استثمارية رائدة تأسست على رؤية طموحة لقيادة مستقبل الاستثمار في المنطقة. من خلال محفظتنا المتنوعة من الشركات، نساهم في بناء اقتصاد مستدام ومزدهر.',
    'about.missionTitle': 'مهمتنا',
    'about.missionDescription': 'نسعى لخلق قيمة مستدامة من خلال استثمارات استراتيجية مدروسة في قطاعات متنوعة، مع التركيز على الابتكار والتميز في الأداء لصالح جميع أصحاب المصلحة.',
    'about.visionTitle': 'رؤيتنا',
    'about.visionDescription': 'أن نكون الشركة الاستثمارية الرائدة في المنطقة، معترف بها عالمياً لتميزنا في إدارة المحافظ الاستثمارية وخلق فرص نمو استثنائية.',
    'about.valuesBadge': 'قيمنا',
    'about.valuesTitle': 'القيم التي تقودنا',
    'about.valuesDescription': 'تستند جميع قراراتنا وأنشطتنا على مجموعة من القيم الأساسية التي تشكل هويتنا وتوجه رؤيتنا المستقبلية.',
    'about.leadershipBadge': 'القيادة',
    'about.leadershipTitle': 'قيادة متميزة',
    'about.leadershipDescription': 'يقودنا فريق من الخبراء المتميزين الذين يجمعون بين الخبرة العميقة والرؤية الاستراتيجية لتحقيق أهدافنا الطموحة.',
    'about.leaderName': 'فهد نواف الزير',
    'about.leaderPosition': 'الرئيس التنفيذي والمؤسس',
    'about.leaderBio': 'رائد في عالم الاستثمار مع أكثر من 15 عاماً من الخبرة في إدارة المحافظ الاستثمارية والشراكات الاستراتيجية. يقود فهد رؤية المجموعة نحو التميز والابتكار في جميع استثماراتها.',
    'about.historyBadge': 'تاريخنا',
    'about.historyTitle': 'رحلة النمو والتميز',
    'about.historyDescription': 'منذ تأسيسها، شهدت المجموعة نمواً استثنائياً وتوسعاً في قطاعات متعددة، مما جعلها واحدة من الشركات الاستثمارية الرائدة في المنطقة.',
    'about.ctaTitle': 'انضم إلى رحلتنا نحو التميز',
    'about.ctaDescription': 'اكتشف الفرص الاستثمارية المتنوعة التي نقدمها وكن جزءاً من مستقبل الاستثمار المزدهر.',
    'about.ctaButton': 'استكشف استثماراتنا',
    'about.ctaSecondary': 'تواصل معنا',

    'contact.badge': 'تواصل معنا',
    'contact.title': 'تواصل<br/>معنا اليوم',
    'contact.description': 'نحن نحب أن نسمع منك. أرسل لنا رسالة وسنرد عليك في أقرب وقت ممكن.',
    'contact.addressTitle': 'عنواننا',
    'contact.addressText': 'دبي، الإمارات العربية المتحدة',
    'contact.phoneTitle': 'رقم الهاتف',
    'contact.phoneText': '+971 4 XXX XXXX',
    'contact.emailTitle': 'البريد الإلكتروني',
    'contact.emailText': 'info@alzeergroup.com',
    'contact.hoursTitle': 'ساعات العمل',
    'contact.hoursText': 'الأحد - الخميس: 9:00 ص - 6:00 م',
    'contact.formBadge': 'إرسال رسالة',
    'contact.formTitle': 'أرسل لنا رسالة',
    'contact.formDescription': 'املأ النموذج أدناه وسنرد عليك خلال 24 ساعة.',
    'contact.firstName': 'الاسم الأول',
    'contact.firstNamePlaceholder': 'أدخل اسمك الأول',
    'contact.lastName': 'اسم العائلة',
    'contact.lastNamePlaceholder': 'أدخل اسم عائلتك',
    'contact.email': 'البريد الإلكتروني',
    'contact.emailPlaceholder': 'أدخل عنوان بريدك الإلكتروني',
    'contact.phone': 'الهاتف',
    'contact.phonePlaceholder': 'أدخل رقم هاتفك',
    'contact.company': 'الشركة',
    'contact.companyPlaceholder': 'أدخل اسم شركتك (اختياري)',
    'contact.subject': 'الموضوع',
    'contact.subjectPlaceholder': 'اختر موضوعاً',
    'contact.subjectGeneral': 'استفسار عام',
    'contact.subjectInvestment': 'فرصة استثمارية',
    'contact.subjectPartnership': 'شراكة',
    'contact.subjectCareers': 'الوظائف',
    'contact.subjectOther': 'أخرى',
    'contact.message': 'الرسالة',
    'contact.messagePlaceholder': 'أخبرنا كيف يمكننا مساعدتك...',
    'contact.agreeTerms': 'أوافق على الشروط والأحكام',
    'contact.submitButton': 'إرسال الرسالة',
    'contact.submitting': 'جاري الإرسال...',
    'contact.mapBadge': 'اعثر علينا',
    'contact.mapTitle': 'موقعنا',
    'contact.mapDescription': 'قم بزيارة مكتبنا في الرياض لمقابلة وجهاً لوجه.',
    'contact.mapPlaceholderTitle': 'خريطة تفاعلية قريباً',
    'contact.mapPlaceholderText': 'نعمل على إضافة خريطة تفاعلية لإظهار موقعنا الدقيق.',
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


