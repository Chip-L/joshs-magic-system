import React from "react";

function CheckboxGroup({ name, valueList, values, update }) {
  return (
    <>
      {valueList.map((item) => (
        // <div className="inputGroup">
        <p>{item}</p>
        /* 
          <input
            type="checkbox"
            id="traditions_arcane"
            name="traditions"
            value="arcane"
          />
          <label htmlFor={`traditions_${item}`} className="rightLabel">
            Arcane
          </label>
        </div>
          */
      ))}
    </>
  );
}

export default CheckboxGroup;
