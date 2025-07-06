/**
 * @copyright 2025 Gourab Bank
 * @license Apache-2.0
 */

/**
 * Node Modules 
 */

import { ReactLenis} from 'lenis/react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

/**
 * Register GSAP
 */
gsap.registerPlugin(useGSAP, ScrollTrigger);
/**
 * 
 * Components 
 */
import Header from "./Components/Header";
import Self from "./Components/Self";
import About from "./Components/About";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Skills from "./Components/Skills";

const App = () => {

    useGSAP(() =>{
        const elements = gsap.utils.toArray('.reveal-up');
        elements.forEach((element) => {
            gsap.to(element, {
                scrollTrigger: {
                trigger: element,
                start: '-200 bottom',
                end: 'bottom 80%',
                scrub: true,
                
                },
                y: 0,
                opacity: 1,
                duration: 1,
                ease: 'power2.out'
            });
        });
    });


    return (
        <ReactLenis root>
            <Header/>
            <main>
                <Self />
                <About />
                <Skills />
                <Experience/>
                <Projects/>
                <Contact/>
            </main>
            <Footer/>
        </ReactLenis>
    )  
}

export default App;