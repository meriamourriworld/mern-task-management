import React from 'react';
import logo from "../assets/images/logo.png";


const ErrorPage = () => {
  return (
    <div className='auth-bg error-page'>
      <div className='left-side mx-auto w-50 error-page-left d-flex flex-column align-items-center justify-content-start align-items-center'>
        <img className='entrance-logo error-logo justify-self-start' src={logo} alt='Orion' />
        <h2 className='font-italiana display-4'>PAGE NOT FOUND !</h2>
        <h1 className='font-italiana display-1'>404</h1>
      </div>
    </div>
  )
}

export default ErrorPage;
