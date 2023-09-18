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
import { FaBook } from 'react-icons/fa';
import {GiWhiteBook} from 'react-icons/gi'
import { AllPdf } from "../Admin/AllPdf/AllPdf";
import { AiFillHome } from 'react-icons/ai';
export const Admindashboard = () => {
    const { displaying, setDisplaying, setLogOut, mainUser } = useContext(fullNewsContext);
const [logoutB, setLogoutB] = useState(false);
    const [sideLinks, setSideLinks] = useState({
        nextIc: true,
        prevIc: false,
        textSize: 'text-[8px]',
        flexType: 'flex-col'
    });
  const [showBar, setShowBar] = useState('hidden');
    const [sideLinkState, setSideLinkState] = useState('hidden');
    // useEffect(() => {
    //     localStorage.setItem('displaying', JSON.stringify(displaying))
  // }, [displaying])
  const navigate = useNavigate();
  if (mainUser[0]?.stats !== 'admin') {
    return <UserProfile />
  } else if(mainUser[0]?.stats == 'admin') {
    return (
      // mainUser[0]?.stats !== 'admin' ? navig('/login'):
      <div className=" z-[100] bg-white  min-h-[100vh] fixed overflow-y-auto w-full left-0 right-0 top-0 pb-[100px] pt-[70px] bottom-0 "
      >
        <div className="flex flex-row items-center justify-center">
          <div className="fixed flex justify-between top-0 w-full right-0 left-0 py-2 px-5 shadow bg-slate-50 z-[50]">
            <div className="flex gap-2 items-center" >
              <div >
                {sideLinks.prevIc && <HiXMark onClick={() => {
                  setSideLinkState('hidden');
                  setSideLinks({
                    nextIc: true,
                    prevIc: false,
                    textSize: 'text-[8px]',
                    flexType: 'flex-col'
                  });
                  setShowBar('hidden');
                }} className={`bg-slate-50  p-1 rounded-[2px] text-[20px] md:text-[20px]`} />}

                {sideLinks.nextIc && <AiOutlineMenu onClick={() => {
                  setSideLinkState('flex');
                  setSideLinks({
                    nextIc: false,
                    prevIc: true,
                    textSize: 'text-[13px]',
                    flexType: 'flex-row'
                  })
                  setShowBar('flex')
                }} className={`bg-slate-50  p-1 rounded-[2px] text-[20px] md:text-[20px]`} />}
              </div>
              {  /*<img className="max-w-[50px]" src={logo} alt="" />*/}
              {<h1 className="text-slate-900 md:flex  uppercase text-[12px] md:text-[20px] font-bold"><span className="text-yellow-500">ee</span>UNIZIK</h1>}
            </div>
            <h1 className="self-center text-[15px] uppercase font-semibold ">Dashboard</h1>
                  
            <div className="flex flex-row gap-1">
              <button onClick={() => setDisplaying({
                pdfView: false,
                viewDashboard: false,
                viewProfile: true,
                pdfPost: false,
                newsPost: false,
                userView: false,
                viewAllNews: false,
                viewEditNews: false,
                pdfViewColor: 'text-slate-700',
                viewDashboardColor: 'text-slate-700',
                viewProfileColor: 'text-green-500',
                pdfPostColor: 'text-slate-700',
                newsPostColor: 'text-slate-500',
                userViewColor: 'text-slate-700',
                viewAllNewsColor: 'text-slate-700',
                viewEditNewsColor: 'text-slate-700',
              })} className="flex items-center text-slate-50 gap-2 md:text-[20px] bg-green-500 text-[15px]  p-2 h-fit rounded ">Profile <FaUserCircle /></button>
              {/* <button className="flex items-center text-slate-50 gap-2 md:text-[20px] bg-yellow-500 text-[15px]  p-2 h-fit rounded ">Logout <AiOutlineLogout/></button>*/}
            </div>
          </div>
          <div className={`bg-slate-50 lg:flex ${showBar} shadow z-[10] bottom-0 p-1 md:p-5 fixed  top-0 left-0 h-[100%]`}>
            <div>
              <ul className="flex flex-col px-[5px] pt-[70px] gap-[25px]">
                <li ><Link to='/' onClick={() => setDisplaying({
                  pdfView: false,
                  viewDashboard: true,
                  viewProfile: false,
                  pdfPost: false,
                  newsPost: false,
                  userView: false,
                  viewAllNews: false,
                  viewEditNews: false,
                  pdfViewColor: 'text-slate-700',
                  viewDashboardColor: 'text-green-500',
                  viewProfileColor: 'text-slate-700',
                  pdfPostColor: 'text-slate-700',
                  newsPostColor: 'text-slate-700',
                  userViewColor: 'text-slate-700',
                  viewAllNewsColor: 'text-slate-700',
                  viewEditNewsColor: 'text-slate-700',
                })} className={`${sideLinks.flexType}   flex items-center gap-x-2  `}> <AiFillHome className={`text-slate-700 text-[17px] md:text-[20px] `} />  <span className={`${sideLinks.textSize}  text-slate-900   `}>Home</span> </Link></li>
                <li ><Link onClick={() => setDisplaying({
                  pdfView: false,
                  viewDashboard: true,
                  viewProfile: false,
                  pdfPost: false,
                  newsPost: false,
                  userView: false,
                  viewAllNews: false,
                  viewEditNews: false,
                  pdfViewColor: 'text-slate-700',
                  viewDashboardColor: 'text-green-500',
                  viewProfileColor: 'text-slate-700',
                  pdfPostColor: 'text-slate-700',
                  newsPostColor: 'text-slate-700',
                  userViewColor: 'text-slate-700',
                  viewAllNewsColor: 'text-slate-700',
                  viewEditNewsColor: 'text-slate-700',
                })} className={`${sideLinks.flexType}   flex items-center gap-x-2  `}> <AiFillDashboard className={`${displaying.viewDashboardColor} text-[17px] md:text-[20px] `} />  <span className={`${sideLinks.textSize}  text-slate-900   `}>Dashboard</span> </Link></li>
                <li><Link onClick={() => setDisplaying({
                  pdfView: false,
                  viewDashboard: false,
                  viewProfile: false,
                  pdfPost: false,
                  newsPost: true,
                  userView: false,
                  viewAllNews: false,
                  viewEditNews: false,
                  pdfViewColor: 'text-slate-700',
                  viewDashboardColor: 'text-slate-700',
                  viewProfileColor: 'text-slate-700',
                  pdfPostColor: 'text-slate-700',
                  newsPostColor: 'text-green-500',
                  userViewColor: 'text-slate-700',
                  viewAllNewsColor: 'text-slate-700',
                  viewEditNewsColor: 'text-slate-700',
                        
                })} className={`${sideLinks.flexType}   flex items-center gap-x-2  `}><BsNewspaper className={`${displaying.newsPostColor} text-[17px] md:text-[20px] `} /><span className={`${sideLinks.textSize} text-slate-900   `}>Upload News</span> </Link></li>
                <li><Link onClick={() => setDisplaying({
                  pdfView: false,
                  viewDashboard: false,
                  viewProfile: false,
                  pdfPost: true,
                  newsPost: false,
                  userView: false,
                  viewAllNews: false,
                  viewEditNews: false,
                  pdfViewColor: 'text-slate-700',
                  viewDashboardColor: 'text-slate-700',
                  viewProfileColor: 'text-slate-700',
                  pdfPostColor: 'text-green-500',
                  newsPostColor: 'text-slate-700',
                  userViewColor: 'text-slate-700',
                  viewAllNewsColor: 'text-slate-700',
                  viewEditNewsColor: 'text-slate-700',
                })} className={`${sideLinks.flexType}   flex items-center gap-x-2  `}><GiWhiteBook className={`${displaying.pdfPostColor} text-[17px] md:text-[20px] `} /><span className={`${sideLinks.textSize} text-slate-900   `}>Upload Pdf</span>  </Link></li>
                <li><Link onClick={() => setDisplaying({
                  pdfView: false,
                  viewDashboard: false,
                  viewProfile: false,
                  pdfPost: false,
                  newsPost: false,
                  userView: true,
                  viewAllNews: false,
                  viewEditNews: false,
                  pdfViewColor: 'text-slate-700',
                  viewDashboardColor: 'text-slate-700',
                  viewProfileColor: 'text-slate-700',
                  pdfPostColor: 'text-slate-700',
                  newsPostColor: 'text-slate-700',
                  userViewColor: 'text-green-500',
                  viewAllNewsColor: 'text-slate-700',
                  viewEditNewsColor: 'text-slate-700',
                })} className={`${sideLinks.flexType}   flex items-center gap-x-2  `}><FaUsers className={`${displaying.userViewColor} text-[17px] md:text-[20px] `} /><span className={`${sideLinks.textSize} text-slate-900   `}>Users</span> </Link></li>
                <li><Link onClick={() => setDisplaying({
                  pdfView: false,
                  viewDashboard: false,
                  viewProfile: false,
                  pdfPost: false,
                  newsPost: false,
                  userView: false,
                  viewAllNews: true,
                  viewEditNews: false,
                  pdfViewColor: 'text-slate-700',
                  viewDashboardColor: 'text-slate-700',
                  viewProfileColor: 'text-slate-700',
                  pdfPostColor: 'text-slate-700',
                  newsPostColor: 'text-slate-700',
                  userViewColor: 'text-slate-700',
                  viewAllNewsColor: 'text-green-500',
                  viewEditNewsColor: 'text-green-500',
                })} className={`${sideLinks.flexType}   flex items-center gap-x-2  `}><TiNews className={`${displaying.viewAllNewsColor} text-[17px] md:text-[20px] `} /><span className={`${sideLinks.textSize} text-slate-900   `}>All News</span> </Link></li>
                <li><Link onClick={() => setDisplaying({
                  pdfView: true,
                  viewDashboard: false,
                  viewProfile: false,
                  pdfPost: false,
                  newsPost: false,
                  userView: false,
                  viewAllNews: false,
                  viewEditNews: false,
                  pdfViewColor: 'text-green-500',
                  viewDashboardColor: 'text-slate-700',
                  viewProfileColor: 'text-slate-700',
                  pdfPostColor: 'text-slate-700',
                  newsPostColor: 'text-slate-500',
                  userViewColor: 'text-slate-700',
                  viewAllNewsColor: 'text-slate-700',
                  viewEditNewsColor: 'text-slate-700',
                })} className={`${sideLinks.flexType}   flex items-center gap-x-2  `}><FaBook className={`${displaying.pdfViewColor} text-[17px] md:text-[20px] `} /><span className={`${sideLinks.textSize} text-slate-900   `}>All Book</span> </Link></li>
                    
                <li><Link onClick={() => setDisplaying({
                  pdfView: false,
                  viewDashboard: false,
                  viewProfile: true,
                  pdfPost: false,
                  newsPost: false,
                  userView: false,
                  viewAllNews: false,
                  viewEditNews: false,
                  pdfViewColor: 'text-slate-700',
                  viewDashboardColor: 'text-slate-700',
                  viewProfileColor: 'text-green-500',
                  pdfPostColor: 'text-slate-700',
                  newsPostColor: 'text-slate-500',
                  userViewColor: 'text-slate-700',
                  viewAllNewsColor: 'text-slate-700',
                  viewEditNewsColor: 'text-slate-700',
                })} className={`${sideLinks.flexType}   flex items-center gap-x-2  `}><FaUserCircle className={`${displaying.viewProfileColor} text-[17px] md:text-[20px] `} /><span className={`${sideLinks.textSize} text-slate-900   `}>Profile</span> </Link></li>
                <li><Link onClick={() => setLogOut(true)} className={`${sideLinks.flexType}   flex items-center gap-x-2  `}><AiOutlineLogout className={`text-slate-700 text-[17px] md:text-[20px] `} /><span className={`${sideLinks.textSize} text-slate-900   `}>Logout</span> </Link></li>
               
              </ul>
            </div>
          </div>
            
          <div className="py-[10px] relative flex justify-center  lg:ml-[30px] ">
            <div>
                    
              {displaying.viewDashboard && <DashboardView />}
              {displaying.newsPost && <NewsUpload />}
              {displaying.pdfPost && <PdfUpload />}
              {displaying.userView && <Users />}
              {displaying.viewProfile && <UserProfile />}
              {displaying.viewAllNews && <AllNews />}
              {displaying.viewEditNews && <EditNews />}
              {displaying.pdfView && <AllPdf />}
                            
             
            </div>
          </div>
        </div>
      </div>
    )
  } else {
   return navigate('/login')
  }
}