// Actions go here, add a function that will set the action too. The function will be what is imported in to the components/functions that set state.
export const SET_CURRENT_USER = "SET_CURRENT_USER";

export const setCurrentUser = (user) => {
  return {
    type: SET_CURRENT_USER,
    user: user,
  };
};
