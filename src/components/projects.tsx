import { motion } from "framer-motion";
import Project from "./project";
export default function Projects(){
    const projects=[{
        img:'project1.jpg',
        title:' GrantPro360 - Transforming Grant Management with Innovation and Excellence',
        desc:'A project centred on creating and introducing GrantPro360, an innovative grant management consulting service offered by Impact Applications Inc. GrantPro360 provides a complete solution that utilizes advanced technology, strategic collaborations, and a focus on customer satisfaction to revolutionize the grant management sector. By conducting comprehensive market research and consumer analysis, formulating a differentiation strategy, and implementing a targeted marketing plan, our team played a crucial role in positioning GrantPro360 as an innovative, adaptable, and client-focused solution. We aimed to position GrantPro360 as the top choice for organizations needing efficient, creative, and forward-thinking grant management services.'
    },
    {
        img:'project2.jpg',
        title: 'Summer Kids\' Event 2022',
        desc:"In 2022, I led the planning and execution of our annual summer kids' event, demonstrating exceptional productivity and teamwork skills. With only a month to plan and promote the event,  I carefully crafted a detailed plan and marketing strategy, encouraging transparent communication within the team. Emphasizing high productivity while maintaining accuracy, our teamwork led to an exceptional outcome of more than 400 children, a significant rise from past years. This achievement highlights my strong organizational skills, ability to work well in a team, and commitment to ensuring productivity throughout all process stages."
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
      className="  h-screen relative flex items-center justify-center overflow-hidden mt-10 md:mt-20">
        <h1 className="  flex absolute top-24 md:top-24  text-4xl font-bold z-99 ">Projects</h1>
       <div className="  flex gap-4 h-[80%] md:h-[60%] w-[90%] md:w-[80%]  mt-20  md:mt-20  overflow-x-scroll snap-x snap-mandatory   md:scrollbar-none scrollbar  scrollbar-thumb-yellow-500 scrollbar-thumb-rounded">
            {projects?.map((project,index)=>{return(
               <Project key={index} project={project}   />
            )})}
            </div>
      </motion.div>
        </>
    )
}