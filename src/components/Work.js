import React from 'react';
import { ParallaxLayer } from 'react-spring';
import '../styles/components/work.css'

const Work = (props) => {
  return(
      <ParallaxLayer offset={props.offset} speed={props.speed}  onClick={props.onClick} className="container-w">
          <div className="sub-container-w">
            <h1>WHAT I DO</h1>
            <h2>SWE AT IBM</h2>
            <h3>PAST MOBILE DEVELOPER INTERN AT IBM</h3>
          </div>
      </ParallaxLayer>
  );
};

export default Work;
