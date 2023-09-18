import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Level100 = () => {
const [isFirst, setIsFirst] = useState('First');
    const [showSemester, setshowSemester] = useState(JSON.parse(localStorage.getItem('showSemester')) || {
        first: true,
        second:false,
    })

    useEffect(() => {
        localStorage.setItem('showSemester', JSON.stringify(showSemester));
    })
    const show1stSemesterC = () => {
        setshowSemester({
            first: true,
            second:false
    })
    setIsFirst('First')
};

    const show2ndSemesterC = () => {
        setshowSemester({
            first: false,
            second:true
    })
    setIsFirst('Second');
}; 

    return (
        <div className="pt-[120px] pb-[50px] flex  justify-center  px-[20px] ">
     <div>
        <div className="text-center flex flex-col gap-[10px] ">
            <h1 className="uppercase text-slate-900 font-bold text-[15px] md:text-[25px] ">Courses offered in 100 level</h1>
            <p className="text-slate-700  capitalize font-semibold text-[12px] md:text-[20px] ">Electrical Engineering offers 11 courses in 100Level {isFirst} Semester</p>
        </div>
        <div className="flex justify-center my-5">
        <div className="flex flex-row rounded  px-0 gap-5 bg-slate-900 ">
            <button onClick={show1stSemesterC} className="bg-yellow-500  px-[10px] py-[5px] font-semibold  hover:bg-slate-900uppercase text-[12px] md:text-[14px] ">First Semester</button>
            <button onClick={show2ndSemesterC} className="bg-slate-900  px-[10px] py-[5px] font-semibold uppercase t hover:bg-slate-900 text-white text-[12px] md:text-[14px] ">Second Semester</button>
        </div>
        </div>
       { showSemester.first  &&
        <div className="my-[30px] gap-[20px] grid  grid-cols-1 md:grid-cols-3 ">
       <div className=" rounded  shadow-2xl p-[10px]  border-t-[5px] border- border-t flex flex-col items-start  gap-1 ">
        <span className="flex flex-row justify-around items-center gap-[10px] ">
            <h1 className="font-semibold text-[12px]  ">Course Title:</h1>
            <p className="text-[12px] text-slate-700 ">Engineering Mathematics I</p>
        </span>
        <span  className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[12px]  ">Course Code:</h1>
            <p className="text-[12px] text-slate-700 ">Feg101</p>
        </span>
        <span className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[12px]  ">Course Credit Unit:</h1>
            <p className="text-[12px] text-slate-700 ">3</p>
        </span>
        <Link to='/feg101courseoutline' className="bg-yellow-500 w-full text-center text-white my-[10px] rounded hover:bg-slate-900 py-[5px] text-[14px] font-semibold ">View Course Outline</Link>
       </div>
     
       <div className=" rounded  shadow-2xl p-[10px] border-t-[5px] w-full border- border-t flex flex-col items-start  gap-1 ">
        <span className="flex flex-row justify-around items-center gap-[10px] ">
            <h1 className="font-semibold text-[12px]  ">Course Title:</h1>
            <p className="text-[12px] text-slate-700 ">General Mathematics I</p>
        </span>
        <span  className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[12px]  ">Course Code:</h1>
            <p className="text-[12px] text-slate-700 ">Mat101</p>
        </span>
        <span className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[12px]  ">Course Credit Unit:</h1>
            <p className="text-[12px] text-slate-700 ">3</p>
        </span>
        <Link to='/mat101courseoutline' className="bg-yellow-500 w-full text-center text-white my-[10px] rounded hover:bg-slate-900 py-[5px] text-[14px] font-semibold ">View Course Outline</Link>
       </div>
       <div className=" rounded  shadow-2xl p-[10px] border-t-[5px] border- border-t flex flex-col items-start  gap-1 ">
        <span className="flex flex-row justify-around items-center gap-[10px] ">
            <h1 className="font-semibold text-[12px]  ">Course Title:</h1>
            <p className="text-[12px] text-slate-700 ">General Physics I</p>
        </span>
        <span  className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[12px]  ">Course Code:</h1>
            <p className="text-[12px] text-slate-700 ">Phy101</p>
        </span>
        <span className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[12px]  ">Course Credit Unit:</h1>
            <p className="text-[12px] text-slate-700 ">3</p>
        </span>
        <Link to='/phy101courseoutline' className="bg-yellow-500 w-full text-center text-white my-[10px] rounded hover:bg-slate-900 py-[5px] text-[14px] font-semibold ">View Course Outline</Link>
       </div>
       <div className=" rounded  shadow-2xl p-[10px] border-t-[5px] border- border-t flex flex-col items-start  gap-1 ">
        <span className="flex flex-row justify-around items-center gap-[10px] ">
            <h1 className="font-semibold text-[12px]  ">Course Title:</h1>
            <p className="text-[12px] text-slate-700 ">Organic Chemistry I</p>
        </span>
        <span  className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[12px]  ">Course Code:</h1>
            <p className="text-[12px] text-slate-700 ">Ich101</p>
        </span>
        <span className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[12px]  ">Course Credit Unit:</h1>
            <p className="text-[12px] text-slate-700 ">2</p>
        </span>
        <Link to='/ich101courseoutline' className="bg-yellow-500 w-full text-center text-white my-[10px] rounded hover:bg-slate-900 py-[5px] text-[14px] font-semibold ">View Course Outline</Link>
       </div>
       <div className=" rounded  shadow-2xl p-[10px] border-t-[5px] border- border-t flex flex-col items-start  gap-1 ">
        <span className="flex flex-row justify-around items-center gap-[10px] ">
            <h1 className="font-semibold text-[12px]  ">Course Title:</h1>
            <p className="text-[12px] text-slate-700 ">Inorganic Chemistry I</p>
        </span>
        <span  className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[12px]  ">Course Code:</h1>
            <p className="text-[12px] text-slate-700 ">Ich111</p>
        </span>
        <span className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[12px]  ">Course Credit Unit:</h1>
            <p className="text-[12px] text-slate-700 ">2</p>
        </span>
        <Link to='/ich111courseoutline' className="bg-yellow-500 w-full text-center text-white my-[10px] rounded hover:bg-slate-900 py-[5px] text-[14px] font-semibold ">View Course Outline</Link>
       </div>
       <div className=" rounded  shadow-2xl p-[10px] border-t-[5px] border- border-t flex flex-col items-start  gap-1 ">
        <span className="flex flex-row justify-around items-center gap-[10px] ">
            <h1 className="font-semibold text-[12px]  ">Course Title:</h1>
            <p className="text-[12px] text-slate-700 ">Introduction To Business</p>
        </span>
        <span  className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[12px]  ">Course Code:</h1>
            <p className="text-[12px] text-slate-700 ">Bus101</p>
        </span>
        <span className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[12px]  ">Course Credit Unit:</h1>
            <p className="text-[12px] text-slate-700 ">2</p>
        </span>
        <Link to='/bus101courseoutline' className="bg-yellow-500 w-full text-center text-white my-[10px] rounded hover:bg-slate-900 py-[5px] text-[14px] font-semibold ">View Course Outline</Link>
       </div>
       <div className=" rounded  shadow-2xl p-[10px] border-t-[5px] border- border-t flex flex-col items-start  gap-1 ">
        <span className="flex flex-row justify-around items-center gap-[10px] ">
            <h1 className="font-semibold text-[12px]  ">Course Title:</h1>
            <p className="text-[12px] text-slate-700 ">General Physics Practical I</p>
        </span>
        <span  className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[12px]  ">Course Code:</h1>
            <p className="text-[12px] text-slate-700 ">Phy107</p>
        </span>
        <span className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[12px]  ">Course Credit Unit:</h1>
            <p className="text-[12px] text-slate-700 ">1</p>
        </span>
        <Link to='/phy107courseoutline' className="bg-yellow-500 w-full text-center text-white my-[10px] rounded hover:bg-slate-900 py-[5px] text-[14px] font-semibold ">View Course Outline</Link>
       </div>
       <div className=" rounded  shadow-2xl p-[10px] border-t-[5px] border- border-t flex flex-col items-start  gap-1 ">
        <span className="flex flex-row justify-around items-center gap-[10px] ">
            <h1 className="font-semibold text-[12px]  ">Course Title:</h1>
            <p className="text-[12px] text-slate-700 ">Use Of English</p>
        </span>
        <span  className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[12px]  ">Course Code:</h1>
            <p className="text-[12px] text-slate-700 ">Gst101</p>
        </span>
        <span className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[12px]  ">Course Credit Unit:</h1>
            <p className="text-[12px] text-slate-700 ">2</p>
        </span>
        <Link to='/Gst101courseoutline' className="bg-yellow-500 w-full text-center text-white my-[10px] rounded hover:bg-slate-900 py-[5px] text-[14px] font-semibold ">View Course Outline</Link>
       </div>
       <div className=" rounded  shadow-2xl p-[10px] border-t-[5px] border- border-t flex flex-col items-start  gap-1 ">
        <span className="flex flex-row justify-around items-center gap-[10px] ">
            <h1 className="font-semibold text-[12px]  ">Course Title:</h1>
            <p className="text-[12px] text-slate-700 ">Nigeria Peoples And Culture</p>
        </span>
        <span  className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[12px]  ">Course Code:</h1>
            <p className="text-[12px] text-slate-700 ">Gst107</p>
        </span>
        <span className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[12px]  ">Course Credit Unit:</h1>
            <p className="text-[12px] text-slate-700 ">2</p>
        </span>
        <Link to='/Gst107courseoutline' className="bg-yellow-500 w-full text-center text-white my-[10px] rounded hover:bg-slate-900 py-[5px] text-[14px] font-semibold ">View Course Outline</Link>
       </div>
       <div className=" rounded  shadow-2xl p-[10px] border-t-[5px] border- border-t flex flex-col items-start  gap-1 ">
        <span className="flex flex-row justify-around items-center gap-[10px] ">
            <h1 className="font-semibold text-[12px]  ">Course Title:</h1>
            <p className="text-[12px] text-slate-700 ">Humanity</p>
        </span>
        <span  className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[12px]  ">Course Code:</h1>
            <p className="text-[12px] text-slate-700 ">Gst105</p>
        </span>
        <span className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[12px]  ">Course Credit Unit:</h1>
            <p className="text-[12px] text-slate-700 ">2</p>
        </span>
        <Link to='/Gst105courseoutline' className="bg-yellow-500 w-full text-center text-white my-[10px] rounded hover:bg-slate-900 py-[5px] text-[14px] font-semibold ">View Course Outline</Link>
       </div>
       <div className=" rounded  shadow-2xl p-[10px] border-t-[5px] border- border-t flex flex-col items-start  gap-1 ">
        <span className="flex flex-row justify-around items-center gap-[10px] ">
            <h1 className="font-semibold text-[12px]  ">Course Title:</h1>
            <p className="text-[12px] text-slate-700 ">Asusu Igbo</p>
        </span>
        <span  className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[12px]  ">Course Code:</h1>
            <p className="text-[12px] text-slate-700 ">Gst109</p>
        </span>
        <span className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[12px]  ">Course Credit Unit:</h1>
            <p className="text-[12px] text-slate-700 ">1</p>
        </span>
        <Link to='/Gst109courseoutline' className="bg-yellow-500 w-full text-center text-white my-[10px] rounded hover:bg-slate-900 py-[5px] text-[14px] font-semibold ">View Course Outline</Link>
       </div>
        </div>
}

{showSemester.second &&
        <div className="my-[30px] gap-[20px] grid  grid-cols-1 md:grid-cols-3 ">
       <div className=" rounded  shadow-2xl p-[10px]  border-t-[5px] border- border-t flex flex-col items-start  gap-1 ">
        <span className="flex flex-row justify-around items-center gap-[10px] ">
            <h1 className="font-semibold text-[12px]  ">Course Title:</h1>
            <p className="text-[12px] text-slate-700 ">Engineering Mathematics II</p>
        </span>
        <span  className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[12px]  ">Course Code:</h1>
            <p className="text-[12px] text-slate-700 ">Feg102</p>
        </span>
        <span className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[12px]  ">Course Credit Unit:</h1>
            <p className="text-[12px] text-slate-700 ">3</p>
        </span>
        <Link to='/feg102courseoutline' className="bg-slate-900 w-full text-center text-white my-[10px] rounded hover:bg-yellow-500 py-[5px] text-[14px] font-semibold ">View Course Outline</Link>
       </div>
       
       <div className=" rounded  shadow-2xl p-[10px] border-t-[5px] w-full border- border-t flex flex-col items-start  gap-1 ">
        <span className="flex flex-row justify-around items-center gap-[10px] ">
            <h1 className="font-semibold text-[12px]  ">Course Title:</h1>
            <p className="text-[12px] text-slate-700 ">General Mathematics II</p>
        </span>
        <span  className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[12px]  ">Course Code:</h1>
            <p className="text-[12px] text-slate-700 ">Mat102</p>
        </span>
        <span className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[12px]  ">Course Credit Unit:</h1>
            <p className="text-[12px] text-slate-700 ">3</p>
        </span>
        <Link to='/mat102courseoutline' className="bg-slate-900 w-full text-center text-white my-[10px] rounded hover:bg-yellow-500 py-[5px] text-[14px] font-semibold ">View Course Outline</Link>
       </div>
       <div className=" rounded  shadow-2xl p-[10px] border-t-[5px] border- border-t flex flex-col items-start  gap-1 ">
        <span className="flex flex-row justify-around items-center gap-[10px] ">
            <h1 className="font-semibold text-[12px]  ">Course Title:</h1>
            <p className="text-[12px] text-slate-700 ">General Physics II</p>
        </span>
        <span  className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[12px]  ">Course Code:</h1>
            <p className="text-[12px] text-slate-700 ">Phy102</p>
        </span>
        <span className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[12px]  ">Course Credit Unit:</h1>
            <p className="text-[12px] text-slate-700 ">3</p>
        </span>
        <Link to='/phy102courseoutline' className="bg-slate-900 w-full text-center text-white my-[10px] rounded hover:bg-yellow-500 py-[5px] text-[14px] font-semibold ">View Course Outline</Link>
       </div>
       <div className=" rounded  shadow-2xl p-[10px] border-t-[5px] border- border-t flex flex-col items-start  gap-1 ">
        <span className="flex flex-row justify-around items-center gap-[10px] ">
            <h1 className="font-semibold text-[12px]  ">Course Title:</h1>
            <p className="text-[12px] text-slate-700 ">Organic Chemistry II</p>
        </span>
        <span  className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[12px]  ">Course Code:</h1>
            <p className="text-[12px] text-slate-700 ">Ich102</p>
        </span>
        <span className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[12px]  ">Course Credit Unit:</h1>
            <p className="text-[12px] text-slate-700 ">2</p>
        </span>
        <Link to='/ich102courseoutline' className="bg-slate-900 w-full text-center text-white my-[10px] rounded hover:bg-yellow-500 py-[5px] text-[14px] font-semibold ">View Course Outline</Link>
       </div>
       <div className=" rounded  shadow-2xl p-[10px] border-t-[5px] border- border-t flex flex-col items-start  gap-1 ">
        <span className="flex flex-row justify-around items-center gap-[10px] ">
            <h1 className="font-semibold text-[12px]  ">Course Title:</h1>
            <p className="text-[12px] text-slate-700 ">Inorganic Chemistry II</p>
        </span>
        <span  className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[12px]  ">Course Code:</h1>
            <p className="text-[12px] text-slate-700 ">Ich112</p>
        </span>
        <span className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[12px]  ">Course Credit Unit:</h1>
            <p className="text-[12px] text-slate-700 ">2</p>
        </span>
        <Link to='/ich112courseoutline' className="bg-slate-900 w-full text-center text-white my-[10px] rounded hover:bg-yellow-500 py-[5px] text-[14px] font-semibold ">View Course Outline</Link>
       </div>
       
       <div className=" rounded  shadow-2xl p-[10px] border-t-[5px] border- border-t flex flex-col items-start  gap-1 ">
        <span className="flex flex-row justify-around items-center gap-[10px] ">
            <h1 className="font-semibold text-[12px]  ">Course Title:</h1>
            <p className="text-[12px] text-slate-700 ">General Physics Practical II</p>
        </span>
        <span  className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[12px]  ">Course Code:</h1>
            <p className="text-[12px] text-slate-700 ">Phy108</p>
        </span>
        <span className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[12px]  ">Course Credit Unit:</h1>
            <p className="text-[12px] text-slate-700 ">1</p>
        </span>
        <Link to='/phy108courseoutline' className="bg-slate-900 w-full text-center text-white my-[10px] rounded hover:bg-yellow-500 py-[5px] text-[14px] font-semibold ">View Course Outline</Link>
       </div>
       <div className=" rounded  shadow-2xl p-[10px] border-t-[5px] border- border-t flex flex-col items-start  gap-1 ">
        <span className="flex flex-row justify-around items-center gap-[10px] ">
            <h1 className="font-semibold text-[12px]  ">Course Title:</h1>
            <p className="text-[12px] text-slate-700 ">Use Of English II</p>
        </span>
        <span  className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[12px]  ">Course Code:</h1>
            <p className="text-[12px] text-slate-700 ">Gst102</p>
        </span>
        <span className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[12px]  ">Course Credit Unit:</h1>
            <p className="text-[12px] text-slate-700 ">2</p>
        </span>
        <Link to='/Gst102courseoutline' className="bg-slate-900 w-full text-center text-white my-[10px] rounded hover:bg-yellow-500 py-[5px] text-[14px] font-semibold ">View Course Outline</Link>
       </div>
       <div className=" rounded  shadow-2xl p-[10px] border-t-[5px] border- border-t flex flex-col items-start  gap-1 ">
        <span className="flex flex-row justify-around items-center gap-[10px] ">
            <h1 className="font-semibold text-[12px]  ">Course Title:</h1>
            <p className="text-[12px] text-slate-700 ">Social Science</p>
        </span>
        <span  className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[12px]  ">Course Code:</h1>
            <p className="text-[12px] text-slate-700 ">Gst106</p>
        </span>
        <span className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[12px]  ">Course Credit Unit:</h1>
            <p className="text-[12px] text-slate-700 ">2</p>
        </span>
        <Link to='/Gst106courseoutline' className="bg-slate-900 w-full text-center text-white my-[10px] rounded hover:bg-yellow-500 py-[5px] text-[14px] font-semibold ">View Course Outline</Link>
       </div>
       
       <div className=" rounded  shadow-2xl p-[10px] border-t-[5px] border- border-t flex flex-col items-start  gap-1 ">
        <span className="flex flex-row justify-around items-center gap-[10px] ">
            <h1 className="font-semibold text-[12px]  ">Course Title:</h1>
            <p className="text-[12px] text-slate-700 ">Omenala Igbo</p>
        </span>
        <span  className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[12px]  ">Course Code:</h1>
            <p className="text-[12px] text-slate-700 ">Gst110</p>
        </span>
        <span className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[12px]  ">Course Credit Unit:</h1>
            <p className="text-[12px] text-slate-700 ">1</p>
        </span>
        <Link to='/Gst110courseoutline' className="bg-slate-900 w-full text-center text-white my-[10px] rounded hover:bg-yellow-500 py-[5px] text-[14px] font-semibold ">View Course Outline</Link>
       </div>
        </div>
}

     </div>
        </div>
    )
}
