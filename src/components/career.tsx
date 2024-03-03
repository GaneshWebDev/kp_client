import { SocialIcon } from "react-social-icons";
export default function Career(){
    return(
        <div className="relative flex flex-col items-center justify-center text-center h-screen w-screen snap-center">
            <h1 className="absolute top-28  text-4xl font-bold z-99">Career Objective</h1>
            <p className="w-[50%] text-[20px] leading-10">"I aspire to establish and steer my own business, driven by a strong passion for entrepreneurship and a dedication to creating social change. I strive to generate job opportunities in rural areas, promoting community growth and enhancing motivation and societal welfare. Utilizing my MBA education, I aim to take on leadership positions, applying strategic thinking and analytical skills to foster innovation and sustainable growth in a fast-paced business environment. Ultimately, I aim to establish a business that flourishes financially while positively impacting individuals and communities."</p>
            <div className="absolute text-[14px] bottom-10 flex justify-center gap-4 items-center">
    
                <span>© Kranthi Paul</span>
                <span>---</span>
                <span className="text-yellow-400  text-[15px]">Lets talk</span>
                <span>kranthipaul7@gmail.com</span>
                <SocialIcon url="https://www.linkedin.com/in/kranthi-paul-536b25158/" bgColor="transparent" fgColor="black" style={{height:'30px'}}/>
            </div>


        </div>
      
    )
}