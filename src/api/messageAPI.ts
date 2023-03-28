import { instance } from ".";

export const messageAPI = {
  getMessage: (id: string) => {
    return instance.get(`message/${id}`)
      .then(res => res.data);
  },

  getAllMessages: (dialogueId: string) => {
    return instance.get(`message/all/${dialogueId}`)
      .then(res => res.data);
  },

  createMessage: () => {
    return instance.post(`message`)
      .then(res => res.data);
  },

  updateMessage: () => {
    return instance.put(`message`)
      .then(res => res.data);
  },

  deleteMessage: (id: string) => {
    return instance.delete(`message/${id}`)
      .then(res => res.data);
  },
}