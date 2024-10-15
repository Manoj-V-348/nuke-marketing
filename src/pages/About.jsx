import React from 'react'

import "./About.css"
import "../App.css"

import Footer from '../components/Footer'

function About() {
  return (
    <>
        <div className="about--container vertical--flex">
            <p className="about--heading">
              About Us
            </p>

            <p className="about--text">
              About : <br /><br />
              Every business has a story, and at Nuke Marketing LLP, we are here to 
              help you share yours in the most creative and authentic way. Our journey 
              began in Chennai with a clear goal: to support businesses in growing, 
              not just through regular marketing, but with creative and impactful strategies.
              <br /><br />
              We noticed many brands struggling to stand out in the crowded online world. 
              That's why we started Nuke Marketing LLP, with the belief that marketing should 
              be a mix of creativity and ethics. We provide services like personal branding, 
              social media marketing, content creation, website development, creative ad shoots 
              and product photography—all designed to make your brand shine.
              <br /><br />
              What makes us different is how we work. We don't just offer services—we take the time
              to understand your business, listen to your goals, and work together to create something
              special. We believe great marketing isn't just about promoting a product; it's about 
              telling a story that connects with people.
              <br /><br />
              Our team has worked with all kinds of businesses, from startups to well-established brands, 
              helping them grow and reach new heights. Throughout this journey, one thing has remained the 
              same: our commitment to doing things the right way, with creativity, honesty, and a focus on 
              delivering real results.
              <br /><br />
              We don't just offer services—we build lasting relationships with our clients and work together 
              to create meaningful results that matter.
            </p>
        </div>
        <Footer />
    </>
  )
}

export default About