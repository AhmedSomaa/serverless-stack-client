import React, { useState, useEffect } from "react";
import { onError } from "../libs/errorLib";
import { useAppContext } from "../libs/contextLib";
import {
  PageHeader,
  ListGroup,
  ListGroupItem,
  Dropdown,
} from "react-bootstrap";
import "./Home.css";

export default function Home() {
  const [notes, setNotes] = useState([]);
  const { isAuthenticated } = useAppContext();
  const [isLoading, setIsLoading] = useState(true);

  function renderNoteList(notes) {
    return null;
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
