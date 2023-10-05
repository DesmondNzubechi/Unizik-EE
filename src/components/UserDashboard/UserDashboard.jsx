import React, { useState } from "react";
import { BsBookHalf, BsFillCalculatorFill } from 'react-icons/bs';
import { GrResources } from 'react-icons/gr';
import { CgProfile } from 'react-icons/cg';
import { FaUserCircle, FaBook } from 'react-icons/fa';
import { AiFillDashboard,  AiOutlineHome, AiOutlineLogout} from 'react-icons/ai';
import { NavLink, Link } from "react-router-dom";
import logo from '../../assets/images/logo.jpg';
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io';
import { UserDashboardView } from "./UserDashboardView";
import { UserLearningResources } from "./UserLearningResources";
import { UserCourseOutlines } from "./UserCourseOutline";
import CGPACalculator from "../cgpa-calc/CgpaCalc";
import { UserProfile } from "../User profile/UserProfile";
import { fullNewsContext } from "../context/Context";
import { useContext } from "react";
import { Login } from "../login/login";
export const UserDashboard = () => {
    const { userDisplay, setUserDisplay,  mainUser, signedIn , setLogOut} = useContext(fullNewsContext); 
    const [showText, setShowText] = useState(false);
    const [showTopBar, setTopBar] = useState(false);
    const showTopFx = () => {
        if (showTopBar) {
            setTopBar(false)
        } else {
            setTopBar(true)
        }
    }
    if (!signedIn) {
        return <Login />
    } else {
        return <div className="min-h-[100vh] overflow-x-hidden  pt-[50px]  absolute  w-full bo z-[200] flex justify-center bg-slate-50 px-[30px]">
            <div className="">
                <ul className="flex items-center px-[15px] bg-slate-50 py-[20px] justify-between fixed top-0 left-0 right-0 shadow-xl z-[200]">
                    <li className="flex items-center gap-2">
                        <span className="flex items-center ">
                            {showText ? <IoIosArrowDropleftCircle onClick={() => setShowText(false)} className="text-[30px] text-slate-700" /> :
                                <IoIosArrowDroprightCircle onClick={() => setShowText(true)} className="text-[30px] text-slate-700" />}
                        </span>
                        { /* <img src={logo} className="w-[50px] rounded-full" alt="" />*/}
                    </li>
                    <h1 className="font-semibold uppercase">My Dashboard</h1>
                    <div className="relative">
                        {!mainUser[0]?.profilePic ? <FaUserCircle onClick={showTopFx} className="text-[40px]" /> : <img src={mainUser[0]?.profilePic} onClick={showTopFx} className="w-[50px] hover:shadow-2xl rounded-full" alt="" />}
                        {showTopBar && <div className="flex flex-col absolute px-[50px] py-[20px] right-[-15px]    gap-5 bg-white rounded shadow-2xl">
                            <Link to='/' className="font-semibold hover:text-green-500 flex items-center gap-2"><AiOutlineHome className="text-[20px] text-slate-500" />Home</Link>
                            <Link onClick={() => {
                                setTopBar(false);
                                setUserDisplay({
                                    courseOutline: false,
                                    viewDashboard: false,
                                    viewProfile: true,
                                    learningResources: false,
                                    cgpaCalc: false,
                                    courseOutlineColor: 'text-slate-700',
                                    viewDashboardColor: 'text-slate-700',
                                    viewProfileColor: 'text-green-500',
                                    learningResourcesColor: 'text-slate-700',
                                    cgpaCalcColor: 'text-slate-700',
                                })
                            }} className="font-semibold hover:text-green-500 flex items-center gap-2"><CgProfile className="text-[20px] text-slate-500" />Profile</Link>
                            <Link onClick={() => setLogOut(true)} className="font-semibold hover:text-green-500 flex items-center gap-2"><AiOutlineLogout className="text-[20px] text-slate-500" />Logout</Link>
                        </div>}
                    </div>
                </ul>
                {showText && <ul className="fixed left-0 top-0 shadow-2xl bottom-0 flex flex-col bg-slate-50 px-[10px] gap-y-[40px] pt-[120px]">
                    <li><NavLink onClick={() => {
                        setShowText(false);
                        setUserDisplay({
                            courseOutline: false,
                            viewDashboard: true,
                            viewProfile: false,
                            learningResources: false,
                            cgpaCalc: false,
                            courseOutlineColor: 'text-slate-700',
                            viewDashboardColor: 'text-green-500',
                            viewProfileColor: 'text-slate-700',
                            learningResourcesColor: 'text-slate-700',
                            cgpaCalcColor: 'text-slate-700',
                        })
                    }} className='flex hover:text-green-700 items-center text-slate-700 gap-2'><span className="text-[15px] md:text-[25px] "><AiFillDashboard className={`${userDisplay.viewDashboardColor}`} /></span> {showText && <span className={` capitalize  `}>Dashboard</span>}</NavLink></li>
                    <li><NavLink onClick={() => {
                        setShowText(false);
                        setUserDisplay({
                            courseOutline: false,
                            viewDashboard: false,
                            viewProfile: false,
                            learningResources: true,
                            cgpaCalc: false,
                            courseOutlineColor: 'text-slate-700',
                            viewDashboardColor: 'text-slate-700',
                            viewProfileColor: 'text-slate-700',
                            learningResourcesColor: 'text-green-500',
                            cgpaCalcColor: 'text-slate-700',
                        })
                    }} className='flex hover:text-green-700 items-center text-slate-700 gap-2'><span className="text-[15px] md:text-[25px] "><BsBookHalf className={`${userDisplay.learningResourcesColor}`} /></span> {showText && <span className={` capitalize `}>Learning Resources</span>}</NavLink></li>
                    <li><NavLink
                        onClick={() => {
                            setShowText(false);
                            setUserDisplay({
                                courseOutline: false,
                                viewDashboard: false,
                                viewProfile: false,
                                learningResources: false,
                                cgpaCalc: true,
                                courseOutlineColor: 'text-slate-700',
                                viewDashboardColor: 'text-slate-700',
                                viewProfileColor: 'text-slate-700',
                                learningResourcesColor: 'text-slate-700',
                                cgpaCalcColor: 'text-green-500',
                            })
                        }} className='flex hover:text-green-700 items-center text-slate-700 gap-2'><span className="text-[15px] md:text-[25px] "><BsFillCalculatorFill className={`${userDisplay.cgpaCalcColor}`} /></span> {showText && <span className={` capitalize `}>CGPA Calculator</span>}</NavLink></li>
                    <li><NavLink onClick={() => {
                        setShowText(false);
                        setUserDisplay({
                            courseOutline: true,
                            viewDashboard: false,
                            viewProfile: false,
                            learningResources: false,
                            cgpaCalc: false,
                            courseOutlineColor: 'text-green-500',
                            viewDashboardColor: 'text-slate-700',
                            viewProfileColor: 'text-slate-700',
                            learningResourcesColor: 'text-slate-700',
                            cgpaCalcColor: 'text-slate-700',
                        })
                    }} className='flex hover:text-green-700 items-center text-slate-700 gap-2'><span className="text-[15px] md:text-[25px] "><FaBook className={`${userDisplay.courseOutlineColor}`} /></span> {showText && <span className={` capitalize `}>Course Outlines</span>}</NavLink></li>
                    <li><NavLink onClick={() => {
                        setShowText(false);
                        setUserDisplay({
                            courseOutline: false,
                            viewDashboard: false,
                            viewProfile: true,
                            learningResources: false,
                            cgpaCalc: false, 
                            courseOutlineColor: 'text-slate-700',
                            viewDashboardColor: 'text-slate-700',
                            viewProfileColor: 'text-green-500',
                            learningResourcesColor: 'text-slate-700',
                            cgpaCalcColor: 'text-slate-700',
                        })
                    }} className='flex hover:text-green-700 items-center text-slate-700 gap-2'><span className="text-[15px] md:text-[25px] "><FaUserCircle className={`${userDisplay.viewProfileColor}`} /></span> {showText && <span className={` capitalize `}>Profile</span>}</NavLink></li>
                
                </ul>}
                {userDisplay.viewDashboard && <UserDashboardView />}
                {userDisplay.learningResources && <UserLearningResources />}
                {userDisplay.courseOutline && <UserCourseOutlines />}
                {userDisplay.cgpaCalc && <CGPACalculator />}
                {userDisplay.viewProfile && <UserProfile />}
            </div>
        </div>
    }
}