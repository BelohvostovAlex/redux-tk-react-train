import React from 'react'
import { useSelector } from 'react-redux'

export const UserName = () => {
  const {username} = useSelector(state => state.login)

  return (
    <div className='login__userName'>Username: {username}</div>
  )
}
