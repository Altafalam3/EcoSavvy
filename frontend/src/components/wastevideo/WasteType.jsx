import React from "react";

const WasteType = (props) => {
  const mostMatched = props.data[0];
  const allLabels = props.data.map((elem) => elem.label);
  const sortedLabels = allLabels.sort((a, b) => a.localeCompare(b));
  return (
    <>
      <ul className="wastetype">
        {sortedLabels.map((label) => (
          <li key={label}>
            <span>
              <img
                className={`img ${
                  label === mostMatched.label ? "selected" : null
                }`}
                src={
                  label === "No Dolls"
                    ? "./images/No.jpg"
                    : `./images/${label}.jpg`
                }
                alt={label}
              />
              <p className="name">{label}<br/></p>
            </span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default WasteType;
