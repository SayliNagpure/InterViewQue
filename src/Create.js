import React, { useState } from 'react'
// import axios from "axios"
import axios from"axios"
import { useNavigate } from 'react-router-dom'
const Create = () => {
const [inputData,setInputData]=useState({username:"",email:"",role:""})


const naviget=useNavigate()
function handleSubmit(e){
    e.preventDefault()

    axios.post(`http://localhost:8000/users`,inputData).then(res=>{
        alert("Data Added Successfully!")
        naviget("/")
    }).catch(err=>console.log(err))
}
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>UserName</label>
                    <input type="text" name="username" onChange={(e)=>setInputData({...inputData,username:e.target.value})}/>
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" name="eamil" onChange={(e)=>setInputData({...inputData,email:e.target.value})}/>
                </div>
                <div>
                    <label>Role</label>
                    <input type="text" name="role" onChange={(e)=>setInputData({...inputData,role:e.target.value})}/>
                </div>
                <div>
                    <button>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Create