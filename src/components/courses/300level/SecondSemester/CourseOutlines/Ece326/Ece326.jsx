import React from "react";
import { Ece326Content } from "./Ece326content";


export const Ece326 = () => {
    return (
        <div className="pt-[120px] pb-[50px] flex  justify-center  px-[30px] ">
            <div>
              <div>

<h1 className="text-center text-slate-900 font-bold uppercase text-[15px] md:text-[20px] my-[10px]">ECE 326  Physical Electronics  3 Credits  Prerequisite FEG 201 </h1>
<p className="text-center text-slate-700 font-semibold text-[15px] md:text-[20px] ">Course Outlines</p>
   </div>

   <div className="max-w-[600px] flex flex-col gap-5 my-[20px] ">
    <Ece326Content/>
   </div>
        </div>
        </div>
        
    )
}