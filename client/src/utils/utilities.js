const properCase = (s) => s && s[0].toUpperCase() + s.slice(1);

/**
 * Counts the number of occurances of item in an array.
 *
 * @param {*} array the array that contains the objects
 * @param {*} item the value to test if it occurs multiple times in the array
 * @returns the number of times the item occurs in the array
 */
const getOccurances = (array, item) => {
  let count = 0;

  array.forEach((i) => (count += array[i].name === item ? 1 : 0));

  // console.log("getOccurances:", count);
  return count;
};

/**
 * Retuns the selected values from a multiselect option group.
 *
 * @param {*} id is the ID of the field to get the selections from
 * @returns an array of selected values
 */
const getSelectedValues = (id) => {
  // based off of later answers on https://stackoverflow.com/questions/11821261/how-to-get-all-selected-values-from-select-multiple-multiple

  const options = document.getElementById(id).selectedOptions;
  const values = Array.from(options).map(({ value }) => value);

  return values;
};

export { properCase, getOccurances, getSelectedValues };
