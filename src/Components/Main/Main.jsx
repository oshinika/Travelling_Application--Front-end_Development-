import React, {useEffect} from 'react'
import './main.css'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { HiOutlineClipboardCheck } from 'react-icons/hi'
import img from '../../Assets/img1.jpg'
import img2 from '../../Assets/img2.jpg'
import img3 from '../../Assets/img3.jpg'
import img4 from '../../Assets/img4.jpg'
import img5 from '../../Assets/img5.jpeg'
import img6 from '../../Assets/img6.jpeg'
import img7 from '../../Assets/img7.jpg'
import img8 from '../../Assets/img8.jpg'
import img9 from '../../Assets/img9.jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Data = [
  {
    id: 1,
    imgSrc: img,
    destTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'Very Good'


  },

  {
    id: 2,
    imgSrc: img2,
    destTitle: 'Machu Pichchu',
    location: 'Peru',
    grade: 'CULTURAL RELAX',
    fees: '$600',
    description: 'Very Good'


  },


  {
    id: 3,
    imgSrc: img3,
    destTitle: 'Great Barrier Reef',
    location: 'Austrailia',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'Very Good'


  },

  {
    id: 4,
    imgSrc: img4,
    destTitle: 'Cappadocia',
    location: 'Turkey',
    grade: 'CULTURAL RELAX',
    fees: '$800',
    description: 'Very Good'


  },

  {
    id: 5,
    imgSrc: img5,
    destTitle: 'Guanajuato',
    location: 'Mexico',
    grade: 'CULTURAL RELAX',
    fees: '$1200',
    description: 'Very Good'


  },

  {
    id: 6,
    imgSrc: img6,
    destTitle: 'Cineque Terre',
    location: 'Italy',
    grade: 'CULTURAL RELAX',
    fees: '$840',
    description: 'Very Good'


  },
  

  {
    id: 7,
    imgSrc: img7,
    destTitle: 'Bali Island',
    location: 'Indonesia',
    grade: 'CULTURAL RELAX',
    fees: '$500',
    description: 'Very Good'


  },

  {
    id: 8,
    imgSrc: img8,
    destTitle: 'Taj Mahal',
    location: 'India',
    grade: 'CULTURAL RELAX',
    fees: '$900',
    description: 'Very Good'


  },

  {
    id: 9,
    imgSrc: img9,
    destTitle: 'Alla',
    location: 'SriLanka',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'Very Good'


  },


]



const Main = () => {

  useEffect(() =>{
    Aos.init ({duration:2000})
    }, [])
    
  return (
    <section className='main container section'>
      <div className = 'secTitle'>
        <h3 data-aos='fade-right' className = 'title'>
          Most Visited Destinations
        </h3>
      </div>

      <div className='secContent grid'>
      {Data.map(({id, imgSrc, destTitle, location, grade, fees, description}) => {
            return(

              <div key ={id} 
              data-aos='fade-up'
              className = 'singleDestination'>

              <div className='imageDiv'>
                <img src = {imgSrc} alt = {destTitle} />
              </div>

              <div className = 'cardInfo'>
                <h4 className = 'destTitle'>{destTitle}</h4>
              <span className = 'continent flex'></span>
                <HiOutlineLocationMarker className='icon'/>
                <span className='name'>{location}</span>

                <div className='fees flex'>
                  <div className='grade'>
                    <span> 
                      <small>{grade}+1</small>
                    </span>
                  </div>
                  <div className='price'>
                    <h5>{ fees}</h5>
                  </div>
                </div>

                <div className = 'desc'>
                  <p>{description}</p>
                </div>
                <button className='btn flex'>
                  DETAILS <HiOutlineClipboardCheck className= 'icon'/>
                </button>
              </div>
              </div>
            )
      })}
      </div>
    </section>
  )
}

export default Main