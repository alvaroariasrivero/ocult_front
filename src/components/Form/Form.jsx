import React, { useState } from 'react';
import axios from 'axios';
import './Form.css'
// import Header from './components/Header';
// import Footer from './components/Footer';

const Form = () => {
  const [userData, setUserData] = useState({
    id_company: "",
    name: "",
    email: "",
    password: "",
    image: ""
  })

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUserData({
      "id_company": e.target.id_company.value,
      "name": e.target.name.value,
      "email": e.target.email.value,
      "password": e.target.password.value,
      "image": "https://mpng.subpng.com/20180128/yvw/kisspng-ninja-ico-icon-black-ninja-5a6dee087cdc18.5588411915171538005114.jpg"

    })
    console.log(userData)
    await sendData(userData)
  }

  const sendData = async (userData) => {
    try {
      await axios.post('http://localhost:5000/api/signUp', 
      // {
        // headers: {
        //   'Content-type': 'application/json'
        // },
        {userData}
      );
    } catch (error) {
      console.log(error)
    }
  }

    return (
      <div className="div_form">
        {/* <Header/> */}
        <img src='../../public/logoOcult' alt=''/>
        <form id="form" onSubmit={handleSubmit}>
          <div className='div_input'>
            <input className='input' type="text" id="id_company" name="id_company" placeholder='Id Empresa' />
            <input className='input' type="email" id="email" name="email" placeholder="Correo electronico"/>
            <input className='input' type="text" id="name" name="name" placeholder="Elige nombre de Usuario" />
            <input className='input' type="password" id="password" name="password" placeholder="Elige una contraseña" />
          </div>
          <div className='div_btn'>
            <button className='access_btn'>Acceder</button>
          </div>
          
        </form>
        {/* <Footer/> */}
      </div>
    );
  }

export default Form;