import React, { useState } from 'react';
import axios from 'axios';
import './Form.css'

const Form = () => {
  const [userData, setUserData] = useState({
    "id_company": "",
    "username": "",
    "email": "",
    "password": "",
    "image": "https://www.kindpng.com/picc/m/780-7804962_cartoon-avatar-png-image-transparent-avatar-user-image.png"
  });


  const [formErrors, setFormErrors] = useState([])


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(userData);
    try {
      if (!userData.id_company || !userData.username || !userData.email || !userData.password) {
        setFormErrors(...formErrors, "Debes completar todos los campos")
      }
      else if (userData.password.length < 6) {
        setFormErrors(...formErrors, "La contraseña tiene que tener al menos 6 dígitos")
      }
      else if (userData.id_company && userData.username && userData.email && userData.password) {
        try {
          let req = {
            method: "POST",
            headers: {
              'Content-type': 'application/json'
            },
            body: JSON.stringify(userData)
          }
          await fetch('http://localhost:5000/api/signup', req)
        } catch (err) {
          console.log(err)
        }
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="container">
    <div className="div_form">
      <img src="../assets/icons/LogoLightOcult.png" alt="logoOcult" className='logoForm' />
      <form id="form" onSubmit={handleSubmit} method="post" action='/api/signup'>
        <h2>Registrate</h2>
        <br />
        <input className='input' type="text" id="id_company" name="id_company" placeholder="ID de empresa" value={userData.id_company} onChange={(e) => setUserData({ ...userData, id_company: e.target.value })} /><br />
        <br />
        <input className='input' type="email" id="email" name="email" placeholder="Correo electronico" value={userData.email} onChange={(e) => setUserData({ ...userData, email: e.target.value })} /><br />
        <br />
        <input className='input' type="text" id="username" name="username" placeholder="Nombre" value={userData.username} onChange={(e) => setUserData({ ...userData, username: e.target.value })} /><br />
        <br />
        <input className='input' type="password" id="password" name="password" placeholder="Contraseña" value={userData.password} onChange={(e) => setUserData({ ...userData, password: e.target.value })} /><br />
        <br>
        </br>
        <input className='access_btn' type="submit" value="Acceder" />
        <p className='idinfo'>El id de tu empresa debe ser proporcionado por tu responsable</p>

      </form>

      {formErrors}

    </div>
    </div>
  );
}
export default Form;