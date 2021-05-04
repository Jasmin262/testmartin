import React, { useState, useEffect } from 'react';
import MyJumbotron from './MyJumbotron';
import Home from './Home';

function App() {
  const [posts, setPosts] = useState();

  const fetchPosts = () => { fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => setPosts(data));}

  useEffect(() => {
    fetchPosts()}
  , []);

  return <div className='App'><Home posts={posts} /></div>
}

export default App
