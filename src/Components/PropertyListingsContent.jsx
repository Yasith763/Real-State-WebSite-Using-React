import React from 'react'
import './PropertyListingsContent.css'
import { useNavigate } from 'react-router-dom';
import theme_pattren from '../assets/under.svg'

export default function PropertyListingsContent() {
    const navigate = useNavigate();
    return (
        <div className="property-listings-text">
            <div className='title2'>
                <h1>Explore Our Property Listings</h1>
                <img src={theme_pattren} alt="" />
            </div>
            <p>
                Welcome to our <strong>Property Listings</strong> page, where your dream home awaits. 
                Browse through a diverse selection of properties, from stunning urban apartments 
                to spacious family homes, modern condos, and commercial spaces.
            </p>

            <p>
                Whether you're looking to buy, rent, or invest, we have carefully curated listings to 
                meet all your real estate needs. Each property features high-quality images, detailed 
                descriptions, and essential information such as price, location, and key features. 
                Our listings are updated regularly to ensure you have access to the latest opportunities 
                on the market.
            </p>

            <h2>Find the Perfect Property</h2>
            <p>
                Use our search and filter options to narrow down your search by price, location, property 
                type, and more. Whether you're seeking a cozy retreat in the suburbs or a luxurious 
                penthouse in the city, you'll find a wide range of options to suit your lifestyle and budget.
            </p>

            <p>
                Click on any listing to view more details, explore photos, and contact us for inquiries or 
                to schedule a viewing. Let us help you find the perfect place to call home!
            </p>

            <h2>Start Your Search Today</h2>
            <p>
                Your ideal property is just a few clicks away. Start exploring our listings today and discover 
                a place you'll love to live, work, or invest in.
            </p>
            <div className="search-now-container">
                <button className="search-now-button" onClick={() => navigate('/residence')}>Search Now</button>
            </div>
        </div>
    );
}
