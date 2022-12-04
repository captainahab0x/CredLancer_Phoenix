import React from 'react';
import img1 from "../../assets/images/img1.png";
import img2 from "../../assets/images/img2.png";
import { Link } from "react-router-dom";

export default function Role () {
  return (
    <>
      <div className='content-heading-wrapper'>
        <h3 className='modal-header-heading'> Join as a </h3>
      </div>
      <br />
      <div className="image-container-inner">
          <button className="image-button">
            <Link to='/minting'>
              <img src={img1} alt="img1" />
            </Link>
          </button>
          <button className="image-button">
            <img src={img2} alt="img2" />
          </button>
      </div>
      <br />
    </>
  );
};
