import React from 'react'
import Transitions from '../Transitions';

import Likes from "../assets/works/LikeDetails.png";
import reelRightImg from "../assets/works/RightTop.png";
import reelRightbottom from "../assets/works/RightBottomm.png";
import reelLeft from "../assets/works/Views.png";
import graph from "../assets/works/Graph.png";
import reelImg from "../assets/works/reelImg.png";

import "./OurWorks.css";

function OurWorks() {
  return (
    <>
        <div className="our--works--container horizontal--flex">
            <div className="work--container horizontal--flex">
                <div className="work--container--left vertical--flex">
                    <p><span>Demographics</span><br/>of our Latest Content</p>
                    <img src={Likes} alt="likes" />
                    <div className="image--details--container horizontal--flex">
                        <img src={reelLeft} alt="data" />
                        <div className="right--images vertical--flex">
                            <img src={reelRightImg} alt="data" />
                            <img src={reelRightbottom} alt="data" />
                        </div>
                    </div>
                    <img src={graph} alt="graph" className='graph' />
                </div>
            </div>

            <img src={reelImg} alt="reel" />
        </div>
    </>
  )
}

export default Transitions(OurWorks);