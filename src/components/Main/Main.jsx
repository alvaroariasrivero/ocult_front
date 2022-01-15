import React from "react";
import {Routes, Route} from 'react-router-dom';
import Home from '../Home';
import Quiz from '../Quiz';
import Login from '../Login';
import Profile from '../Profile';
import Placeholder from '../Placeholder';

const Main = () => {
  return <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/quiz' element={<Quiz/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/profile' element={<Profile/>}/>
    <Route path='/placeholder' element={<Placeholder/>}/>

  </Routes>;
};

export default Main;
