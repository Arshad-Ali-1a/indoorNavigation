import { combineReducers } from "redux";

import { auth } from "../components/login_page/userAuth";

import {
  SET_SOURCE,
  SET_DESTINATION,
  SET_RESULT,
  SET_USER_DATA,
  SET_LOADING,
  RESET_RESULT_USER,
  RESET_RESULT,
  CONFIRM_SOURCE,
  CONFIRM_DESTINATION,
} from "./actions";

const sourceReducer = (state = { id: 0 }, action) => {
  switch (action.type) {
    case SET_SOURCE:
    case CONFIRM_SOURCE:
      return { ...state, ...action.payload };

    case RESET_RESULT:
    case RESET_RESULT_USER:
      return { id: 0 };
    default:
      return state;
  }
};

const destinationReducer = (state = { tempId: 0, id: 0 }, action) => {
  switch (action.type) {
    case SET_DESTINATION:
      return { tempId: action.payload?.id };

    case CONFIRM_DESTINATION:
      return { ...state, id: action.payload?.id || state.tempId };

    case RESET_RESULT:
    case RESET_RESULT_USER:
      return { tempId: 0, id: 0 };
    default:
      return state;
  }
};

const resultReducer = (state = { distance: [], path: [] }, action) => {
  switch (action.type) {
    case SET_RESULT:
      return { ...action.payload };

    // case RESET_RESULT:
    case RESET_RESULT_USER:
      return { distance: [], path: [] };
    default:
      return state;
  }
};

// const prevState = () => ({ isLoggedIn: auth.currentUser ? true : false });
const userReducer = (state = { isLoggedIn: false }, action) => {
  //   console.log(state);
  switch (action.type) {
    case SET_USER_DATA:
      return { ...state, ...action.payload };
    case RESET_RESULT_USER:
      return { isLoggedIn: false };
    default:
      return state;
  }
};

// const loadingReducer = (state = { isLoading: true }, action) => {
//   switch (action.type) {
//     case SET_LOADING:
//       return { ...action.payload };
//     default:
//       return state;
//   }
// };

const rootReducer = combineReducers({
  source: sourceReducer,
  destination: destinationReducer,
  result: resultReducer,
  user: userReducer,
  // loading: loadingReducer,
});

export { rootReducer };
