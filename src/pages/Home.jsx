import React, {useState, useRef} from 'react'
import Transitions from '../Transitions';
import { Link } from 'react-router-dom';
import gsap  from 'gsap';
import { useGSAP } from '@gsap/react';
import { Icon } from '@iconify/react';


import Footer from '../components/Footer';
import ServiceComponent from '../components/ServiceComponent';
import Teammates from '../components/Teammates';

import servicedata from "../data/services";
import memberdata from "../data/teammatesdata";

import "../App.css"
import "./Home.css"

import sideNuke from "../assets/sideNuke.png";
import twinkle from "../assets/twinkle.png";
import Carousel from "../assets/Home/Carousel.png";
import twinkle2 from "../assets/twinkle2.png";
import serviceBlob from "../assets/Home/blob1.png";
import serviceBlob2 from "../assets/Home/serviceBlob.png";
import serviceBlob3 from "../assets/Home/serviceBlob3.png";
import serviceBlob4 from "../assets/Home/serviceBlob4.png";
import teamBlob from "../assets/Home/cubeTeam.png";
import bottomBlob from "../assets/Home/homeBottom.png";
import CreativityContainer from '../components/CreativityContainer';
import rocket from "../assets/Home/Rocket.png";


function Home() {

  gsap.registerPlugin(useGSAP);

  const [pill, setPill] = useState(false);

  const ladyImage = useRef(null);

  const scrolledPart = useRef(null);

  function togglePill(){
    setPill(prev => !prev);
    if(ladyImage.current && pill===false){
      ladyImage.current.scrollIntoView({ behavior: 'smooth' });
    }
  }

  const logoStyle = pill ? { 
                              opacity: '1',
                              position: 'absolute',
                              left: '0%' 
                            }
                          : 
                            {
                              opacity : '0',
                              position: 'absolute',
                              left: '-50%'
                            };
  
                            
  function changeElements(){
    var tl = gsap.timeline();

    tl.to("#changeElements", { scale: 0, opacity: 0,display: 'none', duration: 1 });

    if(scrolledPart.current){
      scrolledPart.current.scrollIntoView({behavior: 'smooth'})
    }
    
  }                            

  return (
    <>
        <main className="home--container" id='changeElements'>
            <div className="home--text--button horizontal--flex center" id={ pill ? "" : "blink"}>
                <p className='big--font' id='changeElements'>READY TO <br/>NUKE</p>
                <div className="pill--cutout horizontal--flex center" onClick={togglePill} id='changeElements'>
                  <div className="ball"></div>
                  <img src={sideNuke} alt="nuke" className='sideNuke'  style={logoStyle}/>
                </div>
            </div>
            
            <div className="discuss--your--ideas horizontal--flex center" id='changeElements'>
              <a className="discuss--button" id={ pill ? "" : "blink"} href='https://docs.google.com/forms/d/e/1FAIpQLSfP78nWZyWmHW7x5qOEsqVjmgGCfPYldqZM7u77oeCwrk2YCg/viewform?pli=1' target='_blank'>
                <p className='bold'>Discuss Your Ideas</p>
                <img src={twinkle} alt="twinkle" className='twinkle'/>
              </a>
              <p id={ pill ? "" : "blink"}>Crafting Your Unique Story,<br/>One Brand at a Time.</p>
            </div>

            <div className="home--carousel--image--container" id='changeElements'>
              <img src={Carousel} alt="3D-Lady" />
              <a className="arrow--ball horizontal--flex center" onClick={changeElements}>
                <Icon icon="iconoir:arrow-up" width="100" height="100" className='icon' />
              </a>
            </div>
        </main>
        <div className="gap--container" id='changeElements'></div>
        <div className="marquee--container horizontal--flex center" ref={scrolledPart}>
          <div className="marqueeContainer horizontal--flex center">
            <div className="marquee marquee1 horizontal--flex center">
              <p className='big--font'>IGNITE THE FUTURE</p>
              <img src={twinkle2} alt="twinkle2" />
            </div>

            <div className="marquee marquee1 horizontal--flex center">
              <p className='big--font'>BY REDEFINING CREATIVITY</p>
              <img src={twinkle2} alt="twinkle2" />
            </div>
          </div>
        </div>

        <main className='our--services--area--container' id='our--services showElements'>
          <div className="backdrop--filter vertical--flex center">
            <div className="unlock horizontal--flex center">
              <p className='big--font'>AREA LOCKED</p>
              <Icon icon="material-symbols:lock" width="64" height="64"/>
            </div>

            <Link to="/unlocked" className='unlock--button horizontal--flex center'>
              Unlock this Area?
              <img src={sideNuke} alt="nuke" className='unlock--nuke'/>
            </Link>
          </div>
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

        {<Footer />}
    </>
  )
}

export default Transitions(Home);