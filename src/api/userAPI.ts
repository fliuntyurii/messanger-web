import { instance } from ".";

export const userAPI = {
  getAllUsers: () => {
    return instance.get(`users`)
      .then(res => res.data);
  },

  getSingleUser: ({ username, email }: any) => {
    return instance.get(`users/find-user?username=${username}&email=${email}`)
      .then(res => res.data);
  },

  updateUser: () => {
    return instance.patch(`users/updateUser`)
      .then(res => res.data);
  },

  updateUserPassword: () => {
    return instance.patch(`users/updateUserPassword`)
      .then(res => res.data);
  }
}