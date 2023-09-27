import React, { useState } from "react";
import logo from "../../assets/images/logo.jpg";
import {AiOutlineMenu} from 'react-icons/ai';
import {HiXMark} from 'react-icons/hi2';
import { Link } from "react-router-dom";
import { FaUserCircle } from 'react-icons/fa';
import { fullNewsContext } from "../context/Context";
import { useContext } from "react";
import {IoIosArrowDropdownCircle, IoIosArrowDropupCircle} from 'react-icons/io';

export const Navmobile = () => {
    const { signedIn, mainUser } = useContext(fullNewsContext);

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

const [studentDisplay, setstudentDisplay] = useState(false);
const [acedemicsDisplay, setAcedemicDisplay] = useState(false);
  const [aboutDisplay, setAboutDisplay] = useState(false);
  const [alumniDisplay, setAlumniDisplay] = useState(false);

  const showAlumni = () => {
    setAcedemicDisplay(false);
    setAboutDisplay(false);
    setstudentDisplay(false)
      if (!alumniDisplay) {
       setAlumniDisplay(true)
      } else {
       setAlumniDisplay(false);
      }
  }
const showstudents = () => {
  setAcedemicDisplay(false);
  setAboutDisplay(false);
  setAlumniDisplay(false);
    if (!studentDisplay) {
      setstudentDisplay(true)
    } else {
      setstudentDisplay(false);
    }
}

const acedF = () => {
  setAboutDisplay(false);
  setstudentDisplay(false);
  setAlumniDisplay(false);
  if (!acedemicsDisplay) {
    setAcedemicDisplay(true)
  } else {
    setAcedemicDisplay(false);
  }
}

const abooutUs = () => {
  setAcedemicDisplay(false);
  setstudentDisplay(false);
  setAlumniDisplay(false);
  if (!aboutDisplay) {
    setAboutDisplay(true)
  } else {
    setAboutDisplay(false);
  }
}
    return(
        
        <div className="flex lg:hidden shadow-2xl bg-black z-[60] py-[5px] px-[20px] fixed top-0 left-0 right-0 w-full flex-row justify-between items-center">
  <div  >
  <a href="" className="flex items-center relative z-[20] flex- gap-1">
            <img className=" w-[60px] rounded-full  " src={logo} alt="logo" />
            <h1 className="uppercase text-[25px] text-slate-50 "><span className="font-myfont">ee</span><span className="font-[900] text-yellow-500">-</span><span className="font-myfont">unizik</span></h1>
          </a>
          </div>

        {showNav &&
        <div className="fixed flex flex-col  gap-5 transition ease-out duration-500 left-0 px-[30px] w-[60%] bottom-0 top-0 pt-[100px] bg-slate-900 h-[100vh]">
         <ul className={`flex capitalize  flex-col justify-center gap-y-[10px] gap-x-[25px]`}>
       
           { /*<li onClick={() => hidenavF()} className="bg-slate-900  text-slate-50 px-[5px] py-[5px] text-[15px] rounded capitaliz font-[700] "><Link to='/'>Home</Link></li>*/}
                        <li onClick={() => hidenavF()} className="bg-slate-900  text-slate-50 px-[5px] py-[5px] text-[15px] rounded capitaliz font-[700] "><Link to='/news'>Blog</Link></li>
                        <li onClick={() => hidenavF()} className="bg-slate-900  text-slate-50 px-[5px] py-[5px] text-[15px] rounded capitaliz font-[700] "><Link to='/events'>Events</Link></li>
        <li className="bg-slate-900  text-slate-50 px-[5px] py-[5px] text-[15px] rounded capitaliz font-[700] ">
                            <Link onClick={acedF}  className=" text-[17px] relative hover:text-textBlack font-[700] text-slate-50 flex  items-center " >
                          Academics { !acedemicsDisplay? <IoIosArrowDropdownCircle/> : <IoIosArrowDropupCircle/>}
                            </Link>
                           {acedemicsDisplay && <ul className="absolute z-[1000] capitalize rounded shadow-2xl z-1  font-poppins    p-2 text-slate-900 bg-slate-50 flex flex-col gap-2">
                              <li><Link onClick={() => hidenavF()} to='/Learning-resources' className="text-[15px] text-slate-900 hover:text-slate-700 ">Learning Resources</Link></li>
                            
                              <li><Link onClick={() => hidenavF()} to='/Course-outlines'  className="text-[15px] text-slate-900 hover:text-slate-700  ">Course outlines</Link></li>
                            
                              <li><Link onClick={() => hidenavF()} to='/calculate-cgpa'  className="text-[15px] text-slate-900 hover:text-slate-700  ">CGPA calculator</Link></li>
                            </ul>}
          </li>
          <li className="bg-slate-900  text-slate-50 px-[5px] py-[5px] text-[15px] rounded capitaliz font-[700] ">
                            <Link onClick={showstudents}  className=" text-[17px] hover:text-textBlack font-[700] relative text-slate-50 flex  items-center " >
                          Students { !studentDisplay? <IoIosArrowDropdownCircle/> : <IoIosArrowDropupCircle/>}
                            </Link>
                           {studentDisplay && <ul className="absolute z-[1000] capitalize rounded shadow-2xl   font-poppins    p-2 text-textWhite bg-slate-50 flex flex-col gap-2">
                              <li><Link onClick={() => hidenavF()} to='/Students/Departmental-Executives' className="text-[15px] text-slate-900 hover:text-slate-700 ">Student Executives</Link></li>
                            
                              <li><Link onClick={() => hidenavF()} to='/Students/Class-Representative'  className="text-[15px] text-slate-900 hover:text-slate-700  ">Class Representatives</Link></li>
                            
                              <li><Link onClick={() => hidenavF()}  to='/Students/Project-Team' className="text-[15px] text-slate-900 hover:text-slate-700  ">Our project Team</Link></li>
                            </ul>}
          </li>
          <li className="bg-slate-900  text-slate-50 px-[5px] py-[5px] text-[15px] rounded capitaliz font-[700] ">
                            <Link onClick={abooutUs}  className=" text-[17px] hover:text-textBlack font-[700] relative text-slate-50 flex  items-center " >
                          About { !aboutDisplay? <IoIosArrowDropdownCircle/> : <IoIosArrowDropupCircle/>}
                            </Link>
                           {aboutDisplay && <ul className="absolute z-[1000] capitalize rounded shadow-2xl  font-poppins   p-2 text-textWhite bg-slate-50 flex flex-col gap-2">
                              <li><Link onClick={() => hidenavF()} to='/about' className="text-[15px] text-slate-900 hover:text-slate-700 ">About Us</Link></li>
                            
                              <li><Link onClick={() => hidenavF()} to='/mission'  className="text-[15px] text-slate-900 hover:text-slate-700  ">Our Mission</Link></li>
                            
                              <li><Link onClick={() => hidenavF()} to='/admission requirement'  className="text-[15px] text-slate-900 hover:text-slate-700  ">Admission</Link></li>
                            </ul>}
              </li>
              <li className="bg-slate-900  text-slate-50 px-[5px] py-[5px] text-[15px] rounded capitaliz font-[700] ">
                            <Link onClick={showAlumni}  className=" text-[17px] hover:text-textBlack font-[700] relative text-slate-50 flex  items-center " >
                          Alumni { !aboutDisplay? <IoIosArrowDropdownCircle/> : <IoIosArrowDropupCircle/>}
                            </Link>
                           {alumniDisplay && <ul className="absolute z-[1000] capitalize rounded shadow-2xl  font-poppins   p-2 text-textWhite bg-slate-50 flex flex-col gap-2">
                              <li><Link onClick={() => hidenavF()} to='/Alumni/Ex-students-leaders' className="text-[15px] text-slate-900 hover:text-slate-700 ">Ex-student leaders</Link></li>
                            
                              <li><Link onClick={() => hidenavF()}   className="text-[15px] text-slate-900 hover:text-slate-700  ">First class graduates</Link></li>
                            
                              <li><Link onClick={() => hidenavF()}  className="text-[15px] text-slate-900 hover:text-slate-700  ">Best Graduating Students</Link></li>
                            </ul>}
                        </li>
           {/* to='/Alumni/first-class-graduates' to='/Alumni/Best-graduating-students' <li className=" hover:bg-slate-50 hover:text-slate-900  text-slate-50 px-[5px] py-[5px] text-[17px] rounded capitaliz font-[700] "><Link to='/Book'>Learning Material</Link></li>
            <li className=" hover:bg-slate-50 hover:text-slate-900  text-slate-50 px-[5px] py-[5px] text-[17px] rounded capitaliz font-[700] "><Link to='/cgpa'>Calculate cgpa</Link></li>
            <li className=" hover:bg-slate-50 hover:text-slate-900  text-slate-50 px-[5px] py-[5px] text-[17px] rounded capitaliz font-[700] "><Link to='/courses'>course Outlines</Link></li>*/}
          {/*  <li className="bg-slate-900  text-slate-50 px-[5px] py-[5px] text-[17px] rounded capitaliz font-[700] "><Link to='/Admission'>Student Leaders</Link></li>*/}
        
        </ul>

       {!signedIn && <div className="flex relative z-2 flex-col gap-2">
            <button className="border-yellow-500 hover:bg-slate-700 hover:border-slate-50 w-fit border text-white px-[20px] text-center py-[4px] text-[20px] rounded capitaliz font-semibold ">
            <Link onClick={() => hidenavF()} to='/login'>Login</Link>
            </button>
            <button className="bg-yellow-500 hover:bg-yellow-300 px-[20px] text-center py-[4px] text-[17px] rounded w-fit capitaliz font-semibold ">
            <Link onClick={() => hidenavF()} to='/signup'>Signup</Link>
            </button>
            </div>}
            
                    {signedIn && mainUser[0]?.stats == 'user' &&
        <button className=" p-[10px] border w-fit shadow-2xl text-center  text-[17px] rounded capitaliz font-semibold ">
            <Link  className="flex gap-2 text-slate-100 flex-row items-center" to='/profile'>My Profile<FaUserCircle className="text-[20px]"/></Link>
        
          </button>}
          {signedIn && mainUser[0]?.stats !== 'user' &&
        <button className=" p-[10px] border shadow-2xl text-center  text-[17px] rounded capitaliz w-fit font-semibold ">
            <Link  className="flex gap-2 text-slate-100 flex-row items-center" to='/dashboard'>Dashboard<FaUserCircle className="text-[20px]"/></Link>
        
            </button>}
          </div>
}
          <div className="flex gap-2 ">
           { hideBtn && <HiXMark onClick={() => hidenavF()} className="text-white text-[25px] "/>}
           { showBtn && <AiOutlineMenu onClick={shownavF} className="text-white text-[25px]"/>}
          </div>
        </div>

    )
}