import React, { useEffect, useRef, useState } from "react";
import ml5 from "ml5";
import Loader from "react-loader-spinner";
import useInterval from "@use-it/interval";
import axios from "axios";
import WasteType from "./WasteType";

import Chart from "./Chart";
import { FaUpload } from "react-icons/fa";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./wastevideo.css";
import NewWaste from "./NewWaste";

let classifier;
// image upload wala
function WasteVideo() {

  const inputRef = useRef();
  const [imageData, setImageData] = useState('');
  const [start, setStart] = useState(false);
  const [result, setResult] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [stopped, setStopped] = useState(false);

  useEffect(() => {
    classifier = ml5.imageClassifier("./model/model.json", () => {
      setLoaded(true);
    });
  }, []);

  useInterval(() => {
    if (classifier && start) {
      classifier.classify(inputRef.current, (error, results) => {
        if (error) {
          console.error(error);
          return;
        }
        setResult(results);
        console.log(results);
        // if (stopped) {
        //   sendResultsToBackend(result);
        // }
      });
    }
  }, 500);

  const toggle = () => {
    setStart(!start);
    setResult([]);
    setStopped(!stopped);
  };

  // const sendResultsToBackend = (results) => {
  //   const data = results.map((result) => {
  //     const wasteType = results.label;
  //     const accuracy = results.confidence;
  //     return { wasteType, accuracy };
  //   });
  //   axios
  //     .post("http://localhost:8000/api/prediction/", { predictions: data })
  //     .then((response) => {
  //       console.log(response);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // };


  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        const img = new Image();
        setImageData(reader.result);
        img.src = reader.result;
        img.onload = () => {
          inputRef.current = img;
        };
      };
    }
  };

  return (
    <>
      <div className="wastevideo">
        <Loader
          type="Watch"
          color="#00BFFF"
          height={200}
          width={200}
          visible={!loaded}
          style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}
        />
        <div className="upper">
          <div className="capture m-20">
            {!imageData && <label
              htmlFor="file-upload"
              className="relative cursor-pointer flex justify-center items-center rounded-lg border-dashed border-gray-300 border-2 py-2 px-4 transition duration-300 ease-in-out hover:bg-gray-200 hover:border-gray-400"
            >
              <div className="flex flex-col items-center space-y-1">
                <FaUpload className="text-gray-400" size={30} />
                <span className="text-gray-400 font-medium">Upload an image</span>
                <h2>{inputRef.current ? "File uploaded" : ""}</h2>
              </div>
              <input
                id="file-upload"
                type="file"
                onChange={handleImageUpload}
                className="hidden"
              />
            </label>
            }
            {
              imageData && <><h2>Image Uploaded</h2><br /><img className="w-80 h-80 rounded-md" src={imageData} alt="Uploaded Pic" /></>
            }

            {loaded && (
              <button className="text-xl mt-5" onClick={() => toggle()}>
                {start ? "Stop" : "Start"}
              </button>
            )}
          </div>
          {/* hell */}
          <div class="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
            {result.length > 0 && (
              <div className="mt-20">
                <Chart data={result[0]} />
              </div>
            )}
          </div>
          {/* heello */}
        </div>
        {result.length > 0 && (
          <div className="results">
            <WasteType data={result} />
          </div>
        )}

        {/* REVIEW */}

      </div>
      {/* <NewWaste/> */}
    </>
  );
}

export default WasteVideo;
