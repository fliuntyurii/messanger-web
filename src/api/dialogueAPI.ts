import { instance } from ".";

export const dialogueAPI = {
  getDialogue: (id: string) => {
    return instance.get(`dialogue/${id}`)
      .then(res => res);
  },

  getAllDialogues: () => {
    return instance.get(`dialogue`)
      .then(res => res);
  },

  createDialogue: () => {
    return instance.post(`dialogue`)
      .then(res => res);
  },

  deleteDialogue: () => {
    return instance.delete(`dialogue`)
      .then(res => res);
  }
}