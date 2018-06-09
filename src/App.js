import React from 'react';
import ReactDOM from 'react-dom';
import { Parallax, ParallaxLayer } from 'react-spring'
import Introduction from './components/Introduction.js'
import Work from './components/Work.js'
import Like from './components/Like.js'
import Contact from './components/Contact.js'
import Footer from './components/Footer.js'
import './styles/styles.css'

class App extends React.Component {
  scroll = (to) => this.refs.parallax.scrollTo(to);
  render(){
    return (
      <div>
        <Parallax ref="parallax" pages={4} vertical scrolling={false}>
            <Introduction offset={0} speed={0.2} onClick={()=>this.scroll(1)}/>
            <Work offset={1} speed={0.3} onClick={()=>this.scroll(2)}/>
            <Like offset={2} speed={0.4} onClick={()=>this.scroll(3)}/>
            <Contact offset={3} speed={0.5} onClick={()=>this.scroll(0)}/>
        </Parallax>
      <Footer/>
      </div>
    );
  };
}

export default App
