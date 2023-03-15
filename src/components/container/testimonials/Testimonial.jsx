import React from 'react'
import './testimonial.css'
import testimonial from './../../../assets/data/testi'
// import Swiper core and required modules
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonial = () => {
  return (
    <div className="testimonial_container">
      <div className="testimonial_quote">
        <div className="quote">
          <p><span className='quote_text'>Deffinition;</span> a practice or exercise to test or improve one's fitness for athletic competition, ability, or performance to exhaust (something, such as a mine) by working to devise, arrange, or achieve by resolving difficulties. Merriam-Webster.com Dictionary.</p>

          <p className="quote_name">-weekend team</p>
        </div> 
      </div>
      <div className="testimonial_content">
        <h1 className="testimonial_title">Testimonial</h1>
        <div className="testimonial_detail-container">
          <Swiper
            slidesPerView={2.5}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              120:{
                slidesPerView: 1.3,
              },
              600:{
                slidesPerView:2.5,
              }
            }}
            modules={[Pagination]}
            className="mySwiper"
            >
              {testimonial.map(({id, testimony, by})=>(
              <SwiperSlide> 
                <div className="testimonial_detail" id={id}>
                  <h1>{by}</h1>
                  <small>{testimony}</small>
                </div>
              </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default Testimonial