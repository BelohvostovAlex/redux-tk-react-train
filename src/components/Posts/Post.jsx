import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../../features/PostSlice'
import { PostItem } from './PostItem'

export const Post = () => {
  const dispatch = useDispatch()
  const {posts} = useSelector(state => state.posts)
  
  return (
    <div className='post'>
        <h1 className='post__title'>Redux Toolkit Async Thunk</h1>
        <button className='post__btn' onClick={() => dispatch(getPosts())}>Get posts</button>
        <ul>
            {posts && posts.map(post => <PostItem key={post.id} title
            ={post.title} id={post.id}/>)}
        </ul>
    </div>
  )
}
