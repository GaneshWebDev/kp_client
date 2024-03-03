import { motion } from "framer-motion";
import Certificate from "./certificate";
export default function Certificates(){
    const certificates=[{
        img:'BA.jpg',
        title:'Business Analytics Certification',
        desc:'With a Business Analytics Certification, I have developed the skill to transform intricate data into strategic insights.'
    },
    {
        img:'AS.jpg',
        title: 'Foundation-certificate in Scrum Agile',
        desc:"As a Foundation-certified Scrum Agile practitioner, I have fully adopted agile methodologies to encourage collaborative, iterative project management. "
    },{
        img:'DM.jpg',
        title: 'Digital Marketing Associate certification',
        desc:"With a Digital Marketing Associate certification, I have honed my skills in online marketing, covering social media strategies and SEO optimization. "
    }
    ,{
        img:'AI.jpg',
        title: 'Certification in Automobile and IC Engine Design',
        desc:"Having a certification in Automobile and IC Engine Design has allowed me to explore the complexities of automotive engineering."
    },{
        img:'PD.jpg',
        title: 'Certification in product design with CATIA',
        desc:"Achieved certification in product design with CATIA, Utilized CAD (Computer-Aided Design) principles to develop cutting-edge and effective product designs."
    },{
        img:'AICC.jpg',
        title: 'Illustrator Graphics Designer Certificate',
        desc:"As a certified Illustrator Graphics Designer, I have the creative ability to effectively convey ideas visually. "
    }
]
    return(
        <>
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
      className=" h-screen relative flex items-center justify-center overflow-hidden mt-10 md:mt-20">
        <h1 className=" flex absolute top-24 md:top-24  text-4xl font-bold z-99 ">Certificates</h1>
       <div className=" flex gap-4 h-[60%] md:h-[60%] w-[90%] md:w-[80%]  mt-20 md:mt-10  overflow-x-scroll snap-x snap-mandatory   md:scrollbar-none scrollbar  scrollbar-thumb-yellow-500 scrollbar-thumb-rounded" >
            {certificates?.map((certificate,index)=>{return(
               <Certificate key={index} certificate={certificate} />
            )})}
            </div>
      </motion.div>
        </>
    )
}