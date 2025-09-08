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
          Software Engineer with expertise in building scalable cloud systems and full-stack applications. 
          Currently pursuing MS in Computer Science at Syracuse University with hands-on experience at Zenziee, iConsult Collaborative, and SocialTechLabs.
          I specialize in Golang microservices, React frontends, and AWS infrastructure - having built systems that serve 20K+ daily users with sub-200ms latency. 
          My work has delivered measurable impact: 2x SEO improvements, 60% load time reductions, and 50% database performance gains.
          Passionate about clean, scalable code and solving complex technical challenges through data, cloud, and machine learning technologies.
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