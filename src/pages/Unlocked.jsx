import React from 'react'
import Transitions from '../Transitions';
import { Icon } from '@iconify/react';

import Footer from '../components/Footer';
import ServiceComponent from '../components/ServiceComponent';
import Teammates from '../components/Teammates';

import servicedata from "../data/services";
import memberdata from "../data/teammatesdata"

import "../App.css"
import "./Home.css"

import twinkle from "../assets/twinkle.png";
import serviceBlob from "../assets/Home/blob1.png";
import serviceBlob2 from "../assets/Home/serviceBlob.png";
import serviceBlob3 from "../assets/Home/serviceBlob3.png";
import serviceBlob4 from "../assets/Home/serviceBlob4.png";
import teamBlob from "../assets/Home/cubeTeam.png";
import bottomBlob from "../assets/Home/homeBottom.png";
import CreativityContainer from '../components/CreativityContainer';
import rocket from "../assets/Home/Rocket.png";

function Unlocked() {
  return (
    <>
        <main className='our--services--area--container' id='our--services showElements'>
          <p className='big--font'>OUR SERVICES</p>
          
          <div className="our--services--description horizontal--flex center">
            <img src={twinkle} alt="twinkle" />
            <p>We all see the world differently. Discover your unique vision through<br/> the lens of our creativity.</p>
          </div>
          
          <div className="services--carousel--container horizontal--flex center">
            <div className="services--carousel--left">
              <img src={serviceBlob2} alt="blob2" className='service--floating--blob sfb1 smooth--shake' />
              <img src={serviceBlob3} alt="blob3" className='service--floating--blob sfb2 smooth--shake2' />
              <img src={serviceBlob4} alt="blob4" className='service--floating--blob sfb3 smooth--shake3' />
              <img src={serviceBlob} alt="blob" className='main--blob'/>
            </div>

            <div className="services--carousel--right vertical--flex">
              {
                servicedata.map((e) =>{
                  return <ServiceComponent key={e.id} title={e.serviceTitle} description1={e.serviceDescription1} description2={e.serviceDescription2} />
                })
              }            
            </div>
          </div>

          <CreativityContainer />

          <div className="our--team--container">
            <div className="our--team--heading horizontal--flex">
              <p className="big--font">MEET OUR TEAM</p>
              <img src={teamBlob} alt="cube" />
            </div>


            <div className="team--members--tile--container">
              {
                memberdata.map((d) => {
                  return <Teammates key={d.id} dp={d.imageUrl} name={d.name} role={d.role} />
                })
              }
            </div> 

            <div className="lets--discuss--container vertical--flex">
              
              
              <div className="text--area horizontal--flex">
                <div className='vertical--flex'> 
                  <div className="rocket--container horizontal--flex center">
                    <img src={rocket} alt="rocket" className='rocket'/>
                  </div>
                  <img src={bottomBlob} alt="blob" />
                </div> 
                <p>LET'S DISCUSS YOUR IDEAS</p>
              </div>

              <div className="footer--buttons horizontal--flex">
                <a href="#" className="our--works--button horizontal--flex center">
                  <p>TALK NOW</p>
                  <Icon icon="iconoir:arrow-up" width="32" height="32"className='arrow' />
                </a>

                <a href="#" className="our--works--button horizontal--flex center">
                  <p>FOLLOW US</p>
                  <Icon icon="iconoir:arrow-up" width="32" height="32"className='arrow' />
                </a>
              </div>
            </div>
          </div>
        </main>

        <Footer />
    </>
  )
}

export default Transitions(Unlocked);