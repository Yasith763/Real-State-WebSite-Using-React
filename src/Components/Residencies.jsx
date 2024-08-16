import React from 'react'
import './Residencies.css'
import theme_pattern from '../assets/under.svg'
import mywork_data from '../assets/mywork_data'
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export default function Residencies() {
    const navigate = useNavigate();
  return (
    <div id='work' className='mywork'>
        <div className="mywork-title">
            <h1>Residencies</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="mywork-container">
            {mywork_data.map((work) => (
                <div key={work.w_no} className="mywork-item">
                <a href={work.w_link} target="_blank" rel="noopener noreferrer">
                    <img src={work.w_img} alt={work.w_name} />
                </a>
                </div>
            ))}
        </div>
        <div className="mywork-showmore">
            <Button onClick={() => navigate('/residence')}>Show More</Button>
        </div>
    </div>
  )
}
