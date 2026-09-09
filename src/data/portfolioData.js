import rahaWeb from "../assets/Raha-web.png";
import Rahalanding from "../assets/raha-landing.png"
import AutoEye from "../assets/Auot-eye.png"
import Naket from "../assets/Naket.png"
import ecom from "../assets/Ecom-web.png"
import student from "../assets/Student-management.png"


export const personalInfo = {
  name: "Umar Ahmed",
  role: "MERN-Stack Developer",
  experienceYears: "1",
  tagline: "Crafting High-Performance Web Applications & Scalable MERN STACK Solutions.",

  shortBio: "Passionate MERN Stack Developer specializing in building modern web applications with React, Next.js, and scalable backends using Express.js, Node.js, PostgreSQL, and Firebase.",

  aboutText: [
    "I am a passionate MERN Stack Developer focused on building modern, responsive, and user-friendly web applications. I specialize in creating engaging frontend experiences with React.js, Next.js, HTML5, CSS3, Tailwind CSS, and GSAP.",

    "I enjoy transforming ideas into functional digital products by combining clean UI design with reliable backend architecture. My backend development experience includes building REST APIs with Express.js and working with PostgreSQL and Firebase for structured, scalable, and reliable data management.",

    "From interactive frontend interfaces to robust backend systems, I focus on writing clean, maintainable code and delivering fast, scalable, and practical web solutions. I am continuously expanding my expertise in modern web technologies, cloud applications, and AI-powered solutions."

  ],
  location: "Orangi Town Karachi Pakistan",
  email: "umarahmedansari0@gmail.com",
  phone: "+92 318-2593427",
  availability: "MERN-Stack & 3D Web Creative",
  socials: {
    github: "https://github.com/umarahmed707?tab=repositories",
    linkedin: "https://www.linkedin.com/in/umarahmedansari/",

  },
  stats: [
    { label: "Projects Completed", value: "48+", icon: "FolderCheck" },
    { label: "Years Experience", value: "5+", icon: "Briefcase" },
    { label: "Satisfied Clients", value: "35+", icon: "Smile" },
    { label: "Code Commits", value: "2.4k+", icon: "GitCommit" },
  ]
};

export const skillsData = [
  // Frontend
  {
    name: "React.js",
    category: "Frontend",
    level: 95,
    experience: "6+ years",
    description: "Custom Hooks, Context API, Suspense, Concurrent Mode, Virtual DOM Optimization",
    badge: "Core Expertise",
    color: "#61DAFB",
    popular: true
  },
  {
    name: "Next.js",
    category: "Frontend",
    level: 92,
    experience: "6+",
    description: "App Router, Server Components (RSC), SSR, SSG, Dynamic Routes, Edge Middleware",
    badge: "Core Expertise",
    color: "#000000",
    popular: true
  },
  {
    name: "JavaScript (ES6+)",
    category: "Frontend",
    level: 96,
    experience: "1 years",
    description: "Modern Async/Await, Web APIs, Event Loop, Closures, Functional Programming",
    badge: "Advanced",
    color: "#F7DF1E",
    popular: true
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    level: 95,
    experience: "6+ years",
    description: "Custom Design Systems, Responsive Grids, JIT Engine, Dark Mode, Micro-interactions",
    badge: "Mastery",
    color: "#38B2AC",
    popular: true
  },
  {
    name: "GSAP",
    category: "Frontend",
    level: 88,
    experience: "6+ month",
    description: "ScrollTrigger, Timeline orchestrations, SVG Morphing, SplitText & Physics curves",
    badge: "Animation",
    color: "#88CE02",
    popular: true
  },
  // {
  //   name: "Three.js / WebGL",
  //   category: "Frontend",
  //   level: 86,
  //   experience: "6 month",
  //   description: "3D Geometries, Custom Shaders, Particle Systems, Orbit Controls, Lighting & PBR",
  //   badge: "3D Graphics",
  //   color: "#00F2FE",
  //   popular: true
  // },
  {
    name: "HTML5 & Semantic Web",
    category: "Frontend",
    level: 98,
    experience: "1.5 years",
    description: "WCAG Accessibility (a11y), SEO Optimization, Web Components, Canvas 2D",
    badge: "Foundation",
    color: "#E34F26",
    popular: false
  },
  {
    name: "CSS3 & Modern Layouts",
    category: "Frontend",
    level: 95,
    experience: "1.5 years",
    description: "CSS Grid, Flexbox, Subgrid, View Transitions, Keyframe Animations, Glassmorphism",
    badge: "Foundation",
    color: "#1572B6",
    popular: false
  },

  // Backend
  {
    name: "Express.js",
    category: "Backend",
    level: 90,
    experience: "Beginner",
    description: "RESTful architecture, JWT & OAuth authentication, Middleware pipelines, Rate limiting",
    badge: "Backend",
    color: "#90EE90",
    popular: true
  },
  // {
  //   name: "PHP",
  //   category: "Backend",
  //   level: 85,
  //   experience: "4+ years",
  //   description: "Modern PHP 8+, OOP, MVC architecture, Composer, Blade templating, Secure processing",
  //   badge: "Backend",
  //   color: "#777BB4",
  //   popular: true
  // },
  {
    name: "REST API Design",
    category: "Backend",
    level: 94,
    experience: "Beginner",
    description: "OpenAPI/Swagger documentation, Webhooks, Caching headers, Versioning & CORS",
    badge: "Architecture",
    color: "#FF5722",
    popular: true
  },

  // Database & Cloud
  {
    name: "PostgreSQL",
    category: "Database",
    level: 90,
    experience: "Beginner",
    description: "Complex Joins, Indexing, Triggers, JSONB storage, Stored Procedures, Prisma / TypeORM",
    badge: "Relational DB",
    color: "#336791",
    popular: true
  },
  // {
  //   name: "SQL",
  //   category: "Database",
  //   level: 92,
  //   experience: "5+ years",
  //   description: "Relational Modeling, Query optimization, ACID Transactions, Views, Data integrity",
  //   badge: "Database",
  //   color: "#00758F",
  //   popular: true
  // },
  {
    name: "Firebase",
    category: "Database",
    level: 88,
    experience: "Entry Level",
    description: "Cloud Firestore, Firebase Authentication, Cloud Functions, Realtime DB, Storage",
    badge: "BaaS & Cloud",
    color: "#FFCA28",
    popular: true
  }
];

export const servicesData = [
  {
    id: "MERN Stack",
    icon: "Code2",
    title: "MERN-Stack Web Development",
    shortDesc: "End-to-end modern web applications engineered with React, Next.js, Express,and PostgreSQL.",
    detailedDesc: "From conceptualization to production deployment, I architect robust MERN-Stack applications with clean modular codebases, high test coverage, seamless state management, and blazing load times.",
    highlights: ["React.js & Next.js", "Express.js APIs", "PostgreSQL & Firebase DBs", "Role-based Auth & Security"]
  },
  {
    id: "GSAP-animation",
    icon: "Sparkles",
    title: "GSAP Animation & Interactive UI",
    shortDesc: "Smooth, engaging animations and interactive web experiences powered by GSAP.",
    detailedDesc: "I create modern and responsive web animations using GSAP to make interfaces more engaging and dynamic. From page-load animations and scroll effects to hover interactions and timeline-based transitions, I focus on smooth motion while maintaining a clean and user-friendly experience.",
    highlights: [
      "ScrollTrigger Animations",
      "Timeline & Sequence Animations",
      "Hover & Mouse Interactions",
      "Page Load & Entrance Animations",
      "Smooth UI Transitions"
    ]
  },
  {
    id: "landing-pages",
    icon: "Sparkles",
    title: "Modern Landing Pages",
    shortDesc: "Modern, responsive landing pages enhanced with GSAP animations and interactive UI.",
    detailedDesc: "I build clean, responsive, and engaging landing pages using React.js, Next.js, Tailwind CSS, and GSAP. I focus on attractive layouts, smooth scroll animations, interactive elements, responsive design, and fast user experiences.",
    highlights: [
      "GSAP ScrollTrigger Animations",
      "Responsive Tailwind CSS Design",
      "Interactive UI & Micro-Interactions",
      "React.js & Next.js Development",
      "Performance-Focused Design"
    ]
  },
  {
    id: "ecommerce",
    icon: "ShoppingCart",
    title: "E-Commerce Web Applications",
    shortDesc: "Modern and responsive e-commerce platforms with dynamic products, shopping carts, and smooth user experiences.",
    detailedDesc: "I build functional e-commerce web applications with React.js and Next.js, featuring product listings, dynamic shopping carts, search and filtering, responsive layouts, and backend integration using REST APIs, PostgreSQL, and Firebase.",
    highlights: [
      "Dynamic Product Listings",
      "Shopping Cart & Product Management",
      "Search & Filtering",
      "REST API Integration",
      "PostgreSQL & Firebase Integration"
    ]
  },
  {
    id: "dashboards",
    icon: "LayoutDashboard",
    title: "Interactive Admin Dashboards",
    shortDesc: "Modern and responsive dashboards with dynamic data, charts, KPIs, and clean user interfaces.",
    detailedDesc: "I build interactive admin dashboards that present complex data in a clear and user-friendly way. Using React.js, Next.js, Tailwind CSS, REST APIs, PostgreSQL, and Firebase, I create responsive interfaces with dynamic data, reusable components, charts, tables, and filtering features.",
    highlights: [
      "Dynamic Data & API Integration",
      "Interactive Charts & KPIs",
      "Responsive Dashboard UI",
      "Search, Filtering & Data Tables",
      "PostgreSQL & Firebase Integration"
    ]
  },
  {
    id: "api-backend",
    icon: "Database",
    title: "API Integration & Database Management",
    shortDesc: "REST API integration, PostgreSQL databases, and Firebase-powered data management for modern web applications.",
    detailedDesc: "I build and integrate REST APIs with Express.js and Node.js and work with PostgreSQL and Firebase for structured and reliable data management. I focus on CRUD operations, API integration, database connectivity, authentication, and efficient data handling.",
    highlights: [
      "REST API Development & Integration",
      "Express.js & Node.js",
      "PostgreSQL & SQL Database Management",
      "Firebase & Firestore",
      "CRUD Operations & Data Management"
    ]
  }
];

export const projectsData = [
  {
    id: "Raha-Landing",
    title: "Raha Financial - Modern FinTech Landing Page",
    category: "Landing Pages",
    subCategory: "React js",
    featured: true,
    tagline: "Modern FinTech landing page with a premium interface, smooth interactions & responsive design",
    image: Rahalanding,
    demoUrl: "https://raha-landing.vercel.app/",
    githubUrl: "https://github.com/umarahmed707/Raha_landing",
    techStack: ["React.js", "Javascripti", "Tailwind CSS", "Lucide React"],
    overview: "A modern and responsive FinTech landing page designed for Raha Financial. The website combines a clean financial aesthetic with engaging sections, smooth interactions, responsive layouts, and a professional user experience across all screen sizes.",
    features: [
      "Modern FinTech-focused hero section with clear call-to-action",

      "Responsive landing page layout optimized for mobile, tablet and desktop",
      "Reusable React components for consistent and maintainable UI",
      "Interactive sections with smooth hover effects and transitions",
      "Modern financial service sections with clear visual hierarchy",
      "Clean navigation and professional footer designed for a complete landing page experience",
    ],
    architecture: {
      frontend: "React.js, JavaScript, Tailwind CSS",

      components: "Reusable and component-based React architecture",
      icons: "Lucide React",
      design: "Responsive and modern FinTech UI design"
    }
  },
  {
    id: "Raha_Financial",
    title: "Raha Financial - Modern Financial Website",
    category: "FinTech",
    subCategory: "Frontend",
    featured: true,
    tagline: "Modern and responsive financial website with a premium interface, engaging visuals, and seamless user experience.",
    image: rahaWeb,
    demoUrl: "https://raha-web.vercel.app/",
    githubUrl: "https://github.com/umarahmed707/Raha_web",
    techStack: ["React.js", "JavaScript", "Tailwind CSS", "Responsive Design"],
    overview: "A modern frontend financial website built to deliver a professional and engaging digital experience. The website combines a clean FinTech-inspired interface, responsive layouts, reusable React components, and smooth visual interactions.",
    features: [
      "Modern and responsive financial website design",
      "Professional FinTech-inspired user interface with clean visual hierarchy",
      "Reusable React components for scalable and maintainable UI",
      "Responsive layouts optimized for desktop, tablet and mobile devices",
      "Interactive sections with smooth transitions and engaging visual elements",
      "Clean navigation and user-friendly website experience"
    ],
    architecture: {
      frontend: "React.js, JavaScript, Tailwind CSS",
      design: "Responsive and component-based UI architecture",
      interactions: "Interactive sections and smooth UI transitions",
      data: "Frontend static/mock content"
    }
  },
  {
    id: "Auto_Eye",
    title: "AutoEye - Smart Vehicle Detection Platform",
    category: "Web Applications",
    subCategory: "Frontend",
    featured: true,
    tagline: "Futuristic dark-glass control center with live KPI streaming, financial charts & server telemetry.",
    image: AutoEye,
    demoUrl: "https://example.com/demo/quantum-dashboard",
    githubUrl: "https://github.com/example/quantum-analytics-dashboard",
    techStack: ["React.js", "Next.js", "Tailwind CSS"],
    overview: "A comprehensive SaaS telemetry and revenue intelligence dashboard. Features live data charts, geographical user heatmaps, automated PDF report generation, and configurable dark/cyber themes.",
    features: [
      "Live updating metric cards with animated percent changes",
      "Interactive multi-axis revenue charts and conversion funnels",
      "SQL query analytics explorer with instant query preview",
      "Granular user permissions and team management controls",
      "Custom glassmorphic cyber dashboard aesthetics with high readability"
    ],
    architecture: {
      frontend: "React.js, Next.js, Tailwind CSS, Custom Canvas Charts",
      backend: "REST API endpoints with SQL aggregation pipelines",
      database: "PostgreSQL with read-replica queries"
    }
  },
  {
    id: "naked-turtle",
    title: "Naked Turtle - Modern Creative Website",
    category: "Web Applications",
    subCategory: "Frontend",
    featured: true,
    tagline: "Creative and responsive website with modern visuals, interactive elements & smooth user experience.",
    image: Naket,
    demoUrl: "https://naked-turtle.vercel.app/",
    githubUrl: "https://github.com/umarahmed707/NakedTurtle",
    techStack: ["HTML", "Javascripti", "CSS"],
    overview: "A modern frontend website built with HTML, CSS, and JavaScript, focusing on clean visual design, responsive layouts, interactive elements, and a smooth browsing experience across different screen sizes.",

    features: [
      "Modern and visually engaging hero section",
      "Fully responsive design for desktop, tablet and mobile devices",
      "Interactive UI elements powered by JavaScript",
      "Smooth animations, hover effects and transitions",
      "Clean navigation with structured content sections",
      "Semantic HTML and organized CSS for a maintainable frontend"
    ],
    architecture: {
      frontend: "HTML5, CSS3, JavaScript",
      structure: "Semantic HTML-based website structure",
      styling: "Custom responsive CSS",
      interactions: "Vanilla JavaScript for interactive UI elements",
      design: "Responsive and modern creative web design"
    }
  },
  {
    id: "product-management",
    title: "Product Management - React & Express.js",
    category: "Full Stack",
    subCategory: "E-Commerce",
    featured: false,
    tagline: "Product management application with React.js frontend, Express.js REST API & Axios integration..",
    image: ecom,
    demoUrl: "https://front-end-mu-ruby.vercel.app/",
    githubUrl: "https://github.com/umarahmed707/expresss.api",
    techStack: ["React.js", "JavaScript", "Express.js", "REST API", "Axios"],
    overview: "A full-stack product management application built with React.js and Express.js. The application allows users to add new products through an interactive form and retrieve product data from a backend REST API using Axios.",
    features: [
      "Add new products through a simple and user-friendly React form",

      "Fetch and display product data from the Express.js REST API",

      "Axios integration for seamless frontend-to-backend API communication",

      "Express.js REST API endpoints for product creation and retrieval",

      "Dynamic product listing based on API response data",

      "Responsive and clean interface for managing product information"
    ],
    architecture: {
      frontend: "React.js, JavaScript",

      backend: "Express.js",

      apiIntegration: "Axios",

      api: "REST API for product creation and retrieval",

      operations: "Add Product & Get Products"
    }
  },
 {
id: "Student Management System",
title: "Student Management System",
category: "Management System",
subCategory: "Full Stack",
featured: false,
tagline: "Full-stack student management system for managing student records, profiles, and academic data with a clean and responsive interface.",
image: student,
demoUrl: "https://student-management-backend-rosy-delta.vercel.app/",
githubUrl: "https://github.com/umarahmed707/Student-management-backend",
techStack: ["React.js", "Tailwind CSS", "Express.js", "PostgreSQL", "REST API"],
overview: "A full-stack Student Management System designed to efficiently manage student records through a responsive React.js interface, Express.js REST APIs, and a PostgreSQL database. The system supports creating, viewing, updating, and deleting student information with seamless frontend-backend integration.",
features: [
"Add and manage student records through a responsive interface",
"View complete student information in an organized data table",
"Update and delete existing student records",
"REST API integration between React.js frontend and Express.js backend",
"PostgreSQL database for persistent and structured student data",
"Responsive UI built with React.js and Tailwind CSS"
],
architecture: {
frontend: "React.js, Tailwind CSS, Axios",
backend: "Express.js REST API",
database: "PostgreSQL"
}
}

];

export const experienceData = [
  {
    period: "Jan 2026 - July 2026",
    role: "Frontend Engineer",
    company: "TFG SOLUTION",
    location: "Shahrah-e-Faisal",
   description: "Developed modern and responsive web interfaces using React.js, utilizing React Hooks such as useState and useEffect for state management and dynamic UI behavior. Built reusable components and responsive layouts for different screen sizes, while implementing smooth animations and interactive experiences using GSAP and CSS animations. Focused on clean code, user-friendly interfaces, and engaging frontend experiences.",
    achievements: [
    "Developed scalable and responsive React.js interfaces using reusable components and modern React Hooks for efficient state and UI management.",
"Implemented smooth, interactive animations using GSAP and CSS, enhancing user engagement and overall frontend experience.",
"Built responsive, cross-device layouts with a strong focus on performance, usability, accessibility, and consistent UI design."
    ],
    skills: ["React.js", "Next.js", "GSAP", "Tailwind CSS"]
  },
 
  
];

export const educationData = [
  {
    degree: "B.S. in Cloud Application Development and operating",
    institution: "University of Hamdard",
    year: "2026 - 2029",
    details: "Focused on Cloud Computing, Web Application Development, Software Architecture, Database Systems, APIs, and Modern Application Deployment."
  },
  {
    degree: "Modern MERN Stack Development",
    institution: "SMIT",
    year: "2026",
    details: "Comprehensive training in MongoDB, Express.js, React.js, Next.js, Node.js, PostgreSQL, Firebase, REST APIs, and modern full-stack web application development."
  }

];

// export const testimonialsData = [
//   {
//     id: 1,
//     name: "Sarah Jenkins",
//     role: "VP of Product, CloudScale AI",
//     avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
//     content: "Alex completely transformed our SaaS landing page into an interactive 3D masterpiece. Our conversion rate skyrocketed by 40% within the first month. Incredible attention to detail, performance, and clean code!",
//     rating: 5,
//     project: "Apex 3D SaaS Platform"
//   },
//   {
//     id: 2,
//     name: "Marcus Vance",
//     role: "Founder & CEO, Nova Brands",
//     avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
//     content: "The 3D e-commerce platform Alex built for us exceeded all expectations. Fast load times, slick 3D product customizer, and a rock-solid PostgreSQL backend. Highly recommended for any serious web venture.",
//     rating: 5,
//     project: "NovaStore E-Commerce"
//   },
//   {
//     id: 3,
//     name: "Elena Rostova",
//     role: "Lead Architect, DataStream Global",
//     avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
//     content: "One of the most versatile engineers I have collaborated with. Strong mastery across the entire stack—from Three.js shaders and React to Express and SQL optimization. Delivered ahead of schedule!",
//     rating: 5,
//     project: "Quantum Analytics Dashboard"
//   }
// ];
