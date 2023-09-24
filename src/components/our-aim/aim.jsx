import React from "react";
import tools from '../../assets/images/aim1.avif';
import { Link } from "react-router-dom";

export const Aim = () => { 
    return(
        <div className="px-[20px] flex pt-[100px] py-[20px] justify-around   flex-col rounded-[60px] bg-white gap-[40px] md:flex-row md:flex-row-reverse ... items-center py-[50px] ">
<div className="flex flex-col max-w-[700px] gap-[20px] ">
    <h1 className="text-[20px]  w-fit  rounded-[15px] border-slate-900 text-slate-900 font-bold uppercase ">Our Mission</h1>
    <p className="md:text-[15px] text-[12px] font-[400] ">Empowering electrical engineering students through a comprehensive and dynamic educational experience. We're your one-stop solution for course outlines, learning materials, CGPA calculations, school news, and industry insights. </p>
</div>
<div className=" max-w-[500px]">
    <img className="rounded-[20px] " src={tools} alt="" />
</div>
        </div>
    )
}