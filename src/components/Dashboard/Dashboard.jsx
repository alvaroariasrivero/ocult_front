import React ,{useState} from "react";
import axios from "axios";
import '../Profile/Profile.css';
import { NavLink } from 'react-router-dom';



const Dashboard = () => {
  const [users, setUsers] = useState([]);
  

    const getUsers = async () =>{
      try{
        const res = await axios.get(`http://localhost:5000/api/dashboard`);
        const json = res.data.rows;
        console.log('esto son los JSON' ,json);
        const userData = json.map(element=>{
          return {
            "name": element.name,
            "score": element.last_score
          }
       
        })
         setUsers (userData)
       
        } catch (e){
          setUsers([])  
        } 
        paintUsers()
      }
   

      const paintUsers = () => {
        return users.map(users =>
        <>
          <p> {users.name}</p>
          <p> {users.score}</p>
        </>  )
      }
    
      

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
      <button onClick={getUsers} > Ver</button>
      <div>{paintUsers()}</div>
    </div>
  

</div>;
};


export default Dashboard;
