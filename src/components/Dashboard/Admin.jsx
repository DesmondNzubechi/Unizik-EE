import React, { useEffect } from "react";
import {FaUsers} from 'react-icons/fa';
import { Link } from "react-router-dom";
import {FcAbout} from 'react-icons/fc';
import {AiFillMessage, AiFillDashboard} from 'react-icons/ai';
import {FaSearch} from 'react-icons/fa';
import {HiXMark} from 'react-icons/hi2';
import {MdBedroomParent} from 'react-icons/md';
import {BsFillHouseAddFill} from 'react-icons/bs';
import {CgProfile} from 'react-icons/cg';
import {GrNext, GrPrevious} from 'react-icons/gr';
import { useState } from "react";
import {FaUserCircle, FaWarehouse} from 'react-icons/fa';
import {AiOutlineLogout, AiOutlineMenu} from 'react-icons/ai';
import logo from '../../assets/images/eesalogor.png'
import bgImg from '../../assets/images/admin.avif';
import { NewsUpload } from "../NewsUpload/NewsUpload"; 
import { Users } from "../Users/Users";
import {BsNewspaper} from 'react-icons/bs';
import {MdPictureAsPdf} from 'react-icons/md';
import { DashboardView } from "../Dasshboard view/Dashboardview";
import { PdfUpload } from "../PdfUpload/PdfUpload";
import { UserProfile } from "../User profile/UserProfile";
import { BsFillCalendarEventFill } from 'react-icons/bs';
import { TiNews } from 'react-icons/ti';
import { fullNewsContext } from "../context/Context";
import { AllNews } from "../Admin/AllNews/Allnews";
import { useContext } from "react";
import { EditNews } from "../Admin/EditNews/EditNews";
import { useNavigate } from "react-router-dom";
export const Admindashboard = () => {
    const { displaying, setDisplaying, setLogOut, mainUser } = useContext(fullNewsContext);
const [logoutB, setLogoutB] = useState(false);
    const [sideLinks, setSideLinks] = useState({
        nextIc: true,
        prevIc: false
    });
    const [sideLinkState, setSideLinkState] = useState('hidden');
    // useEffect(() => {
    //     localStorage.setItem('displaying', JSON.stringify(displaying))
    // }, [displaying])
    const navig = useNavigate();
    return (
        mainUser[0]?.stats !== 'admin' ? navig('/login'):
        <div className=" z-[100] bg-white  min-h-[100vh] fixed overflow-y-auto w-full left-0 right-0 top-0 pb-[100px] pt-[70px] bottom-0 "
        >
          <div className="flex flex-row items-center justify-center">
          <div className="fixed flex justify-between top-0 w-full right-0 left-0 py-2 px-5 shadow bg-slate-50 z-[50]">
                    <div className="flex gap-2 items-center" >
                    <div >
            {sideLinks.prevIc && <HiXMark  onClick={() => {
                setSideLinkState('hidden');
                setSideLinks({
                    nextIc: true,
                    prevIc: false
                })
            }} className={`bg-slate-50  p-1 rounded-[2px] text-[20px] md:text-[30px]`}/>}

             {sideLinks.nextIc && <AiOutlineMenu onClick={() => {
                setSideLinkState('flex');
                setSideLinks({nextIc:false, prevIc:true,  })
            }} className={`bg-slate-50  p-1 rounded-[2px] text-[20px] md:text-[30px]`}/>}
            </div>
          {  /*<img className="max-w-[50px]" src={logo} alt="" />*/}
           { <h1 className="text-slate-900 md:flex  uppercase text-[12px] md:text-[20px] font-bold"><span className="text-yellow-500">ee</span>UNIZIK</h1>}
                    </div>
                        <h1 className="self-center text-[15px] uppercase font-semibold ">Dashboard</h1>
                  
           <div className="flex flex-row gap-1">
            <button onClick={() => setDisplaying(<UserProfile/>)} className="flex items-center text-slate-50 gap-2 md:text-[20px] bg-green-500 text-[15px]  p-2 h-fit rounded ">Profile <FaUserCircle/></button>
           {/* <button className="flex items-center text-slate-50 gap-2 md:text-[20px] bg-yellow-500 text-[15px]  p-2 h-fit rounded ">Logout <AiOutlineLogout/></button>*/}
           </div>
          </div>
             <div className="bg-slate-50 shadow z-[10] bottom-0 p-1 md:p-5 fixed  top-0 left-0 h-[100%]">
             <div>
                <ul className="flex flex-col px-[5px] pt-[100px] gap-[40px]">
                            <li ><Link onClick={() => setDisplaying({
                          pdfView: false,
                          viewDashboard: true,
                          viewProfile: false,
                          pdfPost: false,
                          newsPost: false,
                                userView: false,
                                viewAllNews: false,
                                viewEditNews:false,
                    })}  className="flex-row   flex items-center gap-x-2  "> <AiFillDashboard className="text-slate-700 text-[17px] md:text-[30px] " />  <span className={`text-[15px] md:text-[20px]  ${sideLinkState}  text-slate-900   `}>Dashboard</span> </Link></li>
                    <li><Link onClick={() => setDisplaying({
                          pdfView: false,
                          viewDashboard: false,
                          viewProfile: false,
                          pdfPost: false,
                          newsPost: true,
                        userView: false,
                        viewAllNews: false,
                        viewEditNews:false,
                    })} className="flex-row flex items-center gap-x-2  "><BsNewspaper className="text-slate-700 text-[17px] md:text-[30px] "/><span className={`text-[15px] md:text-[20px]  ${sideLinkState} text-slate-900   `}>Upload News</span> </Link></li>
                    <li><Link onClick={() => setDisplaying({
                          pdfView: false,
                          viewDashboard: false,
                          viewProfile: false,
                          pdfPost: true,
                          newsPost: false,
                        userView: false,
                        viewAllNews: false,
                        viewEditNews:false,
                    })}  className="flex-row flex items-center gap-x-2  "><MdPictureAsPdf className="text-slate-700 text-[17px] md:text-[30px] "/><span className={`text-[15px] md:text-[20px]  ${sideLinkState} text-slate-900   `}>Upload Pdf</span>  </Link></li>
                    <li><Link onClick={() => setDisplaying({
                          pdfView: false,
                          viewDashboard: false,
                          viewProfile: false,
                          pdfPost: false,
                          newsPost: false,
                        userView: true,
                        viewAllNews: false,
                        viewEditNews:false,
                    })} className="flex-row flex items-center gap-x-2  "><FaUsers className="text-slate-700 text-[17px] md:text-[30px] " /><span className={`text-[15px] md:text-[20px]  ${sideLinkState} text-slate-900   `}>Users</span> </Link></li>
                             <li><Link onClick={() => setDisplaying({
                          pdfView: false,
                          viewDashboard: false,
                          viewProfile: false,
                          pdfPost: false,
                          newsPost: false,
                                 userView: false,
                                 viewAllNews: true,
                                 viewEditNews:false,
                    })} className="flex-row flex items-center gap-x-2  "><TiNews className="text-slate-700 text-[17px] md:text-[30px] "/><span className={`text-[15px] md:text-[20px]  ${sideLinkState} text-slate-900   `}>Profile</span> </Link></li>
                    <li><Link onClick={() => setDisplaying({
                          pdfView: false,
                          viewDashboard: false,
                          viewProfile: true,
                          pdfPost: false,
                          newsPost: false,
                        userView: false,
                        viewAllNews: false,
                        viewEditNews:false,
                    })} className="flex-row flex items-center gap-x-2  "><FaUserCircle className="text-slate-700 text-[17px] md:text-[30px] "/><span className={`text-[15px] md:text-[20px]  ${sideLinkState} text-slate-900   `}>Profile</span> </Link></li>
                    <li><Link onClick={() => setLogOut(true)}  className="flex-row flex items-center gap-x-2  "><AiOutlineLogout className="text-slate-700 text-[17px] md:text-[30px] "/><span className={`text-[15px] md:text-[20px]  ${sideLinkState} text-slate-900   `}>Logout</span> </Link></li>
               
                        </ul>
            </div>
            </div>
            
            <div className="py-[10px] relative flex justify-center  ml-[30px] ">
              <div>
                    
                        {displaying.viewDashboard && <DashboardView />}
                        {displaying.newsPost && <NewsUpload />}
                        {displaying.pdfPost && <PdfUpload />}
                        {displaying.userView && <Users />}
                        {displaying.viewProfile && <UserProfile />}
                        {displaying.viewAllNews && <AllNews />}
                        {displaying.viewEditNews && <EditNews/>}
                            
             
              </div>
            </div>
            </div>
        </div>
    )
}