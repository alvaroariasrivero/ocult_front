import React from "react";
import {Routes, Route} from 'react-router-dom';
import Home from '../Home';
import Quiz from '../Quiz';
import Login from '../Login';
import Loginadmin from '../Loginadmin';
import Profile from '../Profile';
import Placeholder from '../Placeholder';
import Form from '../Form';


const Main = () => {
  return <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/quiz' element={<Quiz/>}/>
    <Route path='/profile' element={<Profile/>}/>
    <Route path='/placeholder' element={<Placeholder/>}/>
    <Route path='/form' element={<Form/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/loginadmin' element={<Loginadmin/>}/>



  </Routes>;
};

export default Main;
