import React from "react";
import {BsFillFolderSymlinkFill} from 'react-icons/bs';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { fullNewsContext } from "../context/Context";
import learningImg from '../../assets/images/reading.avif';
import learningImg1 from '../../assets/images/reading.avif';
import learningImg2 from '../../assets/images/reading6.avif';
import learningImg3 from '../../assets/images/reading5.avif';
import learningImg4 from '../../assets/images/reading7.avif';
import learningImg5 from '../../assets/images/reading8.avif';


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
    return(
        <div className="px-[20px] flex pt-[50px] py-[20px] justify-around   flex-col rounded-[30px] bg-slate-50 gap-[40px] md:flex-row md:flex-row ... items-center py-[50px] ">
        <div className="flex flex-col max-w-[700px] gap-[20px] ">
            <h1 className="text-[30px]  w-fit  rounded-[15px] border-slate-900 text-slate-900 font-bold uppercase ">Learning Resources</h1>
            <p className="md:text-[17px] text-[15px] font-[400] ">Dive into a vast repository of learning materials curated by experts in the field. Whether you prefer textbooks, lecture notes, video tutorials, or interactive simulations, our platform has you covered. Enhance your understanding of complex concepts and reinforce your knowledge through engaging and immersive learning experiences.</p>
        <p><Link to='/book' className="bg-slate-900 hover:text-slate-50 text-[20px] text-yellow-500 px-[10px] py-[5px] mt-[60px] font-semibold rounded-[3px]  ">Start Learning</Link>
        </p>
        </div>
        <div className=" max-w-[500px]">
            <img className="rounded-[20px] " src={learningImg} alt="" />
        </div>
                </div>
    ) 
}

export const Book = () => {
    const {getClickedlevel} = useContext(fullNewsContext);
    return(
        <div className="flex justify-center items-center flex-row ">
        <div className="pt-[150px] px-[30px] pb-[50px] ">
       <div className="text-center my-[20px] ">
        <h1 className="font-bold uppercase text-slate-900 text-[25px] md:text-[30px] ">E-book Download</h1>
        <p className="text-slate-700 capitalize text-[20px]  ">Here you find textbook, handouts and pastquestions for your level</p>
       </div>

       <div className="grid grid-cols-1 gap-5 md:grid-cols-3 my-[100px] ">
 
       {
        levels.map(level => {
            return <Link to='/level-courses' className="flex flex-row justify-center" onClick={() => getClickedlevel(level.level)}>
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
    )
}