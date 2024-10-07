import React from 'react'
import {Link} from 'react-router-dom'

import  "../App.css"
import "./Header.css"

import nukeLogo from "../assets/nuke.svg"
import nukeMarketing from "../assets/NukeMarketing.svg";

function Header() {
  return (
    <header className="horizontal--flex center">
        <Link to="/" className='logo--link'>
        <img src={nukeMarketing} alt="Nuke Marketing" className='main--logo'/>
        </Link>      
        
        <div className="pages--container horizontal--flex center">
            <Link to="/about">ABOUT US</Link>
            <Link to="/projects">PROJECTS</Link>
            <Link to="/services">SERVICES</Link>
            <a className="talk--button horizontal--flex center">
                <img src={nukeLogo} alt="nuke" className='nuke--logo' />
                <p>LET'S TALK!</p>
            </a>
        </div>
    </header>
  )
}

export default Header