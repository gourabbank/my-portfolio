import React from "react";

const skills = [
  {
    category: "Languages & Frameworks",
    items: [
      "C++",
      "Java",
      "Golang",
      "JavaScript",
      "Python",
      "Solidity",
      "React.js",
      "TypeScript",
      "HTML5"
    ],
  },
  {
    category: "Databases & Cloud Platforms",
    items: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Redis",
      "AWS (Lambda, S3, API Gateway, SNS, EC2, ECS, RDS, CloudWatch, IAM, SQS)",
      "Firebase",
      "Render",
      "Google Cloud (Cloud Functions, Firestore)",
      "Azure"
    ],
  },
  {
    category: "Backend & DevOps",
    items: [
      "RESTful APIs",
      "Microservices Architecture",
      "CI/CD (GitHub Actions)",
      "Docker",
      "Kubernetes",
      "Terraform",
      "NGINX",
      "Git",
      "Jenkins",
      "CloudFormation",
      "Helm"
    ],
  },
  {
    category: "Distributed Systems",
    items: [
      "Caching Strategies",
      "Load Balancing",
      "Rate Limiting",
      "Event-Driven Architecture",
      "Horizontal Scaling",
      "Scalable Backend Development",
      "Auto Scaling Groups"
    ],
  },
  {
    category: "Security & Authentication",
    items: [
      "OAuth2.0",
      "JWT",
      "TLS",
      "Role-Based Access Control (RBAC)",
      "Secure API Design",
      "IAM Policies"
    ],
  },
  {
    category: "Tools & Platforms",
    items: [
      "Visual Studio Code",
      "Postman",
      "Swagger",
      "Figma",
      "Agile/Scrum",
      "Jira",
      "Notion",
      "GitHub",
      "Datadog",
      "Prometheus",
      "Grafana",
      "ELK Stack"
    ],
  },
];

const accentColors = [
  "text-sky-400",
  "text-green-400",
  "text-yellow-400",
  "text-pink-400",
  "text-purple-400",
  "text-orange-400",
];

const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="container">
      <h2 className="text-2xl font-semibold text-white mb-6 mt-14 ">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, idx) => (
            <div
              key={skill.category}
              className="bg-zinc-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
            >
              <h3 className={`text-lg font-semibold mb-4 ${accentColors[idx % accentColors.length]}`}>{skill.category}</h3>
              <ul className="space-y-2 pl-2">
                {skill.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-zinc-300">
                    <span className="inline-block w-2 h-2 bg-sky-400 rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 