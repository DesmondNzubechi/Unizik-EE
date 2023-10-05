import React, { useEffect } from "react";
import tools from '../../assets/images/nau.jpg';
import Aos from "aos";


export const Admission = () => {
    useEffect(() => {
        Aos.init();
    })
    return(
        <div className="py-[100px] px-[30px] pt-[150px] ">
         <div data-aos='fade-up' aos-data-duration='2000' className="text-center  ">
            <h1 className="uppercase text-slate-900 font-bold text-[20px] md:text-[30px] ">Admission-Requirement</h1>
            <p className="text-slate-700 font-semibold capitalize font-[500] text-[15px] md:text-[20px] ">Department of electrical engineering UNIZIK </p>
         </div>

         <div className="mt-[30px] flex flex-col md:flex-row justify-around gap-5">
           
            <div data-aos='fade-up' aos-data-duration='2000'  className="max-w-[600px] flex flex-col gap-[20px] ">
    <p className="text-[12px] md:text-[15px]">Generally, For any candidate to be considered for admission in the Nnamdi Azikiwe University (UNIZIK), the candidate must score 200 and above in JAMB.</p>
 <img src={tools} alt="" className="rounded " />
  </div>
  <div data-aos='fade-up' aos-data-duration='2000' className="max-w-[600px] flex flex-col gap-5">
  <p className="text-slate-700 text-[12px] md:text-[15px] ">Aspirants who wish to study Electrical Engineering at Nnamdi Azikiwe University (UNIZIK), below are the admission requirements ranging from O’level subject combination, JAMB And Departmental cut-off marks, and JAMB O’level subject combination.</p>
   
    <h1 className=" font-semibold text-[15px] md:text-[20px] ">Unizik Department Of Electrical Engineering Admission Requirements</h1>
    <div>
        <h1 className="font-[500] text-[15px] md:text-[20px] font-bold text-slate-900 uppercase  ">O’level Subject Combination</h1>
        <p className="text-[12px] md:text-[15px] text-slate-700 ">Candidates must possess five (5) O’ level credits, including English Language, Mathematics, Physics, Chemistry, and any other subject obtained at least two sittings.</p>
    </div>
    <div>
        <h1 className="font-[500] text-[15px] font-bold md:text-[20px] text-slate-900 uppercase  ">JAMB Subject Combinations</h1>
        <p className="text-[12px] md:text-[15px] text-slate-700 ">Candidates who wish to study Electronic And Computer Engineering at Nnamdi Azikiwe University (UNIZIK) will write the following four (4) subjects in Jamb.</p>
        <ul className="flex flex-col gap-2 ">
            <li className="text-[12px] md:text-[15px] font-bold ">Use of English, </li>
            <li className="text-[12px] md:text-[15px] font-bold "> Mathematics</li>
            <li className="text-[12px] md:text-[15px] font-bold "> Physics</li>
            <li className="text-[12px] md:text-[15px] font-bold ">Chemistry</li>
        </ul>
    </div>
    <div>
        <h1 className="font-[500] text-[15px] md:text-[20px] font-bold  text-slate-900 uppercase  ">UNIZIK Electrical Engineering Departmental Cut-Off Mark</h1>
        <p className="text-[12px] md:text-[15px] text-slate-700 ">Department of Electrical Engineering does not have specified cutoff mark but for an Aspirants to be in a safer side the Aspirant need to score 220+ in his/her post UTME examination.</p>
    </div>
  </div>
  <div>
    
  </div>
            
         </div>
        </div>
    )
}