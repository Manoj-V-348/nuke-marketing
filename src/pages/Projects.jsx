import React from 'react'
import Transitions from '../Transitions';

import "./Projects.css"
import "../App.css"
import CreativityContainer from '../components/CreativityContainer'

function Projects() {
  return (
    <>
        <CreativityContainer />
        <div className="work--testimonials--button--container horizontal--flex center">
          <a href="/our-works" className="works--button horizontal--flex center">
            OUR WORKS
          </a>
          <a href="/testimonials" className="works--button horizontal--flex center">
            TESTIMONIALS
          </a>
        </div>
    </>
  )
}

export default Transitions(Projects)