import React from 'react';
import logo from "../assets/images/logo-vertical-sm.png";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import logout from "../assets/images/logOut.png";

const Header = () => {
    const navigate = useNavigate();
    const logOut = ()=>
    {
        localStorage.removeItem("authToken");
        toast.success("You've been logged out !")
        navigate("/");
    }
  return (
    <div className='header-border'>
        <div className='header d-flex justify-content-between align-items-center'>
            <img className='logo' src={logo} alt='Orion' />
            <button className='button-sm font-joan' onClick={logOut}><img className='icons me-2' src={logout} alt='Create new task'/>SIGN OUT </button>
        </div>
    </div>
  )
}

export default Header;
