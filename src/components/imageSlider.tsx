import { useState } from 'react';
import { motion } from 'framer-motion';

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
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
      className="flex relative  flex-col md:flex-row flex-shrink-0  items-start  justify-center w-full snap-center " >
             <i className="hidden md:flex absolute cursor-pointer left-40 text-[43px] opacity-60 fa-solid fa-angle-left"  onClick={prevSlide}></i>
     <i className="hidden md:flex absolute cursor-pointer right-40 text-[43px] opacity-60 fa-solid fa-angle-right"  onClick={nextSlide}></i>
         <div className='flex items-center justify-center h-[40%]   md:h-full w-full md:w-[60%] '>
             <img className='h-full w-full object-cover' src={slides.img} />
         </div>

         <div className='flex flex-col m-2 w-full md:w-[40%]  overflow-y-scroll scrollbar-none'>
             <span className="uppercase  p-1 md:p-2 text-[12px] md:text-xl font-bold">{slides.title}</span>
             <p className='m-1 my-5 text-[10px] md:text-[16px]'>{slides.desc}</p>
         </div>
         
     </motion.div>
  );
};

export default ImageSlider;
