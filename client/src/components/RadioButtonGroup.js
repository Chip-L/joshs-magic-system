import React, { useState } from "react";
import { properCase } from "../utils/utilities";

/**
 *
 * @param {*} props:
 * name is string, this is the name that will be stored in the values
 * valueList is array of objects containing:
 * { value (required)
 *   toolTipText: (optional)
 *   default: boolean (optional)
 *   } pairs to be populated as radio buttons
 * state is the state object that will change with the results
 * updateState is the function to change the state object
 * @returns
 */
function RadioButtonGroup({ name, valueList, state, updateState }) {
  const getInitialState = () => {
    if (state.name) {
      return state.name;
    }
    const value = valueList?.find((item) => item.default);
    if (value) {
      return value.value;
    }
    return valueList[0].value;
  };

  const [radioBtn, setRadioBtn] = useState(getInitialState());

  const toolTip = (item) => {
    if ("toolTipText" in item) {
      return <span className="toolTipText">{item.toolTipText}</span>;
    }
  };
  const handleChange = (e) => {
    const newValue = e.target.value;

    setRadioBtn(newValue);
    updateState(name, newValue);
  };

  return (
    <>
      {valueList.map((item) => (
        <div className="inputGroup" key={`${name}_${item.value}`}>
          <input
            type="radio"
            id={`${name}_${item.value}`}
            name={item.value}
            value={item.value}
            onChange={handleChange}
            checked={radioBtn === item.value}
          />
          <label
            htmlFor={`${name}_${item.value}`}
            className="rightLabel toolTip"
          >
            {properCase(item.value)}
            {toolTip(item)}
          </label>
        </div>
      ))}
    </>
  );
}

export default RadioButtonGroup;
