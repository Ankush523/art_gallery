import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Posts from './components/Posts';
import Form from './components/Form';
import { useDispatch } from 'react-redux';
import {getPosts} from "./actions/posts"
import { useEffect, useState } from 'react';
function App() {
  const [currentId,setCurrentId] = useState(null)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts())
  },[currentId,dispatch])
  return (
    <div className="App flex flex-col">
      <div className='my-[20px]'>
        <Navbar/>
      </div>
      <div className='flex flex-row justify-between mx-[40px]'>
        <div><Posts/></div>
        <div><Form/></div>
      </div>
    </div>
  );
}

export default App;
