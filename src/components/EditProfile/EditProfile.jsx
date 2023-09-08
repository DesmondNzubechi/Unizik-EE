import React from "react";
import  { HiOutlineBars3, HiXMark } from 'react-icons/hi2';
import { useState } from "react";


export const EditProfile = () => {
    const [form, setForm] = useState({
        changePassword : 'top-[-2000px]', 
        editProfile : 'top-[-2000px]',
      })
       

      //view edit profile page
        const viewEditProfile = () => {
          setForm({
             changePassword : 'top-[-2000px]',
            editProfile : 'top-0',
           })
        }

        //view change password page
        const viewChangePassword = () => {
          setForm({
             changePassword : 'top-0',
            editProfile : 'top-[-2000px]',
           })
        }

        //hide edit profile page
        const hideEditProfile = () => {
          setForm({
             changePassword : 'top-[-2000px]',
            editProfile : 'top-[-2000px]',
           })
        }

        //hide change password page
        const hideChangePassword = () => {
          setForm({
             changePassword : 'top-[-1000px]',
            editProfile : 'top-[-1000px]',
           });
        }
      
    return(
        <div className="flex justify-center gap-5 p-[20px] py-[50px] flex-row">
          <span onClick={(e) => {
            if (e.target.tagName === 'SPAN') {
              setForm({...form, editProfile: 'top-[-2000px]'})
            }
          }} className={`fixed ${form.editProfile}  w-full h-full flex justify-center z-[10] p-[50px] bg-Tp`}>
         <form  action="" className="bg-pink-700 relative rounded flex flex-col gap-4 p-[50px]">
          <HiXMark onClick={hideEditProfile} className="absolute top-0 right-0 text-slate-50 active:text-slate-900 text-[25px] font-bold "/>
            <h1 className="text-[20px] font-bold uppercase text-slate-100 ">Edit Profile</h1>
            <div className="flex flex-col">
                <label htmlFor="name" className="text-slate-900 font-[400] text-[20px]">Name:</label>
                <input type="text" className="border outline-0  p-2 rounded" placeholder="Nzubechukwu Desmond" />
            </div>
            <div className="flex flex-col">
                <label className="text-slate-900 font-[400] text-[20px]" htmlFor="Tel">Phone:</label>
               <input type="tel" className="border outline-0  p-2 rounded" name="" placeholder="+234 708 41823 611" id="" />
               <div className="flex flex-col">
                
                <label className="text-slate-900 font-[400] text-[20px]" htmlFor="email">Email:</label>
                <input type="email" className="border outline-0  p-2 rounded" placeholder="nzubechukwu1@gmail.com" />
            </div>
            <div className="flex flex-col">
                <button className="bg-slate-900 text-slate-50 p-2 my-[20px] rounded text-[20px] capitalize">Send message</button>
            </div>
            </div>
        </form>
        </span>
        </div>
    )
}