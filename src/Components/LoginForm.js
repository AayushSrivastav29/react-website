import React, { useState } from "react";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const LoginForm = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
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

  function submitHandler(event) {
    event.preventDefault();
    setIsLoggedIn(true);
    toast.success("Logged In");
    navigate("/dashboard");
  }

  return (
    <form className="flex flex-col w-full gap-y-4 mt-6 " 
    onSubmit={submitHandler}>

      <label className=" w-full">

        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
          Email Address<sup className="text-red-500 ">*</sup>
        </p>
        <input className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b-[0.1px]"
          required
          type="email"
          name="email"
          placeholder="Enter your email address"
          value={formData.email}
          onChange={changeHandler}
        />
      </label>

      <label className=" w-full relative">
        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
          Password<sup className="text-red-500 ">*</sup>
        </p>
        <input className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b-[0.5px]"
          required
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={changeHandler}
        />

        <span className="absolute right-3 top-[38px] cursor-pointer text-[22px]" 
          onClick={() => setShowPassword((prev) => !prev)}>
          {showPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
        </span>

        <Link to="#">
          <p className="text-xs mt-1 text-blue-100 w-max ml-auto ">
            Forgot password</p>
        </Link>
      </label>

      <label>
        <button className="bg-yellow-50 rounded-[8px] font-medium text-richblack-900 w-full px-[12px] py-[8px] mt-5"
        >Log in</button>
      </label>
    </form>
  );
};

export default LoginForm;
