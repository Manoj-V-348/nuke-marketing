import React from 'react'

import "./Testimonials.css";

import owner from "../assets/testimonials/Owner.png";

function Testimonials() {
  return (
    <>
        <div className="testimonials--container horizontal--flex center">
            <div className="testimonial--box horizontal--flex">
                <div className="testimonial--details vertical--flex">
                    <p className='owner--name'>James Pattinson</p>
                    <p className="owner--role">CEO Of apple</p>

                    <p className="owner--description">Lobortis leo pretium facilisis amet nisl at nec. Scelerisque 
                    risus tortor donec ipsum consequat semper consequat adipiscing ultrices.
                    </p>
                </div>
                
                <img src={owner} alt="owner" />
            </div>
        </div>
    </>
  )
}

export default Testimonials