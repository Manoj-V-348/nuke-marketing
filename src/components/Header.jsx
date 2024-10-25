import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { Icon } from '@iconify/react';

import  "../App.css"
import "./Header.css"

import nukeLogo from "../assets/nuke.svg"
import nukeMarketing from "../assets/NukeMarketing.svg";

function Header() {
  const [header, setHeader] = useState(false);

  const [navBar, setNavBar] = useState(false);

  function toggleNavbar(){
    setNavBar(prev => !prev);
  }

  const navbarStyles = navBar ? { transform : "translateY(0)" } : { transform : "translateY(-150%)" }

  const styles = header ? { transform: "translateY(70%)", opacity : "1" } : { transform: "translateY(-50%)", opacity : "0" }

  const arrowIcon = header ? "dashicons:arrow-up" : "dashicons:arrow-down";

  const arrowIcon2 = navBar ? "akar-icons:cross" : "charm:menu-hamburger"; 

  function headerDesign(){
    setHeader(prev => !prev);
  }

  return (
    <header className="horizontal--flex center">
        <Link to="/" className='logo--link'>
          <img src={nukeMarketing} alt="Nuke Marketing" className='main--logo'/>
        </Link>      
        
        <div className="pages--container horizontal--flex center">
            <div className='horizontal--flex center' onClick={headerDesign}>
              <Icon icon={arrowIcon} width="32" height="32" className='icon'/>
              <div className="header--about--bar vertical--flex center" style={styles}>
                <Link to="/about">About</Link>
                <Link to="/privacypolicy">Privacy Policy</Link>
                <Link to="/terms">Terms</Link>
              </div>
              ABOUT US
            </div>
            <Link to="/projects">PROJECTS</Link>
            <Link to="/services">SERVICES</Link>
            <a className="talk--button horizontal--flex center" href='https://docs.google.com/forms/d/e/1FAIpQLSfP78nWZyWmHW7x5qOEsqVjmgGCfPYldqZM7u77oeCwrk2YCg/viewform?pli=1' target='_blank'>
                <img src={nukeLogo} alt="nuke" className='nuke--logo' />
                <p>LET'S TALK!</p>
            </a>
        </div>

        <div className="mobile--navbar--area">
          <Icon icon={arrowIcon2} width="40" height="40" onClick={toggleNavbar} />
          <div className="side--navbar--mobile vertical--flex center" style={navbarStyles}>
           <div className='horizontal--flex center' onClick={headerDesign}>
              <Icon icon={arrowIcon} width="32" height="32" className='icon'/>
              <div className="header--about--bar vertical--flex center" style={styles}>
                <Link to="/about">About</Link>
                <Link to="/privacypolicy">Privacy Policy</Link>
                <Link to="/terms">Terms</Link>
              </div>
              ABOUT US
            </div>
            <Link to="/projects">PROJECTS</Link>
            <Link to="/services">SERVICES</Link>
            <a className="talk--button horizontal--flex center" href='https://docs.google.com/forms/d/e/1FAIpQLSfP78nWZyWmHW7x5qOEsqVjmgGCfPYldqZM7u77oeCwrk2YCg/viewform?pli=1' target='_blank'>
                <img src={nukeLogo} alt="nuke" className='nuke--logo' />
                <p>LET'S TALK!</p>
            </a>
          </div>
        </div>
    </header>
  )
}

export default Header