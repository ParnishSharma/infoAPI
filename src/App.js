import React,{useState,useEffect} from "react";
import './App.css'
import Contactcard from "./Contactcard.js";


const App = () => {
 
const [results, setresults] = useState([])
useEffect(() => {
  fetch("https://randomuser.me/api/?results=15")
.then(Response=>Response.json())
.then(data=>{console.log(data)
setresults(data.results)});

},[]);



  return (
    <div>  
      {results.map((result, index) => {
        return (

          <Contactcard
            key={index}
            avatarUrl={result.picture.large}
            name={result.name.first}
            email={result.email}
            age={result.dob.age} />
        )

      })}
    </div>

  )


}
export default App;