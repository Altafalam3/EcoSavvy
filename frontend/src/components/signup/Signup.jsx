import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import './signup.css'

const Signup = () => {
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const navigate = useNavigate();

   const handleSubmit = async (event) => {
      event.preventDefault();
      // try {
      //    const res = await createUserWithEmailAndPassword(auth, email, password);
      //    console.log(res);
      //    await setDoc(doc(db, "workers", res.user.uid), {
      //       name,
      //       email,
      //       password,
      //       bio,
      //       expertise,
      //       loc,
      //    });

      //    navigate("/login");
      // } catch (err) {
      //    console.log(err);
      // }
   };

   return (
      <div className="signup-page">
         <form onSubmit={handleSubmit}>
            <h2>Sign Up</h2>
            <div className="form-group">
               <label>Name</label>
               <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
               />
            </div>
            <div className="form-group">
               <label>Email</label>
               <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
               />
            </div>
            <div className="form-group">
               <label>Password</label>
               <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
               />
            </div>
            <button type="submit">Sign Up</button>
         </form>
      </div>
   );
};

export default Signup;