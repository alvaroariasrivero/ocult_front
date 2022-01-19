import React from 'react';
import './Prequiz.css';
import { NavLink } from 'react-router-dom';
 

const Prequiz = () =>{

  // const sendTest = () => {


  // }


const sendName = async (name)=>{
  try {
    let req = {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        name
      })
    }
    await fetch ('http://localhost:5000/api/profile', req);

  } catch (error) {
    console.log('error', error);
  }
}


  return <div className='div_container_prequiz'>
    <div className='div_text_prequiz'>
      <p>Hola {sendName}</p> 
      <p>vas a comenzar un test.</p>
      <p>Antes de empezar, recuerda:</p>
    </div>
    
    <div className='div_text_prequiz'>
      <img src=''/>
      <p>¡No olvides responder a todas las preguntas! </p> 
      <img src=''/>
      <p>Lamentablemente, no podrás vover a atrás.</p>
      <img src=''/>
      <p>En cada pregunta, echa un buen ojo al feedback.</p>
    </div>

    <div className='div_imag_prequiz'>
      <img src='../assets/icons/candadobackground.png'/>
    </div>
    <button className='btn_prequiz1'> <NavLink to="/quiz">Accede al test</NavLink> </button>
    <button className='btn_prequiz2'> Dejar para más tarde</button>

  </div>

};

export default Prequiz;
