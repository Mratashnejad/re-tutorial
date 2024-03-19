import './App.css';
// import {User} from "./User";

import { useState } from 'react';
import { Classes } from './Classes';
//parent component
function App() {

  const [textColor , setTextColor] = useState ("red")



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
  return (

    <div>
      <button onClick={()=>setTextColor(textColor === "red" ? "green" : "red")}>change color</button>
      <h1 style ={{color : textColor}}>alireza</h1>
    </div>

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
  );
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
