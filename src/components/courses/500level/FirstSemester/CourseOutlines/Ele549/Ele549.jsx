import React from "react";
import { Ele549Content } from "./Ele549content";


export const Ele549 = () => {
    return (
        <div className="pt-[120px] pb-[50px] flex  justify-center  px-[30px] ">
            <div>
              <div>

<h1 className="text-center text-slate-900 font-bold uppercase text-[15px] md:text-[20px] my-[10px]">ELE 549 Design of electromechanical Devices and Electrical Machines   3 Credits</h1>
<p className="text-center text-slate-700 font-semibold text-[15px] md:text-[20px] ">Course Outlines</p>
   </div>

   <div className="max-w-[600px] flex flex-col gap-5 my-[20px] ">
    <Ele549Content/>
   </div>
        </div>
        </div>
        
    )
}