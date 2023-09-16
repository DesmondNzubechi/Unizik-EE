import React from "react";
import { useState } from "react";
import img from '../../assets/images/eesalogor.png';
import { Link } from "react-router-dom";
import { fullNewsContext } from "../context/Context";
import { useContext } from "react";
import { FaUserCircle } from 'react-icons/fa';
import {IoIosArrowDropdownCircle, IoIosArrowDropupCircle} from 'react-icons/io';
export const Navdesktop = () => {
  const { signedIn, mainUser } = useContext(fullNewsContext);
  
  const [studentDisplay, setstudentDisplay] = useState(false);
  const [acedemicsDisplay, setAcedemicDisplay] = useState(false);
  const [aboutDisplay, setAboutDisplay] = useState(false);
  const showstudents = () => {
    setAcedemicDisplay(false);
    setAboutDisplay(false);
      if (!studentDisplay) {
        setstudentDisplay(true)
      } else {
        setstudentDisplay(false);
      }
  }

  const acedF = () => {
    setAboutDisplay(false);
    setstudentDisplay(false);
    if (!acedemicsDisplay) {
      setAcedemicDisplay(true)
    } else {
      setAcedemicDisplay(false);
    }
  }
  
  const abooutUs = () => {
    setAcedemicDisplay(false);
    setstudentDisplay(false);
    if (!aboutDisplay) {
      setAboutDisplay(true)
    } else {
      setAboutDisplay(false);
    }
}
    return (
        <div className="lg:flex hidden  shadow-2xl bg-black z-[60] py-[5px] px-[20px] fixed top-0 left-0 right-0 w-full flex-row justify-around items-center">
  <div >
   <a href=""><img className=" w-[120px] " src={img} alt="logo" /></a>
        </div>

        <ul className="flex uppercase items-center flex-row justify-center gap-x-[25px]">
            <li className=" hover:bg-slate-50 hover:text-slate-900  text-slate-50 px-[5px] py-[5px] text-[17px] rounded capitaliz font-[700] "><Link to='/'>Home</Link></li>
          <li className=" hover:bg-slate-50 hover:text-slate-900  text-slate-50 px-[5px] py-[5px] text-[17px] rounded capitaliz font-[700] "><Link to='/news'>News</Link></li>
          <li className=" hover:bg-slate-50 hover:text-slate-900  text-slate-50 px-[5px] py-[5px] text-[17px] rounded capitaliz font-[700] "><Link to='/events'>Events</Link></li>
          <li  className="  text-slate-50 px-[5px] py-[5px] text-[15px] rounded capitaliz font-[700] "><Link to='/events'>Events</Link></li>
        <li className="  text-slate-50 px-[5px] py-[5px] text-[15px] rounded capitaliz font-[700] ">
                            <Link onClick={acedF}  className=" text-[17px] relative hover:text-textBlack font-[700] text-slate-50 flex  items-center " >
                          Acedemics { !acedemicsDisplay? <IoIosArrowDropdownCircle/> : <IoIosArrowDropupCircle/>}
                            </Link>
                           {acedemicsDisplay && <ul className="absolute z-[1000] capitalize rounded shadow-2xl z-1  font-poppins    p-2 text-slate-900 bg-slate-50 flex flex-col gap-2">
                              <li><Link onClick={acedF} to='/Learning-resources' className="text-[15px] text-slate-900 hover:text-slate-700 ">Learning Resources</Link></li>
                            
                              <li><Link onClick={acedF} to='/Course-outlines'  className="text-[15px] text-slate-900 hover:text-slate-700  ">Course outlines</Link></li>
                            
                              <li><Link onClick={acedF} to='/calculate-cgpa'  className="text-[15px] text-slate-900 hover:text-slate-700  ">CGPA calculator</Link></li>
                            </ul>}
          </li>
          <li className="  text-slate-50 px-[5px] py-[5px] text-[15px] rounded capitaliz font-[700] ">
                            <Link onClick={showstudents}  className=" text-[17px] hover:text-textBlack font-[700] relative text-slate-50 flex  items-center " >
                          Students { !studentDisplay? <IoIosArrowDropdownCircle/> : <IoIosArrowDropupCircle/>}
                            </Link>
                           {studentDisplay && <ul className="absolute z-[1000] capitalize rounded shadow-2xl   font-poppins    p-2 text-textWhite bg-slate-50 flex flex-col gap-2">
                              <li><Link onClick={showstudents} to='/Students/Departmental-Executives' className="text-[15px] text-slate-900 hover:text-slate-700 ">Student Executives</Link></li>
                            
                              <li><Link onClick={showstudents} to='/Students/Class-Representative'  className="text-[15px] text-slate-900 hover:text-slate-700  ">Class Representatives</Link></li>
                            
                              <li><Link onClick={showstudents}   className="text-[15px] text-slate-900 hover:text-slate-700  ">Best Graduating Students</Link></li>
                            </ul>}
          </li>
          <li className="  text-slate-50 px-[5px] py-[5px] text-[15px] rounded capitaliz font-[700] ">
                            <Link onClick={abooutUs}  className=" text-[17px] hover:text-textBlack font-[700] relative text-slate-50 flex  items-center " >
                          About { !aboutDisplay? <IoIosArrowDropdownCircle/> : <IoIosArrowDropupCircle/>}
                            </Link>
                           {aboutDisplay && <ul className="absolute z-[1000] capitalize rounded shadow-2xl  font-poppins   p-2 text-textWhite bg-slate-50 flex flex-col gap-2">
                              <li><Link onClick={abooutUs} to='/about' className="text-[15px] text-slate-900 hover:text-slate-700 ">About Us</Link></li>
                            
                              <li><Link onClick={abooutUs} to='/mission'  className="text-[15px] text-slate-900 hover:text-slate-700  ">Our Mission</Link></li>
                            
                              <li><Link onClick={abooutUs} to='/admission requirement'  className="text-[15px] text-slate-900 hover:text-slate-700  ">Admission</Link></li>
                            </ul>}
                        </li>
           {/* <li className=" hover:bg-slate-50 hover:text-slate-900  text-slate-50 px-[5px] py-[5px] text-[17px] rounded capitaliz font-[700] "><Link to='/Book'>Learning Material</Link></li>
            <li className=" hover:bg-slate-50 hover:text-slate-900  text-slate-50 px-[5px] py-[5px] text-[17px] rounded capitaliz font-[700] "><Link to='/cgpa'>Calculate cgpa</Link></li>
            <li className=" hover:bg-slate-50 hover:text-slate-900  text-slate-50 px-[5px] py-[5px] text-[17px] rounded capitaliz font-[700] "><Link to='/courses'>course Outlines</Link></li>*/}
          {/*  <li className="bg-slate-900  text-slate-50 px-[5px] py-[5px] text-[17px] rounded capitaliz font-[700] "><Link to='/Admission'>Student Leaders</Link></li>*/}
        
        </ul>

       {!signedIn && <div className="flex flex-row gap-2">
            <button className="border-yellow-500 border text-white px-[10px] text-center py-[4px] text-[17px] rounded capitaliz font-semibold ">
            <Link to='/login'>Login</Link>
            
            </button>
            <button className="bg-yellow-500 px-[10px] text-center py-[4px] text-[17px] rounded capitaliz font-semibold ">
            <Link to='/signup'>Signup</Link>
        
            </button>
        </div>}
       {signedIn && mainUser[0]?.stats == 'user' &&
        <button className=" p-[10px] border shadow-2xl text-center  text-[17px] rounded capitaliz font-semibold ">
            <Link  className="flex gap-2 text-slate-100 flex-row items-center" to='/profile'>My Profile<FaUserCircle className="text-[20px]"/></Link>
        
          </button>}
          {signedIn && mainUser[0]?.stats !== 'user' &&
        <button className=" p-[10px] border shadow-2xl text-center  text-[17px] rounded capitaliz font-semibold ">
            <Link  className="flex gap-2 text-slate-100 flex-row items-center" to='/dashboard'>Dashboard<FaUserCircle className="text-[20px]"/></Link>
        
            </button>}
       
        </div>
    )
} 