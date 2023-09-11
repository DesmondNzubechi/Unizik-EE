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
    localStorage.setItem('bookCat', JSON.stringify(bookCat))
        const filterClickedCourse = () => {
          const coursePdf = allPdfs.filter(pdf => {
            return pdf.course === clickedCoursePdf;
          });
          setCurrentPdf(coursePdf);
        };
    filterClickedCourse();
    const filterBookType = () => {
      const getHandout = currentPdf.filter(handout => {
        return handout.bookType === 'handouts';
      })
      const getTextbook = currentPdf.filter(handout => {
        return handout.bookType === 'textbook';
      })
      const getPastquestion = currentPdf.filter(handout => {
        return handout.bookType === 'past question';
      })
      setBookType({
        Handouts: getHandout,
        TextBooks: getTextbook,
        pastQuestions:getPastquestion,
      })
    }
    filterBookType();
      }, [allPdfs])
    
      console.log(clickedCoursePdf); 
    return(
        <div className="pt-[150px] px-[30px]  pb-[50px] ">
        <div className="text-center my-[20px] ">
              <h1 className="font-bold uppercase text-slate-900 text-[20px] md:text-[30px] ">{clickedCoursePdf}  e-book Download</h1>
              <p className="text-slate-700 capitalize text-[12px] md:text-[18px]  ">Here you find/download textbook, handouts and past exam questions on {clickedCoursePdf}</p>
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

       
      
        
       {   bookType.Handouts.length == 0 && bookCat.handoutState && <h1 className="md:text-[15px] text-[12px] font-bold text-center capitalize mt-[50px] ">{clickedCoursePdf}  handouts is not available now. </h1>  }
       {   bookType.TextBooks.length == 0 && bookCat.textBookState  && <h1 className="md:text-[15px] text-[12px] font-bold text-center capitalize mt-[50px] ">{clickedCoursePdf}  textbook is not available now. </h1>  }
        {  bookType.pastQuestions.length == 0 && bookCat.pastQuestion  && <h1 className="md:text-[15px] text-[12px] font-bold text-center capitalize mt-[50px] ">{clickedCoursePdf}  past exam questions is not available now. </h1>}  
        
       <div className="grid md:grid-cols-3 my-[50px] lg:grid-cols-4 gap-5 grid-cols-1 ">
      
          {
        bookCat.handoutState &&   bookType.Handouts.map(pdf => {
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
            
         bookCat.textBookState &&    bookType.TextBooks.map(pdf => {
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
            
           bookCat.pastQuestion &&  bookType.pastQuestions.map(pdf => {
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
