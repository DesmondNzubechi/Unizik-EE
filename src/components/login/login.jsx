import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { BounceLoader, CircleLoader, ClipLoader} from "react-spinners";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { fullNewsContext } from "../context/Context";
import {AiOutlineMail} from 'react-icons/ai';
import {RiLockPasswordFill} from 'react-icons/ri';
import { Home } from "../Home/home";
import { sendPasswordResetEmail } from "firebase/auth";
import { HiXMark } from "react-icons/hi2";

export const Login = () => {
    const navig = useNavigate();
    const { signedIn, mainUser,  } = useContext(fullNewsContext);
    const [spinnerJs, setSpinnerJs] = useState(false);
    const [userDetails, setUserDetails] = useState({
        emailAddress: '',
        password: '',
    })

    const [forgotPasswordEmail, setForgotPasswordEmail] = useState('')
    const [errorMessage, setErroMessage] = useState('');

    const [form, setForm] = useState({
        changePassword : 'top-[-2000px]', 
        editProfile : 'top-[-2000px]',
    });
       //hide change password page
       const hideChangePassword = () => {
        setForm({
           changePassword : 'top-[-1000px]',
          editProfile : 'top-[-1000px]',
         });
    }
     //view change password page
     const viewChangePassword = () => {
        setForm({
           changePassword : 'top-0',
          editProfile : 'top-[-2000px]',
         })
      }

    const resetPassword = async () => {
        if (forgotPasswordEmail === '') {
            alert("Please input your email");
            return;
        }
        const resetPass = window.confirm('Are you sure you want to reset your password??');
        if (!resetPass) {
          return;
        }
        try {
          await sendPasswordResetEmail(auth, forgotPasswordEmail);
          hideChangePassword();
          alert('successful! Kindly check your email for reset password link');
         
        } catch (error) {
          alert('Something went wrong❌ try again!')
        }
      }

    const signUserIn = async () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (userDetails.emailAddress === '') {
            setErroMessage('Please input your email');
            return;
        } else if (!emailRegex.test(userDetails.emailAddress)) {
            setErroMessage('Invalid email address')
            return;
        }
        else if (userDetails.password === '') {
            setErroMessage('Please input your password');
            return;
        } 
        setSpinnerJs(true);
        try {
            await signInWithEmailAndPassword(auth, userDetails.emailAddress, userDetails.password);
          if (mainUser[0].stats === 'user') {
            navig('/my-dashboard')
          } else {
            navig('/admin-dashboard')
            };
           
          setSpinnerJs(false);
        } catch (error) {
            setSpinnerJs(false)
            const errorM = error.message;
            setErroMessage(errorM.replace('Firebase:', ''));
         
        }
    }
    if (signedIn) {
        return <Home />
    } else {
        return (
           
            // signedIn? navig('/') : //&& mainUser[0]?.stats == 'user'? navig('/profile') :  signedIn && mainUser[0]?.stats == 'admin'? navig('/dashboard') : !signedIn &&
            <>
            <div className="py-[150px] px-[20px]  ">
                {spinnerJs && <div className="fixed bg-Tp w-full z-[500] left-0 right-0 flex justify-center h-full top-0 bottom-0 items-center"><BounceLoader color="#ffb700"
                    size={100}
                /></div>}
                <div className="flex flex-row justify-center">
                    <div data-aos='zoom-in' className="bg-slate-900 md:px-[70px]  flex flex-col  p-[20px] rounded shadow-2xl">
                        <div>
                            <h1 className="text-center text-slate-50 font-semibold text-[20px] uppercase font-myfont    mb-3">Welcome back!</h1>
                            {/* <button onClick={signInWithgoogleE} className="flex text-center justify-center items-center my-5 gap-x-2 text-[20px] bg-pink-500 p-2 capitalize text-white rounded-[2px] font-[300]"><FcGoogle/> Sign in with your google accout </button>*/}
                            {/* <p className="text-center text-slate-300 capitalize mb-[20px]  text-[17px]">login with your email</p>*/}
                            <p className="text-center text-red-500 font-semibold text-[15px]">{errorMessage}</p>
                        </div>
                        <form action="" className="flex  flex-col gap-5">
                            <div className="flex flex-col gap-1 items-start">
                                <label htmlFor="email" className="flex  items-center gap-1 text-slate-50 text-[15px]"><AiOutlineMail />Email:</label>
                                <input onChange={(e) => setUserDetails({ ...userDetails, emailAddress: e.target.value })} value={userDetails.emailAddress} type="email" placeholder="nzubechukwu@gmail.com" className="p-3 text shadow bg-slate-50 text-slate-900 rounded w-full outline-0 " />
                            </div>
                            <div className="flex flex-col gap-1 items-start">
                                <label htmlFor="password" className="flex gap-1 items-center text-slate-50 text-[15px] "><RiLockPasswordFill />Password</label>
                                <input onChange={(e) => {

                                    setUserDetails({ ...userDetails, password: e.target.value })

                                }} value={userDetails.password} type="password" placeholder="******" className="p-3 rounded bg-slate-50 text-slate-900 outline-0 w-full shadow " />
                            </div>
                                <button onClick={signUserIn} type="button" className="bg-yellow-500 hover:bg-yellow-700 text-slate-50 rounded text-[17px] font-semibold p-3">Login</button>
                                <button type="button" onClick={viewChangePassword} className="text-slate-200 hover:text-slate-500 text-[13px] font-300">Fogotten password?</button>
                            <p className="text-center text-[17px] text-slate-100 ">Don't have account yet? <Link to='/signup' className="text-yellow-500 text-[15px]">Sign Up</Link></p>
                        </form>
                    </div>
                </div>
                </div>
                <span onClick={(e) => {
              if (e.target.tagName === 'SPAN') {
                setForm({ ...form, changePassword: 'top-[-2000px]' })
              }
            }} className={`fixed ${form.changePassword}   w-full h-full flex justify-center z-[500] p-[50px] bg-Tp`}>
              <form action="" className="bg-yellow-500 overflow-y-auto relative rounded flex flex-col gap-4 p-[50px]">
                <HiXMark onClick={hideChangePassword} className="absolute top-0 right-0 text-slate-50 active:text-slate-900 text-[25px] font-bold " />
                <h1 className="text-[20px] font-bold uppercase text-slate-100 ">Change Password</h1>
                <div className="flex flex-col">
                  <label className="text-slate-900 font-[400] text-[20px]" htmlFor="email">Email:</label>
                  <input onChange={(e) => setForgotPasswordEmail(e.target.value)} value={forgotPasswordEmail} type="email" className="border outline-0  p-2 rounded" placeholder="nzubechukwu1@gmail.com" />
                </div>
                <div className="flex flex-col">
                  <button type="button" onClick={resetPassword} className="bg-slate-900 text-slate-50 p-2 my-[20px] rounded text-[20px] capitalize">Reset Password</button>
                </div>
              </form>
            </span>
                </>
        )
    }
}