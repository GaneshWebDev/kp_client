import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import imageUrlBuilder from '@sanity/image-url'
import client from '../sanityClient';
interface ProjectProps {
    project: {
        img: any;
        title: string;
        desc: string;
    };
    id: string;
}

export default function Project({ project, id }: ProjectProps) {
    const builder = imageUrlBuilder(client);

    function urlFor(source:any) {
        return builder.image(source)
      }
    const [openText, setOpenText] = useState(false);
    const [showReadMoreButton, setShowReadMoreButton] = useState(false);
    
    const paragraphStyles: React.CSSProperties = {
        WebkitLineClamp: 3,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
        display: '-webkit-box',
    };

    const ref = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        if (ref.current) {
            setShowReadMoreButton(ref.current.scrollHeight !== ref.current.clientHeight);
        }
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.6 }}
            viewport={{ once: true }}
            id={id}
            className="relative flex flex-col md:flex-row flex-shrink-0 gap-2 items-start pt-[10%] px-5 justify-center w-full h-full snap-center scroll-smooth "
        >
            <img className="h-auto md:h-[65%] w-[100%] md:w-[80%] float-left" src={urlFor(project.img.asset._ref).url()} alt="Project" />
            <span className="absolute uppercase text-[12px] md:text-xl font-bold hidden md:flex top-7">{project.title}</span>
            <span className="uppercase text-[12px] md:text-xl font-bold flex md:hidden">{project.title}</span>
            <div className='block md:hidden'>
            <p
                className="text-[0.8rem] md:text-[1.2rem] overflow-y-scroll scrollbar-none leading-5 md:leading-8 text-justify"
                ref={ref}
                style={openText ? undefined : paragraphStyles}
            >
                {project.desc}
            </p>
            {showReadMoreButton && (
                <button onClick={() => setOpenText(!openText)}>
                    {openText ? 'Read less...' : 'Read more...'}
                </button>
            )}
            </div>
            <div className='hidden md:block'>
            <p className="text-[0.8rem] md:text-[1.2rem] overflow-y-scroll scrollbar-none leading-5 md:leading-8 text-justify">
                {project.desc}
            </p>
            </div>
        </motion.div>
    );
}
