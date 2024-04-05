import React, { useEffect } from "react";
import { AiOutlineMail, AiFillPhone } from 'react-icons/ai';
import { IoSchoolSharp } from 'react-icons/io5';
import presidoImg from '../../assets/ExcoImages/UKEKWE CHIAMAKA - president.jpg';
import VpImg from '../../assets/ExcoImages/NWOSU KENNETH - vision president.jpg';
import secGenImg from '../../assets/ExcoImages/ADAZE -sec gen.jpg';
import treasurerImg from '../../assets/ExcoImages/ENEMOH PRESCIOS -treasurer.jpg';
import dos1Img from '../../assets/ExcoImages/UDEAFOR EMMANUEL - Director of sports.jpg';
import dos2Img from '../../assets/ExcoImages/ONEULO CHINAZA - DOS1.jpg';
import PROImg from '../../assets/ExcoImages/SAMUEL GIDEON - PRO .jpg';
import provostImg from '../../assets/ExcoImages/DENNIS UCHENNA - provost.jpg'
import Aos from "aos";
const courseRepInfo = [
    {
        name: 'COMR. UKEKWE CHIAMAKA PRECIOUS ',
        email: 'Amakaukekwe0@gmail.com',
        number: '07011050418',
        picture: presidoImg,
        level: 'Final Year',
        position: 'Departmental President'
    },
    {
        name: 'COMR. NWOSU CHINUALUMOGU KENNETH',
        email: 'chinuakenneth668@gmail.com',
        number: '08039881477',
        picture: VpImg,
        level: '300l',
        position: 'Vice President'
    },
    {
        name: 'COMR. NWAJIOBI ADAEZE FAVOUR',
        email: 'nwajiobiadaeze3@gmail.com',
        number: '08108606618',
        picture: secGenImg,
        level: '300l',
        position: 'Secretary General'
    },
    {
        name: 'COMR. ENEMOH PRECIOUS CHIMELU',
        email: 'preciousenemoh.pe@gmail.com',
        number: '09157018267',
        picture: treasurerImg,
        level: '300l',
        position: 'Treasurer'
    },
    {
        name: 'COMR. Udeafor Emmanuel Somtochuwku',
        email: 'udeaforemmanuel8@gmail.com',
        number: '09165587195',
        picture: dos1Img,
        level: '200l',
        position: 'Director Of Sports (DOS1)'
    },
    {
        name: 'COMR. ONYEULO PERPETUAL CHINAZA',
        email: 'onyeperpetual83@gmail.com',
        number: '09159108915',
        picture: dos2Img,
        level: '300l',
        position: 'Director Of Socials(DOS2)'
    },
    {
        name: 'COMR. SAMUEL GIDEON',
        email: 'okekesamuelayomikun1@gmail.com',
        number: '07064419616',
        picture: PROImg,
        level: '100l',
        position: 'Public Relation Officer (PRO)'
    },
    {
        name: 'COMR. DENNIS UCHENNA OLUEBUBECHUKWU',
        email: 'dennisuchenna123@gmail.com',
        number: '09034865501',
        picture: provostImg,
        level: '100l',
        position: 'Provost'
    },
];

export const DeptExcos = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, [])
    return (
        <div className="py-[100px] flex justify-center bg-slate-50 px-[20px]">
            <div>
                <div>
                    <h1 data-aos='fade-up' aos-data-duration='2000' className="text-center uppercase text-[20px] md:text-[25px] font-bold my-[30px] ">Departmental Students Executives</h1>
                    <div className="grid grid-cols-1 gap-[40px] md:grid-cols-2 lg:grid-cols-3">
                        {
                            courseRepInfo.map(info => {
                                return <div data-aos='fade-up' aos-data-duration='2000' className="shadow-xl w-fit   rounded-[10px]">
                                    <div className="max-w-[350px]">
                                    <img src={info.picture} className="rounded-[10px]" alt="" />
                                    </div>
                                    <div className="py-[10px] px-[10px] " >
                                        <span className="flex flex-row text-[12px] font-semibold  text-slate-700 items-center gap-2"><h1 className="font-bold text-slate-900 text-[13px] uppercase md:text-[15px]">{info.name}</h1> </span>
                                        <h1 className="font-semibold text-slate-500 text-[15px]">{info.position}</h1>
                                        <span className="flex flex-row text-[12px] font-semibold  text-slate-700 items-center gap-2"><h1 className="font-bold text-slate-900 text-[13px] md:text-[15px]"><AiOutlineMail/></h1> {info.email}</span>
                                        <span className="flex flex-row text-[12px] font-semibold  text-slate-700 items-center gap-2"><h1 className="font-bold text-slate-900 text-[13px] md:text-[15px]"><AiFillPhone/></h1> {info.number}</span>
                                        <span className="flex flex-row text-[12px] font-semibold  text-slate-700 items-center gap-2"><h1 className="font-bold text-slate-900 text-[13px] md:text-[15px]"><IoSchoolSharp/></h1> {info.level} student</span>

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