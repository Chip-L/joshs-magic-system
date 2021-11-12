import React, { useState } from "react";

function CheckboxGroup({ name, valueList, values, update }) {
  const [arrChecked, setArrChecked] = useState(values?.[name] || []);

  const handleChange = (value) => {
    console.log(arrChecked, value);
    //the logic here is to remove the id if its already exist else add it. and set it back to state
    const newArrChecked = arrChecked.includes(value)
      ? arrChecked.filter((i) => i != value)
      : [...arrChecked, value];

    setArrChecked(newArrChecked);
    update({
      ...values,
      [name]: newArrChecked,
    });
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
            {item}
          </label>
        </div>
      ))}
    </>
  );
}

export default CheckboxGroup;
