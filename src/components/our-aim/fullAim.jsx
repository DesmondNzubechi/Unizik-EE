import React from "react";
import tools from '../../assets/images/eebook.jpg';


export const FullAim = () => {
    return(
        <div className="px-[20px] flex pt-[150px] py-[20px]   flex-col rounded-[60px] bg-slate-50 gap-[40px] md:flex-row md:flex-row ... items-start py-[100px] ">
<div className="flex flex-col max-w-[600px] gap-[20px] ">
    <h1 className="text-[30px] border-b w-fit border-b-[10px] rounded-[15px] border-slate-900 text-yellow-500 font-bold uppercase ">Our Aim</h1>
    <p className="md:text-[20px] text-[17px] font-[400] ">The aim of the Department is to train students who are willing to become Electrical Engineers to become sound in the field. The trained students should be confident, self-reliant and be able to execute what they have learnt and strive to be the best among equals and to be able to do this independently. Other aims are:  </p>
<ol>
    <li>To produce graduates in Electrical Engineering. </li>
    <li>To produce graduates who are registerable with professional bodies.  </li>
    <li>To produce graduates who have a burning desire to excel in their chosen profession. </li>
    <li>The training shall include character moulding, discipline and character moulding and being able to remain focused when solving presented problems.</li>
</ol>
<div>
    <h1>OBJECTIVES</h1>
    <ol>
        <li>To encourage the advancement of all branches of learning and to hold out to all persons without distinction of race, creed, sex or political conviction the opportunity of acquiring higher and liberal education.</li>
       <li>To encourage and promote scholarship and conduct research in all fields of learning and human endeavour. </li>
       <li>To relate its activities to the social, cultural and economic needs of the people of Nigeria and </li>
       <li>To undertake any other activities appropriate for a University of the highest standard.</li>
    </ol>
</div>
</div>
<div className=" max-w-[600px]">
    <img className="rounded-[20px] " src={tools} alt="" />
</div>
        </div>
    )
}