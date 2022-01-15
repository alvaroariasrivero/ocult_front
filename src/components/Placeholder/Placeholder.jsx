import React from "react";
import { NavLink } from 'react-router-dom';

const Placeholder = () => {
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
      <div>
      <h1>Proximamente podrás disfrutar de esta funcionalidad</h1>
    <img src="../assets/icons/ilustraciones.png" alt="" srcset="" />
      </div>



  </div>;
};

export default Placeholder;
