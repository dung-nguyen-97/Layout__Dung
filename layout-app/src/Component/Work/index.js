import React from "react";

import "./work.scss";

export default function Work() {
  return (
    <div className="work container">
      <h3 className="work__title">latest work</h3>
      <div className="work__items">
        <div className="work__items-content">
          <img src="https://www.w3schools.com/css/img_5terre.jpg" alt="" />
          <div className="work__items-content-detail">
            <p>Lorem ipsum dolor sit amet</p>
          </div>
        </div>
        <div className="work__items-content">
          <img src="https://www.w3schools.com/css/img_5terre.jpg" alt="" />
          <div className="work__items-content-detail">
            <p>Lorem ipsum dolor sit amet</p>
          </div>
        </div>
        <div className="work__items-content">
          <img src="https://www.w3schools.com/css/img_5terre.jpg" alt="" />
          <div className="work__items-content-detail">
            <p>Lorem ipsum dolor sit amet</p>
          </div>
        </div>
      </div>
    </div>
  );
}
