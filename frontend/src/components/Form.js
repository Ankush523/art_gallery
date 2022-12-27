import React, { useState, useEffect } from "react";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { createPost } from "../actions/posts";
import { updatePost } from "../api";

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({creator: "",title: "",message: "",tag: "",selectedFile: ""});
  const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const clear = () => {
    setCurrentId(null);
    setPostData({creator: "",title: "",message: "",tag: "",selectedFile: ""});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentId) {
      dispatch(updatePost(currentId, postData));
    } else {
      dispatch(createPost(postData));
    }
    clear();
  };


  return (
    <div className="flex flex-col bg-white rounded-xl shadow-xl px-[20px]">
      <label className="py-[10px]">Create a Memory</label>
      <div className="pb-[15px]">
        <input placeholder="Creator" className="border border-slate-300 rounded-md w-[332.5px] h-[50px] px-[10px]" onChange={(e) => setPostData({...post, creator:e.target.value})}/>
      </div>
      <div className="pb-[15px]">
        <input placeholder="Title" className="border border-slate-300 rounded-md w-[332.5px] h-[50px] px-[10px]" onChange={(e) => setPostData({...post, title:e.target.value})}/>
      </div>
      <div className="pb-[15px]">
        <input placeholder="Message" className="border border-slate-300 rounded-md w-[332.5px] h-[90px] px-[10px]" onChange={(e) => setPostData({...post, message:e.target.value})}/>
      </div>
      <div className="pb-[15px]">
        <input placeholder="Tags" className="border border-slate-300 rounded-md w-[332.5px] h-[50px] px-[10px]" onChange={(e) => setPostData({...post, message:e.target.value.split(',')})}/>
      </div>
      <div className="pb-[15px]">
        <FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}/>
      </div>
      <div className="pb-[15px]">
        <button className="bg-blue-600 text-white w-[332.5px] rounded-md h-[50px]" onClick={handleSubmit} >SUBMIT</button>
      </div>
      <div className="pb-[15px]">
        <button className="bg-red-600 text-white w-[332.5px] rounded-md h-[40px]">Clear</button>
      </div>
    </div>
  );
};

export default Form;
