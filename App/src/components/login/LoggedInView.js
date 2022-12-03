import React from "react";

import { Button } from "react-bootstrap";

import { useState } from "react";

import Login from "./LoginContainer";
import LoginOptions from "./LoginOptions";

import { useAccount } from "@starknet-react/core";

function LoggedInView(props) {
  const { account, address, status } = useAccount();
  const { p1, p2, p3, p4 } = props;



  const [joinButtonPopup, setJoinButtonPopup] = useState(false);
  return (
    <Button className="joined-btn" onClick={() => p2(true)}>
      Hey, 0x12345gh5j67102HT
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
