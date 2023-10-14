import React from "react";
import { CoursesOffered } from "./CourseOffered";
import { useParams } from "react-router-dom";
import { fullNewsContext } from "../context/Context";
import { useContext } from "react";
import { Login } from "../login/login";
export const FullcourseOutline = () => {
   
    const { signedIn } = useContext(fullNewsContext);
    const { Course } = useParams();
    const fullOutline = CoursesOffered.find(course => course.Course === Course);
    if (!signedIn) {
        return <Login/>
    }
    return (
        <div className="pt-[120px] pb-[50px] flex  justify-center  px-[30px] ">
            <div>
              <div>

<h1 className="text-center text-slate-900 font-bold uppercase text-[15px] md:text-[20px] my-[10px]">{fullOutline.Course } {fullOutline.CourseTitle} {fullOutline.Credit} credit Units</h1>
<p className="text-center text-slate-700 font-semibold text-[15px] md:text-[20px] ">Course Outlines</p>
   </div>

   <div className="max-w-[600px] flex flex-col gap-5 my-[20px] ">
                    {fullOutline.courseOutlines.map(details => {
                        return <div className="flex flex-col gap-1">
                            <h1 className="font-[500] text-[17px] md:text-[23px] text-slate-800 ">{details.title}</h1>
                            <p className="text-slate-500 text-[14px] md:text-[18px] ">{details.descrip}</p>
                            <hr />
                        </div>
                    })}
        </div>
        </div>
        </div>
        
    )
}