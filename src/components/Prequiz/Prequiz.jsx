import React from 'react';
import './Prequiz.css'

const Prequiz = () =>{


  return <div className='div_container_prequiz'>
    <div className='div_text_prequiz'>
      <p>Hola Pablo,</p> 
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
    <button className='btn_prequiz1'> Comenzar test</button>
    <button className='btn_prequiz2'> Dejar para más tarde</button>

  </div>

};

export default Prequiz;
