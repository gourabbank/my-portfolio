/**
 * @copyright 2025 Gourab Bank
 * @license Apache-2.0
 */

import Skills from "./Skills";

const aboutItems = [
  /** 
  {
    label: 'Project done',
    number: 45
  },
  {
    label: 'Years of experience',
    number: 1
  } */
];


const About = () => {
  return (
    <section 
      id="about"
      className="section"
    >

      <div className="container">
      <h2 className="text-2xl font-semibold text-white mb-6 mt-14 ">About Me</h2>
        <div className="bg-zinc-800 p-7 rounded-2xl md:p-12 mb-0 ">
          <p className="text-zinc-300 mv-4 md:mb-4 md:text-xl md:max-w-[60ch]:">
          Hi, Hi, I’m Gourab Bank, a Master’s student in Computer Science at Syracuse University 
          with hands-on experience in cloud-native systems, full-stack development, and backend engineering. 
          I’ve interned at iConsult Collaborative and SocialTechLabs, where I built scalable systems using Golang, 
          Flask, AWS Lambda, and Redis, and developed real-time microservices with robust authentication (OAuth2, JWT). 
          I’ve also led full-stack projects like CashSplash and BillBuddy, combining React, Kotlin, Node.js, 
          PostgreSQL, and cloud platforms like AWS, GCP, and Firebase. I’m passionate about shipping impactful software, 
          and I’m actively seeking SDE, backend, or cloud engineering roles where I can drive value through clean, scalable, 
          and secure systems.
          </p>


          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {
              aboutItems.map(({label, number},key) => (
                <div key={key}>
                  <div className="flex items-center md:mb-2">
                    <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                    <span className="text-sky-400 font-semibold md:text-3xl">+</span>
                  </div>

                  <p className="text-sm text-zinc-400">{label}</p>
                </div>
              ))
            }

          </div>

        </div>
        {/* <Skills /> */}
      </div>


    </section>
  )
}

export default About