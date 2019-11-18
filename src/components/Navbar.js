import React from 'react';
import './styles/navbar.css';

const Navbar = (props) => {
  return (
    <div className="navbar bg-light-red">

      <ul>
        <li><strong>Dota 2 Guide</strong></li>
        {props.children}
      </ul>
    </div>
  );
};

export default Navbar;