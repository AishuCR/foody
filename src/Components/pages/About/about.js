import React from 'react';
import Hero from "../../Hero/hero.js";


const About = () => (
    <div id="body-content"> 
 {/* <section style={styles.sectionStyles} className="about"> */}
    
      {/* <img src="public/images/"></img> */}
      <div className="content">
      <Hero className="hero-image" backgroundImage="https://cdn.hipwallpaper.com/i/67/99/VJlgdD.jpg">
                <form class="searchTab">
                    <input className="searchType" type="search" placeholder="Search Restaurants" />
                    <button type="submit">Search </button>
                </form>

        </Hero>
        <div>
            {/* Container to hold restaurant details */}
        </div>
      
      </div>
      </div>
  );

  export default About;