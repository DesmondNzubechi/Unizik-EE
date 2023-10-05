import React, { useEffect } from "react";
import tools from '../../assets/images/eePhylosophy.avif';
import tool1 from '../../assets/images/lightbulb2.jpg';
import tool2 from '../../assets/images/eemission1.avif';
import Aos from "aos";


export const FullAbout = () => {
    useEffect(() => {
        Aos.init();
    })
    return(
        <div className="px-[20px] pb-[100px] justify-center flex flex-col gap-[20px] pt-[150px]">

<h1 data-aos='fade-up' aos-data-duration='2000' className="md:text-[25px] text-[20px] border-b-[7px] border-b-yellow-500 w-fit  font-bold uppercase rounded p-[2px] ">About ee unizik</h1>
        <div data-aos='fade-up' aos-data-duration='2000' className=" flex flex-col gap-[50px] md:flex-row items-center py-[50px] ">
<div className=" flex flex-col max-w-[600px] gap-[20px]  ">
<h2 className="md:text-[30px] text-[20px] font-bold uppercase ">History Of Electrical Engineering NAU</h2>
    <p className="md:text-[15px] text-[12px] font-[400] ">Anambra State University of Technology (ASUTECH) was established by law in July, 1980 as the first indigenous University of Technology in Nigeria. From the onset, two campuses were opened simultaneously at Enugu and Awka. The Department of Electrical/Electronic and Computer Engineering was sited at the Enugu Campus during the 1980/81session. With the creation of Enugu State out of the old Anambra State in August, 1991, the ASUTECH was re-established at Awka with the former curriculum of ASUTECH. In 1990 the University was renamed Nnamdi Azikiwe University. In 1992, the Federal Government of Nigeria took over the University. Earlier than then, the programme of the Department had an initial accreditation at ASUTECH Enugu. </p>
  
</div>
<div className="max-w-[600px] flex flex-col gap-5  ">
    <img src={tool1} alt="" className="rounded" />
                </div>
    <div className="flex flex-col gap-5">
     
    </div>
            </div>
            <div data-aos='fade-up' aos-data-duration='2000' className="flex flex-col py-[100px] gap-5">
            <h1 className="font-bold text-[20px] md:text-[30px] uppercase">A look at the Headship on the board shows the sequence as follows: </h1>
     <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 ">
        <li className="md:text-[15px] font-[500] text-[12px] font-bold ">1. Prof. C. U. Mezi 1992 – 1993</li>
        <li className="md:text-[15px] font-[500] text-[12px] font-bold ">2. Prof. Dr. G. C. Chidolue 1993 – 1995</li>
        <li className="md:text-[15px] font-[500] text-[12px] font-bold ">3. Prof E. O. Okoye 1995 – 1996</li>
        <li className="md:text-[15px] font-[500] text-[12px] font-bold ">4. Prof. Dr. G. C. Chidolue 1996 – 1997</li>
        <li className="md:text-[15px] font-[500] text-[12px] font-bold ">5. Prof. C. U. Mezi 1997 – 1998</li>
        <li className="md:text-[15px] font-[500] text-[12px] font-bold ">6. Prof. Dr. G. C. Chidolue 1998 – 2000</li>
        <li className="md:text-[15px] font-[500] text-[12px] font-bold ">7. Prof E. O. Okoye 2000 – 2002</li>
        <li className="md:text-[15px] font-[500] text-[12px] font-bold ">8. Prof. C. U. Mezi 2002 – 2005</li>
        <li className="md:text-[15px] font-[500] text-[12px] font-bold ">9. Prof. F. O. Enemuoh 2005 – 2011</li>
        <li className="md:text-[15px] font-[500] text-[12px] font-bold ">10. Prof M. N. Eleanya 2011 – 2012 </li>
        <li className="md:text-[15px] font-[500] text-[12px] font-bold ">11. Prof. F. O. Enemuoh 2012 – 2013</li>
        <li className="md:text-[15px] font-[500] text-[12px] font-bold ">12. Prof. Dr. J. C. Onuegbu 2013 – 2019 </li>
        <li className="md:text-[15px] font-[500] text-[12px] font-bold ">13. Prof. Dr. A. E. Anazia 2019 – 2022</li>
        <li className="md:text-[15px] font-[500] text-[12px] font-bold ">14. Prof. Dr. Ezechukwu Oseloka 2022 to Date.</li>
    </ol>
            </div>
            <div data-aos='fade-up' aos-data-duration='2000' className="flex md:flex-row-reverse pb-[100px] flex-col gap-5 items-center">
            <div className=" max-w-[700px] flex flex-col gap-2">
        <h1 className="font-semibold uppercase text-[20px] md:text-[30px] ">Philosophy of the Department</h1>
        <p className="md:text-[20px] text-[12px] font-[400] ">The Department is founded on the philosophy that knowledge should be propagated and disseminated to individuals without hindrance. Teaching and research are anchored on the need of the immediate environment and the Nigeria society in general.  </p>
                </div>
                <div className="max-w-[600px] flex flex-col gap-5  ">
    <img src={tools} alt="" className="rounded" />
                </div>
            </div>
            <div data-aos='fade-up' aos-data-duration='2000' className="flex flex-col gap-5 pb-[50px] items-center md:flex-row">
            <div className="flex flex-col max-w-[700px] gap-1">
    <h1 className="font-semibold uppercase text-[30px] ">Mission</h1>
    <p className="md:text-[15px] text-[12px] font-[400] ">The mission of the Department is thus to use teaching, research and public service to solve societal problems. In the process of learning, students are oriented to use education in the solution of practical problems confronting them and the Nigeria society. It is hoped that the graduates of the Department will be able to use their knowledge to lift the society out of its problems in Science and Technology example, technological backwardness, poor health delivery services, agricultural under-production, environmental degradation, misapplication and or under-utilisation of human and material resources, cultural disorientation etc. </p>
<p className="text-[12px] md:text-[15px] capitalize  mt-[20px] mb-[10px] font-semibold">In totality, the mission of the Department is to produce graduates who shall possess the following attributes: </p>
<p className="md:text-[15px] text-[12px] font-[400] ">1.A wide and ordered knowledge in a discipline area. </p>
<p className="md:text-[15px] text-[12px] font-[400] ">2. Ability to reason logically. </p>
<p className="md:text-[15px] text-[12px] font-[400] ">3. The ability to communicate clearly in speech and writing with confidence, numerical and computer literacy. </p>
<p className="md:text-[15px] text-[12px] font-[400] ">4.Accept moral values as honesty, humility, truthfulness and high stand in personal and professional life. </p>
<p className="md:text-[15px] text-[12px] font-[400] ">5. Acceptance of obligations and responsibilities. </p>
<p className="md:text-[15px] text-[12px] font-[400] ">6.The desire for life-long education and creativity. </p>
<p className="md:text-[15px] text-[12px] font-[400] ">7.Self-confidence and result oriented ability.  </p>
            </div>
            <div className="max-w-[600px] flex flex-col gap-5  ">
    <img src={tool2} alt="" className="rounded" />
                </div>     
            </div>
            </div>
      
    )
}