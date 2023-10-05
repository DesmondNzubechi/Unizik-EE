import React, { useEffect, useState } from "react";
import { RotateLoader } from "react-spinners";
import 'react-toastify/dist/ReactToastify.css';
import { CoursesOffered } from "../CourseOffered/CourseOffered";
 
export const UserCourseOutlines = () => {
  const [spinC, setSpinC] = useState(false);
    const [courseName, setCourseName] = useState("");
const [level, setLevel] = useState([]);
const [getSemester, setGetSemester] = useState('');
const [selectedCourse, setSelectedCourse] = useState('select');
const [selectedUnit, setSelectedUnit] = useState(null);
    const [courses, setCourses] = useState([]);
    const fullOutline = CoursesOffered.find(out => {
        return out.Course == selectedCourse 
    });
    return( 
      <div className="pt-[50px] px-[30px]  pb-[50px] ">
          {spinC && <div className="fixed bg-tpr w-full z-[500] left-0 right-0 flex justify-center h-full top-0 bottom-0 items-center"><RotateLoader className="relative z-[600]" color="#36d7b7"
           size={30}
           width={10}
            /></div> }
        <div className="text-center my-[20px] ">
                <h1 className="font-bold uppercase text-slate-900 text-[20px] md:text-[30px] ">course outlines </h1>
                <h1 className="text-center text-slate-900 font-bold uppercase text-[15px] md:text-[20px] my-[10px]">{fullOutline?.Course } {fullOutline?.CourseTitle} {fullOutline?.Credit} credit Units</h1>

                <div className=" flex  flex-row justify-center    gap-1 ">
                <div className="flex   flex-col ">
                        <select name=""  className="outline-0 p-1 bg-slate-50 rounded-[2px] shadow w-fit text-[10px] text-slate-900 placeholder:text-slate-400 font-[500] capitalize " onChange={(e) => {
           const getVal = e.target.value;
          
           const filterLevel = CoursesOffered.filter(currentLevel => {
           return currentLevel.Session[0] == getVal;
           });
           setLevel(filterLevel);
           if (getSemester == null) return;
           const filterSemester = filterLevel.filter(semester => {
            return semester.Session[1] == getSemester;
           });
           setCourses(filterSemester);
           console.log(e.target.value);
           
          }}  id="">
           
            <option value="">Select Level</option>
            <option value={100}>100 Level</option>
            <option value={200}>200 Level</option>
            <option value={300}>300 Level</option>
            <option value={400}>400 Level</option>
            <option value={500}>500 Level</option>
          </select>
                </div>
                <div className="flex   flex-col ">
                      
                        <select name="" className="outline-0 text-[10px] w-fit p-1 bg-slate-50 rounded-[2px] shadow text-slate-900 placeholder:text-slate-400 font-[500] capitalize "  onChange={(e) => {
          
          const getValue = e.target.value;
          setGetSemester(getValue);
          const filterSemester = level.filter(semester => {
           return semester.Session[1] == getValue;
          });
          setCourses(filterSemester);
           }} id="">
            
             <option value="">Select Semester</option>
             <option value={1}>First Semester</option>
             <option value={2}>Second Semester</option>
           </select>
                    </div>
                    
                <div className="flex   flex-col ">
                        <select onChange={(e) => {
            setCourseName(e.target.value);
            const getCreditUnit = courses.find(currentCourse => {
             return currentCourse.Course == e.target.value;
            });
            setSelectedUnit(getCreditUnit.Credit);
                setSelectedCourse(e.target.value);
              //  filterClickedCourse(e.target.value);
            }}
            value={selectedCourse}
            className="outline-0 p-1  text-[10px] bg-slate-50 rounded-[2px] shadow text-slate-900 placeholder:text-slate-400 font-[500] capitalize " name="" id="">
            <option value="">select</option>
            {courses.length !== 0 && courses.map(course => {
              return <option 
               value={course.Course}>{course.Course}</option>
            })}
           </select>
                    </div>
                    </div>
            
        </div>
        
        <div className=" pb-[50px] flex  justify-center  px-[30px] ">
            <div>
              <div>

</div>

   <div className="max-w-[600px] flex flex-col gap-5 my-[20px] ">
                    {fullOutline?.courseOutlines.map(details => {
                        return <div className="flex flex-col gap-1">
                            <h1 className="font-[500] text-[17px] md:text-[23px] text-slate-800 ">{details.title}</h1>
                            <p className="text-slate-500 text-[14px] md:text-[18px] ">{details.descrip}</p>
                            <hr />
                        </div>
                    })}
   </div>
        </div>
        </div>
              </div>
    )
}
