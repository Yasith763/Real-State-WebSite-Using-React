import React from 'react'
import './BuyingServicesContent.css'
import theme_pattren from '../assets/under.svg'

export default function BuyingServicesContent() {
    return (
        <div className="buying-services-container">
            <div className='title1'>
                <h1>Buying Services</h1>
                <img src={theme_pattren} alt="" />
            </div>
            <p>
                Buying a property is a significant investment, and our expert team is here to help you every step 
                of the way. We offer a comprehensive range of buying services designed to make the process as 
                smooth and successful as possible.
            </p>

            <section>
                <h2>Property Selection</h2>
                <p>
                    Our team works closely with you to understand your needs, preferences, and budget to help 
                    you find the perfect property. From luxury homes to starter houses, we have access to a vast 
                    selection of listings that cater to all tastes and requirements.
                </p>
            </section>

            <section>
                <h2>Market Analysis</h2>
                <p>
                    We provide detailed market analysis reports to help you make informed decisions. Our experts 
                    analyze trends, prices, and other key factors to ensure that you are buying a property at the 
                    right time and for the right price.
                </p>
            </section>

            <section>
                <h2>Negotiation</h2>
                <p>
                    Our skilled negotiators will work on your behalf to secure the best possible deal. We strive 
                    to ensure that you get the best price and terms for your new property, saving you both time 
                    and money.
                </p>
            </section>

            <section>
                <h2>Legal Assistance</h2>
                <p>
                    Navigating the legal complexities of buying a property can be daunting. Our legal experts 
                    will guide you through every step, ensuring that all documents are correctly prepared and 
                    reviewed to protect your interests.
                </p>
            </section>

            <section>
                <h2>Closing the Deal</h2>
                <p>
                    We make sure the closing process is smooth and hassle-free. From finalizing documents to 
                    ensuring that all conditions are met, we handle the details so that you can focus on 
                    preparing to move into your new home.
                </p>
            </section>

            <section className="contact-section">
                <p>
                    Ready to find your dream home? Contact us today to learn more about our buying services 
                    and to schedule a consultation with one of our expert agents.
                </p>
                <button className="contact-button">Get in Touch</button>
            </section>
        </div>
    );
}
