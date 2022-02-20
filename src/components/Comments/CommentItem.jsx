import React from 'react'

export const CommentItem = ({comment, remove, update}) => {

  const handleRemoveComment = (e) => {
    e.stopPropagation()
    remove(comment)
  } 

  const handleUpdateComment = () => {
    const title = prompt() || ''
    update({...comment, body: title})
  } 
  return (
    <div className='commentItem' onClick={handleUpdateComment}>
        <li>{comment.id}. {comment.body}</li>
        <button onClick={handleRemoveComment}>Delete</button>
    </div>
  )
}
