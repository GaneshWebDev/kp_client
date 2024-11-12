import './App.css'
import client from './sanityClient'
import { useEffect,useRef,useState } from 'react'
import Navbar from './components/navbar'
import About from './components/about'
import Projects from './components/projects'
import Skills from './components/skills'
import Contact from './components/contact'
import { initFlowbite } from 'flowbite'
import Hero from './components/home'
import Certificates from './components/certificates'
function App() {
  const [activeBtn,setActiveBtn]=useState('hero');
  const sections = {
    hero: useRef<HTMLDivElement>(null),
    about: useRef<HTMLDivElement>(null),
    course: useRef<HTMLDivElement>(null),
    project: useRef<HTMLDivElement>(null),
    certificate: useRef<HTMLDivElement>(null),
    skills: useRef<HTMLDivElement>(null),
    career: useRef<HTMLDivElement>(null),
    contact: useRef<HTMLDivElement>(null) // Assuming you have a career section
  };
   useEffect(()=>{
     initFlowbite();
     const callback : IntersectionObserverCallback = (entries: IntersectionObserverEntry[])=> {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const targetRef = Object.entries(sections).find(([, ref]) => ref.current === entry.target);
          if (targetRef) {
            console.log(`We are displaying ${targetRef[0]}`);
            setActiveBtn(targetRef[0]);
          }
        }
      });
    };
    
    const options = { threshold: 0.5 };
    const observer = new IntersectionObserver(callback, options);
    
    // Assuming `heroRef` is the useRef for the element you want to observe
    for (const [, ref] of Object.entries(sections)) {
      const target = ref.current;
      if (target) {
        observer.observe(target);
      }
    }

    return () => {
      observer.disconnect();
    };
    
   },[])
  return (
    <div className='bg-[#e2dfdb] w-[100vw]' style={{fontFamily:'Georgia'}}>
    <Navbar hero={sections.hero} about={sections.about} course={sections.course} project={sections.project} certificate={sections.certificate} skills={sections.skills} contact={sections.contact} activeBtn={activeBtn}/>
    <section ref={sections.hero} >
      <Hero />
    </section>
    <section ref={sections.about}>
      <About />
    </section> 
    <section ref={sections.project}>
      <Projects/>
    </section> 
    <section ref={sections.certificate}>
      <Certificates/>
    </section> 
    <section ref={sections.skills}>
      <Skills/>
    </section> 
    <section ref={sections.contact}>
      <Contact />
    </section>
    </div>
  )
}

export default App
