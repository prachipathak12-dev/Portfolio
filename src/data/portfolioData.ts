export interface Project {
  id: string;
  name: string;
  category: string;
  shortDescription: string;
  technologies: string[];
  image: string;
  overview: string;
  problem: string;
  solution: string;
  keyFeatures: string[];
  aiApproach: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  responsibilities: string[];
  technologies: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  details?: string;
}

export interface SkillCategory {
  name: string;
  skills: { name: string; level: number; tags?: string }[];
}

export const portfolioData = {
  personal: {
    name: "Prachi Pathak",
    title: "AI/ML Engineer | Python & Full-Stack (MERN) Developer",
    titlesRotation: [
      "AI/ML Engineer",
      "Python & Full-Stack Developer",
      "LLM & RAG Specialist",
      "FastAPI & React Developer"
    ],
    email: "prachipathakfeb2005@gmail.com",
    phone: "7348448636",
    linkedin: "https://linkedin.com/in/prachi-pathak-38989b264",
    linkedinHandle: "prachi-pathak-38989b264",
    residence: "India",
    address: "Delhi, India",
    languages: "English, Hindi (Reading/Writing)",
    status: "Available for Opportunities",
    aboutSummary:
      "AI/ML and Python developer with hands-on experience building LLM-powered applications, including Retrieval-Augmented Generation (RAG) systems, vector search, and prompt-engineered conversational agents. Skilled in integrating and deploying machine learning models via inference APIs, backend development with FastAPI, and full-stack delivery using the MERN stack. Experienced with LangChain, vector databases (ChromaDB), Docker, and Jenkins-based CI/CD, with a focus on shipping reliable, production-ready AI features end to end.",
    photo: "/profile.jpeg"
  },

  whatIDo: [
    {
      id: "rag-genai",
      icon: "Cpu",
      title: "Generative AI & RAG Systems",
      description:
        "Building end-to-end LLM-powered applications, Retrieval-Augmented Generation (RAG) pipelines, vector search, and prompt-engineered conversational agents with LangChain and vector databases."
    },
    {
      id: "ml-inference",
      icon: "Brain",
      title: "ML & Model Integration",
      description:
        "Integrating and deploying machine learning models via REST and inference APIs using Scikit-learn, TensorFlow, and PyTorch for real-time intelligent decision making."
    },
    {
      id: "backend-apis",
      icon: "Server",
      title: "Backend & API Engineering",
      description:
        "Developing scalable backend microservices and high-throughput REST APIs using Python (FastAPI, Django) and Node.js (Express.js) with JWT authentication and clean architecture."
    },
    {
      id: "fullstack-ui",
      icon: "Layers",
      title: "Full-Stack Web Development",
      description:
        "Engineering responsive, modern web applications combining React.js and Next.js frontends with robust backend services, ensuring seamless end-to-end functionality."
    },
    {
      id: "db-vector",
      icon: "Database",
      title: "Databases & Vector Storage",
      description:
        "Designing relational schemas and managing databases in MySQL and PostgreSQL (Supabase), alongside ChromaDB vector stores for high-accuracy semantic retrieval."
    },
    {
      id: "devops-cicd",
      icon: "Terminal",
      title: "Deployment & DevOps",
      description:
        "Containerizing application services with Docker and automating deployment workflows via Jenkins-based CI/CD pipelines across Linux (Ubuntu) and Windows environments."
    }
  ],

  experience: [
    {
      id: "smartdata",
      role: "Software Analyst",
      company: "smartData Enterprises",
      period: "Oct-2025 – Oct-2026",
      technologies: [
        "Python",
        "FastAPI",
        "Node.js",
        "Express.js",
        "React.js",
        "Next.js",
        "LangChain",
        "RAG",
        "PostgreSQL (Supabase)",
        "MySQL",
        "Docker",
        "Jenkins"
      ],
      responsibilities: [
        "Built and integrated AI/ML features into applications, including RAG pipelines, prompt engineering, and LLM inference via REST APIs.",
        "Developed backend services using Python (FastAPI) and JavaScript (Node.js/Express) for web applications.",
        "Designed, developed, and consumed RESTful APIs enabling communication between frontend, backend, and AI services.",
        "Designed and managed databases using MySQL and PostgreSQL (Supabase), with a focus on clean schema design and reliable data handling.",
        "Integrated React.js/Next.js frontend components with backend services for seamless end-to-end functionality.",
        "Used Docker for containerized deployment and Jenkins for CI/CD pipelines.",
        "Collaborated with team members and stakeholders to gather requirements and deliver features incrementally."
      ]
    }
  ] as ExperienceItem[],

  education: [
    {
      id: "bca",
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "University of Lucknow",
      period: "2022 – 2025",
      details:
        "Comprehensive foundations in computer science, software engineering, database management, and object-oriented programming."
    }
  ] as EducationItem[],

  skillCategories: [
    {
      name: "AI / ML & Generative AI",
      skills: [
        { name: "RAG (Retrieval-Augmented Generation)", level: 95 },
        { name: "Prompt Engineering", level: 92 },
        { name: "LLM Integration", level: 94 },
        { name: "Vector Databases (ChromaDB)", level: 90 },
        { name: "Scikit-learn", level: 85 },
        { name: "TensorFlow & PyTorch", level: 82 },
        { name: "LangChain", level: 85 },
        { name: "Model Integration via REST / Inference APIs", level: 90 }
      ]
    },
    {
      name: "Programming Languages",
      skills: [
        { name: "Python", level: 95 },
        { name: "JavaScript", level: 90 },
        { name: "SQL", level: 88 }
      ]
    },
    {
      name: "Backend & Databases",
      skills: [
        { name: "FastAPI", level: 94 },
        { name: "Django", level: 85 },
        { name: "Node.js (Express.js)", level: 88 },
        { name: "REST API Design", level: 92 },
        { name: "PostgreSQL (Supabase)", level: 90 },
        { name: "MySQL", level: 88 }
      ]
    },
    {
      name: "Frontend Development",
      skills: [
        { name: "React.js", level: 90 },
        { name: "Next.js (basics)", level: 82 },
        { name: "HTML5 & CSS3", level: 95 },
        { name: "Responsive UI Development", level: 92 }
      ]
    },
    {
      name: "DevOps & Core Concepts",
      skills: [
        { name: "Docker", level: 86 },
        { name: "Jenkins (CI/CD)", level: 84 },
        { name: "NumPy & Pandas", level: 88 },
        { name: "JWT Authentication", level: 90 },
        { name: "OOP Fundamentals", level: 92 },
        { name: "MVC & Microservices Concepts", level: 88 },
        { name: "Linux (Ubuntu) & Windows", level: 90 }
      ]
    }
  ] as SkillCategory[],

  knowledgeTags: [
    "RAG Architecture",
    "Vector Search",
    "Prompt Engineering",
    "LLM Inference APIs",
    "FastAPI",
    "ChromaDB",
    "LangChain",
    "MERN Stack",
    "React.js",
    "Supabase / PostgreSQL",
    "RESTful APIs",
    "Docker Containerization",
    "Jenkins CI/CD",
    "JWT Security",
    "NumPy & Pandas",
    "OCR",
    "Microservices",
    "Linux (Ubuntu)"
  ],

  projects: [
    {
      id: "regulo-ai",
      name: "Regulo AI",
      category: "GenAI & RAG",
      shortDescription:
        "A regulation AI platform that automates construction and planning compliance with regional regulatory documents and RAG-powered chatbot.",
      technologies: ["Next.js", "Python", "PostgreSQL (Supabase)", "LangChain", "RAG"],
      image: "/regulo.jpg",
      overview:
        "A regulation AI platform that automates construction and planning compliance. Users upload regional regulatory documents and interact with a RAG-powered AI chatbot, built using LangChain and vector-based retrieval, for accurate regulation queries.",
      problem:
        "Construction and planning compliance requires parsing lengthy, jurisdiction-specific regulatory codes, causing costly bottlenecks and compliance verification oversights.",
      solution:
        "An intelligent compliance platform powered by LangChain and vector search that ingests regional regulatory documentation to deliver instantaneous, clause-specific answers.",
      keyFeatures: [
        "Regional regulatory document ingestion and parsing",
        "RAG-powered conversational AI chatbot using LangChain and vector retrieval",
        "Accurate, cited compliance queries against specific regulatory articles",
        "Project organization and filtering categorized by geographic area",
        "Subscription-based team management and administrative access controls"
      ],
      aiApproach:
        "Employs LangChain pipelines with vector-based semantic retrieval over uploaded regional construction codes to ensure accurate, hallucination-resistant compliance validation."
    },
    {
      id: "skypath",
      name: "SkyPath",
      category: "AI & Travel",
      shortDescription:
        "An AI-powered travel management platform enabling flight search, hotel discovery, and an intelligent AI assistant with API fallback logic.",
      technologies: ["Python (FastAPI)", "React", "LLM Integration"],
      image: "/skypath.jpg",
      overview:
        "An AI-powered travel management platform enabling flight search and booking, hotel and attraction discovery, an AI travel assistant, and booking history.",
      problem:
        "Modern travel platforms face unpredictable disruptions from third-party travel APIs and often lack intuitive conversational trip planning assistance.",
      solution:
        "SkyPath pairs live travel endpoints with a dedicated AI travel assistant and robust AI-driven fallback logic, ensuring continuous functionality even when external APIs fail.",
      keyFeatures: [
        "Comprehensive flight search and booking workflow",
        "Hotel and attraction discovery interface",
        "Interactive AI travel assistant for itinerary suggestions and query handling",
        "Trip and booking history management",
        "Resilient AI-driven fallback logic maintaining service during API outages"
      ],
      aiApproach:
        "Integrates LLM models with Python FastAPI backends to assist traveler queries dynamically while orchestrating fallback flows when third-party flight/hotel APIs become unreachable."
    },
    {
      id: "healthcare-chatbot",
      name: "RAG-Based Healthcare Chatbot",
      category: "GenAI & RAG",
      shortDescription:
        "A multi-turn healthcare chatbot ingesting symptom and medication knowledge documents for clinical guidance via ChromaDB vector search.",
      technologies: ["Python (FastAPI)", "React", "ChromaDB", "LangChain", "Prompt Engineering"],
      image: "/healthcare.jpg",
      overview:
        "A RAG-based chatbot that ingests symptom, medication, and Q&A knowledge documents to hold multi-turn conversations — matching reported symptoms, asking clarifying follow-up questions, and composing a final response using relevant medication information via vector search over a ChromaDB knowledge base.",
      problem:
        "Patients struggle to obtain quick, reliable clarification on symptoms and medication guidance without encountering generic or unverified advice.",
      solution:
        "A grounded multi-turn clinical chatbot that retrieves verified symptom, medication, and Q&A documents from ChromaDB, asking structured follow-up questions before delivering answers.",
      keyFeatures: [
        "Ingestion and indexing of symptom, medication, and clinical Q&A documents",
        "Multi-turn interactive dialogue management",
        "Contextual symptom entity matching and intelligent clarifying follow-up queries",
        "Vector-based semantic retrieval over ChromaDB",
        "Verified medication information synthesis with prompt-engineered safety guidelines"
      ],
      aiApproach:
        "Combines LangChain chains, prompt engineering, and ChromaDB vector embeddings to conduct stateful multi-turn symptom screening while referencing strictly verified clinical documents."
    }
  ] as Project[]
};
