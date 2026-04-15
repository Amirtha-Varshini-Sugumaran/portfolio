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
  location: "Dublin 15, Ireland",
  email: "amirthasugumaran1410@gmail.com",
  phone: "+353 0894183110",
  linkedin: "https://www.linkedin.com/in/amirtha-varshini-sugumaran/",
  github: "https://github.com/Amirtha-Varshini-Sugumaran",
  cv: "/Amirtha-Varshini-Sugumaran-CV.pdf",
  headline:
    "Java Junior Software Engineer | Backend Systems | APIs | Databases | Full Stack Exposure",
  shortRole:
    "Java-oriented backend developer with full-stack collaboration and business analytics depth."
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
  "Backend-first software engineer with API, database, authentication, debugging and release support experience.",
  "Java-oriented career focus supported by practical backend delivery, frontend integration and enterprise workflow exposure.",
  "Business Analytics graduate able to translate requirements, data signals and stakeholder needs into structured technical work."
];

export const experience = [
  {
    company: "VNS RCM Technologies Pvt Ltd",
    role: "Junior Software Engineer",
    location: "Chennai, India",
    dates: "December 2023 - September 2024",
    icon: Code2,
    summary:
      "Junior Software Engineer working across backend services, frontend-integrated modules, database workflows, enterprise API integrations and secure application functionality in an Agile environment. The role strengthened my Java-stack orientation, backend engineering discipline, full-stack collaboration and SDLC execution.",
    bullets: [
      "Designed and developed 20+ production-grade REST API endpoints supporting internal business workflows and enterprise application modules.",
      "Contributed to backend service development with focus on structured application logic, API reliability, maintainable architecture and scalable module design.",
      "Architected and optimised PostgreSQL schemas across 5+ business modules, improving relational consistency, tenant-aware access patterns and query performance.",
      "Implemented secure authentication and RBAC flows using hierarchical access logic for enterprise-grade multi-tenant applications.",
      "Integrated enterprise APIs and workflow systems to automate document and operational processes, reducing manual intervention across recurring tasks.",
      "Supported frontend-connected application modules by aligning API contracts, data exchange patterns and user-facing reliability requirements.",
      "Contributed to proof-of-concept web and mobile features aligned with internal platform requirements, strengthening practical full-stack exposure.",
      "Participated in debugging, validation, testing and release-readiness checks to improve system stability and delivery confidence.",
      "Containerized services with Docker to reduce environment setup friction and improve consistency across development workflows.",
      "Collaborated with developers, QA, business users and stakeholders in Agile sprints using Jira and Git-based version control.",
      "Used AI-assisted engineering tools including Codex and Claude Code for scaffolding, debugging support and delivery acceleration while retaining engineering ownership."
    ],
    clusters: [
      {
        title: "Multi-Tenant Workflow Management System",
        description:
          "Contributed backend APIs, tenant-aware database workflows, secure access logic and frontend integration support for an internal enterprise workflow platform."
      },
      {
        title: "Enterprise Document Automation System",
        description:
          "Built and supported API-driven automation flows for document handling, operational processing and business rule execution across internal teams."
      },
      {
        title: "Internal Platform and Mobile Module Development",
        description:
          "Supported web and mobile-facing modules through API contract alignment, UI module collaboration, debugging and release-readiness validation."
      }
    ],
    tags: ["Java-oriented backend", "REST APIs", "PostgreSQL", "RBAC", "Docker", "Agile"]
  },
  {
    company: "VNS RCM Technologies Pvt Ltd",
    role: "Business Systems & Data Analyst Intern",
    location: "Chennai, India",
    dates: "June 2023 - December 2023",
    icon: Workflow,
    summary:
      "Built a software-engineering foundation through requirements analysis, SQL validation, reporting automation, structured documentation and stakeholder-facing delivery.",
    bullets: [
      "Translated business requirements into clear functional tasks, acceptance notes and implementation-ready documentation.",
      "Used SQL validation and reporting analysis to verify data quality, workflow accuracy and operational performance patterns.",
      "Mapped process gaps, documented BRD/FRD inputs and supported developers with business context for cleaner implementation decisions.",
      "Improved stakeholder communication, requirement clarity and data-backed thinking that now supports backend and systems engineering work."
    ],
    tags: ["Requirements", "SQL validation", "Reporting automation", "BRD / FRD", "Stakeholders"]
  },
  {
    company: "Maynooth University",
    role: "Classroom Invigilator",
    location: "Maynooth, Ireland",
    dates: "2025",
    icon: ShieldCheck,
    summary:
      "Supported examination delivery with reliability, confidentiality, process compliance and calm accountability in a structured academic environment.",
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
    label: "Flagship backend engineering project",
    problem:
      "Internal expense processes need reliable validation, auditable approval workflows and maintainable backend services.",
    description:
      "A backend-focused system built with layered architecture, approval and rejection flows, business-rule validation, auditability, health monitoring and API documentation.",
    impact:
      "Demonstrates production-minded backend engineering discipline across API design, persistence, testing and deployment consistency.",
    stack: ["FastAPI", "PostgreSQL", "Docker Compose", "SQLAlchemy", "Pydantic", "Pytest", "OpenAPI"],
    links: { github: "#", demo: "#" }
  },
  {
    title: "Mortgage Calculator",
    label: "Java fundamentals project",
    problem:
      "Mortgage calculations require accurate financial logic, safe input handling and clear repayment output.",
    description:
      "A Java command-line application focused on financial calculation logic, mathematical modelling, user input handling and formatted output.",
    impact:
      "Highlights Java problem-solving fundamentals, clean control flow and confidence with engineering basics in a finance-oriented use case.",
    stack: ["Java", "CLI", "Financial logic", "Input handling", "Formatted output"],
    links: { github: "#", demo: "#" }
  },
  {
    title: "AI-Powered Skill Diagnostic Tool",
    label: "Recommendation logic and frontend integration",
    problem:
      "Learners need structured feedback that converts raw skill input into useful gap analysis and next-step recommendations.",
    description:
      "A rule-driven diagnostic tool using regex, fuzzy matching and recommendation logic with a React-based frontend integration layer.",
    impact:
      "Shows structured system design, practical parsing logic and the ability to connect analytical rules to a usable application interface.",
    stack: ["Python", "Regex", "Fuzzy matching", "React", "Recommendation logic"],
    links: { github: "#", demo: "#" }
  },
  {
    title: "Netflix Streaming Audience Segmentation",
    label: "Analytics and dashboarding project",
    problem:
      "Streaming audience data needs segmentation and visual insight to support content and customer strategy decisions.",
    description:
      "A business analytics project combining segmentation, regression analysis and dashboarding to communicate audience behaviour patterns.",
    impact:
      "Demonstrates analytical thinking, business insight generation and clear communication through executive-ready reporting.",
    stack: ["Excel", "Power BI", "Regression analysis", "Segmentation", "Dashboards"],
    links: { github: "#", demo: "#" }
  },
  {
    title: "Digital Product Passports (DPP)",
    label: "Business consulting project",
    problem:
      "Organisations need to understand EU Digital Product Passport requirements and turn regulation into practical readiness plans.",
    description:
      "A consulting-style analytics project covering EU regulatory analysis, sustainability strategy, Power BI dashboards and executive presentation.",
    impact:
      "Connects analytical research, regulatory interpretation and business-facing communication for strategy and delivery planning.",
    stack: ["EU regulation", "Power BI", "Sustainability", "Consulting", "Executive presentation"],
    links: { github: "#", demo: "#" }
  },
  {
    title: "Decision Support System for Retail Location Selection",
    label: "Structured business decisioning",
    problem:
      "Retail location choices require consistent scoring across demand, competition, cost and accessibility factors.",
    description:
      "A decision-support project translating business criteria into structured evaluation logic and stakeholder-ready recommendations.",
    impact:
      "Shows functional decomposition, data-informed decisioning and business systems thinking.",
    stack: ["Decision support", "Excel", "Scoring model", "Business analysis"],
    links: { github: "#", demo: "#" }
  }
];

export const skillGroups = [
  {
    title: "Programming & Engineering",
    icon: Code2,
    skills: ["Java", "Python", "SQL", "REST APIs", "Backend Development", "Frontend Integration"]
  },
  {
    title: "Backend & Data",
    icon: Database,
    skills: ["PostgreSQL", "Relational Database Design", "Query Optimisation", "Database Workflows", "API Design"]
  },
  {
    title: "Frontend & Application Layer",
    icon: BriefcaseBusiness,
    skills: ["HTML", "CSS", "JavaScript", "Flutter", "UI Module Integration"]
  },
  {
    title: "Engineering Practices",
    icon: ShieldCheck,
    skills: ["Git", "GitHub", "Docker", "SDLC", "Agile", "Jira", "Debugging", "Testing", "Authentication", "Authorisation", "RBAC"]
  },
  {
    title: "Analytics & BI",
    icon: LineChart,
    skills: ["Power BI", "Tableau", "Advanced Excel", "KPI Reporting", "Data Modelling"]
  },
  {
    title: "Business & Systems",
    icon: Workflow,
    skills: ["Requirement Gathering", "BRD / FRD", "Process Mapping", "Stakeholder Communication", "Functional Decomposition"]
  }
];

export const education = [
  {
    degree: "MSc Business Analytics",
    institution: "Maynooth University, Ireland",
    dates: "September 2024 - September 2025",
    result: "Second Class Honours (2.1)",
    focus: [
      "Predictive analytics",
      "Data modelling",
      "Research methodologies",
      "Dashboard design",
      "Translating analytics into strategy"
    ]
  },
  {
    degree: "BCom with Business Analytics",
    institution: "Sri Krishna College of Arts and Science, Coimbatore",
    dates: "July 2021 - April 2024",
    result: "First Class with Distinction (1.1)",
    focus: [
      "SQL and relational understanding",
      "Statistical analysis",
      "Data cleaning",
      "Exploratory analysis",
      "Finance and optimisation foundations"
    ]
  }
];

export const certifications = [
  "Machine Learning Master Certification - Altair RapidMiner (2025)",
  "Business Analysis A to Z - Udemy (2024)",
  "What Is Business Analysis? - LinkedIn Learning (2023)",
  "Digital Marketing Analytics in Theory - Coursera (2024)",
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
  { value: "20+", label: "REST API endpoints delivered" },
  { value: "5+", label: "business modules supported" },
  { value: "2.1", label: "MSc Business Analytics" },
  { value: "Java", label: "primary engineering target" }
];

export const certificationIcon = Award;
export const educationIcon = GraduationCap;
