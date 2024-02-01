import React, { useContext } from 'react'
import {signOut} from "firebase/auth"
import { auth } from '../firebase'
import { AuthContext } from '../context/AuthContext'

const Navbar = () => {
  const {currentUser} = useContext(AuthContext)
  console.log(currentUser.photoURL)

  return (
    <div className='navbar'>
      <span className="logo">PWA Chat App</span>
      <div className="user">
        <img src={currentUser.photoURL} alt={`${currentUser.displayName}`} />
        <span>{currentUser.displayName}</span>
        <button onClick={()=>signOut(auth)}>logout</button>
      </div>
    </div>
  )
}

export default Navbar