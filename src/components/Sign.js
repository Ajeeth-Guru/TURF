import React, { useState } from 'react'
import axios from'axios'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import'./Sign.css'
export default function Sign() {
    const[name,setName]=useState('')
    const[mail,setMail]=useState('')
    const Navigate=useNavigate()
    const[password,setPassword]=useState('')
    const hanleSubmit=()=>{
        axios.post('http://localhost:3001/user',{name,mail,password})
        .then(res=>{console.log(res)
          alert('your signin succesfull')
        })
        .catch(err=>{console.log(err)})
    }
  return (
    <div className='container'>

        <div class="card-1">
  <div class="card-1-header">
    <div class="text-header"> User Register</div>
  </div>
  <div class="card-1-body">
    <form action="#" onSubmit={hanleSubmit} >
      <div class="form-group">
        <label for="username">Username:</label>
        <input required="" class="form-control" name="username" id="username" type="text" onChange={(e)=>{setName(e.target.value)}}/>
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input required="" class="form-control" name="email" id="email" type="email" onChange={(e)=>{setMail(e.target.value)}}/>
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input required="" class="form-control" name="password" id="password" type="password" onChange={(e)=>{setPassword(e.target.value)}}/>
      </div>
     <button type="submit" class="btn" value="submit">Sign in</button></form><br></br>
     <span className='text-dark'>Already have a account?</span>
     <Link className='link-log' to='/login1'>Login</Link>
  

  </div>
</div>

    </div>
  )
}
