import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { CoursesOffered } from "../CourseOffered/CourseOffered";
import { allPdfs } from "../PDFs/PDFs";
export const fullNewsContext = createContext();

export const NewsContext = (props) => {
  
    const [anotherNews, setAnotherNews] = useState(JSON.parse(localStorage.getItem('anotherNews')) || []);
    const [clickedCoursePdf, setClickedCoursePdf] = useState(localStorage.getItem("clickedCoursePdf") ||  '');
    const [clickedLevel, setClickedLevel] = useState(localStorage.getItem("clickedLevel") || '');
   // const [courseName, setCourseName] = useState('');
    const [eleCourses, setEleCourses] = useState(JSON.parse(localStorage.getItem('eleCourses')) || []);

    useEffect(() => {
        localStorage.setItem('eleCourses', JSON.stringify(eleCourses));
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

    //const getCourseName = (courses) => {
    
    //}

    return <fullNewsContext.Provider value={{getFullNews, eleCourses, getClickedlevel, fullNews, anotherNews, setAnotherNews, clickedLevel, getPdf, clickedCoursePdf }}>
         {props.children}
    </fullNewsContext.Provider>
}