import { motion } from 'framer-motion';
import imageUrlBuilder from '@sanity/image-url'
import client from '../sanityClient';
interface CertificateProps{
       certificate:{
        img:any,
        title:string,
        desc:string
    }
    id:string
}
export default  function Certificate({ certificate,id }:CertificateProps){
    const builder = imageUrlBuilder(client);

    function urlFor(source:any) {
        return builder.image(source)
      }
    return(
        <motion.div
        id={id}
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
         className="flex flex-col md:flex-row flex-shrink-0  p-5 items-center md:items-start justify-center w-full h-[100%]  md:h-full snap-center scroll-smooth " >
            <div className='flex items-center justify-center h-[45%]   md:h-[100%] w-full md:w-[60%] mt-20 md:mt-0'>
                <img className='h-full w-full ' src={urlFor(certificate.img.asset._ref).url()} />
            </div>

            <div className='flex flex-col m-2 w-full md:w-[40%] md:h-[100%] '>
                <span className="uppercase  p-1 md:p-2 text-[12px] md:text-xl font-bold">{certificate.title}</span>
                <p className='m-1 my-5 text-[10px] md:text-[16px]'>{certificate.desc}</p>
            </div>
            
        </motion.div>
    )
}
