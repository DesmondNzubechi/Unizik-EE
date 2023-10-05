import React, { useEffect } from "react";
import { AiOutlineMail, AiFillPhone } from 'react-icons/ai';
import { IoSchoolSharp } from 'react-icons/io5';
import Chukwuma from '../../assets/alumni/Chukwuma.jpg';
import { useState  } from "react";
import Aos from "aos";

const FirstClassStudents = [
    {
        name: 'Engr. Chukwuma Ebube Miracle',
        email: 'chukwuma258@gmail.com',
        number: '09050426383',
        picture: Chukwuma,
        year: 'Class of 2022',
        state: 'Anambra',
        lga: 'Anambra',
         message: []
    }
];

export const BestGraduates = () => {
    const [fullProfile, setFullProfile] = useState({});
    const [fullProfileVisibility, setFullProfileVisibility] = useState('top-[-4000px]');
    useEffect(() => {
        Aos.init({duration: 1000})
    }, [])
    return (
        <>
        <div className="py-[100px] flex justify-center bg-slate-50 px-[20px]">
            <div>
                <div>
                    <h1 data-aos='fade-up' aos-data-duration='2000' className="text-center uppercase text-[20px] md:text-[25px] font-bold my-[30px] ">meet Our past best graduating students 🏅</h1>
                    <div className="grid grid-cols-1 gap-[40px] md:grid-cols-2 lg:grid-cols-3">
                        {
                            FirstClassStudents.map(info => {
                                return <div data-aos='fade-up' aos-data-duration='2000' className="shadow-xl w-fit relative   rounded-[10px]">
                                    <div className="max-w-[350px] relative">
                                        <img src={info.picture} className="rounded-[10px]" alt="" />
                                        <button onClick={() => {
                      setFullProfile(info);
                      setFullProfileVisibility('top-0')
                    }} className="bg-yellow-500 text-slate-50 text-center absolute bottom-0 capitalize font-semibold hover:bg-slate-900 rounded left-0 px-2 p-1 w-fit">read message</button>
                                   
                                    </div> 
                                    <div className="py-[10px] px-[10px] " >
                                        <span className="flex flex-row text-[12px] font-semibold  text-slate-700 items-center gap-2"><h1 className="font-bold text-slate-900 text-[13px] uppercase md:text-[15px]">{info.name}</h1> </span>
                                        <h1 className="font-semibold text-slate-500 text-[12px]">Best Graduating Student 🏅</h1>
                                        <span className="flex flex-row text-[12px] font-semibold  text-slate-700 items-center gap-2"><h1 className="font-bold text-slate-900 text-[13px] md:text-[15px]"><AiOutlineMail/></h1> {info.email}</span>
                                        <span className="flex flex-row text-[12px] font-semibold  text-slate-700 items-center gap-2"><h1 className="font-bold text-slate-900 text-[13px] md:text-[15px]"><AiFillPhone/></h1> {info.number}</span>
                                        <span className="flex flex-row text-[12px] font-semibold  text-slate-700 items-center gap-2"><h1 className="font-bold text-slate-900 text-[13px] md:text-[15px]"><IoSchoolSharp /></h1>{info.year} </span>
                                        </div>
                                </div>
                            })
                        }
                    </div>
                </div>
</div>
            </div>





            <span onClick={(e) => {
                if (e.target.tagName === 'SPAN') {
                    setFullProfileVisibility('top-[-4000px]');
                }
            }} className={`fixed ${fullProfileVisibility} transition ease-in left-o flex justify-center right-0 bottom-0 w-full h-full p-[20px] bg-Tp z-[100]`}>
  
  <div className="bg-slate-50 p-5 py-[30px] relative flex flex-col gap-5 rounded overflow-y-auto">
    <p onClick={() => setFullProfileVisibility('top-[-4000px]')} className="absolute top-[0] shadow-2xl cursor-pointer right-[0] text-yellow-500 bg-slate-900 active:text-red-500 px-[10px] text-[20px] py-[2px]   ">X</p>
   
    <div className="flex flex-col md:flex-row gap-5 ">
    <div className="flex flex-col text-start items-start">
    <div className="max-w-[300px] ">
      <img src={fullProfile?.picture} alt="" />
    </div>
    <div> <span className="flex flex-row text-[12px] font-semibold  text-slate-700 items-center gap-2"><h1 className="font-bold text-slate-900 text-[15px] uppercase md:text-[15px]">{fullProfile.name}</h1> </span>
                                        <h1 className="font-semibold text-slate-500 text-[12px]">Best Graduating Student 🏅</h1>
                                        <span className="flex flex-row text-[12px] font-semibold  text-slate-700 items-center gap-2"><h1 className="font-bold text-slate-900 text-[13px] md:text-[15px]"><AiOutlineMail/></h1> {fullProfile.email}</span>
                                        <span className="flex flex-row text-[12px] font-semibold  text-slate-700 items-center gap-2"><h1 className="font-bold text-slate-900 text-[13px] md:text-[15px]"><AiFillPhone/></h1> {fullProfile.number}</span>
                                        <span className="flex flex-row text-[12px] font-semibold  text-slate-700 items-center gap-2"><h1 className="font-bold text-slate-900 text-[13px] md:text-[15px]"><IoSchoolSharp /></h1>{fullProfile.year} </span>
                                        <span className="flex flex-row text-[12px] font-semibold  text-slate-700 items-center gap-2"><h1 className="font-bold text-slate-900 text-[13px] md:text-[15px]">State Of Origin:</h1> {fullProfile.state}</span>
                                        <span className="flex flex-row text-[12px] font-semibold  text-slate-700 items-center gap-2"><h1 className="font-bold text-slate-900 text-[13px] md:text-[15px]">LGA:</h1>{fullProfile.lga} </span>
                                         
                                          
                            </div>
    </div>
    <div className="max-w-[450px] flex-col gap-4  ">
      <h1 className="font-semibold uppercase text-[20px] ">Message and encouragement to our students</h1>
      <div className="text-slate-700 flex flex-col gap-3 py-[30px] ">
                              {fullProfile?.message?.map(msg => { return  <p className="md:text-[15px] text-[12px]" >{fullProfile?.message ? 'MESSAGE COMING SOON': msg}</p>})}
      </div>
    </div>
    </div>
  </div>

</span>
            </>
    )
}