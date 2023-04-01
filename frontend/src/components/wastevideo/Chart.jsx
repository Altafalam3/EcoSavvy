import React from "react";
import GaugeChart from "react-gauge-chart";

const Chart = (props) => {
  const data = props.data;
  const label = data.label;
  const confidence = parseFloat(data.confidence.toFixed(2));
  console.log(label, confidence);
  return (
    <div className="mt-4">
      <h3 className="text-center text-2xl text-bold">Prediction: <span className="text-bold uppercase font-extrabold text-4xl underline">{label}</span></h3>  
      <GaugeChart
        id="gauge-chart3"
        nrOfLevels={3}
        colors={["#FF5F6D", "#FFC371", "rgb(26 202 26)"]}
        arcWidth={0.3}
        percent={confidence}
        style={{ color: "red" }} // <-- set the color to red
      />
    </div>
  );
};
export default Chart;




