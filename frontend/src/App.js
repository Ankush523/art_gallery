import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Posts from './components/Posts';
import Form from './components/Form';

function App() {
  return (
    <div className="App flex flex-col">
      <div className='my-[20px]'>
        <Navbar/>
      </div>
      <div className='flex flex-row justify-between'>
        <div><Posts/></div>
        <div><Form/></div>
      </div>
    </div>
  );
}

export default App;
