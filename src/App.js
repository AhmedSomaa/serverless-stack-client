import React, { useState, useEffect } from "react";
import "./App.css";
import { Auth } from "aws-amplify";
import Routes from "./Routes";
import { Navbar, Nav } from "react-bootstrap";
import { AppContext } from "./libs/contextLib";

function App() {
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const [isAuthenticated, userHasAuthenticated] = useState(false);

  useEffect(() => {
    onLoad();
  }, []);

  async function onLoad() {
    try {
      await Auth.currentSession();
      userHasAuthenticated(true);
    } catch (error) {
      if (error !== "No current user") {
        alert(error);
      }
      setIsAuthenticating(false);
    }
  }

  async function handleLogout() {
    await Auth.signOut();
    userHasAuthenticated(false);
  }

  return (
    !isAuthenticating && (
      <div className="App container">
        <Navbar bg="light" collapseOnSelect>
          <Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/">Scratch</Nav.Link>
            </Nav>
          </Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              {isAuthenticated ? (
                <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
              ) : (
                <>
                  <Nav.Link href="/signup">Signup</Nav.Link>
                  <Nav.Link href="login">Login</Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
          <Routes />
        </AppContext.Provider>
      </div>
    )
  );
}

export default App;
