import { instance } from ".";

export const authAPI = {
  register: (email: string, password: string, username: string, name: string, bio: string) => {
    return instance.post(`auth/register`, {
      email,
      password,
      username,
      name,
      bio
    })
      .then(res => res);
  },

  login: (email: string, password: string) => {
    return instance.post(`auth/login`, {
      email,
      password
    })
      .then(res => res);
  },

  isUserExist: ({ username, email }: any) => {
    return instance.get(`auth/isUserExist?username=${username}&email=${email}`)
      .then(res => res.data);
  },

  forgotPassword: (email: string) => {
    return instance.get(`auth/forgotPassword/${email}`)
      .then(res => res);
  },

  updateForgottenPassword: ({ password, confirmPassword, token, email }: any) => {
    return instance.put(`auth/reset-password?token=${token}&email=${email}`, {
      password,
      confirmPassword
    })
      .then(res => res);
  },

  showCurrentUser: () => {
    return instance.get(`auth/showMe`)
      .then(res => res);
  },

  logout: () => {
    return instance.delete(`auth/logout`)
      .then(res => res.data);
  },

    verifyAccount: (token: string, id: string) => {
    return instance.put(`auth/verify`, {
      token, id
    })
      .then(res => res.data);
  },

  resendMsgToVerify: (email: string) => {
    return instance.get(`auth/verifyMessage/${email}`)
      .then(res => res.data);
  },
}