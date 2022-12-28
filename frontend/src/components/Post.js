import React from 'react'
import { useDispatch } from 'react-redux'
import { deletePost,likePost } from '../actions/posts'

const Post = ({post, setCurrentId}) => {
  const dispatch = useDispatch()

  return (
    <div>
      <img src={post.selectedFile || "https://www.planetware.com/wpimages/2020/02/greece-in-pictures-beautfiul-places-to-photograph-santorini-oia.jpg"} alt="greece" className='h-[40px]'/>
      <div>
        <label>{post.creator}</label>
      </div>

      <div>
        <button onClick={() => setCurrentId(post._id)}>More</button>
      </div>

      <div>
        <label>{post.tags.map((tag) => `#${tag}`)}</label>
      </div>

      <label>{post.title}</label>

      <div>
        <label>{post.message}</label>
      </div>

      <div>
        <button onClick={() => dispatch(likePost(post._id))}> Like {post.likeCount}</button>
        <button onClick={() => dispatch(deletePost(post._id))}>Delete</button>
      </div>
    </div>
  )
}

export default Post