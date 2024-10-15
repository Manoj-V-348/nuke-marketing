import React from 'react'

import "./About.css"
import "../App.css"
import Footer from '../components/Footer'

function PrivacyPolicy() {
  return (
    <>
        <div className="about--container vertical--flex">
            <p className="about--heading">Privacy Policy</p>
            <p className="about--subHeading">1. Information Collection</p>
            <p className="about--text">Nuke Marketing LLP collects personal information provided by 
              clients during the course of service engagement. This may include names, contact details, 
              and other relevant business information.</p>

            <p className="about--subHeading">2. Use of Information</p>
            <p className="about--text">We use the collected data to: <br/>
            Deliver and improve our Services. <br/>
            Communicate project updates and timelines. <br/>
            Share reports on the performance of digital campaigns or social media activity.
            </p>  

            <p className="about--subHeading">3. Data Security</p>
            <p className="about--text">We employ reasonable measures to protect the data shared with us. 
              However, we cannot guarantee complete data security due to the nature of the internet.</p>

            <p className="about--subHeading">4. Sharing of Information</p>
            <p className="about--text">We do not share or sell your personal information to third parties, 
              except as necessary to fulfill our Services (e.g., subcontractors or payment processors) or 
              when required by law.</p>

            <p className="about--subHeading">5. Data Retention</p>
            <p className="about--text">We retain your data only for as long as necessary to fulfill our 
              service obligations or as required by law.</p>  

            <p className="about--subHeading">6. Client Rights</p>
            <p className="about--text">You may request access, correction, or deletion of your personal
              information held by us, subject to legal or contractual obligations.</p> 

            <p className="about--subHeading">7. Amendments to the Policy</p>
            <p className="about--text">We reserve the right to update this Privacy Policy from time to time. 
              Clients will be informed of any significant changes.</p>      

            <p className="about--subHeading">8. Governing Law</p>
            <p className="about--text">This Privacy Policy is governed by the laws of India and any disputes will 
              be subject to the exclusive jurisdiction of the courts of Chennai, Tamil Nadu.</p>  
        </div>
        <Footer />
    </>
  )
}

export default PrivacyPolicy