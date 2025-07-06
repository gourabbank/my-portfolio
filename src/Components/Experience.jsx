/**
 * @copyright 2025 Gourab Bank
 * @license Apache-2.0
 */

const experiences = [
  {
  role: "Lead Full Stack Developer",
  company: "Zenziee, Cleveland, Ohio",
  period: "May 2025 – Present",
  stack: ["React.js", "Golang", "PostgreSQL", "Microservices", "SEO", "Performance Optimization"],
  description: [
  "Rebuilt public-facing website using React.js, improving SEO score by 2x and reducing Time to Interactive by 60%, increasing user engagement and daily sessions.",
  "Designed and deployed Golang-based microservices to handle 20K+ daily requests with sub-200ms latency, enabling a modular, high-availability production system.",
  "Architected optimized PostgreSQL schemas with normalization and custom indexing, improving query performance under load by 50%."
]
},
  {
  role: "Software Developer",
  company: "iConsult Collaborative, Syracuse, New York",
  period: "August 2024 – May 2025",
  stack: ["Flask", "AWS Lambda", "MFCC", "WIX", "Render", "Microservices", "Audio Analytics"],
  description: [
  "Architected a music similarity service using MFCC and Flask on AWS Lambda, supporting 5K+ concurrent users with sub-1s response time.",
  "Integrated WIX frontend with containerized Flask microservices via Render, reducing deployment time by 30% and improving full-stack agility.",
  "Delivered audio analytics APIs using MFCC fingerprinting, enabling real-time feedback and seamless UI integration."
]
  },
  {
  role: "Software Developer",
  company: "SocialTechLabs, Cleveland, Ohio",
  period: "May 2024 – January 2025",
  stack: ["Golang", "AWS SNS", "Redis", "Lambda", "OAuth2", "JWT", "Real-time Systems"],
  description: [
  "Built cloud-native Golang microservices for a mental health app, ensuring >99.9% uptime and scalable push notification delivery via AWS SNS.",
  "Reduced backend latency by 35% by integrating Redis and AWS Lambda for event-driven processing and async workflows.",
  "Implemented OAuth2 and JWT-based authentication, contributing full-stack features for real-time sync and secure user access."
]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="section mt-1">
      <div className="container">
        <h2 className="text-2xl font-semibold text-white mb-8">Experience</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {experiences.map((exp, idx) => (
            <div key={idx} className="bg-zinc-800 p-5 rounded-2xl shadow-lg hover:scale-[1.02] transition-all">
              <h3 className="text-lg font-semibold text-white mb-1">{exp.role}</h3>
              <p className="text-sm text-zinc-400 mb-2">{exp.company} • {exp.period}</p>
              <p className="text-sm text-zinc-300 mb-4">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.stack.map((tag, i) => (
                  <span key={i} className="bg-zinc-700 text-sm px-2 py-1 rounded-md text-zinc-300">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};



export default Experience
