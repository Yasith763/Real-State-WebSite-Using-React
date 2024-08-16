import React from 'react'
import './RelocationServicesContent.css'
import theme_pattren from '../assets/under.svg'

export default function RelocationServicesContent() {
    return (
        <div className="relocation-services-page">
            <div className='title'>
                <h1>Relocation Services</h1>
                <img src={theme_pattren} alt="" />
            </div>
          <p>
            Moving to a new city or neighborhood? We offer professional relocation services to ensure a smooth and stress-free transition.
          </p>
          
          <section className="relocation-info">
            <h2>Why Choose Our Relocation Services?</h2>
            <p>
              Whether you’re moving across the country or just to the next neighborhood, our expert team will handle every detail of your relocation. We work closely with you to ensure your move is efficient, affordable, and stress-free.
            </p>
            
            <ul className="service-benefits">
              <li>Comprehensive relocation planning and coordination</li>
              <li>Access to trusted movers and logistics partners</li>
              <li>Support with home search and real estate transactions</li>
              <li>Local neighborhood insights and settling-in assistance</li>
              <li>Cost-effective solutions tailored to your needs</li>
            </ul>
          </section>
    
          <section className="how-it-works">
            <h2>How It Works</h2>
            <ol>
              <li><strong>Consultation:</strong> We begin with a personalized consultation to understand your needs and preferences.</li>
              <li><strong>Relocation Plan:</strong> We develop a detailed relocation plan, covering everything from moving logistics to finding your new home.</li>
              <li><strong>Move Coordination:</strong> Our team will coordinate the entire process, including working with movers, realtors, and other service providers.</li>
              <li><strong>Settling In:</strong> Once you’ve arrived, we’ll assist you in getting settled in your new community, ensuring a smooth transition.</li>
            </ol>
          </section>
    
          <section className="c-section">
            <a href="/" className="c-button">Contact Us</a>
          </section>
        </div>
      );
}
