import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fullNewsContext } from "../context/Context";
import AboutNewsImg from '../../assets/images/news2.png';

const apikey = 'b9a46b1958145632d73edfcb3ca65284';
export const News = () => {
  const {getFullNews, anotherNews, allNews, setAllNews, setAnotherNews} = useContext(fullNewsContext);
    return(
        <div className=" py-[100px] pt-[150px] flex  w gap-[20px] justify-around items-start px-[20px] ">
         <div className="flex flex-col justify-center gap-[20px]">
           <div className="flex flex-col ">
           <h1 className="uppercase text-[30px] font-bold">News</h1>
           <span className="w-[70px] h-[7px] bg-yellow-500 "></span>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-[40px]">
          {allNews?.map(news => {
            return <div key={news.id} className="flex fle md:flex-row items-end w-fit rounded shadow-2xl px-[20px] py-5  gap-4">
            <div>
            <img className="md:max-w-[180px] max-w-[120px]  rounded " src={news.newsImg} alt="" />
            </div>
            
            <div className="flex flex-col gap-1   max-w-[400px] ">
            <h1 className="font-bold text-[10px] uppercase md:text-[14px]  ">{news.newsHeadline}</h1>
            <span className="font-semibold text-[8px] md:text-[10px] text-slate-500 ">{news.date}</span>
         <Link to={`/blog/${news.id/*replace(' ', '-')*/}`} onClick={() => getFullNews(news)} className="text-slate-50 bg-slate-900 p-1 w-fit rounded hover:bg-slate-700 text-[10px] font-bold my-1">Read More...</Link>
            </div>
            </div>
          }) 
              }      </div>
         </div>
       
        </div>
    )
}


export const AboutNews = () => {
  return(
      <div className="px-[20px] flex pt-[50px]  justify-around   flex-col rounded-[30px] bg-slate-100 gap-[40px] md:flex-row-reverse  items-center py-[50px] ">
      <div className="flex flex-col max-w-[600px] gap-[20px] ">
          <h1 className="text-[20px]  w-fit  rounded-[15px] border-slate-900 text-slate-900 font-bold uppercase ">News</h1>
          <p className="md:text-[15px] text-[12px] font-[400] ">Your go-to source for cutting-edge electrical engineering news. Stay ahead with our coverage of tech advances, research, and industry trends. Our expert team curates articles on renewables, EVs, robotics, and more. Trust our accurate, reliable content for informed decisions. Join our vibrant community to fuel your success.</p>
      <p><Link to='/news' className="bg-slate-900  hover:bg-slate-700 mt-[10px] text-slate-50 rounded-[3px] shadow-2xl p-[10px] font-semibold text-[15px] md:text-[20px]  ">Read News</Link>
      </p>
      </div>
      <div className=" "> 
    <img className="rounded-[20px] max-w-[300px] md:max-w-[500px] "  src={AboutNewsImg} alt="" />
      </div>
              </div>
  )
}
