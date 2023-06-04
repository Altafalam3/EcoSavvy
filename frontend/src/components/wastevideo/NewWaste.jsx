import React from 'react'
import P1 from './p1.png'
import P2 from './p2.png'
import P3 from './p3.png'

const NewWaste = () => {
  return (
    <div>
      <section className="text-gray-400  body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col">
            <div className="h-1 bg-gray-800 rounded overflow-hidden">
              <div className="w-24 h-full bg-green-500"></div>
            </div>
            <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
              <h1 className="sm:w-2/5 text-black font-medium title-font text-3xl mb-2 sm:mb-0">Previous Predictions</h1>
            </div>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <img alt="content" className="object-cover object-center h-full w-full" src={P2} />
              </div>
              <h2 className="text-xl font-medium title-font text-white mt-5">Metal</h2>

            </div>
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <img alt="content" className="object-cover object-center h-full w-full" src={P3} />
              </div>
              <h2 className="text-xl font-medium title-font text-white mt-5">Glass</h2>

            </div>
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <img alt="content" className="object-cover object-center h-full w-full" src={P1} />
              </div>
              <h2 className="text-xl font-medium title-font text-white mt-5">Paper</h2>

            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default NewWaste