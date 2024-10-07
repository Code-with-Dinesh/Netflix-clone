import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast';
const Sign = () => {
  const navigate  = useNavigate()
  const [signup, setsignup] = useState({
    username: "",
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    setsignup({ ...signup, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/api/v1/register', signup, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      console.log('Response:', response.data);
      toast.success(response.data.message)
      navigate('/login')

    })
    .catch(error => {
      console.error('Error:', error);
    });
    console.log(signup);
  };
  return (
    <div className='w-full h-screen flex items-center justify-center bg-no-repeat bg-cover relative bg-[url("https://assets.nflxext.com/ffe/siteui/vlv3/4d2c5849-b306-4884-9036-6211f7ee0178/web/IN-en-20240930-TRIFECTA-perspective_1e1ca6cd-9e2d-4e9d-9e4b-ba0c2d3a0e31_small.jpg")] bg-opacity-100'>
      <Toaster/>
      <Link to="/">
        <img
          className="w-40 sm:w-80 absolute top-4 sm:top-[-20px] left-8 sm:left-24"
          src="https://images.ctfassets.net/y2ske730sjqp/6bhPChRFLRxc17sR8jgKbe/6fa1c6e6f37acdc97ff635cf16ba6fb3/Logos-Readability-Netflix-logo.png"
          alt="Netflix Logo"
        />
      </Link>

      <div className="bg-black opacity-90 w-[90%] sm:w-[400px] md:w-[340px] flex flex-col rounded-md p-4 sm:p-8">
        <form onSubmit={submitHandler} className="flex flex-col">
          <h1 className="text-white text-xl sm:text-2xl mb-4 font-semibold">
            Sign Up
          </h1>
          <input
            onChange={changeHandler}
            value={signup.username}
            className="mb-2 px-3 py-2 sm:py-3 bg-transparent border-[1px] border-gray-500 rounded-md text-white"
            type="text"
            name="username"
            placeholder="Username"
          />
          <input
            onChange={changeHandler}
            value={signup.email}
            className="mb-2 px-3 py-2 sm:py-3 bg-transparent border-[1px] border-gray-500 rounded-md text-white"
            type="email"
            name="email"
            placeholder="Email or Mobile Number"
          />
          <input
            onChange={changeHandler}
            value={signup.password}
            className="mb-2 px-3 py-2 sm:py-3 border-[1px] border-gray-500 bg-transparent rounded-md text-white"
            type="password"
            name="password"
            placeholder="Password"
          />
          <button
            type="submit"
            className="mb-2 px-3 py-2 sm:py-3 mt-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
          >
            Sign Up
          </button>
          <p className="text-white text-center">OR</p>
          <Link to="/login">
            <p className="text-white mt-2 text-center">
              Already have an account?{" "}
              <span className="text-blue-600">Login</span>
            </p>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Sign;
