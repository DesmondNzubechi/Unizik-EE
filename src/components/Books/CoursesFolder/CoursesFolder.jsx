import React, { useEffect, useState } from "react";
import {BsFillFolderSymlinkFill} from 'react-icons/bs';
import { Link, useActionData } from "react-router-dom";
import { useContext } from "react";
import { fullNewsContext } from "../../context/Context";
import {FcOpenedFolder} from 'react-icons/fc';
export const LevelCourses = () => {
    const {eleCourses, getPdf , clickedLevel} = useContext(fullNewsContext);
    const [firstSemesterCourses, setFirstSemesterCourse] = useState([]);
    const [secondSemesterCourses, setsecondSemesterCourse] = useState([]);
console.log(firstSemesterCourses);
    useEffect(() => {
        const filteringCourses = () => {
            const filterFirstSemesterCourse = eleCourses.filter(firstSemester => {
             return  firstSemester.Session[1] == 1;
            });
            setFirstSemesterCourse(filterFirstSemesterCourse)
            const filterSecondSemesterCourse = eleCourses.filter(secondSemester => {
             return   secondSemester.Session[1] == 2;
            })
            setsecondSemesterCourse(filterSecondSemesterCourse);
        };
        filteringCourses();
        }, []);
 
    return(
        <div className="pt-[150px] px-[30px] pb-[50px] ">
       <div className="text-center my-[20px] ">
        <h1 className="font-bold uppercase text-slate-900 text-[20px] md:text-[30px] ">{clickedLevel}level e-book Download</h1>
        <p className="text-slate-700 capitalize text-[15px] md:text-[20px]  ">Here you find/download textbook, handouts and past exam questions for level Courses</p>
       </div>

<div className="flex flex-col justify-around gap-5">
    <div className="w-full">
 <h1 className="uppercase text-slate-900 font-bold md:col-span-1 text-[15px] md:text-[25px]  md:text-start ">First semester</h1>
 
       <div className="grid grid-cols-2  gap-2 md:grid-cols-3 my-[10px] ">
        {firstSemesterCourses.map(courses => {
            return <Link onClick={() => getPdf(courses.Course)} to='/download pdf' className="flex flex-col  items-center shadow-2xl hover:bg-slate-900 min-h-[100px] justify-between bg-slate-700 rounded-[2px] px-[10px] py-[20px] ">
                  <FcOpenedFolder className="md:text-[50px] text-[30px]  font-semibold "/>
              <h1 className="md:text-[18px] text-[15px] font-semibold text-slate-100 ">{courses.Course}</h1>
        </Link >
        })}
       </div>
</div>

<div className="w-full ">
       <h1 className="uppercase text-slate-900 font-bold md:col-span-1 text-[15px] md:text-[25px] md:text-start ">Second semester</h1>
       <div className="grid grid-cols-2  gap-2 md:grid-cols-3 my-[10px] ">
       {secondSemesterCourses.map(courses => {
            return <Link onClick={() => getPdf(courses.Course)} to='/download pdf' className="flex flex-col  items-center shadow-2xl hover:bg-slate-900 min-h-[100px] justify-between bg-slate-700 rounded-[2px] px-[10px] py-[20px] ">
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