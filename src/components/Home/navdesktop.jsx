import React from "react";
import img from '../../assets/images/eesalogor.png';
import { Link } from "react-router-dom";


export const Navdesktop = () => {
    return (
        <div className="lg:flex hidden  shadow-2xl bg-black z-[60] py-[5px] px-[20px] fixed top-0 left-0 right-0 w-full flex-row justify-around items-center">
  <div >
   <a href=""><img className=" w-[120px] " src={img} alt="logo" /></a>
        </div>

        <ul className="flex uppercase flex-row justify-center gap-x-[25px]">
            <li className="bg-slate-900 hover:bg-slate-50 hover:text-slate-900  text-slate-50 px-[5px] py-[5px] text-[17px] rounded capitaliz font-[700] "><Link to='/'>Home</Link></li>
            <li className="bg-slate-900 hover:bg-slate-50 hover:text-slate-900  text-slate-50 px-[5px] py-[5px] text-[17px] rounded capitaliz font-[700] "><Link to='/news'>News</Link></li>
            <li className="bg-slate-900 hover:bg-slate-50 hover:text-slate-900  text-slate-50 px-[5px] py-[5px] text-[17px] rounded capitaliz font-[700] "><Link to='/Book'>Learning Material</Link></li>
            <li className="bg-slate-900 hover:bg-slate-50 hover:text-slate-900  text-slate-50 px-[5px] py-[5px] text-[17px] rounded capitaliz font-[700] "><Link to='/cgpa'>Calculate cgpa</Link></li>
            <li className="bg-slate-900 hover:bg-slate-50 hover:text-slate-900  text-slate-50 px-[5px] py-[5px] text-[17px] rounded capitaliz font-[700] "><Link to='/courses'>course Outlines</Link></li>
          {/*  <li className="bg-slate-900  text-slate-50 px-[5px] py-[5px] text-[17px] rounded capitaliz font-[700] "><Link to='/Admission'>Student Leaders</Link></li>*/}
        
        </ul>

        <div className="flex flex-row gap-2">
            <button className="border-yellow-500 border text-white px-[10px] text-center py-[4px] text-[17px] rounded capitaliz font-semibold ">
            <Link to='/login'>Login</Link>
            
            </button>
            <button className="bg-yellow-500 px-[10px] text-center py-[4px] text-[17px] rounded capitaliz font-semibold ">
            <Link to='/signup'>Signup</Link>
        
            </button>
          </div>
        </div>
    )
} 