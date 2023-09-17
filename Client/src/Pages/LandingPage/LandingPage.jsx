import React from 'react'
import "../../Styles/Pages/LandingPage/LandingPage.css"
import Header from './Header.jsx'
import net from "../../Assets/net.webp"
import { Route, Routes, useNavigate } from 'react-router-dom';
import Auth from '../Auth/Auth';

const LandingPage = () => {
  const navigate = useNavigate();

  function handleSignUp() {
    navigate("/signup");
  }
  function handleLogin() {
    navigate("/login");
  }
  return (
    <div className='landingPage'>
      <Header onSignUp={handleSignUp} onLogin={handleLogin} />
      <div className="land-body">
        <img src={net} id="land-img"/>
        <div className="tag">
          <h2>Experience ChitChat</h2>
          <h3>Where Friendships Begin</h3>
        </div>
        
        <div class="land-wave">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
          </svg>
        </div>
      </div>

      <div className="land-sec2">
        <div id="upper-land">
        <b>Why Use Chit Chat?</b>
        <p>With our app, you can effortlessly stay connected with friends and family, no matter where they are. Experience the convenience of real-time messaging, group chats, and more – all in the ChitChat way."</p>
        </div>
        <div id="bottom-land">
        <button className='signUp' onClick={handleSignUp}>SignUp</button>
          <button className='login' onClick={handleLogin}>Login</button>  
        </div>
        
      </div>

      <div className="land-footer">
        &copy; {new Date().getFullYear()} ChitChat
      </div>

    <Routes>
      <Route path="/signup" element={<Auth />} />
      <Route path="/login"  element={<Auth />} />
    </Routes>
      
    </div>
  )
}

export default LandingPage
