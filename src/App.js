import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PostList from './components/PostList';
import Heading from './components/Heading';
import Welcome from './components/Welcome';
import Counter from './components/Counter';
import Main from './components/Main';
import './App.css'
import CreatePost from './components/CreatePost';


const App = () => {
  return (
    <div className='App'>
      <Heading />
      <CreatePost />
      <PostList />
      {/* <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/counter' element={<Counter />} />
        <Route path='/main' element={<Main />} />
      </Routes> */}
    </div>
  )
}

export default App