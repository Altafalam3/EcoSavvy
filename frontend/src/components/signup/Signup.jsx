import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";


const Signup = () => {
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const navigate = useNavigate();

   const handleSubmit = async (event) => {
      event.preventDefault();
      await axios
         .post('http://localhost:8000/api/signup/', {
            name: name,
            email: email,
            password: password
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
         <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring-2 ring-green-600 lg:max-w-xl">
            <h1 className="text-3xl font-semibold text-center text-green-700  uppercase decoration-wavy">
               Sign Up
            </h1>
            <form className="mt-6" onSubmit={handleSubmit}>
               <div className="mb-2">
                  <label
                     htmlFor="name"
                     className="block text-xl font-semibold text-gray-800"
                  >
                     Name
                  </label>
                  <input
                     type="text"
                     id="name"
                     value={name}
                     onChange={(event) => setName(event.target.value)}
                     className="block w-full px-4 py-2 mt-2 text-green-700 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40" required
                  />
               </div>
               <div className="mb-2">
                  <label
                     htmlFor="email"
                     className="block text-xl font-semibold text-gray-800"
                  >
                     Email
                  </label>
                  <input
                     type="email"
                     id="email"
                     value={email}
                     onChange={(event) => setEmail(event.target.value)}
                     className="block w-full px-4 py-2 mt-2 text-green-700 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40" required
                  />
               </div>
               <div className="mb-2">
                  <label
                     htmlFor="password"
                     className="block text-xl font-semibold text-gray-800"
                  >
                     Password
                  </label>
                  <input
                     type="password"
                     id="password"
                     value={password}
                     onChange={(event) => setPassword(event.target.value)}
                     className="block w-full px-4 py-2 mt-2 text-green-700 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40" required
                  />
               </div>
               <div className="mt-6">
                  <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-green-700 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600 text-xl">
                     Sign up
                  </button>
               </div>
            </form>

            <p className="mt-8 text-xl font-light text-center text-gray-700">
               {" "}
               Already have an account?{" "}
               <Link
                  to="/login"
                  className="text-xl font-medium text-green-600 hover:underline"
               >
                  Sign in
               </Link>
            </p>
         </div>
      </div>
   );
};

export default Signup;