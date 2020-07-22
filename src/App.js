import React from 'react';
import { Navbar, Nav } from "react-bootstrap";
import './App.css';
import Routes from "./Routes";

function App() {
  return (
    <div className="App container">
      <Navbar bg="light" collapseOnSelect>
        <Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Scratch</Nav.Link>
          </Nav>
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <Nav > 
            <Nav.Link href="/signup">Signup</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Routes />
    </div>
  );
}

export default App;
