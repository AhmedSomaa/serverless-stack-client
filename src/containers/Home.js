import React, { useState, useEffect } from "react";
import { API } from "aws-amplify";
import { onError } from "../libs/errorLib";
import { useAppContext } from "../libs/contextLib";
import { LinkContainer } from "react-router-bootstrap";
import { ListGroup, ListGroupItem, Dropdown } from "react-bootstrap";
import "./Home.css";

export default function Home() {
  const [notes, setNotes] = useState([]);
  const { isAuthenticated } = useAppContext();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function onLoad() {
      if (!isAuthenticated) {
        return;
      }

      try {
        const notes = await loadNotes();
        setNotes(notes);
      } catch (error) {
        onError(error);
      }

      setIsLoading(false);
    }

    onLoad();
  }, [isAuthenticated]);

  function loadNotes() {
    return API.get("notes", "/notes");
  }

  function renderNoteList(notes) {
    return [{}].concat(notes).map((note, i) =>
      i !== 0 ? (
        <LinkContainer key={note.noteId} to={`/notes/${note.noteId}`}>
          <ListGroupItem>
            <h4>{note.content.trim().split("\n")[0]}</h4>
            {"Created: " + new Date(note.createdAt).toLocaleString()}
          </ListGroupItem>
        </LinkContainer>
      ) : (
        <LinkContainer key="new" to="/notes/new">
          <ListGroupItem>
            <h4>
              <b>{"\uFF0B"}</b> create a new note
            </h4>
          </ListGroupItem>
        </LinkContainer>
      )
    );
  }

  function renderLander() {
    return (
      <div className="lander">
        <div className="lander">
          <h1>Scratch</h1>
          <p>A simple note taking app</p>
        </div>
      </div>
    );
  }

  function renderNotes() {
    return (
      <div className="notes">
        <h1>Your Notes</h1>
        <Dropdown.Divider />
        <ListGroup>{!isLoading && renderNoteList(notes)}</ListGroup>
      </div>
    );
  }
  return (
    <div className="Home">
      {isAuthenticated ? renderNotes() : renderLander()}
    </div>
  );
}
