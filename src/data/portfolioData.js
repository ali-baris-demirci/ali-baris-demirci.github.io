export const personalInfo = {
  name: "Ali Baris Demirci",
  title: "Analytics Engineer | BI Specialist | Data Engineer",
  location: "Izmir, Türkiye",
  email: "alibarisdemirci@gmail.com",
  linkedin: "https://www.linkedin.com/in/ali-baris-demirci",
  github: "https://github.com/ali-baris-demirci",
  resumeFile: "/Ali_Baris_Demirci_Resume.pdf",
  profilePhoto: "/profile.jpg",
}

export const summary = `Data professional with 6+ years of experience specializing in Analytics Engineering, Data Engineering, and Business Intelligence. I repeatedly join organizations with fragmented, legacy, or evolving data environments and help build practical analytical foundations through data modeling, reporting, integration, and business understanding. Hands-on across the Microsoft Azure stack (Azure Data Factory, Azure SQL) and BI platforms (Power BI, Qlik), with a strong SQL foundation across Oracle, PL/SQL, T-SQL, and PostgreSQL. Currently expanding into the modern data engineering stack, including dbt, Snowflake, and Apache Kafka event streaming architecture.`

export const highlights = [
  { label: "Years Experience", value: "6+" },
  { label: "Dashboard Users", value: "100+" },
  { label: "Airports Served", value: "40+" },
  { label: "Countries", value: "3+" },
]

export const skills = {
  technical: [
    { category: "SQL", items: ["Oracle", "PL/SQL", "PostgreSQL", "T-SQL"] },
    { category: "Python", items: ["Pandas", "NumPy", "scikit-learn", "Machine Learning"] },
    { category: "ETL/ELT", items: ["Pipeline Design", "Optimization", "Monitoring", "Orchestration"] },
    { category: "Data Modeling", items: ["Star Schema", "Schema Optimization", "Flat-to-Star Restructuring"] },
    { category: "Data Warehousing", items: ["Implementation", "Query Optimization"] },
    { category: "Statistical Analysis", items: ["Exploratory Data Analysis", "Feature Engineering", "A/B Testing"] },
    { category: "Data Quality", items: ["Validation Rules", "Error Reduction", "Accuracy Controls"] },
  ],
  tools: [
    { category: "BI & Visualization", items: ["Power BI", "QlikView", "Qlik Sense", "Tableau", "NPrinting"] },
    { category: "ML & Data Science", items: ["Keras", "PyTorch", "OpenCV", "YOLO", "scikit-learn"] },
    { category: "Big Data & Streaming", items: ["Apache Spark", "Apache Kafka (In Progress)"] },
    { category: "Data Engineering", items: ["Azure Data Factory", "Oracle Data Integrator", "Azure SQL", "MSSQL", "SSMS", "dbt", "Snowflake"] },
    { category: "ERP", items: ["Acumatica"] },
    { category: "Development", items: ["Jupyter Notebook", "GitHub", "VS Code"] },
    { category: "Productivity", items: ["Excel (Reporting, Validation, Ad-hoc Analysis)"] },
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
  methodologies: [
    "Agile",
    "Kanban",
    "Scrum",
    "Six Sigma (Foundations)",
    "Data Quality Principles",
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
      role: "Data Engineer",
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
      id: 5,
      company: "Oses Group",
      role: "Data Analyst",
      duration: "Feb 2021 – May 2021",
      location: "Istanbul, Turkey",
      context: "Low data maturity, fragmented operational systems, and Excel-heavy reporting.",
      responsibilities: [
        "Built operational and franchise reporting from fragmented operational data",
        "Consolidated data from multiple operational sources",
        "Supported a nationwide centralized pricing rollout",
        "Digitized documentation and automated counting tasks with shell scripting",
      ],
      achievements: [
        "Consolidated reporting from fragmented operational systems, supporting business decisions without a mature reporting platform",
        "Supported a centralized pricing rollout across the organization, digitizing approvals and automating counts with shell scripting",
      ],
      tags: ["Excel", "Operational Reporting", "Shell Scripting", "Data Consolidation"],
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
      description: "Consolidated Python developer work, performed manual data entry operations, printed QR codes for hotel room cardboards, and handled hardware setup in hotel rooms at this tech startup.",
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
      image: "/images/xray.jpeg",
    },
    {
      name: "Snake Game",
      description: "Classic Snake game implemented in Python using pygame. A fun side project following Tech With Tim's tutorial.",
      tech: ["Python", "pygame"],
      link: "https://github.com/ali-baris-demirci/SnakeGame",
      image: "/images/snake.png",
    },
    {
      name: "Predictive Analytics & Machine Learning",
      description: "M.Sc. project applying predictive modeling techniques using Python and scikit-learn.",
      tech: ["Python", "scikit-learn", "Pandas", "NumPy"],
      link: null,
      image: "/images/ml.png",
    },
    {
      name: "Advancing Insights in Big Data Analytics",
      description: "M.Sc. project focused on large-scale data analysis techniques.",
      tech: ["Python", "Big Data"],
      link: null,
      image: "/images/big_data.png",
    },
  ],
  professional: [
    {
      name: "Spoken Digit Recognition (FSDD)",
      description: "Built a modular Python system for classifying spoken digits (0–9) as part of a job interview project. Supports Logistic Regression (~85% accuracy) and Random Forest (~93% accuracy) with an interactive real-time demo.",
      tech: ["Python", "scikit-learn", "Audio Processing", "Parquet"],
      link: "https://github.com/ali-baris-demirci/VoiceRecognition",
      image: "/images/matrix.png",
    },
    {
      name: "QlikView-to-Power BI Migration",
      description: "Migrated the main office ticket system dashboard from QlikView to Power BI at Celebi Aviation (10,000+ employees, 40+ airports), fully completing the first production reporting module in the platform transition.",
      tech: ["QlikView", "Power BI", "Oracle Data Integrator", "DirectQuery", "NPrinting"],
      image: "/images/migration.png",
    },
    {
      name: "Qlik Sense Platform Evaluation",
      description: "2-month pilot at Häfele Türkiye to evaluate Qlik Sense as a replacement for QlikView. Rebuilt existing dashboards for leadership comparison.",
      tech: ["QlikView", "Qlik Sense"],
      image: "/images/qliksense.png",
    },
    {
      name: "Star Schema Database Restructuring",
      description: "Initiated restructuring of PL/SQL database from flat schema to star schema at Häfele Türkiye to improve query performance and reporting scalability.",
      tech: ["PL/SQL", "Oracle", "Data Modeling"],
      image: "/images/star.png",
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
    name: "Agentic AI",
    provider: "ElevateSoul",
    year: "In Progress",
    link: "https://elevatesoul.ai/courses/agentic-ai",
  },
  {
    name: "Apache Kafka (Event Streaming)",
    provider: "Confluent Developer",
    year: "In Progress",
    link: "https://developer.confluent.io/courses/apache-kafka/events/",
  },
  {
    name: "dbt Fundamentals",
    provider: "dbt Labs",
    year: "2025",
    link: "https://credentials.getdbt.com/3966549d-2caf-4bcf-b896-475cd40c1346#acc.ljg8hy3x",
  },
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