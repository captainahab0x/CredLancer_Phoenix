import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImgCard from "../Common/ImgCard";

function ImgSliderBox() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div className="quests-slider-container">
      <div className="quests-slider">
        <div className="quests-slider-item ">
            <div className="img-slide">
              <ImgCard img="./assets/images/slide/1.png" />
              <h3 className="img-silde-desc">IN-GAME LOYALTY</h3>
            </div>
            <div className="img-slide">
              <ImgCard img="./assets/images/slide/2.png" />
              <h3 className="img-silde-desc">MARKETPLACE PLUGIN</h3>
            </div>
            <div className="img-slide">
              <ImgCard img="./assets/images/slide/3.png" />
              <h3 className="img-silde-desc">AR GAME GRAPHICS</h3>
            </div>
        </div>
      </div>
    </div>
  );
}

export default ImgSliderBox;
