import React from 'react'
import './about.css'
import IMG from './../../../assets/img/robot.svg'

const About = () => {
  return (
    <div className="about_container">
      <div className="about_title">
        <h1>WEEKEND FROM HOME</h1>
        <p>Stay active with a litle workout</p>
      </div>
      <div className="about_detail">
        <img src={IMG} alt="img" />
        <button className="about_btn">Let's Go</button>
      </div>
    </div>
  )
} 

export default About