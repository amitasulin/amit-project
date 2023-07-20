import './SignInForm.css'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import { UserContext } from '../../context/userContext';
import { useContext } from 'react';


export default function SignInForm() {

const navigate = useNavigate();

const {signIn} = useContext(UserContext);

const [email,setEmail] = useState(null);
const [password,setPassword]= useState(null);


  const handleSubmit = async (e) => {
    e.preventDefault();
    await signIn(email,password);
    return navigate('/');


  }

  return (
    <div className='SignInForm'>
    <form onSubmit={(e)=>handleSubmit(e)}>
    <label htmlFor='email'> Email </label>
    <input type='text' name='email' onChange={(e)=>setEmail(e.target.value)} placeholder='Enter your email'/>
    
    <br/><br/>

    <label htmlFor='password'> Password </label>
    <input type='text' name='password' onChange={(e)=>setPassword(e.target.value)} placeholder='Enter your password'/>
    
    <br/><br/>

    <button type='submit'> Sign In </button>

    </form>

    </div>
  )
}
