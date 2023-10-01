import React from 'react'
import "../../../Styles/Components/contacts/Contacts.css"
import logo from "../../../Assets/logo.webp"
const Contacts = () => {
  return (
    <div className='contacts'>
      <div className="contacts-title">
        <img src={logo} />
        <h1>Chit<span>Chat</span></h1>
      </div>
    </div>
  )
}

export default Contacts 
