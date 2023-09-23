import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { AiOutlineUser } from 'react-icons/ai';
import { useEffect } from "react";
import { Link } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper";



const presidentProfile = [
    {
      
        name: 'Ose Peps Jeremiah',
        year: ' 2020/2021',
        phone: '07084183611',
        email: 'PepsJerry@gmail.com',
        fullP : 'Lorem ipsum dolor sit amet. Eum veniam voluptate vel quia vero et ipsum earum aut perspiciatis odio. Ea quibusdam harum id magni eaque et cupiditate dolorem ut repudiandae enim ut Quis molestiae qui deleniti autem id nesciunt molestias. Et dignissimos saepe in maxime eius ut voluptatem dicta sit sunt reiciendis.Aut eveniet molestiae aut cupiditate tempora sit sint quia et adipisci nihil ut numquam quaerat. Eum enim dignissimos qui corrupti alias nam iure sint est nulla animi ea iste quam. Qui facilis quaerat ea ipsum magnam est illo blanditiis et suscipit consectetur ut quisquam quasi est maiores animi ut magnam nihil. Qui modi illum ut odio quae eos porro reiciendis ut possimus dolor. Et quasi nobis eum dolores expedita est nihil consectetur et veritatis quas. Aut sunt eligendi sit sunt commodi a deleniti doloribus. Eos inventore internos aut nostrum maxime ad sapiente sint et sunt delectus est consequuntur aperiam est consequatur aspernatur.'
    },
    {
      
        name: 'Ose Peps Jeremiah',
        year: ' 2020/2021',
        phone: '07084183611',
        email: 'PepsJerry@gmail.com',
        fullP : 'Lorem ipsum dolor sit amet. Eum veniam voluptate vel quia vero et ipsum earum aut perspiciatis odio. Ea quibusdam harum id magni eaque et cupiditate dolorem ut repudiandae enim ut Quis molestiae qui deleniti autem id nesciunt molestias. Et dignissimos saepe in maxime eius ut voluptatem dicta sit sunt reiciendis.Aut eveniet molestiae aut cupiditate tempora sit sint quia et adipisci nihil ut numquam quaerat. Eum enim dignissimos qui corrupti alias nam iure sint est nulla animi ea iste quam. Qui facilis quaerat ea ipsum magnam est illo blanditiis et suscipit consectetur ut quisquam quasi est maiores animi ut magnam nihil. Qui modi illum ut odio quae eos porro reiciendis ut possimus dolor. Et quasi nobis eum dolores expedita est nihil consectetur et veritatis quas. Aut sunt eligendi sit sunt commodi a deleniti doloribus. Eos inventore internos aut nostrum maxime ad sapiente sint et sunt delectus est consequuntur aperiam est consequatur aspernatur.'
    },
    {
      
        name: 'Ose Peps Jeremiah',
        year: ' 2020/2021',
        phone: '07084183611',
        email: 'PepsJerry@gmail.com',
        fullP : 'Lorem ipsum dolor sit amet. Eum veniam voluptate vel quia vero et ipsum earum aut perspiciatis odio. Ea quibusdam harum id magni eaque et cupiditate dolorem ut repudiandae enim ut Quis molestiae qui deleniti autem id nesciunt molestias. Et dignissimos saepe in maxime eius ut voluptatem dicta sit sunt reiciendis.Aut eveniet molestiae aut cupiditate tempora sit sint quia et adipisci nihil ut numquam quaerat. Eum enim dignissimos qui corrupti alias nam iure sint est nulla animi ea iste quam. Qui facilis quaerat ea ipsum magnam est illo blanditiis et suscipit consectetur ut quisquam quasi est maiores animi ut magnam nihil. Qui modi illum ut odio quae eos porro reiciendis ut possimus dolor. Et quasi nobis eum dolores expedita est nihil consectetur et veritatis quas. Aut sunt eligendi sit sunt commodi a deleniti doloribus. Eos inventore internos aut nostrum maxime ad sapiente sint et sunt delectus est consequuntur aperiam est consequatur aspernatur.'
    },
    {
      
        name: 'Ose Peps Jeremiah',
        year: ' 2020/2021',
        phone: '07084183611',
        email: 'PepsJerry@gmail.com',
        fullP : 'Lorem ipsum dolor sit amet. Eum veniam voluptate vel quia vero et ipsum earum aut perspiciatis odio. Ea quibusdam harum id magni eaque et cupiditate dolorem ut repudiandae enim ut Quis molestiae qui deleniti autem id nesciunt molestias. Et dignissimos saepe in maxime eius ut voluptatem dicta sit sunt reiciendis.Aut eveniet molestiae aut cupiditate tempora sit sint quia et adipisci nihil ut numquam quaerat. Eum enim dignissimos qui corrupti alias nam iure sint est nulla animi ea iste quam. Qui facilis quaerat ea ipsum magnam est illo blanditiis et suscipit consectetur ut quisquam quasi est maiores animi ut magnam nihil. Qui modi illum ut odio quae eos porro reiciendis ut possimus dolor. Et quasi nobis eum dolores expedita est nihil consectetur et veritatis quas. Aut sunt eligendi sit sunt commodi a deleniti doloribus. Eos inventore internos aut nostrum maxime ad sapiente sint et sunt delectus est consequuntur aperiam est consequatur aspernatur.'
    },
];
export const Excop = () => {
  const [fullProfile, setFullProfile] = useState({});
  const [fullProfileVisibility, setFullProfileVisibility] = useState('top-[-4000px]');

  return (
    <>
      <div className="flex p-5 justify-center flex-row items-center">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className=""
        autoplay={{
    delay: 10000, // 10 seconds delay
    disableOnInteraction: false, // Autoplay continues even when user interacts with slides
  }}
      >
     
        
        {
                presidentProfile.map(presido => {
                    return  <SwiperSlide className=" flex items-center justify-center pb-[30px] ">
                      <div className="flex h-[280px] border-slate-200 border-2 flex-col gap-4 items-center py-[10px] px-[50px] shadow-xl  rounded ">
                    <div className="max-w-[100px]  ">
                     <img className="rounded-full  shadow-lg" src={presido?.picture} alt="" />
                    </div>
                    <div className="flex flex-col gap-1 items-start">
                     <p className="text-slate-700 text-[13px] "><span className="text-[13px] font-bold text-slate-900 ">Name:</span> {presido.name}</p>
                     <p className="text-slate-700 text-[13px] "><span className="text-[13px] font-bold text-slate-900 ">President:</span> {presido.year}</p>
                     <p className="text-slate-700 text-[13px] "><span className="text-[13px] font-bold text-slate-900 ">Contact:</span> {presido.phone}</p>
                     <p className="text-slate-700 text-[13px] "><span className="text-[13px] font-bold text-slate-900 ">Email:</span> {presido.email}</p>
                     
                    </div>
                    <button onClick={() => {
                      setFullProfile(presido);
                      setFullProfileVisibility('top-0')
                    }} className="bg-yellow-500 w-full text-center p-1 rounded shadow-2xl font-semibold text-[12px] uppercase">Full Profile</button>
                 </div>
                 </SwiperSlide>
                })
            }
          




      </Swiper>

<div className={`fixed ${fullProfileVisibility} transition ease-in left-o flex justify-center right-0 bottom-0 w-full h-full p-[20px] bg-Tp z-[100]`}>
  
  <div className="bg-slate-50 p-5 py-[30px] relative flex flex-col gap-5 rounded overflow-y-auto">
    <p onClick={() => setFullProfileVisibility('top-[-4000px]')} className="absolute top-[0] shadow-2xl cursor-pointer right-[0] text-yellow-500 bg-slate-900 active:text-red-500 px-[10px] text-[20px] py-[2px]   ">X</p>
    <h1 className="uppercase font-bold  text-[25px] underline ">Full profile</h1>
    <div className="flex flex-col md:flex-row gap-5 ">
    <div className="flex flex-col text-start items-start">
    <div className="max-w-[300px] ">
      <img src={fullProfile?.picture} alt="" />
    </div>
    <div>
                     <p className="text-slate-700 text-[13px] "><span className="text-[13px] font-bold text-slate-900 ">Name:</span> {fullProfile.name}</p>
                     <p className="text-slate-700 text-[13px] "><span className="text-[13px] font-bold text-slate-900 ">President:</span> {fullProfile.year}</p>
                     <p className="text-slate-700 text-[13px] "><span className="text-[13px] font-bold text-slate-900 ">Contact:</span> {fullProfile.phone}</p>
                     <p className="text-slate-700 text-[13px] "><span className="text-[13px] font-bold text-slate-900 ">Email:</span> {fullProfile.email}</p>
    </div>
    </div>
    <div className="max-w-[450px] flex-col gap-4  ">
      <h1 className="font-semibold uppercase text-[20px] ">Biography</h1>
      <p className="text-slate-700 text-[12px] md:text-[15px] ">{fullProfile.fullP}</p>
    </div>
    </div>
  </div>

</div>
      </div>
    </>
  );
}