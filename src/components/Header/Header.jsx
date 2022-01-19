import React from "react";
import {NavLink} from 'react-router-dom';
import Nav from '../Nav'
import './Header.css'

const Header = () => {

  // Hacer condicional de usuario logeado para manejo de Nav 
  return <header>
    <NavLink to='/'><img src="../assets/icons/LogoLightOcult.png" alt="logo" /></NavLink>

    <Nav />
  </header>;
};

export default Header;
