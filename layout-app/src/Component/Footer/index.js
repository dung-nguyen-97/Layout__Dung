import React from "react";
import "./footer.scss";

export default function Footer() {
  return (
    <>
      <footer id="footer" className="footer mt-4 pt-4 bg-dark">
        <div className="container bg-dark">
          <div className="row mt-2 pb-2 footer__items">
            <div className="col-3">
              <div className="footer__items__title mb-5">
                <h6>From The Blog</h6>
              </div>
              <div className="footer__items__detail">
                <p>Post Title</p>
                <p>Friday</p>
                <p>Read more</p>
              </div>
            </div>
            <div className="col-3">
              <div className="footer__items__title mb-5">
                <h6>Quick Link</h6>
              </div>
              <div className="footer__items__detail">
                <p>Post Title</p>
                <p>Friday</p>
                <p>Read more</p>
              </div>
            </div>
            <div className="col-3">
              <div className="footer__items__title mb-5">
                <h6>Latest Tweets</h6>
              </div>
              <div className="footer__items__detail">
                <p>Post Title</p>
                <p>Friday</p>
                <p>Read more</p>
              </div>
            </div>
            <div className="col-3">
              <div className="footer__items__title mb-5">
                <h6>Contact Us</h6>
              </div>
              <div className="footer__items__detail">
                <p>Post Title</p>
                <p>Friday</p>
                <p>Read more</p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <section className="footer-bottom ">
        <div className="footer-bottom-left">
          <p>Copyright 2013 Demain Name - All Right Reserved</p>
        </div>
        <div className="footer-bottom-right">
          <p>Copyright 2013 Demain Name - All Right Reserved</p>
        </div>
      </section>
    </>
  );
}
