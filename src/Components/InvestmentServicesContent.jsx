import './InvestmentServicesContent.css'
import React, { useState } from 'react';

export default function InvestmentServicesContent() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        investmentType: '',
        budget: '',
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
        return <h2>Thank you for your inquiry! We will get in touch with you soon.</h2>;
      }
    
      return (
        <div className="investment-services-page">
          <h1>Invest in Real Estate with Us</h1>
          <p>Explore high-value real estate investment opportunities with the support of our expert team.</p>
          
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
              <label htmlFor="investmentType">Type of Investment (e.g., Residential, Commercial):</label>
              <input
                type="text"
                id="investmentType"
                name="investmentType"
                value={formData.investmentType}
                onChange={handleChange}
                required
              />
            </div>
    
            <div className="form-group">
              <label htmlFor="budget">Budget (optional):</label>
              <input
                type="text"
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
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
