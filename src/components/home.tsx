import { Cursor, useTypewriter} from "react-simple-typewriter";
import {  motion } from "framer-motion";
export default function Hero(){
    const [text]=useTypewriter({
        words:[
            "I'm Kranthi Paul",
        ],
        loop:true,
        delaySpeed:2000,
    })
    return(
        <div className=" h-[100vh] flex flex-col  items-center justify-center space-y-10 w-[100vw] "  >
                 <div className=" flex flex-col md:gap-10  w-[90vw] md:w-[60vw]">
                    <motion.span
                      initial={{
                        opacity:0,
                    }}
                    animate={{
                        opacity:1,
                    }}
                    transition={{
                        duration:1
                    }}
                 
                     className=" text-xl md:text-[40px] font-bold" >Hi There</motion.span>
                    <motion.h1 
                      initial={{
                        opacity:0,
                    }}
                    animate={{
                        opacity:1,
                    }}
                    transition={{
                        duration:4
                    }}
                    className="  text-3xl md:text-[45px] font-semibold scroll-px-20 text-yellow-400">
                        <span>{text}</span>
                        <Cursor  cursorColor="#F7AB0A"/>        
                    </motion.h1>
                 </div>  
                 <div  className=" flex flex-col gap-7 w-[90vw] md:w-[60vw]">
                    <p className=" text-lg font-bold md:text-[30px]">MBA Student from <span className="text-yellow-400 ">University of Canada West</span></p>
                    <p className=" md:md:text-[20px] leading-10">Welcome to my e-portfolio, a digital display of my educational and professional path. Explore the different aspects of my work and MBA program, each milestone has helped shape the professional I am today.</p>
                 </div>

        </div>
    )
}