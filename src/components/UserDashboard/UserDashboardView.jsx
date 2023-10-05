import React from "react";
import {BsNewspaper, BsFillCalendarEventFill, BsCalculator} from 'react-icons/bs';
import {MdPictureAsPdf} from 'react-icons/md';
import {FaUsers} from 'react-icons/fa';
import { Link } from "react-router-dom";
import {BsFillChatQuoteFill, BsBookHalf} from 'react-icons/bs';
import { GrResources } from 'react-icons/gr';
import { CgProfile } from 'react-icons/cg';
import { CalculateGp } from "../cgpa-calc/CgpaCalc";
import { SiBookstack } from 'react-icons/si';
export const UserDashboardView = () => {
    
   return ( 
        <div>
              <div className="">
                <div className="flex flex-col gap-2 text-center items-center">
                    <p className="text-slate-700 text-[15px] md:text-[20px]">Thursday, October 5, 2023.</p>
                <h1 className="font-semibold text-slate-900 text-[20px] md:text-[30px] ">Hello, Desmond Nzubechukwu</h1>
                </div>

                <div>
                </div>
            </div>
        <div className="flex overflow-x-hidden flex-col gap-[50px]">
          
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-[50px] items-center md:flex-row justify-center gap-5">
             <div className="text-center   py-[25px] md:min-w-[300px] border-slate-900 border-[10px] border bg-slate-200 gap-2 px-[50px] rounded h-[200px] justify-center py-[10px] flex flex-col items-center">
                    <SiBookstack className=" text-slate-500 text-[50px] "/>
                  <h1 className="uppercase text-[13px] md:text-[20px] font-bold ">Course Outlines</h1>
                </div>

                <div className="text-center   py-[25px] md:min-w-[300px] border-slate-900 border-[10px] border bg-slate-200 gap-2 px-[50px] rounded h-[200px] justify-center py-[10px] flex flex-col items-center">
                    <BsBookHalf className=" text-slate-500 text-[50px] "/>
                  <h1 className="uppercase text-[13px] md:text-[20px] font-bold ">Learning Resources</h1>
                </div>

                <div className="text-center   py-[25px] md:min-w-[300px] border-slate-900 border-[10px] border bg-slate-200 gap-2 px-[50px] rounded h-[200px] justify-center py-[10px] flex flex-col items-center">
                    <BsCalculator className=" text-slate-500 text-[50px] "/>
                  <h1 className="uppercase text-[13px] md:text-[20px] font-bold ">CGPA Calculator</h1>
          
                </div>

             </div>
  
            </div>
            </div>
    )
}