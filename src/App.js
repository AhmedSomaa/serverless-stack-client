import React from 'react';
import { Navbar, Nav } from "react-bootstrap";
import './App.css';

function App() {
  return (
    <div className="App container">
      <Navbar bg="light" collapseOnSelect>
        <Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Scratch</Nav.Link>
          </Nav>
        </Navbar.Brand>

      </Navbar>
    </div>
  );
}

export default App;
