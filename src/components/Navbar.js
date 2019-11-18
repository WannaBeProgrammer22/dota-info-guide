import React from 'react';
import './styles/navbar.css';

const Navbar = (props) => {
  return (
    <div className="navbar">
      <ul>
        {props.children}
      </ul>
    </div>
  );
}

export default Navbar;