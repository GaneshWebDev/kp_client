import { motion } from "framer-motion";
import Certificate from "./certificate";
import client from '../sanityClient';
import SlideIndicator from './slideIndentifier';
import { useEffect,useRef,useState } from "react";
interface cerType{
  id: number;
  img?: File;
  title: string;
  des: string;
}

export default function Certificates(){
  const [data1,setData]=useState<any|[]>([]);
  console.log(data1.length)
    useEffect(()=>{
        client.fetch('*[_type == "certificates"][0]').then((data)=>{
             setData(data.certificatesList);
        }).catch(err=>{
            console.log(err);
        })
    },[])
    /*const certificates=[{
        id:0,
        img:'BA.jpg',
        title:'Business Analytics Certification',
        desc:'With a Business Analytics Certification, I have developed the skill to transform intricate data into strategic insights.'
    },
    {
        id:1,
        img:'AS.jpg',
        title: 'Foundation-certificate in Scrum Agile',
        desc:"As a Foundation-certified Scrum Agile practitioner, I have fully adopted agile methodologies to encourage collaborative, iterative project management. "
    },{
        id:2,
        img:'DM.jpg',
        title: 'Digital Marketing Associate certification',
        desc:"With a Digital Marketing Associate certification, I have honed my skills in online marketing, covering social media strategies and SEO optimization. "
    }
    ,{
        id:3,
        img:'AI.jpg',
        title: 'Certification in Automobile and IC Engine Design',
        desc:"Having a certification in Automobile and IC Engine Design has allowed me to explore the complexities of automotive engineering."
    },{
        id:4,
        img:'PD.jpg',
        title: 'Certification in product design with CATIA',
        desc:"Achieved certification in product design with CATIA, Utilized CAD (Computer-Aided Design) principles to develop cutting-edge and effective product designs."
    },{
        id:5,
        img:'AICC.jpg',
        title: 'Illustrator Graphics Designer Certificate',
        desc:"As a certified Illustrator Graphics Designer, I have the creative ability to effectively convey ideas visually. "
    }
]*/
const [viewIndex,setViewIdndex]=useState<number>(0);
const certificateRef=useRef<HTMLDivElement>(null);
useEffect(()=>{
     const observer=new IntersectionObserver(entries=>{
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const key = data1.findIndex((certificate: cerType) => certificate.id.toString() === entry.target.id);
            setViewIdndex(Number(key))
        }
    });
     },{
      root: null,
      rootMargin: '0px',
      threshold: 0.5
  });
     if(certificateRef.current){
        certificateRef.current.childNodes.forEach((child:Node)=>{
            if(child instanceof Element){
               observer.observe(child);
            }
        })
     }
     return ()=>{
       observer.disconnect();
     }
},[certificateRef,data1])
    return(
        <>
        {data1==null?     
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
      className=" h-screen relative flex flex-col items-center justify-center overflow-hidden mt-10 md:mt-20 ">
        <h1 className=" absolute  top-20 md:top-24 mt-10 md:mt-0  uppercase tracking-[10px]">Certificates</h1>
       <div ref={certificateRef} className=" flex snap-x snap-mandatory overflow-x-scroll  scroll-smooth w-5/6 h-full scrollbar-none  md:h-3/5 mt-6 md:mt-0 " >
            {data1?.map((certificate:any)=>{
              return(
              <>
               <Certificate key={certificate.id} certificate={certificate} id={certificate.id.toString()}/>
              
               </>
            )})}
            </div>
            <SlideIndicator num={data1.length} index={viewIndex}/>    
      </motion.div>}
        </>
    )
}
