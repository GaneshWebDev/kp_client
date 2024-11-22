import { NavLink } from "react-router-dom";
import { useRef,useState,useEffect } from "react";
import client from "../sanityClient";
export default function Hero() {
  const resumeRef=useRef<HTMLDivElement>(null);
  const scrollerRef=useRef<HTMLDivElement>(null);
   const icons = ["pngwing.com (1).png", "pngwing.com (2).png","pngwing.com (3).png","pngwing.com (5).png","pngwing.com (6).png",];
  const scrollIntoView = () => {
    const scrollHeight = window.innerHeight * 0.85;  // 80% of the screen height
    window.scrollTo({
      top: window.scrollY + scrollHeight,
      behavior: "smooth",
    });
  };
  const [data1,setData]=useState<any|[]>([]);
  const [data2,setData2]=useState<any|[]>([]);
  console.log(data1.length)
    useEffect(()=>{
        client.fetch('*[_type == "certificates"][0]').then((data)=>{
             setData(data.certificatesList);
        }).catch(err=>{
            console.log(err);
        });
        client.fetch('*[_type == "projects"][0]').then((data) => {
          setData2(data.projectList);
      }).catch(err => {
          console.error(err);
      });
        const scroller=scrollerRef.current;
        console.log('heheheheh',scroller)
        function addAnimation(){
          if(!scroller) return;
          const inner_scroller:any=scroller.querySelector('.scroller_class');
          if(!inner_scroller) return;
          if(inner_scroller.getAttribute("data-cloned") === "true") return;
          const childern=Array.from(inner_scroller.children);
          childern.forEach((ele:any)=>{
            const extendedSkills=ele.cloneNode(true) as HTMLElement;
            inner_scroller.append(extendedSkills);
          });
          inner_scroller.setAttribute("data-cloned","true");
        }
        addAnimation();
    },[])
  return (
  <>
    <div className="relative w-screen h-auto  overflow-scroll scrollbar-none font-sans ">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="3163534-uhd_3840_2160_30fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-[100dvh] text-white pt-[10vh] md:pt-[18vh]">
        {/* Headline */}
        <div className="flex flex-col gap-0 w-full items-center justify-center text-[3rem] md:text-[6rem] font-bold">
          <div className="flex items-center justify-start w-full pl-0 md:pl-[23vw]">
            <span>Turning</span>
          </div>
          <div className="flex items-center justify-center w-full">
            <span>Data</span>
          </div>
          <div className="flex items-center justify-end w-full pr-0 md:pr-[16vw]">
            <span>into Value</span>
          </div>
        </div>

        {/* Desktop Call to Action */}
        <div className="hidden md:flex flex-col gap-4 items-center justify-center w-full h-[12vh] text-[1.4rem] font-thin">
          <span>Find out how</span>
          <div className="rounded-full border p-2 cursor-pointer" onClick={scrollIntoView}>
            <svg
              xmlns="http://www.w3.org/2000/svg" 
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#e8eaed"
            >
              <path d="M480-200 240-440l56-56 184 183 184-183 56 56-240 240Zm0-240L240-680l56-56 184 183 184-183 56 56-240 240Z"></path>
            </svg>
          </div>
        </div>

        {/* Mobile Call to Action */}
        <div className="md:hidden flex items-end justify-between w-full px-4 pb-6 absolute bottom-2 z-50">
          {/* Left Column: Arrow */}
          <div className="flex flex-col items-center justify-center ">
            <span className="[writing-mode:vertical-rl] [rotate:180deg] text-[1.4rem]">
              Find out how
            </span>
            <svg
              className="mt-4 border rounded-full cursor-pointer" onClick={scrollIntoView}
              xmlns="http://www.w3.org/2000/svg"
              height="44px"
              viewBox="0 -960 960 960"
              width="44px"
              fill="#e8eaed"
            >
              <path d="M480-200 240-440l56-56 184 183 184-183 56 56-240 240Zm0-240L240-680l56-56 184 183 184-183 56 56-240 240Z"></path>
            </svg>
          </div>

          {/* Right Column: Contact Button */}
          <div>
            <NavLink
              to="contact"
              className="border-2 border-white text-[1.4rem] rounded-full px-5 py-1 font-bold"
            >
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </div>
    <div className="w-full font-sans bg-black" ref={resumeRef}>
       <div className="flex flex-col items-center justify-center pt-10 ">
          <h2 className="text-3xl font-semibold mb-6 text-purple-600">Education</h2>
          <div className="grid grid-cols-1 md:grid-cols-2  gap-4 m-5 ">
            <div className='bg-gray-100 p-5 rounded-lg'>
             <img src='UCW-logo-outline.webp' alt="img" className="h-20 w-auto bg-black border p-2 rounded-md"/>
             <span className="font-bold text-[1.2rem]">MASTER OF BUSINESS ADMINISTRATION-Business Analytics</span>
             <p  className="text-[1.2rem]">University Canada West, Vancouver, BC (2024)</p>
             <p>This program combines advanced business management principles with data-driven analytics skills. It prepares graduates to leverage statistical tools, predictive modeling, and data visualization for strategic decision-making, enabling impactful contributions across industries like finance, marketing, and consulting.</p>
            </div>
            <div className='bg-gray-100 p-5 rounded-lg'>
             <img src='images (1).png' alt="img" className="h-20 w-auto  border p-2 rounded-full"/>
             <span className="font-bold text-[1.2rem] uppercase">Bachelor’s in Engineering & Technology</span>
             <p  className="text-[1.2rem]">Bapatla Engineering College, India (2021)</p>
             <p>A comprehensive program focusing on engineering principles, technology, and innovation. The course provided hands-on experience and a strong foundation in technical skills, preparing graduates for roles in various engineering domains.</p>
            </div>
          </div>
       </div>
       {/*certifications*/}
       <div className=" flex flex-col gap-7 items-start   p-5 text-white">
        <div className="flex w-full items-center justify-center">
          <span className="text-center text-[2rem] md:text-[4rem] font-thin py-5">"Building Success<br/> Through Professional Certifications"</span>
        </div>
        <div className="relative flex gap-2 sm:gap-4 h-[26vh] md:h-[35vh] snap-x snap-mandatory overflow-x-scroll scrollbar-none w-full">
            {data1.map((cert: any,index:number) => (
              <div
                key={index}
                className="flex flex-col w-full md:w-auto flex-shrink-0 pl-2 md:pl-4 lg:pl-6"
              >
                <div className="flex h-full ">
                  <a
                    href="/certificates"
                    className="block max-w-sm w-full p-3 sm:p-4 md:p-6 bg-white border border-gray-200 shadow-lg hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 rounded-lg transition-all duration-300"
                  >
                    <h5 className="pb-2 text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {cert.title}
                    </h5>
                    <p className="text-sm sm:text-base md:text-lg font-normal text-gray-700 dark:text-gray-400">
                      {cert.desc}
                    </p>
                  </a>
                </div>
              </div>
            ))}
          </div>
      <NavLink
            to="/certificates"
            className={"ml-3 md:ml-6 px-4 py-2 border-2 rounded-full text-lg border-white  text-center"}
          >
            Explore all my Certificates
      </NavLink>
    </div>
    {/* skills */}
    <div className="relative bg-white flex flex-col gap-5 items-center w-full justify-center pt-5 ">
      <span className="text-[1.5rem] font-thin">My Skills & expertise</span>
      <div className=" max-w-[80vw] md:max-w-[550px]   scroller " ref={scrollerRef}>
      <div className="flex flex-wrap scroller_class animate-infinite_scroll" >
        {icons.map((icon)=><img src={icon} alt="icon1" className="h-16 w-auto mx-4" />)}
      </div>
      </div>
    </div>
    {/*experience*/}
    <div className="flex flex-col items-center justify-center pt-5 bg-white ">
          <div className="p-6">
          <h2 className="text-3xl font-semibold mb-6 text-purple-600">Experience</h2>

          <div className="mb-6">
            <h3 className="text-xl font-bold">ADMINISTRATIVE ASSISTANT | ERBF, Coquitlam</h3>
            <span className="text-gray-500 text-sm block mb-4">Dec 2023 - Present</span>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provided administrative support, managing schedules, handling correspondence, and organizing documents, improving office efficiency and workflow.</li>
              <li>Supported daily business operations through documentation management, data entry, and meeting coordination, enhancing workflow efficiency.</li>
              <li>Designed and maintained Excel-based templates and reports, improving efficiency and standardization across reporting processes.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold">VOLUNTEER TECH MEDIA & TEAM COLLABORATION | Broadway Church, Vancouver</h3>
            <span className="text-gray-500 text-sm block mb-4">July 2023 - Present</span>
            <ul className="list-disc pl-6 space-y-2">
              <li>Delivered seamless technical support for live events, improving engagement through efficient media management.</li>
              <li>Coordinated a volunteer team to produce content, optimizing community interaction and providing technical support as needed.</li>
            </ul>
          </div>
        </div>
       </div>
       {/* Projects */}
        <div className="flex flex-col gap-0 items-start text-white border bg-white pb-6">
          <div className="flex flex-col items-center justify-center pt-0  w-full">
            <div className="p-6 px-[8vw] md:px-[15vw]">
              <h2 className="text-3xl font-semibold mb-0 text-purple-600">Projects</h2>

              {data2?.map((pro: any) => {
                return (
                  <div className="mb-0 flex flex-col gap-1 mt-3" key={pro._id}>
                    <h3 className="text-xl font-bold text-black">{pro.title}hhh</h3>
                    <span className="text-gray-500 block mb-4">{pro.desc}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <NavLink
            to="/projects"
            className={"ml-3 md:ml-[14vw] px-4 py-2 border-2 rounded-full text-lg border-black text-black text-center"}
          >
            Explore all my Projects
          </NavLink>
        </div>
    </div>  
  </>
  );
}
