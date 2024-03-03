import { useState } from "react"
export default function CourseIn(){
    const [selected,setSelected]=useState<{
        title: string,
        img: string ,
        desc1: string ,
        desc2: null
    }>({
        title:'Finance & Accounting',
        img:'FA-course.jpg',
        desc1:'The Financial Management course taught me an excellent knowledge of essential factors for successful business decisions. This involves a thorough understanding of bonds, including their valuation techniques, which were crucial in financial planning. Understanding the computation of Net Present Value (NPV) and Future Value (FV) equips businesses with essential tools for evaluating projects and selecting strategic initiatives. The course provided me with knowledge about risk management, allowing for an advanced approach to financial decision-making and a thorough comprehension of Return on Investment (ROI) measures, crucial for assessing project profitability and influencing strategic financial decisions.',
        desc2:null
    });
    console.log(selected,'sel')
    const courseArray=[
        {
            title:'Finance & Accounting',
            img:'FA-course.jpg',
            desc1:'The Accounting and Financial Management courses have been crucial to my journey. Exploring the subtleties of accounting principles has equipped me with the skills to interpret and analyze financial statements. Understanding this information is essential for making financial decisions and gaining insight into an organization\'s economic well-being.',
            desc2:'Delving deeply into financial reporting, budgeting, and risk management has offered valuable insights into finance\'s crucial role in organizational success. Deciphering financial statements has been essential, enabling me to contribute to business operations strategically.'
        },{
            title:'Marketing',
            img:'M-course.jpg',
            desc1:'In the Marketing Management course, I learned essential knowledge about market planning, focusing on the importance of thorough planning techniques and their implementation. I gained an in-depth understanding of market analysis techniques, which enabled me to evaluate the market environment successfully. Studying the 4Ps (Product, Price, Place, and Promotion) gives a comprehensive understanding of the marketing mix, highlighting their crucial impact on marketing strategies and decision-making. This course has equipped me with the expertise and resources needed for strategic marketing planning, market analysis, and implementing the 4Ps to make well-informed decisions in ever-changing corporate environments.',
            desc2:null
        },{
            title:'Ethics & CSR',
            img:'EC-course.jpg',
            desc1:'Ethics & CSR has served as a guiding principle in the business world. It has made me more aware of ethical considerations in business decisions and actions. Recognizing the social responsibility of organizations has enhanced my ethical decision-making skills and emphasized the significance of sustainable and responsible business practices.',
            desc2:null
        },{
            title:'Business Analytics',
            img:'BA-course.jpg',
            desc1:'The Business Analytics course provided valuable insights, particularly a deep understanding of expected value and its crucial role in decision-making. I have developed proficiency in hypothesis testing, which allows me to make well-informed decisions on various projects. The training improved my skills in multi-regression analysis, allowing me to examine complicated datasets and get valuable insights for strategic decision-making. The main insights have broadened my analytical skills and enabled me to make valuable contributions to data-driven decision-making in various business situations. ',
            desc2:null
        },{
            title:'Operations Management',
            img:'OP-course.jpg',
            desc1:'Exploring ways to streamline processes and optimize efficiency is crucial in business operations management. From supply chain management to quality control, the course has offered valuable insights into operational excellence. Understanding this is crucial for maintaining smooth business operations and providing value to customers.',
            desc2:null
        },{
            title:'Digital Transformation',
            img:'DT-course.jpg',
            desc1:'The dynamics of technology have reshaped business models through Digital Transformation. Grasping the fusion of digital technologies, e-commerce, and data-driven decision-making has been truly revolutionary. This course has provided me with valuable knowledge on how to navigate the digital landscape and achieve organizational success in today\'s digital age.',
            desc2:null
        }
    ]
    const handleButtonClick = (title) => {
        const filtered = courseArray.filter(course => course.title === title);
        setSelected(filtered.length > 0 ? filtered[0] : null);
    };
    return(
        <div className="   relative flex flex-col  gap-6 items-center justify-center h-[120vh] md:h-[140vh] w-screen snap-center">
        <h1 className=" absolute top-24 md:top-20 text-4xl font-bold">Course Insights</h1>
        <div className=" flex flex-col gap-4 text-center w-[90%] md:w-[50%] item-center justify-center">
            <h1 className=" font-bold text-1xl ">Overview</h1>
            <p className=" mb-3 text-gray-500 dark:text-gray-800 text-[10px] md:text-[16px]">Starting my Master of Business Administration degree at University Canada West was like setting out on a life-altering journey through a variety of business education terrains. The program has given me a well-rounded education in business that has opened my eyes to new possibilities and given me transferable skills that can be used in any field. Business fundamentals such as accounting, marketing, operations, and leadership are thoroughly covered in the MBA curriculum, which is known for its all-encompassing approach. </p>
        </div>
        <div className="  flex flex-wrap gap-2 md:gap-5 items-center justify-center w-[90vw] md:w-[90%]">
            <a className="text-[14px] md:text-[16px] border border-black p-2 rounded-lg cursor-pointer" onClick={() => handleButtonClick('Finance & Accounting')}>Finance & Accounting</a>
            <a className="text-[14px]  md:text-[16px] border border-black p-2 rounded-lg cursor-pointer" onClick={() => handleButtonClick('Marketing')}>Marketing</a>
            <a className="text-[14px]  md:text-[16px] border border-black p-2 rounded-lg cursor-pointer"  onClick={() => handleButtonClick('Ethics & CSR')}>Ethics & CSR</a>
            <a className="text-[14px] md:text-[16px] border border-black p-2 rounded-lg cursor-pointer"  onClick={() => handleButtonClick('Business Analytics')}>Business Analytics </a>
            <a className="text-[14px] md:text-[16px] border border-black p-2 rounded-lg cursor-pointer" onClick={() => handleButtonClick('Operations Management')}>Operations Management </a>
            <a className="text-[14px] md:text-[16px] border border-black p-2 rounded-lg cursor-pointer"  onClick={() => handleButtonClick('Digital Transformation')}>Digital Transformation</a>
        </div>

            <div className="flex  flex-col md:flex-row h-[35vh] md:h-[60vh] w-[90vw] md:w-[85vw] items-center justify-center  rounded-lg" style={{boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)'}}>
                    <div className=' flex items-center justify-center h-[55%]   md:h-full w-full md:w-[25%] '>
                            {selected.img &&<img className=' rounded h-[60%] w-[80%]' src={selected?.img} />}
                    </div>

                    <div className=' flex flex-col m-2 w-full md:w-[60%] mx-[40px]   overflow-y-scroll scrollbar-none'>
                        <span className=" uppercase  p-1 md:p-2 text-[12px] md:text-[30px] font-bold">{selected.title}</span>
                        <p className=' m-1 my-5 text-[10px] md:text-[20px] '>{selected.desc1}{selected?.desc2}</p>
                        <p className=' m-1 my-5 text-[10px] md:text-[20px]'></p>
                    </div>
            </div>

        </div>
      
    )
}