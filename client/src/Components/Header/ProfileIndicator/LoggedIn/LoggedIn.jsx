import React, { useContext } from 'react'
import { UserContext } from '../../../../context/userContext';
import './LoggedIn.css'
import { Link } from 'react-router-dom';


export default function LoggedIn() {
  
    const { userData, signOut } = useContext(UserContext);

  
  
    return (
    <div className='LoggedIn'>
       <div> Hello </div> <Link to='/profile'></Link>{userData.firstName} 
       <button onClick={()=>signOut()}>sign out</button>

    </div>
  )
}
