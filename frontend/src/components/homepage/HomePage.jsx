import React from "react";
import dustbin from "./dustbin.png";
import truck from "./Truck.png";
import video1 from "./wastvideo.mp4";
const HomePage = () => {
  return (
    <div>
      <div className="banner">
			<div className="intro">
				<h2 style={{color: '#424369'}}>Keep calm & Be FIT</h2>
				<p>Online platform to keep track of your Calories and maintain your help</p>
				<button className="btn"><span>GET STARTED</span></button>
			</div>
		</div>
      {/* <div className="">
      <video className="" src={video1} autoPlay={true} onError={(e) => console.log(e)} />
      </div> */}
    
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="hero"
            src={dustbin}
          />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              AI-based Garbage Segregation
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
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Button
              </button>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Button
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
              In an industry plagued with ongoing diplomatic issues, the
              recycling industry struggles to properly identify certain products
              as recyclable. Moreover, the average consumer should identify the
              difference between recyclable and non-recyclable goods. The
              recycling industry is already strained with economic downturns and
              diplomatic, and we as citizens should do our part in helping those
              in this industry. Our product is designed to identify goods by the
              aforementioned categories and narrow down the goods, based on
              their overall reusability. All in all, it is designed to appeal to
              the average consumer, while simultaneously creating a difference
              in the recycling industry and the world.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Button
              </button>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Button
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
