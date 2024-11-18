// src/components/NavBar.jsx
// src/components/NavBar.jsx
// src/components/NavBar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar" role="navigation">  {/* Add role="navigation" here */}
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/directors">Directors</NavLink></li>
        <li><NavLink to="/actors">Actors</NavLink></li>
      </ul>
    </div>
  );
};

export default NavBar;
