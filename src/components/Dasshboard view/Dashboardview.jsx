import React from "react";
import {BsNewspaper} from 'react-icons/bs';
import {MdPictureAsPdf} from 'react-icons/md';
import bgImg from '../../assets/images/admin.avif';
import {FaUsers} from 'react-icons/fa';

export const DashboardView = () => {
    return(
        <div>
            <div>
                <div  
        style={{ backgroundImage: `url(${bgImg})` }}
      className={`min-h-[30vh] relative after:left-0 my-[20px] after:rounded-[5px] rounded-[5px] after:right-0 after:absolute after:top-0 after:h-full bg-center flex justify-center items-center after:w-full after:bg-Tp pt-[50px]  px-[30px] bg-cover z-[1]  `}>
        <div data-aos='zoom-in-up' className=" text-center py-[50px] ">
        <h1 className="font-bold text-slate-50 relative z-[2] uppercase text-[20px] ">admin dashboard</h1>
<p className="text-slate-200 font-fonty relative z-[2] text-[17px] ">Welcome to admin dashboard</p>
        </div>

      </div>
                </div>
             <div className="flex flex-col items-center md:flex-row justify-center gap-5">
                <div className="text-center bg-gradient-to-r from-slate-50 to-slate-400 shadow-2xl px-[50px] rounded py-[10px] flex flex-col items-center">
                    <FaUsers className=" text-[50px] "/>
                  <h1 className="uppercase font-bold ">Total Users</h1>
                  <p className="text-[20px] font-semibold ">1</p>
                </div>

                <div className="text-center bg-gradient-to-r from-slate-50 to-slate-400 shadow-2xl px-[50px] rounded  py-[10px] flex flex-col items-center">
                    <BsNewspaper className=" text-[50px] "/>
                  <h1 className="uppercase font-bold ">Total News</h1>
                  <p className="text-[20px] font-semibold ">1</p>
                </div>

                <div className="text-center bg-gradient-to-r from-slate-50 to-slate-400 shadow-2xl px-[50px] rounded  py-[10px] flex flex-col items-center">
                    <MdPictureAsPdf className=" text-[50px] "/>
                  <h1 className="uppercase font-bold ">Available Book</h1>
                  <p className="text-[20px] font-semibold ">1</p>
                </div>
             </div>
        </div>
    )
}