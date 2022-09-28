import React ,{useState}  from "react";

const Contactcard=(props)=>{
    
  const[showage,setshowage]=useState(false)
    
    return(
        <div className="contact-card">
        <img src={props.avatarUrl} alt="profile"></img>
        <div className="user-details">
          <p>Name: {props.name}</p>
          <p>Emali:{props.email}</p>
<button onClick={()=>setshowage(!showage)}>AGE</button>
           {showage?<p>Age={props.age}</p>:null }
        </div>
        </div>
      )
}

export default Contactcard