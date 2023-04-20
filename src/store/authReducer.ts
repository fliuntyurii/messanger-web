import { authAPI } from "../api/authAPI";
import { AUTHORIZED_USER, LOGIN_SUCCESS, LOGOUT, REGISTER_SUCCESS } from "../constants/actions";
import { CACHE_NAME, USER_CACHE_URL } from "../constants/auth";
import { TRegister } from "../types/Auth.type";
import { TUser } from "../types/User.type";
import { getCache, setCache } from "../utils/caches";
import { checkCookie } from "../utils/cookies";

interface AuthState {
  user: TUser | null;
  isLoggedIn: boolean;
}

const initialState: AuthState = {
  user: null,
  isLoggedIn: !!localStorage.getItem('auth'),
};

export function authReducer(state = initialState, action: any): AuthState {
  switch (action.type) {
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      return { 
        ...state,
        user: action.user,
        isLoggedIn: true
      };
    case AUTHORIZED_USER:
      return {
        ...state,
        user: action.user
      }
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false
      }
    default:
      return state;
  }
}

export async function login(email: string, password: string): Promise<any> {
  try {
    const res: any = await authAPI.login(email, password);
    checkCookie();
    return Promise.resolve({
      success: true,
      data: res.data.user
    });

  } catch (error: any) {
    return Promise.resolve({
      success: false,
      data: 'Email and password are incorrect'
    });
  }
}

export async function register({ email, password, username, name, bio }: TRegister): Promise<any> {
  try {
    const res: any = await authAPI.register(email, password, username, name, bio);
    checkCookie();
    return Promise.resolve({
      success: true,
      data: res.data.user
    });

  } catch (error: any) {
    return Promise.resolve({
      success: false,
      data: error.message
    });
  }
}

export async function showCurrentUser(): Promise<any> {
  try {
    const data = await getCache(USER_CACHE_URL);

    if (data) {
      return Promise.resolve({
        success: true,
        data: data
      });

    } else {
      const res: any = await authAPI.showCurrentUser();

      await setCache(CACHE_NAME, USER_CACHE_URL, res.data.user);
      return Promise.resolve({
        success: true,
        data: res.data.user
      });
    }
    
  } catch (error: any) {
    return Promise.resolve({
      success: false,
      data: error.message
    });
  }
}