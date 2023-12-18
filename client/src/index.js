import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import About from './Components/about';
import Edit from './Components/edit';
import Create from './Components/Create';
import Home from './Components/home';
import Navbar from './Components/navbar';
import CreatePost from './Components/createPost';
import Profile from './Components/Profile';
import ErrorPage from './Components/ErrorPage';

import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" exact Component={App} />
          <Route path="/home" Component={Home} />
          <Route path="/edit" Component={Edit} />
          <Route path="/create-account" Component={Create}/>
          <Route path="/profile/:path" Component={Profile}/>
          <Route path="/create-post" Component={CreatePost}/>
          <Route path="*" Component={ErrorPage}/>
        </Routes>
      </div>
    </BrowserRouter>
  </React.StrictMode>
);