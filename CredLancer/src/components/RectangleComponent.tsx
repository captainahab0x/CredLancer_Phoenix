import React from "react";
import { FunctionComponent } from "react";
import "./RectangleComponent.css";

const RectangleComponent: FunctionComponent = () => {
  return (
    <button className="rectangle-button1" onClick={()=>console.log(0)} />
  )

};

export default RectangleComponent;
