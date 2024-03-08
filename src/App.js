import './App.css';

//parent component
function App() {
//variable
  return (
    <div className="App">
      <header className="App-header">
        hello world

        {/* chiled component*/}
        <GetNameComponnent name = 'reza' age ={23} email="alireza@gmail.com"/>
        <GetNameComponnent name = 'ali' age ={20} email="ali@gmail.com"/>
        <Job salary = {205000} position = "react dev" company = "amazon" />
      </header>
    </div>
  );
}

//funcation
const getName = ()=>{
  return 'alireza'
}

//props
// const props = {
//   name : "alireza",
//   age : "31",
//   email: "alirezaatashnejad@gmail.com"
// }


//component

const GetNameComponnent = (props)=>{
  
  return (
  //  <div>
  //   <h1>Alireza</h1> 
  //   <h2>30</h2>
  //   <h3>alirezaatashnejad@gmail.com</h3>
  // </div>
    <div>
      <h1>{props.name}</h1>
      <h1>{props.age}</h1>
      <h1>{props.email}</h1>
    </div>

  )
}
//component Job

const Job = (props)=>{
  return(
   <div>
    <h1>{props.salary}</h1>
    <h1>{props.position}</h1>
    <h1>{props.company}</h1>
   </div>
  )
}
export default App;
