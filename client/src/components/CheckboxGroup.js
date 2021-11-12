import React, { useState } from "react";

import { properCase } from "../utils/utilities";

/**
 *
 * @param {*} props:
 * name is string, this is the name that will be stored in the values
 * valueList is array of values to be populated as checkboxes
 * state is the state object that will change with the results
 * updateState is the function to change the state object
 * @returns
 */
function CheckboxGroup({ name, valueList, state, updateState }) {
  const [arrChecked, setArrChecked] = useState(state?.[name] || []);

  const handleChange = (value) => {
    //the logic here is to remove the id if its already exist else add it. and set it back to state
    const newArrChecked = arrChecked.includes(value)
      ? arrChecked.filter((i) => i !== value)
      : [...arrChecked, value];

    setArrChecked(newArrChecked);
    updateState(name, newArrChecked);
  };

  return (
    <>
      {valueList.map((item) => (
        <div className="inputGroup" key={`${name}_${item}`}>
          <input
            type="checkbox"
            id={`${name}_${item}`}
            name={name}
            checked={arrChecked.includes(item)}
            value={item}
            onChange={() => handleChange(item)}
          />
          <label
            htmlFor={`${name}_${item}`}
            className="rightLabel"
            key={`${name}_${item}`}
          >
            {properCase(item)}
          </label>
        </div>
      ))}
    </>
  );
}

export default CheckboxGroup;
