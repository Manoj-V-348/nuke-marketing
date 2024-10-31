import React, {useRef, useState} from 'react'

import "../App.css"
import "../pages/Home.css"
import "./Teammates.css"

import memberdata from "../data/teammatesdata"
import instaLogo from "../assets/footer/instagram.png"

function Teammates(prop) {
  const members = memberdata;

  return (
    <>
      <div className="team--members--tile--container horizontal--flex center">
        <div className="team--cards--container">
          <div className="team--tile prabha--tile vertical--flex center">
            <div className="top--image vertical--flex center">
              <img src={members[0].imageUrl} alt="Prabha" />
            </div>
            <div className="bottom--details vertical--flex center">
              <p className='name'>Prabhakaran</p>
              <p>Head of Sales</p>
            </div>
            <div className="footer--social horizontal--flex center">
              <a className="social" href={members[0].link1} target='_blank'>
                <img src={instaLogo} alt="instagram" />
              </a>
            </div>
          </div>

          <div className="team--tile swetha--tile vertical--flex center">
            <div className="top--image vertical--flex center">
              <img src={members[1].imageUrl} alt="Prabha" />
            </div>
            <div className="bottom--details vertical--flex center">
              <p className='name'>{members[1].name}</p>
              <p>{members[1].role}</p>
            </div>
            <div className="footer--social horizontal--flex center">
              <a className="social" href={members[1].link1} target='_blank'>
                <img src={instaLogo} alt="instagram" />
              </a>
            </div>
          </div>

          <div className="team--tile mavoc--tile vertical--flex center">
            <div className="top--image vertical--flex center">
              <img src={members[2].imageUrl} alt="Prabha" />
            </div>
            <div className="bottom--details vertical--flex center">
              <p className='name'>{members[2].name}</p>
              <p>{members[2].role}</p>
            </div>
            <div className="footer--social horizontal--flex center">
              <a className="social" href={members[2].link1} target='_blank'>
                <img src={instaLogo} alt="instagram" />
              </a>
            </div>
          </div>

          <div className="team--tile prashanth--tile vertical--flex center">
            <div className="top--image vertical--flex center">
              <img src={members[3].imageUrl} alt="Prabha" />
            </div>
            <div className="bottom--details vertical--flex center">
              <p className='name'>{members[3].name}</p>
              <p>{members[3].role}</p>
            </div>
            <div className="footer--social horizontal--flex center">
              <a className="social" href={members[3].link1} target='_blank'>
                <img src={instaLogo} alt="instagram" />
              </a>
            </div>
          </div>

          <div className="team--tile allen--tile vertical--flex center">
            <div className="top--image vertical--flex center">
              <img src={members[4].imageUrl} alt="Prabha" />
            </div>
            <div className="bottom--details vertical--flex center">
              <p className='name'>{members[4].name}</p>
              <p>{members[4].role}</p>
            </div>
            <div className="footer--social horizontal--flex center">
              <a className="social" href={members[4].link1} target='_blank'>
                <img src={instaLogo} alt="instagram" />
              </a>
            </div>
          </div>

          <div className="team--tile prince--tile vertical--flex center">
            <div className="top--image vertical--flex center">
              <img src={members[5].imageUrl} alt="Prabha" />
            </div>
            <div className="bottom--details vertical--flex center">
              <p className='name'>{members[5].name}</p>
              <p>{members[5].role}</p>
            </div>
            <div className="footer--social horizontal--flex center">
              <a className="social" href={members[5].link1} target='_blank'>
                <img src={instaLogo} alt="instagram" />
              </a>
            </div>
          </div>

          <div className="team--tile tamil--tile vertical--flex center">
            <div className="top--image vertical--flex center">
              <img src={members[6].imageUrl} alt="Prabha" />
            </div>
            <div className="bottom--details vertical--flex center">
              <p className='name'>{members[6].name}</p>
              <p>{members[6].role}</p>
            </div>
            <div className="footer--social horizontal--flex center">
              <a className="social" href={members[6].link1} target='_blank'>
                <img src={instaLogo} alt="instagram" />
              </a>
            </div>
          </div>

          <div className="team--tile riyaz--tile vertical--flex center">
            <div className="top--image vertical--flex center">
              <img src={members[7].imageUrl} alt="Prabha" />
            </div>
            <div className="bottom--details vertical--flex center">
              <p className='name'>{members[7].name}</p>
              <p>{members[7].role}</p>
            </div>
            <div className="footer--social horizontal--flex center">
              <a className="social" href={members[7].link1} target='_blank'>
                <img src={instaLogo} alt="instagram" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Teammates