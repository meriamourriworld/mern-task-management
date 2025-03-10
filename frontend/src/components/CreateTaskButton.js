import React from 'react'
import addIcon from "../assets/images/addIcon.png";

const CreateTaskButton = () => {
  return (
    <>
        <button className='default-button button-light button-sm button-md col-2 offset-10' data-bs-toggle="offcanvas" data-bs-target="#createCanvas">New Task <img className='icons ms-2' src={addIcon} alt='Create new task'/></button>
    </>
  )
}

export default CreateTaskButton
