import React, { useEffect, useState } from "react";
import { Link,} from "react-router-dom";
import { FcOpenedFolder } from 'react-icons/fc';
import { useParams } from "react-router-dom";
import { CoursesOffered } from "../../CourseOffered/CourseOffered";

export const LevelCourses = () => {
    const { Session } = useParams();
    const filterLevelCoursess = CoursesOffered.filter(course => {
        return course.Session[0] === Number(Session)
    });
    const firstSemester = filterLevelCoursess.filter(course => {
        return course.Session[1] === 1
    });
    const secondSemester = filterLevelCoursess.filter(course => {
        return course.Session[1] === 2
    })
    const [popMsg, setPopMsg] = useState(false);
    return(
        <div className="pt-[150px] px-[30px] pb-[50px] ">
             {  popMsg &&
        <span onClick={(e) => {
               if (e.target.tagName === 'SPAN') {
                   setPopMsg(false);
               } 
        }} className="flex justify-center py-[50px] px-[50px] items-center transition z-[59000000] delay-500 bg-tPop fixed top-0 left-0 right-0 bottom-0 w-full h-full">
            <div className="bg-slate-50 relative flex flex-col md:flex-row  gap-5 rounded shadow-2xl  p-[30px] md:p-[50px] ">
                <button onClick={() => setPopMsg(false)} className="absolute right-5 top-2 bg-black text-white px-[10px] py-[3px] font-bold hover:bg-red-500 rounded-full ">X</button>
                <div className="flex flex-col max-w-[500px]  gap-3">
                    <h2 className="text-textBlue uppercase font-bold text-[25px]">Crucial Notification!</h2>
                    <p className="text-textDark text-[15px]">Presently, we have exclusively uploaded learning resources pertaining to the second semester, as we understand the immediate relevance to your current academic term. Rest assured, resources for the first semester will be made available at the earliest convenience. Your understanding is greatly appreciated.</p>
                      </div>
                
            </div>
        </span>}
       <div className="text-center my-[20px] ">
        <h1 className="font-bold uppercase text-slate-900 text-[20px] md:text-[30px] ">{Session}level e-book Download</h1>
        <p className="text-slate-700 capitalize text-[15px] md:text-[20px]  ">Here you find/download textbook, handouts and past exam questions for level Courses</p>
       </div>
<div className="flex flex-col justify-around gap-5">
    <div className="w-full">
 <h1 className="uppercase text-slate-900 font-bold md:col-span-1 text-[15px] md:text-[25px]  md:text-start ">First semester</h1>
 
       <div className="grid grid-cols-2  gap-2 md:grid-cols-3 my-[10px] ">
        {firstSemester.map(courses => {
            return <Link  to={`/Academics/Learning-Resources/${courses.Session[0]}/${courses.Course}`} className="flex flex-col  items-center shadow-2xl hover:bg-slate-900 min-h-[100px] justify-between bg-slate-700 rounded-[2px] px-[10px] py-[20px] ">
                  <FcOpenedFolder className="md:text-[50px] text-[30px]  font-semibold "/>
              <h1 className="md:text-[18px] text-[15px] font-semibold text-slate-100 ">{courses.Course}</h1>
        </Link >
        })}
       </div>
</div>
<div className="w-full ">
       <h1 className="uppercase text-slate-900 font-bold md:col-span-1 text-[15px] md:text-[25px] md:text-start ">Second semester</h1>
       <div className="grid grid-cols-2  gap-2 md:grid-cols-3 my-[10px] ">
       {secondSemester.map(courses => {
            return <Link  to={`/Academics/Learning-Resources/${courses.Session[0]}/${courses.Course}`} className="flex flex-col  items-center shadow-2xl hover:bg-slate-900 min-h-[100px] justify-between bg-slate-700 rounded-[2px] px-[10px] py-[20px] ">
            <FcOpenedFolder className="md:text-[50px] text-[30px] text-yellow-500 font-semibold "/>
      <h1 className="md:text-[18px] text-[15px] font-semibold text-slate-100 ">{courses.Course}</h1>
  </Link >
        })}
</div>
       </div>
        </div>
        </div>
    )
}