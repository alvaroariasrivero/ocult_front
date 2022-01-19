import React from "react";
import { NavLink } from 'react-router-dom';
import AuthService from "../../services/authservice";

const Placeholder = () => {
  return <div className="userDashboardContainer">
  <aside className="asideNav">
    <ul className="aside">
      <li><img src="../assets/icons/aside/icon_home.png" alt="icon" /><NavLink to='/profile' className="aside">Inicio</NavLink></li>
      <li><img src="../assets/icons/aside/icon_recursos.png" alt="icon" /><NavLink to='/placeholder' className="aside">Recursos</NavLink></li>
        <li><img src="../assets/icons/aside/icon_chatbot.png" alt="icon" /><NavLink to='/chatbot' className="aside">Chatbot</NavLink></li>
        <li><img src="../assets/icons/aside/icon_configuracion.png" alt="icon" /><NavLink to='/placeholder' className="aside">Configuración</NavLink></li>
        <li><img src="../assets/icons/aside/icon_ayuda.png" alt="icon" /><NavLink to='/placeholder' className="aside">Ayuda</NavLink></li>
        <li onClick={AuthService.logout}><img src="../assets/icons/aside/icon_cerrarses.png" alt="icon"/><NavLink to='/' className="aside">Cerrar Sesión</NavLink></li>
    </ul>
  </aside>
      <div>
        <h2>¡Vaya! ¡Lo sentimos!</h2>
        <h1>Ocult está trabajando en esta funcionalidad para que muy pronto puedas disfrutar de ella. </h1>
    <img src="../assets/icons/endesarrollo.png" alt="" srcset="" />
      </div>



  </div>;
};

export default Placeholder;
