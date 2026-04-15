import {
  Award,
  BarChart3,
  BriefcaseBusiness,
  Code2,
  Database,
  GraduationCap,
  Layers3,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  TerminalSquare,
  Workflow
} from "lucide-react";

export const profile = {
  name: "Amirtha Varshini Sugumaran",
  location: "Dublin, Ireland",
  email: "amirthasugumaran1410@gmail.com",
  phone: "+353 0894183110",
  linkedin: "https://www.linkedin.com/in/amirtha-varshini-sugumaran/",
  github: "https://github.com/Amirtha-Varshini-Sugumaran",
  headline: "Software Engineer | Business Analyst | Data Analyst",
  shortRole: "Software Engineer | Business Analyst | Data Analyst",
  subheadline:
    "Building backend systems, data-driven workflows, and structured business solutions through software engineering and analytical problem-solving.",
  availability: "Dublin, Ireland | Open to Software Engineering and Analyst roles"
};

export const navLinks = [
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" }
];

export const valueSnapshot = [
  { value: "25+", label: "API Endpoints Built", icon: TerminalSquare },
  { value: "Backend", label: "+ Database Experience", icon: Database },
  { value: "Business", label: "& Data Analysis Experience", icon: BarChart3 },
  { value: "Agile", label: "Delivery & SDLC", icon: Workflow }
];

export const experience = [
  {
    company: "VNS RCM Technologies Pvt Ltd",
    role: "Junior Software Engineer",
    location: "Chennai, India",
    dates: "Dec 2023 - Sep 2024",
    icon: Code2,
    summary:
      "Contributed across backend services, enterprise workflows, database systems, and frontend-integrated application modules within Agile delivery environments.",
    bullets: [
      "Designed and developed 25+ REST API endpoints supporting internal platforms and workflow systems.",
      "Built and optimised PostgreSQL schemas across multiple modules to improve data consistency and query efficiency.",
      "Implemented authentication and RBAC to support secure multi-tenant system behaviour.",
      "Integrated backend services with frontend and mobile modules, enabling real-time data flow and application functionality.",
      "Automated workflow processes through enterprise API integrations, reducing manual effort.",
      "Debugged and validated application logic to improve reliability, stability, and release readiness.",
      "Containerised services using Docker to standardise development and onboarding environments.",
      "Collaborated with developers, QA, and stakeholders using Git, Jira, and Agile sprint workflows.",
      "Used AI-assisted development tools to support faster scaffolding, debugging, and structured delivery."
    ],
    tags: [
      "Backend Development",
      "REST APIs",
      "PostgreSQL",
      "RBAC",
      "Frontend Integration",
      "Docker",
      "Debugging",
      "Agile"
    ]
  },
  {
    company: "VNS RCM Technologies Pvt Ltd",
    role: "Business Systems & Data Analyst Intern",
    location: "Chennai, India",
    dates: "Jun 2023 - Dec 2023",
    icon: BriefcaseBusiness,
    summary:
      "Worked at the intersection of business requirements, structured documentation, SQL-based analysis, and reporting workflows to support data-informed system improvements.",
    groups: [
      {
        title: "Business Analysis",
        bullets: [
          "Gathered functional and non-functional requirements through stakeholder discussions.",
          "Produced BRDs, FRDs, workflow diagrams, and structured requirement documentation.",
          "Mapped business processes to identify inefficiencies and logic gaps.",
          "Translated business needs into actionable technical tasks for implementation teams.",
          "Supported validation and UAT alignment against documented expectations."
        ]
      },
      {
        title: "Data Analysis",
        bullets: [
          "Developed SQL queries using joins, subqueries, and aggregations for reporting and validation.",
          "Performed dataset analysis to identify discrepancies, trends, and operational issues.",
          "Automated recurring KPI reporting workflows using Python and Excel.",
          "Improved reporting accuracy through structured validation and data cleaning.",
          "Presented analytical outputs to support stakeholder decision-making."
        ]
      }
    ],
    tags: [
      "Business Analysis",
      "SQL",
      "KPI Reporting",
      "Requirement Gathering",
      "Process Mapping",
      "Python Automation",
      "Excel Reporting",
      "UAT Support"
    ]
  },
  {
    company: "Maynooth University",
    role: "Classroom Invigilator",
    location: "Maynooth, Ireland",
    dates: "2025",
    icon: ShieldCheck,
    summary:
      "Supported examination operations through disciplined adherence to process, integrity, and compliance requirements.",
    bullets: [
      "Maintained room-level compliance, candidate support, and process integrity in time-sensitive examination environments."
    ],
    tags: ["Integrity", "Process Compliance", "Accountability"]
  }
];

export const projects = [
  {
    title: "Expense Management Backend System (EMBS)",
    label: "Featured Backend System",
    featured: true,
    summary:
      "Designed a backend system to manage employee expense submissions, approval workflows, and audit-ready financial records.",
    highlights: [
      "Built REST APIs for expense creation, approval, rejection, and listing workflows.",
      "Applied layered architecture to separate API, business logic, and persistence concerns.",
      "Enforced business rules to prevent invalid expense lifecycle transitions.",
      "Integrated PostgreSQL and validation models for reliable financial data handling."
    ],
    stack: ["Python", "FastAPI", "PostgreSQL", "Docker", "SQLAlchemy", "Pytest"]
  },
  {
    title: "Mortgage Calculator (Java)",
    label: "Java Project",
    featured: false,
    summary:
      "Built a command-line mortgage calculator demonstrating strong Java fundamentals, mathematical modelling, and clean problem-solving logic.",
    highlights: [
      "Implemented mortgage calculation logic using financial formulas.",
      "Handled user input and output formatting for practical usability.",
      "Applied core Java concepts with clean and structured code.",
      "Demonstrated early-stage engineering discipline in problem decomposition."
    ],
    stack: ["Java"]
  },
  {
    title: "AI-Powered Skill Diagnostic Tool",
    label: "Rule-Driven System",
    featured: false,
    summary:
      "Developed a rule-driven system to assess user skills and recommend structured learning pathways.",
    highlights: [
      "Built backend logic to evaluate skill inputs and identify gaps.",
      "Used regex and fuzzy matching to improve classification accuracy.",
      "Integrated backend processing with frontend components.",
      "Delivered consistent recommendation outputs through structured logic."
    ],
    stack: ["Python", "React", "Data Processing"]
  },
  {
    title: "Netflix Audience Segmentation",
    label: "Analytics Project",
    featured: false,
    summary:
      "Analysed streaming behaviour to segment users and generate engagement insights.",
    highlights: [
      "Performed segmentation using behavioural and subscription data.",
      "Cleaned and transformed datasets using Excel tools.",
      "Built dashboards to visualise trends and engagement patterns."
    ],
    stack: ["Excel", "Power BI"]
  },
  {
    title: "Digital Product Passport (DPP)",
    label: "Consulting Analytics",
    featured: false,
    summary:
      "Developed analytical outputs and dashboards to support sustainability and compliance strategy.",
    highlights: [
      "Analysed EU regulations and business implications.",
      "Built Power BI dashboards on emissions and repair metrics.",
      "Produced structured recommendations for compliance and performance improvement."
    ],
    stack: ["Power BI", "Research", "Analytics"]
  }
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
    skills: ["PostgreSQL", "MySQL", "Relational Database Design", "Query Optimisation", "Data Modelling"]
  },
  {
    title: "Frontend & Integration",
    icon: Layers3,
    skills: ["HTML", "CSS", "JavaScript", "Flutter", "API Integration"]
  },
  {
    title: "Engineering Practices",
    icon: TerminalSquare,
    skills: ["Git", "GitHub", "Docker", "Agile", "SDLC", "Jira", "Debugging", "Testing"]
  },
  {
    title: "Security",
    icon: ShieldCheck,
    skills: ["Authentication", "Authorisation", "RBAC"]
  },
  {
    title: "Analytics & BI",
    icon: BarChart3,
    skills: ["Power BI", "Tableau", "Advanced Excel", "KPI Reporting", "Data Analysis"]
  },
  {
    title: "Business Analysis",
    icon: Workflow,
    skills: ["Requirement Gathering", "BRD/FRD", "Process Mapping", "Stakeholder Communication", "UAT Support"]
  }
];

export const aboutSummary =
  "Software Engineer with a strong academic foundation in Business Analytics and hands-on experience across backend development, API design, database systems, data analysis, and business requirements translation. Combines software engineering discipline with analytical thinking to build reliable systems, support data-driven decisions, and deliver structured business solutions in Agile environments.";

export const aboutFacts = [
  "Based in Dublin, Ireland",
  "MSc Business Analytics, Maynooth University",
  "Open to Software Engineering, Business Analyst, and Data Analyst roles",
  "Experience across backend systems, APIs, frontend integration, SQL, reporting, and business process analysis"
];

export const education = [
  {
    degree: "MSc Business Analytics",
    institution: "Maynooth University, Ireland",
    dates: "Sep 2024 - Sep 2025",
    result: "Second Class Honours (2.1)",
    focus: ["Predictive Analytics", "Data Modelling", "Research Methods", "Business Insight Translation"]
  },
  {
    degree: "BCom Business Analytics",
    institution: "Sri Krishna College of Arts and Science, India",
    dates: "Jul 2021 - Apr 2024",
    result: "First Class with Distinction (1.1)",
    focus: ["SQL", "Statistical Analysis", "Data Processing", "Financial Modelling"]
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

export const certificationIcon = Award;
export const educationIcon = GraduationCap;
