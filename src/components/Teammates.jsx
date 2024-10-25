import React from 'react'

import "../App.css"
import "../pages/Home.css"
import "./Teammates.css"

function Teammates(prop) {
  return (
    <>
        <div className="team--member--tile  vertical--flex ">
                <div className="image--container">
                  <img src={prop.dp} alt="team" />
                </div>
                

                <div className="member--details vertical--flex center">
                  <p className="member--name">{prop.name}</p>
                  <p className="member--role">{prop.role}</p>
                </div>
        </div>
    </>
  )
}

export default Teammates