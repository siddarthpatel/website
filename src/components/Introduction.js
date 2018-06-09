import React from 'react';
import { ParallaxLayer } from 'react-spring'
import '../styles/components/introduction.css'

const Introduction = (props) => {
  return(
      <ParallaxLayer className="container" offset={props.offset} speed={props.speed}  onClick={props.onClick}>
          <div className="sub-container">
            <h1>HI,</h1>
            <h2>I AM SIDDARTH PATEL</h2>
          </div>
      </ParallaxLayer>
  );
};

export default Introduction;
