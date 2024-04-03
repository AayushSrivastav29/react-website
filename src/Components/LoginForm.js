import React, { useState } from "react";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  return (
    <form onSubmit={submit}>
      <label>
        <p>
          Email Address<sup>*</sup>{" "}
        </p>
        <input
          required
          type="text"
          placeholder="enter your email address"
          value={formData.email}
          onChange={changeHandler}
        />
      </label>

      <label>
        <p>
          Password<sup>*</sup>{" "}
        </p>
        <input
          required
          type="text"
          placeholder="enter your password"
          value={formData.password}
          onChange={changeHandler}
        />
      </label>

      <button>Submit</button>
    </form>
  );
};

export default LoginForm;
