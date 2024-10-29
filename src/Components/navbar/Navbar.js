import React from 'react';
import './Navbar.css'

function Navbar() {
  return (
    <nav className="Navbar">
      <div className="logo">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYWIg_q5kQHfQ476CD6PsnjycMq4cnvLOTFQ&s" alt="Logo" />
      </div>
      <ul>
        <li><a href="#">Home</a></li>
        <li>
          <a href="#about">About</a>
          <ul className="dropdown">
            <li><a href="#">Team</a></li>
            <li><a href="#">History</a></li>
          </ul>
        </li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;