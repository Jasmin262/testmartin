import React, { useState, useEffect } from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import NavBar from './components/NavBar';

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
  <Route path="/contact">
    <Contact />
  </Route> 
  <Route path="/">
    <Home posts={posts} />
  </Route> 
  </Switch>
  </div>
}

export default App
