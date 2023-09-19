import React from "react";
import  samPic from '../../assets/CRImages/Samuel.jpg';
import  justusPic  from '../../assets/CRImages/Justice.jpg';
import daberePic  from '../../assets/CRImages/Dabere.png';
import { AiOutlineMail, AiFillPhone } from 'react-icons/ai';
import { IoSchoolSharp } from 'react-icons/io5';
import presidoImg from '../../assets/ExcoImages/ezekiel.jpg';
import VpImg from '../../assets/ExcoImages/obikc.jpg';
import secGenImg from '../../assets/ExcoImages/Elvisio.jpg';
import finSecImg from '../../assets/ExcoImages/odinaka.jpg';
import treasurerImg from '../../assets/ExcoImages/emeka.jpg';
import assistSecGenImg from '../../assets/ExcoImages/onyeulo.jpg';
import dos1Img from '../../assets/ExcoImages/uzoekwe chinaza.jpg';
import dos2Img from '../../assets/ExcoImages/onuoha chiamaka.jpg';
import PROImg from '../../assets/ExcoImages/sammie.jpg';
import ose from '../../assets/alumni/ose.jpg';


const ExStudentLeaders = [
    {
        name: 'Engr. Ose Ifeanyi J. Peps',
        email: 'oseifeanyipeps@gmail.com',
        number: '09060704266',
        picture: ose,
        year: 'Class of 2021',
        position: 'Departmental President - 2020/2021'
    },
];

export const ExDeptExcos = () => {
    return (
        <div className="py-[100px] flex justify-center bg-slate-50 px-[20px]">
            <div>
                <div>
                    <h1 className="text-center uppercase text-[20px] md:text-[25px] font-bold my-[30px] ">Past Departmental Presidents</h1>
                    <div className="grid grid-cols-1 gap-[40px] md:grid-cols-2 lg:grid-cols-3">
                        {
                            ExStudentLeaders.map(info => {
                                return <div className="shadow-xl w-fit   rounded-[10px]">
                                    <div className="max-w-[350px]">
                                    <img src={info.picture} className="rounded-[10px]" alt="" />
                                    </div> 
                                    <div className="py-[10px] px-[10px] " >
                                        <span className="flex flex-row text-[12px] font-semibold  text-slate-700 items-center gap-2"><h1 className="font-bold text-slate-900 text-[13px] uppercase md:text-[15px]">{info.name}</h1> </span>
                                        <h1 className="font-semibold text-slate-500 text-[15px]">{info.position}</h1>
                                        <span className="flex flex-row text-[12px] font-semibold  text-slate-700 items-center gap-2"><h1 className="font-bold text-slate-900 text-[13px] md:text-[15px]"><AiOutlineMail/></h1> {info.email}</span>
                                        <span className="flex flex-row text-[12px] font-semibold  text-slate-700 items-center gap-2"><h1 className="font-bold text-slate-900 text-[13px] md:text-[15px]"><AiFillPhone/></h1> {info.number}</span>
                                        <span className="flex flex-row text-[12px] font-semibold  text-slate-700 items-center gap-2"><h1 className="font-bold text-slate-900 text-[13px] md:text-[15px]"><IoSchoolSharp/></h1>{info.year} </span>
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