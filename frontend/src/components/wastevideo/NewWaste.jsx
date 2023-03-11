import React from "react";

const NewWaste = (props) => {
  const data = props.data;
  return (
    <div>
      <h3 className="text-center text-2xl text-bold mt-10">Results</h3>
      <div className="mt-4">
        {data.map((result, index) => {
          const wasteType = result.label;
          const confidence = parseFloat(result.confidence.toFixed(2));
          if (confidence === "plastic") {
            return (
              <p key={index}>
                Waste type: {wasteType}, Confidence: {confidence}
                HEllo bacho
              </p>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default NewWaste;
