import React from "react";
import "./carousel.scss";

export default function Carousel() {
  return (
    <div className="carousel">
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel__content active container ">
            <div className="carousel__content__items row">
              <div className="col-5 carousel__content__items-detail">
                <h2>Cursus penati saccum nulla</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit.
                  aliquam tincidunt elementum sem non luctus
                </p>
                <button type="submit">Read More Here</button>
              </div>
              <div className="col-5 carousel__content__items-img">
                <img
                  src="https://www.w3schools.com/css/paris.jpg"
                  alt="Paris"
                />
              </div>
            </div>
          </div>
        </div>

        <a
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}
