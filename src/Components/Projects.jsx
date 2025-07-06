/**
 * @copyright 2025 Gourab Bank
 * @license Apache-2.0
 */

import ProjectCard from "./ProjectCard";

const works = [
  {
    title: "CashSplash: Personal Finance Management App",
    tags: ["Kotlin", "Firebase", "Room", "Jetpack", "WorkManager", "Firestore", "Budget Tracking"],
    projectLink: "https://github.com/gourabbank/CashSplash",
    description:
      "Developed an Android budgeting app with real-time budget tracking, savings goals, offline sync, and financial alerts using Firestore and Firebase Messaging."
  },
  {
    title: "BillBuddy: Smart Group Expense Manager",
    tags: ["React.js", "PostgreSQL", "Express.js", "MVC", "Node.js", "Analytics"],
    projectLink: "https://github.com/gourabbank/BillBuddy",
    description:
      "Led development of a scalable group expense platform with dynamic bill splitting, OTP-based authentication, and real-time settlement logic. Built React dashboards and a Node.js backend."
  },
  {
    title: "Scalable Decentralized Banking System",
    tags: ["C++", "Java", "Solidity", "React.js", "AWS", "Blockchain", "Smart Contracts"],
    projectLink: "https://github.com/gourabbank/Decentralized-Banking-Services",
    description:
      "Created a blockchain-based banking system with Solidity smart contracts and AWS Lambda for off-chain processing, achieving 10K+ TPS and 99.99% availability."
  },
  {
    title: "AI-Powered E-Learning Platform",
    tags: ["Node.js", "Express.js", "MongoDB", "JWT", "RBAC", "AWS", "Caching", "EdTech"],
    projectLink: "https://github.com/gourabbank/AI-E-Learning-Platform", // placeholder — update if needed
    description:
      "Engineered a cloud-first education system for 100K+ students with JWT-based RBAC, self-assessment tools, and optimized MongoDB + caching for 50% faster load times."
  }
];

const Projects = () => {
  return (
    <section id="work" className="">
      <div className="container">
        <h2 className="text-2xl font-semibold text-white mb-6 mt-14 reveal-up">Featured Capstone Projects</h2>

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
