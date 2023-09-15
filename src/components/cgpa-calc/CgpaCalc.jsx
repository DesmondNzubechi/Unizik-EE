import React, { useEffect, useState } from 'react';
import {IoTrashBin} from 'react-icons/io5';
import {BsFillTrash3Fill} from 'react-icons/bs';
import { CoursesOffered } from '../CourseOffered/CourseOffered';
import cgpaImg from '../../assets/images/cgpa.jpg';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
let indexd = 1;
let totalGrad = 0;
  let totalUnit = 0;
  let AvCgpa = 0;

let remark = '';

const CGPACalculator = () => {
const [courseList, setCourseList] = useState([]);
const [gradee, setGrade] = useState('select');
const [courseName, setCourseName] = useState("");
const [CreditUnit, setCreditUnit] = useState('select');
const [level, setLevel] = useState([]);
const [getSemester, setGetSemester] = useState(null);
const [selectedCourse, setSelectedCourse] = useState('select');
const [selectedUnit, setSelectedUnit] = useState(null);
const [selectedGrade, setSelectedGrade] = useState(null);
const [courses, setCourses] = useState([]);
console.log(level);
const addCourse = () => {

  if (gradee == 'select') {
   // notification('Please input grade');
    const notify = () => toast('Please input grade🙏');
    notify();
  } else if (courseName == '') {
    const notify = () => toast('Please input course name🙏');
    notify();
  } else if(selectedUnit == null) {
    const notify = () => toast('Please input credit unit🙏');
    notify();
  } else if (gradee == 'select' && selectedUnit == null) {
    const notify = () => toast('Please input credit unit and Grade🙏');
    notify();
  } else if (gradee == 'select' && courseName == '') {
    const notify = () => toast('Please Grade and Course Name🙏');
    notify();
  } else if (courseName == '' && selectedUnit == null || selectedUnit == '' || '' || 0) {
    const notify = () => toast('Please input credit unit and Course Name🙏');
    notify();
  } else{
    let calcGrade = gradee * selectedUnit;
    let creditU = Number(selectedUnit);
    
   let gradeRep;
    switch (gradee) {
      case '5':
        gradeRep = 'A';
        break;
    case '4':
      gradeRep = 'B';
      break;
      case '3':
        gradeRep = "C";
        break;
        case '2':
          gradeRep = 'D';
          break;
          case '1':
            gradeRep = 'E';
            break;
            case '0':
              gradeRep = 'F'
              break;
    };
    const notify = () => toast(`${courseName} with the credit unit "${creditU}"  and grade "${gradeRep}" succesfully added✅`);
    notify();
    setCourseList(
      [
       ...courseList,
       {id: indexd++, name: courseName, grade: gradeRep, unit: selectedUnit},
      ]
     );
     totalGrad += calcGrade;
     totalUnit += creditU;
     AvCgpa = totalGrad / totalUnit;
    
     if (AvCgpa >= 4.5) {
       remark = 'You Are A First Class student!';
     } else if (AvCgpa >= 3.5 && AvCgpa < 4.5) {
       remark = 'Second Class Upper';
     } else if (AvCgpa >= 2.5 && AvCgpa < 3.5) {
       remark = 'Second Class Lower';
     } else if (AvCgpa >= 1.5 && AvCgpa < 2.5) {
       remark = 'Third Class';
     } else if (AvCgpa >= 1 && AvCgpa < 1.5) {
       remark = 'Passed!';
     } else if (AvCgpa >= 0.5 && AvCgpa < 1) {
       remark = 'University Attended';
     } else if (AvCgpa >= 0 &&  AvCgpa < 0.5) {
       remark = 'Failed';
     } else{
      remark = '';
     }
     
      
     setCourseName('');
     setSelectedUnit('');
     setSelectedGrade('');
     setGrade('select');
     if (isNaN(AvCgpa)) {
      AvCgpa = 0;
     }
  };
}

return(
  <div className='py-[150px] px-[30px]'>
    
    <div><p className=' text-center uppercase font-bold my-[30px] text-[20px] md:text-[30px]'>Calculate your cgpa here!</p></div>
  <div className=' flex flex-row justify-center '>
    <div className='rounded flex items-center flex-col gap-[30px]  bg-slate-200'>
   
    <table className='  '>
   
      <thead className='bg-slate-900'>
       <tr className='flex flex-row items-end rounded-t border-yellow-500  shadow-2xl bg-slate-900 gap-2 md:gap-[20px] p-2 '>
        <th className='flex flex-col items-start ... '>
          <select name=""  className='font-[400] bg-slate-50 px-[5px] outline-0  border-0 rounded-[2px] ' onChange={(e) => {
           const getVal = e.target.value;
           const filterLevel = CoursesOffered.filter(currentLevel => {
           return currentLevel.Session[0] == getVal;
           });
           setLevel(filterLevel);
           if (getSemester == null) return;
           const filterSemester = filterLevel.filter(semester => {
            return semester.Session[1] == getSemester;
           });
           setCourses(filterSemester);
           console.log(e.target.value);
           
          }}  id="">
           
            <option value="">Select Level</option>
            <option value={100}>100 Level</option>
            <option value={200}>200 Level</option>
            <option value={300}>300 Level</option>
            <option value={400}>400 Level</option>
            <option value={500}>500 Level</option>
          </select>
        </th>
        <th className='flex flex-col items-start ... '>
          <select name="" className='font-[400] px-[5px] bg-slate-50 outline-0  border-0 rounded-[2px] '  onChange={(e) => {
          
         const getValue = e.target.value;
         setGetSemester(getValue);
         const filterSemester = level.filter(semester => {
          return semester.Session[1] == getValue;
         });
         setCourses(filterSemester);
          }} id="">
           
            <option value="">Select Semester</option>
            <option value={1}>First Semester</option>
            <option value={2}>Second Semester</option>
          </select>
        </th>
       </tr>
      
        <tr className='flex flex-row items-end rounded-t border-yellow-500  shadow-2xl  gap-2 md:gap-[20px] p-2 '>
          <th className='flex flex-col items-start ... '>
           <label className='uppercase font-bold text-slate-100 text-[10px] md:text-[15px] lg:text-[20px] rounded-[2px] ' htmlFor="Course Name">Course Name</label>
           <select onChange={(e) => {
            setCourseName(e.target.value);
            
            const getCreditUnit = courses.find(currentCourse => {
             return currentCourse.Course == e.target.value;
            });
            setSelectedUnit(getCreditUnit.Credit);
            }}
            value={selectedCourse}
             className='bg-slate-200 text-[10px] md:text-[15px] lg:text-[20px] uppercase md:max-w-[150px] w-full rounded-t-[2px]  outline-0 ' name="" id="">
            <option value="">select</option>
            {courses.length !== 0 && courses.map(course => {
              return <option 
               value={course.Course}>{course.Course}</option>
            })}
           </select>
           <input value={courseName}  onChange={e => setCourseName(e.target.value)} className='bg-slate-200 text-[10px] md:text-[15px] lg:text-[20px] uppercase md:max-w-[150px] max-w-[72px] rounded-b-[2px] px-[5px] outline-0 ' type="text" name="Course Name" placeholder='ele314' id="" />
            </th>
            <th className='flex flex-col items-start  ...  '>
              <label className='uppercase font-semibold text-slate-100 text-[10px] md:text-[15px] lg:text-[20px] '  htmlFor="Grade">Grade</label>
              <select value='' onChange={e => {
                const val = e.target.value;
                setGrade(e.target.value);
                
   let gradeRep;
   switch (val) {
     case '5':
       gradeRep = 'A';
       break;
   case '4':
     gradeRep = 'B';
     break;
     case '3':
       gradeRep = "C";
       break;
       case '2':
         gradeRep = 'D';
         break;
         case '1':
           gradeRep = 'E';
           break;
           case '0':
             gradeRep = 'F'
             break;
   };

                setSelectedGrade(gradeRep);
                }} className='w-full rounded-[2px] bg-slate-200 text-[10px] md:text-[15px] lg:text-[20px] rounded outline-0 ' name="grade" id="">
              <option value='select' >Select</option>
                <option value="5">A</option>
                <option value="4">B</option>
                <option value="3">C</option>
                <option value="2">D</option>
                <option value="1">E</option>
                <option value="0">F</option>
              </select>
              <input value={selectedGrade} disabled  onChange={e => setSelectedGrade(e.target.value)} className='bg-slate-200 text-[10px] md:text-[15px] lg:text-[20px] uppercase md:max-w-[150px] max-w-[72px] rounded-b-[2px] px-[5px] outline-0 ' type="text" name="Course Name" placeholder='grade...' id="" />
            </th>
            <th className='flex flex-col items-start  ... '>
              <label className='uppercase font-bold text-slate-100 text-[10px] md:text-[15px] lg:text-[20px] ' htmlFor="Credit Unit">Credit Unit</label>
              <select value={CreditUnit} onChange={e => {
              
                setSelectedUnit(e.target.value);
                }} className='w-full bg-slate-200 text-[10px] md:text-[15px] lg:text-[20px] rounded-[2px] outline-0 ' name="grade" id="">
                <option   value='select'>Select</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
               <option  value="10">10</option>
              </select>
              <input value={selectedUnit}  onChange={e => setSelectedUnit(e.target.value)} className='bg-slate-200 text-[10px] md:text-[15px] lg:text-[20px] uppercase md:max-w-[150px] max-w-[72px] rounded-b-[2px] px-[5px] outline-0 ' type="text" name="Course Name" placeholder='unit...' id="" />
              </th>
              <th>
                <button onClick={addCourse}  className='bg-yellow-500 hover:rounded-[5px] hover:shadow-2xl uppercase hover:bg-green-500 px-[20px] py-[8px]  text-[10px] md:text-[15px] lg:text-[20px]' type="button">Add</button>
              </th>
        </tr>
       
      </thead>
 
    </table>
   
 <table class="border-separate  border-spacing-[10px]   border-slate-400 ...">
{courseList.length == 0? <h1 className='text-slate-700 font-semibold capitalize'>Please enter your Course Data!</h1> : <thead>
  <tr className='   '>
    <th class="bordr px-2 uppercase  text-[12px] md:text-[20px]  order-[2px] rounded borde-slat-300 ...">Course </th>
    <th class="borde px-2 uppercase text-[12px] md:text-[20px] boder-[2px] rounded bordr-slate-300 ...">Grade </th>
    <th class="borde px-2 uppercase text-[12px] md:text-[20px] order-[2px] rounded border-sate-300 ...">Credit Unit </th>
   
  </tr>
</thead>}

<tbody className='text-center'>
  { 
    courseList.map(course => (
      <tr key={course.id}>
      <td className='text-[12px] bg-slate-50  md:text-[18px] font-[500] uppercase text-slate-700  '> {course.name}</td>
      <td className='text-[12px] md:text-[18px] bg-slate-50 font-[500] uppercase text-slate-700  '>{course.grade}</td>
      <td className='text-[12px] md:text-[18px] bg-slate-50 font-[500] upercase text-slate-700 '>{course.unit} </td>
     <td className='text-[12px] md:text-[18px] font-[500] upercase text-red-700 '> <BsFillTrash3Fill 
     onClick={() => {
      setCourseList(
        courseList.filter(c => c.id  !== course.id)
 
      
      );
   
let courseG;
switch(course.grade) {
  case 'A':
    courseG = 5;
    break;
case 'B':
  courseG = 4;
  break;
  case 'C':
    courseG = 3;
break;
case 'D':
  courseG = 2;
  break;
  case 'E':
  courseG = 1;
  break ;
  case 'F':
    courseG = 0;
    break;
}

     let courseD = courseG * course.unit;
      totalGrad -= courseD;
      totalUnit -= course.unit;
      AvCgpa = totalGrad / totalUnit;
   if (AvCgpa == isNaN) {
    AvCgpa = 0;
   } else {
    AvCgpa = AvCgpa;
   }
     }} /></td>
    </tr>
    ))
  }
 
  {courseList.length !== 0  && <tr className='bg-slate-50 '>
  <th className='rounded uppercase shadow-2xl'>Total :</th>
  <td>{totalGrad}</td>
  <td>{totalUnit}</td>
</tr>}
</tbody>

<tfoot className='mt-[150px] '>

</tfoot>
 </table>
{  <div  className='flex flex-col justify-center rounded-b py-[5px] px-[5px] gap-1 items-center bg-slate-200 w-full'>

<div className='flex justify-center rounded-b py-[10px] px-[5px] gap-5 items-center bg-slate-50 w-full flex-row'>
  <h1 className='uppercase font-bold text-slate-500 text-[15px] md:text-[20px] '>Average cgpa:</h1>
  <h1 className='uppercase  font-bold text-slate-500 text-[15px] md:text-[20px] '>{ isNaN(AvCgpa)? 0 :  AvCgpa.toFixed(2)}</h1>

</div>
<span className='text-slate-90'>{courseList.length !== 0 && remark}</span>
</div>}
  </div>
  </div>
  </div>
)
};





export const CalculateGp = () => {
  return(
    <div className="px-[20px] flex pt-[50px] py-[20px] justify-around   flex-col rounded-[60px] bg-white gap-[20px] md:flex-row-reverse md:flex-row ... items-center py-[50px] ">
<div className="flex flex-col max-w-[600px] gap-[20px] ">
    <h1 className="text-[20px]  w-fit  rounded-[15px] text-slate-900 font-semibold ">Calculate your <span className="text-[20px]  w-fit  rounded-[15px] text-slate-900 font-bold uppercase">cgpa</span> </h1>
    <p className="md:text-[15px] text-[12px] font-[400] ">The aim of the Department is to train students who are willing to become Electrical Engineers to become sound in the field. The trained students should be confident, self-reliant and be able to execute what they have learnt and strive to be the best among equals and to be able to do this independently. Other aims are:  </p>
<p><Link to='/cgpa' className="bg-slate-500 text-[15px] text-slate-50 px-[10px] py-[5px] mt-[60px] font-semibold hover:bg-slate-900 rounded-[3px]  ">Calculate</Link>
</p>
</div>
<div className=" max-w-[600px]">
    <img className="rounded-[20px] " src={cgpaImg} alt="" />
</div>
        </div>
  )
}





export default CGPACalculator;
