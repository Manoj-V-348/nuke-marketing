import React from 'react'

import "./Footer.css"

import twitter from "../assets/footer/twitter.png";
import youtube from "../assets/footer/youtube.png";
import instagram from "../assets/footer/instagram.png";
import linkedin from "../assets/footer/linkedin.png";
import facebook from "../assets/footer/facebook.png";
import nukeMarketing from "../assets/NukeMarketing.svg";

function Footer() {
  return (
    <footer className='footer vertical--flex center'>
        <div className="social--logos">
           <img src={twitter} alt="twitter" />
           <img src={youtube} alt="youtube" />
           <img src={instagram} alt="instagram" />
           <img src={linkedin} alt="linkedin" />
           <img src={facebook} alt="facebook" />
        </div>
          
        <div className="nuke--footer">
            <img src={nukeMarketing} alt="" />
        </div>
    </footer>
  )
}

export default Footer