import React, { useRef, useState, useEffect } from "react";
import { onError } from "../libs/errorLib";
import { API, Storage } from "aws-amplify";
import { useParams, useHistory } from "react-router-dom";

export default function Notes() {
  const file = useRef(null);
  const { id } = useParams();
  const histroy = useHistory();
  const [note, setNote] = useState(null);
  const [content, setContent] = useState("");

  useEffect(() => {
    function loadNote() {
      return API.get("notes", `/notes/${id}`);
    }

    async function onLoad() {
      try {
        const note = await loadNote();
        const { content, attachment } = note;

        if (attachment) {
          note.attachmentURL = await Storage.vault.get(attachment);
        }

        setContent(content);
        setNote(note);
      } catch (error) {
        onError(error);
      }
    }
    onLoad();
  }, [id]);

  return <div className="Notes"></div>;
}
