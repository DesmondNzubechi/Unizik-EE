import React, { useEffect } from "react";
import  eloka from '../../assets/CRImages/eloka.jpg';
import  justusPic  from '../../assets/CRImages/Justice.jpg';
import nzubechukwuPic from '../../assets/CRImages/B2R1.jpg';
import daberePic from '../../assets/CRImages/Dabere1.jpg';
import wisdomPic from  '../../assets/CRImages/wisdom.jpg'
import { AiOutlineMail, AiFillPhone } from 'react-icons/ai';
import { IoSchoolSharp } from 'react-icons/io5';
import Aos from "aos";

const courseRepInfo = [
    {
        name: 'Ezeadu Dabere Assumpta',
        email: 'ezeadudabere@gmail.com',
        number: '08035011681',
        picture: daberePic,
        level: 'Final Year'
    },
    {
        name: 'Abugu Desmond Nzubechukwu',
        email: 'desmondnzubechukwu1@gmail.com',
        number: '07084183611',
        picture: nzubechukwuPic,
        level: '400l'
    },
    {
        name: 'OKOLI WISDOM CHUKWUEMEKA',
        email: 'okoliwisdom35@gmail.com',
        number: '08126169285',
        picture: wisdomPic,
        level: '300l'
    },
    {
        name: 'ARINZE CHINECHEREM JUSTUS',
        email: ' arinzejustus59@gmail.com',
        number: '09072106809',
        picture: justusPic,
        level: '200l'
    },
    {
        name: 'OKORO OLISAELOKA EMMANUEL',
        email: 'okoroemmanuel018@gmail.com',
        number: '08123374435',
        picture: eloka,
        level: '100l'
    },
];

export const CourseReps = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, []);
    return (
        <div className="py-[100px] flex justify-center bg-slate-50 px-[20px]">
            <div>
                <div>
                    <h1 data-aos='fade-up' aos-data-duration='2000' className="text-center uppercase text-[20px] md:text-[25px] font-bold my-[30px] ">Meet our class reps</h1>
                    <div className="grid grid-cols-1 gap-[40px] md:grid-cols-2 lg:grid-cols-3">
                        {
                            courseRepInfo.map(info => {
                                return <div data-aos='fade-up' aos-data-duration='2000' className="shadow-xl w-fit   rounded-[10px]">
                                    <div className="max-w-[350px]">
                                    <img src={info.picture} className="rounded-[10px]" alt="" />
                                    </div>
                                    <div className="py-[10px] px-[10px] " >
                                        <span className="flex flex-row text-[12px] font-semibold  text-slate-700 items-center gap-2"><h1 className="font-bold text-slate-900 text-[13px] uppercase md:text-[15px]">{info.name}</h1> </span>
                                        <span className="flex flex-row text-[12px] font-semibold  text-slate-700 items-center gap-2"><h1 className="font-bold text-slate-900 text-[13px] md:text-[15px]"><AiOutlineMail/></h1> {info.email}</span>
                                        <span className="flex flex-row text-[12px] font-semibold  text-slate-700 items-center gap-2"><h1 className="font-bold text-slate-900 text-[13px] md:text-[15px]"><AiFillPhone/></h1> {info.number}</span>
                                        <span className="flex flex-row text-[12px] font-semibold  text-slate-700 items-center gap-2"><h1 className="font-bold text-slate-900 text-[13px] md:text-[15px]"><IoSchoolSharp/></h1> {info.level} Course Rep</span>

                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
</div>
        </div>
    )
}