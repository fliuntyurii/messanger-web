import { instance } from ".";

export const userAPI = {
  getAllUsers: () => {
    return instance.get(`users`)
      .then(res => res.data);
  },

  getSingleUser: () => {
    return instance.get(`users/find-user`)
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