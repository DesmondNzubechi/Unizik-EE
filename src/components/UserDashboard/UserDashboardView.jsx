import React from "react";
import { BsCalculator} from 'react-icons/bs';
import {BsBookHalf} from 'react-icons/bs';
import { SiBookstack } from 'react-icons/si';
import { fullNewsContext } from "../context/Context";
import { useContext } from "react";
export const UserDashboardView = () => {
    const currentDate = new Date();
    const options = {
        year: 'numeric',
        month: 'long', // 'short' for abbreviated name, 'long' for full name
        day: 'numeric',
        weekday: 'long', // 'short' for abbreviated name, 'long' for full name
      };
      const fullDate = currentDate.toLocaleString(undefined, options);
    const { userDisplay, setUserDisplay, mainUser } = useContext(fullNewsContext);
   return ( 
        <div>
              <div className="pt-[120px]">
                <div className="flex flex-col gap-2 text-center items-center">
                   <p className="text-slate-700 text-[15px] md:text-[20px]">{fullDate}</p>
                   <h1 className="font-semibold text-slate-900 text-[20px] md:text-[30px] ">Hello, {mainUser[0]?.firstName} {mainUser[0]?.lastName}</h1>
                </div>
                <div>
                </div>
            </div>
        <div className="flex overflow-x-hidden flex-col gap-[50px]">
          
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-[50px] items-center md:flex-row justify-center gap-5">
             <div onClick={() => {
                    setUserDisplay({
                        courseOutline: true,
                        viewDashboard: false,
                        viewProfile: false,
                        learningResources: false,
                        cgpaCalc: false,
                        courseOutlineColor: 'text-green-500',
                        viewDashboardColor: 'text-slate-700',
                        viewProfileColor: 'text-slate-700',
                        learningResourcesColor: 'text-slate-700',
                        cgpaCalcColor: 'text-slate-700',
                    })
                }} className="text-center cursor-pointer   py-[25px] md:min-w-[300px] border-slate-900 border-[5px] border bg-slate-200 gap-2 px-[50px] rounded h-[200px] justify-center py-[10px] flex flex-col items-center">
                    <SiBookstack className=" text-slate-500 text-[50px] "/>
                  <h1 className="uppercase text-[13px] md:text-[20px] font-bold ">Course Outlines</h1>
                </div>

                   <div onClick={() => {
                         setUserDisplay({
                            courseOutline: false,
                            viewDashboard: false,
                            viewProfile: false,
                            learningResources: true,
                            cgpaCalc: false,
                            courseOutlineColor: 'text-slate-700',
                            viewDashboardColor: 'text-slate-700',
                            viewProfileColor: 'text-slate-700',
                            learningResourcesColor: 'text-green-500',
                            cgpaCalcColor: 'text-slate-700',
                        })
                }} className="text-center cursor-pointer   py-[25px] md:min-w-[300px] border-slate-900 border-[5px] border bg-slate-200 gap-2 px-[50px] rounded h-[200px] justify-center py-[10px] flex flex-col items-center">
                    <BsBookHalf className=" text-slate-500 text-[50px] "/>
                  <h1 className="uppercase text-[13px] md:text-[20px] font-bold ">Learning Resources</h1>
                </div>

                <div  onClick={() => {
                        setUserDisplay({
                            courseOutline: false,
                            viewDashboard: false,
                            viewProfile: false,
                            learningResources: false,
                            cgpaCalc: true,
                            courseOutlineColor: 'text-slate-700',
                            viewDashboardColor: 'text-slate-700',
                            viewProfileColor: 'text-slate-700',
                            learningResourcesColor: 'text-slate-700',
                            cgpaCalcColor: 'text-green-500',
                        })
                    }}  className="text-center  cursor-pointer py-[25px] md:min-w-[300px] border-slate-900 border-[5px] border bg-slate-200 gap-2 px-[50px] rounded h-[200px] justify-center py-[10px] flex flex-col items-center">
                    <BsCalculator className=" text-slate-500 text-[50px] "/>
                  <h1 className="uppercase text-[13px] md:text-[20px] font-bold ">CGPA Calculator</h1>
          
                </div>

             </div>
  
            </div>
            </div>
    )
}