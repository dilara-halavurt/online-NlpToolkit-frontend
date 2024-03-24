// Navbar.jsx
import React from 'react';

import './Navbar.css'; // Assuming the CSS file is in the same directory
const Navbar = () => {
    return (
      <nav className="navbar">
        <ul className="navList">
          <li className="navItem"><a className="navLink" href="/spellchecker">Spellchecker</a></li>
          <li className="navItem"><a className="navLink" href="/morphological-analyzer">Morphological Analyzer</a></li>
          <li className="navItem"><a className="navLink" href="/deasciifier">Deasciifier</a></li>
          <li className="navItem"><a className="navLink" href="/contact">Contact</a></li>
        </ul>
      </nav>
    );
  };
  
  
export default Navbar;
