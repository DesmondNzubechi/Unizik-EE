import React, { useEffect } from "react";
import { AiOutlineMail, AiFillPhone } from 'react-icons/ai';
import { IoSchoolSharp } from 'react-icons/io5';
import ose from '../../assets/alumni/ose.jpg';
import michael from '../../assets/alumni/michael.jpg';
import { useState  } from "react";
import Aos from "aos";

const ExStudentLeaders = [
    {
        name: 'Engr. Ose Ifeanyi J. Peps',
        email: 'oseifeanyipeps@gmail.com',
        number: '09060704266',
        picture: ose,
        year: 'Class of 2021',
        state: 'Ebonyi',
        lga: 'Ngbo/Ohaukwu',
        position: 'Departmental President - 2020/2021',
         message: ['Dear Students and Future Leaders, As proud alumni of this esteemed Department, I stand before you as living testaments to the transformative power of education and resilience. I understand the challenges and opportunities that lie ahead, and I am here to offer guidance and support on your journey.', 'Focus: A Key to Achieving Your Dreams. In your pursuit of knowledge and personal growth, remember that success often hinges on your ability to maintain unwavering focus. The world is brimming with distractions, and it is easy to lose sight of your goals. However, it is our shared belief that by concentrating your efforts, nurturing your passions, and sidestepping the allure of momentary distractions, you can achieve greatness. Embrace focus as your ally, and watch as it illuminates the path to your dreams.','Hard Work: The Foundation of Excellence. In the grand tapestry of life, hard work is the thread that binds success. It is through diligence, dedication, and the pursuit of excellence that we achieve remarkable feats. As alumni, I can attest that kindness and compassion also flow naturally from a heart dedicated to hard work. As you labor towards your aspirations, remember that every ounce of effort you invest contributes to your growth, your character, and the incredible future that awaits you.', 'Hope: The Eternal Light in Your Journey. In the face of adversity, uncertainty, and the challenges that may seem insurmountable, I encourage you to hold onto hope. It is hope that fuels our spirits when darkness looms, and it is hope that reminds us that even in the most trying moments, a brighter day awaits. Your efforts, late nights, and sacrifices are not in vain; they are stepping stones toward your goals. With hope as your guiding star, you will continue to evolve and eventually shine with the brilliance of your potential. Welcome the challenges that lie ahead, for they are opportunities in disguise. Embrace your education, harness your passion, and stay dedicated to your dreams. In unity and determination, you will carve a future filled with success and purpose.', 'In Conclusion, As alumni of this institution, we are committed to supporting your journey towards excellence. I share these principles of focus, hard work, and hope not as mere words but as guiding lights to illuminate your path. I believe in your potential, and I look forward to witnessing your achievements and contributions to our shared community and the world at large.']
       
    },
    {
        name: 'Engr. Michael Ikechukwu Michael',
        email: 'ikechukwumichael1122@gmail.com',
        number: '08161219798',
        picture: michael,
        year: 'Class of 2022',
        state: 'Anambra',
        lga: '',
        position: 'Departmental President - 2021/2022',
        message: []
       
    },
];

export const ExDeptExcos = () => {
    useEffect(() => {
        Aos.init({duration: 1000})
    }, [])
    const [fullProfile, setFullProfile] = useState({});
  const [fullProfileVisibility, setFullProfileVisibility] = useState('top-[-4000px]');
    return (
        <>
        <div className="py-[100px] flex justify-center bg-slate-50 px-[20px]">
            <div>
                <div>
                    <h1 data-aos='fade-up' aos-data-duration='2000' className="text-center uppercase text-[20px] md:text-[25px] font-bold my-[30px] ">Past Departmental Presidents</h1>
                    <div className="grid grid-cols-1 gap-[40px] md:grid-cols-2 lg:grid-cols-3">
                        {
                            ExStudentLeaders.map(info => {
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
                                        <h1 className="font-semibold text-slate-500 text-[12px]">{info.position}</h1>
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
                                        <h1 className="font-semibold text-slate-500 text-[12px]">{fullProfile.position}</h1>
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
                              {fullProfile?.message?.map(msg => { return  <p className="md:text-[15px] text-[12px]" >{!msg? 'MESSAGE COMING SOON!': msg}</p>})}
      </div>
    </div>
    </div>
  </div>

</span>
            </>
    )
}