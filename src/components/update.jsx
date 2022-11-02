import React, { useEffect, useState } from 'react'
import axios from "axios";
import {useNavigate} from "react-router-dom"
import { Link } from "react-router-dom";


const Update = () => {
 console.log("@@@@@@@uupdate");

    const[id,setId]=useState(0);
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
const navigate = useNavigate();
    

    // 

useEffect(() => {
 console.log("@@@@@@@useeffect");
   
     setId(localStorage.getItem("id"))
     setName(localStorage.getItem("name"))
     setEmail(localStorage.getItem('email'))
},[])
    

const  handleSubmite =  (e) => {
    e.preventDefault() 
 console.log("=====@",id, name, email);

    axios.put(`https://6360f69aaf66cc87dc1f1271.mockapi.io/app1/${id}`,{ 
      name: name, 
      email: email,
 })
.then((res)=>{
  navigate("/read")
 console.log("successfuly--updated@@@",res);
})
    
}

  return (
<div className='container'>
  

    <form>
    <div className="mb-3">
    <label htmlFor="exampleInputName1" className="form-label" >Name</label>
    <input type="text" className="form-control" id="exampleInputName1"  
    onChange={(e)=> {setName(e.target.value); console.log("##oncahange",id, name, email);}}
    value={name}
    />
  </div>
  

  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
    onChange={(e)=> {setEmail(e.target.value) }}
    value={email}
     />
   </div>
  
  <button type="submit" className="btn btn-primary" 
  onClick={handleSubmite}
  >Submit</button>

<Link to = "/read">
<button type="submit" className="btn btn-primary mx-5"> back</button>
</Link>
</form>
    </div>
  )
}

export default Update