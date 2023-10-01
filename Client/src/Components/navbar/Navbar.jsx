import React from 'react'
import Avatar from '@mui/material/Avatar';
import { curUser } from '../../TestData/curUser'
import "../../Styles/Components/navbar/Navbar.css"
import GroupsIcon from '@mui/icons-material/Groups';
import SettingsIcon from '@mui/icons-material/Settings';
import { useLocation, useNavigate } from 'react-router-dom';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

const Navbar = () => {
  const navigate  = useNavigate();
  const location = useLocation();

  const handleIcons = (url_sec) => {
    navigate(`/${url_sec}`);
  };
  return (
    <div className='navbar'>
      <div className="nav-left">
        <Avatar className='nav-ava' src={curUser.avatar}/>
        <h2>{curUser.name}</h2>
      </div>
      <div className="nav-right">
        {location.pathname === "/home" ?
          (<ChatBubbleIcon className='n-r-icons active'/>) :
          (<ChatBubbleOutlineIcon className='n-r-icons' onClick={() => handleIcons("home")}  />)
        }

        {location.pathname === "/community" ?
          (<GroupsIcon className='n-r-icons active' />) :
          (<GroupsOutlinedIcon className='n-r-icons'onClick={() => handleIcons("community")}/>)
        }

        {location.pathname === "/settings" ?
          (<SettingsIcon className='n-r-icons active'id="n-r-margin-icon"/>):
          (<SettingsOutlinedIcon className='n-r-icons' id="n-r-margin-icon" onClick={() => handleIcons("settings")}/>)
        }
      </div>
    </div>
  )
}

export default Navbar
