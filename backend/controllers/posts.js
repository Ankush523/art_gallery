import PostMessage from "../models/postMessage.js";
import mongoose from 'mongoose'
import express from 'express';
//each call back has a try and catch block

const router = express.Router();

export const getPosts = async(req,res) => {
    try {
        const postMessages = await PostMessage.find()
        console.log(postMessages)
        res.status(200).json(postMessages)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
};

export const getPost = async (req, res) => { 
    const { id:_id } = req.params;
    try {
        const post = await PostMessage.findById(_id);
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createPost = async (req, res) => {
    const { title, message, selectedFile, creator, tags } = req.body;
    const newPostMessage = new PostMessage({ title, message, selectedFile, creator, tags })
    try {
        await newPostMessage.save();

        res.status(201).json(newPostMessage );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updatePost = async(req,res) => {
    const {id: _id} = req.params
    const { title, message, creator, selectedFile, tags } = req.body;
    if(!mongoose.Types.ObjectId.isValid(_id))
        return res.status(404).send('No post with this id')
    const updatedPost = await PostMessage.findByIdAndUpdate(_id,{...post,_id}, {new : true})

    res.json(updatedPost)
}

export const deletePost = async(req,res) => {
    const {id:_id} = req.params

    if(!mongoose.Types.ObjectId.isValid(_id))
        return res.status(404).send('No post with this id')

    await PostMessage.findByIdAndRemove(_id)

    res.json({messgae: 'Post deleted successfully'})
}

export const likePost = async(req,res) => {
    const {id: _id} = req.params
    if(!mongoose.Types.ObjectId.isValid(_id))
        return res.status(404).send('No post with this id')
    const post = await PostMessage.findById(_id)

    const likedPost = await PostMessage.findByIdAndUpdate(_id, {likeCount: post.likeCount+1}, {new: true})
    res.json(likedPost)
}

export default router