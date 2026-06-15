export type Certification = {
  id: string;
  title: string;
  provider: string;
  file: string;
  logo?: string;
};

const providerLogos: Partial<Record<string, string>> = {
  Coursera: "/assets/logos/coursera.png",
  DataCamp: "/assets/logos/datacamp.png",
  "DBS Foundation": "/assets/logos/dbs-foundation.png",
  DQLab: "/assets/logos/dqlab.png",
  "EF SET": "/assets/logos/ef-set.png",
  HackerRank: "/assets/logos/hackerrank.png",
  "IBM SkillsBuild": "/assets/logos/ibm.png",
  "Indosat Ooredoo": "/assets/logos/indosat-ooredoo.jpg",
  Kalibrr: "/assets/logos/kalibrr.jpg",
};

const registry: [string, string][] = [
  ["AI for App Building", "Coursera"],
  ["AI for Brainstorming", "Coursera"],
  ["AI for Content Creation", "Coursera"],
  ["AI for Data Analysis", "Coursera"],
  ["AI for Research Insights", "Coursera"],
  ["AI for Writing and Communicating", "Coursera"],
  ["AI Fundamentals", "Coursera"],
  ["Analyzing Customer Churn in Tableau", "DataCamp"],
  ["Analyzing Data in Tableau", "DataCamp"],
  ["Connecting Data in Tableau", "DataCamp"],
  ["Creating Dashboards in Tableau", "DataCamp"],
  ["Data Analyst in Tableau", "DataCamp"],
  ["Introduction to Tableau", "DataCamp"],
  ["Machine Learning Level Mahir", "DBS Foundation"],
  ["Machine Learning Level Menengah", "DBS Foundation"],
  ["Data Science with R", "DQLab"],
  ["Introduction to Data Science with R", "DQLab"],
  ["Advanced Data Visualization with ggplot2", "DQLab"],
  ["Bekerja dengan Data Teks Menggunakan R", "DQLab"],
  ["Data Preparation with R", "DQLab"],
  ["Data Visualization with R", "DQLab"],
  ["R for Data Professional: Part 1", "DQLab"],
  ["R for Data Professional: Part 2", "DQLab"],
  ["R for Data Professional: Part 3", "DQLab"],
  ["R Fundamental", "DQLab"],
  ["Fundamental Data Visualization with R", "DQLab"],
  ["Regresi Linear dengan R", "DQLab"],
  ["Statistics with R", "DQLab"],
  ["EF SET English Certificate", "EF SET"],
  ["HackerRank Certifications Collection", "HackerRank"],
  ["CSS", "HackerRank"],
  ["Java Basic", "HackerRank"],
  ["Python Basic", "HackerRank"],
  ["SQL Advanced", "HackerRank"],
  ["SQL Basic", "HackerRank"],
  ["SQL Intermediate", "HackerRank"],
  ["AI Ethics", "IBM SkillsBuild"],
  ["Introduction to Artificial Intelligence", "IBM SkillsBuild"],
  ["Introduction to Generative AI", "IBM SkillsBuild"],
  ["Data Scientist Level Menengah", "Indosat Ooredoo"],
  ["Information Technology Talent Assessment", "Kalibrr"],
];

export const certifications: Certification[] = registry.map(
  ([title, provider], index) => ({
    id: `certificate-${index + 1}`,
    title,
    provider,
    file: `/certifications/certificate-${String(index + 1).padStart(2, "0")}.pdf`,
    logo: providerLogos[provider],
  }),
);

export const certificateProviders = [
  "All",
  ...Array.from(new Set(certifications.map((item) => item.provider))),
];
