import React from 'react'
import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruckFast, faHeadset, faTag, faLock } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  return (
    <>
      <div className="main">

        <div className="main_tag">
          <h1>WELCOME TO<br /><span>BOOK STORE</span></h1>

          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem beatae neque mollitia, rerum sit illum itaque saepe voluptatum nostrum eum aspernatur autem expedita quibusdam qui ex doloribus vel maxime eveniet!</p>

          <a href="#" className='main_btn'>Learn More</a>
        </div>

        <div className="main_img">
          <img src="../../public/images/table.png" alt="Table picture" />
        </div>

      </div>

      {/* ----- Services ----- */}
      <div className="services">
        <div className="services_box">
          <div className="services_card">
            <FontAwesomeIcon icon={faTruckFast} />
            <h3>Fast Delivery</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>

          <div className="services_card">
            <FontAwesomeIcon icon={faHeadset} />
            <h3>24 / 7 Services </h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>

          <div className="services_card">
            <FontAwesomeIcon icon={faTag} />
            <h3>Best Deal</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>

          <div className="services_card">
            <FontAwesomeIcon icon={faLock} />
            <h3>Power Security</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>

      {/* ----- About ----- */}
      <div className="about" id='about'>
        <div className="about_image">
          <img src="../../public/images/about.png" alt="About picture" />
        </div>
        <div className="about_tag">
          <h1>About us</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum voluptatem minima accusantium quas minus libero mollitia possimus veritatis laudantium dicta asperiores iste eius nostrum a iure obcaecati optio, recusandae pariatur.</p>
          <a href="#" className='about_btn'>Learn More</a>
        </div>
      </div>
    </>
  )
}

export default Home