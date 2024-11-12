import { motion } from "framer-motion";
import { RefObject, useState } from "react";
import client from "../sanityClient";
import { useEffect } from "react";
import imageUrlBuilder from '@sanity/image-url'
interface HeaderProps {
    hero: RefObject<HTMLDivElement>,
    about: RefObject<HTMLDivElement>,
    course: RefObject<HTMLDivElement>,
    project: RefObject<HTMLDivElement>,
    certificate: RefObject<HTMLDivElement>,
    contact: RefObject<HTMLDivElement>,
    skills: RefObject<HTMLDivElement>,
    activeBtn: string
}

export default function Navbar({ hero, about,  project, certificate, skills, contact, activeBtn }: HeaderProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const builder = imageUrlBuilder(client);
    const [data1,setData]=useState<any|null>(null);
    function urlFor(source:any) {
        return builder.image(source)
      }
    useEffect(()=>{
        client.fetch('*[_type == "resume"][0]').then((data)=>{
             console.log(data,'cer');
             setData(data);
        }).catch(err=>{
            console.log(err);
        })
    },[])
    const handleMenuClick = (ref: RefObject<HTMLDivElement>) => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false); // Close the menu after clicking
    };

    return (
        <nav className="bg-white/30 backdrop-blur-sm  dark:bg-gray-900 w-[100vw] fixed top-0 z-50" style={{ boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)' }}>
            <div className="flex flex-wrap items-center justify-between p-4">
                <motion.a
                    initial={{ x: -500, opacity: 0.5, scale: 0.5 }}
                    animate={{ x: 0, opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5 }}
                    href="#"
                    className="flex items-center space-x-3 rtl:space-x-reverse"
                >
                    <img src="kpLogo.jpg" className="h-8 rounded-full" alt="Logo" />
                    <span className="self-center text-1xl text-black font-semibold whitespace-nowrap dark:text-white">Kranthi</span>
                </motion.a>
                <button
                    data-collapse-toggle="navbar-default"
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-default"
                    aria-expanded={isMenuOpen}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <motion.div
                    initial={{ x: 500, opacity: 0, scale: 0.5 }}
                    animate={{ x: 0, opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5 }}
                    className={`w-full md:block md:w-auto mr-11 ${isMenuOpen ? 'block' : 'hidden'}`}
                    id="navbar-default"
                >
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 bg-white md:bg-transparent">
                        <li>
                            <button
                                className={activeBtn === 'hero' ? "block py-2 px-3 text-black bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" : "block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"}
                                onClick={() => handleMenuClick(hero)}
                            >
                                Home
                            </button>
                        </li>
                        <li>
                            <button
                                className={activeBtn === 'about' ? "block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" : "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"}
                                onClick={() => handleMenuClick(about)}
                            >
                                About
                            </button>
                        </li>
                        <li>
                            <button
                                className={activeBtn === 'project' ? "block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" : "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"}
                                onClick={() => handleMenuClick(project)}
                            >
                                Projects
                            </button>
                        </li>
                        <li>
                            <button
                                className={activeBtn === 'certificate' ? "block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" : "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"}
                                onClick={() => handleMenuClick(certificate)}
                            >
                                Certificates
                            </button>
                        </li>
                        <li>
                            <button
                                className={activeBtn === 'skills' ? "block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" : "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"}
                                onClick={() => handleMenuClick(skills)}
                            >
                                Skills
                            </button>
                        </li>
                        <li>
                            <button
                                className={activeBtn === 'contact' ? "block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" : "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"}
                                onClick={() => handleMenuClick(contact)}
                            >
                                Contact
                            </button>
                        </li>
                        <li>
                            {data1&&<a
                                href={data1.file.asset._ref}
                                download="Kranthi_Resume.pdf"
                                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                            >
                                Resume
                            </a>}
                        </li>
                    </ul>
                </motion.div>
            </div>
        </nav>
    );
}
