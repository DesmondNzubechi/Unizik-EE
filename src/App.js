import './App.css';

import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { Home } from './components/Home/home';
import { Navmobile } from './components/Home/navmobile';
import { About } from './components/About/About';
import { Aim } from './components/our-aim/aim';
import { News } from './components/news/new';
import { Login } from './components/login/login';
import { Sign } from './components/signup/signup';
import { Navdesktop } from './components/Home/navdesktop';
import { Contact } from './components/contact/contact';
import { Courses } from './components/courses/courses';
import { Events } from './components/Events/Events';
import { CourseReps } from './components/CourseReps/CourseReps';
import { redirect } from 'react-router-dom';
import NotFound from './components/NotFoundPage/NotFound';
/*========100 Level ======================*/

import { Level100 } from './components/courses/100level/level100';

/*========100 Level First Semester Courses======================*/
import { Feg101 } from './components/courses/100level/FirstSemester/CourseOutlines/feg101/feg101';
import { Bus101 } from './components/courses/100level/FirstSemester/CourseOutlines/bus101/bus101';
import { Mat101 } from './components/courses/100level/FirstSemester/CourseOutlines/mat101/mat101';
import { Ich111 } from './components/courses/100level/FirstSemester/CourseOutlines/ich111/ich111';
import { Phy107 } from './components/courses/100level/FirstSemester/CourseOutlines/phy107/phy107';
import { Ich101 } from './components/courses/100level/FirstSemester/CourseOutlines/ich101/ich101';
import { Phy101 } from './components/courses/100level/FirstSemester/CourseOutlines/phy101/phy101';
import { Gst105 } from './components/courses/100level/FirstSemester/CourseOutlines/gst105/gst105';
import { Gst107 } from './components/courses/100level/FirstSemester/CourseOutlines/gst107/Gst107';
import { Gst109 } from './components/courses/100level/FirstSemester/CourseOutlines/gst109/Gst109';
import { Gst101 } from './components/courses/100level/FirstSemester/CourseOutlines/gst101/Gst101';

/*========100 Level Second semester Courses======================*/

import { Feg102 } from './components/courses/100level/SecondSemester/CourseOutlines/feg102/Feg102';
import { Mat102 } from './components/courses/100level/SecondSemester/CourseOutlines/mat102/Mat102';
import { Phy102 } from './components/courses/100level/SecondSemester/CourseOutlines/phy102/Phy102';
import { Ich102 } from './components/courses/100level/SecondSemester/CourseOutlines/ich102/Ich102';
import { Gst102 } from './components/courses/100level/SecondSemester/CourseOutlines/gst102/Gst102';
import { Ich112 } from './components/courses/100level/SecondSemester/CourseOutlines/ich112/Ich112';
import { Phy108 } from './components/courses/100level/SecondSemester/CourseOutlines/phy108/Phy108';
import { Gst106 } from './components/courses/100level/SecondSemester/CourseOutlines/gst106/Gst106';
import { Gst110 } from './components/courses/100level/SecondSemester/CourseOutlines/gst110/Gst110';
import { Feg103 } from './components/courses/100level/SecondSemester/CourseOutlines/Feg103/Feg103';


/*========200 Level ======================*/

import { Level200 } from './components/courses/200level/200level';

/*========200 Level First Semester Courses======================*/
import { Feg211 } from './components/courses/200level/FirstSemester/CourseOutlines/feg211/Feg211';
import { Feg213 } from './components/courses/200level/FirstSemester/CourseOutlines/feg213/Feg213';
import { Feg201 } from './components/courses/200level/FirstSemester/CourseOutlines/feg201/Feg201';
import { Feg250 } from './components/courses/200level/FirstSemester/CourseOutlines/feg250/Feg250';
import { Feg281 } from './components/courses/200level/FirstSemester/CourseOutlines/feg281/Feg281';
import { Feg221 } from './components/courses/200level/FirstSemester/CourseOutlines/feg221/Feg221';
import { Mat201 } from './components/courses/200level/FirstSemester/CourseOutlines/mat201/Mat201';
import { Ich221 } from './components/courses/200level/FirstSemester/CourseOutlines/ich221/Ich221';
import { Csc201 } from './components/courses/200level/FirstSemester/CourseOutlines/csc201/Csc201';

/*========200 Level Second Semester Courses======================*/
import { Bus204 } from './components/courses/200level/SecondSemester/CourseOutlines/Bus204/Bus204';
import { Feg202 } from './components/courses/200level/SecondSemester/CourseOutlines/Feg202/Feg202';
import { Mat202 } from './components/courses/200level/SecondSemester/CourseOutlines/Mat202/Mat202';
import { Feg242 } from './components/courses/200level/SecondSemester/CourseOutlines/Feg242/Feg242';
import { Feg214 } from './components/courses/200level/SecondSemester/CourseOutlines/Feg214/Feg214';
import { Feg212 } from './components/courses/200level/SecondSemester/CourseOutlines/Feg212/Feg212';
import { Feg215 } from './components/courses/200level/SecondSemester/CourseOutlines/Feg215/Feg215';
import { Feg280 } from './components/courses/200level/SecondSemester/CourseOutlines/Feg280/Feg280';
import { Csc202 } from './components/courses/200level/SecondSemester/CourseOutlines/Csc202/Csc202';
import { Feg282 } from './components/courses/200level/SecondSemester/CourseOutlines/Feg282/Feg282';



/*========300 Level ======================*/
import { Level300 } from './components/courses/300level/300level';

/*========300 Level First Semester Courses======================*/
import { Ece321 } from './components/courses/300level/FirstSemester/CourseOutlines/Ece321/Ece321';
import { Feg303 } from './components/courses/300level/FirstSemester/CourseOutlines/Feg303/Feg303';
import { Ele311 } from './components/courses/300level/FirstSemester/CourseOutlines/Ele311/Ele311';
import { Ece323 } from './components/courses/300level/FirstSemester/CourseOutlines/Ece323/Ece323';
import { Ece333 } from './components/courses/300level/FirstSemester/CourseOutlines/Ece333/Ece333';
import { Ele341 } from './components/courses/300level/FirstSemester/CourseOutlines/Ele341/Ele341';
import { Ece331 } from './components/courses/300level/FirstSemester/CourseOutlines/Ece331/Ece331';
import { Ele343 } from './components/courses/300level/FirstSemester/CourseOutlines/Ele343/Ele343';
import { Ele353 } from './components/courses/300level/FirstSemester/CourseOutlines/Ele353/Ele353';

/*========300 Level Second Semester Courses ======================*/


import { Ele312 } from './components/courses/300level/SecondSemester/CourseOutlines/Ele312/Ele312';
import { Ece328 } from './components/courses/300level/SecondSemester/CourseOutlines/Ece328/Ece328';
import { Ece326 } from './components/courses/300level/SecondSemester/CourseOutlines/Ece326/Ece326';
import { Ece334 } from './components/courses/300level/SecondSemester/CourseOutlines/Ece334/Ece334';
import { Ele382 } from './components/courses/300level/SecondSemester/CourseOutlines/Ele382/Ele382';
import { Ele372 } from './components/courses/300level/SecondSemester/CourseOutlines/Ele372/Ele372';
import { Ele342 } from './components/courses/300level/SecondSemester/CourseOutlines/Ele342/Ele342';
import { Ele344 } from './components/courses/300level/SecondSemester/CourseOutlines/Ele344/Ele344';
import { Ece322 } from './components/courses/300level/SecondSemester/CourseOutlines/Ece322/Ece322';
import { Ele314 } from './components/courses/300level/SecondSemester/CourseOutlines/Ele314/Ele314';


/*========300 Level ======================*/
import { Level400 } from './components/courses/400l/400level';

/*========400 Level First Semester Courses======================*/
import { Ele403 } from './components/courses/400l/FirstSemester/CourseOutlines/Ele403/Ele403';
import { Cve423 } from './components/courses/400l/FirstSemester/CourseOutlines/Cve423/Cve423';
import { Ece427 } from './components/courses/400l/FirstSemester/CourseOutlines/Ece427/Ece427';
import { Ele445 } from './components/courses/400l/FirstSemester/CourseOutlines/Ele445/Ele445';
import { Ele453 } from './components/courses/400l/FirstSemester/CourseOutlines/Ele453/Ele453';
import { Ele473 } from './components/courses/400l/FirstSemester/CourseOutlines/Ele473/Ele473';
import { Feg404 } from './components/courses/400l/FirstSemester/CourseOutlines/Feg404/Feg404';




/*========500 Level ======================*/
import { Level500 } from './components/courses/500level/500level';

/*========500 Level First Semester Courses======================*/
import { Ele549 } from './components/courses/500level/FirstSemester/CourseOutlines/Ele549/Ele549';
import { Ece517 } from './components/courses/500level/FirstSemester/CourseOutlines/Ece517/Ece517';
import { Ece505 } from './components/courses/500level/FirstSemester/CourseOutlines/Ece505/Ece505';
import { Ele547 } from './components/courses/500level/FirstSemester/CourseOutlines/Ele547/Ele547';
import { Ele553 } from './components/courses/500level/FirstSemester/CourseOutlines/Ele553/Ele553';
import { Ele557 } from './components/courses/500level/FirstSemester/CourseOutlines/Ele557/Ele557';

/*========500 Level Second Semester Courses ======================*/

import { Ele504 } from './components/courses/500level/SecondSemester/CourseOutlines/Ele504/Ele504';
import { Ele554 } from './components/courses/500level/SecondSemester/CourseOutlines/Ele554/Ele554';
import { Ele556 } from './components/courses/500level/SecondSemester/CourseOutlines/Ele556/Ele556';
import { Ele558 } from './components/courses/500level/SecondSemester/CourseOutlines/Ele558/Ele558';
import { Ele574 } from './components/courses/500level/SecondSemester/CourseOutlines/Ele574/Ele574';

import { FullAim } from './components/our-aim/fullAim';
import { FullAbout } from './components/About/fullAbout';
import { Admission } from './components/Admission/Admission';
import { Book } from './components/Books/Book';

/*===================CGPA CALCULATOR===========================*/

import CGPACalculator from './components/cgpa-calc/CgpaCalc';
import { ExcosProfile } from './components/Excos/Excos';
import { Excop } from './components/Excos/ExcosProfile';
import { NewsContext } from './components/context/Context';
import { FullNewsDetails } from './components/FullNews/FullNews';
import { LevelCourses } from './components/Books/CoursesFolder/CoursesFolder';
import { DownloadPdfs } from './components/PDFs/CoursesPdfs';
import { ScrollToTop } from './components/ScrollTop/ScrollTop';
import { Footer } from './components/Footer/Footer';
import { Admindashboard } from './components/Dashboard/Admin';
import { UserProfile } from './components/User profile/UserProfile';
import { ToastContainer } from 'react-toastify';
import { fullNewsContext } from './components/context/Context';
import { useContext } from 'react';
import { LogOut } from './components/Logout/logout';
import { DeptExcos } from './components/DeptExcos/DeptExco';
import { ExDeptExcos } from './components/ExStudentLeaders/ExStudentLeaders';
import { ProjectTeam } from './components/ProjectTeam/ProjectTeam';

function App() {
      const { fullNews, anotherNews, getFullNews } = useContext(fullNewsContext);
      const getDetails = fullNews[0];
      const cat = getDetails?.category;
      const headline = getDetails?.newsHeadline;
  return (
        <div className='overflow-x-hidden font-fonty'>
<>

<ScrollToTop/> 
<Navmobile/>
<Navdesktop/>
<LogOut/>
    <Routes>
      <Route path='/' element={<Home/>} />
                                <Route path='/news' element={<News />} />
                                <Route path='/events' element={<Events/>} />
      <Route path='/about' element={<FullAbout/>} />
      <Route path='/mission' element={<Aim/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/signup' element={<Sign/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/course-outlines' element={<Courses/>} />
      <Route path='/level100' element={<Level100/>} />
      <Route path='/level200' element={<Level200/>} />


      <Route path='/feg101courseoutline' element={<Feg101/>} />
      <Route path='/bus101courseoutline' element={<Bus101/>} />
      <Route path='/mat101courseoutline' element={<Mat101/>} />
      <Route path='/phy101courseoutline' element={<Phy101/>} />
      <Route path='/ich101courseoutline' element={<Ich101/>} />
      <Route path='/phy107courseoutline' element={<Phy107/>} />
      <Route path='/ich111courseoutline' element={<Ich111/>} />
      <Route path='/Gst101courseoutline' element={<Gst101/>} />
      <Route path='/Gst107courseoutline' element={<Gst107/>} />
      <Route path='/Gst105courseoutline' element={<Gst105/>} />
      <Route path='/Gst109courseoutline' element={<Gst109/>} />



      <Route path='/feg103courseoutline' element={<Feg103/>} />
      <Route path='/mat102courseoutline' element={<Mat102/>} />
      <Route path='/phy102courseoutline' element={<Phy102/>} />
      <Route path='/ich102courseoutline' element={<Ich102/>} />
      <Route path='/phy108courseoutline' element={<Phy108/>} />
      <Route path='/ich112courseoutline' element={<Ich112/>} />
      <Route path='/Gst102courseoutline' element={<Gst102/>} />
      <Route path='/Gst106courseoutline' element={<Gst106/>} />
      <Route path='/Gst110courseoutline' element={<Gst110/>} />
      <Route path='/feg102courseoutline' element={<Feg102/>} />
      
      /*========200 Level First Semester Course Routing ======================*/

      <Route path='/Feg213courseoutline' element={<Feg213/>} />
      <Route path='/Mat201courseoutline' element={<Mat201/>} />
      <Route path='/Feg201courseoutline' element={<Feg201/>} />
      <Route path='/Ich221courseoutline' element={<Ich221/>} />
      <Route path='/Feg211courseoutline' element={<Feg211/>} />
      <Route path='/Feg250courseoutline' element={<Feg250/>} />
      <Route path='/Feg281courseoutline' element={<Feg281/>} />
      <Route path='/Csc201courseoutline' element={<Csc201/>} />
      <Route path='/Feg221courseoutline' element={<Feg221/>} />

      <Route path='/Feg214courseoutline' element={<Feg214/>} />
      <Route path='/Mat202courseoutline' element={<Mat202/>} />
      <Route path='/Feg202courseoutline' element={<Feg202/>} />
      <Route path='/Bus204courseoutline' element={<Bus204/>} />
      <Route path='/Feg212courseoutline' element={<Feg212/>} />
      <Route path='/Feg215courseoutline' element={<Feg215/>} />
      <Route path='/Feg282courseoutline' element={<Feg282/>} />
      <Route path='/Csc202courseoutline' element={<Csc202/>} />
      <Route path='/Feg242courseoutline' element={<Feg242/>} />
      <Route path='/Feg280courseoutline' element={<Feg280/>} />

      <Route path='/level300' element={<Level300/>} />

      <Route path='/Ece321courseoutline' element={<Ece321/>} />
      <Route path='/Feg303courseoutline' element={<Feg303/>} />
      <Route path='/Ele311courseoutline' element={<Ele311/>} />
      <Route path='/Ece323courseoutline' element={<Ece323/>} />
      <Route path='/Ece333courseoutline' element={<Ece333/>} />
      <Route path='/Ele341courseoutline' element={<Ele341/>} />
      <Route path='/Ece331courseoutline' element={<Ece331/>} />
      <Route path='/Ele343courseoutline' element={<Ele343/>} />
      <Route path='/Ele353courseoutline' element={<Ele353/>} />
    
      <Route path='/Ele312courseoutline' element={<Ele312/>} />
      <Route path='/Ece328courseoutline' element={<Ece328/>} />
      <Route path='/Ece326courseoutline' element={<Ece326/>} />
      <Route path='/Ece334courseoutline' element={<Ece334/>} />
      <Route path='/Ele382courseoutline' element={<Ele382/>} />
      <Route path='/Ele372courseoutline' element={<Ele372/>} />
      <Route path='/Ele342courseoutline' element={<Ele342/>} />
      <Route path='/Ele344courseoutline' element={<Ele344/>} />
      <Route path='/Ece322courseoutline' element={<Ece322/>} />
      <Route path='/Ele314courseoutline' element={<Ele314/>} />

       <Route path='/level400' element={<Level400 />} />
            
      <Route path='/Ele403courseoutline' element={<Ele403/>} />
      <Route path='/Cve423courseoutline' element={<Cve423/>} />
      <Route path='/Ele445courseoutline' element={<Ele445/>} />
      <Route path='/Ele453courseoutline' element={<Ele453/>} />
      <Route path='/Ele473courseoutline' element={<Ele473/>} />
      <Route path='/Feg404courseoutline' element={<Feg404/>} />
      <Route path='/Ece427courseoutline' element={<Ece427/>} />
      
    
            <Route path='/level500' element={<Level500 />} />
            
      <Route path='/Ele549courseoutline' element={<Ele549/>} />
      <Route path='/Ece517courseoutline' element={<Ece517/>} />
      <Route path='/Ece505courseoutline' element={<Ece505/>} />
      <Route path='/Ele547courseoutline' element={<Ele547/>} />
      <Route path='/Ele553courseoutline' element={<Ele553/>} />
      <Route path='/Ele557courseoutline' element={<Ele557/>} />

      <Route path='/Ele504courseoutline' element={<Ele504/>} />
      <Route path='/Ele554courseoutline' element={<Ele554/>} />
      <Route path='/Ele556courseoutline' element={<Ele556/>} />
      <Route path='/Ele558courseoutline' element={<Ele558/>} />
      <Route path='/Ele574courseoutline' element={<Ele574/>} />


      <Route path='/fullAim' element={<FullAim/>} />
      <Route path='/fullAbout' element={<FullAbout/>} />
      <Route path='/Admission' element={<Admission/>} />
      <Route path='/Learning-resources' element={<Book/>} />

      <Route path='/calculate-cgpa' element={<CGPACalculator/>} />
     <Route path='/blog/:id' element={<FullNewsDetails/>}/>
      <Route path='/level-courses' element={<LevelCourses/>} />
      <Route path='/download pdf' element={<DownloadPdfs/>} />
      <Route path='/admission requirement' element={<Admission/>} />
     <Route path='/dashboard' element={<Admindashboard/>} />
     <Route path='/profile' element={<UserProfile/>} />
     <Route path='/students leaders' element={<ExcosProfile/>} />
     <Route path='/Students/Class-Representative' element={<CourseReps/>} />
     <Route path='/Students/Departmental-Executives' element={<DeptExcos/>} />
     <Route path='/Alumni/Ex-students-leaders' element={<ExDeptExcos/>} />
     <Route path='/Students/Project-Team' element={<ProjectTeam/>} />
     <Route path='/not-found' element={<NotFound/>} />
     <Route
          path="*"
          element={
            <NotFound />
          }
        />
    </Routes>
   <Footer/>

<ToastContainer
autoClose={2000}
/>
</>
   </div>
  );
}

//path={`/${cat}/${headline}`}

export default App;
