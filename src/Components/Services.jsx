import React from 'react'
import './Services.css'
import theme_pattern from '../assets/under.svg'
import Services_Data from '../assets/services_data' 
import { useNavigate } from 'react-router-dom';

export default function Services() {
    const navigate = useNavigate();

  return (
    <div id='services' className='services'>
        <div className="services-title">
            <h1>Our Services</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="services-container">
            {Services_Data.map((Service,index)=>{
                return <div key={index} className="services-format">
                    <h3>{Service.s_no}</h3>
                    <h2>{Service.s_name}</h2>
                    <p>{Service.s_desc}</p>
                    <div className="servicse-readmore">
                        <button className='b' onClick={() => navigate(Service.s_travel)}>Read More</button>   
                    </div>
                </div>
            })}
        </div>
    </div>
  )
}
