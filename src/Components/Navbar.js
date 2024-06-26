import React from "react";
import { Link } from "react-router-dom";
import logo from "../Assests/Layer 1.png";
import { toast } from "react-toastify";

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  return (
    <div className="flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto ">
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

      <nav >
        <ul className="text-richblack-5 flex gap-x-6">
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

      <div className="flex items-center gap-4 text-richblack-5  ">

        {!isLoggedIn && (
          <Link to="/login">
            <button className="bg-richblack-800 hover:bg-richblack-700 py-[8px] px-[12px] rounded-[8px] border border-richblack-700 ">Login</button>
          </Link>
        )}

        {!isLoggedIn && (
          <Link to="/signup">
            <button className="bg-richblack-800 hover:bg-richblack-700 py-[8px] px-[12px] rounded-[8px] border border-richblack-700 ">Sign up</button>
          </Link>
        )}

        {isLoggedIn && (
          <Link to="/dashboard">
            <button className="bg-richblack-800 hover:bg-richblack-700 py-[8px] px-[12px] rounded-[8px] border border-richblack-700 ">Dashboard</button>
          </Link>
        )}

        {isLoggedIn && (
          <Link to="/">
            <button className="bg-richblack-800 hover:bg-richblack-700 py-[8px] px-[12px] rounded-[8px] border border-richblack-700 "
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
