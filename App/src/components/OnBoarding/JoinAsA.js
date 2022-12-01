import React from "react";
import img1 from "../../assets/images/img1.png";
import img2 from "../../assets/images/img2.png";

function JoinAsA() {
  return (
    <div className="image-container-outer">
      <p>Join as a</p>
      <div className="image-container-inner">
        <button className="image-button">
          <img src={img1} alt="img1" />
        </button>
        <button className="image-button">
          <img src={img2} alt="img2" />
        </button>
      </div>
    </div>
  );
}

export default JoinAsA;
