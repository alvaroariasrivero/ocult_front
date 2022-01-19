import React, { useState, useEffect } from "react";
import './Profile.css'
import { NavLink } from 'react-router-dom';
import AuthService from "../../services/authservice";



const Profile = () => {
  const currentUser = AuthService.getCurrentUser();
  console.log(currentUser)
  const userScore = currentUser.userData.last_score

  const paintScore = () => {
    console.log(userScore)
    if (userScore==null) {
       return <div>
        <img src="../assets/icons/user_recomendation.png" className="recomendation" alt="recomendation" />
        <p>Tu administrador te recomienda la realización de un test</p>
        <NavLink to="/quiz">Haz click aquí para comenzar</NavLink>
      </div>
    } else {
      return <p>Puntuación en último quiz: {currentUser.userData.last_score}</p>
    }
  }
  
  return <div className="userDashboardContainer">
    <aside className="asideNav">
      <ul className="aside">
        <li><img src="../assets/icons/aside_support.png" alt="icon" /><NavLink to='/placeholder' className="aside">Recursos</NavLink></li>
        <li><img src="../assets/icons/aside_notification.png" alt="icon" /><NavLink to='/chatbot' className="aside">Chatbot</NavLink></li>
        <li><img src="../assets/icons/aside_notification.png" alt="icon" /><NavLink to='/placeholder' className="aside">Configuración</NavLink></li>
        <li><img src="../assets/icons/aside_notification.png" alt="icon" /><NavLink to='/placeholder' className="aside">Ayuda</NavLink></li>
        <li onClick={AuthService.logout}><img src="../assets/icons/aside_notification.png" alt="icon"/><NavLink to='/' className="aside">Cerrar Sesión</NavLink></li>

      </ul>
    </aside>
    {/* Contenedor principal de las cajas del perfil */}
    <div className="userDashboardData">

      {/* 1 */}
      <div className="rowOne">
        {/* Contenedor datos de perfil */}
        <div className="userData">
          <img className="userImg" src={currentUser.userData.image}/>
          <div className="userPersonalData">
            <h2>{currentUser.userData.name}</h2>
            <p>{currentUser.userData.email}</p>
            <p>Empresa: The Bridge</p>
            <p>PRINCIPIANTE</p>
            <img src="../assets/icons/user_level.png" alt="userLevel" />
          </div>
        </div>
        {/* Contenedor recomendación del quiz */}
        <div className="userRecomendation">
        {paintScore()}
        </div>
      </div>

      {/* 2*/}
      <div className="rowTow">
        {/* Contenedor de la gráfica */}
        <div className="userGraph">
          <p>Tu nivel de conocimiento por áreas</p>
          <img src="../assets/icons/graph_1.png" className="userGraph" alt="userGraph" />
          <img src="../assets/icons/graph_2.png" className="userGraph" alt="userGraph" />
          <img src="../assets/icons/graph_3.png" className="userGraph" alt="userGraph" />
          <img src="../assets/icons/graph_4.png" className="userGraph" alt="userGraph" />
          <img src="../assets/icons/graph_5.png" className="userGraph" alt="userGraph" />
        </div>
      </div>

      {/* 3 */}
      <div className="rowThree">
        {/* Contenedor chatBot*/}
        <div className="userBot">
          <p>¿Puedes comprobarme una URL? ¿Qué contraseña es más segura?</p>
          <p>Pregunta todas tus dudas a nuestro Chatbot</p>
          <img src="../assets/icons/bot_robot.png" className="robot" alt="ChatBot" />
          <NavLink to="/chatbot">ACCEDE AQUI</NavLink>

        </div>
        {/* Contenedor listado Quizes*/}
        <div className="userQuizes">
          <p>Tus Quiz</p>
          <div className="quizes">
            <img src="https://assets.losspreventionmedia.com/uploads/2020/07/cyber-security-hacker-covid-pandemic-1280x720-1.jpg" className="quiz" alt="quiz" />
            <img src="https://www.altonivel.com.mx/wp-content/uploads/2019/11/hacker.jpg" className="quiz" alt="quiz" />
            <img src="https://www.redseguridad.com/wp-content/uploads/sites/2/2020/08/malware-ciberataques-900x600.jpg" className="quiz" alt="quiz" />
            <img src="https://ayudaleyprotecciondatos.es/wp-content/uploads/2020/07/ciberataque-02.jpg" className="quiz" alt="quiz" />
          </div>
        </div>
      </div>
    </div>
  </div>;
};

export default Profile;
