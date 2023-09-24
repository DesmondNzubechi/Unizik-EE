import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fullNewsContext } from "../context/Context";
import AboutNewsImg from '../../assets/images/news2.png';
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "../config/firebase";



export const Events = () => {
  
  const {getFullNews, anotherNews, allEvents, setAllEvents, setAnotherNews} = useContext(fullNewsContext);
  useEffect(() => {
    const eventsStore = collection(db, 'Event');
    const eventUnsub = onSnapshot(eventsStore, (event) => {
      const getEvent = event.docs.map(doc => ({ ...doc.data(), id: doc.id }));
      setAllEvents(getEvent)
    });
    return () => {
      eventUnsub();
    }
  }, [])
   
console.log('events:', allEvents)
    return(
        <div className=" py-[100px] pt-[150px] flex  w gap-[20px] justify-around items-start px-[20px] ">
         <div className="flex flex-col justify-center gap-[20px]">
           <div className="flex flex-col ">
           <h1 className="uppercase text-[30px] font-bold">Events </h1>
           <span className="w-[70px] h-[7px] bg-yellow-500 "></span>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-[40px]">
          {allEvents?.map(event => {
            return <div className="flex fle md:flex-row items-end w-fit rounded shadow-2xl px-[20px] py-5  gap-4">
            <div>
            <img className="md:max-w-[180px] max-w-[120px]  rounded " src={event.newsImg} alt="" />
            </div>
            
            <div className="flex flex-col gap-1   max-w-[400px] ">
            <h1 className="font-bold text-[10px] uppercase md:text-[14px]  ">{event.newsHeadline}</h1>
            <span className="font-semibold text-[8px] md:text-[10px] text-slate-500 ">{event.date}</span>
           {/* <p className="text-slate-500  md:flex hidden  text-[10px] md:text-[12px] font-[400] ">{event.newsOverview} </p>*/}
            <Link to={`/${event.category}/${event.newsHeadline.replace(' ', '-')}`} onClick={() => getFullNews(event)} className="text-slate-50 bg-slate-900 p-2 w-fit rounded hover:bg-slate-700 text-[12px] font-bold my-1">Read More...</Link>
            </div>
            </div>
          }) 
              }      </div>
         </div>
       
        </div>
    )
}


{ /*<div className="flex flex-col gap-5">
<div className="flex flex-col w-fit ">
  <h1 className="uppercase text-[30px] font-bold">Other News</h1>
  <span className="w-[150px] h-[7px] bg-yellow-500 self-end"></span>
  </div>
  <div>
 {newsList.map((news, newsIndex) => {
 
   return <div className="flex flex-col items-start w-fit rounded shadow-2xl px-[20px] py-5  gap-4">
   <div>
   <img className="md:max-w-[300px]   rounded " src={news.newsImg} alt="" />
   </div>
   <div className="flex flex-col  max-w-[400px] ">
   <h1 className="font-bold text-[15px] md:max-w-[300px] md:text-[15px] capitalize ">{news.newsHeadline}</h1>
   <span className="font-semibold text-[15px] md:text-[17px] text-slate-700 ">{news.date}</span>
   <p className="text-slate-500    text-[14px] md:text-[13px] font-[400] ">{news.newsOverview}</p>
   <Link to='/news-details' onClick={() => getFullNews(news)} className="text-yellow-500 text-[13px] font-bold my-1">Read More...</Link>
   </div>
   </div>
  
 }) }

  </div>
</div>*/}

export const AboutNews = () => {
  return(
      <div className="px-[20px] flex pt-[50px]  justify-around   flex-col rounded-[30px] bg-slate-100 gap-[40px] md:flex-row md:flex-row ... items-center py-[100px] ">
      <div className="flex flex-col max-w-[700px] gap-[20px] ">
          <h1 className="text-[30px]  w-fit  rounded-[15px] border-slate-900 text-slate-900 font-bold uppercase ">News</h1>
          <p className="md:text-[17px] text-[15px] font-[400] ">At Electrical Engineering Unizik, we believe in learning beyond the classroom. Explore our diverse range of events, connecting passions and curiosities</p>
      <p><Link to='/news' className="bg-slate-900  hover:bg-slate-700 mt-[10px] text-slate-50 rounded-[3px] shadow-2xl p-[10px] font-semibold text-[15px] md:text-[20px]  ">Read News</Link>
      </p>
      </div>
      <div className=" max-w-[500px]">
          <img className="rounded-[20px] " src={AboutNewsImg} alt="" />
      </div>
              </div>
  )
}
