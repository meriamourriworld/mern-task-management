import React,{ useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { register } from '../../api/userApi';

const RegisterForm = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
                            username: "",
                            email : "",
                            password : ""
                          });

  const handleChange = (e)=>
  {
    setUser({...user, [e.target.name] : e.target.value});
  }

  const handleSubmit = async (e)=>
  {
    e.preventDefault();
    register(user, navigate);
    setUser({ username: "",email : "",password : ""});
  }

  return (
    <div className='text-center'>
      <div>
        <h1 className='display-1 font-italiana'>Welcome Back</h1>
        <h6 className='text-secondary'>Join our members and boost your productivity</h6>
      </div>

      <div>
        <form onSubmit={handleSubmit} className='d-flex flex-column pt-5 pb-3'>
            <input 
              id='username' 
              name='username' 
              type='text' 
              className='default-input font-joan' 
              placeholder='Username' value={user.username} 
              onChange={handleChange} 
              required/>

            <input 
              id='email' 
              name='email' 
              type='email' 
              className='default-input font-joan mt-3' 
              placeholder='Email address' 
              value={user.email} 
              onChange={handleChange} 
              required/>

            <input 
              id='password' 
              name='password' 
              type='password' 
              className='default-input mt-3' 
              placeholder='Password' 
              value={user.password} 
              onChange={handleChange} 
              required/>

            <button type='submit' className='default-button mt-4'>Sign up</button>
        </form>

        <div className='more-info'>
            Already have an account ? <span><Link to="/">Login</Link></span>
        </div>
        
      </div>
    </div>
  )
}
export default RegisterForm;
