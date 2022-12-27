import React from 'react'
import Post from './Post'
import { useSelector } from 'react-redux'
const Posts = () => {
  const posts = useSelector((state) => state.posts)
  console.log(posts)
  return (
    !posts.length ? "CircularProgress" : 
    (
      <div>
        {
          posts.map((post) => 
          (
            <div key={post._id}>
               <Post post={post}/>
            </div>
          ))
        }
      </div>
    )
  )
}

export default Posts