import React from "react";
import dustbin from "./dustbin.png";
import truck from "./Truck.png";
import video1 from "./wastvideo.mp4";
import  { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import { useEffect } from "react";
import './homepage.css'
import {Link} from 'react-router-dom'
import ImageOne from './photos/Bg11.jpg';
import ImageTwo from './photos/li-hao-b25tsR8dBh0-unsplash.jpg';
import ImageThree from './photos/jas-min-CIItgnBEOgw-unsplash.jpg';

const images = [ImageOne, ImageTwo, ImageThree];
const HomePage = () => {

  
  
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((currentImage + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentImage]);



  const [text, setText] = useState('');
  const fullText = "WELCOME TO ECOSAVVY";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i === fullText.length) {
        clearInterval(timer);
      } else {
        setText(fullText.slice(0, i + 1));
        i++;
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>

<div className="relative h-screen w-screen" >
     
      {images.map((image, index) => (
  <div
    key={index}
    className={`saa absolute inset-0 h-full w-full transition-opacity duration-2000 ${
      index === currentImage ? 'opacity-100' : 'opacity-0'
    }`}
    style={{ paddingBottom: "6.5%", paddingRight:'13px' }}
  >
    <h1 className="italic text-6xl font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 text-green-500  underline    -translate-y-1/2 z-10  ">{text}
      {/* <span>W</span>ELCOME<span className="text-yellow-300"> HOME</span> */}
    </h1>

    <img
      src={image}
      alt={`Image ${index}`}
      className="absolute inset-0 h-full w-full object-cover object-center"
    />
  </div>
))}
    </div>
      
      {/* <div className="">
      <video className="" src={video1} autoPlay={true} onError={(e) => console.log(e)} />
      </div> */}
    
      <section className="text-gray-600 body-font scroll-smooth" id="shawn">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img
            className=" lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="hero"
            src={dustbin}
          />
          <div className="text-center lg:w-2/3 w-full" >
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              ML-based Garbage Segregation
            </h1>
            <p className="mb-8 leading-relaxed">
              The politics of waste in the present day is a mess. Objects
              Americans intend to recycle tend to arrive at landfills and
              recently, recycling has become more expensive than throwing those
              objects away into the trash. In order to support the recycling
              industry, six students from AI Camp worked together and developed
              a detector for individuals to identify what type of waste
              something is and whether it should be recycled or not.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              <Link to="/video">Web Cam</Link> 
              </button>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                <Link to="/image">Image Upload</Link>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* next section */}

      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="hero"
            src={truck}
          />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Why waste?
            </h1>
            <p className="mb-8 leading-relaxed">
            Our app can help you identify recyclable items and properly dispose of them, reducing waste and saving money. By doing so, you can make a positive impact on the environment and support the recycling industry, which is facing economic and diplomatic challenges.
            Our app can help address this challenge by providing users with a simple and intuitive way to identify recyclable items and learn how to dispose of them properly. This can have a significant positive impact on the environment by reducing waste and conserving resources, as well as supporting the recycling industry, which is facing economic and diplomatic challenges.
            </p>
            {/* <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Button
              </button>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Button
              </button>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
