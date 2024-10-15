import React from 'react'
import { Icon } from '@iconify/react';

import "../App.css"
import "./CreativityContainer.css"

import creativityBlob from "../assets/Home/creativityBlob.png";

function CreativityContainer() {
  return (
    <>
        <div className="creativity--container">
            <p className='bold'>LIFE WITH <br/>INSPIRING CREATIVITY</p>
            <div className='horizontal--flex center'>
              <a href="#" className="our--works--button horizontal--flex center">
                <p>OUR WORKS</p>
                <Icon icon="iconoir:arrow-up" width="32" height="32"className='arrow' />
              </a>
            </div>

            <img src={creativityBlob} alt="blob5" />
          </div>
    </>
  )
}

export default CreativityContainer