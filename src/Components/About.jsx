import React from 'react'
import './About.css'
import theme_pattren from '../assets/under.svg'
import profile_img from '../assets/p4.jpg'

export default function About() {
  return (
    <div id='about' className='about'>
        <div className='about-title'>
            <h1>About Us</h1>
            <img src={theme_pattren} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>Welcome to YASIX.pvt, your trusted partner in real estate. Whether you're looking to buy your dream home, sell your property, or invest in real estate, we're here to make the process seamless and successful.</p>
                    <p>With 10 years of experience in the industry, our team of dedicated professionals is committed to providing exceptional service tailored to your unique needs. We pride ourselves on our deep market knowledge, integrity, and the personalized attention we offer to each client.</p>
                    <p>We understand that buying or selling a property can be a significant life event, and we're here to support you through every phase. Our approach is client-centered, meaning we listen, we understand, and we deliver results that align with your goals.</p>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>10+</h1>
                <p>YEARS OF EXPERIENCE</p>  
            </div>
            <hr/>
            <div className="about-achievement">
                <h1>7+</h1>
                <p>PROJECTS COMPLETED</p>  
            </div>
            <hr/>
            <div className="about-achievement">
                <h1>30+</h1>
                <p>HAPPY CLIENTS</p>  
            </div>
        </div>
    </div>
  )
}
