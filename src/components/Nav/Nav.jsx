import React from "react";
import {Link} from 'react-router-dom';

const Nav = () => {
  return <nav>
    <ul>
      <li><Link to='/quiz'>Quiz</Link></li>
      <li><Link to='/login'>Login</Link></li>
      <li><Link to='/'>Home</Link></li>
    </ul>
  </nav>;
};

export default Nav;
