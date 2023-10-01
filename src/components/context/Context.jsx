import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { CoursesOffered } from "../CourseOffered/CourseOffered";
import { allPdfs } from "../PDFs/PDFs";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth, db } from "../config/firebase";
import { collection, getDocs, onSnapshot } from "firebase/firestore";

export const fullNewsContext = createContext();

export const NewsContext = (props) => {
    const [anotherNews, setAnotherNews] = useState(JSON.parse(localStorage.getItem('anotherNews')) || []);
    const [clickedCoursePdf, setClickedCoursePdf] = useState(localStorage.getItem("clickedCoursePdf") ||  '');
  const [clickedLevel, setClickedLevel] = useState(localStorage.getItem("clickedLevel") || '');
  const [displaying, setDisplaying] = useState(JSON.parse(localStorage.getItem('displaying')) || {
    pdfView: false,
    viewDashboard: true,
    viewProfile: false,
    pdfPost: false,
    newsPost: false,
    userView: false,
    viewAllNews: false,
    viewEditNews: false,
    pdfViewColor: 'text-slate-700',
    viewDashboardColor: 'text-green-500',
    viewProfileColor: 'text-slate-700',
    pdfPostColor: 'text-slate-700',
    newsPostColor: 'text-slate-700',
  userViewColor: 'text-slate-700',
  viewAllNewsColor: 'text-slate-700',
  viewEditNewsColor: 'text-slate-700',
  });
  const [userList, setUserList] = useState([]);
  const [allPdfs, setAllPdfs] = useState(JSON.parse(localStorage.getItem('allPdfs')) || []);
  const [logOut, setLogOut] = useState(false);
    const [eleCourses, setEleCourses] = useState(JSON.parse(localStorage.getItem('eleCourses')) || []);
  const [allNews, setAllNews] = useState(JSON.parse(localStorage.getItem('allNews')) || []);
  const [allEvents, setAllEvents] = useState(JSON.parse(localStorage.getItem('allEvents')) || []);
  const [editNews, setEditNews] = useState(JSON.parse(localStorage.getItem('editNews')) || {});
  const [currentPdf, setCurrentPdf] = useState([]);
  const [bookType, setBookType] = useState({
    Handouts: [],
    TextBooks: [],
    pastQuestions: [],
  })
  useEffect(() => {
    localStorage.setItem('allPdfs', JSON.stringify(allPdfs));
    localStorage.setItem('editNews', JSON.stringify(editNews))  
    localStorage.setItem('displaying', JSON.stringify(displaying))
      localStorage.setItem('eleCourses', JSON.stringify(eleCourses));
      localStorage.setItem('allNews', JSON.stringify(allNews));
      localStorage.setItem('allEvents', JSON.stringify(allEvents));
        localStorage.setItem('clickedCoursePdf', clickedCoursePdf);
        localStorage.setItem('clickedLevel', clickedLevel);
    }, [eleCourses, clickedCoursePdf, clickedLevel,  displaying]);
    const [fullNews, setFullNews] = useState(JSON.parse(localStorage.getItem('fullNews')) || []);
    
  
  const filterClickedCourse = (courses) => {
    setClickedCoursePdf(courses);
      const coursePdf = allPdfs?.filter(pdf => pdf.course === courses);
      setCurrentPdf(coursePdf);
    };
  
  console.log('currents', currentPdf)
    const filterBookType = () => {
        const getHandout = currentPdf.filter(handout => handout.bookType === 'handout');
        const getTextbook = currentPdf.filter(handout => handout.bookType === 'textbook');
        const getPastquestion = currentPdf.filter(handout => handout.bookType === 'past question');
    
        setBookType({
          Handouts: getHandout,
          TextBooks: getTextbook,
          pastQuestions: getPastquestion,
     
      })
    };
  //FETCHING USERS
    useEffect(() => {
      const userStore = collection(db, 'allUser');
      const usersUnsub = onSnapshot(userStore, (users) => {
          const getUsers = users.docs.map(doc => ({ ...doc.data(), id: doc.id }));
          setUserList(getUsers);
      });

      return () => {
          usersUnsub();
      }
  }, []);
  
  //FETCHING NEWS
  useEffect(() => {
    const newsStore = collection(db, 'News');
    const unsubscribe = onSnapshot(newsStore, (news) => {
      const getAllNews = news.docs.map(doc => ({ ...doc.data(), id: doc.id }));
      setAllNews(getAllNews);
    });
    return () => {
      unsubscribe();
    }
  }, [])
    
  //FETCHING PDFS
    useEffect(() => {
      const pdfStore = collection(db, 'learningResources');
      // Set up a real-time listener to fetch and update data when changes occur
      const unsubscribe = onSnapshot(pdfStore, (snapshot) => {
        const allPdfData = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
        setAllPdfs(allPdfData);
        // Call your filtering functions here after updating allPdfs
      // filterClickedCourse();
        filterBookType();
      });
      return () => {
        // Unsubscribe from the listener when the component unmounts
        unsubscribe();
      };
    },[clickedCoursePdf]);
   
    useEffect(() => {
        localStorage.setItem('anotherNews', JSON.stringify(anotherNews))
    }, [anotherNews]);
    useEffect(() => {
    localStorage.setItem('fullNews', JSON.stringify(fullNews))
    }, [fullNews]);
    const getFullNews = (news) => {
        setFullNews([news]);
    };
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
console.log('pdf man', allPdfs)
  const [signedIn, setSignedIn] = useState({});
  const [mainUser, setMainUser] = useState(JSON.parse(localStorage.getItem('mainUser')) || [])
  console.log('main user', mainUser)

  useEffect(() => {
    localStorage.setItem('mainUser', JSON.stringify(mainUser));
    onAuthStateChanged(auth, (currentUser) => {
      setSignedIn(currentUser)
    });
    const getUserInfo = () => {
      const personalInfo = userList.filter((user) => {
        return user.email.toLocaleLowerCase() == signedIn?.email.toLocaleLowerCase()
      });
      setMainUser(personalInfo);
  };
    // Function to get user information
    // Call the function to filter user information
    getUserInfo();
  }, [userList, signedIn]); // Trigger this effect when signedIn changes

  const signOutUser = async () => {
    try {
      setMainUser(0)
      await signOut(auth);
      setLogOut(false)
    } catch (error) {
      
    }
  }
    
    return <fullNewsContext.Provider value={{getFullNews,  bookType, filterClickedCourse, currentPdf, allPdfs, setAllPdfs, userList, setUserList, logOut, setLogOut, displaying, editNews, setEditNews, setDisplaying, allNews, allEvents, setAllEvents, setAllNews, setMainUser, signOutUser, mainUser, signedIn, eleCourses, getClickedlevel, fullNews, anotherNews, setAnotherNews, clickedLevel, getPdf, clickedCoursePdf }}>
         {props.children}
    </fullNewsContext.Provider>
}