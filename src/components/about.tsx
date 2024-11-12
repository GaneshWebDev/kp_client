import {motion} from 'framer-motion'
import client from '../sanityClient'
import {useState,useEffect } from 'react';
import imageUrlBuilder from '@sanity/image-url'
export default function About(){
    const builder = imageUrlBuilder(client);

    function urlFor(source:any) {
        return builder.image(source)
      }
    const [data1,setData]=useState<any|null>(null);
    useEffect(()=>{
        client.fetch('*[_type == "about"][0]').then((data)=>{
             console.log(data.image.asset._ref,'data me');
             setData(data);
        }).catch(err=>{
            console.log(err);
        })
    },[])
    return(
        <>
        {data1==null?     
                <div role="status" className=" h-[100vh] flex flex-col  items-center justify-center space-y-10 w-[100vw]">
                    <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                    </svg>
                    <span className="sr-only">Loading...</span>
                </div>:<div className="relative flex   items-center justify-center h-screen w-[100vw] snap-center  " >
                <h1 className="absolute  top-20 md:top-24 mt-10 md:mt-0  uppercase tracking-[10px]">About</h1>
                <div role="status" className=" px-10 md:px-[10%]">
                    {/*<div className="flex items-center justify-center w-[100vw] md:w-[40vw] h-[100%] md:h-[50%] mt-10">
                        <motion.img
                         initial={{
                            y:500,
                            opacity:0,
                            scale:0.5
                        }}
                        animate={{
                            y:0,
                            opacity:1,
                            scale:1
                        }}
                        transition={{
                            duration:1.5
                        }}
                        viewport={{
                            once:true
                        }}
                         src='kpLogo.jpg' className="rounded-full md:rounded-lg max-h-[180px] min-w-[180px] md:max-h-[400px] md:min-w-[20%] md:w-auto "/>
                    </div>
                    <div className="flex items-start justify-center w-[90vw] md:w-[60vw] h-[100%]  md:overflow-visible  md:mt-10">
                        <p className=" text-[0.9rem]  md:text-[18px] leading-6  lg:leading-10"><span className='text-yellow-500 '> Hello!</span> I am pursuing my MBA at the University of Canada West, building upon a strong foundation in Engineering and Technology earned during my Bachelor's degree in India. Originating from India's vibrant landscapes, I bring a diverse cultural perspective and a year of hands-on experience in web design from a small startup. During my undergraduate years, a passion for entrepreneurship ignited, fueling my desire to establish my own business. This journey is a testament to my unwavering commitment to personal and professional growth, with each experience shaping the entrepreneurial spirit that defines me today.</p>
                    </div>*/}
                    <img  src={urlFor(data1.image.asset._ref).url()} className="h-[40%] w-[40%] md:h-[15%] md:w-[15%] float-left p-2 md:p-3  rounded-lg
                    "/>
                    <p className=" text-[1rem] md:text-[1.7rem] leading-6 md:leading-8  lg:leading-[50px] text-justify"><span className='text-yellow-500 '> Hello!</span> {data1.about_me}</p>
                </div>


        </div>}
        </>
        
      
    )
}