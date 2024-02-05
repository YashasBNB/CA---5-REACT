// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Search from './Components/Search';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <div className="logo-container">
        <h1>Kalvium Books</h1>
      </div>
      <Search />
      <div className="nav-links">
        {/* Add other navigation links or components as needed */}
        <Link to="/form">
          <button className="nav-button">Register</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
