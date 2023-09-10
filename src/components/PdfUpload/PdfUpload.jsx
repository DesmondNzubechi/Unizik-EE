import React from "react";
import { useState } from "react";
import { CoursesOffered } from "../CourseOffered/CourseOffered";
import { addDoc, collection } from "firebase/firestore";
import { db, storage } from "../config/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import pdfjsLib from 'pdfjs-dist';

export const PdfUpload = () => {
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
      topic : '',
});
    
    
    
// const uploadPdf = async () => {
//     const pdfStore = collection(db, 'learningResources');
//     const storageRef = ref(storage, 'learningResources');
  
//     try {
//       // Render the first page of the PDF as an image
//       const pdfDataResponse = await fetch(pdfDatas); // Assuming pdfDatas.url contains the URL of the PDF
//       const pdfData = await pdfDataResponse.arrayBuffer();
//       const pdf = await pdfjsLib.getDocument({ data: pdfData }).promise;
//       const firstPage = await pdf.getPage(1);
//       const viewport = firstPage.getViewport({ scale: 1 });
//       const canvas = document.createElement('canvas');
//       const context = canvas.getContext('2d');
//       canvas.height = viewport.height;
//       canvas.width = viewport.width;
//       await firstPage.render({ canvasContext: context, viewport }).promise;
//       const imageBase64 = canvas.toDataURL('image/jpeg');
  
//       // Upload the image of the first page to Firebase Storage
//       const imageRef = ref(storage, `learningResources/${pdfDatas.name}_first_page.jpg`);
//       const imageUploadData = await uploadBytes(imageRef, imageBase64, 'data_url');
  
//       // Get the download URL for the uploaded image
//       const imageDownloadURL = await getDownloadURL(imageUploadData.ref);
  
//       // Now that the image is uploaded, you can proceed to upload the PDF
//       const fileRef = ref(storageRef, pdfDatas.name);
//       const uploadPdfData = await uploadBytes(fileRef, pdfDatas);
  
//       // Get the download URL for the uploaded PDF
//       const getPdfLink = await getDownloadURL(uploadPdfData.ref);
//    // Calculate the size in megabytes
//       const pdfSizeInBytes = pdfDatas.size;
//       const pdfSizeInMB = (pdfSizeInBytes / 1048576).toFixed(2); // Convert to MB and round to 2 decimal places
//       // Add both PDF and image details to Firestore
//       await addDoc(pdfStore, {
//         level: pdfDetails.level,
//         semester: pdfDetails.semester,
//         course: pdfDetails.course,
//         topic: pdfDetails.topic,
//         link: getPdfLink,
//         size: pdfSizeInMB + ' MB',
//         firstPageImage: imageDownloadURL,
//       });
  
//       alert('PDF and image uploaded successfully!');
//     } catch (error) {
//       console.error(error);
//       alert('Error uploading PDF: ' + error.message);
//     }
//   };
  

const uploadPdf = async () => {
    const pdfStore = collection(db, 'learningResources');
    const storageRef = ref(storage, 'learningResources');

    try {
      const fileRef = ref(storageRef, pdfDatas.name);
      const uploadPdfData = await uploadBytes(fileRef, pdfDatas);
      const getPdfLink = await getDownloadURL(uploadPdfData.ref);

      // Calculate the size in megabytes
      const pdfSizeInBytes = pdfDatas.size;
      const pdfSizeInMB = (pdfSizeInBytes / 1048576).toFixed(2); // Convert to MB and round to 2 decimal places

      // Render the first page of the PDF as an image
      const pdfDataResponse = await fetch(getPdfLink);
      const pdfData = await pdfDataResponse.arrayBuffer();
      const pdf = await pdfjsLib.getDocument({ data: pdfData }).promise;
      const firstPage = await pdf.getPage(1);
      const viewport = firstPage.getViewport({ scale: 1 });
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      canvas.height = viewport.height;
      canvas.width = viewport.width;
      await firstPage.render({ canvasContext: context, viewport }).promise;
      const imageBase64 = canvas.toDataURL('image/jpeg');

      // Upload the image of the first page to Firebase Storage
      const imageRef = ref(storage, `learningResources/${pdfDatas.name}_first_page.jpg`);
      const imageUploadData = await uploadBytes(imageRef, imageBase64, 'data_url');

      // Get the download URL for the uploaded image
      const imageDownloadURL = await getDownloadURL(imageUploadData.ref);

      await addDoc(pdfStore, {
        level: pdfDetails.level,
        semester: pdfDetails.semester,
        course: pdfDetails.course,
        topic: pdfDetails.topic,
        link: getPdfLink,
        size: pdfSizeInMB + ' MB',
        firstPageImage: imageDownloadURL, // Include the image download URL in Firestore
      });

      alert('PDF and image uploaded successfully!');
    } catch (error) {
      console.error(error);
      alert('Error uploading PDF: ' + error.message);
    }
  };


    // const uploadPdf = async () => {
    //     const pdfStore = collection(db, 'learningResources');
    //     const storageRef = ref(storage, 'learningResources');

    //     try {
    //         const fileRef = ref(storageRef, pdfDatas.name);
    //         const uploadPdfDatas = await uploadBytes(fileRef, pdfDatas)
    //         const getPdfLink = await getDownloadURL(uploadPdfDatas.ref);
    //         await addDoc(pdfStore, {
    //             level: pdfDetails.level,
    //             semester: pdfDetails.semester,
    //             course:  pdfDetails.course,
    //             topic : pdfDetails.topic,
    //             link: getPdfLink,
    //             size: pdfDatas.size,
    //         })
    //         alert('sure sure')
    //     } catch (error) {
    //         alert(error)
    //     }
    // }

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
                                    setpdfDatas(getPdf);
                        }}
                         type="file" accept=".pdf" name="" className="outline-0 p-2 bg-yellow-400 rounded-[2px] md:text-[20px] text-[10px] file:bg-transparent file:border-0 shadow-2xl text-slate-900 placeholder:text-slate-400 font-[500] uppercase " placeholder="Input headline" id="" />
                    </div>
                    <button onClick={uploadPdf} className="outline-0 p-2 bg-green-400 rounded-[2px] file:bg-transparent file:border-0 shadow-2xl text-slate-900 placeholder:text-slate-400 font-[500] uppercase"  type="button">Upload Pdf</button>
                    </div>
                </form>
            </div>
            </div>
    )
}

