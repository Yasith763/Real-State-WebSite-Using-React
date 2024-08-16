import React from 'react'
import './Hero.css'
import profile_img from '../assets/p2.png'

export default function Hero() {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="" />
        <h1><span>Discover,</span> Most Suitable Property</h1>
        <p>Find a variety of properties that suit you very easilty Forget all difficulties in finding a residence for you.</p>
    </div>
  )
}
