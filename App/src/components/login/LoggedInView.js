import React from "react";

import { Button } from "react-bootstrap";

import { useState } from "react";


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
