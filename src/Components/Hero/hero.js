import React from "react";
// import "./hero.css";
//import "../../SCSS/input.css";

const Hero = props => (
  <div className="hero" 
  style={{ backgroundImage: `url(${props.backgroundImage})` }}>
    {props.children}
  </div>
  
);

export default Hero;