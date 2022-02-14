import React from 'react'
import { useDispatch } from 'react-redux'
import { Surname } from './Surname'
import { UserName } from './UserName'
import {setSurname, setUsername} from '../../features/LoginSlice'

export const Login = () => {
  const dispatch = useDispatch()

  return (
    <div className='login'>
        <h1 className='login__title'>Redux Toolkit State Change</h1>
        <div className='login__inputs'>
          <input className='login__input' type="text" placeholder='username' onChange={(e) => dispatch(setUsername(e.target.value))}/>
          <input className='login__input' type="text" placeholder='surname' onChange={(e) => dispatch(setSurname(e.target.value))}/>
        </div>
        <UserName />
        <Surname />
    </div>
  )
}
