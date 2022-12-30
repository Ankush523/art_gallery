import React from "react";
import Post from "./Post";
import { useSelector } from "react-redux";
const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);
  console.log(posts);
  return(
    !posts.length ? 'loading' : 
    (
      <div>
        {
          posts.map((post) => (
            <div key={post._id}>
              <Post post={post} setCurrentId={setCurrentId}/>
            </div>
            <label>Test</label>
          ))
        }
      </div>
    )
  )
};

export default Posts;
