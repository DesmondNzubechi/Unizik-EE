import cOutlineImg from '../../assets/images/cOutline5.avif'
import React from 'react'
import { Link } from 'react-router-dom'

export const CourseOutline = () => { 
    return(
        <div className="px-[20px] flex pt-[50px]  justify-around   flex-col rounded-[30px] bg-white gap-[40px] md:flex-row md:flex-row ... items-center py-[50px] ">
        <div className="flex flex-col max-w-[600px] gap-[20px] ">
            <h1 className="text-[20px]  w-fit  rounded-[15px] border-slate-900 text-slate-900 font-bold uppercase ">Course outlines</h1>
            <p className="md:text-[15px] text-[12px] font-[400] ">Our commitment to UNIZIK's electrical engineering students includes providing a carefully curated collection of course outlines. These materials are specifically designed to empower students with the information they need to make well-informed decisions about their academic journey.</p>
        <p><Link to='/Academics/course-outlines' className="bg-slate-900  hover:bg-slate-700 mt-[10px] text-slate-50 rounded-[3px] shadow-2xl p-[10px] font-semibold text-[15px] md:text-[20px]  ">View course outline</Link>
        </p>
        </div>
        <div className=" "> 
    <img className="rounded-[20px] max-w-[300px] md:max-w-[500px] "  src={cOutlineImg} alt="" />
        </div>
                </div>
    )
  }
  