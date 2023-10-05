import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { fullNewsContext } from "../context/Context";
import { CoursesOffered } from "../CourseOffered/CourseOffered";
import { AiFillDelete } from 'react-icons/ai';
import { deleteObject, ref } from "firebase/storage";
import { RotateLoader } from "react-spinners";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { ImDownload } from 'react-icons/im';

export const UserLearningResources = () => {
  const [spinC, setSpinC] = useState(false);
    const [courseName, setCourseName] = useState("");
const [level, setLevel] = useState([]);
const [getSemester, setGetSemester] = useState('');
const [selectedCourse, setSelectedCourse] = useState('select');
const [selectedUnit, setSelectedUnit] = useState(null);
    const [courses, setCourses] = useState([]);
const [pdfDetails, setPdfDetails] =  useState({
      level: '',
      semester: '',
      course:  '',
    topic: '',
    resourcesType: ''
      
});
  const {allPdfs} = useContext(fullNewsContext);
  const [bookCat, setBookCat] = useState(JSON.parse(localStorage.getItem('bookCat')) || {
    handoutText: 'text-slate-50',
    handoutBg: 'bg-yellow-500',
    handoutState: true,
    textBookText: 'text-slate-900',
    textBookBg: 'bg-slate-100',
    textBookState: false,
    pastQuestionText: 'text-slate-900',
    pastQuestionBg: 'bg-slate-100',
    pastQuestion: false,
  })
  
  const filterCourseAllPdf = allPdfs.filter(course => {
    return course.course.replace(" ", "") === selectedCourse
  });
  const filterHandouts = filterCourseAllPdf.filter(handout => {
    return handout.bookType === 'handout'
  })
  const filterTextbook = filterCourseAllPdf.filter(textbook => {
    return textbook.bookType === 'textbook'
  })
  const filterPastQ = filterCourseAllPdf.filter(pastQ => {
    return pastQ.bookType === 'past question'
  })

    return(
      <div className="pt-[50px] px-[30px]  pb-[50px] ">
          {spinC && <div className="fixed bg-tpr w-full z-[500] left-0 right-0 flex justify-center h-full top-0 bottom-0 items-center"><RotateLoader className="relative z-[600]" color="#36d7b7"
           size={30}
           width={10}
            /></div> }
        <div className="text-center my-[20px] ">
                <h1 className="font-bold uppercase text-slate-900 text-[20px] md:text-[30px] ">learning resources</h1>
                <div className=" flex  flex-row justify-center    gap-1 ">
                <div className="flex   flex-col ">
                        <select name=""  className="outline-0 p-1 bg-slate-50 rounded-[2px] shadow w-fit text-[10px] text-slate-900 placeholder:text-slate-400 font-[500] capitalize " onChange={(e) => {
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
                      
                        <select name="" className="outline-0 text-[10px] w-fit p-1 bg-slate-50 rounded-[2px] shadow text-slate-900 placeholder:text-slate-400 font-[500] capitalize "  onChange={(e) => {
          
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
        
        <div className="flex flex-row gap-2 items-center justify-center">
          <button onClick={() => {
            setBookCat({
              handoutText: 'text-slate-50',
    handoutBg: 'bg-yellow-500',
    handoutState: true,
    textBookText: 'text-slate-900',
    textBookBg: 'bg-slate-100',
    textBookState: false,
    pastQuestionText: 'text-slate-900',
    pastQuestionBg: 'bg-slate-100',
    pastQuestion: false,
            })
          }} className={`shadow-2xl p-2 md:text-[15px] text-[12px] rounded ${bookCat.handoutBg}  ${bookCat.handoutText} capitalize font-semibold`}>handouts</button>
          <button onClick={() => {
            setBookCat({
              handoutText: 'text-slate-900',
    handoutBg: 'bg-slate-100',
    handoutState: false,
    textBookText: 'text-slate-50',
    textBookBg: 'bg-yellow-500',
    textBookState: true,
    pastQuestionText: 'text-slate-900',
    pastQuestionBg: 'bg-slate-100',
    pastQuestion: false,
            })
          }} className={`shadow-2xl p-2 md:text-[15px] text-[12px] rounded ${bookCat.textBookBg}  ${bookCat.textBookText}  capitalize font-semibold`}>Textbooks</button>
          <button onClick={() => {
            setBookCat({
              handoutText: 'text-slate-900',
    handoutBg: 'bg-slate-100',
    handoutState: false,
    textBookText: 'text-slate-900',
    textBookBg: 'bg-slate-100',
    textBookState: false,
    pastQuestionText: 'text-slate-50',
    pastQuestionBg: 'bg-yellow-500',
    pastQuestion: true,
            })
          }} className={`shadow-2xl p-2 md:text-[15px] text-[12px] rounded ${bookCat.pastQuestionBg}  ${bookCat.pastQuestionText} capitalize font-semibold`}>Past Question</button>
        </div>
       {   filterHandouts.length == 0 && bookCat.handoutState && <h1 className="md:text-[15px] text-[12px] font-bold text-center capitalize mt-[50px] ">{selectedCourse}  handouts is not available now. </h1>  }
       {   filterTextbook.length == 0 && bookCat.textBookState  && <h1 className="md:text-[15px] text-[12px] font-bold text-center capitalize mt-[50px] ">{selectedCourse}  textbook is not available now. </h1>  }
        {  filterPastQ.length == 0 && bookCat.pastQuestion  && <h1 className="md:text-[15px] text-[12px] font-bold text-center capitalize mt-[50px] ">{selectedCourse}  past exam questions is not available now. </h1>}  
        
       <div className="grid md:grid-cols-3 my-[50px] lg:grid-cols-4 gap-5 grid-cols-1 ">
      
          {
        bookCat.handoutState &&   filterHandouts.map((pdf, index) => {
              return <div key={index} className="flex flex-row shadow p-2  hover:bg-slate-100  gap-2 justify-between p-2 border items-center rounded ">
                <div className="flex flex-col gap-2">
                  <h1 className="md:text-[17x] text-[14px] font-bold  ">{pdf.topic}</h1>
                  <p className="md:text-[15px] text-[12px]">{pdf.size}</p>
                </div>
                <a href={pdf.link} download={pdf.link}> <ImDownload className="text-[35px] cursor-pointer hover:text-green-500  text-slate-900" /></a>
              </div>
             }
            )
          }
          
          {
            
         bookCat.textBookState &&    filterTextbook.map((pdf, index) => {
          return <div key={index} className="flex flex-row shadow  p-2  hover:bg-slate-100  gap-2 justify-between p-2 border items-center rounded ">
                <div className="flex flex-col gap-2">
                  <h1 className="md:text-[17x] text-[14px] font-bold  ">{pdf.topic}</h1>
                  <p className="md:text-[15px] text-[12px]">{pdf.size}</p>
                </div>
                <a href={pdf.link} download={pdf.link}> <ImDownload className="text-[35px] cursor-pointer hover:text-green-500  text-slate-900" /></a>
              </div>
             }
            )
          }
          {
            
           bookCat.pastQuestion &&  filterPastQ.map((pdf, index) => {
            return <div key={index} className="flex flex-row shadow  p-2  hover:bg-slate-100  gap-2 justify-between p-2 border items-center rounded ">
                <div className="flex flex-col gap-2">
                  <h1 className="md:text-[17x] text-[14px] font-bold  ">{pdf.topic}</h1>
                  <p className="md:text-[15px] text-[12px]">{pdf.size}</p>
                </div>
                <a href={pdf.link} download={pdf.link}> <ImDownload className="text-[35px] cursor-pointer hover:text-red-700  text-red-500" /></a>
              </div>
             }
            )
      }
      
      
        </div>
              </div>
    )
}
