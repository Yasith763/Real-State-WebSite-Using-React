
import React from 'react'
import './Contacts.css'
import theme_pattern from '../assets/under.svg'
import mail_icon from '../assets/mail_icon.svg'
import location_icon from '../assets/location_icon.svg'
import call_icon from '../assets/call_icon.svg'

export default function Contacts() {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "c3794d33-5403-4aa1-9cec-6aa2b4260d1a");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message)
        }
      };

  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Find Us On</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>we’re here to help you with all your real estate needs. Whether you're buying, selling, renting, or simply exploring your options, our team of experts is ready to assist.</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail_icon} alt="" /> <p>tgyasithimalka@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <img src={call_icon} alt="" /> <p>0717661477</p>
                    </div>
                    <div className="contact-detail">
                        <img src={location_icon} alt="" /> <p>Thihagoda , Matara , Sri Lanka</p>
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className='contact-right'>
                <label htmlFor=''>Your Name</label>
                <input type='text' placeholder='Enter Your Name' name='name' />
                <label htmlFor=''>Your Email</label>
                <input type='email' placeholder='Enter Your Email' name='email' />
                <label htmlFor=''>Write Your Message Here</label>
                <textarea name='message'  rows='8' placeholder='Enter Your Message' ></textarea>
                <button className='contacts-submit' type='submit'>Submit Now</button>
            </form>
        </div>
    </div>
  )
}
