import React from "react";
import { Ece323Content } from "./Ece323content";


export const Ece323 = () => {
    return (
        <div className="pt-[120px] pb-[50px] flex  justify-center  px-[30px] ">
            <div>
              <div>

<h1 className="text-center text-slate-900 font-bold uppercase text-[15px] md:text-[20px] my-[10px]">ECE 323  Electrical Devices and Circuits 2 Credits Prerequisite FEG 201 </h1>
<p className="text-center text-slate-700 font-semibold text-[15px] md:text-[20px] ">Course Outlines</p>
   </div>

   <div className="max-w-[600px] flex flex-col gap-5 my-[20px] ">
    <Ece323Content/>
   </div>
        </div>
        </div>
        
    )
}