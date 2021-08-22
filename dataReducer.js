import { useReducer } from "react";
import {} from "./actions.js";

export const reducer = (state, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        user,
      };
    default:
      return state;
  }
};
export function useDataReducer(initialState) {
  return useReducer(reducer, initialState);
}
