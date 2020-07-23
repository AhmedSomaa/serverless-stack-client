import "./Login.css";
import { Auth } from "aws-amplify";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useAppContext } from "../libs/contextLib";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";

export default function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { userHasAuthenticated } = useAppContext();

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      await Auth.signIn(email, password);
      userHasAuthenticated(true);
      history.push("/");
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <FormGroup controlId="email">
          <FormLabel>Email</FormLabel>
          <FormControl
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="password">
          <FormLabel>Password</FormLabel>
          <FormControl
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormGroup>
        <Button block disabled={!validateForm()} type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
}
