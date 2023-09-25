import React from "react";
import {AiFillEye} from 'react-icons/ai';
import { Link } from "react-router-dom";
import learningImg from '../../assets/images/reading.avif';
import learningImg1 from '../../assets/images/reading.avif';
import learningImg2 from '../../assets/images/reading6.avif';
import learningImg3 from '../../assets/images/reading5.avif';
import learningImg4 from '../../assets/images/reading7.avif';
import learningImg5 from '../../assets/images/reading8.avif';

const levelCourseoutline = [
{
    level : 100,
    levelLink: '/level100',
    levelImg: learningImg1,
},
{
    level : 200,
    levelLink: '/level200',
    levelImg: learningImg2,
},
{
    level : 300,
    levelLink: '/level300',
    levelImg: learningImg3,
},
{
    level : 400,
    levelLink: '/level400',
    levelImg: learningImg4,
},
{
    level : 500,
    levelLink: '/level500',
    levelImg: learningImg5,
},
];

export const Courses = () => {
    return <div className="pt-[100px] pb-[50px] flex flex-row justify-center px-[30px] ">
        <div className="">
            <div className="flex flex-row my-[30px] justify-center">
            <div className="text-center  max-w-[600px] ">
            <h1 className="uppercase font-bold md:col-span-2  text-center text-[20px] md:text-[30px] ">course outlines</h1>
            <p className="text-center nd:text-[20px] text-[15px]  text-slate-700 font-semibold ">Here, you will find detailed information about the courses offered at the each level, providing you with a clear understanding of the curriculum and learning objectives for each subject.</p>
            </div>
            </div>
            <div className="flex flex-row justify-center">
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] ">
            {levelCourseoutline.map(courseOutline => {

 return <Link to={courseOutline.levelLink} className="flex flex-row justify-center">
 <div data-aos='zoom-in-up' className="max-w-[450px] bg-white shadow-xl hover:shadow-2xl hover:border flex flex-col justify-center items-center gap-2 rounded text-center  p-5 ">
<div className="max-w-[150px]"><img src={courseOutline.levelImg} alt="" /></div>
  <h1 className="font-bold uppercase text-[15px] md:text-[20px] ">{courseOutline.level} Level <br /> course outlines</h1>
  <p className="font-fonty text-[12px] md:text-[15px] ">we have compiled a collection of course outlines specifically tailored to {courseOutline.level}  level students, ensuring that you have all the information you need to make informed decisions about your academic journey.</p>
</div>
 {/* <BsFillFolderSymlinkFill className="text-[40px] text-yellow-500 font-semibold "/>*/}
</Link >
            })}
           
        </div>
        </div>
    </div>  
    </div>
}