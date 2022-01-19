import React from "react";
import {Link} from 'react-router-dom';
import './Nav.css'
const Nav = () => {
  return <nav>

      <li><Link to='/quiz'>Quiz</Link></li>
      <li><Link to='/chatbot'>Chatbot</Link></li>
      <li><Link to='/dashboard'>Administrador</Link></li>
      <li><Link to='/prequiz'>Prequiz</Link></li>
  </nav>;
};

export default Nav;
