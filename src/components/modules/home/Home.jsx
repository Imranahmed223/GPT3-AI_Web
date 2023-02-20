import React from "react";
import "./Home.scss";
import { Subheaderimg } from "../../../assets";
import { Pf1 } from "../../../assets";
import { Pf2 } from "../../../assets";
import { Pf3 } from "../../../assets";

const Home = () => {
  return (
    <>
      <div className="subheader-container">
        <div className="subheader-container-content">
          <div className="subheader-container-content-left">
            <h1>Let’s Build Something amazing with GPT-3 OpenAI</h1>
            <p>
              Yet bed any for travelling assistance indulgence unpleasing. Not
              thoughts all exercise blessing. Indulgence way everything joy
              alteration boisterous the attachment. Party we years to order
              allow asked of.
            </p>
            <div className="subheader-container-content-left-infield">
              <input type="search" placeholder="Your Email Address" />
              <button>Get Started</button>
            </div>
            <div className="subheader-container-content-left-pffield">
              <div className="subheader-container-content-left-pffield-left">
                <div className="subheader-container-content-left-pffield-left-imgfield">
                  <img src={Pf1} alt="photo1" />
                  <img src={Pf3} alt="photo1" />
                  <img src={Pf2} alt="photo1" />
                  <img src={Pf3} alt="photo1" />
                  <img src={Pf2} alt="photo1" />
                  <img src={Pf1} alt="photo1" />
                </div>
                <span>1.6k+</span>
              </div>

              <div className="subheader-container-content-left-pffield-right">
                <p>1,600 people requested access a visit in last 24 hours</p>
              </div>
            </div>
          </div>
          <div className="subheader-container-content-right">
            <img src={Subheaderimg} alt="Picture" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
