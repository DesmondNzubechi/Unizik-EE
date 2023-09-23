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
            return <div className="flex fle md:flex-row items-end w-fit rounded shadow-2xl px-[20px] py-5  gap-4">
            <div>
            <img className="md:max-w-[180px] max-w-[120px]  rounded " src={news.newsImg} alt="" />
            </div>
            
            <div className="flex flex-col gap-1   max-w-[400px] ">
            <h1 className="font-bold text-[10px] uppercase md:text-[14px]  ">{news.newsHeadline}</h1>
            <span className="font-semibold text-[8px] md:text-[10px] text-slate-500 ">{news.date}</span>
         <Link to={`/${news.category}/${news.newsHeadline.replace(' ', '-')}`} onClick={() => getFullNews(news)} className="text-slate-50 bg-slate-900 p-1 w-fit rounded hover:bg-slate-700 text-[10px] font-bold my-1">Read More...</Link>
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
      <div className="px-[20px] flex pt-[50px]  justify-around   flex-col rounded-[30px] bg-slate-100 gap-[40px] md:flex-row-reverse  items-center py-[100px] ">
      <div className="flex flex-col max-w-[700px] gap-[20px] ">
          <h1 className="text-[20px]  w-fit  rounded-[15px] border-slate-900 text-slate-900 font-bold uppercase ">News</h1>
          <p className="md:text-[15px] text-[12px] font-[400] ">We are your ultimate destination for cutting-edge news in electrical engineering. Stay ahead with our comprehensive coverage of technological advancements, research breakthroughs, and industry trends. Our expert team delivers curated articles on renewable energy, electric vehicles, robotics, and more. Trust our accurate, reliable, and balanced content to make informed decisions. Join our vibrant community of enthusiasts and professionals to engage in discussions and exchange knowledge. Fuel your curiosity, imagination, and success in this dynamic field.</p>
      <p><Link to='/news' className="bg-slate-900 hover:text-slate-50 text-[15px] text-yellow-500 px-[10px] py-[5px] mt-[60px] font-semibold rounded-[3px]  ">Read News</Link>
      </p>
      </div>
      <div className=" max-w-[500px]">
          <img className="rounded-[20px] " src={AboutNewsImg} alt="" />
      </div>
              </div>
  )
}
