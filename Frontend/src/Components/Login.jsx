import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
const Login = () => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });

  const changeHandler = (e) => {
   
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/api/v1/login',loginData,{
      headers:{
        'Content-Type': 'application/json'
      }
    }).then((response)=>{
       console.log(`response data`,response.data)
    }).catch((err)=>{
      console.log(`error while logiing`,err)
    })
   
  };

  return (
    <div className='w-full h-screen flex items-center justify-center bg-no-repeat bg-cover relative bg-[url("https://assets.nflxext.com/ffe/siteui/vlv3/4d2c5849-b306-4884-9036-6211f7ee0178/web/IN-en-20240930-TRIFECTA-perspective_1e1ca6cd-9e2d-4e9d-9e4b-ba0c2d3a0e31_small.jpg")] bg-opacity-100'>
      <Link to="/">
        <img
          className="w-40 sm:w-60 absolute top-4 sm:top-[-20px] left-8 sm:left-24"
          src="https://images.ctfassets.net/y2ske730sjqp/6bhPChRFLRxc17sR8jgKbe/6fa1c6e6f37acdc97ff635cf16ba6fb3/Logos-Readability-Netflix-logo.png"
          alt="Netflix Logo"
        />
      </Link>

      <div className="bg-black opacity-90 w-[90%] sm:w-[400px] md:w-[340px] flex flex-col rounded-md p-4 sm:p-8">
        <form onSubmit={submitHandler} action="" className="flex flex-col">
          <h1 className="text-white text-xl sm:text-2xl mb-4 font-semibold">
            Login
          </h1>
          <input
            onChange={changeHandler}
            value={loginData.email}
            className="mb-2 px-3 py-2 sm:py-3 bg-transparent border-[1px] border-gray-500 rounded-md text-white"
            type="email"
            name="email"
            placeholder="Email or Mobile Number"
          />
          <input
            onChange={changeHandler}
            value={loginData.password}
            className="mb-2 px-3 py-2 sm:py-3 mt-2 border-[1px] border-gray-500 bg-transparent rounded-md text-white"
            type="password"
            name="password"
            placeholder="Password"
          />
          <button className="mb-2 px-3 py-2 sm:py-3 mt-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition">
            Sign In
          </button>
          <p className="text-white text-center">OR</p>
          <Link to="/register">
            <p className="text-white mt-2 text-center">
              New to Netflix? <span className="text-blue-600">Sign up Now</span>
            </p>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
