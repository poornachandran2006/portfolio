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
      { name: "React.js" },
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" }
    ],
    Backend: [
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "FastAPI" }
    ],
    "AI / ML": [
      { name: "RAG Systems" },
      { name: "Vector Search" },
      { name: "LLM Integration — Groq & Gemini" },
      { name: "Embeddings" }
    ],
    Databases: [
      { name: "MongoDB" },
      { name: "Qdrant Vector DB" }
    ],
    Tools: [
      { name: "Docker" },
      { name: "Git & GitHub" },
      { name: "Postman" },
      { name: "REST APIs" }
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
    tags: ["RAG", "Hybrid Search", "Full Stack", "AI/ML"],
    title: "Neural Search Engine — Document Intelligence Platform",
    problem:
      "Enterprise document collections are siloed and unsearchable at a semantic level. Traditional keyword search fails when users ask natural-language questions across hundreds of internal documents — it cannot understand intent, disambiguate meaning, or synthesize answers from multiple sources.",
    solution:
      "Built a production-grade Retrieval-Augmented Generation system that ingests PDF, TXT, and DOCX documents, understands query intent, retrieves the most relevant chunks via hybrid search, reranks them with a cross-encoder, and streams grounded, source-cited answers token-by-token to the user.",
    architecture: [
      "Ingest & Chunk",
      "Embed (Gemini)",
      "Hybrid Retrieval",
      "RRF Fusion",
      "Cross-Encoder Rerank",
      "Intent Detection",
      "Map-Reduce RAG",
      "SSE Stream"
    ],
    pipeline: {
      label: "8-Step Query Pipeline",
      steps: [
        { step: "01", name: "Normalize", detail: "Whitespace, casing, special char cleaning" },
        { step: "02", name: "Intent Detection", detail: "LLM classifies: metadata / content / comparison / summarization" },
        { step: "03", name: "Query Rewriting", detail: "LLM rewrites natural-language query into retrieval-optimized form" },
        { step: "04", name: "Dense Retrieval", detail: "Gemini text-embedding-004 → Qdrant cosine search, top-20, score ≥ 0.65" },
        { step: "05", name: "Sparse Retrieval", detail: "BM25 keyword search on in-memory index, top-20" },
        { step: "06", name: "RRF Fusion", detail: "Reciprocal Rank Fusion (k=60) merges dense + sparse ranked lists" },
        { step: "07", name: "Reranking", detail: "FlashRank cross-encoder (ms-marco-MiniLM-L-12-v2), top-20 → top-5" },
        { step: "08", name: "RAG Generation", detail: "Single-doc or Map-Reduce Groq call → SSE token stream to UI" }
      ]
    },
    techStack: [
      "Next.js 14",
      "TypeScript",
      "Tailwind CSS",
      "FastAPI",
      "Python 3.11",
      "Groq (LLaMA-3.3-70B)",
      "Gemini Embeddings",
      "Qdrant",
      "BM25",
      "FlashRank",
      "PostgreSQL",
      "Redis",
      "Docker",
      "SQLAlchemy"
    ],
    features: [
      "8-step query pipeline: normalize → intent detect → rewrite → retrieve → fuse → rerank → generate → stream",
      "Hybrid retrieval: dense (Gemini embeddings) + sparse (BM25), fused via Reciprocal Rank Fusion",
      "FlashRank cross-encoder reranking — local, zero API cost, ~100ms latency",
      "LLM intent detection across 4 classes: metadata, content, comparison, summarization",
      "Map-Reduce RAG for multi-document comparison and summarization queries",
      "Server-Sent Events (SSE) for real-time token-by-token streaming",
      "SHA-256 deduplication — re-ingesting a document never creates duplicate chunks",
      "Score threshold filtering (≥ 0.65 cosine similarity) with safety fallback responses",
      "Redis query result caching with 1-hour TTL — repeated queries return instantly",
      "Full chat history persistence in PostgreSQL via SQLAlchemy ORM",
      "50-question evaluation benchmark: Recall@5, Faithfulness, Answer Relevancy (LLM-judge)"
    ],
    benchmarks: {
      label: "Evaluation Results — 50-Question Benchmark",
      metrics: [
        { name: "Recall@5", value: "0.90", description: "Correct chunk appears in top-5 retrieved results" },
        { name: "Faithfulness", value: "0.80", description: "Generated answer is grounded in retrieved chunks (LLM judge)" },
        { name: "Answer Relevancy", value: "0.90", description: "Answer directly addresses the user query (LLM judge)" }
      ]
    },
    config: {
      label: "Key Configuration",
      values: [
        { key: "Chunk size", value: "512 tokens, 64 overlap" },
        { key: "Embedding model", value: "Gemini text-embedding-004 (768 dims)" },
        { key: "LLM", value: "LLaMA-3.3-70B via Groq (temp = 0)" },
        { key: "Retrieval", value: "Top-20 dense + Top-20 sparse → RRF → Top-5 reranked" },
        { key: "Vector store", value: "Qdrant (cosine similarity)" },
        { key: "Cache TTL", value: "3600s Redis" }
      ]
    },
    highlights: [
      "Hybrid Retrieval (Dense + Sparse)",
      "Cross-Encoder Reranking",
      "Map-Reduce RAG",
      "Real Benchmark Numbers",
      "SSE Streaming",
      "Production Architecture"
    ],
    github: "https://github.com/poornachandran2006/neural-search-engine",
    liveDemo: " https://neural-search-engine-six.vercel.app "
  },
  secondary: {
    badge: "Live on AWS",
    tags: ["5G / Telecom", "Simulation", "ML/RL", "Full Stack", "Cloud"],
    title: "5G Network Digital Twin",
    problem:
      "Deploying and stress-testing 5G radio networks requires expensive physical infrastructure. Network engineers have no safe way to predict cell congestion, validate load-balancing strategies, or observe emergent interference patterns before a single antenna goes live.",
    solution:
      "Built a full-stack 5G Network Digital Twin that simulates 3 gNB base stations and 20 mobile UEs on a 1 km × 1 km urban grid using real 3GPP physics. An ML ensemble (LSTM + XGBoost) predicts cell congestion 30 seconds ahead, a PPO reinforcement learning agent optimises load balancing in real time, and every KPI is streamed live to a React dashboard — all deployed on AWS EC2 with Docker Compose.",
    architecture: [
      "SimPy Physics Engine",
      "KPI Aggregator",
      "LSTM + XGBoost Ensemble",
      "SHAP Explainability",
      "PPO RL Agent",
      "Isolation Forest Anomaly",
      "FastAPI WebSocket",
      "React Live Dashboard"
    ],
    pipeline: {
      label: "End-to-End Data & Inference Pipeline",
      steps: [
        { step: "01", name: "Physics Simulation", detail: "SimPy discrete-event loop; 3GPP path loss (α=3.5, f=3.5 GHz), SINR per UE per tick" },
        { step: "02", name: "Mobility Model", detail: "Random Waypoint mobility; UE–gNB association by max SINR; handover triggered on SINR drop" },
        { step: "03", name: "KPI Engine", detail: "Per-tick: cell load %, throughput (Mbps), latency (ms), handover rate, PRB utilisation" },
        { step: "04", name: "Congestion Prediction", detail: "LSTM (seq=10, horizon=30 ticks) + XGBoost (60/40 blend); 18 features; trained on 10,000+ rows" },
        { step: "05", name: "SHAP Explainability", detail: "XGBoost feature importance via built-in get_score(); top drivers surfaced per prediction" },
        { step: "06", name: "Anomaly Detection", detail: "Isolation Forest on KPI streams; flags statistical outliers in cell load and SINR" },
        { step: "07", name: "RL Load Balancing", detail: "PPO agent (200K steps); 9-dim observation, Discrete(4) action space; reward clipped to [-1,1]" },
        { step: "08", name: "Live Streaming", detail: "FastAPI WebSocket broadcasts simulation state every tick; React dashboard updates in real time" }
      ]
    },
    techStack: [
      "Python 3.11",
      "SimPy",
      "NumPy",
      "PyTorch (LSTM)",
      "XGBoost",
      "Stable-Baselines3 (PPO)",
      "Gymnasium",
      "SHAP",
      "Scikit-learn (IsolationForest)",
      "FastAPI",
      "WebSocket",
      "React 18",
      "Vite",
      "Recharts",
      "D3.js",
      "TailwindCSS",
      "Docker Compose",
      "Nginx",
      "AWS EC2"
    ],
    features: [
      "Real 3GPP physics — path loss exponent 3.5 at 3.5 GHz, per-UE SINR computed every simulation tick",
      "Random Waypoint mobility model; SINR-driven handover between 3 gNB base stations",
      "10,000+ row KPI dataset auto-generated with synthetic congestion injection for ML training",
      "LSTM (hidden=64, 2 layers, dropout=0.3) + XGBoost ensemble (60/40 blend) predicts congestion 30 s ahead",
      "SHAP explainability panel shows which KPIs drive each congestion prediction",
      "Isolation Forest anomaly detector flags statistical outliers across all KPI streams in real time",
      "PPO reinforcement learning agent (200K steps) with reward clipping to prevent NaN divergence",
      "A/B test panel compares PPO agent vs. rule-based baseline across episodes",
      "FastAPI WebSocket streams live simulation state to the React dashboard every tick",
      "8-panel React dashboard: Overview, Network Map, KPIs, Predictions, SHAP, Anomaly, A/B Test, RL Agent",
      "Fully containerised with Docker Compose (backend + Nginx/React); systemd auto-restart on reboot",
      "Deployed live on AWS EC2 (Mumbai, ap-south-1) — accessible via public IP"
    ],
    benchmarks: {
      label: "Model Performance",
      metrics: [
        { name: "Ensemble F1", value: "≥ 0.85", description: "LSTM + XGBoost congestion classification on held-out test set" },
        { name: "Prediction Horizon", value: "30 s", description: "Congestion predicted 30 ticks (seconds) ahead of actual threshold breach" },
        { name: "Anomaly Precision", value: "IsolationForest", description: "Unsupervised outlier detection on live KPI streams with no labelled data required" }
      ]
    },
    config: {
      label: "Key Simulation & ML Configuration",
      values: [
        { key: "Grid", value: "1,000 m × 1,000 m urban, 3 gNB + 20 UEs" },
        { key: "Sim duration", value: "10,800 ticks (3 hours simulated time)" },
        { key: "Path loss", value: "α = 3.5, f = 3.5 GHz, noise = −104 dBm" },
        { key: "gNB TX power", value: "43 dBm, antenna gain 15 dB, max PRB 100" },
        { key: "LSTM", value: "seq=10, horizon=30, hidden=64, layers=2, dropout=0.3, 18 features" },
        { key: "PPO", value: "200K steps, obs-dim=9, Discrete(4) actions, reward clipped [-1, 1]" },
        { key: "Congestion thresholds", value: "Warning ≥ 70% PRB, Critical ≥ 90% PRB" },
        { key: "Deployment", value: "AWS EC2 c7i-flex.large (2 vCPU, 4 GB RAM), Docker Compose, Nginx" }
      ]
    },
    highlights: [
      "Real 3GPP Physics",
      "LSTM + XGBoost Ensemble",
      "PPO RL Agent",
      "SHAP Explainability",
      "Live WebSocket Dashboard",
      "AWS EC2 Deployment"
    ],
    github: "https://github.com/poornachandran2006/5G_Digital_Twin",
    liveDemo: "http://13.207.84.24/"
  }
};

export const experience = {
  label: "Experience",
  heading: "Professional Journey",
  timeline: [
    {
      period: "Jun 2026 — Present",
      role: "Platforms & DevOps Intern",
      company: "Spaceborn Beyond Autonomous (Remote)",
      description: [
        "Managed Docker containerized deployment of PHP and Apache applications on Render behind Cloudflare CDN",
        "Implemented security hardening through HTTP security headers, server configuration, and information disclosure prevention",
        "Performed security assessments and remediated vulnerabilities related to authentication, session management, and application security",
        "Implemented CI/CD security auditing and deployment best practices for production environments"
      ],
      techStack: [
        "Docker",
        "Render",
        "Cloudflare",
        "Apache",
        "PHP",
        "MongoDB"
      ]
    },
    {
      period: "Dec 2025 — Jan 2026",
      role: "Web Development Intern",
      company: "ShadowFox (Remote)",
      description: [
        "Built and deployed a responsive portfolio web application using React and Tailwind CSS",
        "Implemented modular component architecture for maintainable and scalable frontend development",
        "Optimized UI performance and ensured cross-browser compatibility",
        "Deployed applications using Git-based workflows and modern deployment pipelines"
      ],
      techStack: [
        "React",
        "Tailwind CSS",
        "JavaScript",
        "Git",
        "Vercel",
        "CI/CD"
      ]
    }
  ]
};

export const education = {
  label: "Education",
  heading: "Academic Background",
  degree: "Bachelor of Engineering (Computer and Communication Engineering)",
  institution: "Amrita vishwa Vidyapeetham",
  year: "2024 — 2028",
  coursework: ["Data Structures", "Algorithms", "AI/ML", "Computer Networks", "Database Systems"],
  quote: "Engineering is not just about writing code — it's about designing systems that solve real problems reliably.",
  author: "Poornachandran"
};

export const contact = {
  label: "Contact",
  heading: "Let's Build Something Together.",
  subtext: "I'm open to full-time roles, internships, freelance projects, and research collaborations in AI and full stack engineering.",
  email: "poorna2006poorna@gmail.com",
  github: "https://github.com/poornachandran2006",
  linkedin: "https://www.linkedin.com/in/poornachandran2006",
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
    mailto: "poorna2006poorna@gmail.com"
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
    { icon: "Github", url: "https://github.com/poornachandran2006" },
    { icon: "Linkedin", url: "https://www.linkedin.com/in/poornachandran2006" },
    { icon: "Mail", url: "mailto:poorna2006poorna@gmail.com" }
  ],
  copyright: "© 2025 Poornachandran. Built with React & Tailwind CSS."
};