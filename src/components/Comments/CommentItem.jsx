import React from 'react'

export const CommentItem = ({id, body}) => {
  return (
    <div className='commentItem'>
        <li>{id}. {body}</li>
        <button>Delete</button>
    </div>
  )
}
