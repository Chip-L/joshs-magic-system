import React from "react";

function CheckboxGroup({ name, valueList, values, update }) {
  return (
    <>
      {valueList.map((item) => (
        <div className="inputGroup" key={`${name}_${item}`}>
          <input
            type="checkbox"
            id={`${name}_${item}`}
            name={name}
            value={item}
            // key={`${name}_${item}`}
          />
          <label
            htmlFor={`${name}_${item}`}
            className="rightLabel"
            key={`${name}_${item}`}
          >
            Arcane
          </label>
        </div>
      ))}
    </>
  );
}

export default CheckboxGroup;
