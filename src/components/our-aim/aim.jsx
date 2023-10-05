import React, { useEffect } from "react";
import tools from '../../assets/images/aim1.avif';
import { Link } from "react-router-dom";
import Aos from "aos";

export const Aim = () => { 
    useEffect(() => {
        Aos.init({duration: 1000})
    }, [])
    return(
        <div data-aos='fade-up' aos-data-duration='2000' className="px-[20px] flex pt-[100px] py-[20px] justify-around   flex-col rounded-[60px] bg-white gap-[40px] md:flex-row md:flex-row-reverse ... items-center py-[50px] ">
<div className="flex flex-col max-w-[600px] gap-[20px] ">
    <h1 className="text-[20px]  w-fit  rounded-[15px] border-slate-900 text-slate-900 font-bold uppercase ">Our Mission</h1>
    <p className="md:text-[15px] text-[12px] font-[400] ">Empowering electrical engineering students through a comprehensive and dynamic educational experience. We're your one-stop solution for course outlines, learning materials, CGPA calculations, school news, and industry insights. </p>
</div>
<div className=" ">  
    <img className="rounded-[20px] max-w-[300px] md:max-w-[500px] " src={tools} alt="" />
</div>
        </div>
    )
}