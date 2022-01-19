import React from "react";
import axios from "axios";
import '../Profile/Profile.css';
import { NavLink } from 'react-router-dom';

const Dashboard = () => {



  return <div className="userDashboardContainer">
  <aside className="asideNav">
    <ul className="aside">
      <li><img src="../assets/icons/aside_dashboard.png" alt="icon" /><NavLink to='/profile'>Inicio</NavLink></li>
      <li><img src="../assets/icons/aside_support.png" alt="icon" /><NavLink to='/placeholder'>Recursos</NavLink></li>
      <li><img src="../assets/icons/aside_notification.png" alt="icon" /><NavLink to='/placeholder'>Configuración</NavLink></li>
      <li><img src="../assets/icons/aside_notification.png" alt="icon" /><NavLink to='/placeholder'>Ayuda</NavLink></li>
    </ul>
  </aside>

  <div className="userDashboardData">
    <div className="userData">
      <img className="userImg" />
      <div className="userPersonalData">
        <h2>Pablo Sans</h2>
        <p>Rol: Administrador</p>
        <img src="../assets/icons/user_level.png" alt="userLevel" />
      </div>
    </div>
  </div>

  <div className="userBot">
        <p> Ver puntuación de empleados</p>
        <input type="button" value="Ver" />
      </div>

</div>;
};


export default Dashboard;
