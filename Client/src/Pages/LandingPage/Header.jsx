import React from 'react'
import "../../Styles/Pages/LandingPage/Header.css"
const Header = ({ onSignUp, onLogin }) => {
  return (
    <div className='header'>
        <div id="head_left"><h1>Chit<span>Chat</span></h1></div>
        <div id="head_right">
            <button className='signUp' onClick={onSignUp}>SignUp</button>
            <button className='login' onClick={onLogin}>Login</button>
        </div>
    </div>
  )
}

export default Header
