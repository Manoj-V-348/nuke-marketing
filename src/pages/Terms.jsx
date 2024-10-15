import React from 'react'

import "./About.css"
import "../App.css"

import Footer from '../components/Footer';

function Terms() {
  return (
    <>
        <div className="about--container vertical--flex">
            <p className="about--heading">Terms and Conditions</p>
            <p className="about--text">These Terms and Conditions, along with the Privacy Policy and other
               terms ("Terms"), constitute a binding agreement by and between Nuke Marketing LLP 
               ("Website Owner" or "we" or "us" or "our") and you ("you" or "your"), and relate to your use 
               of our website, goods (if applicable), or services (collectively, "Services").
            </p>
            <p className="about--text">By using our website and availing of the Services, you agree that you 
              have read, understood, and accepted these Terms (including the Privacy Policy). We reserve the 
              right to modify these Terms at any time without providing prior notice. It is your responsibility 
              to periodically review these Terms to stay informed of updates.
            </p>
            <p className="about--subHeading">1. Use of Services</p>
            <p className="about--text">To access and use the Services, you agree to: <br/> <br/>
              Provide true, accurate, and complete information to us during registration or communication.<br/>
              Ensure that the information you provide remains current and accurate.<br/>
              Be responsible for all actions taken under your registered account.<br/>
              Your use of the Services and our website is subject to the following terms:
            </p>
            <p className="about--text">The content of the website and services is for general information and use only. 
              It is subject to change without notice. <br/>We make no guarantees about the accuracy, timeliness, 
              performance, or completeness of the content or services for any specific purpose. Your use of 
              any information or materials is entirely at your own risk.<br/>
              You agree to assess whether the Services meet your needs independently.
            </p>
            <p className="about--subHeading">2. Intellectual Property</p>
            <p className="about--text">The content on this website and the services offered by Nuke Marketing LLP, 
              including but not limited to, text, images, videos, designs, and other materials, are proprietary to 
              Nuke Marketing LLP. You acknowledge that you do not have any rights to claim intellectual property in 
              our content or services unless explicitly agreed otherwise.
            </p>
            <p className="about--subHeading">3. Payment Terms</p>
            <p className="about--text">You agree to pay the fees associated with availing of our Services.<br/>
            Payment for services must be made as per the specified terms in the service agreement or within 7 
            business days from the receipt of the invoice. <br/>
            Refunds may be granted in cases where Nuke Marketing LLP fails to deliver the agreed-upon service, 
            subject to our refund policies. <br/>
            Any payments you make will be subject to deduction of applicable taxes, and you will receive certificates 
            evidencing such tax deductions where necessary.
            </p>
            <p className="about--subHeading">4. Term and Termination</p>
            <p className="about--text">This agreement shall commence upon your acceptance of these Terms or the start 
              date specified in the service agreement. The agreement will remain in effect unless terminated by either party. <br/>
              Either party may terminate this agreement with 7 business days’ written notice. <br/>
              We reserve the right to terminate the agreement immediately if any breach of these Terms occurs.
            </p>
            <p className="about--subHeading">5. Third-Party Links</p>
            <p className="about--text">Our website or Services may contain links to third-party websites. Upon accessing
              these links, you will be governed by the terms of use, privacy policies, and other terms set by these third
               parties. Nuke Marketing LLP is not responsible for any liabilities or actions arising from your use 
               of third-party websites.
            </p>
            <p className="about--subHeading">6. Confidentiality</p>
            <p className="about--text">You agree not to disclose any confidential information shared during your 
              engagement with Nuke Marketing LLP. This includes business plans, strategies, designs, or other 
              proprietary information that is not publicly available. Unauthorized use of this information may 
              lead to legal action.
            </p>
            <p className="about--subHeading">7. Limitation of Liability</p>
            <p className="about--text">We shall not be liable for any direct, indirect, incidental, special, or 
              consequential damages resulting from the use or inability to use our website or Services, even if 
              Nuke Marketing LLP has been advised of the possibility of such damages.
            </p>
            <p className="about--subHeading">8. Force Majeure</p>
            <p className="about--text">Nuke Marketing LLP shall not be held liable for delays or failure to 
              perform under these Terms if such failure or delay results from circumstances beyond our 
              reasonable control, including natural disasters, wars, acts of government, or any other event 
              that qualifies as a force majeure.
            </p>
            <p className="about--subHeading">9. Governing Law</p>
            <p className="about--text">These Terms and any disputes arising out of or in connection with these 
              Terms shall be governed by and construed in accordance with the laws of India. The courts in 
              Perumbakkam, Tamil Nadu shall have exclusive jurisdiction over any disputes relating to this agreement.
            </p>
            <p className="about--subHeading">10. Contmajeureormation</p>
            <p className="about--text">For any concerns, questions, or notices regarding these Terms or the 
              Services, please contact us at the following address: <br/>
              Nuke Marketing LLP <br/>
              No. 01, 3rd Street, Gurusamy Nagar, Anakaputhur, Chennai-600070
            </p>
        </div>
        <Footer />
    </>
  )
}

export default Terms