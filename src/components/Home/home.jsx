import React from "react";
import tools from '../../assets/images/library.avif';
import { About } from "../About/About";
import { News } from "../news/new";
import { Aim } from "../our-aim/aim";
import CGPACalculator from "../cgpa-calc/CgpaCalc";
import { ExcosProfile } from "../Excos/Excos";
import { CalculateGp } from "../cgpa-calc/CgpaCalc";
import { StartLearning } from "../Books/Book";
import { AboutNews } from "../news/new";
import { UserProfile } from "../User profile/UserProfile";
import { NewsUpload } from "../NewsUpload/NewsUpload";
import { PdfUpload } from "../PdfUpload/PdfUpload";
import { Users } from "../Users/Users";
import { SchoolEvents } from "../Events/Events";


export const Home = () => {
    return(
        <>
        <div className="px-[20px]">
<div className=" flex flex-col overflow-x-hidden  md:flex-row justify-center gap-5 items-center pt-[120px]  ">
    <div className="flex items-start flex-col gap-1 max-w-[600px] ">
    <h1 className="uppercase font-bold text-yellow-400 text-[25px] md:text-[43px] ">Electrical <span className="text-slate-900"> engineering </span></h1>
 <h2 className="uppercase font-bold text-slate-900 text-[25px] md:text-[43px] "> <span className="text-slate-900">Department</span> <span className="text-yellow-400">unizik</span></h2>
 <p className="font-[500] text-[20px] md:text-[23px] text-slate-700 ">Nnamdi Azikiwe University, Awka.</p>
 <p className="text-[18px] text-slate-700 md:text-[21px] font-[400] "> Access course outlines, learning materials, calculate CGPA, stay informed with news, and connect with a vibrant community. Welcome to the future of electrical engineering education</p>
<button className="bg-slate-900  hover:bg-slate-700 mt-[20px] text-slate-50 rounded-[3px] shadow-2xl px-[7px] font-semibold text-[25px] py-[2px] ">
    Get started
</button>
    </div>
   <div className="max-w-[650px]  ">
   <img className="rounded" src={tools} alt="" />
   </div>

</div>
 </div>
 <Aim/>
 <StartLearning/>
 <CalculateGp/>
 <AboutNews/>
 <SchoolEvents/>
<ExcosProfile/>
 </>
    )
}