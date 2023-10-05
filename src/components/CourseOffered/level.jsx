import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { CoursesOffered } from "./CourseOffered";
import Aos from "aos";

export const LevelCourseoutlines = () => {
    const { Session } = useParams();
    const getLevel = CoursesOffered.filter(course => {
        return course.Session[0] === Number(Session)
    });
    const [courseStore, setCourseStore] = useState({
        first: [],
        second: [], 
    }) 
  
            const firstS = getLevel.filter(semester => {
                 return semester.Session[1] === 1
            })
            const secondS = getLevel.filter(semester => {
                return semester.Session[1] === 2
            })
           
      
    const [isFirst, setIsFirst] = useState('First');
    const [showSemester, setshowSemester] = useState(JSON.parse(localStorage.getItem('showSemester')) || {
        first: true,
        second: false,
        courseNum: firstS?.length
    })
    const show1stSemesterC = () => {
        setshowSemester({
            first: true,
            second: false,
            courseNum: firstS?.length
    })
    setIsFirst('First')
};

    const show2ndSemesterC = () => {
        setshowSemester({
            first: false,
            second: true,
            courseNum: secondS?.length
    })
    setIsFirst('Second');
    }; 
    useEffect(() => {
       Aos.init()
   })

    return (
        <div className="pt-[120px] pb-[50px] flex  justify-center  px-[20px] ">
     <div>
        <div data-aos='fade-up' aos-data-duration='2000' className="text-center flex flex-col gap-[10px] ">
            <h1 className="uppercase text-slate-900 font-bold text-[15px] md:text-[25px] ">Courses offered in {Session} level</h1>
                    <p className="text-slate-700  capitalize font-semibold text-[12px] md:text-[20px] ">Electrical Engineering  courses offered in {Session}Level {isFirst} Semester</p>
        </div>
        <div className="flex justify-center my-5">
        <div data-aos='fade-up' aos-data-duration='2000' className="flex flex-row rounded  px-0 gap-5 bg-slate-900 ">
            <button onClick={show1stSemesterC} className="bg-yellow-500  px-[10px] py-[5px] font-semibold  hover:bg-slate-900uppercase text-[12px] md:text-[14px] ">First Semester</button>
            <button onClick={show2ndSemesterC} className="bg-slate-900  px-[10px] py-[5px] font-semibold uppercase t hover:bg-slate-900 text-white text-[12px] md:text-[14px] ">Second Semester</button>
        </div>
                </div>
                

       { showSemester.first  &&
        <div className="my-[30px] gap-[20px] grid  grid-cols-1 md:grid-cols-3 ">
                        {firstS?.map(courses => 
                           { return <div data-aos='fade-up' aos-data-duration='2000' className=" rounded  shadow-2xl p-[10px]  border-t-[5px] border- border-t flex flex-col items-start  gap-1 ">
        <span className="flex flex-row justify-around items-center gap-[10px] ">
            <h1 className="font-semibold text-[12px]  ">Course Title:</h1>
            <p className="text-[12px] text-slate-700 ">{courses.CourseTitle}</p>
        </span>
        <span  className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[12px]  ">Course Code:</h1>
            <p className="text-[12px] text-slate-700 ">{courses.Course}</p>
        </span>
        <span className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[12px]  ">Course Credit Unit:</h1>
            <p className="text-[12px] text-slate-700 ">{courses.Credit}</p>
        </span>
                            <Link to={`/Academics/Course-outlines/${courses.Session[0]}/${courses.Course}`} className="bg-yellow-500 w-full text-center text-white my-[10px] rounded hover:bg-slate-900 py-[5px] text-[14px] font-semibold ">View Course Outline</Link>
                            </div>}
       )}
        </div>
}

{showSemester.second &&
        <div data-aos='fade-up' aos-data-duration='2000' className="my-[30px] gap-[20px] grid  grid-cols-1 md:grid-cols-3 ">
     {secondS?.map(courses => {
     return  <div className=" rounded  shadow-2xl p-[10px] border-t-[5px] border- border-t flex flex-col items-start  gap-1 ">
        <span className="flex flex-row justify-around items-center gap-[10px] ">
            <h1 className="font-semibold text-[12px]  ">Course Title:</h1>
            <p className="text-[12px] text-slate-700 ">{courses.CourseTitle}</p>
        </span>
        <span  className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[12px]  ">Course Code:</h1>
            <p className="text-[12px] text-slate-700 ">{courses.Course}</p>
        </span>
        <span className="flex flex-row items-center justify-around gap-[10px] ">
            <h1 className="font-semibold text-[12px]  ">Course Credit Unit:</h1>
            <p className="text-[12px] text-slate-700 ">{courses.Credit}</p>
        </span>
        <Link to={`/Academics/Course-outlines/${courses.Session[0]}/${courses.Course}`} className="bg-slate-900 w-full text-center text-white my-[10px] rounded hover:bg-yellow-500 py-[5px] text-[14px] font-semibold ">View Course Outline</Link>
       </div>})}
        </div>
}

     </div>
        </div>
    )
}
