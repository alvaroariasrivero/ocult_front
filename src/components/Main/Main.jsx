import React from "react";
import {Routes, Route} from 'react-router-dom';
import Home from '../Home';
import Quiz from '../Quiz';
import Login from '../Login';
import Profile from '../Profile';
import Placeholder from '../Placeholder';
import Form from '../Form';
import Chatbot from '../Chatbot';
import Dashboard from "../Dashboard/Dashboard";
import Prequiz from "../Prequiz/Prequiz";


const Main = () => {
  return <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/quiz' element={<Quiz/>}/>
    <Route path='/profile' element={<Profile/>}/>
    <Route path='/placeholder' element={<Placeholder/>}/>
    <Route path='/form' element={<Form/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/chatbot' element={<Chatbot/>}/>
    <Route path='/dashboard' element={<Dashboard/>}/>
    <Route path='/prequiz' element={<Prequiz/>}/>


  </Routes>;
};

export default Main;
