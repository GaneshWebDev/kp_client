import './App.css'
import { useEffect,useRef,useState } from 'react'
import Navbar from './components/navbar'
import About from './components/about'
import Projects from './components/projects'
import Contact from './components/contact'
import Hero from './components/home'
import Certificates from './components/certificates'
import {  Routes, Route } from "react-router-dom";
function App() {
  /*const sections = {
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
    
   },[])*/
  return (
    <div className='bg-[#e2dfdb] w-screen' style={{fontFamily:'Georgia'}}>
    <Navbar />
      <Routes>
          <Route index element={<Hero />} />
          <Route path='/about' element={<About/>} />
          <Route path="/projects" element={< Projects/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/certificates" element={<Certificates />} />
      </Routes>
    </div>
  )
}

export default App
