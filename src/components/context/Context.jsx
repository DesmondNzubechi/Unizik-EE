import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { CoursesOffered } from "../CourseOffered/CourseOffered";
import { allPdfs } from "../PDFs/PDFs";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth, db } from "../config/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
export const fullNewsContext = createContext();


export const NewsContext = (props) => {
    const [anotherNews, setAnotherNews] = useState(JSON.parse(localStorage.getItem('anotherNews')) || []);
    const [clickedCoursePdf, setClickedCoursePdf] = useState(localStorage.getItem("clickedCoursePdf") ||  '');
    const [clickedLevel, setClickedLevel] = useState(localStorage.getItem("clickedLevel") || '');
   // const [courseName, setCourseName] = useState('');
    const [eleCourses, setEleCourses] = useState(JSON.parse(localStorage.getItem('eleCourses')) || []);
  const [allNews, setAllNews] = useState(JSON.parse(localStorage.getItem('allNews')) || []);
  const [allEvents, setAllEvents] = useState(JSON.parse(localStorage.getItem('allEvents')) || []);
    useEffect(() => {
      localStorage.setItem('eleCourses', JSON.stringify(eleCourses));
      localStorage.setItem('allNews', JSON.stringify(allNews));
      localStorage.setItem('allEvents', JSON.stringify(allEvents));
        localStorage.setItem('clickedCoursePdf', clickedCoursePdf);
        localStorage.setItem('clickedLevel', clickedLevel);
    }, [eleCourses, clickedCoursePdf, clickedLevel]);
    const [fullNews, setFullNews] = useState(JSON.parse(localStorage.getItem('fullNews')) || []);
    
    useEffect(() => {
        localStorage.setItem('anotherNews', JSON.stringify(anotherNews))
    }, [anotherNews]);
    useEffect(() => {
    localStorage.setItem('fullNews', JSON.stringify(fullNews))
    }, [fullNews]);
    const getFullNews = (news) => {
        setFullNews([news]);
    };
    console.log(fullNews);

    const getClickedlevel = (level) => {
    const filterLevelCourses =  CoursesOffered.filter(courses => {
    return  level == courses.Session[0];
      })
      setEleCourses(filterLevelCourses);
      setClickedLevel(level)
    }

    const getPdf = (pdf) => {
      setClickedCoursePdf(pdf);
    }

  const [signedIn, setSignedIn] = useState({});
  const userInfoStore = collection(db, 'allUser');
  const [registeredUser, setRegisteredUser] = useState([]);
  const [mainUser, setMainUser] = useState([])

  useEffect(() => {

    onAuthStateChanged(auth, (currentUser) => {
      setSignedIn(currentUser)
    });
    // Function to get user information
    const getUserInfo = async () => {
      try {
        // Fetch user information
        const userInfo = await getDocs(userInfoStore);
        const allUsers = userInfo.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        // Set registered users
        setRegisteredUser(allUsers);
        // Find the current user based on email
        const personalInfo = allUsers.filter((user) => user.email === signedIn.email);
        console.log('personalInfo:', personalInfo);
        console.log('signedIn?.email:', signedIn?.email);
        // Set the main user
        setMainUser(personalInfo);
      } catch (error) {
        console.error(error);
      }
    };
    // Call the function to get user information
    getUserInfo();
  }, [signedIn]); // Trigger this effect when signedIn changes
  const signOutUser = async () => {
    try {
      setMainUser(0)
      await signOut(auth)
    } catch (error) {
      
    }
  }
    //const getCourseName = (courses) => {
    
    //}

    return <fullNewsContext.Provider value={{getFullNews, allNews, allEvents, setAllEvents, setAllNews, setMainUser, signOutUser, mainUser, signedIn, eleCourses, getClickedlevel, fullNews, anotherNews, setAnotherNews, clickedLevel, getPdf, clickedCoursePdf }}>
         {props.children}
    </fullNewsContext.Provider>
}