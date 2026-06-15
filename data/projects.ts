export type Project = {
  id: string;
  title: string;
  track: string;
  summary: string;
  role: string;
  url: string;
  actionLabel: string;
  media: {
    src: string;
    alt: string;
  };
  metrics: { label: string; value: string }[];
  tags: string[];
  accent: string;
};

export const projects: Project[] = [
  {
    id: "quran-search",
    title: "E-Vector Qur'an Search System",
    track: "LLM / NLP",
    summary:
      "A semantic search workflow for Qur'an verses using NLP, vector retrieval, and prompt optimization.",
    role: "NLP retrieval system",
    url: "https://play.google.com/store/apps/details?id=com.reflectq.app",
    actionLabel: "View on Google Play",
    media: {
      src: "/assets/project-reviews/e-vector-quran.jpeg",
      alt: "E-Vector Qur'an Search System interface review",
    },
    metrics: [
      { label: "Accuracy", value: "80%" },
      { label: "Verse relevance", value: "+17.90%" },
      { label: "Prompt efficiency", value: "+79.77%" },
      { label: "Response time", value: "Up to 50%" },
    ],
    tags: ["NLP", "Python", "Vector Search", "AI"],
    accent: "terracotta",
  },
  {
    id: "mouse-detection",
    title: "Mouse Movement Detection",
    track: "Computer Vision",
    summary:
      "A real-time computer vision detector for tracking mouse movement with YOLOv11 and OpenCV.",
    role: "Detection pipeline",
    url: "https://drive.google.com/file/d/10ovEOy7QDjAHVGenbucbbWKvVUdPtFfG/view?usp=sharing",
    actionLabel: "Watch Project Demo",
    media: {
      src: "/assets/project-reviews/mouse-movement-detection.png",
      alt: "Mouse Movement Detection application review",
    },
    metrics: [
      { label: "Accuracy", value: "99%" },
      { label: "Training", value: "100 epochs" },
      { label: "Dataset", value: "300+ images" },
      { label: "Interface", value: "Custom GUI" },
    ],
    tags: ["YOLO", "OpenCV", "Python", "Detection"],
    accent: "olive",
  },
  {
    id: "tuna-classification",
    title: "Tuna Fish Classification",
    track: "Computer Vision",
    summary:
      "An image classification system for tuna species using annotated datasets and a deep learning workflow.",
    role: "Classification model",
    url: "https://drive.google.com/drive/folders/1U2HB-__gMRJ2gHjabAPxzq-p0gnOccck?usp=sharing",
    actionLabel: "View Project Files",
    media: {
      src: "/assets/project-reviews/tuna-fish-classification.jpg",
      alt: "Tuna Fish Classification detection result",
    },
    metrics: [
      { label: "Accuracy", value: "80%" },
      { label: "Annotated images", value: "1,500+" },
    ],
    tags: ["TensorFlow", "YOLO", "Roboflow", "Classification"],
    accent: "blue",
  },
  {
    id: "chatbot-optimization",
    title: "Mira Assistant - Enterprise RAG Workflow Optimization",
    track: "AI Application",
    summary:
      "Developed an end-to-end autonomous customer support agent and dynamic knowledge-base pipeline using n8n orchestration and JavaScript logic.",
    role: "Enterprise RAG automation",
    url: "https://migrasi.id/",
    actionLabel: "Visit Live Website",
    media: {
      src: "/assets/project-reviews/chatbot-integration.png",
      alt: "AI chatbot integration workflow review",
    },
    metrics: [
      { label: "Workflow orchestration", value: "n8n + JS" },
      { label: "Document chunk size", value: "1,000" },
      { label: "Vector database", value: "Pinecone" },
      { label: "Agent model", value: "GPT-4o-mini" },
    ],
    tags: ["AI", "Chatbot", "NLP", "Web Integration"],
    accent: "rose",
  },
  {
    id: "student-performance",
    title: "Student Performance Prediction",
    track: "Machine Learning",
    summary:
      "A regression workflow predicting exam scores from student behavior and learning factors.",
    role: "Prediction model",
    url: "https://github.com/garr007/PredictiveAnalysisStudentPerformance",
    actionLabel: "View Source on GitHub",
    media: {
      src: "/assets/project-reviews/student-performance.png",
      alt: "Student Performance Prediction application review",
    },
    metrics: [
      { label: "Dataset", value: "6,607 rows" },
      { label: "Features", value: "20" },
      { label: "Lowest MSE", value: "3.0" },
    ],
    tags: ["Machine Learning", "Python", "Regression", "EDA"],
    accent: "ochre",
  },
  {
    id: "databel-churn",
    title: "Customer Churn Analysis - Databel",
    track: "Analytics",
    summary:
      "A telecom churn analytics suite built in Tableau to surface KPIs, segments, and retention signals.",
    role: "BI dashboard",
    url: "https://public.tableau.com/app/profile/muhammad.tegar.abhiram/viz/analyzing_17024620416550/Story",
    actionLabel: "Explore Tableau Dashboard",
    media: {
      src: "/assets/project-reviews/customer-churn.png",
      alt: "Customer Churn Analysis Tableau dashboard review",
    },
    metrics: [
      { label: "Dashboards", value: "4 + 1 story" },
      { label: "Analysis", value: "Calculated fields" },
      { label: "Workflow", value: "EDA exploration" },
    ],
    tags: ["Tableau", "Data Analysis", "BI", "Visualization"],
    accent: "plum",
  },
  {
    id: "dashboard-analytics-automation",
    title: "Dashboard Analytics Automation",
    track: "AI Analytics Automation",
    summary:
      "An end-to-end analytics ingestion and reporting system that automates data intake, trend analysis, executive reporting, and multi-channel delivery.",
    role: "Analytics automation workflow",
    url: "https://github.com/garr007",
    actionLabel: "View Related Work on GitHub",
    media: {
      src: "/assets/project-reviews/dashboard-analytics-automation.png",
      alt: "Dashboard Analytics Automation n8n workflow",
    },
    metrics: [
      { label: "Workflow orchestration", value: "n8n" },
      { label: "Report ingestion", value: "Looker Studio" },
      { label: "Context storage", value: "Google Sheets" },
      { label: "Delivery channels", value: "Email + WA" },
    ],
    tags: ["n8n", "LangChain", "Looker Studio", "Google Sheets", "WhatsApp"],
    accent: "sage",
  },
  {
    id: "infographic-content-automation",
    title: "Infographic Content Automation",
    track: "Generative AI Automation",
    summary:
      "An autonomous social content pipeline that transforms live regional trends into generated infographic assets and scheduled multi-platform posts.",
    role: "Content automation workflow",
    url: "https://github.com/garr007",
    actionLabel: "View Related Work on GitHub",
    media: {
      src: "/assets/project-reviews/infographic-content-automation.png",
      alt: "Infographic Content Automation n8n workflow",
    },
    metrics: [
      { label: "Trend source", value: "Google Trends" },
      { label: "LLM orchestration", value: "Gemini" },
      { label: "Image model", value: "FLUX.1" },
      { label: "Publishing API", value: "Buffer" },
    ],
    tags: ["n8n", "Gemini", "FLUX.1", "Hugging Face", "ImgBB", "Buffer"],
    accent: "lavender",
  },
];
