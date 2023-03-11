import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import './signup.css'

const Signup = () => {
   const [firstName, setFirstName] = useState("");
   const [lastName, setLastName] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const navigate = useNavigate();

   const handleSubmit = async (event) => {
      event.preventDefault();
     
   };

   return (
      <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring-2 ring-green-600 lg:max-w-xl">
          <h1 className="text-3xl font-semibold text-center text-green-700  uppercase decoration-wavy">
              Sign UP
          </h1>
          <form className="mt-6">
              <div className="mb-2">
                  <label
                      for="firstName"
                      className="block text-xl font-semibold text-gray-800"
                  >
                      Firstname
                  </label>
                  <input
                      type="text"
                      id="firstName"
                      value={firstName}
                      onChange={(event) => setFirstName(event.target.value)}
                      className="block w-full px-4 py-2 mt-2 text-green-700 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
              </div>
              <div className="mb-2">
                  <label
                      for="lastName"
                      className="block text-xl font-semibold text-gray-800"
                  >
                      Lastname
                  </label>
                  <input
                      type="text"
                      id="lastName"
                      value={lastName}
                      onChange={(event) => setLastName(event.target.value)}
                      className="block w-full px-4 py-2 mt-2 text-green-700 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
              </div>
              <div className="mb-2">
                  <label
                      for="email"
                      className="block text-xl font-semibold text-gray-800"
                  >
                      Email
                  </label>
                  <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      className="block w-full px-4 py-2 mt-2 text-green-700 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
              </div>
              <div className="mb-2">
                  <label
                      for="password"
                      className="block text-xl font-semibold text-gray-800"
                  >
                      Password
                  </label>
                  <input
                      type="password"
                      id="password"
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                      className="block w-full px-4 py-2 mt-2 text-green-700 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
              </div>
              <div className="mt-6">
                  <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-green-700 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600 text-xl">
                      Login
                  </button>
              </div>
          </form>

          <p className="mt-8 text-xl font-light text-center text-gray-700">
              {" "}
              Already have an account?{" "}
              <a
                  href="#"
                  className="text-xl font-medium text-green-600 hover:underline"
              >
                  Sign in
              </a>
          </p>
      </div>
  </div>
   );
};

export default Signup;