import React from "react";
import {Link} from 'react-router-dom';
import './Nav.css'
const Nav = () => {
  return <nav>
    <ul className="nav">
      <li><Link to='/loginadmin'>Responsable</Link></li>
      <li><Link to='/login'>Empleado</Link></li>
    </ul>
  </nav>;
};

export default Nav;
