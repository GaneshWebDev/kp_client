import { motion } from 'framer-motion';
interface CertificateProps{
       certificate:{
        img:string,
        title:string,
        desc:string
    }
}
export default  function Certificate({ certificate }:CertificateProps){
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
         className=" flex  flex-col md:flex-row flex-shrink-0  items-start  justify-center w-[95%] snap-center h-full " >
            <div className='flex items-center justify-center h-[70%]   md:h-[100%] w-full md:w-[60%] '>
                <img className='h-full w-full ' src={certificate.img} />
            </div>

            <div className='flex flex-col m-2 w-full md:w-[40%] md:h-[100%] '>
                <span className="uppercase  p-1 md:p-2 text-[12px] md:text-xl font-bold">{certificate.title}</span>
                <p className='m-1 my-5 text-[10px] md:text-[16px]'>{certificate.desc}</p>
            </div>
            
        </motion.div>
    )
}