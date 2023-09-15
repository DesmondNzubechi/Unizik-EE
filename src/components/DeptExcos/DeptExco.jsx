import React from "react";
import  samPic from '../../assets/CRImages/Samuel.jpg';
import  justusPic  from '../../assets/CRImages/Justice.jpg';
import nzubechukwuPic from '../../assets/CRImages/Nzubechukwu.png';
import daberePic  from '../../assets/CRImages/Dabere.png';
import { AiOutlineMail, AiFillPhone } from 'react-icons/ai';
import { IoSchoolSharp } from 'react-icons/io5';

const courseRepInfo = [
    {
        name: 'Samuel Nonso Nonyelu',
        email: 'nonsononyelu@gmail.com',
        number: '09081996708',
        picture: samPic,
        level: 'Final Year',
        position: 'President'
    },
    {
        name: 'Ezeadu Dabere Asumpta',
        email: 'Dabere@gmail.com',
        number: '+2348035011681',
        picture: daberePic,
        level: '400l',
        position: 'Vice President'
    },
    {
        name: 'Abugu Desmond Nzubechukwu',
        email: 'desmondnzubechukwu1@gmail.com',
        number: '07084183611',
        picture: nzubechukwuPic,
        level: '300l',
        position: 'Secretary General'
    },
    {
        name: 'OKOLI WISDOM CHUKWUEMEKA',
        email: 'okoliwisdom35@gmail.com',
        number: '08126169285',
        picture: samPic,
        level: '200l',
        position: 'President'
    },
    {
        name: 'ARINZE CHINECHEREM JUSTUS',
        email: ' arinzejustus59@gmail.com',
        number: '09072106809',
        picture: justusPic,
        level: '100l',
        position: 'President'
    },
    {
        name: 'ARINZE CHINECHEREM JUSTUS',
        email: ' arinzejustus59@gmail.com',
        number: '09072106809',
        picture: justusPic,
        level: '100l',
        position: 'President'
    },
    {
        name: 'ARINZE CHINECHEREM JUSTUS',
        email: ' arinzejustus59@gmail.com',
        number: '09072106809',
        picture: justusPic,
        level: '100l',
        position: 'President'
    },
];

export const DeptExcos = () => {
    return (
        <div className="py-[100px] flex justify-center bg-slate-50 px-[20px]">
            <div>
                <div>
                    <h1 className="text-center uppercase text-[20px] md:text-[25px] font-bold my-[30px] ">Departmental Students Executives</h1>
                    <div className="grid grid-cols-1 gap-[40px] md:grid-cols-2 lg:grid-cols-3">
                        {
                            courseRepInfo.map(info => {
                                return <div className="shadow-xl w-fit   rounded-[10px]">
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