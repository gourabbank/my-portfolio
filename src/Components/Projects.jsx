/**
 * @copyright 2025 Gourab Bank
 * @license Apache-2.0
 */

import ProjectCard from "./ProjectCard";

const works = [
  {
    title: "Decentralized Banking System",
    tags: ["React.js", "Solidity", "Truffle", "Ganache", "Ethereum", "Blockchain", "Smart Contracts"],
    projectLink: "https://github.com/gourabbank/Decentralized-Banking-Services", // add if hosted
    description:
      "Built a full-stack decentralized finance platform with smart contracts on Ethereum using Solidity. Enabled secure lending-borrowing with interest logic and maintained high-availability backend linked to the blockchain."
  },
  {
    title: "Home Budget Management System",
    tags: ["Java", "Kotlin", "Android Studio", "MySQL", "Cloud Sync", "Finance", "Mobile App"],
    projectLink: "", // add link if hosted
    description:
      "Developed a mobile budgeting app following the 50-30-20 rule with cloud sync and real-time expenditure visualization; designed UI and integrated database logic."
  },
  {
    title: "E-Learning Website",
    tags: ["PHP", "HTML", "MySQL", "Self-Assessment", "Modular Learning", "Web App"],
    projectLink: "", // add link if hosted
    description:
      "Engineered a modular e-learning portal with PHP and MySQL supporting lecture modules, test assessments, and admin tools for dynamic content uploads."
  },
  {
    title: "Loan Approval System",
    tags: ["Python", "XGBoost", "Random Forest", "Linear Regression", "Machine Learning", "Finance"],
    projectLink: "", // add link if hosted
    description:
      "Built a predictive ML model to determine loan approval using Random Forest, XGBoost, and Linear Regression; trained on demographic and credit history data."
  },
  {
    title: "NFT Marketplace",
    tags: ["React.js", "Truffle", "Solidity", "Ganache", "Metamask", "Blockchain", "NFT"],
    projectLink: "", // add link if hosted
    description:
      "Launched an NFT trading platform for Pokémon-themed cards; implemented and deployed smart contracts to enable decentralized buy-sell operations."
  },
  {
    title: "Text Summarization",
    tags: ["Python", "NLTK", "NLP", "Heap", "Text Analytics"],
    projectLink: "", // add link if hosted
    description:
      "Developed a Python NLP system using NLTK and heap structures to summarize articles by 60%, ranking sentences via keyword frequency scoring."
  },
  {
    title: "Walmart Data Analysis",
    tags: ["Python", "ARIMA", "Linear Regression", "Time Series", "Retail", "Data Forecasting"],
    projectLink: "", // add link if hosted
    description:
      "Analyzed multi-year Walmart sales data across 47 stores and forecasted future sales using ARIMA and regression techniques for business insights."
  },
  {
    title: "Attendance System using AWS Cloud",
    tags: ["AWS", "Cloud Computing", "MySQL", "Python", "Cloud Database"],
    projectLink: "https://github.com/gourabbank/DigitalAttendanceSystem", // add link if hosted
    description:
      "Created a cloud-based attendance tracker using AWS with real-time updates; integrated user check-ins with cloud databases for centralized access."
  },
  {
    title: "Snake Game with Leaderboards",
    tags: ["C++", "Computer Graphics", "MySQL", "GameDev"],
    projectLink: "", // add link if hosted
    description:
      "Designed a classic snake game variant using graphics libraries with a real-time MySQL leaderboard for multiplayer score tracking."
  },
  {
    title: "Music Management System",
    tags: ["PHP", "MySQL", "DBMS", "Music Database"],
    projectLink: "", // add link if hosted
    description:
      "Created a music management portal to add songs, generate playlists, and manage genres with a PHP-MySQL backend and CRUD UI."
  },
  {
    title: "Ball Rolling Game",
    tags: ["Unity", "C#", "3D Game", "Game Engine"],
    projectLink: "", // add link if hosted
    description:
      "Developed a 3D infinite ball-rolling game in Unity with dynamic obstacle generation, built to test physics handling and gameplay mechanics."
  },
  {
    title: "Paws Hunger",
    tags: ["Social Good", "Animal Welfare", "NGO Project"],
    projectLink: "", // add link if hosted
    description:
      "Launched a community app for managing stray animal feeding and vaccination drives, aimed at improving animal welfare and awareness."
  },
  {
    title: "House Price Prediction System",
    tags: ["Python", "Machine Learning", "Regression", "AI", "Real Estate"],
    projectLink: "", // add link if hosted
    description:
      "Built an ML model to predict house prices based on features like size and location using regression algorithms."
  }
];

const Projects = () => {
  return (
    <section id="work" className="">
      <div className="container">
        <h2 className="text-2xl font-semibold text-white mb-6 mt-14 reveal-up">Projects</h2>

        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,1fr))]">
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
