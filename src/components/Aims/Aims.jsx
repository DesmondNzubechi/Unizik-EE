import React from "react"
import eventImg from '../../assets/images/event.avif';
import { Link } from "react-router-dom";


export const SchoolEvents = () => {
    return( 
      <div className="px-[20px] flex pt-[50px] py-[20px] justify-around   flex-col rounded-[60px] bg-white gap-[40px] md:flex-row md:flex-row ... items-center py-[50px] ">
<div className="flex flex-col max-w-[600px] gap-[20px] ">
      <h1 className="text-[20px]  w-fit  rounded-[15px] text-slate-900 font-semibold ">Events<span className="text-[30px]  w-fit  rounded-[15px] text-slate-900 font-bold uppercase"></span> </h1>
      <p className="md:text-[20px] text-[12px] font-[400] ">At Electrical Engineering Unizik, we believe in learning beyond the classroom. Explore our diverse range of events, connecting passions and curiosities</p>
  <p><Link to='/events' className="bg-slate-900  hover:bg-slate-700 mt-[10px] text-slate-50 rounded-[3px] shadow-2xl p-[10px] font-semibold text-[15px] md:text-[20px]  ">Checkout Events</Link>
  </p>
  </div> 
  <div className=" "> 
    <img className="rounded-[20px] max-w-[300px] md:max-w-[500px] "  src={eventImg} alt="" />
  </div>
          </div>
    )
  }
  
  