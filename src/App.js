import './App.css';
// import {User} from "./User";
import Text from './text';
import { useEffect, useState } from 'react';
//import { Classes } from './Classes';
//import Course from './Course';

import axios from 'axios';
//parent component
function App() {
  //Exam

  // const [count , setCount] = useState (0)

  // const [textColor , setTextColor] = useState ("red")

  // const [showText , setShowText] = useState(true)

  // const toggleText=()=>{
  //   setShowText(!showText)
  // }

  // const [inputValue , setInputValue] = useState ("")
  // const handleInputValue = (event)=>{
  //   setInputValue(event.target.value)
  // }
  // const [age , setAge] = useState (0)
  // const increaseAge = () =>{
  //   setAge (age + 1)
  // }

  // const classes = [
  //   {name : "html" , finished : false},
  //   {name : "javascript" , finished : true},
  //   {name : "css" , finished : true},
  //   {name : "python" , finished : true},
  // ];

  // const age  = 2;
  // if (age>20) console.log('over age')
  // else console.log('under age')
  //OR
  //age > 20 ? console.log('over age') : console.log('under age')
  //if (age>20)

  //lists : filter , forech , map
  // const names = ["ali" , "reza" , "xashi" , "afi"]

  // const users = [
  //   {name: "ali" , age:31},
  //   {name:"reza" , age:7},
  //   {name:"xashi" , age:2},
  //   {name:"afi" , age :30}
  // ]
  // //variable

  // const [courselist , setCourseList] = useState([]);
  // const [newCourse , setNewCourse] = useState("");
  // const handelChange = (event)=>{
  //   setNewCourse(event.target.value)
  // }

  // const addCourse =()=>{

  //   const course = {
  //     id : courselist.length === 0 ? 1 : courselist[courselist.length -1].id + 1,
  //     courseName : newCourse,
  //     isCompleted : false,
  //   }
  //   const newCourseList = [...courselist , course]
  //   setCourseList(newCourseList)
  // }

  // const deleteCourse = (courseId) =>{
  //   setCourseList(courselist.filter((course)=> courseId !== course.id))
  // }

  // const completeCourse = (courseId)=>{
  //   const newCourseList = courselist.map((course)=>{
  //     if(course.id === courseId) return {...course ,isCompleted : !course.isCompleted}
  //     else
  //     return course
  //   })
  //   setCourseList(newCourseList)
  // }
  // const [showText , setShowText] = useState(false)

  // fetch('https://catfact.ninja/fact').then((res) => res.json()).then((data)=>{
  //   console.log(data)
  // })
  const [catFact, setCatFact] = useState('');
  useEffect(() => {
    fetchFact();

  },[]);

  const fetchFact=()=>{
    axios.get('https://catfact.ninja/fact').then((res) => {
      console.log(res.data);
      setCatFact(res.data.fact);
    });
  }

  const [name ,setName] = useState("")
  const [predictedResult , setPredictedResult] = useState({})
  const fetchAge=()=>{
    axios.get(`https://api.agify.io/?name=${name}`).then((res)=>{
      console.log(res.data)
      setPredictedResult(res.data)
    })
  }
//https://excuser-three.vercel.app/v1/excuse/party
//https://excuser-three.vercel.app/v1/excuse/family
//https://excuser-three.vercel.app/v1/excuse/office


const [generateExcuse , setGenerateExcuse] = useState ("")
const fetchExcuse = (excuse) => {
  axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}/`)
    .then((res) => {
      if (res.data && res.data.length > 0 && res.data[0].excuse) {
        console.log(res.data[0].excuse);
        setGenerateExcuse(res.data[0].excuse);
      } else {
        console.error("Invalid or empty response data:", res.data);
        // Handle the case when response data is empty or not as expected
        setGenerateExcuse("No excuse found"); // Example: Set a default message
      }
    })
    .catch((error) => {
      console.error("Error fetching excuse:", error);
      // Handle the error case
      setGenerateExcuse("Error fetching excuse"); // Example: Set a default error message
    });
};


  return (
    // example 3
    <div className='App'>
      <div>
      <h1>Excuse API</h1>
      <button onClick={()=>fetchExcuse("office")}>Office</button>
      <button onClick={()=>fetchExcuse("party")}>party</button>
      <button onClick={()=>fetchExcuse("family")}>family</button>
      <h2>{generateExcuse}</h2>
      </div>
{/* example 1 */}
    <div>
      <h1>Cat Fact API</h1>
      <button onClick={fetchFact}>Fetch Data</button>
      <p>{catFact}</p>
    </div>
 {/* example 2 */}

      <div>
      <span>
      <h1>Age predicter API</h1>
      <input placeholder='ex. Alireza ...' onChange={(event)=>setName(event.target.value)}></input>
      <button onClick={fetchAge}>Predict Age</button>
      <h1>age is : {predictedResult?.age}</h1>
      <h1>count is : {predictedResult?.count}</h1>
      </span>
      </div>
      </div>
  );

  // return ()

  //     <div className='App'>

  //       <button onClick={()=>setShowText(!showText)}>show text</button>
  //       {showText && <Text />}
  //     </div>
  // )

  //       {/* <div className='add-course'>
  //         <input type="text" onChange={handelChange}></input>
  //         <button onClick={addCourse}>Add Course</button>
  //       </div>

  //       <div className='list'>
  //       {courselist.map ((course,index) => {
  //         return (
  //           <Course key = {index} course={course} deleteCourse={deleteCourse}
  //           completeCourse = {completeCourse}/>
  //         )
  //       })}
  //       </div>
  //     </div> */}

  // <div>
  //   <button onClick={()=> setCount(count +1)}>increase</button>
  //   <button onClick={()=> setCount(count -1)}>decereas</button>
  //   <button onClick={()=> setCount(0)}>set to zero</button>
  // <h1>{count}</h1>
  // </div>

  // <div>
  //   <button onClick={()=>setTextColor(textColor === "red" ? "green" : "red")}>change color</button>
  //   <h1 style ={{color : textColor}}>alireza</h1>
  // </div>

  // <div>
  // <button onClick={toggleText}>show /hide</button>
  // {showText && <h1>Alireza Atashnejad</h1>}
  // </div>
  // <div>
  //   <input type="text" onChange={handleInputValue} />
  //   <h1>{inputValue}</h1>
  // </div>

  // <div>
  //   <h1>{age}</h1>
  //   {/* using external function */}
  //   <button onClick={increaseAge}> increase Age</button>
  //   {/* using internal function */}
  //   <button onClick={() => setAge (age - 1)}>Decrease Age</button>
  // </div>

  // <div>
  //   {classes.map((classItem,index)=>{
  //     return <Classes key ={index} name={classItem.name} index={index} finished={classItem.finished} />
  //   })}
  // </div>

  // <div>
  //   {users.map((user,index)=>{
  //     return <User key={index} name={user.name} age={user.age} />
  //   })}

  // </div>

  // <div>
  //   {users.map((user , index)=>{
  //     return <h2 key ={index}> {user.name} : {user.age}</h2>
  //   })}
  // </div>

  // <div>
  //   {names.map((name , index)=>{
  //       return <h1 key={index}>{name}</h1>
  //   })}
  // </div>

  // <div className='App'>

  //   {age > 20 ? <h1> Over 20 </h1>  : <h1>Under 20 </h1>}
  //   {age === 20 && <h1> Age is  equal to 20</h1>}

  //   {/* <button type='submit' className={age > 20 ? "success" : "warninng"}>click me</button> */}
  //   <button type='submit' style ={{fontSize : age > 20 ? "20px" : "30px"}}>click me</button>
  // </div>

  //   <div className="App">
  //     <header className="App-header">
  //       Over
  //       {/* chiled component*/}
  //       {/* <GetNameComponnent name = 'reza' age ={23} email="alireza@gmail.com"/>
  //       <GetNameComponnent name = 'ali' age ={20} email="ali@gmail.com"/>
  //       <Job salary = {205000} position = "react dev" company = "amazon" />\
  // */}
  //     </header>
  //   </div>
  // );
  // return <div className='App'><header className="App-header"> Under</header></div>
}

//funcation
// const getName = ()=>{
//   return 'alireza'
// }

//props
// const props = {
//   name : "alireza",
//   age : "31",
//   email: "alirezaatashnejad@gmail.com"
// }

//component

// const GetNameComponnent = (props)=>{

//   return (
//   //  <div>
//   //   <h1>Alireza</h1>
//   //   <h2>30</h2>
//   //   <h3>alirezaatashnejad@gmail.com</h3>
//   // </div>
//     <div>
//       <h1>{props.name}</h1>
//       <h1>{props.age}</h1>
//       <h1>{props.email}</h1>
//     </div>

//   )
// }
//component Job

// const Job = (props)=>{
//   return(
//    <div>
//     <h1>{props.salary}</h1>
//     <h1>{props.position}</h1>
//     <h1>{props.company}</h1>
//    </div>
//   )
// }
export default App;
