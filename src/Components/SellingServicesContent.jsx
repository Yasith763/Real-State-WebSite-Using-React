
import './SellingServicesContent.css'
import React, { useState } from 'react';

export default function SellingServicesContent() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        propertyDetails: '',
        message: ''
      });
    
      const [submitted, setSubmitted] = useState(false);
    
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // You could make an API call here to submit the form data
        console.log(formData);
        setSubmitted(true);
      };
    
      if (submitted) {
        return <h2>Thank you for your inquiry! We will get in touch soon.</h2>;
      }
    
      return (
        <div className="selling-services-page">
          <h1>Sell Your Property with Us</h1>
          <p>We provide expert real estate services to help you sell your property quickly and at the best price.</p>
          
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
    
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
    
            <div className="form-group">
              <label htmlFor="phone">Phone:</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
    
            <div className="form-group">
              <label htmlFor="propertyDetails">Property Details:</label>
              <textarea
                id="propertyDetails"
                name="propertyDetails"
                value={formData.propertyDetails}
                onChange={handleChange}
                required
              />
            </div>
    
            <div className="form-group">
              <label htmlFor="message">Additional Message (optional):</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
            </div>
    
            <button type="submit">Submit Inquiry</button>
          </form>
        </div>
      );
}
