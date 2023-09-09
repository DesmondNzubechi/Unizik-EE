import React, { useState } from "react";
import img from '../../assets/images/eesalogor.png';
import tools from '../../assets/images/ee.avif';
import {AiOutlineMenu} from 'react-icons/ai';
import {HiXMark} from 'react-icons/hi2';
import { Link } from "react-router-dom";
import { FaUserCircle } from 'react-icons/fa';
import { fullNewsContext } from "../context/Context";
import { useContext } from "react";

export const Navmobile = () => {
    const { signedIn } = useContext(fullNewsContext);

const [showNav, SetShowNav] = useState(false);
const [hideBtn, setHideBtn] = useState(false);
const [showBtn, setShowBtn] = useState(true);

const shownavF = () => {
    SetShowNav(true);
    setHideBtn(true);
    setShowBtn(false);
};


const hidenavF = () => {
    SetShowNav(false);
    setHideBtn(false);
    setShowBtn(true);
}

    return(
        
        <div className="flex lg:hidden shadow-2xl bg-black z-[60] py-[5px] px-[20px] fixed top-0 left-0 right-0 w-full flex-row justify-between items-center">
  <div  >
   <a href=""><img className=" w-[100px] relative z-[20] " src={img} alt="logo" /></a>
        </div>

        {showNav &&
        <div className="fixed flex flex-col  gap-5 transition ease-out duration-500 left-0 px-[30px] w-[60%] bottom-0 top-0 pt-[100px] bg-slate-900 h-[100vh]">
         <ul className={`flex uppercase  flex-col justify-center gap-x-[25px]`}>
       
            <li onClick={hidenavF} className="bg-slate-900  text-slate-50 px-[5px] py-[5px] text-[15px] rounded capitaliz font-[700] "><Link to='/'>Home</Link></li>
            <li onClick={hidenavF} className="bg-slate-900  text-slate-50 px-[5px] py-[5px] text-[15px] rounded capitaliz font-[700] "><Link to='/Book'>Learning Material</Link></li>
            <li onClick={hidenavF} className="bg-slate-900  text-slate-50 px-[5px] py-[5px] text-[15px] rounded capitaliz font-[700] "><Link to='/cgpa'>Calculate cgpa</Link></li>
            <li onClick={hidenavF} className="bg-slate-900  text-slate-50 px-[5px] py-[5px] text-[15px] rounded capitaliz font-[700] "><Link to='/news'>News</Link></li>
            <li onClick={hidenavF} className="bg-slate-900  text-slate-50 px-[5px] py-[5px] text-[15px] rounded capitaliz font-[700] "><Link to='/courses'>courses outline</Link></li>
           {/* <li onClick={hidenavF} className="bg-slate-900  text-slate-50 px-[5px] py-[5px] text-[15px] rounded capitaliz font-[700] "><Link to='/Admission'>Student Leaders</Link></li>}
          {/*  <li onClick={hidenavF} className="bg-slate-900  text-slate-50 px-[5px] py-[5px] text-[15px] rounded capitaliz font-[700] "><Link to='/Admission'>Excos</Link></li> */}
        

         </ul>

       {!signedIn && <div className="flex relative z-2 flex-col gap-2">
            <button className="border-yellow-500 w-fit border text-white px-[20px] text-center py-[4px] text-[20px] rounded capitaliz font-semibold ">
            <Link onClick={hidenavF} to='/login'>Login</Link>
            </button>
            <button className="bg-yellow-500 px-[20px] text-center py-[4px] text-[17px] rounded w-fit capitaliz font-semibold ">
            <Link onClick={hidenavF} to='/signup'>Signup</Link>
            </button>
                    </div>}
                  { signedIn && <button className=" w-fit p-[10px] border shadow-2xl text-center  text-[17px] rounded capitaliz font-semibold ">
            <Link onClick={hidenavF} className="flex gap-2 text-slate-100 flex-row items-center" to='/profile'>My Profile<FaUserCircle className="text-[20px]"/></Link>
        
            </button>}
          </div>
}
          <div className="flex gap-2 ">
           { hideBtn && <HiXMark onClick={hidenavF} className="text-white text-[40px] "/>}
           { showBtn && <AiOutlineMenu onClick={shownavF} className="text-white text-[40px]"/>}
          </div>
        </div>

    )
}