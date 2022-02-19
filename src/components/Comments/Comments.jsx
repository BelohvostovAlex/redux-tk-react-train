import React from 'react'
import { commentsApi } from '../../service/CommentsSerivce'
import { CommentItem } from './CommentItem'

export const Comments = () => {
    const [limit, setLimit] = React.useState(5)
    const {data: comments} = commentsApi.useFetchAllCommentsQuery(limit)
  return (
    <ul className='comments'>{comments?.map(comment => <CommentItem key={comment.id} {...comment}/>)}</ul>
  )
}
