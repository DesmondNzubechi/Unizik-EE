import React from 'react';
import {TbFaceIdError} from 'react-icons/tb'
function NotFound() {
  return (
    <div className='h-[100vh] text-center px-[40px] py-[100px] bg-slate-50 flex flex-col items-center justify-center'>
          <h1 className='uppercase  font-bold text-[50px]'>404 - Page Not Found</h1>
          <TbFaceIdError className='text-red-500 text-[50px]'/>
          <p className='text-[15px] font-semibold' >The page you are looking for does not exist.</p>
    </div>
  );
}

export default NotFound;
