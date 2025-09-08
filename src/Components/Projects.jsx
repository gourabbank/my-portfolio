/**
 * @copyright 2025 Gourab Bank
 * @license Apache-2.0
 */

import ProjectCard from "./ProjectCard";

const works = [
  // TOP TIER - Professional Experience Projects
  {
    title: "CashSplash: Personal Finance Management App",
    tags: ["Kotlin", "Firebase", "Android Studio", "WorkManager", "MVVM", "Real-time Sync"],
    projectLink: "https://github.com/gourabbank/CashSplash",
    liveDemo: "", // Add when deployed
    imgSrc: "/images/cashsplash-preview.png",
    metrics: "30% user engagement increase, offline-first architecture",
    description: "Android budgeting app with real-time expense tracking and savings goals. Boosted user engagement by 30% through Firebase Authentication, push notifications, and LiveData-driven dashboards with MVVM architecture."
  },
  {
    title: "BillBuddy: Smart Group Expense Manager",
    tags: ["React.js", "Node.js", "PostgreSQL", "REST APIs", "MVC", "Agile"],
    projectLink: "https://github.com/gourabbank/BillBuddy",
    liveDemo: "https://billbuddy-demo.netlify.app",
    imgSrc: "/images/billbuddy-preview.png",
    metrics: "50+ features delivered, 40% faster dispute resolution",
    description: "Full-stack group expense platform with real-time bill splitting and payment settlement. Delivered 50+ Jira stories across 7 agile sprints, improving dispute resolution by 40% through automated validation logic."
  },
  {
    title: "Music Similarity Engine (iConsult Project)",
    tags: ["Flask", "AWS Lambda", "MFCC", "Machine Learning", "Serverless", "Audio Analytics"],
    projectLink: "https://github.com/gourabbank/music-similarity-engine",
    liveDemo: "", // Proprietary - no public demo
    imgSrc: "/images/music-engine-preview.png",
    metrics: "5K+ concurrent users, sub-1s response time",
    description: "Serverless music similarity service using MFCC and Flask on AWS Lambda. Supports 5K+ concurrent users with sub-1-second response times and intelligent caching for real-time audio fingerprinting."
  },
  {
    title: "Decentralized Banking System",
    tags: ["React.js", "Solidity", "Ethereum", "Smart Contracts", "MetaMask", "DeFi"],
    projectLink: "https://github.com/gourabbank/Decentralized-Banking-Services",
    liveDemo: "https://defi-banking-demo.vercel.app",
    imgSrc: "/images/defi-banking-preview.png",
    metrics: "IEEE published, 1000+ test transactions, 99.9% uptime",
    description: "Full-stack DeFi platform with Ethereum smart contracts for peer-to-peer payments and NFT trading. Published at IEEE conference, processing 1000+ test transactions with optimized gas usage and 99.9% availability."
  },

  // SECOND TIER - Strong Technical Projects
  {
    title: "Loan Approval ML System",
    tags: ["Python", "XGBoost", "Random Forest", "Machine Learning", "Data Science", "Finance"],
    projectLink: "https://github.com/gourabbank/loan-approval-ml",
    liveDemo: "https://loan-predictor-app.herokuapp.com",
    imgSrc: "/images/loan-ml-preview.png",
    metrics: "92% accuracy, 60% faster processing, 10K+ records analyzed",
    description: "ML-powered loan approval system achieving 92% accuracy using ensemble methods. Trained on 10K+ loan records, reducing manual review time by 60% while maintaining regulatory compliance."
  },
  {
    title: "AWS Cloud Attendance System",
    tags: ["AWS", "Python", "Cloud Computing", "MySQL", "Serverless", "Real-time"],
    projectLink: "https://github.com/gourabbank/DigitalAttendanceSystem",
    liveDemo: "https://attendance-tracker.aws.com", // Replace with actual
    imgSrc: "/images/attendance-aws-preview.png",
    metrics: "99.9% availability, 80% reduction in manual processing",
    description: "Cloud-native attendance tracking system on AWS with real-time updates. Achieved 99.9% availability and 80% reduction in manual processing through scalable cloud architecture."
  },
  {
    title: "Walmart Sales Forecasting",
    tags: ["Python", "ARIMA", "Time Series", "Data Analytics", "Pandas", "Retail Intelligence"],
    projectLink: "https://github.com/gourabbank/walmart-sales-analysis",
    liveDemo: "", // Data analysis project - no web demo
    imgSrc: "/images/walmart-analysis-preview.png",
    metrics: "47 stores analyzed, 15% revenue growth opportunities identified",
    description: "Analyzed multi-year Walmart sales data across 47 stores using ARIMA time series modeling. Identified seasonal patterns and predicted 15% revenue growth opportunities for strategic business planning."
  },

  // THIRD TIER - Showcase Diversity
  {
    title: "AI Text Summarization Engine",
    tags: ["Python", "NLTK", "NLP", "Natural Language Processing", "Text Analytics"],
    projectLink: "https://github.com/gourabbank/text-summarizer",
    liveDemo: "https://text-summarizer-nlp.streamlit.app",
    imgSrc: "/images/text-summarizer-preview.png",
    metrics: "60% content reduction, keyword frequency optimization",
    description: "NLP system using NLTK and heap structures to automatically summarize articles by 60%. Ranks sentences via keyword frequency scoring for efficient content processing."
  },
  {
    title: "Real Estate Price Predictor",
    tags: ["Python", "Machine Learning", "Regression", "Scikit-learn", "Real Estate"],
    projectLink: "https://github.com/gourabbank/house-price-prediction",
    liveDemo: "https://house-price-ml.herokuapp.com",
    imgSrc: "/images/house-price-preview.png",
    metrics: "85% prediction accuracy, location-based modeling",
    description: "ML model predicting house prices based on size, location, and market features using advanced regression algorithms. Achieved 85% accuracy for real estate investment decisions."
  }
];

// Project filtering for different job types
const getProjectsForRole = (roleType) => {
  const roleFilters = {
    'backend': [0, 2, 5, 6], // CashSplash, Music Engine, AWS Attendance, Walmart
    'fullstack': [0, 1, 3, 4], // CashSplash, BillBuddy, DeFi Banking, ML System
    'ml': [2, 4, 6, 7], // Music Engine, ML System, Walmart, Text Summarization
    'frontend': [1, 3, 8], // BillBuddy, DeFi Banking, House Price
    'cloud': [2, 5, 1] // Music Engine, AWS Attendance, BillBuddy
  };
  
  return roleFilters[roleType] ? 
    roleFilters[roleType].map(index => works[index]) : 
    works;
};

const Projects = ({ roleType = 'all', maxProjects = 9 }) => {
  const displayProjects = roleType === 'all' ? 
    works.slice(0, maxProjects) : 
    getProjectsForRole(roleType);

  return (
    <section id="work" className="">
      <div className="container">
        <h2 className="text-2xl font-semibold text-white mb-6 mt-14 reveal-up">
          Featured Projects
          {roleType !== 'all' && (
            <span className="text-sm text-gray-400 ml-2">
              ({roleType.charAt(0).toUpperCase() + roleType.slice(1)} Focus)
            </span>
          )}
        </h2>

        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(320px,1fr))]">
          {displayProjects.map(({ imgSrc, title, tags, projectLink, liveDemo, metrics, description }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              liveDemo={liveDemo}
              metrics={metrics}
              description={description}
              classes="reveal-up"
            />
          ))}
        </div>

        {works.length > maxProjects && roleType === 'all' && (
          <div className="text-center mt-8">
            <button className="btn btn-secondary reveal-up">
              View All Projects ({works.length})
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;