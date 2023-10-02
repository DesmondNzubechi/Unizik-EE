import React, { useEffect } from "react";
import userImg from '../../assets/images/ee.avif';
import  {  HiXMark } from 'react-icons/hi2';
import { useState } from "react";
import { collection, doc, updateDoc } from "firebase/firestore";
import { fullNewsContext } from "../context/Context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { auth, db, storage } from "../config/firebase";
import { sendPasswordResetEmail } from "firebase/auth";
import { deleteObject, getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { Login } from "../login/login";
const levels = [
   100, 200, 300, 400, 500
];
export const UserProfile = () => {
  
    const [form, setForm] = useState({
        changePassword : 'top-[-2000px]', 
        editProfile : 'top-[-2000px]',
    });
  const notification = () => toast('Profile Info Succesfully Updated');
  const {signedIn, mainUser, logOut, setLogOut, setMainUser, signOutUser} = useContext(fullNewsContext)
  const [profileImg, setProfileImg] = useState([]);
  const uid = mainUser[0]?.id;
      //view edit profile page
        const viewEditProfile = () => {
          setForm({
             changePassword : 'top-[-2000px]',
            editProfile : 'top-0',
           })
        }

        //view change password page
        const viewChangePassword = () => {
          setForm({
             changePassword : 'top-0',
            editProfile : 'top-[-2000px]',
           })
        }

        //hide edit profile page
        const hideEditProfile = () => {
          setForm({
             changePassword : 'top-[-2000px]',
            editProfile : 'top-[-2000px]',
           })
        }

        //hide change password page
        const hideChangePassword = () => {
          setForm({
             changePassword : 'top-[-1000px]',
            editProfile : 'top-[-1000px]',
           });
        }
  const navig = useNavigate();
  const updateUserInfo = async (userId) => {

    const userInfoStore = doc(db, 'allUser', userId);
  
    try {
      await updateDoc(userInfoStore, {
        email: mainUser[0]?.email,
        firstName: mainUser[0]?.firstName,
        lastName: mainUser[0]?.lastName,
        userLevel: mainUser[0]?.userLevel
      });
      hideEditProfile();
      notification();
    } catch (error) {
      console.log(error)
    }
  };
  const resetPassword = async () => {
    const resetPass = window.confirm('Are you sure you want to reset your password??');
    if (!resetPass) {
      return;
    }
    try {
      await sendPasswordResetEmail(auth, signedIn.email);
      hideChangePassword();
      alert('successful! Kindly check your email for reset password link');
     
    } catch (error) {
      alert('Something went wrong❌ try again!')
    }
  }
  const updateProfilePic = async (uid) => {
    const picFolderRef = ref(storage, 'profilePictures');
    try {
      const picRef = ref(picFolderRef, profileImg.name);
      const uploadImg = await uploadBytes(picRef, profileImg);
      const imgUrl = await getDownloadURL(uploadImg.ref);
      const userInfoStore = doc(db, 'allUser', uid);
      await updateDoc(userInfoStore, {
        profilePic: imgUrl,
        email: mainUser[0]?.email,
        firstName: mainUser[0]?.firstName,
        lastName: mainUser[0]?.lastName,
        userLevel: mainUser[0]?.userLevel
      });
    if (mainUser[0].profilePic) {
      const oldImgPathArray = mainUser[0]?.profilePic.split('/');
      const oldImgPath = oldImgPathArray[oldImgPathArray.length - 1];
      const oldImgName = oldImgPath.split('?')[0];
      const oldImgRef = ref(storage, `profilePictures/${oldImgName.replace('profilePictures%2F', '')}`);
      await deleteObject(oldImgRef);
    }
      alert('successful')
    } catch (error) {
      alert(error)
    }

  }
  console.log('main man', mainUser[0])
  if (!signedIn) {
    return <Login />
  } else { 
    return (
      !signedIn ? navig('/login') : signedIn &&
        <>
          <div className="flex justify-center pt-[150px] flex-row py-[50px] items-center bg-white">
            <div className="bg-gradient-to-b  from-white to-white p-5 rounded ">
              <div className="flex flex-col items-start md:items-start md:flex-row gap-5 md:gap-[150px]">
                <div className="flex flex-col items-center ">
                  <img className="w-[100px] shadow-2xl h-[100px] rounded-full" src={!mainUser[0]?.profilePic ? userImg : mainUser[0].profilePic} alt="" />
                  <div className="flex flex-col justify-center items-center">
                    <input onChange={e => setProfileImg(e.target.files[0])} type="file" accept="image/*" className="file:bg-transparent font-semibold py-[10px]  text-[15px] file:border-0 max-w-[200px]" name="" id="" />
                    <button onClick={() => updateProfilePic(uid)} className="flex items-start text-center text-slate-50 gap-2 md:text-[15px] font-semibold bg-black text-[12px]  p-2 h-fit rounded ">Update profile picture</button>
                  </div>
                </div>
                  
                <div className="flex flex-col text-start md:text-start gap-[20px] ">
                  <h1 className="uppercase font-myfont  text-[25px] ">My Profile</h1>
                <p className="flex flex-row items-center gap-5"><span className="md:text-[20px] text-[15px]  font-bold ">Name:</span> <span className="text-slate-700 text-[12px] md:text-[15px] " >{mainUser[0]?.firstName} {  mainUser[0]?.lastName}</span></p>
                  <p className="flex flex-row items-center gap-5"><span className="md:text-[20px] text-[15px] font-bold ">Email:</span> <span className="text-slate-700 text-[12px] md:text-[15px] " >{signedIn?.email}</span></p>
                  <p className="flex flex-row items-center gap-5"><span className="md:text-[20px] text-[15px] font-bold ">Level:</span> <span className="text-slate-700 text-[12px] md:text-[15px] " >{mainUser[0]?.userLevel}</span></p>
                  <div className="flex items-center  text-center   gap-1">
                    <button onClick={viewChangePassword} className="flex items-center text-center text-slate-50 gap-2 md:text-[15px] bg-green-500 text-[12px] w-fit  p-2 h-fit rounded ">Change Password </button>
                    <button onClick={viewEditProfile} className="flex items-center text-center text-slate-50 gap-2 md:text-[15px] bg-yellow-500 text-[12px] w-fit p-2 h-fit rounded ">Edit Profile</button>
                    <button onClick={() => setLogOut(true)} className="flex items-center  text-slate-50 gap-2 md:text-[15px] bg-red-500 text-[12px]  p-2 w-fit h-fit rounded ">Logout </button>
                  </div>
                </div>
              </div>
            </div>
          </div>



        
          {
            //EDIT PROFILE 
          }

          <div className="flex justify-center gap-5 p-[20px] py-[50px] flex-row">
            <span onClick={(e) => {
              if (e.target.tagName === 'SPAN') {
                setForm({ ...form, editProfile: 'top-[-2000px]' })
              }
            }} className={`fixed ${form.editProfile}   w-full h-full flex justify-center z-[500] p-[50px] bg-Tp`}>
              <form action="" className="bg-yellow-500 overflow-y-auto relative rounded flex flex-col gap-2 px-[50px] py-[20px]">
                <HiXMark onClick={hideEditProfile} className="absolute top-0 right-0 text-slate-50 active:text-slate-900 text-[25px] font-bold " />
                <h1 className="text-[20px] font-bold uppercase text-slate-100 ">Edit Profile</h1>
                <div className="flex flex-col">
                  <label className="text-slate-900 font-[400] text-[20px]" htmlFor="email">Email:</label>
                  <input value={mainUser[0]?.email} type="email" disabled className="border outline-0  p-2 rounded" placeholder="nzubechukwu1@gmail.com" />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="name" className="text-slate-900 font-[400] text-[20px]">First Name:</label>
                  <input onChange={(e) => {
                    setMainUser({ ...mainUser[0], firstName: e.target.value })
                  }} value={mainUser[0]?.firstName} type="text" className="border outline-0  p-2 rounded" placeholder="Nzubechukwu " />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="name" className="text-slate-900 font-[400] text-[20px]">Last Name:</label>
                  <input value={mainUser[0]?.lastName} onChange={e => {
                    setMainUser([{ ...mainUser[0], lastName: e.target.value }])
                  }} type="text" className="border outline-0  p-2 rounded" placeholder="Desmond" />
                </div>
                <div className="flex flex-col">
                  <label className="text-slate-900 font-[400] text-[20px]" htmlFor="Level">Level:</label>
                  <select value={mainUser[0]?.userLevel} onChange={(e) => setMainUser([{
                    ...mainUser[0],
                    userLevel: e.target.value
                  }])} className=" border  outline-0 p-2 rounded" name="" id="">
                    <option value="">Select</option>
                    {levels.map(level => {
                      return <option value={level}>{level} Level</option>
                    })}
                  </select>
                  <div className="flex flex-col">
                    <button type="button" onClick={() => updateUserInfo(mainUser[0]?.id)} className="bg-slate-900 text-slate-50 p-2 my-[20px] rounded text-[20px] capitalize">Update Profile</button>
                  </div>
                </div>
              </form>
            </span>
            <span onClick={(e) => {
              if (e.target.tagName === 'SPAN') {
                setForm({ ...form, changePassword: 'top-[-2000px]' })
              }
            }} className={`fixed ${form.changePassword}   w-full h-full flex justify-center z-[500] p-[50px] bg-Tp`}>
              <form action="" className="bg-yellow-500 overflow-y-auto relative rounded flex flex-col gap-4 p-[50px]">
                <HiXMark onClick={hideChangePassword} className="absolute top-0 right-0 text-slate-50 active:text-slate-900 text-[25px] font-bold " />
                <h1 className="text-[20px] font-bold uppercase text-slate-100 ">Change Password</h1>
                <div className="flex flex-col">
                  <label className="text-slate-900 font-[400] text-[20px]" htmlFor="email">Email:</label>
                  <input value={signedIn?.email} type="email" className="border outline-0  p-2 rounded" placeholder="nzubechukwu1@gmail.com" />
                </div>
                <div className="flex flex-col">
                  <button type="button" onClick={resetPassword} className="bg-slate-900 text-slate-50 p-2 my-[20px] rounded text-[20px] capitalize">Reset Password</button>
                </div>
              </form>
            </span>
          </div>
        </>
    )
  }
}