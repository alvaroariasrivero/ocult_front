import React, { useState, useEffect } from "react";
import './Profile.css'
import { NavLink } from 'react-router-dom';
import axios from "axios";


const Profile = () => {
  const [userData, setUserData] = useState({}); 

  // useEffect(() => {
  // async function getUser() {
  //   try {
  //       axios.get('http://localhost:5000/api/profile/${user_id}').then((allData) => {
  //         setUserData(allData.data)
  //       })
  //     }catch (e) {
  //       setUserData([])
  //     console.log("We had an error loading the data")
  //   }
  // }},[user_id])

  return <div className="userDashboardContainer">
    <aside className="asideNav">
      <ul className="aside">
        <li><img src="../assets/icons/aside_support.png" alt="icon" /><NavLink to='/placeholder'>Recursos</NavLink></li>
        <li><img src="../assets/icons/aside_notification.png" alt="icon" /><NavLink to='/placeholder'>Chatbot</NavLink></li>
        <li><img src="../assets/icons/aside_notification.png" alt="icon" /><NavLink to='/placeholder'>Configuración</NavLink></li>
        <li><img src="../assets/icons/aside_notification.png" alt="icon" /><NavLink to='/placeholder'>Ayuda</NavLink></li>
      </ul>
    </aside>
    {/* Contenedor principal de las cajas del perfil */}
    <div className="userDashboardData">

      {/* 1 */}
      <div className="rowOne">
        {/* Contenedor datos de perfil */}
        <div className="userData">
          <img className="userImg" />
          <div className="userPersonalData">
            <h2>Pablo Sans</h2>
            <p>Empresa: The Bridge</p>
            <p>PRINCIPIANTE</p>
            <img src="../assets/icons/user_level.png" alt="userLevel" />
          </div>
        </div>
        {/* Contenedor recomendación del quiz */}
        <div className="userRecomendation">
          <img src="../assets/icons/user_recomendation.png" className="recomendation" alt="recomendation" />
          <p>Tu administrador te recomienda la realización de un test</p>
          <a>Haz click aquí para comenzar</a>
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
          <input type="button" value="Accede aqui" />
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
