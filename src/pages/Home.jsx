import React from 'react'
import { Icon } from '@iconify/react';

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
import creativityBlob from "../assets/Home/creativityBlob.png";

function Home() {
  return (
    <>
        <main className="home--container">
            <div className="home--text--button horizontal--flex center">
                <p className='big--font'>READY FOR <br/>NUKE</p>
                <div className="pill--cutout horizontal--flex center">
                  <div className="ball"></div>
                  <img src={sideNuke} alt="nuke" className='sideNuke' />
                </div>
            </div>
            
            <div className="discuss--your--ideas horizontal--flex center">
              <a className="discuss--button">
                <p className='bold'>Discuss Your Ideas</p>
                <img src={twinkle} alt="twinkle" className='twinkle'/>
              </a>
              <p>Crafting Your Unique Story,<br/>One Brand at a Time.</p>
            </div>

            <div className="home--carousel--image--container">
              <img src={Carousel} alt="3D-Lady" />
              <a className="arrow--ball horizontal--flex center">
                <Icon icon="iconoir:arrow-up" width="100" height="100" className='icon' />
              </a>
            </div>
        </main>
        
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

        <main className='our--services--area--container'>
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
        </main>
    </>
  )
}

export default Home