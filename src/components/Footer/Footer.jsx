import React from "react";
import footerImg from '../../assets/images/eesalogor.png';
import { Link } from "react-router-dom";



export const Footer = () => {
    return(
        <div className="bg-slate-900 p-5  gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-start gap-2 ">
                <div>
                <h1 className="uppercase text-white font-bold text-[25px] ">Electrical Engineering</h1>
           <p className="text-slate-200 text-[15px] ">Anambra State University of Technology (ASUTECH) was established by law in July, 1980 as the first indigenous University of Technology in Nigeria. From the onset, two campuses were opened simultaneously at Enugu and Awka.</p>
                </div>
                <div className=" max-w-[200px] ">
                <img src={footerImg} className="rounded " alt="" />
                </div>
            </div>
            <div className="flex flex-col">
                <h1 className="uppercase text-white font-bold text-[25px] ">Important Links</h1>
            <div className="flex flex-col gap-2">
            <Link to='/about' className="text-slate-300 text-[20px]   ">About EE Unizik</Link>
            <Link to='/mission' className="text-slate-300 text-[20px]   ">Mission</Link>
            <Link to='/contact' className="text-slate-300 text-[20px]   ">Contact</Link>
            <Link to='/admission requirement' className="text-slate-300 text-[20px]   ">Admission</Link>
            <Link  to='/news' className="text-slate-300 text-[20px]   ">News</Link>
            <Link to='/students leaders' className="text-slate-300 text-[20px]   ">Student Leader</Link>
            </div>
            </div>
            <div>
            <div className="flex flex-col gap-2">
    <h1 className="text-slate-100 font-bold uppercase text-[25px]">NewsLetter</h1>
    <p className="text-slate-500 text-[17px] pt-[20px] max-w-[400px]">Get notified whenever we post learning material and news. We will also notify
you from time to time when we make updates to serve you better.</p>
<form action="" className="bg-white max-w-[400px] flex flex-row justify-between p-2 rounded  mt-[20px] ">
    <input type="text"  className="max-w-[100%] bg-none mt-[20px]  outline-none border-none" placeholder="nzubestdesmond@gmail.com" />
    <button type="submit" className="bg-slate-900 text-white px-1 rounded shadow-xl  md:text-[20px]">Subscribe</button>
</form>
</div>
            </div>
        </div>
    )
}