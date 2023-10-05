import React, { useState } from "react";
import { BsBookHalf, BsFillCalculatorFill } from 'react-icons/bs';
import { GrResources } from 'react-icons/gr';
import { CgProfile } from 'react-icons/cg';
import { AiFillDashboard, AiOutlineHome, AiOutlineLogout} from 'react-icons/ai';
import { NavLink, Link } from "react-router-dom";
import logo from '../../assets/images/logo.jpg';
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io';
import { UserDashboardView } from "./UserDashboardView";
export const UserDashboard = () => {
    const sideLink = [
        {
            icon: <AiFillDashboard/>,
            text: 'Dashboard',
        },
        {
            icon: <BsBookHalf />,
            text: 'Learning Resources',
        },
        {
            icon: <BsFillCalculatorFill />,
            text: 'CGPA Calculator',
        },
        {
            icon: <GrResources/>,
            text: 'Course Outlines',
        },
        {
            icon: <CgProfile />,
            text: 'Profile',
        },
    ]
    const [showText, setShowText] = useState(false);
    const [showTopBar, setTopBar] = useState(false);
    const showTopFx = () => {
        if (showTopBar) {
            setTopBar(false)
        } else {
            setTopBar(true)
        }
    }
    return <div className="min-h-[100vh]  pt-[170px] pl-[50px] absolute  w-full bo z-[200] flex justify-center bg-slate-50 px-[30px]">
        <div className="">
            <ul className="flex items-center px-[15px] bg-slate-50 py-[20px] justify-between fixed top-0 left-0 right-0 shadow-xl z-[200]">
                <li className="flex items-center gap-2">
                    <span className="flex items-center ">
                       { showText ? <IoIosArrowDropleftCircle onClick={() => setShowText(false)} className="text-[30px] text-slate-700" /> :
                        <IoIosArrowDroprightCircle onClick={() => setShowText(true)} className="text-[30px] text-slate-700"/>}
                    </span>
                 { /* <img src={logo} className="w-[50px] rounded-full" alt="" />*/}
                </li>
                <h1 className="font-semibold uppercase">My Dashboard</h1>
                <div className="relative">
                    <img src={logo} onClick={showTopFx} className="w-[50px] hover:shadow-2xl rounded-full" alt="" />
                   {showTopBar && <div className="flex flex-col absolute px-[50px] py-[20px] right-[-15px]    gap-5 bg-white rounded shadow-2xl">
                        <Link className="font-semibold hover:text-green-500 flex items-center gap-2"><AiOutlineHome className="text-[20px] text-slate-500"/>Home</Link>
                        <Link className="font-semibold hover:text-green-500 flex items-center gap-2"><CgProfile className="text-[20px] text-slate-500"/>Profile</Link>
                        <Link className="font-semibold hover:text-green-500 flex items-center gap-2"><AiOutlineLogout className="text-[20px] text-slate-500"/>Logout</Link>
                    </div>}
                </div>
            </ul>
            <ul className="fixed left-0 top-0 shadow-2xl bottom-0 flex flex-col bg-slate-50 px-[10px] gap-y-[50px] justify-center">
            {
                sideLink.map(text => {
                    return <li><NavLink className='flex hover:text-green-700 items-center text-slate-700 gap-2'><span className="text-[15px] md:text-[25px] ">{text.icon}</span> {showText && <span className={` capitalize `}>{text.text}</span>}</NavLink></li>
                })
                }
            </ul>
            <UserDashboardView />
            
        </div>
    </div>
}