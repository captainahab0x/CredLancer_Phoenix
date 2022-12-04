import React from "react";

import { Button } from "react-bootstrap";

import { useState } from "react";

import Login from "./LoginContainer";
import LoginOptions from "./LoginOptions";

import { useAccount } from "@starknet-react/core";

function Join(props) {
  const { account, address, status } = useAccount();
  const { setIsOpen } = props;



  const [joinButtonPopup, setJoinButtonPopup] = useState(false);
  return (
    <Button className="join-btn" onClick={() => setIsOpen(true)}>
      Join
    </Button>
  );
}
export default Join;

{
  /* <Login trigger={joinButtonPopup}>
        <h3>WELCOME TO CREDLANCER</h3>
        <p>Sign-in to get started</p>
        <LoginOptions />
      </Login> */
}
