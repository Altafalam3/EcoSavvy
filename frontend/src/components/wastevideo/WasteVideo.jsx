import React, { useEffect, useRef, useState } from "react";
import ml5 from "ml5";
import Loader from 'react-loader-spinner';
import useInterval from '@use-it/interval';
import axios from 'axios';
import WasteType from './WasteType';
import Chart from './Chart';

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./wastevideo.css";

let classifier;
// image upload wala
function WasteVideo() {
  const inputRef = useRef();
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
        console.log(results)
        if (stopped) {
          sendResultsToBackend(results);
        }
      });
    }
  }, 500);

  const toggle = () => {
    setStart(!start);
    setResult([]);
    setStopped(!stopped)
  }

  const sendResultsToBackend = (results) => {
    const data = results.map(result => {
      const wasteType = result.label;
      const accuracy = result.confidence;
      return { wasteType, accuracy };
    });
    axios.post('/api/results', data)
      .then(response => {
        console.log(response);
        setStopped(false);
      })
      .catch(error => {
        console.error(error);
        setStopped(false);
      });
  }

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        const img = new Image();
        img.src = reader.result;
        img.onload = () => {
          inputRef.current = img;
        }
      };
    }
  };

  return (
    <div className="wastevideo">
      <Loader
        type="Watch"
        color="#00BFFF"
        height={200}
        width={200}
        visible={!loaded}
        style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}
      />
      <div className="upper">
        <div className="capture">
          <input type="file" onChange={handleImageUpload} />
          {loaded && (
            <button onClick={() => toggle()}>
              {start ? "Stop" : "Start"}
            </button>
          )}
        </div>
        {result.length > 0 && (
          <div>
            <Chart data={result[0]} />
          </div>
        )}
      </div>
      {result.length > 0 && (
        <div className="results">
          <WasteType data={result} />
        </div>
      )}
    </div>
  );
}

export default WasteVideo;
