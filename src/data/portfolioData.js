export const personalInfo = {
  name: "Ali Baris Demirci",
  title: "Data Analyst | BI Specialist | Data Engineer",
  location: "Berlin, Germany",
  email: "alibarisdemirci@gmail.com",
  phone: "+49 176 64913902",
  linkedin: "https://linkedin.com/in/ali-baris-demirci",
  github: "https://github.com/ali-baris-demirci",
  resumeFile: "/Ali_Baris_Demirci_Resume.pdf",
  profilePhoto: "/profile.jpg",
}

export const summary = `Data professional with 6+ years of experience delivering end-to-end BI solutions, scalable data pipelines, and executive-level dashboards across aviation, e-commerce, retail, and technology industries. Equal strength in SQL-driven analytics and business intelligence, with hands-on ETL development experience across the Microsoft Azure stack and BI platforms. Experienced in translating complex data into clear, decision-driving insights, with a track record of embedding directly with executive leadership to support real-time business decisions.`

export const highlights = [
  { label: "Years Experience", value: "6+" },
  { label: "Stakeholders Served", value: "100+" },
  { label: "Dashboards Delivered", value: "80+" },
  { label: "Global Airports (Celebi)", value: "40+" },
]

export const skills = {
  technical: [
    { category: "SQL", items: ["Oracle", "PL/SQL", "PostgreSQL", "T-SQL"] },
    { category: "Python", items: ["Pandas", "NumPy", "scikit-learn", "ML Foundations"] },
    { category: "ETL/ELT", items: ["Pipeline Design", "Optimization", "Monitoring", "Orchestration"] },
    { category: "Data Modeling", items: ["Star Schema", "Schema Optimization", "Flat-to-Star Restructuring"] },
    { category: "Data Warehousing", items: ["Implementation", "Query Optimization"] },
    { category: "Statistical Analysis", items: ["EDA", "Feature Engineering", "A/B Testing"] },
    { category: "Data Quality", items: ["Validation Rules", "Error Reduction", "Accuracy Controls"] },
  ],
  tools: [
    { category: "BI & Visualization", items: ["Power BI", "QlikView", "Qlik Sense", "Tableau", "NPrinting"] },
    { category: "Data Engineering", items: ["Azure Data Factory", "Oracle Data Integrator", "Azure SQL", "MSSQL", "SSMS"] },
    { category: "E-Commerce / PIM", items: ["Salsify", "Amazon Seller Central", "Amazon Vendor Central"] },
    { category: "ERP", items: ["Acumatica"] },
    { category: "Development", items: ["Jupyter Notebook", "GitHub", "VS Code"] },
    { category: "Productivity", items: ["Excel (Advanced)"] },
  ],
  softSkills: [
    "Cross-functional Collaboration",
    "Stakeholder Communication",
    "Executive-level Presentation",
    "Data Storytelling",
    "Requirements Gathering",
    "Mentoring",
    "Data Culture Advocacy",
  ],
  languages: [
    { language: "English", level: "Proficient" },
    { language: "Turkish", level: "Native" },
    { language: "German", level: "Intermediate" },
  ],
}

export const experience = {
  main: [
    {
      id: 1,
      company: "SmyrnaTek",
      role: "Data Engineer (Contract)",
      duration: "Jul 2023 – Oct 2023",
      location: "Remote",
      context: "Contract engagement with a small team of 10. Focused on consolidating disparate data sources processing millions of records.",
      responsibilities: [
        "Developed and maintained ETL pipelines using Azure Data Factory",
        "Designed database schemas in Azure SQL for HR analytics systems",
        "Enforced data validation rules and quality controls in SSMS",
        "Translated business requirements into technical specifications",
        "Mentored 2 junior engineers",
      ],
      achievements: [
        "Engineered ETL pipelines consolidating millions of records from multiple disparate sources, reducing end-to-end processing time by 10%",
        "Designed Azure SQL schemas for HR analytics, improving query performance by 10%",
        "Mentored 2 junior engineers, accelerating team delivery velocity by 10%",
        "Enforced validation rules reducing data errors by 5–10%",
      ],
      tags: ["Azure Data Factory", "Azure SQL", "SSMS", "ETL"],
    },
    {
      id: 2,
      company: "Tayse",
      role: "Data Analyst & BI Specialist",
      duration: "May 2021 – Apr 2023",
      location: "Remote (US-based)",
      context: "Mid-market e-commerce brand selling across 6 major US/Canada sales channels. Managed data for 200+ SKUs. Served 10–15 stakeholders across 3+ teams.",
      responsibilities: [
        "Built and maintained Power BI dashboards for product, sales, and commercial insights",
        "Managed product datasets across Amazon, Wayfair, Walmart, Home Depot, Lowe's, and BBB",
        "Optimized multi-channel product data pipelines in Salsify PIM",
        "Served as primary data liaison for Product Owners",
        "Streamlined commercial reporting using Acumatica ERP",
        "Led marketplace expansion research for Etsy entry",
      ],
      achievements: [
        "Built and maintained 80+ Power BI dashboards delivering insights to 10–15 stakeholders across 3+ teams",
        "Managed product datasets spanning 200+ SKUs across 6 sales channels, improving data accuracy by 5%",
        "Owned stakeholder relationships as primary data liaison, increasing satisfaction by 15%",
        "Optimized multi-channel data pipelines in Salsify, reducing listing errors by 10%",
        "Managed operations across both Amazon Seller Central and Vendor Central",
        "Spearheaded Etsy marketplace expansion research",
      ],
      tags: ["Power BI", "Salsify", "Amazon", "Acumatica", "E-Commerce"],
    },
    {
      id: 3,
      company: "Celebi Aviation",
      role: "Data Analytics Specialist",
      duration: "Nov 2019 – Dec 2020",
      location: "Istanbul, Turkey",
      context: "One of the world's largest independent ground handling companies. 10,000+ employees globally, 40+ airports across Turkey, India, Hungary, Tanzania, and more.",
      responsibilities: [
        "Led BI infrastructure migration from QlikView to Power BI",
        "Migrated the main office ticket system dashboard from QlikView to Power BI",
        "Analyzed operational data spanning international hubs across Turkey and India",
        "Documented ETL pipeline specifications and data processing standards",
        "Maintained and optimized QlikView ETL pipelines processing data from Oracle Data Integrator",
        "Automated report distribution via NPrinting",
        "Defined KPIs with product owners",
      ],
      achievements: [
        "Migrated the main office ticket system dashboard from QlikView to Power BI, fully completing the first production reporting module in the platform transition",
        "Analyzed operational data spanning multiple international hubs across Turkey and India, supporting performance reporting for a 10,000+ employee global aviation company",
        "Documented ETL pipeline specifications and data processing standards, improving maintainability and accelerating pipeline performance by 5%",
        "Optimized QlikView ETL pipelines, automating report distribution to 20+ users via NPrinting",
        "Defined KPIs with product owners and implemented data transformations, reducing support tickets by 15% through improved reporting accuracy",
      ],
      tags: ["QlikView", "Power BI", "Oracle Data Integrator", "DirectQuery", "NPrinting"],
    },
    {
      id: 4,
      company: "Häfele Türkiye",
      role: "Data Analyst & QlikView Developer",
      duration: "Aug 2017 – May 2019",
      location: "Istanbul, Turkey",
      context: "Office of ~120 employees. Built dashboards serving 100+ users across sales, purchasing, and executive teams including the CEO. Reported directly to Head of IT.",
      responsibilities: [
        "Developed and optimized PL/SQL queries and ETL pipelines",
        "Designed and maintained QlikView dashboards with scheduled ETL refreshes",
        "Evaluated Qlik Sense as potential platform replacement (2-month pilot)",
        "Initiated database restructuring from flat schema to star schema",
        "Built customer purchasing pattern analysis",
        "Participated in frequent CEO working sessions with core analytics team",
      ],
      achievements: [
        "Developed PL/SQL ETL pipelines, reducing report generation time by 10%",
        "Designed QlikView dashboards serving 100+ users across all departments",
        "Built customer purchasing pattern analysis driving data-informed decisions at CEO level",
        "Improved data delivery time by 20% and accuracy by 15% with SQL-based ETL workflows",
        "Increased report adoption by 20% through stakeholder onboarding",
        "Initiated flat-to-star schema restructuring for improved query performance",
        "Designed executive dashboard with simplified gauge visualizations tailored to CEO preferences",
      ],
      tags: ["QlikView", "Qlik Sense", "PL/SQL", "Oracle", "Star Schema"],
    },
  ],
  earlier: [
    {
      company: "Oses Group",
      role: "Reporting Specialist",
      duration: "Feb 2021 – May 2021",
      location: "Istanbul, Turkey",
      description: "Excel-based pricing reports for stakeholders using company-specific ERP software. Additional Photoshop work for the team.",
    },
    {
      company: "Artı Technologies",
      role: "QA Intern",
      duration: "Feb 2017 – May 2017",
      location: "Istanbul, Turkey",
      description: "Gesture testing of mobile applications as part of the quality assurance team.",
    },
    {
      company: "ObiYemek",
      role: "IT Coordinator",
      duration: "Nov 2015 – Aug 2016",
      location: "Istanbul, Turkey",
      description: "Consolidated Python developer work, printed QR codes for hotel room cardboards, and handled hardware setup in hotel rooms at this tech startup.",
    },
  ],
}

export const projects = {
  academic: [
    {
      name: "AI-Driven Pneumonia Diagnosis",
      description: "Built a classification model for pneumonia detection from a 1.1 GB medical imaging dataset using computer vision techniques.",
      tech: ["Python", "Machine Learning", "Computer Vision"],
      link: "https://github.com/ali-baris-demirci/Viral-and-Bacterial-Pneumonia-detection-using-Computer-Vision",
    },
    {
      name: "Snake Game",
      description: "Classic Snake game implemented in Python using pygame. A fun side project following Tech With Tim's tutorial.",
      tech: ["Python", "pygame"],
      link: "https://github.com/ali-baris-demirci/SnakeGame",
    },
    {
      name: "Predictive Analytics & Machine Learning",
      description: "M.Sc. project applying predictive modeling techniques using Python and scikit-learn.",
      tech: ["Python", "scikit-learn", "Pandas", "NumPy"],
      link: null,
    },
    {
      name: "Advancing Insights in Big Data Analytics",
      description: "M.Sc. project focused on large-scale data analysis techniques.",
      tech: ["Python", "Big Data"],
      link: null,
    },
  ],
  professional: [
    {
      name: "Spoken Digit Recognition (FSDD)",
      description: "Built a modular Python system for classifying spoken digits (0–9) as part of a job interview project. Supports Logistic Regression (~85% accuracy) and Random Forest (~93% accuracy) with an interactive real-time demo.",
      tech: ["Python", "scikit-learn", "Audio Processing", "Parquet"],
      link: "https://github.com/ali-baris-demirci/VoiceRecognition",
    },
    {
      name: "QlikView-to-Power BI Migration",
      description: "Migrated the main office ticket system dashboard from QlikView to Power BI at Celebi Aviation (10,000+ employees, 40+ airports), fully completing the first production reporting module in the platform transition.",
      tech: ["QlikView", "Power BI", "Oracle Data Integrator", "DirectQuery", "NPrinting"],
    },
    {
      name: "Qlik Sense Platform Evaluation",
      description: "2-month pilot at Häfele Türkiye to evaluate Qlik Sense as a replacement for QlikView. Rebuilt existing dashboards for leadership comparison.",
      tech: ["QlikView", "Qlik Sense"],
    },
    {
      name: "Star Schema Database Restructuring",
      description: "Initiated restructuring of PL/SQL database from flat schema to star schema at Häfele Türkiye to improve query performance and reporting scalability.",
      tech: ["PL/SQL", "Oracle", "Data Modeling"],
    },
  ],
}

export const education = [
  {
    degree: "M.Sc. Data Analytics",
    institution: "University for the Creative Arts",
    year: "Oct 2023 – Mar 2025",
    notes: "Dissertation finalized. Academic exposure to Python, machine learning, and feature engineering.",
  },
  {
    degree: "B.A. Management Information Systems",
    institution: "Anadolu University",
    year: "Sep 2018 – Jun 2021",
    notes: "Completed 4-year degree in 3 years.",
  },
  {
    degree: "Computer Science (Coursework)",
    institution: "Boğaziçi University",
    year: "Sep 2009 – Jun 2015",
    notes: "Turkey's top-ranked technical university (top 0.5% admission). Strong foundations in computer science fundamentals.",
  },
]

export const certifications = [
  {
    name: "Agentic AI: A Framework for Planning and Execution",
    provider: "LinkedIn",
    year: "2025",
    link: "https://www.linkedin.com/learning/certificates/75b544d3452a101df29a673c34a3ead3300636f8ac41466fef2378996cbffcd6",
  },
  {
    name: "Career Essentials in GitHub Professional Certificate",
    provider: "LinkedIn",
    year: "2025",
    link: "https://www.linkedin.com/learning/certificates/7ca17e6cc2c3ccaf6ab26d675a666bf62ed3ed62bb8b16f2caf67e095fb0cb51",
  },
  {
    name: "Skill Up with Python: Hands-On DS & ML Projects",
    provider: "LinkedIn",
    year: "2025",
    link: "https://www.linkedin.com/learning/certificates/77a228c1650a77bf54c210428bda796c5c05879152b694220129b11745ea304a",
  },
  {
    name: "Statistics Foundations 4: Advanced Topics",
    provider: "LinkedIn",
    year: "2025",
    link: "https://www.linkedin.com/learning/certificates/9af1b86932ceb442bc1588641d401d89cdb67a3ab73ecc1a35d3b78dd84c45e9",
  },
  {
    name: "Python for Data Science & ML Bootcamp",
    provider: "Udemy",
    year: "2024",
    link: "https://www.udemy.com/certificate/UC-4cb7e8c5-1a12-4552-afc8-d84b6839a267/",
  },
  {
    name: "Python Programming & Practice Professional Certificate",
    provider: "Berlin SBI",
    year: "2024",
    link: "https://certificate.berlinsbi.com/verify/287ca820671",
  },
  {
    name: "IoT for Business Management",
    provider: "Berlin SBI",
    year: "2024",
    link: "https://certificate.berlinsbi.com/verify/0e7a2710668",
  },
  {
    name: "Data Science Foundations",
    provider: "Great Learning",
    year: "2024",
    link: "https://www.mygreatlearning.com/certificate/BBIIBIOW",
  },
  {
    name: "Agile Project Management & Scrum Master",
    provider: "Udemy",
    year: "2022",
    link: "https://www.udemy.com/certificate/UC-7ccc723b-2e8a-4f60-9630-731ced2baec3/",
  },
  {
    name: "Power BI Developer",
    provider: "BTK Akademi",
    year: "2021",
    link: "https://www.btkakademi.gov.tr/portal/certificate/validate?certificateId=BozfGnd1p1",
  },
]

export const achievements = [
  "🏆 Ultimate frisbee tournament champion & assist leader",
  "🎓 Completed 4-year B.A. in 3 years",
  "📊 Top 0.1% in ÖSS 2009 — Turkey's national university entrance exam (~1.2M+ students)",
]

export const interests = [
  { name: "Ultimate Frisbee", icon: "frisbee" },
  { name: "Sports", icon: "sports" },
  { name: "Chess", icon: "chess" },
  { name: "Gaming", icon: "gaming" },
  { name: "Board Games", icon: "boardgames" },
  { name: "Music", icon: "music" },
]

export const navLinks = [
  { label: "About", to: "about" },
  { label: "Skills", to: "skills" },
  { label: "Experience", to: "experience" },
  { label: "Projects", to: "projects" },
  { label: "Education", to: "education" },
  { label: "Certifications", to: "certifications" },
  { label: "Contact", to: "contact" },
]