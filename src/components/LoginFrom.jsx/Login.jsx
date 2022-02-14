import React from 'react'
import { Surname } from './Surname'
import { UserName } from './UserName'

export const Login = () => {
  return (
    <div className='login'>
        <h1 className='login__title'>Redux Toolkit State Change</h1>
        <div className='login__inputs'>
          <input className='login__input' type="text" placeholder='username'/>
          <input className='login__input' type="text" placeholder='surname'/>
        </div>
        <UserName />
        <Surname />
    </div>
  )
}
