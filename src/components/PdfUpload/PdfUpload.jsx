import React from "react";
import { useState } from "react";
import { CoursesOffered } from "../CourseOffered/CourseOffered";


export const PdfUpload = () => {
const [courseName, setCourseName] = useState("");
const [level, setLevel] = useState([]);
const [getSemester, setGetSemester] = useState(null);
const [selectedCourse, setSelectedCourse] = useState('select');
const [selectedUnit, setSelectedUnit] = useState(null);
const [courses, setCourses] = useState([]);
const [pdfDetails, setPdfDetails] =  useState({
      level: '',
      semester: '',
      course:  '',
      topic : '',
      coursePdf : null,


});


console.log(pdfDetails);

    return(
            <div className="px-[20px] flex justify-center  py-[50px] ">
                <div>
                <h1 className="text-center md:max-w-full max-w-[250px]  uppercase mb-[30px] font-bold text-[15px] md:text-[30px] ">Hey! You can now Upload Pdf/Book </h1>
                <form action=""  className="flex md:max-w-full max-w-[250px]  flex-col  gap-3 ">
                    <div className="flex w-full flex-col  gap-3 ">
                    <div className="flex w-full  flex-col ">
                        <label className="md:text-[20px] text-[15px] font-semibold " htmlFor="category">Level</label>
                        <select name=""  className="outline-0 p-2 bg-yellow-400 rounded-[2px] shadow-2xl md:text-[20px] text-[10px] text-slate-900 placeholder:text-slate-400 font-[500] uppercase " onChange={(e) => {
           const getVal = e.target.value;
           setPdfDetails({
            ...pdfDetails,
            level: getVal,
           })
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
                        <label className="md:text-[20px] text-[15px] font-semibold "  htmlFor="title">Semester</label>
                        <select name="" className="outline-0 md:text-[20px] text-[10px] p-2 bg-yellow-400 rounded-[2px] shadow-2xl text-slate-900 placeholder:text-slate-400 font-[500] uppercase "  onChange={(e) => {
          
          const getValue = e.target.value;
          setGetSemester(getValue);
          setPdfDetails({
            ...pdfDetails,
            semester: getValue,
          })
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
                        <label className="md:text-[20px] text-[15px] font-semibold "  htmlFor="headline">Course Name</label>
                        <select onChange={(e) => {
            setCourseName(e.target.value);
            setPdfDetails({
                ...pdfDetails,
                course: e.target.value,
            })
            const getCreditUnit = courses.find(currentCourse => {
             return currentCourse.Course == e.target.value;
            });
            setSelectedUnit(getCreditUnit.Credit);
            setSelectedCourse(e.target.value);
            }}
            value={selectedCourse}
            className="outline-0 p-2 md:text-[20px] text-[10px] bg-yellow-400 rounded-[2px] shadow-2xl text-slate-900 placeholder:text-slate-400 font-[500] uppercase " name="" id="">
            <option value="">select</option>
            {courses.length !== 0 && courses.map(course => {
              return <option 
               value={course.Course}>{course.Course}</option>
            })}
           </select>
                    </div>

                    <div className="flex   flex-col ">
                        <label className="md:text-[20px] text-[15px] font-semibold "  htmlFor="headline">Topic</label>
                        <input
                        onChange={(e) => {
                            const getTopic = e.target.value;
                            setPdfDetails({
                                ...pdfDetails,
                                topic: getTopic,
                            })
                        }}
                         type="text" name="" className="outline-0 p-2 bg-yellow-400 rounded-[2px] md:text-[20px] text-[10px] shadow-2xl text-slate-900 placeholder:text-slate-400 font-[500] uppercase " placeholder="Input topic" id="" /></div>

                    <div className="flex   flex-col ">
                        <label className="md:text-[20px] text-[15px] font-semibold "  htmlFor="image">Pdf</label>
                        <input
                        onChange={(e) => {
                            const getPdf = e.target.files[0];
                            setPdfDetails({
                                ...pdfDetails,
                                coursePdf: getPdf,
                            })
                        }}
                         type="file" name="" className="outline-0 p-2 bg-yellow-400 rounded-[2px] md:text-[20px] text-[10px] file:bg-transparent file:border-0 shadow-2xl text-slate-900 placeholder:text-slate-400 font-[500] uppercase " placeholder="Input headline" id="" />
                    </div>
                    <button className="outline-0 p-2 bg-green-400 rounded-[2px] file:bg-transparent file:border-0 shadow-2xl text-slate-900 placeholder:text-slate-400 font-[500] uppercase"  type="submit">Upload Pdf</button>
                    </div>
                </form>
            </div>
            </div>
    )
}