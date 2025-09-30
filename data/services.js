export const services = [
  {
    id: 1,
    title: "Web Development",
    icon: "Globe",
    description: "Modern, hızlı ve SEO uyumlu web siteleri ve uygulamaları geliştiriyorum.",
    longDescription: "Next.js, React ve modern web teknolojileri kullanarak performanslı, ölçeklenebilir ve kullanıcı dostu web uygulamaları geliştiriyorum. Server-side rendering, static site generation ve progressive web apps konularında uzmanım.",
    features: [
      "Next.js & React Development",
      "Responsive & Mobile-First Design",
      "SEO Optimization",
      "Performance Optimization",
      "Progressive Web Apps (PWA)",
      "API Integration"
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "JavaScript"],
    pricing: "Proje bazlı",
    delivery: "2-8 hafta",
    color: "from-blue-500 to-cyan-500",
    gradient: "bg-gradient-to-br from-blue-500/10 to-cyan-500/10"
  },
  {
    id: 2,
    title: "Backend Development",
    icon: "Server",
    description: "Güçlü, güvenli ve ölçeklenebilir backend sistemleri ve API'ler tasarlıyorum.",
    longDescription: "C# ASP.NET Core, Entity Framework ve modern backend teknolojileri kullanarak robust API'ler ve backend sistemleri geliştiriyorum. Veritabanı tasarımı, güvenlik ve performans optimizasyonu konularında deneyimliyim.",
    features: [
      "RESTful API Development",
      "Database Design & Optimization",
      "Entity Framework Core",
      "Authentication & Authorization",
      "Microservices Architecture",
      "Third-party Integrations"
    ],
    technologies: ["C#", "ASP.NET Core", "Entity Framework", "PostgreSQL", "SQL Server"],
    pricing: "Proje bazlı",
    delivery: "3-10 hafta",
    color: "from-purple-500 to-pink-500",
    gradient: "bg-gradient-to-br from-purple-500/10 to-pink-500/10"
  },
  {
    id: 3,
    title: "Mobile Development",
    icon: "Smartphone",
    description: "iOS platformu için native mobil uygulamalar geliştiriyorum.",
    longDescription: "Swift ve SwiftUI kullanarak modern iOS uygulamaları geliştiriyorum. Kullanıcı deneyimine odaklı, performanslı ve App Store standartlarına uygun uygulamalar üretiyorum.",
    features: [
      "Native iOS Development",
      "SwiftUI & UIKit",
      "In-App Purchases",
      "Push Notifications",
      "Core Data & Local Storage",
      "App Store Deployment"
    ],
    technologies: ["Swift", "SwiftUI", "iOS SDK", "Xcode", "Core Data"],
    pricing: "Proje bazlı",
    delivery: "4-12 hafta",
    color: "from-green-500 to-emerald-500",
    gradient: "bg-gradient-to-br from-green-500/10 to-emerald-500/10"
  },
  {
    id: 4,
    title: "UI/UX Design",
    icon: "Palette",
    description: "Kullanıcı odaklı, modern ve etkileyici arayüz tasarımları oluşturuyorum.",
    longDescription: "Kullanıcı deneyimini ön planda tutan, estetik ve işlevsel tasarımlar yapıyorum. Wireframe'den prototipleştirmeye, responsive tasarımdan animasyonlara kadar tüm süreçleri yönetebiliyorum.",
    features: [
      "User Interface Design",
      "User Experience Research",
      "Wireframing & Prototyping",
      "Responsive Design",
      "Design Systems",
      "Animation & Micro-interactions"
    ],
    technologies: ["Figma", "Adobe XD", "CSS Animations", "Tailwind CSS"],
    pricing: "Proje bazlı",
    delivery: "1-4 hafta",
    color: "from-pink-500 to-rose-500",
    gradient: "bg-gradient-to-br from-pink-500/10 to-rose-500/10"
  },
  {
    id: 5,
    title: "Consulting & Code Review",
    icon: "MessageSquare",
    description: "Projeniz için teknik danışmanlık ve kod kalitesi değerlendirmesi sağlıyorum.",
    longDescription: "Mevcut projeleriniz için teknik danışmanlık, kod inceleme ve mimari önerilerde bulunuyorum. Best practices, performans optimizasyonu ve kod kalitesi konularında destek veriyorum.",
    features: [
      "Code Review & Refactoring",
      "Architecture Consulting",
      "Performance Optimization",
      "Best Practices Implementation",
      "Technical Documentation",
      "Team Mentoring"
    ],
    technologies: ["Çoklu teknoloji desteği"],
    pricing: "Saatlik",
    delivery: "Esnek",
    color: "from-orange-500 to-amber-500",
    gradient: "bg-gradient-to-br from-orange-500/10 to-amber-500/10"
  },
  {
    id: 6,
    title: "Maintenance & Support",
    icon: "Wrench",
    description: "Mevcut uygulamalarınız için bakım, güncelleme ve teknik destek hizmeti.",
    longDescription: "Canlı projelerin bakımı, hata düzeltmeleri, güvenlik güncellemeleri ve yeni özellik eklemeleri konusunda destek sağlıyorum. Projenizin sorunsuz çalışmasını garanti ediyorum.",
    features: [
      "Bug Fixes & Updates",
      "Security Patches",
      "Feature Additions",
      "Performance Monitoring",
      "Database Maintenance",
      "24/7 Support Options"
    ],
    technologies: ["Tüm modern teknolojiler"],
    pricing: "Aylık paket",
    delivery: "Sürekli",
    color: "from-indigo-500 to-purple-500",
    gradient: "bg-gradient-to-br from-indigo-500/10 to-purple-500/10"
  }
];

// Popüler servisler
export const popularServices = services.filter((_, index) => index < 3);

// Servisi ID'ye göre getir
export const getServiceById = (id) => {
  return services.find(service => service.id === id);
};

// Teknolojiye göre servisleri filtrele
export const getServicesByTechnology = (tech) => {
  return services.filter(service =>
    service.technologies.some(t => 
      t.toLowerCase().includes(tech.toLowerCase())
    )
  );
};

// İletişim bilgileri
export const contactInfo = {
  email: "alkanlardal@icloud.com",
  linkedin: "https://www.linkedin.com/in/ardacaliskaan/",
  github: "https://github.com/ardacaliskaan",
  location: "Ankara, Turkey",
  availability: "Freelance projeler için uygun",
  responseTime: "24 saat içinde"
};