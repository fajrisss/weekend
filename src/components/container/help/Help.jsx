import React from 'react'
import IMG2 from './../../../assets/img/robot2.png'
import './help.css'
import {AiOutlineArrowRight} from 'react-icons/ai'
import help from './../../../assets/data/help'


const Help = () => {
  return (
    <div className="help_container">
      <div className="help_text">
        <div className="pov">
          <h1>POV</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ullamco laboris nisi ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
        </div>
        <div className="resource">
          <h1>Resource</h1>
          <p>These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best</p>
        </div>
      </div> 
      <div className="help_content-detail">
        <h1>Help & Tips</h1>
        <div className="help_content">
          {help.map(({title, slug, image})=>(
            <div className="wrap">
              <img src={image} alt={slug} />
              <div className="content_help">
                <p>{title}</p>
                <button className="arrow_btn"><AiOutlineArrowRight/> </button>
              </div>
            </div>
            )
            )}
        </div>
      </div>
      <div className="set">
          <div className="set_img">
            <img src={IMG2} alt="" />
          </div>
          <div className="set_text">
            <h1>You're all set</h1>
            <p>The wise man therefore always holds in these matters to this principle of selection.</p>
          </div>
      </div>
    </div>
  )
}

export default Help