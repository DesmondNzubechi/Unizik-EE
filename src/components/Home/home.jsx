import React from "react";
import tools from '../../assets/images/library.avif';
import { Aim } from "../our-aim/aim";
import { CalculateGp } from "../cgpa-calc/CgpaCalc";
import { StartLearning } from "../Books/Book";
import { AboutNews } from "../news/new";
import { SchoolEvents } from "../Aims/Aims";
import { Link } from "react-router-dom";
import { CourseOutline } from "../CourseOutlines/CourseOutlines";
export const Home = () => {
    return(  
        <>
        <div className="px-[20px]">
<div className=" flex flex-col overflow-x-hidden  md:flex-row justify-center gap-5 items-center pt-[120px]  ">
    <div className="flex items-start flex-col gap-1 max-w-[600px] ">
    <h1 className="uppercase font-bold text-yellow-400 text-[20px] md:text-[43px] ">Electrical <span className="text-slate-900"> engineering </span></h1>
 <h2 className="uppercase font-bold text-slate-900 text-[20px] md:text-[43px] "> <span className="text-slate-900">Department</span> <span className="text-yellow-400">unizik</span></h2>
 <p className="font-[700] text-[15px] md:text-[23px] text-slate-700 ">Nnamdi Azikiwe University, Awka.</p>
 <p className="text-[12px] text-slate-700 md:text-[20px] font-[400] "> Access course outlines, learning materials, calculate CGPA, stay informed with news, and connect with a vibrant community. Welcome to the future of electrical engineering education</p>
<Link to='/login' className="bg-slate-900  hover:bg-slate-700 mt-[20px] text-slate-50 rounded-[3px] shadow-2xl px-[7px] font-semibold text-[15px] md:text-[20px] py-[2px] ">
    Get started
</Link>
    </div>
   <div className="max-w-[650px]  ">
   <img className="rounded" src={tools} alt="" />
   </div>

</div>
 </div>
 <Aim/>
 <StartLearning/>
 <CalculateGp/>
 <CourseOutline/>
 <AboutNews/>
 <SchoolEvents/>
 </>
    )
}