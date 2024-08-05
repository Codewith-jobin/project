import React, { useState } from 'react'
import  './Login.css'
import { useNavigate } from 'react-router-dom';

function Loginn() {
    const[Username,setUsername]=useState();
    const[password,setPassword]= useState();
    const[isvalid,setisvalid]=useState(true);
    const navigate= useNavigate ();
    const correctusername="jobin-the-fo"
    const correctpassword="123456"

    const handlelogin=()=>{
        if(Username===correctusername && password===correctpassword){
            navigate("/home")
        }

            else{
                setisvalid(false)

            }
        
    }
  return (
    <div id='loginform'>

            <h2 id='head'>Login-Page</h2>
        <div id='cent'>
            <input id='one' 
            type="text"
            placeholder='enter your user-id'
            value={Username} 
            onChange={(e)=>{setUsername(e.target.value)}}/>

            <input id='two'
             type="text"
             placeholder='enter password'
             value={password}
             onChange={(e)=>{setPassword(e.target.value)}}

               />
             <button onClick={handlelogin}>login</button>
             {!isvalid && <p>invalid user or password</p>}
            


        </div>
      
    </div>
  )
}

export default Loginn
