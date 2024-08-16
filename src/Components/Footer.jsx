import React from 'react'
import './Footer.css'
import footer_logo from '../assets/new_logo.svg'

export default function Footer() {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={footer_logo} alt="" />
            </div>
           
        </div>
        <hr/>
        <div className="footer-bottom">
            <p className="footer-bottom-left"><span>©</span> 2024 Yasith Imalka. All rights reserved.</p>
            <div className="footer-bottom-right">
            <p>Term of Services</p>
            <p>Privacy Policy</p>
            <p>Connect with Us</p> 
            </div>
        </div>
    </div>
  )
}
