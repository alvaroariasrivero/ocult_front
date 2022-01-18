import React, { Component } from "react";
import ChatBot from 'react-simple-chatbot';
import { NavLink } from 'react-router-dom';
import './Chatbot.css';



const Chatbot = () => {
  const theme = {
    background: '#0070AD',
    fontFamily: 'Helvetica Neue',
    headerBgColor: '#0070AD',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: '#0070AD',
    botFontColor: '#fff',
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a',
  };
  const steps = [
    {
      id: '1',
      message: 'Mi nombre es Oculty ¿En qué puedo ayudarte?',
      trigger: '2',
    },
    {
      id: '2',
      user: true,
      trigger: '3',
    },
    {
      id: '3',
      message: 'Voy a buscar toda la información necesaria para poder ayudarte. Dame un segundo!',
      end: true,
    },
  ];
  
 
    return <div className="chatbotContainer">
      <aside className="asideNav">
      <ul className="aside">
        <li><img src="../assets/icons/aside_dashboard.png" alt="icon" /><NavLink to='/profile'>Inicio</NavLink></li>
        <li><img src="../assets/icons/aside_support.png" alt="icon" /><NavLink to='/placeholder'>Recursos</NavLink></li>
        <li><img src="../assets/icons/aside_notification.png" alt="icon" /><NavLink to='/placeholder'>Configuración</NavLink></li>
        <li><img src="../assets/icons/aside_notification.png" alt="icon" /><NavLink to='/placeholder'>Ayuda</NavLink></li>
      </ul>
    </aside>
    <div className="div_chatbot"></div>
      <ChatBot steps={steps} theme={theme}/>
      </div>
}


export default Chatbot;
