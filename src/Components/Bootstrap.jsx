import React from 'react';
import './Bootstrap.css'
import { Carousel } from 'react-bootstrap';
import project1_img from '../assets/project_1.jpeg'
import project2_img from '../assets/project_2.jpg'
import project3_img from '../assets/project_3.jpg'

export default function Bootstrap() {
    return (
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={project1_img}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Some description for the first slide.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={project2_img}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Some description for the second slide.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={project3_img}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Some description for the first slide.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      );
}
