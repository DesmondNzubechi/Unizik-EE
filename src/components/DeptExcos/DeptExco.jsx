import React, { useEffect } from "react";
import { AiOutlineMail, AiFillPhone } from 'react-icons/ai';
import { IoSchoolSharp } from 'react-icons/io5';
import presidoImg from '../../assets/ExcoImages/ezekiel1.jpg';
import VpImg from '../../assets/ExcoImages/obikc.jpg';
import secGenImg from '../../assets/ExcoImages/Elvisio1.jpg';
import finSecImg from '../../assets/ExcoImages/odinaka.jpg';
import treasurerImg from '../../assets/ExcoImages/emeka.jpg';
import assistSecGenImg from '../../assets/ExcoImages/onyeulo.jpg';
import dos1Img from '../../assets/ExcoImages/uzoekwe chinaza.jpg';
import dos2Img from '../../assets/ExcoImages/onuoha chiamaka.jpg';
import PROImg from '../../assets/ExcoImages/sammie.jpg';
import provostImg from '../../assets/ExcoImages/sobenna.jpg';
import Aos from "aos";
const courseRepInfo = [
    {
        name: 'Comr. Agina Ezekiel Soupluchi ',
        email: 'agina.ezekiel@gmail.com',
        number: '08098066766',
        picture: presidoImg,
        level: 'Final Year',
        position: 'Departmental President'
    },
    {
        name: 'Comr. Obi Kenechukwu',
        email: 'obikene316@gmail.com',
        number: '08039881477',
        picture: VpImg,
        level: '300l',
        position: 'Vice President'
    },
    {
        name: 'Comr. Onunwa Ebere Elvis',
        email: 'eo.elvis@stu.unizik.edu.ng',
        number: '07052065354',
        picture: secGenImg,
        level: '300l',
        position: 'Secretary General'
    },
    {
        name: 'Comr. Okafor Odinakachukwu Desmond',
        email: 'desmondchef999@gmail.com',
        number: '08117512508',
        picture: finSecImg,
        level: '200l',
        position: 'Financial Secretary'
    },
    {
        name: 'Comr. Okafor Emeka',
        email: 'Emmyfresh999@gmail.com',
        number: '09134039101',
        picture: treasurerImg,
        level: '300l',
        position: 'Treasurer'
    },
    {
        name: 'Comr. ONYEULO PERPETUAL CHINAZA',
        email: 'onyeperpetual83@gmail.com',
        number: '09061701409',
        picture: assistSecGenImg,
        level: '200l',
        position: 'Assistant Secretary General'
    },
    {
        name: 'Comr. UZOEKWE CHINAZA HENRY',
        email: 'chinazauzoekwe5@gmail.com',
        number: '07015740619',
        picture: dos1Img,
        level: '200l',
        position: 'Director Of Sports (DOS1)'
    },
    {
        name: 'Comr. ONUOHA FAVOUR CHIAMAKA',
        email: 'fchiamaka2002@gmail.com',
        number: '09159108915',
        picture: dos2Img,
        level: '200l',
        position: 'Director Of Socials(DOS2)'
    },
    {
        name: 'Comr. Samuel .C. Uzoamaka',
        email: 'nechesamuel114@gmail.com',
        number: '08085805925',
        picture: PROImg,
        level: '100l',
        position: 'Public Relation Officer (PRO)'
    },
    {
        name: 'Comr. EKWUEME SOBENNA SYBIL',
        email: 'provost@gmail.com',
        number: '09156414196',
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