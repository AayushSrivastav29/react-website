import React from "react";
import { toast } from "react-toastify";

const Home = () => {
  function checkHandler() {
    toast.success("checked");
  }

  return (
    <div>
      <h1>Home</h1>
      <button onClick={checkHandler}>check toast</button>
    </div>
  );
};

export default Home;
