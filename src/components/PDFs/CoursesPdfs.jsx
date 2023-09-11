import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { fullNewsContext } from "../context/Context";
//import { allPdfs } from "./PDFs";
import {MdAllInbox, MdOutlineFileDownload} from  'react-icons/md';
import { FaFileDownload } from 'react-icons/fa';
import { HiDocumentDownload } from 'react-icons/hi';
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";
export const DownloadPdfs = () => {
   // const {allPdfs} = useContext(fullNewsContext);
    const [getLevelPdf, setGetLevelPdf] = useState([]);
    const {clickedCoursePdf} = useContext(fullNewsContext);
  const [currentPdf, setCurrentPdf] = useState([]);
  const [allPdfs, setAllPdfs] = useState([]);
  const [bookType, setBookType] = useState({
    Handouts: [],
    TextBooks: [],
    pastQuestions: [],
  })

  useEffect(() => {
        
    const fetchPdf = async () => {
      const pdfStore = collection(db, 'learningResources');
      try {
        const pdfS = await getDocs(pdfStore);
        const allPdfData = pdfS.docs.map(doc => ({ ...doc.data(), id: doc.id }));
        setAllPdfs(allPdfData);

      } catch (error) {
        alert(error)
      }
    }
    fetchPdf();
        const filterClickedCourse = () => {
          const coursePdf = allPdfs.filter(pdf => {
            return pdf.course === clickedCoursePdf;
          });
          setCurrentPdf(coursePdf);
        };
        filterClickedCourse();
      }, [allPdfs])
    
      console.log(clickedCoursePdf); 
    return(
        <div className="pt-[150px] px-[30px]  pb-[50px] ">
        <div className="text-center my-[20px] ">
              <h1 className="font-bold uppercase text-slate-900 text-[20px] md:text-[30px] ">{clickedCoursePdf}  e-book Download</h1>
              <p className="text-slate-700 capitalize text-[12px] md:text-[18px]  ">Here you find/download textbook, handouts and past exam questions on {clickedCoursePdf}</p>
        </div>
        
        <div className="flex flex-row gap-2 items-center justify-center">
          <button className="shadow-2xl p-2 md:text-[15px] text-[12px] rounded bg-yellow-500 text-slate-50 capitalize font-semibold">handouts</button>
          <button className="shadow-2xl p-2 md:text-[15px] text-[12px] rounded bg-slate-100 capitalize font-semibold">Textbooks</button>
          <button className="shadow-2xl p-2 md:text-[15px] text-[12px] rounded bg-slate-100 capitalize font-semibold">Past Question</button>
        </div>

       
      
             {currentPdf.length == 0 &&  <div className="flex items-center justify-center"> <h1 className="text-center my-[50px] font-semibold">{clickedCoursePdf}  e-book is currently unavailable. Please Check back later🙏</h1></div> }
       <div className="grid md:grid-cols-3 my-[50px] lg:grid-cols-4 gap-5 grid-cols-1 ">
      
     {
        currentPdf.map(pdf => {
          return   <div className="flex flex-row shadow p-2  hover:bg-slate-100  gap-2 justify-between p-2 border items-center rounded ">
          <div className="flex flex-col gap-2">
            <h1 className="md:text-[17x] text-[14px] font-bold  ">{pdf.topic}</h1>  
              <p className="md:text-[15px] text-[12px]">{ pdf.size}</p>
            </div>
            <a download={pdf.link} href={pdf.link}> <HiDocumentDownload className="text-[35px] cursor-pointer hover:text-green-500  text-slate-900"/></a>
        </div>
          {/* <div className="md:max-w-[300px] border hover:border-slate-900 border-slate-300 relative shadow-2xl rounded-[5px] p-[5px]  ">
            <img src={pdf.pdfImg} className="  " alt="" />
            <span className="flex rounded-b p-[10px] absolute bottom-0 left-0 right-0 flex-row bg-slate-900 justify-between items-center">
                <h1 className="text-[20px] text-slate-50 ">{pdf.topic}</h1>
              <a href={pdf.downloadLink}  ><MdOutlineFileDownload  className="text-[20px] hover:text-yellow-500 text-slate-50 "/></a>   
            </span>
        </div>*/ }
        })
      }
      
      
        </div>
              </div>
    )
}
