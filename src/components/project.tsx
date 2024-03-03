import { motion } from 'framer-motion';
interface projectProps{
    project:{
        img:string,
        title:string,
        desc:string
    }
}
export default  function Project({ project }:projectProps){
    console.log(project)
    return(
        <motion.div
        initial={{
            opacity:0
        }}
        whileInView={{
            opacity:1
        }}
        transition={{
            duration:1.6
        }}
        viewport={{
            once:true
        }}
         className="flex  flex-col md:gap-4 md:flex-row flex-shrink-0  items-start  justify-center w-[95%] h-[100%] snap-center" >
            <div className='flex items-center justify-center h-[40%]   md:h-full w-full md:w-[40%] '>
                <img className='h-auto w-full object-cover' src={project.img} />
            </div>

            <div className='flex flex-col m-2 w-full md:w-[60%] h-full '>
                <span className="uppercase md:mx-[50px]  p-1 md:p-2 text-[12px] md:text-xl font-bold">{project.title}</span>
                <p className=' my-5 text-[10px] md:text-[18px] md:mx-[50px]  overflow-y-scroll scrollbar-none '>{project.desc}</p>
            </div>
            
        </motion.div>
    )
}