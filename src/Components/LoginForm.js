import React, { useState } from "react";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  return (
    <form>
      <label>
        <p>
          Email Address<sup>*</sup>
        </p>
        <input
          required
          type="email"
          name="email"
          placeholder="enter your email address"
          value={formData.email}
          onChange={changeHandler}
        />
      </label>

      <label>
        <p>
          Password<sup>*</sup>
        </p>
        <input
          required
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="enter your password"
          value={formData.password}
          onChange={changeHandler}
        />

        <span onClick={() => setShowPassword((prev) => !prev)}>
          {showPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
        </span>

        <Link to="#">
            <p>Forgot password</p>
        </Link>

      </label>

      <label>
        {/* just for checking */}
        <Link to='/dashboard'> 
        <button>Sign in</button>
        </Link>
      </label>

    </form>
  );
};

export default LoginForm;
