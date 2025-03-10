import React from 'react'
import RegisterForm from '../components/auth/RegisterForm';
import logo from "../assets/images/logo.png";


const Register = () => {
  return (
    <section className='auth-bg w-100 d-flex justify-content-between'>
      <article className='left-side w-50 d-flex align-items-center justify-content-center'><RegisterForm /></article>
      
      <article className='right-side w-50 d-flex align-items-center justify-content-center'>
        <img className='entrance-logo' src={logo} alt='Orion' />
      </article>
    </section>
  )
}

export default Register;
