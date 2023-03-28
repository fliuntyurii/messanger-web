import { instance } from ".";

export const dialogueAPI = {
  getDialogue: (id: string) => {
    return instance.get(`dialogue/${id}`)
      .then(res => res.data);
  },

  createDialogue: () => {
    return instance.post(`dialogue`)
      .then(res => res.data);
  },

  deleteDialogue: () => {
    return instance.delete(`dialogue`)
      .then(res => res.data);
  }
}