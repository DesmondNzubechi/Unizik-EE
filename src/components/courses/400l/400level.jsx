import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Level400 = () => {

    return (
        <div className="pt-[120px] pb-[50px] flex  justify-center  px-[20px] ">
     <div>
        <div className="text-center flex flex-col gap-[10px] ">
            <h1 className="uppercase text-slate-900 font-bold text-[20px] md:text-[30px] ">Courses offered in 400 level</h1>
            <p className="text-slate-700  capitalize text-[18px] md:text-[25px] ">Electrical Engineering offers 6 courses in 400Level First Semester</p>
        </div>
        <div className="flex justify-center my-5">
        <div className="flex flex-row rounded  px-0 gap-5 bg-slate-900 ">
            <button  className="bg-slate-900  px-[10px] py-[5px] text-white font-semibold uppercase text-[17px] ">First Semester</button>
          
        </div>
        </div>
     
        <div className="my-[30px] gap-[20px] grid  grid-cols-1 md:grid-cols-3 ">
       <div className=" rounded  shadow-2xl p-[10px]  border-t-[5px] border- border-t flex flex-col items-start  gap-1 ">
        <span className="flex flex-row justify-around items-center gap-[10px] ">
            <h1 className="font-semibold text-[15px]  ">Course Title:</h1>
            <p className="text-[15px] text-slate-700 ">Circuit Theory III </p>
        </span>
        <span  className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[15px]  ">Course Code:</h1>
            <p className="text-[15px] text-slate-700 ">Ele403</p>
        </span>
        <span className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[15px]  ">Course Credit Unit:</h1>
            <p className="text-[15px] text-slate-700 ">3</p>
        </span>
        <Link to='/Ele403courseoutline' className="bg-slate-900 w-full text-center text-white my-[10px] rounded py-[5px] text-[17px] font-semibold ">View Course Outline</Link>
       </div>
     
       <div className=" rounded  shadow-2xl p-[10px] border-t-[5px] w-full border- border-t flex flex-col items-start  gap-1 ">
        <span className="flex flex-row justify-around items-center gap-[10px] ">
            <h1 className="font-semibold text-[15px]  ">Course Title:</h1>
            <p className="text-[15px] text-slate-700 ">Engineering Contracts and Specification</p>
        </span>
        <span  className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[15px]  ">Course Code:</h1>
            <p className="text-[15px] text-slate-700 ">Cve423</p>
        </span>
        <span className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[15px]  ">Course Credit Unit:</h1>
            <p className="text-[15px] text-slate-700 ">2</p>
        </span>
        <Link to='/Cve423courseoutline' className="bg-slate-900 w-full text-center text-white my-[10px] rounded py-[5px] text-[17px] font-semibold ">View Course Outline</Link>
       </div>
       <div className=" rounded  shadow-2xl p-[10px] border-t-[5px] border- border-t flex flex-col items-start  gap-1 ">
        <span className="flex flex-row justify-around items-center gap-[10px] ">
            <h1 className="font-semibold text-[15px]  ">Course Title:</h1>
            <p className="text-[15px] text-slate-700 ">Advanced Circuit Techniques</p>
        </span>
        <span  className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[15px]  ">Course Code:</h1>
            <p className="text-[15px] text-slate-700 ">Ece427</p>
        </span>
        <span className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[15px]  ">Course Credit Unit:</h1>
            <p className="text-[15px] text-slate-700 ">2</p>
        </span>
        <Link to='/Ece427courseoutline' className="bg-slate-900 w-full text-center text-white my-[10px] rounded py-[5px] text-[17px] font-semibold ">View Course Outline</Link>
       </div>
       <div className=" rounded  shadow-2xl p-[10px] border-t-[5px] border- border-t flex flex-col items-start  gap-1 ">
        <span className="flex flex-row justify-around items-center gap-[10px] ">
            <h1 className="font-semibold text-[15px]  ">Course Title:</h1>
            <p className="text-[15px] text-slate-700 "> Dynamics of Electrical Machine</p>
        </span>
        <span  className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[15px]  ">Course Code:</h1>
            <p className="text-[15px] text-slate-700 ">Ele445</p>
        </span>
        <span className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[15px]  ">Course Credit Unit:</h1>
            <p className="text-[15px] text-slate-700 ">3</p>
        </span>
        <Link to='/Ele445courseoutline' className="bg-slate-900 w-full text-center text-white my-[10px] rounded py-[5px] text-[17px] font-semibold ">View Course Outline</Link>
       </div>
       <div className=" rounded  shadow-2xl p-[10px] border-t-[5px] border- border-t flex flex-col items-start  gap-1 ">
        <span className="flex flex-row justify-around items-center gap-[10px] ">
            <h1 className="font-semibold text-[15px]  ">Course Title:</h1>
            <p className="text-[15px] text-slate-700 ">Alternative Energy Studies</p>
        </span>
        <span  className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[15px]  ">Course Code:</h1>
            <p className="text-[15px] text-slate-700 ">Ele453</p>
        </span>
        <span className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[15px]  ">Course Credit Unit:</h1>
            <p className="text-[15px] text-slate-700 ">3</p>
        </span>
        <Link to='/Ele453courseoutline' className="bg-slate-900 w-full text-center text-white my-[10px] rounded py-[5px] text-[17px] font-semibold ">View Course Outline</Link>
       </div>
       <div className=" rounded  shadow-2xl p-[10px] border-t-[5px] border- border-t flex flex-col items-start  gap-1 ">
        <span className="flex flex-row justify-around items-center gap-[10px] ">
            <h1 className="font-semibold text-[15px]  ">Course Title:</h1>
            <p className="text-[15px] text-slate-700 ">Instrumentation and Measurement II</p>
        </span>
        <span  className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[15px]  ">Course Code:</h1>
            <p className="text-[15px] text-slate-700 ">Ele473</p>
        </span>
        <span className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[15px]  ">Course Credit Unit:</h1>
            <p className="text-[15px] text-slate-700 ">3</p>
        </span>
        <Link to='/Ele473courseoutline' className="bg-slate-900 w-full text-center text-white my-[10px] rounded py-[5px] text-[17px] font-semibold ">View Course Outline</Link>
       </div>
       <div className=" rounded  shadow-2xl p-[10px] border-t-[5px] border- border-t flex flex-col items-start  gap-1 ">
        <span className="flex flex-row justify-around items-center gap-[10px] ">
            <h1 className="font-semibold text-[15px]  ">Course Title:</h1>
            <p className="text-[15px] text-slate-700 "> Engineering Mathematics IV</p>
        </span>
        <span  className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[15px]  ">Course Code:</h1>
            <p className="text-[15px] text-slate-700 ">Feg404</p>
        </span>
        <span className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[15px]  ">Course Credit Unit:</h1>
            <p className="text-[15px] text-slate-700 ">3</p>
        </span>
        <Link to='/Feg404courseoutline' className="bg-slate-900 w-full text-center text-white my-[10px] rounded py-[5px] text-[17px] font-semibold ">View Course Outline</Link>
       </div>
      
        </div>


     </div>
        </div>
    )
}
