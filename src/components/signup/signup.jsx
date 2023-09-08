import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BounceLoader, CircleLoader, ClipLoader} from "react-spinners";


export const Sign = () => {
     const [spinnerJs, setSpinnerJs] = useState(false);
    return(
        <div className="py-[70px] pt-[150px]">
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
                <input placeholder="Input First Name" className="border-yellow-500 bg-yellow-500 border-[2px] border rounded text-white placeholder:text-white outline-0 px-[20px] py-[5px] " type="text" name="email" id="" />
            </div>
            <div className="flex flex-col ">
                <label className="text-[17px] font-[400]" htmlFor="">Last name:</label>
                <input placeholder="Input Last Name" className="border-yellow-500 bg-yellow-500 border-[2px] border rounded text-white placeholder:text-white outline-0 px-[20px] py-[5px] " type="text" name="email" id="" />
            </div>
            
</div>

<div className="flex flex-col md:flex-row gap-5">
                 { /*  <div className="flex flex-col ">
                <label className="text-[17px] font-[400]" htmlFor="">Username:</label>
                <input placeholder="Input Username" className="border-yellow-500 bg-yellow-500 border-[2px] border rounded text-white placeholder:text-white outline-0 px-[20px] py-[5px] " type="text" name="email" id="" />
    </div>*/} 
            <div  className="flex flex-col ">
                <label className="text-[17px] font-[400]" htmlFor="">Email Address:</label>
                <input className="border-yellow-500 bg-yellow-500 border-[2px] border text-white placeholder:text-white rounded outline-0 px-[20px] py-[5px] " type="email" placeholder="Input Email" name="email" id="" />
            </div>

            <div  className="flex w-full flex-col ">
                <label className="text-[17px] font-[400]" htmlFor="">Level:</label>
                <select name="" id="" className="border-yellow-500 bg-yellow-500 border-[2px] border flex  flex-col gap-[20px] rounded text-white placeholder:text-white outline-0 px-[20px] py-[5px] ">
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
                <input placeholder="Input Password" className="border-yellow-500 bg-yellow-500 border-[2px] border rounded text-white placeholder:text-white outline-0 px-[20px] py-[5px] " type="email" name="email" id="" />
            </div>
         
            

            <div  className="flex flex-col ">
                <label className="text-[17px] font-[400]" htmlFor="">Confirm Password:</label>
                <input className="border-yellow-500 bg-yellow-500 border-[2px] border text-white placeholder:text-white rounded outline-0 px-[20px] py-[5px] " type="password" placeholder="Confirm Password" name="email" id="" />
            </div>
            </div>
            <button onClick={() => setSpinnerJs(true)} className="bg-slate-900 py-[3px] w-full  rounded shadow-2xl text-white text-[17px] font-[400] " type="button">Sign Up</button>
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