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

export const Login = () => {
    const { signedIn, mainUser } = useContext(fullNewsContext);
    const [spinnerJs, setSpinnerJs] = useState(false);
    const [userDetails, setUserDetails] = useState({
        emailAddress: '',
        password: '',
    })
    const [errorMessage, setErroMessage] = useState('');
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
            setSpinnerJs(false);
          if (mainUser[0]?.stats === 'user') {
            navig('/profile')
          } else {
            navig('/dashboard')
          }
        } catch (error) {
            setSpinnerJs(false)
            const errorM = error.message;
            setErroMessage(errorM.replace('Firebase:', ''));
         
        }
    }
    const navig = useNavigate();
    return (
        signedIn? navig('/') : //&& mainUser[0]?.stats == 'user'? navig('/profile') :  signedIn && mainUser[0]?.stats == 'admin'? navig('/dashboard') : !signedIn &&
        <div className="py-[150px] px-[20px]  ">
             { spinnerJs &&  <div className="fixed bg-Tp w-full z-[500] left-0 right-0 flex justify-center h-full top-0 bottom-0 items-center"><BounceLoader color="#ffb700"
           size={100}
            /></div> }
            <div className="flex flex-row justify-center">
             <div data-aos='zoom-in' className="bg-slate-900 md:px-[70px]  flex flex-col  p-[20px] rounded shadow-2xl">
              <div>
                <h1 className="text-center text-slate-50 font-semibold text-[20px] uppercase font-myfont    mb-3">Welcome back!</h1>
               {/* <button onClick={signInWithgoogleE} className="flex text-center justify-center items-center my-5 gap-x-2 text-[20px] bg-pink-500 p-2 capitalize text-white rounded-[2px] font-[300]"><FcGoogle/> Sign in with your google accout </button>*/}
                            {/* <p className="text-center text-slate-300 capitalize mb-[20px]  text-[17px]">login with your email</p>*/}
                            <p className="text-center text-red-500 font-semibold text-[15px]">{ errorMessage}</p>
              </div>
                <form action="" className="flex  flex-col gap-5">
                    <div className="flex flex-col gap-1 items-start">
                        <label htmlFor="email" className="flex  items-center gap-1 text-slate-50 text-[15px]"><AiOutlineMail/>Email:</label>
                        <input onChange={(e) => setUserDetails({...userDetails,  emailAddress: e.target.value })} value={userDetails.emailAddress} type="email" placeholder="nzubechukwu@gmail.com"  className="p-3 shadow bg-yellow-500 rounded w-full outline-0 "/>
                    </div>
                    <div className="flex flex-col gap-1 items-start">
                    <label htmlFor="password" className="flex gap-1 items-center text-slate-50 text-[15px] "><RiLockPasswordFill/>Password</label>
                                <input onChange={(e) => {

                                    setUserDetails({ ...userDetails, password: e.target.value })

                                }} value={userDetails.password} type="password" placeholder="******" className="p-3 rounded bg-yellow-500 outline-0 w-full shadow " />
                    </div>
                  <button onClick={signUserIn} type="button"  className="bg-white hover:bg-slate-500 rounded text-[17px] font-semibold p-3">Login</button>
                  <p className="text-center text-[17px] text-slate-100 ">Don't have account yet? <Link to='/signup' className="text-yellow-500 text-[15px]">Sign Up</Link></p>
                </form>
             </div>
            </div>
        </div>
    )
}