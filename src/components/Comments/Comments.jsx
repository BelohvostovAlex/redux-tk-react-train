import React from 'react'
import { commentsApi } from '../../service/CommentsSerivce'
import { CommentItem } from './CommentItem'

export const Comments = () => {
    const [limit, setLimit] = React.useState(10)
    const {data: comments, error, isLoading} = commentsApi.useFetchAllCommentsQuery(limit)
    const [createComment, {}] = commentsApi.useCreateCommentMutation()
    const [deleteComment, {}] = commentsApi.useDeleteCommentMutation()
    const [updateComment, {}] = commentsApi.useUpdateCommentMutation()

    const handleCreate = async () => {
      const commentTitle = prompt()
      const comment = {
        body: commentTitle
      }
      await createComment(comment)
    }

    const handleRemove = (comment) => {
      deleteComment(comment)
    }

    const handleUpdate = (comment) => {
      updateComment(comment)
    }

  return (
    <>
      {error && <h1>Whoops... an error</h1>}
      {isLoading && <div>Loading...</div>}
      <button style={{display: "block",margin: '0 auto'}} onClick={handleCreate}>Create post</button>
      <ul className='comments'>{comments?.map(comment => <CommentItem key={comment.id} comment={comment} remove={handleRemove} update={handleUpdate}/>)}</ul>
    </>
  )
}
