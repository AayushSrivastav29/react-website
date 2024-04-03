import React from "react";
import { Link } from "react-router-dom";
import logo from "../Assests/logo.png";

const Navbar = ({ IsLoggedIn, setIsLoggedIn }) => {
  return (
    <div className="navbar">
      <Link to="/">
        <img
          className="logo"
          src={logo}
          alt="logo"
          width={160}
          height={32}
          loading="lazy"
        />
      </Link>

      <nav>
        <ul className="navbar-items">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </nav>

      <div className="navbar-buttons">
        {!IsLoggedIn && (
          <Link to="/login">
            <button>Login</button>
          </Link>
        )}

        {!IsLoggedIn && (
          <Link to="/signup">
            <button>Signup</button>
          </Link>
        )}

        {IsLoggedIn && (
          <Link to="/dashboard">
            <button>Dashboard</button>
          </Link>
        )}

        {IsLoggedIn && (
          <Link to="/">
            <button>Logout</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
