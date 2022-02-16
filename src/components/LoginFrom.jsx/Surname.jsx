import React from 'react'
import { useSelector } from 'react-redux'

export const Surname = () => {
  const {surname} = useSelector(state => state.login)

  return (
    <div className='login__userSurname'>Surname: {surname}</div>
  )
}
