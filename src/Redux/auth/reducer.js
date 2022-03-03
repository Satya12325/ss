import { v4 as uuid } from "uuid";
import { authConstants } from "./actionTypes";

const token = uuid("token") || null;

const initState = {
  isAuth: token !== null,
  token: token
};

function reducer(state = initState, action) {
  switch (action.type) {
    case authConstants.LOGIN_SUCCESS: {
      return {
        ...state,
        isAuth: true,
        token: action.payload.token
      };
    }
    case authConstants.LOGOUT_SUCCESS: {
      return {
        ...state,
        isAuth: false,
        token: action.payload.token
      };
    }
    default:
      return state;
  }
}

export default reducer;

// 1. true
// 2. false
// 3. error
// 4. others
