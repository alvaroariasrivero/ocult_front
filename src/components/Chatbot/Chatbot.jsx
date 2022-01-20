import React, { Component } from "react";
import ChatBot from 'react-simple-chatbot';
import { NavLink } from 'react-router-dom';
import './Chatbot.css';
import AuthService from "../../services/authservice";



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
      <li><img src="../assets/icons/aside/icon_home.png" alt="icon" /><NavLink to='/profile' className="aside">Inicio</NavLink></li>
      <li><img src="../assets/icons/aside/icon_recursos.png" alt="icon" /><NavLink to='/placeholder' className="aside">Recursos</NavLink></li>
        <li><img src="../assets/icons/aside/icon_configuracion.png" alt="icon" /><NavLink to='/placeholder' className="aside">Configuración</NavLink></li>
        <li><img src="../assets/icons/aside/icon_ayuda.png" alt="icon" /><NavLink to='/placeholder' className="aside">Ayuda</NavLink></li>
        <li onClick={AuthService.logout}><img src="../assets/icons/aside/icon_cerrarses.png" alt="icon"/><NavLink to='/' className="aside">Cerrar Sesión</NavLink></li>
      </ul>
    </aside>
    <div className="chatbotDiv">
    <div className="div_chatbot">
      <ChatBot steps={steps} theme={theme}/>
      </div>
      </div>
    </div>
}


export default Chatbot;
