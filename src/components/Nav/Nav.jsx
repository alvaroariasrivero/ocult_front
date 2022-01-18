import React from "react";
import {Link} from 'react-router-dom';
import './Nav.css'
const Nav = () => {
  return <nav>
    <ul className="nav">
      <li><Link to='/quiz'>Quiz</Link></li>
      <li><Link to='/login'>Login</Link></li>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/profile'>Profile</Link></li>
      <li><Link to='/Login'>Empleado</Link></li>
      <li><Link to='/Loginadmin'>Responsable</Link></li>
    </ul>
  </nav>;
};

export default Nav;
