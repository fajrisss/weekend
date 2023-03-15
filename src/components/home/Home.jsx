import React from 'react'
import './home.css'
import AVA from './../../assets/img/ava.jpg'
import About from '../container/about/About'
import Testimonial from '../container/testimonials/Testimonial'
import Help from '../container/help/Help'

const Home = () => {
  return (
    <div className="container">

      <div className="header_container">
        <div className="header_content">
          <img src={AVA} alt="ava" />
          <div className="ava_detail">
            <small>Good Morning</small>
            <p className="ava_name">Fellas</p>
          </div>
        </div>
      </div>
      
      <section className="home_container">
        <About />
        <Testimonial />
        <Help />
      </section>
      
      <div className="footer_container">
        <div className="footer">
        <p className='copy'><span>WKND@</span>2020</p>
        <p className='version'>alpha version 1.0</p>
        </div>
      </div>
    </div>
  )
}

export default Home