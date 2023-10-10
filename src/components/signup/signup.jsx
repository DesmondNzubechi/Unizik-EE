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
import { Home } from "../Home/home";
export const Sign = () => {
    const [spinnerJs, setSpinnerJs] = useState(false);
    const [showOthers, setOthers] = useState(false);
    const currentDate = new Date();
    const options = {
        year: 'numeric',
        month: 'long', // 'short' for abbreviated name, 'long' for full name
        day: 'numeric',
        weekday: 'long', // 'short' for abbreviated name, 'long' for full name
        hour: 'numeric',
        minute: 'numeric',
      };
      const fullDate = currentDate.toLocaleString(undefined, options);

    const [userDetails, setUserDetails] = useState({
        firstName: '',
        lastName: '',
        emailAddress: '',
        level: '',
        password: '',
        confirmPassword: '',
    })
    const { signedIn, mainUser } = useContext(fullNewsContext);
    const [errorMessage, setErroMessage] = useState('');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const signUserUp = async () => {
      if (userDetails.firstName === '') {
          setErroMessage("Please input first name");
          return;
      } else if (userDetails.lastName === '') {
          setErroMessage('Please input last name');
          return;
      } else if (userDetails.email === '') {
          setErroMessage('Please input email');
          return;
      } else if (!emailRegex.test(userDetails.emailAddress)) {
          setErroMessage('Invalid email address');
          return;
      } else if (userDetails.level === '') {
          setErroMessage('Please input level')
          return;
      } else if (userDetails.password === '') {
          setErroMessage('Please input password');
          return;
      } else if (userDetails.confirmPassword === '') {
          setErroMessage('Please confirm password');
          return;
      } else if (userDetails.password !== userDetails.confirmPassword ) {
          setErroMessage('Password does not match')
          return;
      }
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
                date: fullDate
                }
            )
            setSpinnerJs(false);
            navig('/my-dashboard')
        } catch (error) {
            alert(error);
        }
    }
    const navig = useNavigate();
    if (signedIn) {
        return <Home />
    } else {
    
        return (
            <div className="py-[70px] px-[20px] pt-[150px]">
                <div className="flex flex-row justify-center">
                    {spinnerJs && <div className="fixed bg-Tp w-full z-[500] left-0 right-0 flex justify-center h-full top-0 bottom-0 items-center"><BounceLoader color="#ffb700"
                        size={100}
                    /></div>}
                    <div className="flex flex-row justify-center">
                        <div data-aos='zoom-in' className="bg-slate-900 shadow-2xl md:px-[70px]  flex flex-col  p-[20px] rounded shadow-2xl">
                            <h1 className="text-center text-slate-50 font-semibold text-[20px] uppercase font-myfont    mb-3">Sign up here</h1>
                            <p className="text-center text-red-500 font-semibold text-[15px]">{errorMessage}</p>
                            {<form action="" className="flex  my-5  p-5 rounded flex-col gap-[20px]">
                                <div >

                                    <div className="flex  flex-col gap-[10px] ">

                                        <div className="flex flex-col md:flex-row gap-5">
                                            <div className="flex flex-col ">
                                                <label className="text-[17px] text-slate-400 font-[400]" htmlFor="">First name:</label>
                                                <input onChange={(e) => setUserDetails({ ...userDetails, firstName: e.target.value })} value={userDetails.firstName} placeholder="Input First Name" className=" bg-slate-50 text-slate-900 w-full border-[2px] border rounded  placeholder:text-slate-500 outline-0 px-[20px] py-[5px] " type="text" name="email" id="" />
                                            </div>
                                            <div className="flex flex-col ">
                                                <label className="text-[17px] text-slate-400 font-[400]" htmlFor="">Last name:</label>
                                                <input onChange={(e) => setUserDetails({ ...userDetails, lastName: e.target.value })} value={userDetails.lastName} placeholder="Input Last Name" className=" bg-slate-50 text-slate-900 w-full border-[2px] border rounded  placeholder:text-slate-500 outline-0 px-[20px] py-[5px] " type="text" name="email" id="" />
                                            </div>
            
                                        </div>

                                        <div className="flex flex-col md:flex-row gap-5">
                                            { /*  <div className="flex flex-col ">
                <label className="text-[17px] text-slate-400 font-[400]" htmlFor="">Username:</label>
                <input placeholder="Input Username" className=" bg-slate-50 text-slate-900 w-full border-[2px] border rounded  placeholder:text-slate-500 outline-0 px-[20px] py-[5px] " type="text" name="email" id="" />
    </div>*/}
                                            <div className="flex flex-col ">
                                                <label className="text-[17px] text-slate-400 font-[400]" htmlFor="">Email Address:</label>
                                                <input onChange={(e) => setUserDetails({ ...userDetails, emailAddress: e.target.value })} value={userDetails.emailAddress} className=" bg-slate-50 text-slate-900 w-full border-[2px] border  placeholder:text-slate-500 rounded outline-0 px-[20px] py-[5px] " type="email" placeholder="Input Email" name="email" id="" />
                                            </div>

                                            <div className="flex w-full  flex-col ">
                                                <label className="text-[17px] text-slate-400 font-[400]" htmlFor="">Level:</label>
                                                <select onChange={(e) => {
                                                    e.target.value === 'Tell Us About it' ? setOthers(true) : setOthers(false);
                                                    setUserDetails({ ...userDetails, level: e.target.value });
                                                    
                                                }} value={userDetails.level} name="" id="" className=" bg-slate-50 text-slate-900 w-full border-[2px] border flex  flex-col gap-[20px] rounded  placeholder:text-slate-500 outline-0 px-[20px] py-[5px] ">
                                                    <option className="text-[20px] " >select level</option>
                                                    <option value="Aspirant" className="text-[20px] " >Aspirant</option>
                                                    <option value="100l" className="text-[20px] " >100level</option>
                                                    <option value="200l" className="text-[20px] " >200level</option>
                                                    <option value="300l" className="text-[20px] " >300level</option>
                                                    <option value="400l" className="text-[20px] " >400level</option>
                                                    <option value="500l" className="text-[20px] " >500level</option>
                                                    <option value="Alumni" className="text-[20px] " >Alumni</option>
                                                    <option value="Tell Us About it" className="text-[20px] " >Other</option>
                                                </select>
                                                {showOthers && <input onChange={(e) => setUserDetails({ ...userDetails, level: e.target.value })} value={userDetails.level} placeholder="Others" className=" mt-1 bg-slate-50 text-slate-900 w-full border-[2px] border rounded  placeholder:text-slate-500 outline-0 px-[20px] py-[1px] " type="text" name="others" id="" />}
                                            </div>
                                        </div>
                                        <div className="flex flex-col md:flex-row gap-3">
                                            <div className="flex flex-col ">
                                                <label className="text-[17px] text-slate-400 font-[400]" htmlFor="">Password:</label>
                                                <input onChange={(e) => setUserDetails({ ...userDetails, password: e.target.value })} value={userDetails.password} placeholder="Input Password" className=" bg-slate-50 text-slate-900 w-full border-[2px] border rounded  placeholder:text-slate-500 outline-0 px-[20px] py-[5px] " type="password" name="email" id="" />
                                            </div>
         
            

                                            <div className="flex flex-col ">
                                                <label className="text-[17px] text-slate-400 font-[400]" htmlFor="">Confirm Password:</label>
                                                <input onChange={(e) => setUserDetails({ ...userDetails, confirmPassword: e.target.value })} value={userDetails.confirmPassword} className=" bg-slate-50 text-slate-900 w-full border-[2px] border  placeholder:text-slate-500 rounded outline-0 px-[20px] py-[5px] " type="password" placeholder="Confirm Password" name="email" id="" />
                                            </div>
                                        </div>
                                        <button onClick={signUserUp} className="hover:bg-yellow-700 shadow-2xl py-[3px] w-full bg-yellow-500  rounded shadow-2xl  text-[17px] text-slate-50 font-[400] " type="button">Sign Up</button>
                                    </div>
                                    <div className="flex flex-row items-center gap-2">
                                        <span className="h-[4px] bg-slate-50 text-slate-900 w-full "></span>
                                        <h1 className="uppercase text-slate-300 font-[400] ">OR</h1>
                                        <span className="h-[4px] bg-slate-50 text-slate-900 w-full "></span>
                                    </div>
                                    <p className="text-slate-300 text-center font-[400] text-[15px] ">Already have an account? <Link to='/login' className="text-yellow-600">Log in</Link></p>
                                </div>
          
                            </form>}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}