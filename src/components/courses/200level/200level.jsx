import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Level200 = () => {
const [isFirst, setIsFirst] = useState('First');
const [isFirstSemester, setIsFirstSemester] = useState(true);
const [isSecondSemester, setIsSecondSemester] = useState(false);
const [isCourse, setIsCourse] = useState(9);


const show1stSemesterC = () => {
    setIsFirstSemester(true);
    setIsSecondSemester(false);
    setIsFirst('First')
    setIsCourse(9);
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
            <h1 className="uppercase text-slate-900 font-bold text-[20px] md:text-[30px] ">Courses offered in 200 level</h1>
            <p className="text-slate-700  capitalize text-[18px] md:text-[25px] ">Electrical Engineering offers {isCourse} courses in 200Level {isFirst} Semester</p>
        </div>
        <div className="flex justify-center my-5">
        <div className="flex flex-row rounded  px-0 gap-5 bg-slate-900 ">
            <button onClick={show1stSemesterC} className="bg-yellow-500  px-[10px] py-[5px] font-semibold uppercase text-[17px] ">First Semester</button>
            <button onClick={show2ndSemesterC} className="bg-slate-900  px-[10px] py-[5px] font-semibold uppercase text-white text-[17px] ">Second Semester</button>
        </div>
        </div>
       { isFirstSemester &&
        <div className="my-[30px] gap-[20px] grid  grid-cols-1 md:grid-cols-3 ">
       <div className=" rounded  shadow-2xl p-[10px]  border-t-[5px] border- border-t flex flex-col items-start  gap-1 ">
        <span className="flex flex-row justify-around items-center gap-[10px] ">
            <h1 className="font-semibold text-[15px]  ">Course Title:</h1>
            <p className="text-[15px] text-slate-700 ">Basic Electricity I</p>
        </span>
        <span  className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[15px]  ">Course Code:</h1>
            <p className="text-[15px] text-slate-700 ">Feg201</p>
        </span>
        <span className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[15px]  ">Course Credit Unit:</h1>
            <p className="text-[15px] text-slate-700 ">3</p>
        </span>
        <Link to='/Feg201courseoutline' className="bg-yellow-500 w-full text-center text-white my-[10px] rounded py-[5px] text-[17px] font-semibold ">View Course Outline</Link>
       </div>
     
       <div className=" rounded  shadow-2xl p-[10px] border-t-[5px] w-full border- border-t flex flex-col items-start  gap-1 ">
        <span className="flex flex-row justify-around items-center gap-[10px] ">
            <h1 className="font-semibold text-[15px]  ">Course Title:</h1>
            <p className="text-[15px] text-slate-700 ">Linear Algebra I</p>
        </span>
        <span  className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[15px]  ">Course Code:</h1>
            <p className="text-[15px] text-slate-700 ">Mat201</p>
        </span>
        <span className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[15px]  ">Course Credit Unit:</h1>
            <p className="text-[15px] text-slate-700 ">3</p>
        </span>
        <Link to='/Mat201courseoutline' className="bg-yellow-500 w-full text-center text-white my-[10px] rounded py-[5px] text-[17px] font-semibold ">View Course Outline</Link>
       </div>
       <div className=" rounded  shadow-2xl p-[10px] border-t-[5px] border- border-t flex flex-col items-start  gap-1 ">
        <span className="flex flex-row justify-around items-center gap-[10px] ">
            <h1 className="font-semibold text-[15px]  ">Course Title:</h1>
            <p className="text-[15px] text-slate-700 ">Workshop Practice I</p>
        </span>
        <span  className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[15px]  ">Course Code:</h1>
            <p className="text-[15px] text-slate-700 ">FEG281</p>
        </span>
        <span className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[15px]  ">Course Credit Unit:</h1>
            <p className="text-[15px] text-slate-700 ">2</p>
        </span>
        <Link to='/Feg281courseoutline' className="bg-yellow-500 w-full text-center text-white my-[10px] rounded py-[5px] text-[17px] font-semibold ">View Course Outline</Link>
       </div>
       <div className=" rounded  shadow-2xl p-[10px] border-t-[5px] border- border-t flex flex-col items-start  gap-1 ">
        <span className="flex flex-row justify-around items-center gap-[10px] ">
            <h1 className="font-semibold text-[15px]  ">Course Title:</h1>
            <p className="text-[15px] text-slate-700 "> Fluid Mechanics I </p>
        </span>
        <span  className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[15px]  ">Course Code:</h1>
            <p className="text-[15px] text-slate-700 ">Feg221</p>
        </span>
        <span className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[15px]  ">Course Credit Unit:</h1>
            <p className="text-[15px] text-slate-700 ">2</p>
        </span>
        <Link to='/Feg221courseoutline' className="bg-yellow-500 w-full text-center text-white my-[10px] rounded py-[5px] text-[17px] font-semibold ">View Course Outline</Link>
       </div>
       <div className=" rounded  shadow-2xl p-[10px] border-t-[5px] border- border-t flex flex-col items-start  gap-1 ">
        <span className="flex flex-row justify-around items-center gap-[10px] ">
            <h1 className="font-semibold text-[15px]  ">Course Title:</h1>
            <p className="text-[15px] text-slate-700 ">Computer Programming I</p>
        </span>
        <span  className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[15px]  ">Course Code:</h1>
            <p className="text-[15px] text-slate-700 ">CSC201</p>
        </span>
        <span className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[15px]  ">Course Credit Unit:</h1>
            <p className="text-[15px] text-slate-700 ">2</p>
        </span>
        <Link to='/Csc201courseoutline' className="bg-yellow-500 w-full text-center text-white my-[10px] rounded py-[5px] text-[17px] font-semibold ">View Course Outline</Link>
       </div>
       <div className=" rounded  shadow-2xl p-[10px] border-t-[5px] border- border-t flex flex-col items-start  gap-1 ">
        <span className="flex flex-row justify-around items-center gap-[10px] ">
            <h1 className="font-semibold text-[15px]  ">Course Title:</h1>
            <p className="text-[15px] text-slate-700 ">Applied Mechanics I (Statics) </p>
        </span>
        <span  className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[15px]  ">Course Code:</h1>
            <p className="text-[15px] text-slate-700 ">FEG211</p>
        </span>
        <span className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[15px]  ">Course Credit Unit:</h1>
            <p className="text-[15px] text-slate-700 ">2</p>
        </span>
        <Link to='/Feg211courseoutline' className="bg-yellow-500 w-full text-center text-white my-[10px] rounded py-[5px] text-[17px] font-semibold ">View Course Outline</Link>
       </div>
       <div className=" rounded  shadow-2xl p-[10px] border-t-[5px] border- border-t flex flex-col items-start  gap-1 ">
        <span className="flex flex-row justify-around items-center gap-[10px] ">
            <h1 className="font-semibold text-[15px]  ">Course Title:</h1>
            <p className="text-[15px] text-slate-700 ">General Physical Chemistry</p>
        </span>
        <span  className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[15px]  ">Course Code:</h1>
            <p className="text-[15px] text-slate-700 ">ICH221</p>
        </span>
        <span className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[15px]  ">Course Credit Unit:</h1>
            <p className="text-[15px] text-slate-700 ">2</p>
        </span>
        <Link to='/Ich221courseoutline' className="bg-yellow-500 w-full text-center text-white my-[10px] rounded py-[5px] text-[17px] font-semibold ">View Course Outline</Link>
       </div>
       <div className=" rounded  shadow-2xl p-[10px] border-t-[5px] border- border-t flex flex-col items-start  gap-1 ">
        <span className="flex flex-row justify-around items-center gap-[10px] ">
            <h1 className="font-semibold text-[15px]  ">Course Title:</h1>
            <p className="text-[15px] text-slate-700 ">Engineering Drawing I</p>
        </span>
        <span  className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[15px]  ">Course Code:</h1>
            <p className="text-[15px] text-slate-700 ">FEG213</p>
        </span>
        <span className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[15px]  ">Course Credit Unit:</h1>
            <p className="text-[15px] text-slate-700 ">2</p>
        </span>
        <Link to='/Feg213courseoutline' className="bg-yellow-500 w-full text-center text-white my-[10px] rounded py-[5px] text-[17px] font-semibold ">View Course Outline</Link>
       </div>
       <div className=" rounded  shadow-2xl p-[10px] border-t-[5px] border- border-t flex flex-col items-start  gap-1 ">
        <span className="flex flex-row justify-around items-center gap-[10px] ">
            <h1 className="font-semibold text-[15px]  ">Course Title:</h1>
            <p className="text-[15px] text-slate-700 ">Principles of Materials Science</p>
        </span>
        <span  className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[15px]  ">Course Code:</h1>
            <p className="text-[15px] text-slate-700 ">FEG250</p>
        </span>
        <span className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[15px]  ">Course Credit Unit:</h1>
            <p className="text-[15px] text-slate-700 ">2</p>
        </span>
        <Link to='/Feg250courseoutline' className="bg-yellow-500 w-full text-center text-white my-[10px] rounded py-[5px] text-[17px] font-semibold ">View Course Outline</Link>
       </div>
        </div>
}

{ isSecondSemester &&
        <div className="my-[30px] gap-[20px] grid  grid-cols-1 md:grid-cols-3 ">
       <div className=" rounded  shadow-2xl p-[10px]  border-t-[5px] border- border-t flex flex-col items-start  gap-1 ">
        <span className="flex flex-row justify-around items-center gap-[10px] ">
            <h1 className="font-semibold text-[15px]  ">Course Title:</h1>
            <p className="text-[15px] text-slate-700 ">Elementary Differential Equation </p>
        </span>
        <span  className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[15px]  ">Course Code:</h1>
            <p className="text-[15px] text-slate-700 ">MAT202</p>
        </span>
        <span className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[15px]  ">Course Credit Unit:</h1>
            <p className="text-[15px] text-slate-700 ">3</p>
        </span>
        <Link to='/Mat202courseoutline' className="bg-slate-900 w-full text-center text-white my-[10px] rounded py-[5px] text-[17px] font-semibold ">View Course Outline</Link>
       </div>
       
       <div className=" rounded  shadow-2xl p-[10px] border-t-[5px] w-full border- border-t flex flex-col items-start  gap-1 ">
        <span className="flex flex-row justify-around items-center gap-[10px] ">
            <h1 className="font-semibold text-[15px]  ">Course Title:</h1>
            <p className="text-[15px] text-slate-700 ">Basic Electricity II</p>
        </span>
        <span  className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[15px]  ">Course Code:</h1>
            <p className="text-[15px] text-slate-700 ">FEG202</p>
        </span>
        <span className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[15px]  ">Course Credit Unit:</h1>
            <p className="text-[15px] text-slate-700 ">3</p>
        </span>
        <Link to='/Feg202courseoutline' className="bg-slate-900 w-full text-center text-white my-[10px] rounded py-[5px] text-[17px] font-semibold ">View Course Outline</Link>
       </div>
       <div className=" rounded  shadow-2xl p-[10px] border-t-[5px] border- border-t flex flex-col items-start  gap-1 ">
        <span className="flex flex-row justify-around items-center gap-[10px] ">
            <h1 className="font-semibold text-[15px]  ">Course Title:</h1>
            <p className="text-[15px] text-slate-700 ">Applied Mechanics II (Dynamics) </p>
        </span>
        <span  className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[15px]  ">Course Code:</h1>
            <p className="text-[15px] text-slate-700 ">FEG212</p>
        </span>
        <span className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[15px]  ">Course Credit Unit:</h1>
            <p className="text-[15px] text-slate-700 ">2</p>
        </span>
        <Link to='/Feg212courseoutline' className="bg-slate-900 w-full text-center text-white my-[10px] rounded py-[5px] text-[17px] font-semibold ">View Course Outline</Link>
       </div>
       <div className=" rounded  shadow-2xl p-[10px] border-t-[5px] border- border-t flex flex-col items-start  gap-1 ">
        <span className="flex flex-row justify-around items-center gap-[10px] ">
            <h1 className="font-semibold text-[15px]  ">Course Title:</h1>
            <p className="text-[15px] text-slate-700 ">Computer Programming II</p>
        </span>
        <span  className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[15px]  ">Course Code:</h1>
            <p className="text-[15px] text-slate-700 ">CSC202</p>
        </span>
        <span className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[15px]  ">Course Credit Unit:</h1>
            <p className="text-[15px] text-slate-700 ">2</p>
        </span>
        <Link to='/Csc202courseoutline' className="bg-slate-900 w-full text-center text-white my-[10px] rounded py-[5px] text-[17px] font-semibold ">View Course Outline</Link>
       </div>
       <div className=" rounded  shadow-2xl p-[10px] border-t-[5px] border- border-t flex flex-col items-start  gap-1 ">
        <span className="flex flex-row justify-around items-center gap-[10px] ">
            <h1 className="font-semibold text-[15px]  ">Course Title:</h1>
            <p className="text-[15px] text-slate-700 ">Thermodynamics</p>
        </span>
        <span  className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[15px]  ">Course Code:</h1>
            <p className="text-[15px] text-slate-700 ">FEG242</p>
        </span>
        <span className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[15px]  ">Course Credit Unit:</h1>
            <p className="text-[15px] text-slate-700 ">2</p>
        </span>
        <Link to='/Feg242courseoutline' className="bg-slate-900 w-full text-center text-white my-[10px] rounded py-[5px] text-[17px] font-semibold ">View Course Outline</Link>
       </div>
       
       <div className=" rounded  shadow-2xl p-[10px] border-t-[5px] border- border-t flex flex-col items-start  gap-1 ">
        <span className="flex flex-row justify-around items-center gap-[10px] ">
            <h1 className="font-semibold text-[15px]  ">Course Title:</h1>
            <p className="text-[15px] text-slate-700 "> Principles of Management </p>
        </span>
        <span  className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[15px]  ">Course Code:</h1>
            <p className="text-[15px] text-slate-700 ">BUS204</p>
        </span>
        <span className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[15px]  ">Course Credit Unit:</h1>
            <p className="text-[15px] text-slate-700 ">2</p>
        </span>
        <Link to='/Bus204courseoutline' className="bg-slate-900 w-full text-center text-white my-[10px] rounded py-[5px] text-[17px] font-semibold ">View Course Outline</Link>
       </div>
       <div className=" rounded  shadow-2xl p-[10px] border-t-[5px] border- border-t flex flex-col items-start  gap-1 ">
        <span className="flex flex-row justify-around items-center gap-[10px] ">
            <h1 className="font-semibold text-[15px]  ">Course Title:</h1>
            <p className="text-[15px] text-slate-700 ">Strength of Materials </p>
        </span>
        <span  className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[15px]  ">Course Code:</h1>
            <p className="text-[15px] text-slate-700 ">FEG215</p>
        </span>
        <span className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[15px]  ">Course Credit Unit:</h1>
            <p className="text-[15px] text-slate-700 ">2</p>
        </span>
        <Link to='/Feg215courseoutline' className="bg-slate-900 w-full text-center text-white my-[10px] rounded py-[5px] text-[17px] font-semibold ">View Course Outline</Link>
       </div>
       <div className=" rounded  shadow-2xl p-[10px] border-t-[5px] border- border-t flex flex-col items-start  gap-1 ">
        <span className="flex flex-row justify-around items-center gap-[10px] ">
            <h1 className="font-semibold text-[15px]  ">Course Title:</h1>
            <p className="text-[15px] text-slate-700 "> Engineering Drawing II</p>
        </span>
        <span  className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[15px]  ">Course Code:</h1>
            <p className="text-[15px] text-slate-700 ">FEG214</p>
        </span>
        <span className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[15px]  ">Course Credit Unit:</h1>
            <p className="text-[15px] text-slate-700 ">2</p>
        </span>
        <Link to='/Feg214courseoutline' className="bg-slate-900 w-full text-center text-white my-[10px] rounded py-[5px] text-[17px] font-semibold ">View Course Outline</Link>
       </div>
       
       <div className=" rounded  shadow-2xl p-[10px] border-t-[5px] border- border-t flex flex-col items-start  gap-1 ">
        <span className="flex flex-row justify-around items-center gap-[10px] ">
            <h1 className="font-semibold text-[15px]  ">Course Title:</h1>
            <p className="text-[15px] text-slate-700 ">Engineering in Society</p>
        </span>
        <span  className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[15px]  ">Course Code:</h1>
            <p className="text-[15px] text-slate-700 ">FEG280</p>
        </span>
        <span className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[15px]  ">Course Credit Unit:</h1>
            <p className="text-[15px] text-slate-700 ">2</p>
        </span>
        <Link to='/Feg280courseoutline' className="bg-slate-900 w-full text-center text-white my-[10px] rounded py-[5px] text-[17px] font-semibold ">View Course Outline</Link>
       </div>
        </div>
}

     </div>
        </div>
    )
}
