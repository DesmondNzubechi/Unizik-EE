import React from "react";
import { useContext, useEffect } from "react";
import { fullNewsContext } from "../../context/Context";
import { Link } from "react-router-dom";
import { deleteDoc, collection, doc, getDocs, onSnapshot } from "firebase/firestore";
import { EditNews } from "../EditNews/EditNews";
import { db, storage } from "../../config/firebase";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { ClipLoader, FadeLoader, MoonLoader, RotateLoader } from "react-spinners";
import { deleteObject, ref } from "firebase/storage";


export const AllNews = () => {
    const {allNews, allEvents, getFullNews, setDisplaying, setEditNews, } = useContext(fullNewsContext);
    const deleteNews = async (news) => {
    const deleteConfirmation = window.confirm('Are you sure you want to delete this news, Kindly note that you can\'t undo this action after being processed')
if(!deleteConfirmation) {
   return;
} 
try {
    const newsIn = doc(db, `${news.category}`, news.id);
    await deleteDoc(newsIn);
    const newsImgPath = news.newsImg.split('/');
    const imgToBeDeleted = newsImgPath[newsImgPath.length - 1];
    const newsImgName = imgToBeDeleted.split('?')[0];
    const deletingImg = ref(storage, `NewsImages/${newsImgName.replace('NewsImages%2F', '')}`);
    await deleteObject(deletingImg);
    const noti = () => toast('Deleted Successfully');
    noti();
} catch (error) {
    const noti = () => toast(error);
    noti();
}
};
const newsAndEvent = [...allNews, ...allEvents]
    return(
        <div className="flex flex-row  font-poppins justify-center px-[40px] py-[50px]">
        <div>
            <h1 className="text-center uppercase text-[12px] md:text-[25px] underline  mb-[20px] font-bold">all news and events</h1>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {newsAndEvent.length === 0  && <div className="py-[40px] md:ml-[70px] text-center w-full z-[500] left-0 right-0 flex justify-center h-full top-0 bottom-0 items-center">< ClipLoader className="relative z-[600]" color="black"
           size={70}
           width={10} 
            /></div> } 
             {newsAndEvent?.map(news => {
              
                return  <div className="flex flex-col relative p-3 shadow-xl gap-3">
                    <p className="bg-slate-500 rounded p-1 top-0 absolute">{ news.category}</p>
                 {!news?.newsImg && <div className="py-[40px] md:ml-[70px] text-center w-full z-[500] left-0 right-0 flex justify-center h-full top-0 bottom-0 items-center">< MoonLoader className="relative z-[600]" color="#36d7b7"
           size={30}
           width={10}
            /></div>
}
                  {news?.newsImg  &&  <img src={news.newsImg} alt="" className="rounded w-[300px] h-[200px]" />}    
                <p className="text-[10px] ">{news.date}</p>
                <div>
                <h1 className="text-start max-w-[300px] text-[10px] font-semibold uppercase w-full">{news.newsHeadline}</h1>
                </div>
                <div className="flex flex-row gap-5 justify-start ">
                 <Link onClick={() => {
                    setEditNews(news);
                    setDisplaying({
                        pdfView: false,
                        viewDashboard: false,
                        viewProfile: false,
                        pdfPost: false,
                        newsPost: false,
                      userView: false,
                        viewAllNews: false,
                      viewEditNews:true,
                    })
                 }} className="px-3 py-1 text-slate-700 hover:text-white rounded md:text-[15px] text-[12px] font-[600] hover:bg-slate-700  bg-gray-100 ">Edit </Link>
                 <Link key={news?.date} to={`/${news.category}/${news.newsHeadline.replace(' ', '-')}`} onClick={() => getFullNews(news)} className="px-3 py-1 md:text-[15px] text-[12px] text-slate-700 hover:text-white rounded font-[600] hover:bg-green-500 bg-green-100 ">View</Link>
                 <Link onClick={() => deleteNews(news)} className="px-3 py-1 md:text-[15px] text-[12px] text-slate-700 hover:text-white rounded font-[600] hover:bg-red-500 bg-red-100 ">Delete</Link>
                </div>
               </div>
             })}
            </div>
        </div>
        </div>
    )
}