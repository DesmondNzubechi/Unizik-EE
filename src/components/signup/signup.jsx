import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BounceLoader, CircleLoader, ClipLoader} from "react-spinners";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
import { db } from "../config/firebase";
import { addDoc, collection } from "firebase/firestore";
import { useContext } from "react";
import { fullNewsContext } from "../context/Context";
import { useNavigate } from "react-router-dom";
export const Sign = () => {
    const [spinnerJs, setSpinnerJs] = useState(false);
    const [userDetails, setUserDetails] = useState({
        firstName: '',
        lastName: '',
        emailAddress: '',
        level: '',
        password: '',
        confirmPassword: '',
    })
    const { signedIn, mainUser } = useContext(fullNewsContext);

    const signUserUp = async () => {
        const userRef = collection(db, 'allUser')
        setSpinnerJs(true);
        try {
            await createUserWithEmailAndPassword(auth, userDetails.emailAddress, userDetails.password);
            await addDoc(userRef,{
                email: userDetails.emailAddress,
                firstName: userDetails.firstName,
                lastName: userDetails.lastName,
                userLevel: userDetails.level,
                stats: 'user',
                }
            )
            setSpinnerJs(false);
            navig('/profile')
        } catch (error) {
            alert(error);
        }
    }
    const navig = useNavigate();

    return (
        signedIn && mainUser[0]?.stats == 'user'? navig('/profile') :  signedIn && mainUser[0]?.stats == 'admin'? navig('/dashboard') : !signedIn &&
        <div className="py-[70px] px-[20px] pt-[150px]">
            <div className="flex flex-row justify-center">
           { spinnerJs &&  <div className="fixed bg-Tp w-full z-[500] left-0 right-0 flex justify-center h-full top-0 bottom-0 items-center"><BounceLoader color="#ffb700"
           size={100}
            /></div> }
              {<form action=""  className="flex shadow-2xl my-5  p-5 rounded flex-col gap-[20px]">
                    <div>
                        <h1 className="uppercase  font-bold text-[30px] ">Signup here</h1>
                    </div>
                    <div >

                    <div className="flex  flex-col gap-[10px] ">

<div className="flex flex-col md:flex-row gap-5">
                    <div className="flex flex-col ">
                <label className="text-[17px] font-[400]" htmlFor="">First name:</label>
                <input onChange={(e) => setUserDetails({...userDetails, firstName: e.target.value})} value={userDetails.firstName} placeholder="Input First Name" className="border-yellow-500 bg-yellow-500 border-[2px] border rounded text-white placeholder:text-white outline-0 px-[20px] py-[5px] " type="text" name="email" id="" />
            </div>
            <div className="flex flex-col ">
                <label className="text-[17px] font-[400]" htmlFor="">Last name:</label>
                <input onChange={(e) => setUserDetails({...userDetails, lastName: e.target.value})} value={userDetails.lastName} placeholder="Input Last Name" className="border-yellow-500 bg-yellow-500 border-[2px] border rounded text-white placeholder:text-white outline-0 px-[20px] py-[5px] " type="text" name="email" id="" />
            </div>
            
</div>

<div className="flex flex-col md:flex-row gap-5">
                 { /*  <div className="flex flex-col ">
                <label className="text-[17px] font-[400]" htmlFor="">Username:</label>
                <input placeholder="Input Username" className="border-yellow-500 bg-yellow-500 border-[2px] border rounded text-white placeholder:text-white outline-0 px-[20px] py-[5px] " type="text" name="email" id="" />
    </div>*/} 
            <div  className="flex flex-col ">
                <label className="text-[17px] font-[400]" htmlFor="">Email Address:</label>
                <input onChange={(e) => setUserDetails({...userDetails, emailAddress: e.target.value})} value={userDetails.emailAddress} className="border-yellow-500 bg-yellow-500 border-[2px] border text-white placeholder:text-white rounded outline-0 px-[20px] py-[5px] " type="email" placeholder="Input Email" name="email" id="" />
            </div>

            <div  className="flex w-full flex-col ">
                <label className="text-[17px] font-[400]" htmlFor="">Level:</label>
                <select onChange={(e) => setUserDetails({...userDetails, level: e.target.value})} value={userDetails.level} name="" id="" className="border-yellow-500 bg-yellow-500 border-[2px] border flex  flex-col gap-[20px] rounded text-white placeholder:text-white outline-0 px-[20px] py-[5px] ">
    <option className="text-[20px] " >select level</option>
    <option value="500l"  className="text-[20px] " >Aspirant</option>
   <option value="500l"  className="text-[20px] " >100level</option>
   <option value="200l"  className="text-[20px] " >200level</option>
   <option value="300l"  className="text-[20px] " >300level</option>
   <option value="400l"  className="text-[20px] " >400level</option>
   <option value="500l"  className="text-[20px] " >500level</option>
   
          
                </select>
                 </div>
                 </div>
                 <div className="flex flex-col md:flex-row gap-3">
            <div className="flex flex-col ">
                <label className="text-[17px] font-[400]" htmlFor="">Password:</label>
                <input onChange={(e) => setUserDetails({...userDetails, password: e.target.value})} value={userDetails.password} placeholder="Input Password" className="border-yellow-500 bg-yellow-500 border-[2px] border rounded text-white placeholder:text-white outline-0 px-[20px] py-[5px] " type="password" name="email" id="" />
            </div>
         
            

            <div  className="flex flex-col ">
                <label className="text-[17px] font-[400]" htmlFor="">Confirm Password:</label>
                <input onChange={(e) => setUserDetails({...userDetails, confirmPassword: e.target.value})} value={userDetails.confirmPassword} className="border-yellow-500 bg-yellow-500 border-[2px] border text-white placeholder:text-white rounded outline-0 px-[20px] py-[5px] " type="password" placeholder="Confirm Password" name="email" id="" />
            </div>
            </div>
            <button onClick={signUserUp} className="bg-slate-900 py-[3px] w-full  rounded shadow-2xl text-white text-[17px] font-[400] " type="button">Sign Up</button>
            </div>
            <div className="flex flex-row items-center gap-2">
                <span className="h-[4px] bg-yellow-500 w-full "></span>
                <h1 className="uppercase font-[400] ">OR</h1>
                <span  className="h-[4px] bg-yellow-500 w-full "></span>
            </div>
           <p className="text-slate-800 text-center font-[400] text-[15px] ">Already have an account? <Link to='/login' className="text-yellow-600">Log in</Link></p>
                    </div>
          
                </form>}
            </div>
        </div>
    )
}