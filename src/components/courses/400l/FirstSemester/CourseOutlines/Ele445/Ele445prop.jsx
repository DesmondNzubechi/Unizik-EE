import React from "react";
import { Ele445Content } from "./Ele445content";


export const Ele445props = (props) => {
    return(
        
        <div className="flex flex-col gap-1">
        <h1 className="font-[500] text-[17px] md:text-[23px] text-slate-800 ">{props.Topic}</h1>
        <p className="text-slate-500 text-[14px] md:text-[18px] ">{props.subtopic}</p>
        <hr />
    </div>
       
    );
}