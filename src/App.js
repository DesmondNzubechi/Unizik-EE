import './App.css';

import { Route,  Routes } from 'react-router-dom';
import { Home } from './components/Home/home';
import { Navmobile } from './components/Home/navmobile';
import { About } from './components/About/About';
import { Aim } from './components/our-aim/aim';
import { News } from './components/news/new';
import { Login } from './components/login/login';
import { Sign } from './components/signup/signup';
import { Navdesktop } from './components/Home/navdesktop';
import { Contact } from './components/contact/contact';
import { Courses } from './components/CourseOffered/CourseOutlines';
import { Events } from './components/Events/Events';
import { CourseReps } from './components/CourseReps/CourseReps';
import NotFound from './components/NotFoundPage/NotFound';
import { FullAim } from './components/our-aim/fullAim';
import { FullAbout } from './components/About/fullAbout';
import { Admission } from './components/Admission/Admission';
import { Book } from './components/Books/Book';

/*===================CGPA CALCULATOR===========================*/

import CGPACalculator from './components/cgpa-calc/CgpaCalc';
import { ExcosProfile } from './components/Excos/Excos';
import { FullNewsDetails } from './components/FullNews/FullNews';
import { LevelCourses } from './components/Books/CoursesFolder/CoursesFolder';
import { DownloadPdfs } from './components/PDFs/CoursesPdfs';
import { ScrollToTop } from './components/ScrollTop/ScrollTop';
import { Footer } from './components/Footer/Footer';
import { Admindashboard } from './components/Dashboard/Admin';
import { UserProfile } from './components/User profile/UserProfile';
import { ToastContainer } from 'react-toastify';
// import { fullNewsContext } from './components/context/Context';
// import { useContext } from 'react';
import { LogOut } from './components/Logout/logout';
import { DeptExcos } from './components/DeptExcos/DeptExco';
import { ExDeptExcos } from './components/ExStudentLeaders/ExStudentLeaders';
import { ProjectTeam } from './components/ProjectTeam/ProjectTeam';
import { LevelCourseoutlines } from './components/CourseOffered/level';
import { FullcourseOutline } from './components/CourseOffered/course';

function App() {
      // const { fullNews, anotherNews, getFullNews } = useContext(fullNewsContext);
      // const getDetails = fullNews[0];
      // const cat = getDetails?.category;
      // const headline = getDetails?.newsHeadline;
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
      <Route path='/Academics/course-outlines' element={<Courses/>} />
      <Route path='/fullAim' element={<FullAim/>} />
      <Route path='/fullAbout' element={<FullAbout/>} />
      <Route path='/Admission' element={<Admission/>} />
      <Route path='/Learning-resources' element={<Book/>} />
      <Route path='/calculate-cgpa' element={<CGPACalculator/>} />
     <Route path='/blog/:newsHeadline' element={<FullNewsDetails/>}/>
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
     <Route path='/Academics/Course-outlines/:Session' element={<LevelCourseoutlines/>} />
     <Route path='/Academics/Course-outlines/:Session/:Course' element={<FullcourseOutline/>} />
     <Route path='/not-found' element={<NotFound/>} />
     <Route path="*" element={ <NotFound />} />
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
