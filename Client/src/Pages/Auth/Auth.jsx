import React, { useEffect, useState } from 'react'
import "../../Styles/Pages/Auth/Auth.css" 
import { useLocation, useNavigate } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/Key';
import LockResetIcon from '@mui/icons-material/LockReset';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Auth = () => {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const { pathname } = location;

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [conpass, setConpass] = useState("");
    const [disable, setDisable] = useState(true);
    const [suc, setSuc] = useState(false);

    useEffect(()=> {
        if(suc === true) {
        console.log("yeahhhh")
        setName('');
        setEmail('');
        setPass('');
        setConpass('');
        setDisable(true);
        }
        console.log(name);
        
    }, [suc]);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    function handleChangeSignup() {
        setSuc(false);
        navigate("/login");
    }
    function handleChangeLogin() {
        setSuc(false);
        navigate("/signup");
    }

    const handleNameChange = (event) => {
		setName(event.target.value);
        console.log(name);
	};
    function isValidEmail() {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(email);
      }
      
    const handleEmailChange = (event) => {
		setEmail(event.target.value);
	};
    const handlePassChange = (event) => {
		setPass(event.target.value);

        if(conpass === event.target.value && conpass !== "") setDisable(false);
        else setDisable(true);
	};
    const handleConpassChange = (event) => {
		setConpass(event.target.value);

        if(pass === event.target.value && pass !== "") setDisable(false);
        else setDisable(true);
	};

    function is_pass_valid() {
        const minLength = 8;
      
        if (pass.length < minLength) {
          return { valid: false, msg: 'Password should be at least 8 characters long' };
        }
      
        if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(pass)) {
          return { valid: false, msg: 'Password should contain at least one special character' };
        }
      
        if (!/\d/.test(pass)) {
          return { valid: false, msg: 'Password should contain at least one digit' };
        }
      
        if (!/[A-Z]/.test(pass)) {
          return { valid: false, msg: 'Password should contain at least one capital letter' };
        }
      
        return { valid: true };
      }
    

    const handleOnboarding = async (e) => {
        e.preventDefault();
        const validation = is_pass_valid();
        if(!validation.valid) {
            toast.error(validation.msg, {
                position: 'top-right',
                autoClose: 3000, 
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
        } else if (!isValidEmail(email)) {
            toast.error("Please use correct email", {
                position: 'top-right',
                autoClose: 3000, 
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
        }else {
            try {
                const response = await axios.post("http://localhost:4000/api/auth/signup", {
                    name: name,
                    email: email,
                    password: pass,
                })

                console.log(response);
                if (response.status === 201) {
                    console.log("OnBoarding successful");
                    setSuc(true);
                    navigate("/home");
                } 
            } catch(e) {
                if(e.response.status === 400) {
                    navigate("/login");
                    toast.error("You are already registered!", {
                        position: 'top-right',
                        autoClose: 3000, 
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                      })
                } else {
                    toast.error(e.response.error, {
                        position: 'top-right',
                        autoClose: 3000, 
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                      })
                }
                
            }
        } 
    }

    const handleLogin = async (e) => {
        e.preventDefault();

        const validation = is_pass_valid();
        if(!validation.valid) {
            toast.error("Incorrect Password", {
                position: 'top-right',
                autoClose: 3000, 
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
        } else if (!isValidEmail(email)) {
            toast.error("Please use correct email", {
                position: 'top-right',
                autoClose: 3000, 
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
        } else {
            try {
                const response = await axios.post("http://localhost:4000/api/auth/login", {
                    email: email,
                    password: pass,
                })

                if(response.status === 200) {
                    setSuc(true);
                    navigate("/home");
                } 
            } catch(e) {
                if(e.response.status == 401) {
                    toast.error("Incorrect password!", {
                        position: 'top-right',
                        autoClose: 3000, 
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                      })
                } else if (e.response.status == 400) {
                    navigate("/signup");
                    toast.error("You are not registered!", {
                        position: 'top-right',
                        autoClose: 3000, 
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                      })
                } else {
                    toast.error(e.response.error, {
                        position: 'top-right',
                        autoClose: 3000, 
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                      })
                }    
            }
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
                    <input type="text" value={name} onChange={handleNameChange} required/>   
                </div>
                <div className="auth-field">
                    <label htmlFor=""> <EmailIcon className='custome-icon'/>Email</label>
                    <input type="email" value={email} onChange={handleEmailChange} required/>   
                </div>
                <div className="auth-field">
                <label htmlFor=""><KeyIcon className='custome-icon'/>Password</label>
                <div className="pass-div">
                <input type={showPassword ? 'text' : 'password'} value={pass} onChange={handlePassChange} required/>
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
                <input type="password" value={conpass} onChange={handleConpassChange} required/>
                </div>
                <button type='submit' disabled={disable}>Join</button>
            </form>
            <span id="auth-change" onClick={handleChangeSignup}>Already have an account?</span>
            
            </div>}
        {pathname === '/login' && <div className="auth-login">
        <h3>Login</h3>
            <form onSubmit={handleLogin}>
                <div className="auth-field">
                    <label htmlFor=""><EmailIcon className='custome-icon'/>Email</label>
                    <input type="email" value={email} onChange={handleEmailChange} required/>   
                </div>
                <div className="auth-field">
                <label htmlFor=""><KeyIcon className='custome-icon'/>Password</label>
                <div className="pass-div">
                <input type={showPassword ? 'text' : 'password'} value={pass} onChange={handlePassChange} required/>
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
                <button type='submit'>Login</button>
            </form>
            <span id="auth-change" onClick={handleChangeLogin}>Need an account?</span>
            </div>}
        </div>
    </div>
    </div>
  )
}

export default Auth
