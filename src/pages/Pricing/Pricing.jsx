import React from "react";
import "./pricing.css";

import { BsArrowRight } from 'react-icons/bs';

import img1 from "../../assets/image 42.png";
import img2 from "../../assets/image 41.png";
// import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
const Pricing = () => {
  return (
    <div className="pricing">
      <div className="title">
        <h1>New courses</h1>
      </div>
      <div className="content-pricing">
        <div className="left-pricing">
          <div className="title-js">
            <h1>
              The JavaScript <br />
              Journey
            </h1>
            <p className="learn">Learn more <BsArrowRight className="arrow"/></p>
          </div>
          <img src={img1} alt="img1" />
        </div>
        <div className="right-pricing">
          <div className="title-data">
            <h1>An introduction to <br />
            databases</h1>
            <p className="learn-data">Learn more <BsArrowRight className="arrow"/></p>
          </div>
          <img src={img2} alt="database" />
        </div>
      </div>
    </div>
  );
};

export default Pricing;
