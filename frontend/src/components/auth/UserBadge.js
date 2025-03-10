import React from 'react'

const UserBadge = ({username}) => {
  return (
    <>
        <h4><span className='badge badge-dark font-italiana display-1 p-2'>Welcome back : <span className='font-joan'>{username.toUpperCase()}</span></span></h4>
    </>
  )
}

export default UserBadge;
