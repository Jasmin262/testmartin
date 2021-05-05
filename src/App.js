import React, { useState, useEffect } from 'react';
import Home from './Home';
import {
  Switch,
  Route,
} from "react-router-dom";
import About from './About';
import NavBar from './NavBar';

function App() {
  const [posts, setPosts] = useState();

  const fetchPosts = () => { fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => setPosts(data));}

  useEffect(() => {
    fetchPosts()}
  , []);

  return <div className='App'>
  <NavBar />
  <Switch>
  <Route path="/about">
    <About />
  </Route> 
  <Route path="/">
    <Home posts={posts} />
  </Route> 
  </Switch>
  </div>
}

export default App
