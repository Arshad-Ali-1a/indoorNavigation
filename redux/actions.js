const SET_SOURCE = "SET_SOURCE",
  SET_DESTINATION = "SET_DESTINATION",
  SET_RESULT = "SET_RESULT";

const SET_USER_DATA = "SET_USER_DATA";

const RESET_RESULT_USER = "RESET_RESULT_USER";
const RESET_RESULT = "RESET_RESULT";

const CONFIRM_SOURCE = "CONFIRM_SOURCE",
  CONFIRM_DESTINATION = "CONFIRM_DESTINATION";
// const SET_LOADING = "SET_LOADING";

const setSource = (payload) => ({
  type: SET_SOURCE,
  payload,
});

const setDestination = (payload) => ({
  type: SET_DESTINATION,
  payload,
});

const setResult = (payload) => ({
  type: SET_RESULT,
  payload,
});

const setUserData = (payload) => ({
  type: SET_USER_DATA,
  payload,
});

const resetResultUser = (payload) => ({
  type: RESET_RESULT_USER,
  payload,
});

const resetResult = (payload) => ({
  type: RESET_RESULT,
  payload,
});

const confirmSource = (payload) => ({
  type: CONFIRM_SOURCE,
  payload,
});

const confirmDestination = (payload) => ({
  type: CONFIRM_DESTINATION,
  payload,
});

// const setLoading = (payload) => ({
//   type: SET_LOADING,
//   payload,
// });

export {
  SET_SOURCE,
  setSource,
  SET_DESTINATION,
  setDestination,
  SET_RESULT,
  setResult,
  SET_USER_DATA,
  setUserData,
  RESET_RESULT_USER,
  resetResultUser,
  RESET_RESULT,
  resetResult,
  // SET_LOADING,
  // setLoading,
  CONFIRM_SOURCE,
  confirmSource,
  CONFIRM_DESTINATION,
  confirmDestination,
};
