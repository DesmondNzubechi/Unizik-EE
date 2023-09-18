import cOutlineImg from '../../assets/images/cOutline5.avif'
import React from 'react'
import { Link } from 'react-router-dom'

export const CourseOutline = () => { 
    return(
        <div className="px-[20px] flex pt-[50px]  justify-around   flex-col rounded-[30px] bg-white gap-[40px] md:flex-row md:flex-row ... items-center py-[100px] ">
        <div className="flex flex-col max-w-[700px] gap-[20px] ">
            <h1 className="text-[20px]  w-fit  rounded-[15px] border-slate-900 text-slate-900 font-bold uppercase ">Course outlines</h1>
            <p className="md:text-[15px] text-[12px] font-[400] ">We understand that having access to a comprehensive course outline is crucial for effective academic planning and success. Therefore, we have compiled a collection of course outlines specifically tailored to all the electrical engineering students in UNIZIK, ensuring that they have all the information they need to make informed decisions about their academic journey.</p>
        <p><Link to='/Course-outlines' className="bg-slate-900 hover:text-slate-50 text-[15px] text-yellow-500 px-[10px] capitalize py-[5px] mt-[60px] font-semibold rounded-[3px]  ">View course outline</Link>
        </p>
        </div>
        <div className=" max-w-[400px]">
            <img className="rounded-[20px] " src={cOutlineImg} alt="" />
        </div>
                </div>
    )
  }
  