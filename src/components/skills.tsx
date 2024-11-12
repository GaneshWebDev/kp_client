export default function Skills(){
    const skills=[
        {
            title:'Strategic Thinking',
            img:'strategic.png',
            desc:'Enhanced strategic thinking skills through MBA coursework and utilizing analytical abilities to address complex business challenges.',

        },   {
            title:'Leadership Skills',
            img:'team-leader.png',
            desc:'Guided diverse teams to collaborate, stay motivated, and effectively leverage each team member\'s strengths.',

        },   {
            title:'Management',
            img:'project-manager.png',
            desc:'Displayed strong project management abilities by organizing tasks, timelines, and resources to accomplish successful results.',

        },   {
            title:'Technical Proficiency',
            img:'service.png',
            desc:'Proficient in web design, advanced analytics tools, Skilled in Microsoft Excel for data analysis and proficient in graphics softwares. ',

        },   {
            title:'Adaptability',
            img:'adaptation.png',
            desc:'Proven ability to adapt in various academic and professional environments, demonstrating resilience and versatility.',

        },   {
            title:'Web Design and Development',
            img:'app-development.png',
            desc:'Skilled in web design, with practical experience in developing visually attractive and easy-to-use interfaces.',

        },
    ]
    return(
        <div className="relative flex h-screen items-center justify-center">
        <h1 className="absolute  top-20 md:top-24 mt-10 md:mt-0  uppercase tracking-[10px]">Skills</h1>
        <div className=" flex flex-wrap w-[80%]">
            {skills.map((skill, index) => (
                <div key={index} className=" w-1/2 md:w-1/3 mb-10 mx-0  items-center justify-center">
                    <div className="flex flex-col w-full h-full items-center justify-center text-center gap-2 md:px-16">
                    <img src={skill.img} className="w-12 h-12 md:w-10 md:h-10"/>
                    <h1 className="font-bold text-[10px] md:text-2xl text-orange-500">{skill.title}</h1>
                    <p className="hidden lg:flex">{skill.desc}</p>
                    </div>
                  
                </div>
            ))}
        </div>
        
        {/*<div className="flex flex-col text-center h-[40%]  w-[90%] item-center justify-center">
            <h1 className="font-bold text-2xl text-orange-500">Career Objective</h1>
            <p className="mb-3 text-gray-500 dark:text-gray-400">"I aspire to establish and steer my own business, driven by a strong passion for entrepreneurship and a dedication to creating social change. I strive to generate job opportunities in rural areas, promoting community growth and enhancing motivation and societal welfare. Utilizing my MBA education, I aim to take on leadership positions, applying strategic thinking and analytical skills to foster innovation and sustainable growth in a fast-paced business environment. Ultimately, I aim to establish a business that flourishes financially while positively impacting individuals and communities."</p>
            </div>*/}
    </div>
      
    )
}