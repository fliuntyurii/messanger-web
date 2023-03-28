import { authAPI } from "../api/authAPI";
import { LOGIN_SUCCESS } from "../constants/actions";
import { ACCESS_TOKEN } from "../constants/auth";
import { setCookie } from "../utils/cookies";

interface AuthState {
  isLoggedIn: boolean;
}

const initialState: AuthState = {
  isLoggedIn: false
};

export function authReducer(state = initialState, action: any): AuthState {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, isLoggedIn: true };
    default:
      return state;
  }
}

export async function login(email: string, password: string): Promise<boolean> {
  try {
    const data = await authAPI.login(email, password);
    console.log('loginData', data);

    setCookie(ACCESS_TOKEN, data.token, 1);
    return Promise.resolve(true);
  } catch (error) {
    return Promise.resolve(false);
  }
}