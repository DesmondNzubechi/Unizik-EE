import React, { useEffect } from "react";
import Nzubechukwu from '../../assets/CRImages/B2R1.jpg';
import dave from '../../assets/dave.jpg';
import { AiOutlineMail, AiFillPhone } from 'react-icons/ai';
import { IoSchoolSharp } from 'react-icons/io5';
import { BiWorld } from 'react-icons/bi';
import Aos from "aos";
const ExStudentLeaders = [
    {
        name: 'Abugu Desmond Nzubechukwu',
        email: 'desmondnzubechukwu1gmail.com',
        number: '07084183611',
        picture: Nzubechukwu,
        level: '300l student',
        position: 'Web developer',
        link: 'https://www.nzubechukwu.com/',
        linkName: 'www.nzubechukwu.com'
    },
    {
        name: 'okonkwo david uchenna',
        email: 'davheeduchenna@gmail.com',
        number: '09154064012',
        picture: dave,
        level: '300l student',
        position: 'web developer',
        link: 'https://github.com/Davheed2',
        linkName: 'https://github.com/Davheed2'
    },
];

export const ProjectTeam = () => {
    useEffect(() => {
        Aos.init();
    })
    return (
        <div className="py-[100px] flex justify-center bg-slate-50 px-[20px]">
            <div>
                <div>
                    <div data-aos='fade-up' aos-data-duration='2000' className="my-[30px]">
                    <h1 className="text-center uppercase text-[20px] md:text-[25px] font-bold  ">meet the team behind ee-unizik</h1>
                    <p className="text-center font-semibold text-slate-700 text-[15px] md:text-[20px]">Below are the team that built this website </p>
                    </div>
                    <div className="grid grid-cols-1 gap-[40px] md:grid-cols-2 lg:grid-cols-2">
                        {
                            ExStudentLeaders.map(info => {
                                return <div data-aos='fade-up' aos-data-duration='2000' className="shadow-xl w-fit   rounded-[10px]">
                                    <div className="max-w-[350px]">
                                    <img src={info.picture} className="rounded-[10px]" alt="" />
                                    </div> 
                                    <div className="py-[10px] px-[10px] " >
                                        <span className="flex flex-row text-[12px] font-semibold  text-slate-700 items-center gap-2"><h1 className="font-bold text-slate-900 text-[13px] uppercase md:text-[15px]">{info.name}</h1> </span>
                                        <h1 className="font-semibold text-slate-500 text-[15px]">{info.position}</h1>
                                        <span className="flex flex-row text-[12px] font-semibold  text-slate-700 items-center gap-2"><h1 className="font-bold text-slate-900 text-[13px] md:text-[15px]"><AiOutlineMail/></h1> {info.email}</span>
                                        <span className="flex flex-row text-[12px] font-semibold  text-slate-700 items-center gap-2"><h1 className="font-bold text-slate-900 text-[13px] md:text-[15px]"><AiFillPhone/></h1> {info.number}</span>
                                       {/* <span className="flex flex-row text-[12px] font-semibold  text-slate-700 items-center gap-2"><h1 className="font-bold text-slate-900 text-[13px] md:text-[15px]"><IoSchoolSharp/></h1>{info.level} </span>*/}
                                        <span className="flex flex-row text-[12px] font-semibold  text-slate-700 items-center gap-2"><a href={info.link} className="font-bold flex items-center gap-2 text-slate-900 text-[13px] md:text-[15px]"><BiWorld/>{info.linkName}</a> </span>
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