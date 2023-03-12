// import React from 'react'
// import './navbar.css'
// import Leaf from './leaf.png'
// import { Link } from 'react-router-dom'

// const Navbar = () => {
//    return (
//       <header className="text-gray-600 body-font bg-green-300">
//          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
//             <a  className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
//                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
//           <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
//         </svg> */}
//                <img className='h-10' src={Leaf} />
//                <span className="ml-3 text-2xl">EcoSavvy</span>
//             </a>
//             <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center cursor-pointer ">
//                <a href='#shawn' className="mr-5 hover:text-gray-900 scroll-smooth">Home</a>
//                <a className="mr-5 hover:text-gray-900">About Us</a>
//                <a className="mr-5 hover:text-gray-900">WebCam</a>
//                <a className="mr-5 hover:text-gray-900">ImageUpload</a>

//                <a className="mr-5 hover:text-gray-900">Contact</a>

//             </nav>
//             <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">

//                Login
//                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
//           <path d="M5 12h14M12 5l7 7-7 7"></path>
//         </svg>
//             </button>
//          </div>
//       </header>
//    )
// }

// export default Navbar;

import React from 'react'
import './navbar.css'
import Leaf from './leaf.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
   return (
      <header className="text-gray-600 body-font bg-green-300">
         <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <Link to="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
               <img className='h-10' src={Leaf} />
               <span className="ml-3 text-2xl">EcoSavvy</span>
            </Link>
            <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center cursor-pointer ">
               <Link to="/" className="mr-5 hover:text-gray-900 scroll-smooth">Home</Link>
               <Link to="/about" className="mr-5 hover:text-gray-900">About Us</Link>
               <Link to="/webcam" className="mr-5 hover:text-gray-900">WebCam</Link>
               <Link to="/imageupload" className="mr-5 hover:text-gray-900">ImageUpload</Link>
               <Link to="/contact" className="mr-5 hover:text-gray-900">Contact</Link>
            </nav>
            <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
               <Link to="./login">Login</Link>
               <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
               </svg>
            </button>
         </div>
      </header>
   )
}

export default Navbar;
