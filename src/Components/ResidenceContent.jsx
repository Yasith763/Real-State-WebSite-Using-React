import React, { useState } from 'react';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import './ResidenceContent.css';
import theme_pattren from '../assets/under.svg'
import image1 from '../assets/project_1.jpeg'
import image2 from '../assets/project_2.jpg'
import image3 from '../assets/project_3.jpg'
import image4 from '../assets/project_4.jpeg'
import image5 from '../assets/project_5.jpeg'
import image6 from '../assets/project_6.jpg'
import image7 from '../assets/project_7.jpg'
import image8 from '../assets/project_8.jpeg'
import image9 from '../assets/project_9.jpeg'

export default function ResidenceContent() {
    const [residences, setResidences] = useState([
        {
          id: 1,
          title: 'Luxury Suburban Home',
          image: image1,
          price: '$850,000',
          description: 'A beautiful suburban home with modern amenities and spacious design.',
        },
        {
          id: 2,
          title: 'Downtown Apartment',
          image: image2,
          price: '$450,000',
          description: 'Stylish downtown apartment with amazing city views and high-end finishes.',
        },
        {
          id: 3,
          title: 'Beachfront Villa',
          image: image3,
          price: '$1,200,000',
          description: 'A luxurious beachfront villa with private access to the ocean.',
        },
        {
          id: 4,
          title: 'Mountain Cabin',
          image: image4,
          price: '$950,000',
          description: 'A serene mountain cabin offering stunning views and a peaceful retreat.',
        },
        {
          id: 5,
          title: 'Modern Penthouse',
          image: image5,
          price: '$2,000,000',
          description: 'A high-end penthouse with panoramic city views and luxurious amenities.',
        },
        {
          id: 6,
          title: 'Country Cottage',
          image: image6,
          price: '$500,000',
          description: 'Charming country cottage with rustic design and beautiful garden spaces.',
        },
        {
          id: 7,
          title: 'City Loft',
          image: image7,
          price: '$600,000',
          description: 'A trendy loft in the heart of the city with industrial design elements.',
        },
        {
          id: 8,
          title: 'Lakeside House',
          image: image8,
          price: '$1,100,000',
          description: 'A stunning lakeside house with private dock and beautiful water views.',
        },
        {
          id: 9,
          title: 'Eco-Friendly Home',
          image: image9,
          price: '$700,000',
          description: 'A sustainable, eco-friendly home with energy-efficient features.',
        },
      ]);
    
    
      return (
        <Container className="residences-page">
        <div className='about-title'>
            <h1>Our Residences</h1>
            <img src={theme_pattren} alt="" />
        </div>
          <p className="page-description">
          Explore our selection of premium residences designed for those who appreciate luxury and comfort. Find your dream home today!
          </p>
    
          <Row>
            {residences.map((residence) => (
              <Col md={4} sm={6} key={residence.id} className="mb-4">
                <Card className="residence-card">
                  <Card.Img variant="top" src={residence.image} alt={residence.title} />
                  <Card.Body>
                    <Card.Title>{residence.title}</Card.Title>
                    <Card.Text>{residence.price}</Card.Text>
                    <Card.Text>{residence.description}</Card.Text>
                    <Button variant="primary" onClick={() => alert(`Viewing details for ${residence.title}`)}>
                      View Details
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      );
}
