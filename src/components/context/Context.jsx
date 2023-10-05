import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth, db } from "../config/firebase";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import Aos from "aos";
import 'aos/dist/aos.css';
export const fullNewsContext = createContext();

export const NewsContext = (props) => {
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
  const [userDisplay, setUserDisplay] = useState(JSON.parse(localStorage.getItem('userDisplay')) || {
    courseOutline: false,
    viewDashboard: true,
    viewProfile: false,
    learningResources: false,
    cgpaCalc: false,
    courseOutlineColor: 'text-slate-700',
    viewDashboardColor: 'text-green-500',
    viewProfileColor: 'text-slate-700',
    learningResourcesColor: 'text-slate-700',
    cgpaCalcColor: 'text-slate-700',
  });
  const [userList, setUserList] = useState([]);
  const [allPdfs, setAllPdfs] = useState(JSON.parse(localStorage.getItem('allPdfs')) || []);
  const [logOut, setLogOut] = useState(false);
  const [allNews, setAllNews] = useState(JSON.parse(localStorage.getItem('allNews')) || []);
  const [allEvents, setAllEvents] = useState(JSON.parse(localStorage.getItem('allEvents')) || []);
  const [editNews, setEditNews] = useState(JSON.parse(localStorage.getItem('editNews')) || {});
  useEffect(() => {
    localStorage.setItem('allPdfs', JSON.stringify(allPdfs));
    localStorage.setItem('editNews', JSON.stringify(editNews))  
    localStorage.setItem('displaying', JSON.stringify(displaying))
    localStorage.setItem('userDisplay', JSON.stringify(userDisplay))
     localStorage.setItem('allNews', JSON.stringify(allNews));
    localStorage.setItem('allEvents', JSON.stringify(allEvents));
    
    Aos.init({ duration: 1000 });
    }, [displaying, userDisplay]);
  

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

  //FETCHING EVENTS
  useEffect(() => {
    const eventsStore = collection(db, 'Event');
    const eventUnsub = onSnapshot(eventsStore, (event) => {
      const getEvent = event.docs.map(doc => ({ ...doc.data(), id: doc.id }));
      setAllEvents(getEvent)
    });
    return () => {
      eventUnsub();
    }
  }, [])
    
  //FETCHING PDFS
    useEffect(() => {
      const pdfStore = collection(db, 'learningResources');
      // Set up a real-time listener to fetch and update data when changes occur
      const unsubscribe = onSnapshot(pdfStore, (snapshot) => {
        const allPdfData = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
        setAllPdfs(allPdfData);
      });
      return () => {
        // Unsubscribe from the listener when the component unmounts
        unsubscribe();
      };
    },[]);
   
  const [signedIn, setSignedIn] = useState({});
  const [mainUser, setMainUser] = useState(JSON.parse(localStorage.getItem('mainUser')) || [])

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
  
    return <fullNewsContext.Provider value={{ allPdfs, setUserDisplay, setAllPdfs, userList, userDisplay, setUserList, logOut, setLogOut, displaying, editNews, setEditNews, setDisplaying, allNews, allEvents, setAllEvents, setAllNews, setMainUser, signOutUser, mainUser, signedIn}}>
         {props.children}
    </fullNewsContext.Provider>
}