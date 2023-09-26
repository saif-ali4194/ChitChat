import React, { useState } from 'react'
import "../../Styles/Pages/Auth/Auth.css" 
import { useLocation, useNavigate } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/Key';
import LockResetIcon from '@mui/icons-material/LockReset';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import axios from "axios";

const Auth = () => {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const { pathname } = location;

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [conpass, setConpass] = useState("");

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    function handleChangeSignup() {
        navigate("/login");
    }
    function handleChangeLogin() {
        navigate("/signup");
    }

    const handleNameChange = (event) => {
		setName(event.target.value);
        console.log(name);
	};
    const handleEmailChange = (event) => {
		setEmail(event.target.value);
	};
    const handlePassChange = (event) => {
		setPass(event.target.value);
	};
    const handleConpassChange = (event) => {
		setConpass(event.target.value);
	};

    const handleOnboarding = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:4000/api/auth/signup", {
                name: name,
                email: email,
                password: pass,
            })
    
            if (response.status === 201) console.log("OnBoarding successful")
        } catch(e) {
            console.log(e);
        }
    }
  return (
    <div className='auth'>
    <div className="auth-hero">
        <div id="auth-left"></div>
        <div id="auth-right">
        {pathname === '/signup' && <div className="auth-signup">
            <h3>Signup</h3>
            <form onSubmit={handleOnboarding}>
            <div className="auth-field">
                    <label htmlFor="" > <PersonIcon className='custome-icon'/>Name</label>
                    <input type="text" onChange={handleNameChange} required/>   
                </div>
                <div className="auth-field">
                    <label htmlFor=""> <EmailIcon className='custome-icon'/>Email</label>
                    <input type="email" onChange={handleEmailChange} required/>   
                </div>
                <div className="auth-field">
                <label htmlFor=""><KeyIcon className='custome-icon'/>Password</label>
                <div className="pass-div">
                <input type={showPassword ? 'text' : 'password'} onChange={handlePassChange} required/>
                    {showPassword ? (
                        <VisibilityOffIcon
                            className="password-toggle-icon"
                            onClick={togglePasswordVisibility}
                        />
                        ) : (
                        <VisibilityIcon
                            className="password-toggle-icon"
                            onClick={togglePasswordVisibility}
                        />
                        )}
                </div>
                    
                </div>
                <div className="auth-field">
                <label htmlFor=""><LockResetIcon className='custome-icon'/> Confirm Password</label>
                <input type={showPassword ? 'text' : 'password'} onChange={handleConpassChange} required/>
                </div>
                <button type='submit'>Join</button>
            </form>
            <span id="auth-change" onClick={handleChangeSignup}>Already have an account?</span>
            
            </div>}
        {pathname === '/login' && <div className="auth-login">
        <h3>Login</h3>
            <form action="">
                <div className="auth-field">
                    <label htmlFor=""><EmailIcon className='custome-icon'/>Email</label>
                    <input type="email" onChange={handleEmailChange} required/>   
                </div>
                <div className="auth-field">
                <label htmlFor=""><KeyIcon className='custome-icon'/>Password</label>
                <div className="pass-div">
                <input type={showPassword ? 'text' : 'password'} onChange={handlePassChange} required/>
                    {showPassword ? (
                        <VisibilityOffIcon
                            className="password-toggle-icon"
                            onClick={togglePasswordVisibility}
                        />
                        ) : (
                        <VisibilityIcon
                            className="password-toggle-icon"
                            onClick={togglePasswordVisibility}
                        />
                        )}
                </div>
                </div>
                <button>Login</button>
            </form>
            <span id="auth-change" onClick={handleChangeLogin}>Need an account?</span>
            </div>}
        </div>
    </div>
    </div>
  )
}

export default Auth
