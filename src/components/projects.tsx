import { motion } from "framer-motion";
import Project from "./project";
import client from '../sanityClient'
import SlideIndicator from "./slideIndentifier";
import { useEffect,useState,useRef } from "react";
export default function Projects(){
    const [data1,setData]=useState<any|[]>([]);
    useEffect(()=>{
        client.fetch('*[_type == "projects"][0]').then((data)=>{
             setData(data.projectList);
             console.log(data.projectList,'pro');
        }).catch(err=>{
            console.log(err);
        })
    },[])
    /*const projects=[{
        id:0,
        img:'project1.jpg',
        title:' GrantPro360 - Transforming Grant Management with Innovation and Excellence',
        desc:'A project centred on creating and introducing GrantPro360, an innovative grant management consulting service offered by Impact Applications Inc. GrantPro360 provides a complete solution that utilizes advanced technology, strategic collaborations, and a focus on customer satisfaction to revolutionize the grant management sector. By conducting comprehensive market research and consumer analysis, formulating a differentiation strategy, and implementing a targeted marketing plan, our team played a crucial role in positioning GrantPro360 as an innovative, adaptable, and client-focused solution. We aimed to position GrantPro360 as the top choice for organizations needing efficient, creative, and forward-thinking grant management services.'
    },
    { 
        id:1,
        img:'project2.jpg',
        title: 'Summer Kids\' Event 2022',
        desc:"In 2022, I led the planning and execution of our annual summer kids' event, demonstrating exceptional productivity and teamwork skills. With only a month to plan and promote the event,  I carefully crafted a detailed plan and marketing strategy, encouraging transparent communication within the team. Emphasizing high productivity while maintaining accuracy, our teamwork led to an exceptional outcome of more than 400 children, a significant rise from past years. This achievement highlights my strong organizational skills, ability to work well in a team, and commitment to ensuring productivity throughout all process stages."
    }
]*/
const [viewIndex,setViewIndex]=useState(0);
const projectRef=useRef<HTMLDivElement>(null);
useEffect(()=>{
    const observer=new IntersectionObserver(entries=>{
      entries.forEach(entry => {
        if (entry.isIntersecting) {
            const key=entry.target.id;
            setViewIndex(Number(key))
        }
    });
    },{
      root: null,
      rootMargin: '0px',
      threshold: 0.5
  });
    if(projectRef.current){
      projectRef.current.childNodes.forEach((child:Node)=>{
          if(child instanceof Element){
            observer.observe(child);
          }
      })
    }
    return()=>{
      observer.disconnect();
    }
},[projectRef]);
    return(
        <>{data1==null?     
          <div role="status" className=" h-[100vh] flex flex-col  items-center justify-center space-y-10 w-[100vw]">
              <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
              </svg>
              <span className="sr-only">Loading...</span>
          </div>:
        <motion.div 
        initial={{
          opacity:0,
        }}
        whileInView={{
          opacity:1,
        }}
        transition={{
          duration:1.2
        }}
        viewport={{
          once:true
        }}
      className="  h-screen relative flex flex-col  items-center justify-center  overflow-hidden mt-10 md:mt-20">
        <h1 className="absolute  top-20 md:top-24 mt-10 md:mt-0  uppercase tracking-[10px]">Projects</h1>
        <div ref={projectRef} className="flex snap-x snap-mandatory overflow-x-scroll  scroll-smooth w-5/6 h-full scrollbar-none  md:h-3/5 mt-6 md:mt-0">
         {data1?.map((project:any,index:number)=>{return(
               <Project key={index} project={project}  id={project.id.toString()}  />
            )})}
        </div>
         <SlideIndicator num={data1.length} index={viewIndex} />  
      </motion.div>}
        </>
    )
}
