import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = () => {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const navigate = useNavigate();

   const handleEmailChange = (event) => {
      setEmail(event.target.value);
   };

   const handlePasswordChange = (event) => {
      setPassword(event.target.value);
   };

   const handleSubmit = async(event) => {
      event.preventDefault();
      await axios
         .post("http://localhost:8000/api/login/", {
            email: email,
            password: password,
         })
         .then((response) => {
            console.log(response.data);
            navigate("/home");
         })
         .catch((error) => {
            console.log(error);
         });
   };

   return (
      <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
         <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
            <h1 className="text-3xl font-semibold text-center text-green-500 underline">
               Sign in
            </h1>
            <form className="mt-6">
               <div className="mb-2">
                  <label
                     htmlFor="email"
                     className="block font-semibold text-gray-800 text-2xl"
                  >
                     Email
                  </label>
                  <input
                     type="email"
                     value={email}
                     onChange={handleEmailChange}
                     className="block w-full px-4 py-2 mt-2 text-green-600 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40" required
                  />
               </div>
               <div className="mb-2">
                  <label
                     htmlFor="password"
                     className="block text-2xl font-semibold text-gray-800"
                  >
                     Password
                  </label>
                  <input
                     type="password"
                     value={password}
                     onChange={handlePasswordChange}
                     className="block w-full px-4 py-2 mt-2 text-green-600 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40" required
                  />
               </div>
               <Link to='/login' className="text-xl text-purple-600 hover:underline">
                  Forget Password?
               </Link>
               <div className="mt-6">
                  <button
                     type="submit"
                     onClick={handleSubmit}
                     className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 text-xl transform bg-green-500 rounded-md hover:bg-green-400 focus:outline-none focus:bg-green-600"
                  >
                     Login
                  </button>
               </div>
            </form>

            <p className="mt-8 text-xl font-light text-center text-gray-700">
               {" "}
               Don't have an account?{" "}
               <Link
                  to='/signup'
                  className="text-xl font-medium text-purple-600 hover:underline"
               >
                  Sign up
               </Link>
            </p>
         </div>
      </div>
   );
};

export default Login;
