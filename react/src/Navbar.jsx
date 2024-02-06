// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Search from './Components/Search';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <div className="logo-container">
        <h1>
          <Link to="/">Kalvium Books</Link>  </h1>
      </div>
      <Search />
      <div className="nav-links">
        <Link to="/Register">
          <button className="nav-button">Register</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
 