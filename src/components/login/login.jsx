import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { BounceLoader, CircleLoader, ClipLoader} from "react-spinners";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { fullNewsContext } from "../context/Context";


export const Login = () => {
    const { signedIn, mainUser } = useContext(fullNewsContext);
    const [spinnerJs, setSpinnerJs] = useState(false);
    const [userDetails, setUserDetails] = useState({
        emailAddress: '',
        password: '',
    })

    const signUserIn = async () => {
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
            alert(error);
        }
    }
    const navig = useNavigate();
    return (
        signedIn? navig('/') : //&& mainUser[0]?.stats == 'user'? navig('/profile') :  signedIn && mainUser[0]?.stats == 'admin'? navig('/dashboard') : !signedIn &&
        <div className="py-[70px] px-[20px] pt-[150px] ">
            <div className="flex flex-row justify-center">
            { spinnerJs &&  <div className="fixed bg-Tp w-full z-[500] left-0 right-0 flex justify-center h-full top-0 bottom-0 items-center"><BounceLoader color="#ffb700"
           size={100}
                    /></div>}
                    <div className="bg-slate-100 px-[50px] rounded-xl py-[60px]">
                    <h1 className="font-myfont my-[20px] text-center font-bold text-[30px] ">Login Here</h1>
                <form className="flex justify-center   flex-col gap-[20px]">
                    <div className="flex flex-col gap-[10px] ">
                    <div className="flex flex-col ">
                <label className="text-[15px] font-semibold" htmlFor="">Email</label>
                <input onChange={(e) => setUserDetails({...userDetails, emailAddress: e.target.value})} value={userDetails.emailAddress} placeholder="Input email" className="shadow bg-white border-[2px]  rounded text-slate-900 placeholder:text-slate-700 outline-0 px-[20px] py-[5px] " type="email" name="email" id="" />
            </div>
            <div  className="flex flex-col ">
                <label className="text-[15px] font-semibold" htmlFor="">Password</label>
                <input onChange={(e) => setUserDetails({...userDetails, password: e.target.value})} value={userDetails.password} className=" shadow text-slate-900 placeholder:text-slate-500 rounded outline-0 px-[20px] py-[5px] " type="password" placeholder="Input password" name="email" id="" />
            </div>
            <button onClick={signUserIn} className="bg-slate-900 py-[3px]  hover:bg-slate-500 rounded shadow-2xl text-white text-[15px] md:text-[20px]  " type="button">login</button>
            <div className="flex flex-row items-center gap-2">
                <span className="h-[4px] bg-yellow-500 w-full "></span>
                <h1 className="uppercase font-bold">OR</h1>
                <span  className="h-[4px] bg-yellow-500 w-full "></span>
            </div>
           <p className="text-slate-800 font-[500] text-[12px] md:text-[15px] ">Don't have an account yet? <Link to='/signup' className="text-yellow-600">Sign Up</Link></p>
                    </div>
          
                </form>
                    </div>
                    </div>
        </div>
    )
}