import {motion} from 'framer-motion'
export default function About(){
    return(
        <div className="relative flex   items-center justify-center h-screen w-[100vw] snap-center  " >
                <h1 className="hidden md:flex absolute  top-24 text-4xl font-bold">About</h1>
                <div role="status" className=" -red-500 gap-2 flex flex-col h-[80vh] md:h-[60vh]  lg:h-auto md:flex-row     md:gap-24  w-screen md:w-[90%] px-7 lg:px-20 items-center justify-center">
                    <div className="flex items-center justify-center w-[100vw] md:w-[40vw] h-[100%] md:h-[50%] mt-10">
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
                         src='kpLogo.jpg' className="rounded-full md:rounded-lg max-h-[180px] min-w-[180px] md:max-h-[400px] md:min-w-[20%] md:w-auto"/>
                    </div>
                    <div className="flex items-start justify-center w-[96vw] md:w-[60vw] h-[100%]  md:overflow-visible  md:mt-10">
                        <p className=" text-[0.9rem]  md:text-[18px] leading-6  lg:leading-10"><span className='text-yellow-500 '> Hello!</span> I am pursuing my MBA at the University of Canada West, building upon a strong foundation in Engineering and Technology earned during my Bachelor's degree in India. Originating from India's vibrant landscapes, I bring a diverse cultural perspective and a year of hands-on experience in web design from a small startup. During my undergraduate years, a passion for entrepreneurship ignited, fueling my desire to establish my own business. This journey is a testament to my unwavering commitment to personal and professional growth, with each experience shaping the entrepreneurial spirit that defines me today.</p>
                    </div>
                </div>


        </div>
      
    )
}