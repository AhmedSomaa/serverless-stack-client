import React, { useState, useEffect } from "react";
import "./App.css";
import { Auth } from "aws-amplify";
import Routes from "./Routes";
import { onError } from "./libs/errorLib";
import { useHistory } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { AppContext } from "./libs/contextLib";

function App() {
  const history = useHistory();
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
        onError(error);
      }
      setIsAuthenticating(false);
    }
  }

  async function handleLogout() {
    await Auth.signOut();
    userHasAuthenticated(false);
    history.push("/login");
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
                <>
                  <Nav.Link href="/settings">Settings</Nav.Link>
                  <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
                </>
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
