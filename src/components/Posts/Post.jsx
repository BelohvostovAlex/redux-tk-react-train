import React from 'react'
import { useDispatch } from 'react-redux'
import { PostItem } from './PostItem'

export const Post = () => {
  const dispatch = useDispatch()
  
  return (
    <div className='post'>
        <h1 className='post__title'>Redux Toolkit Async Thunk</h1>
        <button className='post__btn'>Get posts</button>
        <ul>
            <PostItem />
        </ul>
    </div>
  )
}
