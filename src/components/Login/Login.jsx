import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [userData, setUserData] = useState({
    "email": "",
    "password": "",
  });
  const [formErrors, setFormErrors] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(userData);
    try {
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
        } catch (err) {
          console.log(err)
        }
      }
    } catch (error) {
      console.log(error)
    }
  }  

  return (
    <div className="div_form">

      <form id="form" onSubmit={handleSubmit} method="post" action='/api/signup'>

        <label className='input' htmlFor="email"></label><br />
        <input className='input' type="email" id="email" name="email" placeholder="Correo electronico" value={userData.email} onChange={(e) => setUserData({ ...userData, email: e.target.value })}/><br />

        <label htmlFor="password"></label><br />
        <input className='input' type="text" id="password" name="password" placeholder="Contraseña" value={userData.password} onChange={(e) => setUserData({ ...userData, password: e.target.value })}/><br />
        <br>
        </br>
        <input className='access_btn' type="submit" value="Acceder"/>
      </form>
      
      {formErrors}

    </div>
  );
}
export default Login;