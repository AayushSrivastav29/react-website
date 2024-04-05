import React from "react";
import { Link } from "react-router-dom";
import logo from "../Assests/logo.png";
import { toast } from "react-toastify";

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
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

        {!isLoggedIn && (
          <Link to="/login">
            <button>Login</button>
          </Link>
        )}

        {!isLoggedIn && (
          <Link to="/signup">
            <button>Sign up</button>
          </Link>
        )}

        {isLoggedIn && (
          <Link to="/dashboard">
            <button>Dashboard</button>
          </Link>
        )}

        {isLoggedIn && (
          <Link to="/">
            <button
              onClick={() => {
                setIsLoggedIn(false);
                toast.success("Logged out!");
              }}
            >
              Log out
            </button>
          </Link>
        )}

      </div>
    </div>
  );
};

export default Navbar;
