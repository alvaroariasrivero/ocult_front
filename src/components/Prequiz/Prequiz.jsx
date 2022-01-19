import React from 'react';
import './Prequiz.css';
import { NavLink } from 'react-router-dom';
import AuthService from "../../services/authservice";
 

const Prequiz = () =>{

  const currentUser = AuthService.getCurrentUser();
  const name = currentUser.userData.name;
  console.log(currentUser)


  return <div className='div_container_prequiz'>
    <div className='div_text_prequiz'>
      <p>Hola {name}</p> 
      <p>vas a comenzar un test.</p>
      <p>Antes de empezar, recuerda:</p>
    </div>
    
    <div className='div_text_prequiz'>
      <img className='img_prequiz' src='../assets/icons/Question.png'/>
      <p>¡No olvides responder a todas las preguntas! </p> 
      <img className='img_prequiz' src='../assets/icons/oneway.png'/>
      <p>Lamentablemente, no podrás vover a atrás.</p>
      <img className='img_prequiz' src='../assets/icons/thumbs.png'/>oneway
      <p>En cada pregunta, echa un buen ojo al feedback.</p>
    </div>

    <div className='div_imag_prequiz'>
      <img src='../assets/icons/candadobackground.png'/>
    </div>
    <button className='btn_prequiz1'> <NavLink to="/quiz">Accede al test</NavLink> </button>
    <button className='btn_prequiz2'><NavLink to="/profile">Dejar para más tarde</NavLink></button>

  </div>

};

export default Prequiz;
