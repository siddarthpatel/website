import React from 'react';
import { ParallaxLayer } from 'react-spring'
import '../styles/components/introduction.css'

const Introduction = (props) => {
  return(
      <ParallaxLayer className="container" offset={props.offset} speed={props.speed}  onClick={props.onClick}>
          <div className="sub-container">
            <i class="fa fa-hand-paper fa-3x" aria-hidden="true"></i>
            <h2>I AM SIDDARTH PATEL</h2>
          </div>
      </ParallaxLayer>
  );
};

export default Introduction;
