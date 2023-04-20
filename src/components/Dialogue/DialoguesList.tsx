import { useState, useEffect } from "react";
import { dialogueAPI } from "../../api/dialogueAPI";
import { Message } from "../Messages/Message";

type Props = {
}

export const DialoguesList = () => {
  const [dialogues, setDialogues] = useState<[]>([]);

  // const getData = async () => {
  //   const res = await dialogueAPI.getAllDialogues();
  //   setDialogues(res.data.dialogues);
  // }

  useEffect(() => {
    // getData();
  }, []);

  return (
    <div className="home-content">
      {
        !dialogues.length ?
        <>
        </>
        :
        <div className="empty-page">
          <Message message="You have not dialogues yet" />
        </div>
      }
    </div>
  );
}