import React, { useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const Login = () => {
  const [userData, setUserData] = useState({
    "email": "",
    "password": "",
  });
  const [formErrors, setFormErrors] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(userData);
      if (!userData.email || !userData.password) {
        setFormErrors(...formErrors, "Debes completar todos los campos")
      }else{
        try {
          let req = {
            method: "POST",
            headers: {
              'Content-type': 'application/json'
            },
            body: JSON.stringify(userData)
          }
          await fetch('http://localhost:5000/api/login', req)
          .then((response) => {
            if (response.data.accessToken) {
              localStorage.setItem("user", JSON.stringify(response.data));
            }
      
            return response.data;
          })
        } catch (err) {
          console.log(err)
        }
      }
  }  
  const logout = () => {
    localStorage.removeItem("user");
  };
  
  return (<><div>

  </div><> {formErrors}</><div className="div_form">

      <form id="form" onSubmit={handleSubmit} method="post" action='/api/signup'>
      <h2>Empleado</h2>
        <br />
        <input className='input' type="email" id="email" name="email" placeholder="Correo electronico" value={userData.email} onChange={(e) => setUserData({ ...userData, email: e.target.value })} /><br />
        <br />
        <input className='input' type="password" id="password" name="password" placeholder="Contraseña" value={userData.password} onChange={(e) => setUserData({ ...userData, password: e.target.value })} /><br />
        <br>
        </br>
        <input className='access_btn' type="submit" value="Acceder" />
        <Link to="/form">¿No tienes cuenta? Registrate</Link>

      </form>

    </div></>
  );
}
export default Login;
