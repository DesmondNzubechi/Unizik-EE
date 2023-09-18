import React from "react";
import tools from '../../assets/images/aim1.avif';
import { Link } from "react-router-dom";

export const Aim = () => {
    return(
        <div className="px-[20px] flex pt-[100px] py-[20px] justify-around   flex-col rounded-[60px] bg-white gap-[40px] md:flex-row md:flex-row-reverse ... items-center py-[50px] ">
<div className="flex flex-col max-w-[700px] gap-[20px] ">
    <h1 className="text-[20px]  w-fit  rounded-[15px] border-slate-900 text-slate-900 font-bold uppercase ">Our Mission</h1>
    <p className="md:text-[15px] text-[12px] font-[400] ">Our mission is to empower electrical engineering students by providing a comprehensive and dynamic educational experience. We strive to offer a one-stop solution, where students can access course outlines, download learning materials, calculate their CGPA, stay informed with school news, and keep up-to-date with industry advancements. Our goal is to create a supportive and engaging environment that enhances students' understanding of electrical engineering concepts, fosters collaboration among peers, and equips them with the necessary skills and knowledge to succeed in their academic endeavors and future careers. Join us in shaping the future of electrical engineering education.</p>
{/*<p><Link to='/fullAim' className="bg-slate-900 text-[20px] text-yellow-500 px-[10px] py-[5px] mt-[60px] font-semibold rounded-[5px]  ">Read More</Link>
</p>*/} 
</div>
<div className=" max-w-[500px]">
    <img className="rounded-[20px] " src={tools} alt="" />
</div>
        </div>
    )
}