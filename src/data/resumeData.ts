export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  keyFeatures: string[];
  githubUrl: string;
  demoUrl?: string;
  hasLiveDemo: boolean;
  image: string;
  placeholderText?: string;
  architectureDetails: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  duration: string;
  type: string;
  summary: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  curriculum: string;
  year: string;
  skillsLearned: string[];
}

export interface SkillCategory {
  category: string;
  skills: {
    name: string;
    level: string; // e.g. "Proficient", "Advanced", "Working Knowledge"
    percentage: number;
  }[];
}

export const RESUME_DATA = {
  personal: {
    fullName: "Rupesh Rajendra Kamble",
    firstName: "Rupesh",
    title: "Java & Python Developer",
    tagline: "Building scalable backend services, robust desktop applications, and responsive web experiences with modern architecture.",
    shortBio: "Detail-oriented software developer with a strong foundation in Java and Python programming, relational database systems, and object-oriented architecture. Passionate about engineering high-efficiency applications, solving complex algorithms, and building clean, user-centric software.",
    email: "rupesh.kamble@example.com",
    contactEmail: "rupeshkamble8181@gmail.com",
    phone: "+91 90000 12345",
    location: "Pune, Maharashtra, India",
    dateOfBirth: "15 August 2002",
    linkedIn: "https://linkedin.com/in/rupesh-kamble-demo",
    github: "https://github.com/rupesh-demo",
    portfolioUrl: "https://rupesh-portfolio.example.com",
    status: "Available for Placement & Full-Time Software Engineering Roles",
    avatar: "/src/assets/images/avatar_developer_portrait_1793382137353.jpg",
    originalResumeDoc: "/assets/aistudio/image_b14b938a.png",
    downloadResumePdf: "/resume.pdf",
  },
  metrics: [
    { label: "Academic CGPA", value: "8.2 / 10", description: "BCA Demo Institute of Technology" },
    { label: "Core Projects", value: "3 Built", description: "Java Swing, Python & Modern Web" },
    { label: "Industry Experience", value: "6 Months", description: "Microservice Intern @ TechSprint" },
    { label: "Certifications", value: "3 Completed", description: "Oracle, Cisco & freeCodeCamp" },
  ],
  skillCategories: [
    {
      category: "Programming & Core",
      skills: [
        { name: "Java", level: "Proficient", percentage: 90 },
        { name: "Python", level: "Proficient", percentage: 88 },
        { name: "JavaScript", level: "Working Knowledge", percentage: 78 },
        { name: "Object-Oriented Programming (OOP)", level: "Advanced", percentage: 92 },
        { name: "Data Structures & Algorithms", level: "Proficient", percentage: 82 },
        { name: "Problem Solving", level: "Proficient", percentage: 85 },
      ],
    },
    {
      category: "Database & Backend",
      skills: [
        { name: "MySQL", level: "Proficient", percentage: 88 },
        { name: "SQLite", level: "Proficient", percentage: 84 },
        { name: "JDBC (Java Database Connectivity)", level: "Advanced", percentage: 86 },
        { name: "SQL Transactions & Indexing", level: "Proficient", percentage: 85 },
        { name: "RESTful Microservices", level: "Working Knowledge", percentage: 80 },
        { name: "Database Migration Scripts", level: "Working Knowledge", percentage: 78 },
      ],
    },
    {
      category: "Frontend & Web",
      skills: [
        { name: "HTML5", level: "Proficient", percentage: 90 },
        { name: "CSS3 & Modern Flexbox", level: "Proficient", percentage: 88 },
        { name: "Responsive UI Architecture", level: "Proficient", percentage: 85 },
        { name: "Interactive DOM Scripting", level: "Working Knowledge", percentage: 80 },
        { name: "Web Architecture Principles", level: "Academic", percentage: 82 },
      ],
    },
    {
      category: "GUI, Libraries & Tools",
      skills: [
        { name: "Java Swing", level: "Proficient", percentage: 86 },
        { name: "Python Tkinter", level: "Proficient", percentage: 84 },
        { name: "CSV Export & Data Parsing", level: "Proficient", percentage: 88 },
        { name: "Git & Version Control", level: "Working Knowledge", percentage: 80 },
      ],
    },
  ] as SkillCategory[],
  spokenLanguages: [
    { name: "English", proficiency: "Professional Working Proficiency" },
    { name: "Hindi", proficiency: "Native / Bilingual" },
    { name: "Marathi", proficiency: "Native / Mother Tongue" },
  ],
  hobbies: [
    { name: "Coding", detail: "Exploring algorithm challenges and open source toolkits" },
    { name: "Reading", detail: "Technical architecture books and technology trends" },
    { name: "Learning New Technologies", detail: "Continuously expanding backend and web horizons" },
  ],
  projects: [
    {
      id: "student-management",
      title: "Student Management System",
      subtitle: "Desktop CRUD Management Application",
      description: "Developed a comprehensive student record management desktop application using Java and MySQL. Implemented full CRUD operations, automated roll number indexing, and dynamic grade calculation with robust SQL transactions.",
      technologies: ["Java", "MySQL", "JDBC", "Java Swing", "SQL Transactions"],
      keyFeatures: [
        "Full CRUD lifecycle operations for student records with input validation",
        "Automated roll number sequential indexing and conflict prevention",
        "Dynamic grade and CGPA calculation engine based on course credit rubrics",
        "Transactional SQL safety preventing partial updates during batch record writes",
      ],
      githubUrl: "https://github.com/rupesh-demo/student-management",
      hasLiveDemo: false,
      placeholderText: "[Add live demo / video walkthrough link]",
      image: "/src/assets/images/project_student_management_1793382138060.jpg",
      architectureDetails: [
        "Three-tier architecture separating Java Swing view models from JDBC persistence layers",
        "PreparedStatements to safeguard against SQL injection and optimize query execution plans",
        "Database connection pooling simulation for desktop client efficiency",
      ],
    },
    {
      id: "personal-portfolio",
      title: "Personal Portfolio Website",
      subtitle: "Modern Responsive Developer Showcase",
      description: "Created a responsive developer portfolio showcasing projects, technical certifications, and interactive contact forms. Engineered smooth navigation and mobile-friendly layouts adhering to modern web standards.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Flexbox", "Responsive Design"],
      keyFeatures: [
        "Fluid responsive layout engineered with CSS3 Flexbox and media queries",
        "Interactive client-side contact validation and feedback handling",
        "Sticky navigation bar with smooth sectional scrolling and accessibility anchors",
        "Optimized web asset delivery adhering to Lighthouse web performance targets",
      ],
      githubUrl: "https://github.com/rupesh-demo",
      demoUrl: "https://rupesh-portfolio.example.com",
      hasLiveDemo: true,
      image: "/src/assets/images/project_portfolio_web_1793382136666.jpg",
      architectureDetails: [
        "Semantic HTML5 landmarks (header, nav, main, section, footer) for screen readers",
        "CSS variables for consistent design tokens and fluid type hierarchy",
        "Mobile-first breakpoint system supporting smartphone, tablet, and desktop viewports",
      ],
    },
    {
      id: "python-expense-tracker",
      title: "Python Expense Tracker",
      subtitle: "Personal Budgeting & Data Visualization Desktop Utility",
      description: "Developed a desktop expense tracking utility with data visualization and monthly expenditure breakdown. Built automated category summaries and CSV ledger exports for streamlined personal budgeting.",
      technologies: ["Python", "SQLite", "Tkinter", "CSV Export", "Data Analysis"],
      keyFeatures: [
        "Interactive desktop GUI built with Python Tkinter supporting dynamic inputs",
        "Local SQLite database schema managing monthly ledgers, categories, and timestamps",
        "Automated spending categorization and breakdown summaries",
        "One-click CSV ledger export allowing external spreadsheet analysis and backup",
      ],
      githubUrl: "https://github.com/rupesh-demo/python-expense-tracker",
      hasLiveDemo: false,
      placeholderText: "[Add live demo / executable release link]",
      image: "/src/assets/images/project_expense_tracker_1793382138406.jpg",
      architectureDetails: [
        "Lightweight embedded SQLite engine requiring zero external server configuration",
        "Custom aggregate queries for real-time monthly budget vs expenditure deltas",
        "Exception handling for malformed numeric inputs and corrupt file streams",
      ],
    },
  ] as Project[],
  experience: [
    {
      id: "techsprint-intern",
      role: "Software Development Intern",
      company: "TechSprint Innovations Lab",
      location: "Pune, India",
      duration: "Jan 2024 – Jun 2024",
      type: "Internship",
      summary: "Assisted senior software engineers in designing RESTful microservice components using Java and MySQL. Automated database migration scripts and resolved client-reported bug tickets, gaining hands-on production teamwork experience.",
      responsibilities: [
        "Collaborated with backend engineers to build and test RESTful service endpoints in Java",
        "Authored automated SQL database migration scripts to transition schema versions safely",
        "Triaged and resolved production bug tickets logged by client QA teams",
        "Participated in sprint standups, code reviews, and Git version control workflows",
      ],
      achievements: [
        "Successfully delivered 5+ microservice endpoint handlers on schedule",
        "Automated recurring schema migration checks, reducing manual developer verification time",
        "Earned positive mentorship ratings for clean Java code structure and reliable SQL queries",
      ],
      technologies: ["Java", "MySQL", "RESTful APIs", "SQL Scripting", "Git"],
    },
    {
      id: "academic-training",
      role: "Entry-Level / Fresher Developer (Ready for Placement)",
      company: "Academic & Project Training",
      location: "Pune, India",
      duration: "2021 – Present",
      type: "Full-Time Placement Candidate",
      summary: "Completed rigorous coursework and self-directed capstone software engineering sprints. Active participant in coding challenges, hackathons, and technical workshops.",
      responsibilities: [
        "Completed comprehensive computer applications curriculum focusing on OOP and databases",
        "Led project teams in developing capstone desktop and web application prototypes",
        "Solved algorithm challenges focusing on arrays, linked lists, sorting, and database queries",
        "Attended technical workshops on emerging trends in cloud services and web architecture",
      ],
      achievements: [
        "Achieved 8.2 / 10 CGPA across degree coursework",
        "Completed 3 end-to-end applications demonstrating full CRUD and relational databases",
        "Earned three accredited industry certifications in Java, Python, and Web Development",
      ],
      technologies: ["Java", "Python", "MySQL", "JavaScript", "OOP", "Data Structures"],
    },
  ] as ExperienceItem[],
  education: {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Demo Institute of Technology, Pune",
    location: "Pune, Maharashtra, India",
    year: "Class of 2025",
    cgpa: "8.2 / 10 CGPA",
    coursework: [
      "Data Structures & Algorithms",
      "Database Systems (RDBMS & SQL)",
      "Java Enterprise Programming",
      "Web Architecture & Design",
      "Object-Oriented Analysis",
      "Operating Systems & Networking",
    ],
  },
  certifications: [
    {
      id: "cert-java",
      title: "Java Programming Fundamentals",
      issuer: "Oracle Certified Associate Curriculum (Demo)",
      curriculum: "Oracle Academy / OCA Track",
      year: "2024",
      skillsLearned: ["Java Syntax & Semantics", "OOP Inheritance & Polymorphism", "Collections Framework", "Exception Handling"],
    },
    {
      id: "cert-python",
      title: "Python Programming Essentials",
      issuer: "Cisco Networking Academy (Demo)",
      curriculum: "PCAP / Cisco Academy Track",
      year: "2023",
      skillsLearned: ["Python Data Structures", "File I/O & CSV Handling", "Modular Package Design", "Functional Scripting"],
    },
    {
      id: "cert-web",
      title: "Web Development Basics",
      issuer: "freeCodeCamp Certified Curriculum (Demo)",
      curriculum: "Responsive Web Design Certification",
      year: "2023",
      skillsLearned: ["Semantic HTML5", "CSS3 Flexbox & Grid", "Responsive Design Patterns", "Web Accessibility Standards"],
    },
  ] as Certification[],
};
