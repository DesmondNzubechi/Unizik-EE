import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Level500 = () => {
const [isFirst, setIsFirst] = useState('First');
const [isFirstSemester, setIsFirstSemester] = useState(true);
const [isSecondSemester, setIsSecondSemester] = useState(false);
const [isCourse, setIsCourse] = useState(6);


const show1stSemesterC = () => {
    setIsFirstSemester(true);
    setIsSecondSemester(false);
    setIsFirst('First')
    setIsCourse(6);
};

const show2ndSemesterC = () => {
    setIsFirstSemester(false);
    setIsSecondSemester(true);
    setIsFirst('Second');
    setIsCourse(5);
};

    return (
        <div className="pt-[120px] pb-[50px] flex  justify-center  px-[20px] ">
     <div>
        <div className="text-center flex flex-col gap-[10px] ">
            <h1 className="uppercase text-slate-900 font-bold text-[15px] md:text-[25px] ">Courses offered in 500level/Final Year</h1>
            <p className="text-slate-700  capitalize font-semibold text-[12px] md:text-[20px] ">Electrical Engineering offers {isCourse} courses in 500Level {isFirst} Semester</p>
        </div>
        <div className="flex justify-center my-5">
        <div className="flex flex-row rounded  px-0 gap-5 bg-slate-900 ">
            <button onClick={show1stSemesterC} className="bg-yellow-500  px-[10px] py-[5px] font-semibold uppercase text-[14px] ">First Semester</button>
            <button onClick={show2ndSemesterC} className="bg-slate-900  px-[10px] py-[5px] font-semibold uppercase text-white text-[14px] ">Second Semester</button>
        </div>
        </div>
       { isFirstSemester &&
        <div className="my-[30px] gap-[20px] grid  grid-cols-1 md:grid-cols-3 ">
     
       <div className=" rounded  shadow-2xl p-[10px] border-t-[5px] w-full border- border-t flex flex-col items-start  gap-1 ">
        <span className="flex flex-row justify-around items-center gap-[10px] ">
            <h1 className="font-semibold text-[12px]  ">Course Title:</h1>
            <p className="text-[12px] text-slate-700 ">Design of electromechanical Devices and Electrical Machines </p>
        </span>
        <span  className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[12px]  ">Course Code:</h1>
            <p className="text-[12px] text-slate-700 ">Ele549</p>
        </span>
        <span className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[12px]  ">Course Credit Unit:</h1>
            <p className="text-[12px] text-slate-700 ">3</p>
        </span>
        <Link to='/Ele549courseoutline' className="bg-yellow-500 hover:bg-slate-900 w-full text-center text-white my-[10px] rounded py-[5px] text-[14px] font-semibold ">View Course Outline</Link>
       </div>
       <div className=" rounded  shadow-2xl p-[10px] border-t-[5px] border- border-t flex flex-col items-start  gap-1 ">
        <span className="flex flex-row justify-around items-center gap-[10px] ">
            <h1 className="font-semibold text-[12px]  ">Course Title:</h1>
            <p className="text-[12px] text-slate-700 "> Real Time Computing and Control</p>
        </span>
        <span  className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[12px]  ">Course Code:</h1>
            <p className="text-[12px] text-slate-700 ">Ece517</p>
        </span>
        <span className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[12px]  ">Course Credit Unit:</h1>
            <p className="text-[12px] text-slate-700 ">3</p>
        </span>
        <Link to='/Ece517courseoutline' className="bg-yellow-500 hover:bg-slate-900 w-full text-center text-white my-[10px] rounded py-[5px] text-[14px] font-semibold ">View Course Outline</Link>
       </div>
       <div className=" rounded  shadow-2xl p-[10px] border-t-[5px] border- border-t flex flex-col items-start  gap-1 ">
        <span className="flex flex-row justify-around items-center gap-[10px] ">
            <h1 className="font-semibold text-[12px]  ">Course Title:</h1>
            <p className="text-[12px] text-slate-700 "> Computer Aided Circuit Design</p>
        </span>
        <span  className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[12px]  ">Course Code:</h1>
            <p className="text-[12px] text-slate-700 ">Ece505</p>
        </span>
        <span className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[12px]  ">Course Credit Unit:</h1>
            <p className="text-[12px] text-slate-700 ">3</p>
        </span>
        <Link to='/Ece505courseoutline' className="bg-yellow-500 hover:bg-slate-900 w-full text-center text-white my-[10px] rounded py-[5px] text-[14px] font-semibold ">View Course Outline</Link>
       </div>
       <div className=" rounded  shadow-2xl p-[10px] border-t-[5px] border- border-t flex flex-col items-start  gap-1 ">
        <span className="flex flex-row justify-around items-center gap-[10px] ">
            <h1 className="font-semibold text-[12px]  ">Course Title:</h1>
            <p className="text-[12px] text-slate-700 ">Power Electronics and Drives</p>
        </span>
        <span  className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[12px]  ">Course Code:</h1>
            <p className="text-[12px] text-slate-700 ">Ele547</p>
        </span>
        <span className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[12px]  ">Course Credit Unit:</h1>
            <p className="text-[12px] text-slate-700 ">3</p>
        </span>
        <Link to='/Ele547courseoutline' className="bg-yellow-500 hover:bg-slate-900 w-full text-center text-white my-[10px] rounded py-[5px] text-[14px] font-semibold ">View Course Outline</Link>
       </div>
       <div className=" rounded  shadow-2xl p-[10px] border-t-[5px] border- border-t flex flex-col items-start  gap-1 ">
        <span className="flex flex-row justify-around items-center gap-[10px] ">
            <h1 className="font-semibold text-[12px]  ">Course Title:</h1>
            <p className="text-[12px] text-slate-700 "> Power System Analysis</p>
        </span>
        <span  className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[12px]  ">Course Code:</h1>
            <p className="text-[12px] text-slate-700 ">Ele553</p>
        </span>
        <span className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[12px]  ">Course Credit Unit:</h1>
            <p className="text-[12px] text-slate-700 ">3</p>
        </span>
        <Link to='/Ele553courseoutline' className="bg-yellow-500 hover:bg-slate-900 w-full text-center text-white my-[10px] rounded py-[5px] text-[14px] font-semibold ">View Course Outline</Link>
       </div>
       <div className=" rounded  shadow-2xl p-[10px] border-t-[5px] border- border-t flex flex-col items-start  gap-1 ">
        <span className="flex flex-row justify-around items-center gap-[10px] ">
            <h1 className="font-semibold text-[12px]  ">Course Title:</h1>
            <p className="text-[12px] text-slate-700 ">Electric Power Transmission</p>
        </span>
        <span  className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[12px]  ">Course Code:</h1>
            <p className="text-[12px] text-slate-700 ">Ele557</p>
        </span>
        <span className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[12px]  ">Course Credit Unit:</h1>
            <p className="text-[12px] text-slate-700 ">3</p>
        </span>
        <Link to='/Ele557courseoutline' className="bg-yellow-500 hover:bg-slate-900 w-full text-center text-white my-[10px] rounded py-[5px] text-[14px] font-semibold ">View Course Outline</Link>
       </div>
      </div>
}

{ isSecondSemester &&
        <div className="my-[30px] gap-[20px] grid  grid-cols-1 md:grid-cols-3 ">
       <div className=" rounded  shadow-2xl p-[10px]  border-t-[5px] border- border-t flex flex-col items-start  gap-1 ">
        <span className="flex flex-row justify-around items-center gap-[10px] ">
            <h1 className="font-semibold text-[12px]  ">Course Title:</h1>
            <p className="text-[12px] text-slate-700 ">Power System Planning and Control</p>
        </span>
        <span  className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[12px]  ">Course Code:</h1>
            <p className="text-[12px] text-slate-700 ">Ele554</p>
        </span>
        <span className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[12px]  ">Course Credit Unit:</h1>
            <p className="text-[12px] text-slate-700 ">3</p>
        </span>
        <Link to='/Ele554courseoutline' className="bg-slate-900 hover:bg-yellow-500 w-full text-center text-white my-[10px] rounded py-[5px] text-[14px] font-semibold ">View Course Outline</Link>
       </div>
       
       <div className=" rounded  shadow-2xl p-[10px] border-t-[5px] w-full border- border-t flex flex-col items-start  gap-1 ">
        <span className="flex flex-row justify-around items-center gap-[10px] ">
            <h1 className="font-semibold text-[12px]  ">Course Title:</h1>
            <p className="text-[12px] text-slate-700 ">Power Plant Protection and Control </p>
        </span>
        <span  className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[12px]  ">Course Code:</h1>
            <p className="text-[12px] text-slate-700 ">Ele556</p>
        </span>
        <span className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[12px]  ">Course Credit Unit:</h1>
            <p className="text-[12px] text-slate-700 ">3</p>
        </span>
        <Link to='/Ele556courseoutline' className="bg-slate-900 hover:bg-yellow-500 w-full text-center text-white my-[10px] rounded py-[5px] text-[14px] font-semibold ">View Course Outline</Link>
       </div>
       <div className=" rounded  shadow-2xl p-[10px] border-t-[5px] border- border-t flex flex-col items-start  gap-1 ">
        <span className="flex flex-row justify-around items-center gap-[10px] ">
            <h1 className="font-semibold text-[12px]  ">Course Title:</h1>
            <p className="text-[12px] text-slate-700 ">High Voltage Engineering</p>
        </span>
        <span  className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[12px]  ">Course Code:</h1>
            <p className="text-[12px] text-slate-700 ">Ele558</p>
        </span>
        <span className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[12px]  ">Course Credit Unit:</h1>
            <p className="text-[12px] text-slate-700 ">3</p>
        </span>
        <Link to='/Ele558courseoutline' className="bg-slate-900 hover:bg-yellow-500 w-full text-center text-white my-[10px] rounded py-[5px] text-[14px] font-semibold ">View Course Outline</Link>
       </div>
       <div className=" rounded  shadow-2xl p-[10px] border-t-[5px] border- border-t flex flex-col items-start  gap-1 ">
        <span className="flex flex-row justify-around items-center gap-[10px] ">
            <h1 className="font-semibold text-[12px]  ">Course Title:</h1>
            <p className="text-[12px] text-slate-700 ">Control Systems  </p>
        </span>
        <span  className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[12px]  ">Course Code:</h1>
            <p className="text-[12px] text-slate-700 ">Ele574</p>
        </span>
        <span className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[12px]  ">Course Credit Unit:</h1>
            <p className="text-[12px] text-slate-700 ">3</p>
        </span>
        <Link to='/Ele574courseoutline' className="bg-slate-900 hover:bg-yellow-500 w-full text-center text-white my-[10px] rounded py-[5px] text-[14px] font-semibold ">View Course Outline</Link>
       </div>
      
       <div className=" rounded  shadow-2xl p-[10px] border-t-[5px] border- border-t flex flex-col items-start  gap-1 ">
        <span className="flex flex-row justify-around items-center gap-[10px] ">
            <h1 className="font-semibold text-[12px]  ">Course Title:</h1>
            <p className="text-[12px] text-slate-700 ">Network Analysis and Synthesis </p>
        </span>
        <span  className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[12px]  ">Course Code:</h1>
            <p className="text-[12px] text-slate-700 ">Ele504</p>
        </span>
        <span className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[12px]  ">Course Credit Unit:</h1>
            <p className="text-[12px] text-slate-700 ">3</p>
        </span>
        <Link to='/Ele504courseoutline' className="bg-slate-900 hover:bg-yellow-500 w-full text-center text-white my-[10px] rounded py-[5px] text-[14px] font-semibold ">View Course Outline</Link>
       </div>
      
        </div>
}

     </div>
        </div>
    )
}
