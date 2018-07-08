import React from 'react';
import { ParallaxLayer } from 'react-spring'
import '../styles/components/contact.css'

const Contact = (props) => {
  return(
      <ParallaxLayer offset={props.offset} speed={props.speed}  onClick={props.onClick} className="container-c">
          <div className="sub-container-c">
            <i class="fa fa-handshake fa-3x" aria-hidden="true"></i>
            <h2>siddarthjpatel@gmail.com</h2>
          </div>
      </ParallaxLayer>
  );
};

export default Contact;
