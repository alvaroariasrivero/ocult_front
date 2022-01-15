import React from "react";
import './Profile.css'
import { NavLink } from 'react-router-dom';

const Profile = () => {
  return <div className="userDashboardContainer">
    <aside className="asideNav">
      <ul className="aside">
        <li><img src="../assets/icons/aside_dashboard.png" alt="icon" /><NavLink to='/profile'>Inicio</NavLink></li>
        <li><img src="../assets/icons/aside_support.png" alt="icon" /><NavLink to='/placeholder'>Recursos</NavLink></li>
        <li><img src="../assets/icons/aside_notification.png" alt="icon" /><NavLink to='/placeholder'>Chatbot</NavLink></li>
        <li><img src="../assets/icons/aside_notification.png" alt="icon" /><NavLink to='/placeholder'>Configuración</NavLink></li>
        <li><img src="../assets/icons/aside_notification.png" alt="icon" /><NavLink to='/placeholder'>Ayuda</NavLink></li>
      </ul>
    </aside>

    <div className="userDashboardData">
      <div className="userData">
        <img className="userImg" />
        <div className="userPersonalData">
          <h2>Pablo Sans</h2>
          <p>ID Empresa: xxxxxxx</p>
          <p>PRINCIPIANTE</p>
          <img src="../assets/icons/user_level.png" alt="userLevel" />
        </div>
      </div>

      <div className="userRecomendation">
      <img src="../assets/icons/user_recomendation.png" className="recomendation" alt="recomendation"/>
        <p>Tu administrador te recomienda la realización de un test</p>
        <a>Haz click aquí para comenzar</a>
      </div>

      <div className="userGraph">
        <p>Tu nivel de conocimiento por áreas</p>
        <img src="../assets/icons/graph_1.png" className="userGraph" alt="userGraph"/>
        <img src="../assets/icons/graph_2.png" className="userGraph" alt="userGraph"/>
        <img src="../assets/icons/graph_3.png" className="userGraph" alt="userGraph"/>
        <img src="../assets/icons/graph_4.png" className="userGraph" alt="userGraph"/>
        <img src="../assets/icons/graph_5.png" className="userGraph" alt="userGraph"/>

      </div>

      <div className="userBot">
        <p>¿Puedes comprobarme una URL? ¿Qué contraseña es más segura?</p>
        <p>Pregunta todas tus dudas a nuestro Chatbot</p>
        <img src="../assets/icons/bot_robot.png" className="robot" alt="ChatBot"/>
        <input type="button" value="Accede aqui" />
      </div>

      <div className="userQuizes">
        <p>Tus Quiz</p>
        <div className="quizes">
        <img src="https://assets.losspreventionmedia.com/uploads/2020/07/cyber-security-hacker-covid-pandemic-1280x720-1.jpg" className="quiz" alt="quiz"/>
        <img src="https://assets.losspreventionmedia.com/uploads/2020/07/cyber-security-hacker-covid-pandemic-1280x720-1.jpg" className="quiz" alt="quiz"/>
        <img src="https://assets.losspreventionmedia.com/uploads/2020/07/cyber-security-hacker-covid-pandemic-1280x720-1.jpg" className="quiz" alt="quiz"/>
        <img src="https://assets.losspreventionmedia.com/uploads/2020/07/cyber-security-hacker-covid-pandemic-1280x720-1.jpg" className="quiz" alt="quiz"/>
        </div>

      </div>

    </div>
  </div>;
};

export default Profile;
