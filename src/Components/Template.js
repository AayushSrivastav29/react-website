import React from "react";
import frame from "../Assests/frame.png";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
import { FcGoogle } from "react-icons/fc";

const Template = ({ title, desc1, desc2, image, formtype, setIsLoggedIn }) => {
  return (
    <div className="flex justify-between w-11/12 max-w-[1160px] h-full py-12 mx-auto gap-x-12 gap-y-0 text-white">
      
      <div className="w-11/12 max-w-[450px] ">
        <h2 className="text-3xl text-richblack-5 font-semibold leading-[2.375rem] ">
          {title}
        </h2>

        <p className="text-[1.125rem] leading-[1.625rem] mt-4 ">
          <span className=" text-richblack-100">
            {desc1} 
            <br/>
          </span>
          <span className="text-blue-100 italic">
            {desc2}
          </span>
        </p>

        {formtype === "signup" ?
        <SignupForm setIsLoggedIn={setIsLoggedIn}/> :
        <LoginForm setIsLoggedIn={setIsLoggedIn}/>}

        <div className="flex w-full items-center my-4 gap-x-2">
          <div className=" w-full h-[1px]  bg-richblack-700"></div>
          <p className="text-richblack-700 font-medium leading-[1.375rem ] ">
            or
          </p>
          <div className=" w-full h-[1px]  bg-richblack-700"></div>
        </div>

        <button className="w-full flex justify-center items-center rounded-[8px] font-medium text-richblack-100 
        border border-richblack-700 py-2 mt-6 ">
          <FcGoogle/>
        <p>Sign in with Google</p>
        </button>
      </div>

      <div className="relative w-11/12 max-w-[450px]">
        <img
          src={frame}
          alt="login-img"
          style={{ width:'558px', height:'385px', objectFit: 'cover'} }
          // width={558}
          // height={504}
          loading="lazy"
        />

        <img className="absolute -top-5 -left-5"
          src={image}
          alt="students"
          style={{ width:'558px', height:'380px', objectFit: 'cover'} }
          // width={558}
          // height={490}
          loading="lazy"
          
        />
      </div>
    </div>
  );
};

export default Template;
