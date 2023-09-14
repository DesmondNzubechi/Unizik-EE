import React from "react";
import { useState } from "react";
import { CoursesOffered } from "../CourseOffered/CourseOffered";
import { addDoc, collection } from "firebase/firestore";
import { db, storage } from "../config/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { RotateLoader } from "react-spinners";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const PdfUpload = () => {
  const [spinC, setSpinC] = useState(false);
const [courseName, setCourseName] = useState("");
const [level, setLevel] = useState([]);
const [getSemester, setGetSemester] = useState(null);
const [selectedCourse, setSelectedCourse] = useState('select');
const [selectedUnit, setSelectedUnit] = useState(null);
    const [courses, setCourses] = useState([]);
    const [pdfDatas, setpdfDatas] = useState(null)
const [pdfDetails, setPdfDetails] =  useState({
      level: '',
      semester: '',
      course:  '',
    topic: '',
    resourcesType: ''
      
});

  const uploadPdf = async () => {
    if (pdfDetails.level == '' || pdfDetails.semester == '' || pdfDetails.course == '' || pdfDetails.topic == '' || pdfDetails == '' || pdfDatas == null) {
      const notify = () => toast('Please make sure you fill out the form');
      notify();
      return;
    }
    setSpinC(true);
    const pdfStore = collection(db, 'learningResources');
    const storageRef = ref(storage, 'learningResources');

    try {
      const fileRef = ref(storageRef, pdfDatas.name);
      const uploadPdfData = await uploadBytes(fileRef, pdfDatas);
      const getPdfLink = await getDownloadURL(uploadPdfData.ref);

      // Calculate the size in megabytes
      const pdfSizeInBytes = pdfDatas.size;
      const pdfSizeInMB = (pdfSizeInBytes / 1048576).toFixed(2); // Convert to MB and round to 2 decimal places

      await addDoc(pdfStore, {
        level: pdfDetails.level,
        semester: pdfDetails.semester,
        course: pdfDetails.course,
          topic: pdfDetails.topic,
          bookType: pdfDetails.resourcesType,
        link: getPdfLink,
        size: pdfSizeInMB + ' MB',
      });
      setSpinC(false);
      const notify = () => toast('Uploaded successfully');
      notify();
    } catch (error) {
      console.error(error);
      alert('Failed to upload');
      setSpinC(false);
    }
  };
    return(
      <div className="px-[20px] flex justify-center  py-[50px] ">
          {spinC && <div className="fixed bg-tpr w-full z-[500] left-0 right-0 flex justify-center h-full top-0 bottom-0 items-center"><RotateLoader className="relative z-[600]" color="#36d7b7"
           size={30}
           width={10}
            /></div> }
                <div>
                <h1 className="text-center md:max-w-full max-w-[250px] font-bold  uppercase  mb-[30px] font-bold text-[12px] md:text-[20px] ">Hey! You can now Upload Handouts, Textbooks and exam past questions </h1>
                <form action=""  className="flex md:max-w-full max-w-[250px]  flex-col  gap-3 ">
                    <div className=" grid grid-cols-1 md:grid-cols-2 w-full   gap-3 ">
                    <div className="flex w-full  flex-col ">
                        <label className="md:text-[15px] text-[12px] font-semibold " htmlFor="category">Level</label>
                        <select name=""  className="outline-0 p-2 bg-slate-50 rounded-[2px] shadow md:text-[20px] text-[10px] text-slate-900 placeholder:text-slate-400 font-[500] capitalize " onChange={(e) => {
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
                        <label className="md:text-[15px] text-[12px] font-semibold "  htmlFor="title">Semester</label>
                        <select name="" className="outline-0 md:text-[20px] text-[10px] p-2 bg-slate-50 rounded-[2px] shadow text-slate-900 placeholder:text-slate-400 font-[500] capitalize "  onChange={(e) => {
          
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
                        <label className="md:text-[15px] text-[12px] font-semibold "  htmlFor="headline">Course Name</label>
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
            className="outline-0 p-2 md:text-[20px] text-[10px] bg-slate-50 rounded-[2px] shadow text-slate-900 placeholder:text-slate-400 font-[500] capitalize " name="" id="">
            <option value="">select</option>
            {courses.length !== 0 && courses.map(course => {
              return <option 
               value={course.Course}>{course.Course}</option>
            })}
           </select>
                        </div>
                        <div className="flex   flex-col ">
                        <label className="md:text-[15px] text-[12px] font-semibold "  htmlFor="headline">Resources Type</label>
                        
                            <select onChange={(e) => {
                                setPdfDetails({
                                    ...pdfDetails,
                                    resourcesType: e.target.value,
                                })
                            }}  className="outline-0 p-2 md:text-[20px] text-[10px] bg-slate-50 rounded-[2px] shadow text-slate-900 placeholder:text-slate-400 font-[500] capitalize " name="" id="">
                            <option value="">Select...</option>
                                <option value='handout'>Handout</option>
                                <option value='textbook'>textbook</option>
                                <option value='past question'>past question</option>
                               
                                
                            </select>
                        </div>

                    <div className="flex   flex-col ">
                        <label className="md:text-[15px] text-[12px] font-semibold "  htmlFor="headline">Topic</label>
                        <input
                        onChange={(e) => {
                            const getTopic = e.target.value;
                            setPdfDetails({
                                ...pdfDetails,
                                topic: getTopic,
                            })
                        }}
                         type="text" name="" className="outline-0 p-2 bg-slate-50 rounded-[2px] md:tex0px] text-[10px] shadow text-slate-900 placeholder:text-slate-900 font-[500] capitalize " placeholder="Input topic" id="" /></div>

                    <div className="flex   flex-col ">
                        <label className="md:text-[15px] text-[12px] font-semibold "  htmlFor="image">Pdf</label>
                        <input
                        onChange={(e) => {
                            const getPdf = e.target.files[0];
                                    setpdfDatas(getPdf);
                        }}
                         type="file" accept=".pdf" name="" className="outline-0 p-2 bg-slate-50 rounded-[2px] md:tex0px] text-[10px] file:bg-transparent file:border-0 shadow text-slate-900 placeholder:text-slate-900 font-[500] capitalize " placeholder="Input headline" id="" />
                    </div>
                    <button onClick={uploadPdf} className="outline-0 w-fit px-[30px] py-1 bg-slate-900 rounded-[2px] hover:bg-green-500  shadow-2xl font-bold text-slate-50  font-[500] capitalize"  type="button">Upload Pdf</button>
                    </div>
                </form>
            </div>
            </div>
    )
}

