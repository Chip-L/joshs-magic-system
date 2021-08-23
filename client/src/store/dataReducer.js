import { useReducer } from "react";
import { SET_CURRENT_USER } from "./actions.js";

export const reducer = (state, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};
export function useDataReducer(initialState) {
  return useReducer(reducer, initialState);
}
