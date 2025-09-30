export const skillCategories = [
  {
    id: 1,
    title: "Frontend Development",
    icon: "Code",
    color: "from-blue-500 to-cyan-500",
    skills: [
      {
        name: "JavaScript (ES6+)",
        level: 92,
        experience: "4+ years",
        color: "#F7DF1E",
        description: "Modern JS, Async/Await, Promises, Module systems"
      },
      {
        name: "React / Next.js",
        level: 94,
        experience: "3+ years",
        color: "#61DAFB",
        description: "Hooks, Server Components, SSR/SSG, App Router"
      },
      {
        name: "HTML5 & CSS3",
        level: 95,
        experience: "5+ years",
        color: "#E34F26",
        description: "Semantic HTML, Modern CSS, Flexbox/Grid, Animations"
      },
      {
        name: "Tailwind CSS",
        level: 93,
        experience: "3+ years",
        color: "#06B6D4",
        description: "Utility-first CSS, Custom configurations, Responsive design"
      },
      {
        name: "SASS/SCSS",
        level: 88,
        experience: "3+ years",
        color: "#CC6699",
        description: "Preprocessing, Mixins, Variables, Nesting"
      }
    ]
  },
  {
    id: 2,
    title: "Backend Development",
    icon: "Server",
    color: "from-purple-500 to-pink-500",
    skills: [
      {
        name: "C# / ASP.NET",
        level: 96,
        experience: "5+ years",
        color: "#512BD4",
        description: "ASP.NET Core, MVC, Web API, Entity Framework"
      },
      {
        name: "Node.js",
        level: 85,
        experience: "2+ years",
        color: "#339933",
        description: "Express.js, REST APIs, Middleware, Authentication"
      },
      {
        name: "Entity Framework Core",
        level: 94,
        experience: "4+ years",
        color: "#512BD4",
        description: "Code First, Migrations, LINQ, Relations"
      },
      {
        name: "SQL / PostgreSQL",
        level: 90,
        experience: "4+ years",
        color: "#336791",
        description: "Complex queries, Indexing, Optimization, Procedures"
      },
      {
        name: "SQL Server",
        level: 88,
        experience: "3+ years",
        color: "#CC2927",
        description: "T-SQL, Stored Procedures, Triggers, Performance tuning"
      }
    ]
  },
  {
    id: 3,
    title: "Mobile Development",
    icon: "Smartphone",
    color: "from-green-500 to-emerald-500",
    skills: [
      {
        name: "Swift / SwiftUI",
        level: 89,
        experience: "2+ years",
        color: "#FA7343",
        description: "iOS Development, SwiftUI, UIKit, Core Data"
      },
      {
        name: "iOS Development",
        level: 87,
        experience: "2+ years",
        color: "#000000",
        description: "Native apps, In-App Purchases, Push Notifications"
      },
      {
        name: "Mobile UI/UX",
        level: 85,
        experience: "2+ years",
        color: "#FF6B6B",
        description: "Human Interface Guidelines, Responsive design"
      }
    ]
  },
  {
    id: 4,
    title: "Tools & DevOps",
    icon: "Wrench",
    color: "from-orange-500 to-red-500",
    skills: [
      {
        name: "Git / GitHub",
        level: 93,
        experience: "5+ years",
        color: "#F05032",
        description: "Version control, Branching strategies, Pull requests"
      },
      {
        name: "VS Code / Visual Studio",
        level: 95,
        experience: "5+ years",
        color: "#007ACC",
        description: "Advanced IDE usage, Extensions, Debugging"
      },
      {
        name: "Docker",
        level: 75,
        experience: "1+ years",
        color: "#2496ED",
        description: "Containerization, Docker Compose, Images"
      },
      {
        name: "Vercel / Deployment",
        level: 88,
        experience: "2+ years",
        color: "#000000",
        description: "CI/CD, Automated deployments, Hosting"
      },
      {
        name: "npm / yarn",
        level: 90,
        experience: "4+ years",
        color: "#CB3837",
        description: "Package management, Scripts, Dependencies"
      }
    ]
  },
  {
    id: 5,
    title: "Soft Skills & Other",
    icon: "Users",
    color: "from-indigo-500 to-purple-500",
    skills: [
      {
        name: "Problem Solving",
        level: 95,
        experience: "Professional",
        color: "#8B5CF6",
        description: "Analytical thinking, Debugging, Optimization"
      },
      {
        name: "UI/UX Design",
        level: 82,
        experience: "3+ years",
        color: "#EC4899",
        description: "User-centric design, Figma, Wireframing"
      },
      {
        name: "Agile / Scrum",
        level: 80,
        experience: "2+ years",
        color: "#10B981",
        description: "Sprint planning, Daily standups, Retrospectives"
      },
      {
        name: "Code Review",
        level: 88,
        experience: "3+ years",
        color: "#6366F1",
        description: "Best practices, Code quality, Mentoring"
      },
      {
        name: "Technical Writing",
        level: 85,
        experience: "3+ years",
        color: "#F59E0B",
        description: "Documentation, README files, API docs"
      }
    ]
  }
];

// Tüm skill'leri tek liste halinde
export const allSkills = skillCategories.flatMap(cat => cat.skills);

// En yüksek seviyeli skill'ler
export const topSkills = allSkills
  .sort((a, b) => b.level - a.level)
  .slice(0, 10);

// Kategoriye göre skill getir
export const getSkillsByCategory = (categoryTitle) => {
  const category = skillCategories.find(cat => cat.title === categoryTitle);
  return category ? category.skills : [];
};

// Minimum seviyeye göre filtrele
export const getSkillsByMinLevel = (minLevel) => {
  return allSkills.filter(skill => skill.level >= minLevel);
};

// İsme göre skill ara
export const findSkillByName = (name) => {
  return allSkills.find(skill => 
    skill.name.toLowerCase().includes(name.toLowerCase())
  );
};