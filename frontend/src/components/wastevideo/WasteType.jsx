import React from "react";

const WasteType = (props) => {
  const mostMatched = props.data[0];
  const allLabels = props.data;
  // const sortedLabels = allLabels.map((elem) => elem.label).sort((a, b) => a.localeCompare(b));
  return (
    <>
      <ul className="wastetype waste-elem">
        {allLabels.map((props) => (
          <li key={props.index}>
            <span>
              <img
                className={`img ${
                  props.label === mostMatched.label ? "selected" : null
                }`}
                src={
                  props.label === "No Dolls"
                    ? "./images/No.jpg"
                    : `./images/${props.label}.jpg`
                }
                alt={props.label}
              />
              <p className="name">{props.label}<br/>{((props.confidence)*100).toFixed(3)}</p>
            </span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default WasteType;