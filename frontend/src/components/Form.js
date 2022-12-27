import React, { useState, useEffect } from "react";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { createPost } from "../actions/posts";
import { updatePost } from "../api";
const Form = ({currentId, setCurrentId}) => {
  const [postData, setPostData] = useState({creator: "",title: "",message: "",tage: "",selectedFile: ""});
  const dispatch = useDispatch();
  const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null)

  useEffect(() => {
    if(post)
      setPostData(post)
  },[post])
  const handleSubmit = (e) => {
    e.preventDefault()
    if(currentId)
    {
      dispatch(updatePost(currentId,postData))
    }
    else{
      dispatch(createPost(postData))
    }

    clear()
  }

  const clear = () => {
    setCurrentId(null)
    setPostData({creator: "",title: "",message: "",tage: "",selectedFile: ""})
  }
  return (
    <div>
      <div>
        <FileBase
          type="file"
          multiple={false}
          onDone={({ base64 }) =>
            setPostData({ ...postData, selectedFile: base64 })
          }
        />
      </div>
    </div>
  );
};

export default Form;
