import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { fullNewsContext } from "../context/Context";
//import { allPdfs } from "./PDFs";
import { HiDocumentDownload } from 'react-icons/hi';
import { useNavigate, useParams } from "react-router-dom";
import { Login } from "../login/login";
export const DownloadPdfs = () => {
  const { Course } = useParams(); 
  const navig = useNavigate();
  const { allPdfs, signedIn} = useContext(fullNewsContext);
  const filterPdfs = allPdfs.filter(course => {
    return course.course.replace(' ', '') === Course
  })
  const filterHandouts = filterPdfs.filter(handout => {
    return handout.bookType === 'handout'
  })
  const filterTextbook = filterPdfs.filter(textbook => {
    return textbook.bookType === 'textbook'
  })
  const filterPastQ = filterPdfs.filter(pastQ => {
    return pastQ.bookType === 'past question'
  })
  console.log('bus', filterTextbook)
  const bookCategories = ['Handouts', 'Textbooks', 'Past Questions'];
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
  if (!signedIn) {
return <Login/> 
  }
  return (
        <div className="pt-[150px] px-[30px]  pb-[50px] ">
        <div className="text-center my-[20px] ">
              <h1 className="font-bold uppercase text-slate-900 text-[20px] md:text-[30px] "> {Course}  e-book Download</h1>
              <p className="text-slate-700 capitalize text-[12px] md:text-[18px]  ">Here you find/download textbook, handouts and past exam questions on {Course}</p>
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
       {   filterHandouts.length === 0 && bookCat.handoutState && <h1 className="md:text-[15px] text-[12px] font-bold text-center capitalize mt-[50px] ">{Course}  handouts is not available now. </h1>  }
       {   filterTextbook.length === 0 && bookCat.textBookState  && <h1 className="md:text-[15px] text-[12px] font-bold text-center capitalize mt-[50px] ">{Course}  textbook is not available now. </h1>  }
        {  filterPastQ.length === 0 && bookCat.pastQuestion  && <h1 className="md:text-[15px] text-[12px] font-bold text-center capitalize mt-[50px] ">{Course}  past exam questions is not available now. </h1>}  
        
       <div className="grid md:grid-cols-3 my-[50px] lg:grid-cols-4 gap-5 grid-cols-1 ">
      
          {
        bookCat.handoutState &&   filterHandouts.map(pdf => {
              return <div className="flex flex-row shadow p-2  hover:bg-slate-100  gap-2 justify-between p-2 border items-center rounded ">
                <div className="flex flex-col gap-2">
                  <h1 className="md:text-[17x] text-[14px] font-bold  ">{pdf.topic}</h1>
                  <p className="md:text-[15px] text-[12px]">{pdf.size}</p>
                </div>
                <a download={pdf.link} href={pdf.link}> <HiDocumentDownload className="text-[35px] cursor-pointer hover:text-green-500  text-slate-900" /></a>
              </div>
             }
            )
          }
          
          {
            
         bookCat.textBookState &&    filterTextbook.map(pdf => {
              return <div className="flex flex-row shadow p-2  hover:bg-slate-100  gap-2 justify-between p-2 border items-center rounded ">
                <div className="flex flex-col gap-2">
                  <h1 className="md:text-[17x] text-[14px] font-bold  ">{pdf.topic}</h1>
                  <p className="md:text-[15px] text-[12px]">{pdf.size}</p>
                </div>
                <a download={pdf.link} href={pdf.link}> <HiDocumentDownload className="text-[35px] cursor-pointer hover:text-green-500  text-slate-900" /></a>
              </div>
             }
            )
          }
          {
            
           bookCat.pastQuestion &&  filterPastQ.map(pdf => {
              return <div className="flex flex-row shadow p-2  hover:bg-slate-100  gap-2 justify-between p-2 border items-center rounded ">
                <div className="flex flex-col gap-2">
                  <h1 className="md:text-[17x] text-[14px] font-bold  ">{pdf.topic}</h1>
                  <p className="md:text-[15px] text-[12px]">{pdf.size}</p>
                </div>
                <a download={pdf.link} href={pdf.link}> <HiDocumentDownload className="text-[35px] cursor-pointer hover:text-green-500  text-slate-900" /></a>
              </div>
             }
            )
      }
      
      
        </div>
              </div>
    )
}
