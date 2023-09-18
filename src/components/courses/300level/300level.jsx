import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Level300 = () => {
const [isFirst, setIsFirst] = useState('First');
const [isFirstSemester, setIsFirstSemester] = useState(true);
const [isSecondSemester, setIsSecondSemester] = useState(false);
const [isCourse, setIsCourse] = useState(10);


const show1stSemesterC = () => {
    setIsFirstSemester(true);
    setIsSecondSemester(false);
    setIsFirst('First')
    setIsCourse(10);
};

const show2ndSemesterC = () => {
    setIsFirstSemester(false);
    setIsSecondSemester(true);
    setIsFirst('Second');
    setIsCourse(10);
};

    return (
        <div className="pt-[120px] pb-[50px] flex  justify-center  px-[20px] ">
     <div>
        <div className="text-center flex flex-col gap-[10px] ">
            <h1 className="uppercase text-slate-900 font-bold text-[15px] md:text-[25px] ">Courses offered in 200 level</h1>
            <p className="text-slate-700  capitalize font-semibold text-[12px] md:text-[20px]  ">Electrical Engineering offers {isCourse} courses in 200Level {isFirst} Semester</p>
        </div>
        <div className="flex justify-center my-5">
        <div className="flex flex-row rounded  px-0 gap-5 bg-slate-900 ">
            <button onClick={show1stSemesterC} className="bg-yellow-500  px-[10px] py-[5px] font-semibold uppercase text-[14px] ">First Semester</button>
            <button onClick={show2ndSemesterC} className="bg-slate-900  px-[10px] py-[5px] font-semibold uppercase text-white text-[14px] ">Second Semester</button>
        </div>
        </div>
       { isFirstSemester &&
        <div className="my-[30px] gap-[20px] grid  grid-cols-1 md:grid-cols-3 ">
       <div className=" rounded  shadow-2xl p-[10px]  border-t-[5px] border- border-t flex flex-col items-start  gap-1 ">
        <span className="flex flex-row justify-around items-center gap-[10px] ">
            <h1 className="font-semibold text-[12px]    ">Course Title:</h1>
            <p className="text-[12px] text-slate-700 "> Telecommunications I </p>
        </span>
        <span  className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[12px]    ">Course Code:</h1>
            <p className="text-[12px] text-slate-700 ">Ece321</p>
        </span>
        <span className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[12px]    ">Course Credit Unit:</h1>
            <p className="text-[12px] text-slate-700 ">2</p>
        </span>
        <Link to='/Ece321courseoutline' className="bg-yellow-500 hover:bg-slate-900 w-full text-center text-white my-[10px] rounded py-[5px] text-[14px] font-semibold ">View Course Outline</Link>
       </div>
     
       <div className=" rounded  shadow-2xl p-[10px] border-t-[5px] w-full border- border-t flex flex-col items-start  gap-1 ">
        <span className="flex flex-row justify-around items-center gap-[10px] ">
            <h1 className="font-semibold text-[12px]    ">Course Title:</h1>
            <p className="text-[12px] text-slate-700 ">Engineering Mathematics III</p>
        </span>
        <span  className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[12px]    ">Course Code:</h1>
            <p className="text-[12px] text-slate-700 ">Feg303</p>
        </span>
        <span className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[12px]    ">Course Credit Unit:</h1>
            <p className="text-[12px] text-slate-700 ">3</p>
        </span>
        <Link to='/Feg303courseoutline' className="bg-yellow-500 hover:bg-slate-900 w-full text-center text-white my-[10px] rounded py-[5px] text-[14px] font-semibold ">View Course Outline</Link>
       </div>
       <div className=" rounded  shadow-2xl p-[10px] border-t-[5px] border- border-t flex flex-col items-start  gap-1 ">
        <span className="flex flex-row justify-around items-center gap-[10px] ">
            <h1 className="font-semibold text-[12px]    ">Course Title:</h1>
            <p className="text-[12px] text-slate-700 "> Circuit Theory II</p>
        </span>
        <span  className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[12px]    ">Course Code:</h1>
            <p className="text-[12px] text-slate-700 ">Ele311</p>
        </span>
        <span className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[12px]    ">Course Credit Unit:</h1>
            <p className="text-[12px] text-slate-700 ">2</p>
        </span>
        <Link to='/Ele311courseoutline' className="bg-yellow-500 hover:bg-slate-900 w-full text-center text-white my-[10px] rounded py-[5px] text-[14px] font-semibold ">View Course Outline</Link>
       </div>
       <div className=" rounded  shadow-2xl p-[10px] border-t-[5px] border- border-t flex flex-col items-start  gap-1 ">
        <span className="flex flex-row justify-around items-center gap-[10px] ">
            <h1 className="font-semibold text-[12px]    ">Course Title:</h1>
            <p className="text-[12px] text-slate-700 "> Electrical Devices and Circuits </p>
        </span>
        <span  className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[12px]    ">Course Code:</h1>
            <p className="text-[12px] text-slate-700 ">Ece323</p>
        </span>
        <span className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[12px]    ">Course Credit Unit:</h1>
            <p className="text-[12px] text-slate-700 ">2</p>
        </span>
        <Link to='/Ece323courseoutline' className="bg-yellow-500 hover:bg-slate-900 w-full text-center text-white my-[10px] rounded py-[5px] text-[14px] font-semibold ">View Course Outline</Link>
       </div>
       <div className=" rounded  shadow-2xl p-[10px] border-t-[5px] border- border-t flex flex-col items-start  gap-1 ">
        <span className="flex flex-row justify-around items-center gap-[10px] ">
            <h1 className="font-semibold text-[12px]    ">Course Title:</h1>
            <p className="text-[12px] text-slate-700 ">Digital System Design </p>
        </span>
        <span  className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[12px]    ">Course Code:</h1>
            <p className="text-[12px] text-slate-700 ">Ece333</p>
        </span>
        <span className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[12px]    ">Course Credit Unit:</h1>
            <p className="text-[12px] text-slate-700 ">2</p>
        </span>
        <Link to='/Ece333courseoutline' className="bg-yellow-500 hover:bg-slate-900 w-full text-center text-white my-[10px] rounded py-[5px] text-[14px] font-semibold ">View Course Outline</Link>
       </div>
       <div className=" rounded  shadow-2xl p-[10px] border-t-[5px] border- border-t flex flex-col items-start  gap-1 ">
        <span className="flex flex-row justify-around items-center gap-[10px] ">
            <h1 className="font-semibold text-[12px]    ">Course Title:</h1>
            <p className="text-[12px] text-slate-700 "> Electromagnetic Field and Waves </p>
        </span>
        <span  className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[12px]    ">Course Code:</h1>
            <p className="text-[12px] text-slate-700 ">Ele341</p>
        </span>
        <span className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[12px]    ">Course Credit Unit:</h1>
            <p className="text-[12px] text-slate-700 ">3</p>
        </span>
        <Link to='/Ele341courseoutline' className="bg-yellow-500 hover:bg-slate-900 w-full text-center text-white my-[10px] rounded py-[5px] text-[14px] font-semibold ">View Course Outline</Link>
       </div>
       <div className=" rounded  shadow-2xl p-[10px] border-t-[5px] border- border-t flex flex-col items-start  gap-1 ">
        <span className="flex flex-row justify-around items-center gap-[10px] ">
            <h1 className="font-semibold text-[12px]    ">Course Title:</h1>
            <p className="text-[12px] text-slate-700 ">Signals and Systems</p>
        </span>
        <span  className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[12px]    ">Course Code:</h1>
            <p className="text-[12px] text-slate-700 ">Ece331</p>
        </span>
        <span className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[12px]    ">Course Credit Unit:</h1>
            <p className="text-[12px] text-slate-700 ">2</p>
        </span>
        <Link to='/Ece331courseoutline' className="bg-yellow-500 hover:bg-slate-900 w-full text-center text-white my-[10px] rounded py-[5px] text-[14px] font-semibold ">View Course Outline</Link>
       </div>
       <div className=" rounded  shadow-2xl p-[10px] border-t-[5px] border- border-t flex flex-col items-start  gap-1 ">
        <span className="flex flex-row justify-around items-center gap-[10px] ">
            <h1 className="font-semibold text-[12px]    ">Course Title:</h1>
            <p className="text-[12px] text-slate-700 "> Electromechanical Devices and Machines I</p>
        </span>
        <span  className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[12px]    ">Course Code:</h1>
            <p className="text-[12px] text-slate-700 ">Ele343</p>
        </span>
        <span className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[12px]    ">Course Credit Unit:</h1>
            <p className="text-[12px] text-slate-700 ">2</p>
        </span>
        <Link to='/Ele343courseoutline' className="bg-yellow-500 hover:bg-slate-900 w-full text-center text-white my-[10px] rounded py-[5px] text-[14px] font-semibold ">View Course Outline</Link>
       </div>
       <div className=" rounded  shadow-2xl p-[10px] border-t-[5px] border- border-t flex flex-col items-start  gap-1 ">
        <span className="flex flex-row justify-around items-center gap-[10px] ">
            <h1 className="font-semibold text-[12px]    ">Course Title:</h1>
            <p className="text-[12px] text-slate-700 ">Power Systems</p>
        </span>
        <span  className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[12px]    ">Course Code:</h1>
            <p className="text-[12px] text-slate-700 ">Ele353</p>
        </span>
        <span className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[12px]    ">Course Credit Unit:</h1>
            <p className="text-[12px] text-slate-700 ">3</p>
        </span>
        <Link to='/Ele353courseoutline' className="bg-yellow-500 hover:bg-slate-900 w-full text-center text-white my-[10px] rounded py-[5px] text-[14px] font-semibold ">View Course Outline</Link>
       </div>
        </div>
}

{ isSecondSemester &&
        <div className="my-[30px] gap-[20px] grid  grid-cols-1 md:grid-cols-3 ">
       <div className=" rounded  shadow-2xl p-[10px]  border-t-[5px] border- border-t flex flex-col items-start  gap-1 ">
        <span className="flex flex-row justify-around items-center gap-[10px] ">
            <h1 className="font-semibold text-[12px]    ">Course Title:</h1>
            <p className="text-[12px] text-slate-700 ">Circuit Theory II</p>
        </span>
        <span  className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[12px]    ">Course Code:</h1>
            <p className="text-[12px] text-slate-700 ">Ele312</p>
        </span>
        <span className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[12px]    ">Course Credit Unit:</h1>
            <p className="text-[12px] text-slate-700 ">2</p>
        </span>
        <Link to='/Ele312courseoutline' className="bg-slate-900 w-full text-center text-white my-[10px] rounded hover:bg-yellow-500 py-[5px] text-[14px] font-semibold ">View Course Outline</Link>
       </div>
       
       <div className=" rounded  shadow-2xl p-[10px] border-t-[5px] w-full border- border-t flex flex-col items-start  gap-1 ">
        <span className="flex flex-row justify-around items-center gap-[10px] ">
            <h1 className="font-semibold text-[12px]    ">Course Title:</h1>
            <p className="text-[12px] text-slate-700 ">Electronic Devices and Circuits </p>
        </span>
        <span  className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[12px]    ">Course Code:</h1>
            <p className="text-[12px] text-slate-700 ">Ece328</p>
        </span>
        <span className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[12px]    ">Course Credit Unit:</h1>
            <p className="text-[12px] text-slate-700 ">2</p>
        </span>
        <Link to='/Ece328courseoutline' className="bg-slate-900 w-full text-center text-white my-[10px] rounded hover:bg-yellow-500 py-[5px] text-[14px] font-semibold ">View Course Outline</Link>
       </div>
       <div className=" rounded  shadow-2xl p-[10px] border-t-[5px] border- border-t flex flex-col items-start  gap-1 ">
        <span className="flex flex-row justify-around items-center gap-[10px] ">
            <h1 className="font-semibold text-[12px]    ">Course Title:</h1>
            <p className="text-[12px] text-slate-700 ">Physical Electronics  </p>
        </span>
        <span  className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[12px]    ">Course Code:</h1>
            <p className="text-[12px] text-slate-700 ">Ece326</p>
        </span>
        <span className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[12px]    ">Course Credit Unit:</h1>
            <p className="text-[12px] text-slate-700 ">2</p>
        </span>
        <Link to='/Ece326courseoutline' className="bg-slate-900 w-full text-center text-white my-[10px] rounded hover:bg-yellow-500 py-[5px] text-[14px] font-semibold ">View Course Outline</Link>
       </div>
       <div className=" rounded  shadow-2xl p-[10px] border-t-[5px] border- border-t flex flex-col items-start  gap-1 ">
        <span className="flex flex-row justify-around items-center gap-[10px] ">
            <h1 className="font-semibold text-[12px]    ">Course Title:</h1>
            <p className="text-[12px] text-slate-700 ">Digital System Design II </p>
        </span>
        <span  className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[12px]    ">Course Code:</h1>
            <p className="text-[12px] text-slate-700 ">Ece334</p>
        </span>
        <span className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[12px]    ">Course Credit Unit:</h1>
            <p className="text-[12px] text-slate-700 ">2</p>
        </span>
        <Link to='/Ece334courseoutline' className="bg-slate-900 w-full text-center text-white my-[10px] rounded hover:bg-yellow-500 py-[5px] text-[14px] font-semibold ">View Course Outline</Link>
       </div>
       <div className=" rounded  shadow-2xl p-[10px] border-t-[5px] border- border-t flex flex-col items-start  gap-1 ">
        <span className="flex flex-row justify-around items-center gap-[10px] ">
            <h1 className="font-semibold text-[12px]    ">Course Title:</h1>
            <p className="text-[12px] text-slate-700 ">Feedback and Control Systems </p>
        </span>
        <span  className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[12px]    ">Course Code:</h1>
            <p className="text-[12px] text-slate-700 ">Ece382</p>
        </span>
        <span className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[12px]    ">Course Credit Unit:</h1>
            <p className="text-[12px] text-slate-700 ">2</p>
        </span>
        <Link to='/Ece382courseoutline' className="bg-slate-900 w-full text-center text-white my-[10px] rounded hover:bg-yellow-500 py-[5px] text-[14px] font-semibold ">View Course Outline</Link>
       </div>
       
       <div className=" rounded  shadow-2xl p-[10px] border-t-[5px] border- border-t flex flex-col items-start  gap-1 ">
        <span className="flex flex-row justify-around items-center gap-[10px] ">
            <h1 className="font-semibold text-[12px]    ">Course Title:</h1>
            <p className="text-[12px] text-slate-700 "> Instrumentation And Measurement I </p>
        </span>
        <span  className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[12px]    ">Course Code:</h1>
            <p className="text-[12px] text-slate-700 ">Ece372</p>
        </span>
        <span className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[12px]    ">Course Credit Unit:</h1>
            <p className="text-[12px] text-slate-700 ">2</p>
        </span>
        <Link to='/Ece372courseoutline' className="bg-slate-900 w-full text-center text-white my-[10px] rounded hover:bg-yellow-500 py-[5px] text-[14px] font-semibold ">View Course Outline</Link>
       </div>
       <div className=" rounded  shadow-2xl p-[10px] border-t-[5px] border- border-t flex flex-col items-start  gap-1 ">
        <span className="flex flex-row justify-around items-center gap-[10px] ">
            <h1 className="font-semibold text-[12px]    ">Course Title:</h1>
            <p className="text-[12px] text-slate-700 ">Electrodynamic </p>
        </span>
        <span  className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[12px]    ">Course Code:</h1>
            <p className="text-[12px] text-slate-700 ">Ele342</p>
        </span>
        <span className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[12px]    ">Course Credit Unit:</h1>
            <p className="text-[12px] text-slate-700 ">2</p>
        </span>
        <Link to='/Ele342courseoutline' className="bg-slate-900 w-full text-center text-white my-[10px] rounded hover:bg-yellow-500 py-[5px] text-[14px] font-semibold ">View Course Outline</Link>
       </div>
       <div className=" rounded  shadow-2xl p-[10px] border-t-[5px] border- border-t flex flex-col items-start  gap-1 ">
        <span className="flex flex-row justify-around items-center gap-[10px] ">
            <h1 className="font-semibold text-[12px]    ">Course Title:</h1>
            <p className="text-[12px] text-slate-700 "> Electromechanical Devices and Machines</p>
        </span>
        <span  className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[12px]    ">Course Code:</h1>
            <p className="text-[12px] text-slate-700 ">Ece344</p>
        </span>
        <span className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[12px]    ">Course Credit Unit:</h1>
            <p className="text-[12px] text-slate-700 ">2</p>
        </span>
        <Link to='/Ece344courseoutline' className="bg-slate-900 w-full text-center text-white my-[10px] rounded hover:bg-yellow-500 py-[5px] text-[14px] font-semibold ">View Course Outline</Link>
       </div>
       
       <div className=" rounded  shadow-2xl p-[10px] border-t-[5px] border- border-t flex flex-col items-start  gap-1 ">
        <span className="flex flex-row justify-around items-center gap-[10px] ">
            <h1 className="font-semibold text-[12px]    ">Course Title:</h1>
            <p className="text-[12px] text-slate-700 ">Telecommunication II </p>
        </span>
        <span  className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[12px]    ">Course Code:</h1>
            <p className="text-[12px] text-slate-700 ">Ece322</p>
        </span>
        <span className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[12px]    ">Course Credit Unit:</h1>
            <p className="text-[12px] text-slate-700 ">2</p>
        </span>
        <Link to='/Ece322courseoutline' className="bg-slate-900 w-full text-center text-white my-[10px] rounded hover:bg-yellow-500 py-[5px] text-[14px] font-semibold ">View Course Outline</Link>
       </div>

       <div className=" rounded  shadow-2xl p-[10px] border-t-[5px] border- border-t flex flex-col items-start  gap-1 ">
        <span className="flex flex-row justify-around items-center gap-[10px] ">
            <h1 className="font-semibold text-[12px]    ">Course Title:</h1>
            <p className="text-[12px] text-slate-700 ">Electrical Services Design</p>
        </span>
        <span  className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[12px]    ">Course Code:</h1>
            <p className="text-[12px] text-slate-700 ">Ele314</p>
        </span>
        <span className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[12px]    ">Course Credit Unit:</h1>
            <p className="text-[12px] text-slate-700 ">2</p>
        </span>
        <Link to='/Ele314courseoutline' className="bg-slate-900 w-full text-center text-white my-[10px] rounded hover:bg-yellow-500 py-[5px] text-[14px] font-semibold ">View Course Outline</Link>
       </div>
        </div>
}

     </div>
        </div>
    )
}
