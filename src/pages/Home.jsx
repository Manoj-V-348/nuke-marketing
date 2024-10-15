import React from 'react'
import { Icon } from '@iconify/react';

import Footer from '../components/Footer';

import "./Home.css"
import "../App.css"

import sideNuke from "../assets/sideNuke.png";
import twinkle from "../assets/twinkle.png";
import Carousel from "../assets/Home/Carousel.png";
import twinkle2 from "../assets/twinkle2.png";
import serviceBlob from "../assets/Home/blob1.png";
import serviceBlob2 from "../assets/Home/serviceBlob.png";
import serviceBlob3 from "../assets/Home/serviceBlob3.png";
import serviceBlob4 from "../assets/Home/serviceBlob4.png";
import teamBlob from "../assets/Home/cubeTeam.png";
import prabha from "../assets/Home/prabha.png";
import swetha from "../assets/Home/swetha.png";
import bottomBlob from "../assets/Home/homeBottom.png";
import CreativityContainer from '../components/CreativityContainer';


function Home() {
  return (
    <>
        <main className="home--container">
            <div className="home--text--button horizontal--flex center">
                <p className='big--font'>READY TO <br/>NUKE</p>
                <div className="pill--cutout horizontal--flex center">
                  <div className="ball"></div>
                  <img src={sideNuke} alt="nuke" className='sideNuke' />
                </div>
            </div>
            
            <div className="discuss--your--ideas horizontal--flex center">
              <a className="discuss--button" href='https://docs.google.com/forms/d/e/1FAIpQLSfP78nWZyWmHW7x5qOEsqVjmgGCfPYldqZM7u77oeCwrk2YCg/viewform?pli=1' target='_blank'>
                <p className='bold'>Discuss Your Ideas</p>
                <img src={twinkle} alt="twinkle" className='twinkle'/>
              </a>
              <p>Crafting Your Unique Story,<br/>One Brand at a Time.</p>
            </div>

            <div className="home--carousel--image--container">
              <img src={Carousel} alt="3D-Lady" />
              <a className="arrow--ball horizontal--flex center" href='#our--services'>
                <Icon icon="iconoir:arrow-up" width="100" height="100" className='icon' />
              </a>
            </div>
        </main>
        <div className="gap--container"></div>
        <div className="marquee--container horizontal--flex center">
          <div className="marquee marquee1 horizontal--flex center">
            <p className='big--font'>IGNITE THE FUTURE</p>
            <img src={twinkle2} alt="twinkle2" />
          </div>

          <div className="marquee marquee1 horizontal--flex center">
            <p className='big--font'>BY REDEFINING CREATIVITY</p>
            <img src={twinkle2} alt="twinkle2" />
          </div>
        </div>

        <main className='our--services--area--container' id='our--services'>
          <p className='big--font'>OUR SERVICES</p>
          
          <div className="our--services--description horizontal--flex center">
            <img src={twinkle} alt="twinkle" />
            <p>We all see the world differently. Discover your unique vision through<br/> the lens of our creativity.</p>
          </div>
          
          <div className="services--carousel--container horizontal--flex center">
            <div className="services--carousel--left">
              <img src={serviceBlob2} alt="blob2" className='service--floating--blob sfb1' />
              <img src={serviceBlob3} alt="blob3" className='service--floating--blob sfb2' />
              <img src={serviceBlob4} alt="blob4" className='service--floating--blob sfb3' />
              <img src={serviceBlob} alt="blob" className='main--blob'/>
            </div>

            <div className="services--carousel--right vertical--flex">
              <div className="service service1 vertical--flex">
                <p>SOCIAL MEDIA MANAGEMENT</p>
                
                <div className='horizontal--flex'>
                  <div className="service--button horizontal--flex center">
                    <a href="">Something We are Good At</a>
                  </div>

                  <a className="service--arrow horizontal--flex center">
                    <p>Crafting your Social Presence for<br/>Maximum Impact.</p> 
                    <Icon icon="iconoir:arrow-up" width="40" height="40"className='arrow' />
                  </a>
                </div>
              </div>

              <div className="service service2 vertical--flex">
                <p>SOCIAL MEDIA MANAGEMENT</p>
                
                <div className='horizontal--flex'>
                  <div className="service--button horizontal--flex center">
                    <a href="">Something We are Good At</a>
                  </div>

                  <a className="service--arrow horizontal--flex center">
                    <p>Crafting your Social Presence for<br/>Maximum Impact.</p> 
                    <Icon icon="iconoir:arrow-up" width="40" height="40"className='arrow' />
                  </a>
                </div>
              </div>

              <div className="service service3 vertical--flex">
                <p>SOCIAL MEDIA MANAGEMENT</p>
                
                <div className='horizontal--flex'>
                  <div className="service--button horizontal--flex center">
                    <a href="">Something We are Good At</a>
                  </div>

                  <a className="service--arrow horizontal--flex center">
                    <p>Crafting your Social Presence for<br/>Maximum Impact.</p> 
                    <Icon icon="iconoir:arrow-up" width="40" height="40"className='arrow' />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <CreativityContainer />

          <div className="our--team--container">
            <div className="our--team--heading horizontal--flex">
              <p className="big--font">MEET OUR TEAM</p>
              <img src={teamBlob} alt="cube" />
            </div>

            <div className="team--members--tile--container horizontal--flex center">
              <div className="team--member--tile  vertical--flex">
                <img src={prabha} alt="prabha" />

                <div className="member--details vertical--flex center">
                  <p className="member--name">Prabhakaran K</p>
                  <p className="member--role">Head of Sales</p>
                </div>
              </div>
             
              <div className="team--member--tile  vertical--flex">
                <img src={swetha} alt="prabha" />

                <div className="member--details vertical--flex center">
                  <p className="member--name">Swetha S</p>
                  <p className="member--role">Personal Branding Curator</p>
                </div>
              </div>
            </div>

            <div className="lets--discuss--container vertical--flex">
              <div className="text--area horizontal--flex">
                <img src={bottomBlob} alt="blob" />
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

        {<Footer />}
    </>
  )
}

export default Home