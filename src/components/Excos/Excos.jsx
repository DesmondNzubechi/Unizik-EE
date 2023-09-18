import React from "react";
import { Link } from "react-router-dom";
import { Excop } from "./ExcosProfile";

export const ExcosProfile = () => {
    return(
        <div className="flex p-5 pt-[150px] justify-center flex-row items-center">
            <div className="grid grid-cols-1 gap-5 ">
                <div className="flex flex-col justify-center text-center">
                    <h1 className="md:text-[30px] text-slate-900 text-[20px] font-bold uppercase ">meet ee students president unizik</h1>
                    <p className="md:text-[20px] text-[15px] text-slate-500 font-semibold ">Current - Past President</p>
                </div>
                <Excop/>
        </div>
        </div>
    )
}