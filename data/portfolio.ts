import {
  Award,
  BriefcaseBusiness,
  Code2,
  Database,
  GraduationCap,
  LineChart,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Workflow
} from "lucide-react";

export const profile = {
  name: "Amirtha Varshini Sugumaran",
  location: "Dublin, Ireland",
  email: "amirthasugumaran1410@gmail.com",
  phone: "+353 0894183110",
  linkedin: "https://www.linkedin.com/in/amirtha-varshini-sugumaran/",
  github: "https://github.com/Amirtha-Varshini-Sugumaran",
  cv: "/Amirtha-Varshini-Sugumaran-CV.pdf",
  headline:
    "Software Engineer | Business Analyst | Data Analyst",
  shortRole:
    "Software Engineer | Business Analyst | Data Analyst"
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" }
];

export const highlights = [
  "Backend systems experience across REST APIs, PostgreSQL, authentication, debugging and deployment support.",
  "Strong data and business analysis foundation with SQL-driven reporting, KPI tracking and process mapping.",
  "Able to translate business requirements into structured technical solutions within Agile delivery environments."
];

export const experience = [
  {
    company: "VNS RCM Technologies Pvt Ltd",
    role: "Junior Software Engineer",
    location: "Chennai, India",
    dates: "Dec 2023 - Sep 2024",
    icon: Code2,
    summary:
      "Worked across backend systems, data workflows and frontend-integrated modules within Agile teams, contributing to application development, reporting systems and enterprise process automation.",
    bullets: [
      "Designed and developed 20+ REST API endpoints supporting internal business applications and workflows.",
      "Built and optimised PostgreSQL schemas across multiple modules, improving data consistency and reporting accuracy.",
      "Implemented authentication and RBAC for secure, multi-tenant system environments.",
      "Integrated backend APIs with frontend and mobile modules, enabling real-time data flow and user-facing functionality.",
      "Supported frontend-connected features, ensuring accurate API responses and smooth system behaviour.",
      "Automated enterprise workflows through API integrations, reducing manual processing effort.",
      "Debugged system issues and validated application logic to improve reliability and performance.",
      "Containerised services using Docker to standardise development environments.",
      "Collaborated with cross-functional teams using Git and Jira within Agile delivery cycles.",
      "Leveraged AI-assisted tools to improve development efficiency and debugging speed."
    ],
    tags: ["Backend Development", "API Design", "Database Systems", "Frontend Integration", "Debugging", "Deployment Support"]
  },
  {
    company: "VNS RCM Technologies Pvt Ltd",
    role: "Business Systems & Data Analyst Intern",
    location: "Chennai, India",
    dates: "Jun 2023 - Dec 2023",
    icon: Workflow,
    summary:
      "Worked at the intersection of business and data, translating requirements into structured outputs, improving reporting accuracy and enabling data-driven decision-making.",
    bullets: [
      "Conducted stakeholder discussions to gather functional and non-functional requirements.",
      "Created structured documentation including BRDs, FRDs and workflow diagrams.",
      "Mapped business processes to identify inefficiencies and automation opportunities.",
      "Translated business requirements into actionable technical tasks for development teams.",
      "Supported UAT validation by aligning implemented features with documented requirements.",
      "Maintained traceability between requirements, development tasks and final outputs.",
      "Developed complex SQL queries using joins, aggregations and subqueries to extract reporting datasets.",
      "Performed data validation and consistency checks across multiple datasets.",
      "Analysed large datasets to identify discrepancies, trends and performance gaps.",
      "Automated recurring KPI reports using Python and Excel-based workflows.",
      "Improved reporting accuracy by cleaning and structuring raw data inputs.",
      "Built Excel-based dashboards and templates for operational performance tracking.",
      "Presented analytical findings to stakeholders to support decision-making."
    ],
    clusters: [
      {
        title: "Key Impact",
        description:
          "Improved reporting accuracy, reduced manual reporting effort and enhanced alignment between business requirements and system outputs."
      }
    ],
    tags: ["Business Analysis", "SQL Reporting", "KPI Automation", "BRD / FRD", "UAT Support", "Stakeholders"]
  },
  {
    company: "Maynooth University",
    role: "Classroom Invigilator",
    location: "Maynooth, Ireland",
    dates: "2025",
    icon: ShieldCheck,
    summary:
      "Maintained examination integrity through strict adherence to procedures, demonstrating accountability and compliance discipline.",
    bullets: [
      "Maintained examination procedures, candidate support and room-level compliance under time-sensitive conditions.",
      "Demonstrated professional reliability, attention to detail and clear communication in a trust-based role."
    ],
    tags: ["Reliability", "Compliance", "Accountability"]
  }
];

export const projects = [
  {
    title: "Expense Management Backend System (EMBS)",
    label: "Backend Engineering Project",
    problem:
      "Employee expense workflows require structured approval logic, validation and audit tracking.",
    description:
      "Designed a backend system to manage employee expense workflows with structured approval logic, audit tracking, layered architecture and reliable validation.",
    impact:
      "Developed REST APIs for expense submission, approval and rejection workflows while separating API, logic and database layers for maintainability.",
    stack: ["Python", "FastAPI", "PostgreSQL", "Docker"],
    links: { github: "#", demo: "#" }
  },
  {
    title: "Mortgage Calculator",
    label: "Java Project",
    problem:
      "Mortgage calculations require accurate financial formulas, user input handling and formatted outputs.",
    description:
      "Developed a command-line mortgage calculator demonstrating core Java fundamentals, structured programming and practical problem-solving ability.",
    impact:
      "Implemented financial calculations using mathematical formulas, clean code practices and real-world output formatting.",
    stack: ["Java"],
    links: { github: "#", demo: "#" }
  },
  {
    title: "AI-Powered Skill Diagnostic Tool",
    label: "Recommendation logic and frontend integration",
    problem:
      "Learners need structured feedback that identifies skill gaps and recommends learning paths.",
    description:
      "Built a system to analyse user skills and recommend learning paths using structured backend logic, regex, fuzzy matching and frontend integration.",
    impact:
      "Delivered rule-driven outputs for consistent recommendations and clearer skill-gap analysis.",
    stack: ["Python", "React"],
    links: { github: "#", demo: "#" }
  },
  {
    title: "Netflix Audience Segmentation",
    label: "Analytics and dashboarding project",
    problem:
      "Streaming behaviour data needs segmentation to reveal engagement patterns and business insights.",
    description:
      "Analysed user viewing behaviour, subscription patterns and engagement metrics to generate dashboard-led insights.",
    impact:
      "Cleaned and transformed data using Excel tools and built Power BI dashboards to visualise trends and performance metrics.",
    stack: ["Excel", "Power BI"],
    links: { github: "#", demo: "#" }
  },
  {
    title: "Digital Product Passport (DPP) - Consulting Project",
    label: "Business consulting project",
    problem:
      "Organisations need analytical insight to prepare for EU product lifecycle and sustainability compliance.",
    description:
      "Developed analytical insights and dashboards to support regulatory compliance strategy, sustainability reporting and executive recommendations.",
    impact:
      "Analysed EU regulations and built dashboards highlighting emissions, repair rates and performance metrics.",
    stack: ["Power BI", "Analytics"],
    links: { github: "#", demo: "#" }
  },
];

export const skillGroups = [
  {
    title: "Programming & Engineering",
    icon: Code2,
    skills: ["Java", "Python", "SQL", "REST APIs", "Backend Development"]
  },
  {
    title: "Databases & Data",
    icon: Database,
    skills: ["PostgreSQL", "Relational Database Design", "Query Optimisation", "Data Modelling"]
  },
  {
    title: "Frontend & Application Layer",
    icon: BriefcaseBusiness,
    skills: ["HTML", "CSS", "JavaScript", "Flutter", "API Integration"]
  },
  {
    title: "Engineering Practices",
    icon: ShieldCheck,
    skills: ["Git", "GitHub", "Docker", "Agile (Scrum)", "SDLC", "Jira", "Debugging", "Testing"]
  },
  {
    title: "Security",
    icon: ShieldCheck,
    skills: ["Authentication", "Authorisation", "Role-Based Access Control (RBAC)"]
  },
  {
    title: "Analytics & BI",
    icon: LineChart,
    skills: ["Power BI", "Tableau", "Advanced Excel", "KPI Reporting", "Data Analysis"]
  },
  {
    title: "Business Analysis",
    icon: Workflow,
    skills: ["Requirement Gathering", "BRD/FRD", "Process Mapping", "Stakeholder Communication", "UAT Support"]
  }
];

export const education = [
  {
    degree: "MSc Business Analytics",
    institution: "Maynooth University, Ireland",
    dates: "Sep 2024 - Sep 2025",
    result: "Second Class Honours (2.1)",
    focus: [
      "Predictive analytics",
      "Data modelling",
      "Research methods",
      "Business insights"
    ]
  },
  {
    degree: "BCom Business Analytics",
    institution: "Sri Krishna College of Arts and Science, India",
    dates: "Jul 2021 - Apr 2024",
    result: "First Class with Distinction (1.1)",
    focus: [
      "SQL and relational understanding",
      "Statistical analysis",
      "Data processing",
      "Financial modelling"
    ]
  }
];

export const certifications = [
  "Machine Learning Master Certification - Altair RapidMiner (2025)",
  "Business Analysis A to Z - Udemy (2024)",
  "What Is Business Analysis - LinkedIn Learning (2023)",
  "Digital Marketing Analytics - Coursera (2024)",
  "Legal Aspects of Entrepreneurship - Coursera (2022)",
  "Attention to Detail - TestDome (2025)"
];

export const contactItems = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}`, icon: Phone },
  { label: "LinkedIn", value: "amirtha-varshini-sugumaran", href: profile.linkedin, icon: BriefcaseBusiness },
  { label: "Location", value: profile.location, href: "#contact", icon: MapPin }
];

export const outcomes = [
  { value: "20+", label: "REST API endpoints built" },
  { value: "SQL", label: "reporting and validation strength" },
  { value: "2.1", label: "MSc Business Analytics" },
  { value: "Agile", label: "delivery environment" }
];

export const certificationIcon = Award;
export const educationIcon = GraduationCap;
