import React from "react"
import eventImg from '../../assets/images/event.avif';
import { Link } from "react-router-dom";


export const SchoolEvents = () => {
    return( 
      <div className="px-[20px] flex pt-[50px] py-[20px] justify-around   flex-col rounded-[60px] bg-white gap-[20px] md:flex-row md:flex-row ... items-center py-[50px] ">
  <div className="flex flex-col max-w-[600px] gap-[20px] ">
      <h1 className="text-[20px]  w-fit  rounded-[15px] text-slate-900 font-semibold ">Events<span className="text-[30px]  w-fit  rounded-[15px] text-slate-900 font-bold uppercase"></span> </h1>
      <p className="md:text-[15px] text-[12px] font-[400] ">At Electrical Engineering Unizik, we believe that learning extends far beyond the classroom. It thrives in the connections we make, the stories we share, and the moments we create together. That's why we've dedicated this platform to curate and showcase a diverse array of events that cater to every interest, passion, and curiosity.</p>
  <p><Link to='/events' className="bg-slate-500 text-[15px] text-slate-50 px-[10px] py-[5px] mt-[60px] font-semibold hover:bg-slate-900 rounded-[3px]  ">Checkout Events</Link>
  </p>
  </div>
  <div className=" max-w-[600px]">
      <img className="rounded-[20px]" src={eventImg} alt="" />
  </div>
          </div>
    )
  }
  
  