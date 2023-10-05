import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import learningImg from '../../assets/images/reading.avif';
import learningImg1 from '../../assets/images/reading.avif';
import learningImg2 from '../../assets/images/reading6.avif';
import learningImg3 from '../../assets/images/reading5.avif';
import learningImg4 from '../../assets/images/reading7.avif';
import learningImg5 from '../../assets/images/reading8.avif';
import Aos from "aos";
 

const levels = [
      {
        level : 100,
        levelImg: learningImg1,
    },
    {
        level : 200,
        levelImg: learningImg2,
    },
    {
        level : 300,
        levelImg: learningImg3,
    },
    {
        level : 400,
        levelImg: learningImg4,
    },
    {
        level : 500,
        levelImg: learningImg5,
    },
];

export const StartLearning = () => {
    useEffect(() => {
        Aos.init({duration: 1000})
    }, [])
    return(
        <div data-aos='fade-up' aos-data-duration='2000' className="px-[20px] flex pt-[50px] py-[20px] justify-around   flex-col rounded-[30px] bg-slate-50 gap-[40px] md:flex-row md:flex-row ... items-center py-[50px] ">
        <div className="flex flex-col max-w-[600px] gap-[20px] ">
            <h1 className="text-[20px]  w-fit  rounded-[15px] border-slate-900 text-slate-900 font-bold uppercase ">Learning Resources</h1>
            <p className="md:text-[15px] text-[12px] font-[400] ">Explore expert-curated learning materials, including textbooks, notes,  and handouts. Enhance understanding with immersive experiences and reinforce knowledge. Your go-to resource for comprehensive learning.</p>
        <p><Link to='/Academics/Learning-resources' className="bg-slate-900  hover:bg-slate-700 mt-[10px] text-slate-50 rounded-[3px] shadow-2xl p-[10px] font-semibold text-[15px] md:text-[20px]  ">Start Learning</Link>
        </p>
        </div>
        <div className=" ">  
    <img className="rounded-[20px] max-w-[300px] md:max-w-[500px] "  src={learningImg} alt="" />
        </div>
                </div>
    ) 
}

export const Book = () => {
    return (
        <>
        <div className="flex justify-center items-center flex-row ">
        <div className="pt-[150px] px-[30px] pb-[50px] ">
       <div data-aos='fade-up' aos-data-duration='2000' className="text-center my-[20px] ">
        <h1 className="font-bold uppercase text-slate-900 text-[20px] md:text-[25px] ">books</h1>
        <p className="text-slate-700 capitalize text-[15px] md:text-[20px]  ">Here you find textbook, handouts and pastquestions for your level</p>
       </div>

       <div className="grid grid-cols-1 gap-5 md:grid-cols-3 my-[100px] ">
 
       {
        levels.map(level => {
            return <Link data-aos='fade-up' aos-data-duration='2000' to={`/Academics/Learning-Resources/${level.level}`} className="flex flex-row justify-center">
               <div data-aos='zoom-in-up' className="max-w-[350px] bg-white shadow-xl hover:shadow-2xl hover:border flex flex-col justify-center items-center gap-2 rounded text-center  p-5 ">
              <div className="max-w-[150px]"><img src={level.levelImg} alt="" /></div>
                <h1 className="font-bold uppercase text-[23px] md:text-[27px] ">{level.level} Level</h1>
                <p className="font-fonty text-[12px] md:text-[15px] ">Our {level.level} level student learning resources cover various Courses, ensuring that you have access to materials that align with your coursework and academic goals. </p>
            </div>
               {/* <BsFillFolderSymlinkFill className="text-[40px] text-yellow-500 font-semibold "/>*/}
            </Link >
        })
       }
       </div>
        </div>
            </div>
            </>
    )
}