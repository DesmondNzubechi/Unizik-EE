import React from "react";
import { useContext } from "react";
import { Context } from "../../Context/Context";
import { Link } from "react-router-dom";
import { deleteDoc, doc } from "firebase/firestore";
import { EditNews } from "../EditNews/EditNews";
import { db } from "../../Config/Firebase";
import fileExtension from  "file-extension";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { ClipLoader, FadeLoader, MoonLoader, RotateLoader } from "react-spinners";
export const AllNews = () => {
    
    const {fetchedNews, editNews, displaying, setDisplaying, setEditNews, Subscribe} = useContext(Context)
    console.log(editNews)

    const deleteNews = async (id) => {
    const deleteConfirmation = confirm('Are you sure you want to delete this news, Kindly note that you can\'t undo this action after being processed')
if(!deleteConfirmation) {
   return;
} 
try {
    const newsIn = doc(db, 'News', id);
    await deleteDoc(newsIn);
    const noti = () => toast('News Deleted Successfully');
    noti();
} catch (error) {
    const noti = () => toast(error);
    noti();
}
};

    return(
        <div className="flex flex-row  font-poppins justify-center px-[40px] py-[50px]">
        <div>
            <h1 className="text-center uppercase text-[30px] underline  mb-[20px] font-bold">all news</h1>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {fetchedNews.length === 0  && <div className="py-[40px] md:ml-[70px] text-center w-full z-[500] left-0 right-0 flex justify-center h-full top-0 bottom-0 items-center">< ClipLoader className="relative z-[600]" color="black"
           size={70}
           width={10}
            /></div> } 
             {fetchedNews.map(news => {
              
                return  <div className="flex flex-col p-3 shadow-xl gap-3">
              
                 {!news?.newsImg && news?.newsVideo && <div className="py-[40px] md:ml-[70px] text-center w-full z-[500] left-0 right-0 flex justify-center h-full top-0 bottom-0 items-center">< MoonLoader className="relative z-[600]" color="#36d7b7"
           size={30}
           width={10}
            /></div>
}
                  {news?.newsVideo && <video className="rounded w-[300px] h-[200px]" controls>
    <source  src={news.newsVideo} type="video/mp4" />
                        </video>}
                 
                
                  {news?.newsImg  &&  <img src={news.newsImg} alt="" className="rounded w-[300px] h-[200px]" />}
             
                 
                <p className="text-[10px] ">{news.date}</p>
                <div>
                <h1 className="text-start max-w-[300px] text-[10px] font-semibold uppercase w-full">{news.newsHeadline}</h1>
                </div>
                <div className="flex flex-row gap-5 justify-start ">
                 <Link onClick={() => {
                    setEditNews(news);
                    setDisplaying({
                        dashboardView: false,
                         editNews: true,
                         postNews: false,
                         allNews: false,
                         users: false,
                         addReview: false,
                         addQuote: false,
                    })
                 }} className="px-3 py-1 text-slate-700 hover:text-white rounded font-[600] hover:bg-slate-700  bg-gray-100 ">Edit </Link>
                 <Link key={news.date} to={`/blog/${news?.newsHeadline}`} onClick={() => Subscribe(news)} className="px-3 py-1 text-slate-700 hover:text-white rounded font-[600] hover:bg-green-500 bg-green-100 ">View</Link>
                 <Link onClick={() => deleteNews(news.id)} className="px-3 py-1 text-slate-700 hover:text-white rounded font-[600] hover:bg-red-500 bg-red-100 ">Delete</Link>
                </div>
               </div>
             })}
            </div>
        </div>
        </div>
    )
}