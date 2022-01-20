import React, { useState } from "react";
import axios from "axios";
import '../Profile/Profile.css';
import AuthService from "../../services/authservice";
import { NavLink } from 'react-router-dom';


const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const currentUser = AuthService.getCurrentUser();

  const getUsers = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/dashboard`);
      const json = res.data.rows;
      console.log('esto son los JSON', json);
      const userData = json.map(element => {
        return {
          "name": element.name,
          "score": element.last_score
        }

      })
      setUsers(userData)

    } catch (e) {
      setUsers([])
    }
    paintUsers()
  }


  const paintUsers = () => {
    return users.map(users =>
      <>
        <p> {users.name}</p>
        <p> {users.score}</p>
        
      </>)
  }



  return <div className="userDashboardContainer">
    <aside className="asideNav">
      <ul className="aside">
        <li><img src="../assets/icons/aside/icon_recursos.png" alt="icon" /><NavLink to='/placeholder' className="aside">Recursos</NavLink></li>
        <li><img src="../assets/icons/aside/icon_chatbot.png" alt="icon" /><NavLink to='/chatbot' className="aside">Chatbot</NavLink></li>
        <li><img src="../assets/icons/aside/icon_configuracion.png" alt="icon" /><NavLink to='/placeholder' className="aside">Configuración</NavLink></li>
        <li><img src="../assets/icons/aside/icon_ayuda.png" alt="icon" /><NavLink to='/placeholder' className="aside">Ayuda</NavLink></li>
        <li onClick={AuthService.logout}><img src="../assets/icons/aside/icon_cerrarses.png" alt="icon" /><NavLink to='/' className="aside">Cerrar Sesión</NavLink></li>
      </ul>
    </aside>
    <div className="dashboard">
      <div className="userDashboardData">
        <div className="userData">
          <img className="userImg" src={currentUser.userData.image} />
          <div className="userPersonalData">
            <h2>Pablo Sans</h2>
            <p>Rol: Administrador</p>
          </div>
        </div>
      </div>
      <div className="userBot">
        <p> Ver puntuación de empleados</p>
        <button onClick={getUsers} > Ver</button>
        <div>{paintUsers()}</div>
      </div>
    </div>

  </div>;
};


export default Dashboard;
