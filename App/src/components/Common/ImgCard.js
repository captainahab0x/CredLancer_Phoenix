import React from "react";

function ImgCard(props) {
  return (
    <>
      <div className="img-card">
        <div className="img-card-header d-flex">
        </div>
        <div className="card-img-div">
          <img className="card-img responsive-img" src={props.img} alt="" />
        </div>
      </div>
    </>
  );
}

export default ImgCard;
