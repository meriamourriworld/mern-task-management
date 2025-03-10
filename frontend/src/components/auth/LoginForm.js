import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../api/userApi';

const LoginForm = () => {
    const [user, setUser] = useState({username: "", password : ""});
    const navigate = useNavigate();

    const handleChange = (e)=>
    {
        setUser({...user, [e.target.name] : e.target.value});
    };

    const handleSubmit = async (e)=>
    {
      e.preventDefault();
      login(user, navigate);
    }

  return (
    <div className='text-center'>
      <div>
        <h1 className='display-1 font-italiana'>Welcome Back</h1>
        <h5 className='text-secondary'>Start your day efficiently</h5>
      </div>

      <div>
        <form onSubmit={handleSubmit} className='d-flex flex-column pt-5 pb-3'>
            <input id='username' name='username' type='text' className='default-input font-joan' placeholder='Username' value={user.username} onChange={handleChange} />
            <input id='password' name='password' type='password' className='default-input mt-3' placeholder='Password' value={user.password} onChange={handleChange} required/>
            <button type='submit' className='default-button mt-4'>Sign in</button>
        </form>
        <div className='more-info'>
            Don’t have an account ? <span><Link to="/register">Register</Link></span>
        </div>
      </div>
    </div>
  )
}
export default LoginForm;
