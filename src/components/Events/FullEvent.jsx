import React, { useContext, useEffect, useState } from "react";
import { fullNewsContext } from "../context/Context";
import { useParams } from "react-router-dom";

export const FullEvent = () => {
    const { allEvents} = useContext(fullNewsContext);
    const { newsHeadline } = useParams(); 
    const post = allEvents?.find(post => post?.newsHeadline === newsHeadline)
   console.log('events', allEvents)
    return(
        <div className="flex flex-col  py-[50px] justify-center items-start md:flex-row">
                  <div  className="   flex items-center justify-around flex-col  px-[30px] py-[100px] lg:min-h-[100vh] from-slate-50 bg-white rounded-t-[50px] gap-5 to-slate-50">
            
                    <div data-aos='zoom-in-down' aos-data-duration='2000' className="max-w-[700px] flex flex-col gap-3 ">
                            <h1 className="uppercase font-bold text-[20px] md:text-[30px] text-slate-900">{post?.newsHeadline}</h1>
                            <p className="text-slate-700 font-fonty  text-[12px] md:text-[20px] ">{ post?.newsOverview}</p>
                        <div  className="  ">
                        <img  data-aos='zoom-in-down' aos-data-duration='2000' src={post?.newsImg} alt="" className="" />
                            </div>
                            <p className="text-slate-700 font-bold   text-[15px] md:text-[20px] ">{post?.date}</p>
                        <div dangerouslySetInnerHTML={{__html: post?.fullNews}} className="text-slate-700 font-fonty  text-[12px]  md:text-[20px] "></div>
        
                    </div>
                    </div>
        </div>
    )
}