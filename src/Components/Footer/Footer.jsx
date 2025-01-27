import React, {useEffect} from 'react'
import './footer.css'
import video2 from '../../Assets/video2.mp4'
import {FiChevronRight, FiSend} from 'react-icons/fi'
import {MdOutlineTravelExplore} from 'react-icons/md'
import {AiFillInstagram, AiFillYoutube} from 'react-icons/ai'
import {AiOutlineTwitter} from 'react-icons/ai'
import {FaTripadvisor} from 'react-icons/fa'

import Aos from 'aos'
import 'aos/dist/aos.css'


const Footer = () => {

  useEffect(() =>{
    Aos.init ({duration:2000})
    }, [])

  return (
    <section  className = 'footer'>
      <div className='videoDiv'>
        <video src = {video2} loop autoPlay muted type ="video/mp4"></video>
      </div>

      <div className='secContent container'>
        <div className='contactDiv flex'>
          <div data-aos = "fade-up"
          className='text'>
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>

          <div className='inputDiv flex'>
            <input data-aos = "fade-up" type = 'text' placeholder = 'Enter Email Address'/>
            <button data-aos = "fade-up" className = 'btn flex' type = 'submit'>
             SEND <FiSend className = 'icon'/>
            </button>
          </div>

          <div className='footerCard flex'>
            <div className = 'footerIntro flex'>
              <div className = 'logoDiv'>
                <a href ='#' className = 'logo flex'>
                  <MdOutlineTravelExplore className = 'icon'/>
                  Travel.
                </a>
              </div>

              <div data-aos = "fade-up" className='footerParagraph'>
              Experience seamless travel planning with Wanderlust, your ultimate travel companion. Personalize itineraries, receive real-time updates, and explore curated destination guides. Easily book flights and accommodations, and stay organized with our intuitive trip planner. Wanderlust makes your dream journeys a reality—travel smarter and leave the planning to us.
              </div>

              <div data-aos = "fade-up" className='footerSocials flex'>
                <AiOutlineTwitter className ='icon'/>
                <AiFillYoutube className ='icon'/>
                <AiFillInstagram className ='icon'/>
                <FaTripadvisor className ='icon'/>
              </div>

              
            </div>

            <div data-aos = "fade-up" className='footerLinks grid'>
              <div className='linkGroup'>
                <span className='groupTitle'>
                  OUR AGENCY
                </span>

                <li className='footerList flex'>
                  <FiChevronRight className='icon'/>
                  Services
                </li>

                <li className='footerList flex'>
                  <FiChevronRight className='icon'/>
                  Insarance
                </li>

                <li className='footerList flex'>
                  <FiChevronRight className='icon'/>
                  Agency
                </li>

                <li className='footerList flex'>
                  <FiChevronRight className='icon'/>
                  Tourism
                </li>

                <li className='footerList flex'>
                  <FiChevronRight className='icon'/>
                  Payment
                </li>
              </div>
              <div 
               className = 'footerDiv flex'>
 <small > BEST TRAVEL WEBSITE THEME</small>
 <small > COPYRIGHTS RESERVED - ISTATECH 2022 </small>
</div>
       
              
              
            </div>

            
            </div>

            
          </div>
        </div>
      
       </section>
  )
}

export default Footer