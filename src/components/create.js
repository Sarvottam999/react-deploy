import axios from "axios";
import React, { useState } from 'react'
import {useNavigate} from "react-router-dom"
import { Link } from "react-router-dom";


const Create = () => {
  const[name,setName] = useState("");
  const[email,setEmail] = useState("");
  const navigate = useNavigate();


  const header = {"access-control-allow-origin":"*"}

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("https://6360f69aaf66cc87dc1f1271.mockapi.io/app1",{ 
      name: name, 
      email: email,
 })
.then(()=>{
  navigate("/read")

})
  };


  

  return (
    <div className='container'>
    <form>
    <div className="mb-3">
    <label htmlFor="exampleInputName1" className="form-label" >Name</label>
    <input type="text" className="form-control" id="exampleInputName1"  onChange={(e)=> {setName(e.target.value)}}/>
  </div>
  

  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=> {setEmail(e.target.value)}} />
   </div>
  
  <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>

  <Link to ="/read"> 
<button type="submit" className="btn btn-primary mx-5"> show</button>
</Link>

</form>
    </div>
  )
}

export default Create