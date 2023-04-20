import { authAPI } from "../api/authAPI";
import { dialogueAPI } from "../api/dialogueAPI";
import { GET_USER_DIALOGUES } from "../constants/actions";
import { checkCookie } from "../utils/cookies";

interface DialogueState {
  dialoguesList: [] | null;
}

const initialState: DialogueState = {
  dialoguesList: null,
};

export function dialogueReducer(state = initialState, action: any): DialogueState {
  switch (action.type) {
    case GET_USER_DIALOGUES:
      return { 
        ...state,
        dialoguesList: action.dialoguesList,
      };
    default:
      return state;
  }
}

export async function getAllDialogues(): Promise<any> {
  try {
    const res: any = await dialogueAPI.getAllDialogues();

    checkCookie();
    console.log(res.data)
    // return Promise.resolve({
    //   success: true,
    //   data: res.data
    // });

  } catch (error) {
    return Promise.resolve({
      success: false,
      data: error
    });
  }
}