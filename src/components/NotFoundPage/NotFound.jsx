import React from 'react';
import { TbFaceIdError } from 'react-icons/tb'
import { Link } from 'react-router-dom';
function NotFound() {
  return (
    <div className='h-[100vh] text-center px-[40px] py-[100px] bg-slate-50 flex flex-col items-center justify-center'>
          <h1 className='uppercase  font-bold text-[30px]'>404 - Page Not Found</h1>
          <TbFaceIdError className='text-red-500 text-[50px]'/>
          <p className='text-[15px] font-semibold' >The page you are looking for does not exist.</p>
          <Link to='/' className='my-[30px] text-[20px] font-bold capitalize'>go back to Home</Link>
    </div>
  );
}

export default NotFound;
