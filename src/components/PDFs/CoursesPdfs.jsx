import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { fullNewsContext } from "../context/Context";
import { allPdfs } from "./PDFs";
import {MdAllInbox, MdOutlineFileDownload} from  'react-icons/md';

export const DownloadPdfs = () => {
   // const {allPdfs} = useContext(fullNewsContext);
    const [getLevelPdf, setGetLevelPdf] = useState([]);
    const {clickedCoursePdf} = useContext(fullNewsContext);
    const [currentPdf, setCurrentPdf] = useState([]);

      useEffect(() => {
        const filterClickedCourse = () => {
          const coursePdf = allPdfs.filter(pdf => {
            return pdf.course === clickedCoursePdf;
          });
          setCurrentPdf(coursePdf);
        };
        filterClickedCourse();
      }, [])
    
      console.log(clickedCoursePdf); 
    return(
        <div className="pt-[150px] px-[30px]  pb-[50px] ">
        <div className="text-center my-[20px] ">
              <h1 className="font-bold uppercase text-slate-900 text-[25px] md:text-[30px] ">{clickedCoursePdf}  e-book Download</h1>
              <p className="text-slate-700 capitalize text-[18px]  ">Here you find/download textbook, handouts and past exam questions on {clickedCoursePdf}</p>
             </div>
      
             {currentPdf.length == 0 &&  <div className="flex items-center justify-center"> <h1 className="text-center my-[50px] font-semibold">{clickedCoursePdf}  e-book is currently unavailable. Please Check back later🙏</h1></div> }
       <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-5 grid-cols-1 ">
      
     {
        currentPdf.map(pdf => {
            return  <div className="md:max-w-[300px] border hover:border-slate-900 border-slate-300 relative shadow-2xl rounded-[5px] p-[5px]  ">
            <img src={pdf.pdfImg} className="  " alt="" />
            <span className="flex rounded-b p-[10px] absolute bottom-0 left-0 right-0 flex-row bg-slate-900 justify-between items-center">
                <h1 className="text-[20px] text-slate-50 ">{pdf.topic}</h1>
              <a href={pdf.downloadLink}  ><MdOutlineFileDownload  className="text-[20px] hover:text-yellow-500 text-slate-50 "/></a>   
            </span>
          </div> 
        })
      }
      
      
        </div>
              </div>
    )
}
