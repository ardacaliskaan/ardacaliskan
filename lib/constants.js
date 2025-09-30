// Site configuration
export const SITE_CONFIG = {
  name: "Arda Çalışkan",
  title: "Arda Çalışkan | Full-Stack Developer",
  description: "Full-stack yazılım geliştirici. Web, mobil ve backend çözümleri.",
  url: "https://ardacaliskan.com",
  author: "Arda Çalışkan",
  email: "alkanlardal@icloud.com",
  location: "Ankara, Turkey"
};

// Social media links
export const SOCIAL_LINKS = {
  github: "https://github.com/ardacaliskaan",
  linkedin: "https://www.linkedin.com/in/ardacaliskaan/",
  email: "mailto:alkanlardal@icloud.com",
  twitter: null, // Eğer varsa ekle
  instagram: null // Eğer varsa ekle
};

// Navigation menu items
export const NAV_ITEMS = [
  { name: "Ana Sayfa", href: "#hero", id: "hero" },
  { name: "Hakkımda", href: "#about", id: "about" },
  { name: "Yetenekler", href: "#skills", id: "skills" },
  { name: "Projeler", href: "#projects", id: "projects" },
  { name: "Hizmetler", href: "#services", id: "services" },
  { name: "İletişim", href: "#contact", id: "contact" }
];

// Animation durations (milliseconds)
export const ANIMATION_DURATION = {
  fast: 200,
  normal: 300,
  slow: 500,
  verySlow: 1000
};

// Animation delays for stagger effects
export const STAGGER_DELAY = {
  none: 0,
  short: 0.1,
  medium: 0.2,
  long: 0.3
};

// Breakpoints (matching Tailwind defaults)
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536
};

// Z-index layers
export const Z_INDEX = {
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  modalBackdrop: 1040,
  modal: 1050,
  popover: 1060,
  tooltip: 1070
};

// Color palette (matching your design)
export const COLORS = {
  primary: {
    light: '#818cf8',
    DEFAULT: '#6366f1',
    dark: '#4f46e5'
  },
  secondary: {
    light: '#22d3ee',
    DEFAULT: '#06b6d4',
    dark: '#0891b2'
  },
  accent: {
    light: '#34d399',
    DEFAULT: '#10b981',
    dark: '#059669'
  },
  background: {
    light: '#ffffff',
    DEFAULT: '#0a0a0a',
    dark: '#000000'
  }
};

// Gradient combinations
export const GRADIENTS = {
  primary: 'from-indigo-500 via-purple-500 to-pink-500',
  secondary: 'from-cyan-500 via-blue-500 to-indigo-500',
  accent: 'from-green-500 via-emerald-500 to-teal-500',
  warm: 'from-orange-500 via-red-500 to-pink-500',
  cool: 'from-blue-500 via-cyan-500 to-teal-500',
  sunset: 'from-orange-500 via-pink-500 to-purple-500'
};

// Common animation variants for framer-motion (if you use it later)
export const FADE_IN_UP = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export const FADE_IN_DOWN = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 }
};

export const FADE_IN_LEFT = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 }
};

export const FADE_IN_RIGHT = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0 }
};

export const SCALE_IN = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 }
};

// API endpoints (if you add backend)
export const API_ENDPOINTS = {
  contact: '/api/contact',
  newsletter: '/api/newsletter'
};

// Form validation messages
export const VALIDATION_MESSAGES = {
  required: 'Bu alan zorunludur',
  email: 'Geçerli bir e-posta adresi giriniz',
  minLength: (min) => `En az ${min} karakter olmalıdır`,
  maxLength: (max) => `En fazla ${max} karakter olabilir`,
  url: 'Geçerli bir URL giriniz'
};

// Success/Error messages
export const MESSAGES = {
  contact: {
    success: 'Mesajınız başarıyla gönderildi! En kısa sürede dönüş yapacağım.',
    error: 'Mesaj gönderilemedi. Lütfen daha sonra tekrar deneyin.',
    sending: 'Gönderiliyor...'
  },
  copy: {
    success: 'Kopyalandı!',
    error: 'Kopyalanamadı'
  }
};

// SEO Meta tags
export const SEO_DEFAULTS = {
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    siteName: SITE_CONFIG.name
  },
  twitter: {
    cardType: 'summary_large_image',
    handle: '@ardacaliskan' // Eğer Twitter varsa
  }
};

// Skills level descriptions
export const SKILL_LEVELS = {
  beginner: { min: 0, max: 40, label: 'Başlangıç' },
  intermediate: { min: 41, max: 70, label: 'Orta' },
  advanced: { min: 71, max: 90, label: 'İleri' },
  expert: { min: 91, max: 100, label: 'Uzman' }
};

// Project status options
export const PROJECT_STATUS = {
  active: { label: 'Aktif', color: 'text-green-500' },
  completed: { label: 'Tamamlandı', color: 'text-blue-500' },
  archived: { label: 'Arşivlendi', color: 'text-gray-500' },
  wip: { label: 'Devam Ediyor', color: 'text-yellow-500' }
};