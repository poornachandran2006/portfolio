export const hero = {
  label: "Full Stack AI Engineer",
  heading: "Building Intelligent Systems That Scale.",
  subtext: "I design and build intelligent systems that combine modern web technologies with advanced AI pipelines to solve real-world problems at scale.",
  stats: [
    { number: "2+", label: "Years Building AI Systems" },
    { number: "2", label: "Production Projects" },
    { number: "RAG", label: "Expert" }
  ]
};

export const about = {
  label: "About Me",
  heading: "Engineering student building production-ready AI systems.",
  paragraphs: [
    "I am an engineering student focused on building real-world, production-ready AI applications rather than just academic models. My work centers around combining full stack development with AI/ML systems — especially Retrieval-Augmented Generation (RAG), vector databases, and scalable backend architectures.",
    "I follow a system-design-first approach: I prioritize clean architecture, modularity, and real-world usability. I have experience building end-to-end systems covering data ingestion pipelines, embedding strategies, vector search, backend APIs, and frontend interfaces.",
    "My goal is to engineer intelligent systems that are not only functional but also robust, explainable, and production-ready."
  ],
  approach: [
    { icon: "Target", label: "System Design First" },
    { icon: "Building2", label: "Clean Architecture" },
    { icon: "Bot", label: "AI + Full Stack Integration" },
    { icon: "BarChart3", label: "Production-Grade Mindset" }
  ]
};

export const skills = {
  label: "Skills",
  heading: "Technical Expertise",
  categories: {
    Frontend: [
      { name: "React.js", level: 90, proficiency: "Advanced" },
      { name: "Next.js", level: 85, proficiency: "Advanced" },
      { name: "TypeScript", level: 80, proficiency: "Advanced" },
      { name: "Tailwind CSS", level: 90, proficiency: "Advanced" }
    ],
    Backend: [
      { name: "Node.js", level: 85, proficiency: "Advanced" },
      { name: "Express.js", level: 85, proficiency: "Advanced" },
      { name: "FastAPI", level: 75, proficiency: "Intermediate" }
    ],
    "AI / ML": [
      { name: "RAG Systems", level: 88, proficiency: "Advanced" },
      { name: "Vector Search", level: 85, proficiency: "Advanced" },
      { name: "Prompt Engineering", level: 82, proficiency: "Advanced" },
      { name: "LLM Integration — Groq & Gemini", level: 80, proficiency: "Advanced" },
      { name: "Embeddings", level: 78, proficiency: "Intermediate" }
    ],
    Databases: [
      { name: "MongoDB", level: 80, proficiency: "Advanced" },
      { name: "Qdrant Vector DB", level: 82, proficiency: "Advanced" }
    ],
    Tools: [
      { name: "Docker", level: 72, proficiency: "Intermediate" },
      { name: "Git & GitHub", level: 88, proficiency: "Advanced" },
      { name: "Postman", level: 85, proficiency: "Advanced" },
      { name: "REST APIs", level: 85, proficiency: "Advanced" }
    ]
  },
  systemDesign: [
    "Scalable Architecture",
    "API Design",
    "Metadata Filtering",
    "Multi-Document Retrieval"
  ]
};

export const projects = {
  label: "Projects",
  heading: "Things I've Built.",
  featured: {
    badge: "Flagship Project",
    tags: ["RAG", "Vector Search", "Full Stack"],
    title: "Neural Search Engine for Enterprise Data",
    problem: "Traditional search systems rely on keyword matching and lack semantic understanding of large internal document collections.",
    solution: "Built a Retrieval-Augmented Generation system that enables users to query documents and receive accurate, context-aware answers generated using retrieved knowledge.",
    architecture: ["Ingest", "Chunk", "Embed", "Store", "Query", "Retrieve", "Generate"],
    techStack: ["Next.js", "TypeScript", "Node.js", "Express", "Groq", "Qdrant", "Docker", "OpenAI"],
    features: [
      "End-to-end RAG pipeline",
      "Vector similarity search (Qdrant)",
      "Metadata-based filtering",
      "Multi-document retrieval",
      "Deduplication via SHA-256 hashing",
      "Score threshold filtering",
      "Source-aware answer generation",
      "Debug transparency mode",
      "Query scoping (single / all documents)",
      "Configurable embedding providers"
    ],
    highlights: ["Production-Ready", "Explainable AI", "Scalable Architecture"],
    github: "#",
    caseStudy: "#"
  },
  secondary: {
    tags: ["System Design", "Networking"],
    title: "5G Network Digital Twin System",
    description: "Developed a technical framework for simulating 5G network behavior in a virtual environment to enable performance testing and optimization before real-world deployment.",
    keyHighlights: [
      { icon: "Network", label: "Network Simulation" },
      { icon: "Boxes", label: "System Modeling" },
      { icon: "TrendingUp", label: "Data-Driven Optimization" }
    ],
    techStack: ["Networking Concepts", "System Simulation", "Data Modeling"]
  }
};

export const experience = {
  label: "Experience",
  heading: "Professional Journey",
  timeline: [
    {
      period: "2023 — Present",
      role: "Full Stack AI Developer",
      company: "Personal Projects",
      description: [
        "Building production-grade RAG systems and AI-powered web applications",
        "Implementing end-to-end AI pipelines with vector databases and LLM integration",
        "Focusing on scalable architecture and clean code practices"
      ],
      techStack: ["React", "Node.js", "FastAPI", "Qdrant", "Docker"]
    },
    {
      period: "2021 — Present",
      role: "Engineering Student",
      company: "[College Name]",
      description: [
        "Focused on AI/ML systems, backend engineering, and software architecture",
        "Building real-world projects to bridge academic learning with industry practices",
        "Active in technical communities and open-source contributions"
      ],
      techStack: ["Python", "JavaScript", "System Design", "Algorithms"]
    }
  ]
};

export const education = {
  label: "Education",
  heading: "Academic Background",
  degree: "Bachelor of Engineering",
  institution: "[Your Institution Name]",
  year: "2021 — 2025",
  coursework: ["Data Structures", "Algorithms", "AI/ML", "Computer Networks", "Database Systems"],
  quote: "Engineering is not just about writing code — it's about designing systems that solve real problems reliably.",
  author: "Poornachandran"
};

export const certifications = {
  label: "Certifications",
  heading: "Credentials & Learning",
  items: [
    {
      name: "Build and Deploy AI Apps",
      issuer: "Groq / AI Platform",
      date: "2024",
      verifyUrl: "#"
    },
    {
      name: "Vector Search & RAG Fundamentals",
      issuer: "Self-certified / Project-based",
      date: "2024",
      verifyUrl: null
    },
    {
      name: "Full Stack Web Development",
      issuer: "[Platform]",
      date: "2023",
      verifyUrl: "#"
    }
  ]
};

export const testimonials = {
  label: "Testimonials",
  heading: "What People Say",
  items: [
    {
      quote: "Poornachandran demonstrates rare engineering maturity — he thinks in systems, not just features. His RAG implementation shows deep understanding of AI pipeline design.",
      author: "[Name]",
      role: "[Role]",
      initials: "JD"
    },
    {
      quote: "His ability to combine full stack development with production AI systems at this stage is exceptional. Highly recommended.",
      author: "[Name]",
      role: "[Role]",
      initials: "SK"
    }
  ]
};

export const contact = {
  label: "Contact",
  heading: "Let's Build Something Together.",
  subtext: "I'm open to full-time roles, internships, freelance projects, and research collaborations in AI and full stack engineering.",
  email: "your.email@example.com",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  location: "India",
  availability: ["Full-time", "Internship", "Freelance", "Collaboration"]
};

export const navigation = {
  name: "Poornachandran",
  links: [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" }
  ],
  cta: {
    label: "Hire Me",
    mailto: "your.email@example.com"
  }
};

export const footer = {
  name: "Poornachandran",
  tagline: "Full Stack AI Engineer",
  links: [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" }
  ],
  social: [
    { icon: "Github", url: "https://github.com/yourusername" },
    { icon: "Linkedin", url: "https://linkedin.com/in/yourusername" },
    { icon: "Mail", url: "mailto:your.email@example.com" }
  ],
  copyright: "© 2025 Poornachandran. Built with React & Tailwind CSS."
};
