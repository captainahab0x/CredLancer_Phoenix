import React from "react";

import { Button } from "react-bootstrap";

import { useState } from "react";

import Login from "./LoginContainer";
import LoginOptions from "./LoginOptions";

function LoggedInView(props) {
  const { address } = props;



  const [joinButtonPopup, setJoinButtonPopup] = useState(false);
  return (
    <Button className="joined-btn">
      Hey, {address}
    </Button>
  );
}
export default LoggedInView;

{
  /* <Login trigger={joinButtonPopup}>
        <h3>WELCOME TO CREDLANCER</h3>
        <p>Sign-in to get started</p>
        <LoginOptions />
      </Login> */
}
