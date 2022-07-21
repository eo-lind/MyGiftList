import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-info">
      <Link to="/" className="navbar-brand">My Gift List</Link>

      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/gifts" className="nav-link">Gifts</Link>
        </li>
        <li className="nav-item">
          <Link to="/recipients" className="nav-link">Recipients</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header