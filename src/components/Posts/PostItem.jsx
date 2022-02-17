import React from 'react'
import { useDispatch } from 'react-redux'
import { deletePost } from '../../features/PostSlice'

export const PostItem = ({title, id}) => {
  const dispatch = useDispatch()
  return (
    <li onClick={() => dispatch(deletePost(id))}>{title}</li>
  )
}
