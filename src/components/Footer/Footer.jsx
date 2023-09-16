import React from "react";
import footerImg from '../../assets/images/logo.jpg';
import { Link } from "react-router-dom";
import { MdOutlineMail } from 'react-icons/md';


export const Footer = () => {
    return (
        <div className="bg-slate-900">
        <div className="bg-slate-900 p-5 items-start justify-center  gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-row-reverse items-start gap-2 ">
                <div>
                <h1 className="uppercase text-white font-bold text-[15px] md:text-[20px] ">Electrical Engineering</h1>
           <p className="text-slate-200 md:text-[15px] text-[12px] ">Anambra State University of Technology (ASUTECH) was established by law in July, 1980 as the first indigenous University of Technology in Nigeria. From the onset, two campuses were opened simultaneously at Enugu and Awka.</p>
                </div>
                <div className=" max-w-[100px] ">
                <img src={footerImg} className="rounded " alt="" />
                </div>
            </div>
            <div className="flex flex-col md:justify-center md:items-center">
                <h1 className="uppercase text-white font-bold md:text-[20px] ">Important Links</h1>
            <div className="flex flex-col gap-2">
            <Link to='/about' className="text-slate-300 md:text-[15px] text-[15px]   ">About Us</Link>
            <Link to='/admission requirement' className="text-slate-300 md:text-[15px] text-[15px]   ">Admission</Link>
            <Link to='/contact' className="text-slate-300 md:text-[15px] text-[15px]   ">Contact</Link>
            <Link to='/Learning-resources' className="text-slate-300 md:text-[15px] text-[15px]   ">Learning Resources</Link>
            <Link  to='/news' className="text-slate-300 md:text-[15px] text-[15px]   ">News</Link>
            </div>
            </div>
            <div>
            <div className="flex flex-col gap-2">
    <h1 className="text-slate-100 font-bold uppercase text-[15px] md:text-[20px]">contact</h1>
    <p className="text-slate-500 text-[12px] md:text-[15px]  max-w-[400px]">Get notified whenever we post learning material and news. We will also notify
you from time to time when we make updates to serve you better.</p>
<a href="mailto:eeunizik@gmail.com" className="flex gap-1 items-center"><MdOutlineMail className="text-black text-[30px] bg-slate-50 p-1 rounded-full "/> <span className="text-slate-200 capitalize text-[15px]">eeunizik@gmail.com</span> </a>
</div>
            </div>
            </div>
            <p className="text-center text-slate-200 pb-[30px] md:text-[15px] text-[12px]">&copy; EEUNIZIK 2023</p>
            </div>
    )
}