import React from "react";
import tools from '../../assets/images/lightbulbr.png';
import tool1 from '../../assets/images/lightbulb2.jpg';


export const FullAbout = () => {
    return(
        <div className="px-[20px] pt-[150px]">

<h1 className="md:text-[25px] text-[20px] border-b-[7px] border-b-yellow-500 w-fit  font-bold uppercase rounded p-[2px] ">About ee unizik</h1>
        <div className=" flex flex-col gap-[50px] md:flex-row items-start py-[50px] ">
<div className=" flex flex-col max-w-[600px] gap-[20px]  ">
<h2 className="md:text-[20px] text-[15px] font-bold uppercase ">History Of Electrical Engineering NAU</h2>
    <p className="md:text-[15px] text-[12px] font-[400] ">Anambra State University of Technology (ASUTECH) was established by law in July, 1980 as the first indigenous University of Technology in Nigeria. From the onset, two campuses were opened simultaneously at Enugu and Awka. The Department of Electrical/Electronic and Computer Engineering was sited at the Enugu Campus during the 1980/81session. With the creation of Enugu State out of the old Anambra State in August, 1991, the ASUTECH was re-established at Awka with the former curriculum of ASUTECH. In 1990 the University was renamed Nnamdi Azikiwe University. In 1992, the Federal Government of Nigeria took over the University. Earlier than then, the programme of the Department had an initial accreditation at ASUTECH Enugu. </p>
     <h1 className="font-bold text-[15px] md:text-[20px] uppercase">A look at the Headship on the board shows the sequence as follows: </h1>
     <ol className="flex flex-col gap-1 ">
        <li className="md:text-[15px] font-[500] text-[12px] font-bold ">1. Engr. C. U. Mezi 1992 – 1993</li>
        <li className="md:text-[15px] font-[500] text-[12px] font-bold ">2. Engr. Dr. G. C. Chidolue 1993 – 1995</li>
        <li className="md:text-[15px] font-[500] text-[12px] font-bold ">3. Engr E. O. Okoye 1995 – 1996</li>
        <li className="md:text-[15px] font-[500] text-[12px] font-bold ">4. Engr. Dr. G. C. Chidolue 1996 – 1997</li>
        <li className="md:text-[15px] font-[500] text-[12px] font-bold ">5. Engr. C. U. Mezi 1997 – 1998</li>
        <li className="md:text-[15px] font-[500] text-[12px] font-bold ">6. Engr. Dr. G. C. Chidolue 1998 – 2000</li>
        <li className="md:text-[15px] font-[500] text-[12px] font-bold ">7. Engr E. O. Okoye 2000 – 2002</li>
        <li className="md:text-[15px] font-[500] text-[12px] font-bold ">8. Engr. C. U. Mezi 2002 – 2005</li>
        <li className="md:text-[15px] font-[500] text-[12px] font-bold ">9. Engr. F. O. Enemuoh 2005 – 2011</li>
        <li className="md:text-[15px] font-[500] text-[12px] font-bold ">10. Engr M. N. Eleanya 2011 – 2012 </li>
        <li className="md:text-[15px] font-[500] text-[12px] font-bold ">11. Engr. F. O. Enemuoh 2012 – 2013</li>
        <li className="md:text-[15px] font-[500] text-[12px] font-bold ">12. Engr. Dr. J. C. Onuegbu 2013 – 2019 </li>
        <li className="md:text-[15px] font-[500] text-[12px] font-bold ">13. Engr. Dr. A. E. Anazia 2019 – 2022</li>
        <li className="md:text-[15px] font-[500] text-[12px] font-bold ">14. Engr. Dr. Ezechukwu Oseloka 2022 to Date.</li>
     </ol>
</div>
<div className="max-w-[600px] flex flex-col gap-5  ">
    <img src={tool1} alt="" className="rounded" />
  
    <div className="flex flex-col gap-5">
        <div>
        <h1 className="font-semibold uppercase text-[25px] ">Philosophy of the Department</h1>
        <p>The Department is founded on the philosophy that knowledge should be propagated and disseminated to individuals without hindrance. Teaching and research are anchored on the need of the immediate environment and the Nigeria society in general.  </p>
        </div>
<div className="flex flex-col gap-1">
    <h1 className="font-semibold uppercase text-[25px] ">Mission</h1>
    <p>The mission of the Department is thus to use teaching, research and public service to solve societal problems. In the process of learning, students are oriented to use education in the solution of practical problems confronting them and the Nigeria society. It is hoped that the graduates of the Department will be able to use their knowledge to lift the society out of its problems in Science and Technology example, technological backwardness, poor health delivery services, agricultural under-production, environmental degradation, misapplication and or under-utilisation of human and material resources, cultural disorientation etc. </p>
<p className="text-[15px] md:text-[20px] capitalize  mt-[20px] mb-[10px] font-semibold">In totality, the mission of the Department is to produce graduates who shall possess the following attributes: </p>
<p className="md:text-[15px] text-[12px] font-[400] ">1.A wide and ordered knowledge in a discipline area. </p>
<p className="md:text-[15px] text-[12px] font-[400] ">2. Ability to reason logically. </p>
<p className="md:text-[15px] text-[12px] font-[400] ">3. The ability to communicate clearly in speech and writing with confidence, numerical and computer literacy. </p>
<p className="md:text-[15px] text-[12px] font-[400] ">4.Accept moral values as honesty, humility, truthfulness and high stand in personal and professional life. </p>
<p className="md:text-[15px] text-[12px] font-[400] ">5. Acceptance of obligations and responsibilities. </p>
<p className="md:text-[15px] text-[12px] font-[400] ">6.The desire for life-long education and creativity. </p>
<p className="md:text-[15px] text-[12px] font-[400] ">7.Self-confidence and result oriented ability.  </p>
</div>
      
    </div>
</div>
        </div>
        </div>
    )
}