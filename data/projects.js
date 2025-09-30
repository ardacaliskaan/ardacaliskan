export const projects = [
  {
    id: 1,
    title: "WordCraft iOS",
    slug: "wordcraft-ios",
    description: "Profesyonel iOS kelime oyunu. Monetization özellikleri ve modern Swift mimarisi ile geliştirilmiş native iOS uygulaması.",
    longDescription: "SwiftUI ve modern iOS development pattern'leri kullanılarak geliştirilmiş kelime oyunu. In-app purchases, reklam entegrasyonu ve kullanıcı deneyimine odaklı tasarım içerir.",
    image: "/images/projects/wordcraft.jpg",
    technologies: ["Swift", "SwiftUI", "iOS", "In-App Purchases", "AdMob"],
    category: "Mobile Development",
    featured: true,
    year: "2024",
    githubUrl: "https://github.com/ardacaliskaan/WordCraft-iOS",
    stars: 1,
    tags: ["iOS", "Game Development", "Swift", "Monetization"],
    highlights: [
      "Native iOS development",
      "In-app purchase integration",
      "Modern SwiftUI architecture",
      "Ad monetization strategy"
    ],
    status: "active"
  },
  {
    id: 2,
    title: "PostgreSQL Console CRUD",
    slug: "postgresql-console-crud",
    description: "C# Console uygulaması. PostgreSQL veritabanı ile Entity Framework Core ve Code First yaklaşımı kullanarak geliştirilmiş CRUD sistemi.",
    longDescription: "Entity Framework Core kullanarak modern veritabanı yönetimi. Code First migration yapısı ile veritabanı şeması yönetimi ve interaktif console menüsü içerir.",
    image: "/images/projects/postgresql-crud.jpg",
    technologies: ["C#", ".NET", "PostgreSQL", "Entity Framework Core", "Code First"],
    category: "Backend Development",
    featured: true,
    year: "2024",
    githubUrl: "https://github.com/ardacaliskaan/PostgreSQL-Console-CRUD",
    tags: ["C#", "Database", "Entity Framework", "CRUD"],
    highlights: [
      "Entity Framework Core integration",
      "Code First migration approach",
      "Full CRUD operations",
      "Interactive console menu"
    ],
    status: "completed"
  },
  {
    id: 3,
    title: "City Hotel Garage System",
    slug: "city-hotel-garage-system",
    description: "Otel garaj yönetim sistemi. C# ile geliştirilmiş kapsamlı araç park ve yönetim uygulaması.",
    longDescription: "Otel ve garaj işletmeleri için geliştirilmiş profesyonel park yönetim sistemi. Araç giriş-çıkış takibi, ücret hesaplama ve raporlama özellikleri içerir.",
    image: "/images/projects/hotel-garage.jpg",
    technologies: ["C#", ".NET", "Windows Forms", "SQL Server"],
    category: "Desktop Application",
    featured: true,
    year: "2024",
    githubUrl: "https://github.com/ardacaliskaan/CityHotelGarageSystem",
    tags: ["C#", "Desktop App", "Management System"],
    highlights: [
      "Vehicle tracking system",
      "Automated billing",
      "User management",
      "Report generation"
    ],
    status: "completed"
  },
  {
    id: 4,
    title: "Portfolio Website",
    slug: "portfolio-website",
    description: "Next.js 15 ile geliştirilmiş modern portfolyo sitesi. Server components, animasyonlar ve responsive tasarım.",
    longDescription: "Kişisel portfolyo ve blog sitesi. Next.js 15, React 19 ve Tailwind CSS 4 kullanılarak geliştirilmiş modern web uygulaması.",
    image: "/images/projects/portfolio.jpg",
    technologies: ["Next.js", "React", "Tailwind CSS", "JavaScript"],
    category: "Web Development",
    featured: true,
    year: "2025",
    demoUrl: "https://ardacaliskan.com",
    githubUrl: "https://github.com/ardacaliskaan/ardacaliskan",
    tags: ["Next.js", "Portfolio", "Modern Web"],
    highlights: [
      "Next.js 15 App Router",
      "Scroll animations",
      "SEO optimized",
      "Responsive design"
    ],
    status: "active"
  }
];

export const categories = [
  "Web Development",
  "Mobile Development", 
  "Backend Development",
  "Desktop Application"
];

export const technologies = [
  "Swift",
  "C#",
  ".NET",
  "Next.js",
  "React",
  "PostgreSQL",
  "Entity Framework Core",
  "Tailwind CSS",
  "SwiftUI",
  "SQL Server"
];

export const getFeaturedProjects = () => {
  return projects.filter(project => project.featured);
};

export const getProjectBySlug = (slug) => {
  return projects.find(project => project.slug === slug);
};

export const getProjectsByCategory = (category) => {
  return projects.filter(project => project.category === category);
};

export const getProjectsByTechnology = (tech) => {
  return projects.filter(project => 
    project.technologies.some(t => t.toLowerCase().includes(tech.toLowerCase()))
  );
};

export const getActiveProjects = () => {
  return projects.filter(project => project.status === "active");
};

export const getCompletedProjects = () => {
  return projects.filter(project => project.status === "completed");
};