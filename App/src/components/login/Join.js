import React from "react";

import { Button } from "react-bootstrap";

import { useState } from "react";

import Login from "./LoginContainer";
import LoginOptions from "./LoginOptions";

function Join(props) {
  const {p1, p2} = props
  // const [joinButtonPopup, setJoinButtonPopup] = useState(false);
  return (
      <Button className="join-btn" onClick={() => p2(true)}>
        Join
      </Button>
  );
}
export default Join;


      {/* <Login trigger={joinButtonPopup}>
        <h3>WELCOME TO CREDLANCER</h3>
        <p>Sign-in to get started</p>
        <LoginOptions />
      </Login> */}