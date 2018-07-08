import React from 'react';
import { ParallaxLayer } from 'react-spring'
import '../styles/components/like.css'

const Like = (props) => {
  return(
      <ParallaxLayer offset={props.offset} speed={props.speed}  onClick={props.onClick} className="container-l">
          <div className="sub-container-l">
            <i class="fa fa-heart fa-3x" aria-hidden="true"></i>
            <h2> NEWS, TRAVELING, SOCCER, ANIME, WORKING OUT</h2>
          </div>
      </ParallaxLayer>
  );
};

export default Like;
