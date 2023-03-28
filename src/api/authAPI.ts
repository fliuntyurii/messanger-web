import { instance } from ".";

export const authAPI = {
  // fix back
  register: (name: string, email: string, password: string, username: string) => {
    return instance.post(`auth/register`, {
      name,
      email,
      password,
      username
    })
      .then(res => res.data);
  },

  login: (email: string, password: string) => {
    return instance.post(`auth/login`, {
      email,
      password
    })
      .then(res => res.data)
      .catch(err => console.log(err))
  },

  // fix back
  forgotPassword: (email: string) => {
    return instance.get(`auth/forgotPassword/${email}`)
      .then(res => res.data);
  },

  updateForgottenPassword: ({ password, confirmPassword, token, email }: any) => {
    return instance.put(`auth/reset-password?token=${token}&email=${email}`, {
      password,
      confirmPassword
    })
      .then(res => res.data);
  },

  ////////////////
  logout: () => {
    return instance.delete(`auth/logout`)
      .then(res => res.data);
  },

  showCurrentUser: () => {
    return instance.get(`auth/showMe`)
      .then(res => res.data);
  },

  // fix back
  verifyAccount: (token: string, id: string) => {
    return instance.put(`auth/verify`, {
      token, id
    })
      .then(res => res.data);
  },

  // fix back
  resendMsgToVerify: (email: string) => {
    return instance.get(`auth/verifyMessage/${email}`)
      .then(res => res.data);
  },
}