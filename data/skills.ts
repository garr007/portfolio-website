export type SkillCategory =
  | "Programming"
  | "AI & ML"
  | "Data & BI"
  | "Engineering";

export type Skill = {
  name: string;
  category: SkillCategory;
  score: number;
  usedFor: string;
  evidence: string;
  projectId?: string;
  extras?: string[];
};

export const skillCategories = [
  "All",
  "Programming",
  "AI & ML",
  "Data & BI",
  "Engineering",
] as const;

export const skills: Skill[] = [
  { name: "Python", category: "Programming", score: 5, usedFor: "Machine learning, computer vision, analytics, and automation", evidence: "Core language across predictive modeling, semantic search, and vision projects", projectId: "student-performance", extras: ["Pandas", "Streamlit", "OpenCV"] },
  { name: "SQL", category: "Programming", score: 4, usedFor: "Data retrieval, transformation, and relational analysis", evidence: "Advanced SQL certification and analytics workflow experience", extras: ["MySQL", "DBMS"] },
  { name: "JavaScript", category: "Programming", score: 4, usedFor: "Workflow logic and production web integrations", evidence: "Custom logic for the Mira Assistant ingestion and RAG workflow", projectId: "chatbot-optimization", extras: ["API Integration", "Automation Logic"] },
  { name: "TypeScript", category: "Programming", score: 4, usedFor: "Reliable frontend applications", evidence: "Typed Next.js product development" },
  { name: "R", category: "Programming", score: 3, usedFor: "Statistical analysis and data visualization", evidence: "Applied through data science, regression, statistics, and ggplot2 training", extras: ["ggplot2", "Regression"] },
  { name: "TensorFlow", category: "AI & ML", score: 5, usedFor: "Deep learning model development", evidence: "Image classification and machine learning experimentation", projectId: "tuna-classification" },
  { name: "Machine Learning", category: "AI & ML", score: 5, usedFor: "Predictive modeling and model evaluation", evidence: "Student performance regression with a lowest MSE of 3.0", projectId: "student-performance", extras: ["Regression", "SVM", "Feature Engineering"] },
  { name: "Neural Networks", category: "AI & ML", score: 5, usedFor: "Computer vision and representation learning", evidence: "YOLO detection, segmentation, and image classification experiments", projectId: "mouse-detection" },
  { name: "YOLO v8/v11", category: "AI & ML", score: 5, usedFor: "Real-time object detection and instance segmentation", evidence: "99% mouse tracking accuracy and 80% tuna classification accuracy", projectId: "mouse-detection", extras: ["Ultralytics", "Object Detection", "Segmentation"] },
  { name: "NLP & Vector Search", category: "AI & ML", score: 4, usedFor: "Semantic retrieval and relevance optimization", evidence: "80% search accuracy in the E-Vector Qur'an Search System", projectId: "quran-search", extras: ["BERT Embeddings", "FAISS", "Semantic Search"] },
  { name: "RAG & LLM Agents", category: "AI & ML", score: 4, usedFor: "Grounded conversational AI and knowledge retrieval", evidence: "Enterprise customer support agent with automated knowledge-base ingestion", projectId: "chatbot-optimization", extras: ["GPT-4o-mini", "Prompt Engineering", "Window Memory"] },
  { name: "Generative AI", category: "AI & ML", score: 4, usedFor: "Automated content analysis and asset generation", evidence: "Autonomous trend-to-infographic content pipeline", projectId: "infographic-content-automation", extras: ["Gemini", "FLUX.1", "Hugging Face"] },
  { name: "Tableau", category: "Data & BI", score: 5, usedFor: "Executive dashboards and storytelling", evidence: "Four dashboards and one Databel story", projectId: "databel-churn" },
  { name: "Pandas", category: "Data & BI", score: 5, usedFor: "Data cleaning, EDA, and feature work", evidence: "6,607-row student performance dataset", projectId: "student-performance", extras: ["Exploratory Data Analysis"] },
  { name: "Data Visualization", category: "Data & BI", score: 4, usedFor: "Communicating patterns and KPIs", evidence: "Tableau dashboards and analytical reports", projectId: "databel-churn" },
  { name: "Statistical Analysis", category: "Data & BI", score: 4, usedFor: "Evaluation and inference", evidence: "Regression and experiment evaluation", projectId: "student-performance" },
  { name: "Looker Studio", category: "Data & BI", score: 4, usedFor: "Automated analytics reporting and dashboard ingestion", evidence: "Report source for the Dashboard Analytics Automation workflow", projectId: "dashboard-analytics-automation", extras: ["Executive Reporting", "Trend Analysis"] },
  { name: "ETL & Data Pipelines", category: "Data & BI", score: 4, usedFor: "Ingestion, transformation, and scheduled synchronization", evidence: "Automated cloud document ingestion and CMS knowledge synchronization", projectId: "chatbot-optimization", extras: ["Pentaho", "Talend", "Google Sheets"] },
  { name: "Database Management", category: "Data & BI", score: 4, usedFor: "Relational and vector data storage", evidence: "Experience with DBMS, MySQL, FAISS, and Pinecone-backed applications", extras: ["MySQL", "DBMS", "Vector Stores"] },
  { name: "Next.js", category: "Engineering", score: 4, usedFor: "Production-ready web products", evidence: "Application interfaces and portfolio delivery" },
  { name: "Streamlit", category: "Engineering", score: 4, usedFor: "Rapid ML product interfaces", evidence: "Interactive model demonstrations" },
  { name: "OpenCV", category: "Engineering", score: 4, usedFor: "Real-time video and image processing pipelines", evidence: "Bounding-box visualization and mouse movement tracking", projectId: "mouse-detection", extras: ["Computer Vision", "GUI"] },
  { name: "n8n & Automation", category: "Engineering", score: 5, usedFor: "AI, analytics, and content workflow orchestration", evidence: "Three end-to-end automation workflows spanning RAG, reporting, and publishing", projectId: "chatbot-optimization", extras: ["Scheduled Triggers", "Conditional Routing", "LangChain"] },
  { name: "Roboflow", category: "Engineering", score: 4, usedFor: "Image annotation, preprocessing, and augmentation", evidence: "Curated computer vision datasets containing more than 1,500 images", projectId: "tuna-classification", extras: ["Dataset Curation", "Augmentation", "Annotation"] },
  { name: "Vector Databases", category: "Engineering", score: 4, usedFor: "Embedding storage and similarity retrieval", evidence: "FAISS semantic search and Pinecone enterprise RAG storage", projectId: "chatbot-optimization", extras: ["Pinecone", "FAISS", "OpenAI Embeddings"] },
  { name: "API Integration", category: "Engineering", score: 4, usedFor: "Connecting AI services, CMS platforms, and delivery channels", evidence: "Integrated CMS sync, LLM, image hosting, publishing, email, and WhatsApp services", projectId: "infographic-content-automation", extras: ["REST APIs", "Buffer", "ImgBB", "WhatsApp"] },
];
