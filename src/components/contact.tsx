"use client" 
import {useForm,SubmitHandler} from 'react-hook-form'
import { motion } from "framer-motion";
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/16/solid";
import client from '../sanityClient';
import { useEffect,useState} from "react";
type FormValues={
    name:string;
    email:string;
    subject:string;
    message:string;
};
export default function Contact(){
    const { register, handleSubmit } = useForm<FormValues>();
    const [data1,setData]=useState<any|null>(null);
    useEffect(()=>{
        client.fetch('*[_type == "contact_details"][0]').then((data)=>{
             setData(data);
        }).catch(err=>{
            console.log(err);
        })
    },[])
    const onSubmit: SubmitHandler<FormValues> = (data) =>{
        console.log(data)
        window.location.href=`mailto:${data1.Email}?subject=${data.subject}&body=Hi, my name is ${data.name}, ${data.message} (${data.email})`;
    }
    return(
        <>{data1==null?     
            <div role="status" className=" h-[100vh] flex flex-col  items-center justify-center space-y-10 w-[100vw]">
                <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                </svg>
                <span className="sr-only">Loading...</span>
            </div>:<motion.div
    initial={{
        opacity:0
    }}
    whileInView={{
        opacity:1
    }}
    transition={{
        duration:1.2
    }}
    viewport={{
        once:true
    }}
     className="relative   h-screen flex flex-col md:flex-row     items-center justify-center space-y-8 overflow-hidden">
        <h1 className="absolute  top-20 md:top-24 mt-10 md:mt-0  uppercase tracking-[10px]">Contact</h1>
        <div className="flex flex-col space-y-5">
            <h4 className="text-1xl md:text-3xl font-semibold text-center">
                I have got just what you need.{" "}<br/>
                <span className="decoration-[#F7AB0A]/50 underline ">Lets Talk.</span>
            </h4>
            <div className="flex flex-col items-center space-y-2 md:space-y-5">
                <div className="flex items-center space-x-3 md:space-x-5">
                    <PhoneIcon className="text-[#F7AB0A] h-5 md:h-7 w-5 md:w-7 animate-pulse"/>
                    <p className="texrt-1xl ">+91 {data1.mobile_number}</p>
                </div>
                <div className="flex items-center space-x-3 md:space-x-5">
                    <EnvelopeIcon className="text-[#F7AB0A]  h-5 md:h-7 w-5 md:w-7 animate-pulse"/>
                    <p className="texrt-1xl">{data1.Email}</p>
                </div>
                <div className="flex items-center w-screen">
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 w-[55%] md:w-fit mx-auto">
                        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 space-x-0 md:space-x-2">
                            <input {...register('name')} className="contactInput" type='text' placeholder="Name" required/>
                            <input {...register('email')} className="contactInput" type='email' placeholder="Email" required/>
                        </div>
                        <input {...register('subject')} className="contactInput" type='text' placeholder="Subject" required/>
                        <textarea {...register('message')} className="contactInput" placeholder="Message"/>
                        <button type='submit' className="bg-[#F7AB0A] py-2 md:py-4 px-8 rounded-md text-black font-bold">Submit</button>
                    </form>
                </div>
              
            </div>
        </div>

    </motion.div>}
    </>
    )
}
