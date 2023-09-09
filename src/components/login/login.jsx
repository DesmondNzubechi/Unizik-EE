import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { BounceLoader, CircleLoader, ClipLoader} from "react-spinners";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";

export const Login = () => {
    const [spinnerJs, setSpinnerJs] = useState(false);
    const [userDetails, setUserDetails] = useState({
        emailAddress: '',
        password: '',
    })
    return(
        <div className="py-[70px] pt-[150px] ">
            <div className="flex flex-row justify-center">
            { spinnerJs &&  <div className="fixed bg-Tp w-full z-[500] left-0 right-0 flex justify-center h-full top-0 bottom-0 items-center"><BounceLoader color="#ffb700"
           size={100}
            /></div> }
                <form action="" method="post" className="flex flex-col gap-[20px]">
                    <div>
                        <h1 className="uppercase  font-bold text-[30px] ">Login here</h1>
                    </div>
                    <div className="flex flex-col gap-[10px] ">
                    <div className="flex flex-col ">
                <label className="text-[20px] font-semibold" htmlFor="">Email</label>
                <input placeholder="Input email" className="border-yellow-500 bg-yellow-500 border-[2px] border rounded text-white placeholder:text-white outline-0 px-[20px] py-[5px] " type="email" name="email" id="" />
            </div>
            <div  className="flex flex-col ">
                <label className="text-[20px] font-semibold" htmlFor="">Password</label>
                <input className="border-yellow-500 bg-yellow-500 border-[2px] border text-white placeholder:text-white rounded outline-0 px-[20px] py-[5px] " type="password" placeholder="Input password" name="email" id="" />
            </div>
            <button onClick={() => setSpinnerJs(true)} className="bg-slate-900 py-[3px]  rounded shadow-2xl text-white text-[25px] font-semibold " type="button">login</button>
            <div className="flex flex-row items-center gap-2">
                <span className="h-[4px] bg-yellow-500 w-full "></span>
                <h1 className="uppercase font-bold">OR</h1>
                <span  className="h-[4px] bg-yellow-500 w-full "></span>
            </div>
           <p className="text-slate-800 font-[500] text-[20px] ">Don't have an account yet? <Link to='/signup' className="text-yellow-600">Sign Up</Link></p>
                    </div>
          
                </form>
            </div>
        </div>
    )
}