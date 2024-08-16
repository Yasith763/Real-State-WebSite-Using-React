import './RentingAndLeasingServicesContent.css'
import React, { useState } from 'react';

export default function RentingAndLeasingServicesContent() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        propertyType: '',
        leasingDetails: '',
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
        // API call can be added here to submit the form data
        console.log(formData);
        setSubmitted(true);
      };
    
      if (submitted) {
        return <h2>Thank you for your inquiry! We will get in touch soon.</h2>;
      }
    
      return (
        <div className="renting-leasing-page">
          <h1>Rent or Lease a Property with Us</h1>
          <p>We offer tailored renting and leasing services to help you find the perfect property or tenant.</p>
          
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
              <label htmlFor="propertyType">Property Type (e.g., Apartment, House):</label>
              <input
                type="text"
                id="propertyType"
                name="propertyType"
                value={formData.propertyType}
                onChange={handleChange}
                required
              />
            </div>
    
            <div className="form-group">
              <label htmlFor="leasingDetails">Leasing/Renting Details:</label>
              <textarea
                id="leasingDetails"
                name="leasingDetails"
                value={formData.leasingDetails}
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
