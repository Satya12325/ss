import { authConstants } from "./actionTypes";

export const loginSuccess = (token) => {
  return {
    type: authConstants.LOGIN_SUCCESS,
    payload: {
      token: token
    }
  };
};

export const logoutSucess = (token) => {
  return {
    type: authConstants.LOGOUT_SUCCESS,
    payload: {
      token: token
    }
  };
};
