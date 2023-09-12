import React, { useContext } from "react";
import image from '../../assets/images/1682585228090.png';
import { fullNewsContext } from "../context/Context";
import { Link } from "react-router-dom";


export const FullNewsDetails = () => {
    const { fullNews, anotherNews, getFullNews } = useContext(fullNewsContext);
    return(
        <div className="flex flex-col py-[50px] justify-between items-start md:flex-row">
            {
                fullNews.map(news => {
                    return    <div  className="   flex items-center justify-around flex-col  px-[30px] py-[100px] lg:min-h-[100vh] from-slate-50 bg-white rounded-t-[50px] gap-5 to-slate-50">
            
                    <div data-aos='zoom-in-down' aos-data-duration='2000' className="max-w-[700px] flex flex-col gap-3 ">
                        <h1 className="uppercase font-bold text-[30px] text-slate-900">{news.newsHeadline}</h1>
                        <div  className=" flex  ">
                        <img  data-aos='zoom-in-down' aos-data-duration='2000' src={news.newsImg} alt="" className="max-w-[400px] max-h-[400px]" />
                            </div>
                            <p className="text-slate-700 font-bold  text-[15px] md:text-[20px] ">{news.date}</p>
                        <p dangerouslySetInnerHTML={{__html: news.fullNews}} className="text-slate-700 font-fonty  text-[15px] md:text-[20px] "></p>
                        
                        <p className="text-slate-700 font-fonty  text-[15px] md:text-[20px] ">{news.content}</p>
        
                    </div>
                    </div>
                })
            }
      
      <div className="px-[20px] md:pt-[50px]">
        <p className="text-start uppercase text-[25px] font-bold my-[10px] ">More news</p>
      <div className="grid grid-col-1 gap-5 ">
      {anotherNews.map((news, newsIndex) => {
          
          return <div className="flex w-full  items-start  rounded shadow-2xl px-[20px] py-5  gap-4">
          <div className="">
          <img className=" max-w-[100px]   rounded " src={news.image} alt="" />
          </div>
          <div className="flex flex-col  max-w-[400px] ">
          <h1 className="font-bold text-[10px] md:max-w-[300px] capitalize ">{news.title}</h1>
          <Link to='/news-details' onClick={() => getFullNews(news)} className="text-yellow-500 text-[13px] font-bold my-1">Read More...</Link>
          </div>
          </div>
        }) }
      </div>
      </div>
        </div>
    )
}