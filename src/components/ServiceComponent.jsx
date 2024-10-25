import React from 'react'

import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

import "./ServiceComponent.css";
import "../App.css";

import blob from "../assets/Home/servicesBlob.png";

function ServiceComponent(props) {

  return (
    <>
        <div className="service service1 vertical--flex">
                <p>{props.title}</p>
                
                <div className='horizontal--flex'>
                  <div className="service--button horizontal--flex center">
                    <a href="">Something We are Good At</a>
                  </div>

                  <a className="service--arrow horizontal--flex center">
                    <p>{props.description1}<br/>{props.description2}</p> 
                    <Icon icon="iconoir:arrow-up" width="40" height="40"className='arrow' />
                  </a>
                </div>

                <img src={blob} alt="blob" className='smooth--shake4'/>
        </div>
    </>
  )
}

export default ServiceComponent