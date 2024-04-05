import React, { useState } from "react";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SignupForm = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  function changeHandler(event) {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    setIsLoggedIn(true);
    toast.success("Signed in!");
    navigate("/dashboard");
  }

  return (
    <div>
      <div>
        <button>Student</button>
        <button>Instructor</button>
      </div>

      <form onSubmit={submitHandler}>
        <div>
          <label>
            <p>
              First Name<sup>*</sup>
            </p>

            <input
              required
              type="text"
              name="firstname"
              placeholder="First name"
              value={formData.firstname}
              onChange={changeHandler}
            />
          </label>

          <label>
            <p>
              Last Name<sup>*</sup>
            </p>

            <input
              required
              type="text"
              name="lastname"
              placeholder="Last name"
              value={formData.lastname}
              onChange={changeHandler}
            />
          </label>
        </div>

        <div>
          <label>
            <p>
              Email address<sup>*</sup>
            </p>

            <input
              required
              type="email"
              name="email"
              placeholder="enter your email"
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
              placeholder="password"
              value={formData.password}
              onChange={changeHandler}
            />

            <span onClick={() => setShowPassword((prev) => !prev)}>
              {showPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
            </span>
          </label>
        </div>

        <button>Create account</button>
      </form>
    </div>
  );
};

export default SignupForm;
