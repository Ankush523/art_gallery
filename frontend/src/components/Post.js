import React from 'react'
import { useDispatch } from 'react-redux'
import { deletePost,likePost } from '../actions/posts'
const Post = ({post, currentId}) => {
  const dispatch = useDispatch()
  return (
    <div>Post</div>
  )
}

export default Post