import React from 'react'
import "../../Styles/Pages/HomePage/HomePage.css"
import Navbar from '../../Components/navbar/Navbar'
import Contacts from '../../Components/navbar/contacts/Contacts'
import InfoSection from '../../Components/navbar/infoSection/InfoSection'

const HomePage = () => {
  return (
    <div className='homepage'>
      <div className="home-section">
        <Contacts />
        <InfoSection />
      </div>
      <Navbar />
    </div>
  )
}

export default HomePage
