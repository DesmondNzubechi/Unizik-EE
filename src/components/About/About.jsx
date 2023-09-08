import React from "react";
import tools from '../../assets/images/lightbulb.jpg';
import { Link } from "react-router-dom";

export const About = () => {
    return(
        <div className="px-[20px] pt-[150px] flex flex-col gap-[20px] md:flex-row items-center py-[100px] ">
<div className="flex flex-col max-w-[600px] gap-[20px] ">
    <h1 className="text-[30px] border-b-[7px] border-b-yellow-500 w-fit  font-bold uppercase rounded-full p-[10px] ">About eesa nau</h1>
    <h2 className="text-[25px] font-semibold ">Brief History Of Electrical Engineering NAU</h2>
    <p className="md:text-[20px] text-[17px] font-[400] ">Anambra State University of Technology (ASUTECH) was established by law in July, 1980 as the first indigenous University of Technology in Nigeria. From the onset, two campuses were opened simultaneously at Enugu and Awka. The Department of Electrical/Electronic and Computer Engineering was sited at the Enugu Campus during the 1980/81session. With the creation of Enugu State out of the old Anambra State in August, 1991, the ASUTECH was re-established at Awka with the former curriculum of ASUTECH.</p>
<p><Link to='/fullAbout' className="bg-slate-900 text-[20px] text-yellow-500 px-[10px] py-[5px] mt-[60px] rounded-[5px]  ">Read More</Link>
</p>
</div>
<div className="max-w-[600px]">
    <img src={tools} alt="" />
</div>
        </div>
    )
}