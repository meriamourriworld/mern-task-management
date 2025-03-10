import React from 'react'
import LoginForm from '../components/auth/LoginForm';
import logo from "../assets/images/logo.png";

const Login = () => {
  return (
    <section className='auth-bg w-100 d-flex justify-content-between'>
      <article className='left-side w-50 d-flex align-items-center justify-content-center'><LoginForm /></article>
      
      <article className='right-side w-50 d-flex align-items-center justify-content-center'>
        <img className='entrance-logo' src={logo} alt='Orion' />
      </article>
    </section>
  )
}

export default Login;
