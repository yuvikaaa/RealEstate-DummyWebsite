import React from 'react'
import './Hero.css'
import {HiLocationMarker} from 'react-icons/hi'
import CountUp from 'react-countup'
const Hero = () => {
  return (
    <div>
      <section className="hero-wrapper">
        <div className="paddings innerWidth flexCenter hero-container">
            {/*Left Side */}
            <div className="flexColStart hero-left">
                <div className="hero-title">
                    <div className="orange-circle"/>
                    <h1>Discover<br></br>
                    Most Suitable<br></br> 
                    Property</h1>
                </div>
                <div className="flexColStart hero-des">
                    <span className='secondaryText'>Homyz is here, so forget all the difficulties in finding a residence for you.</span>
                    <span className='secondaryText'>Find a variety of properties that suits you!</span>
                </div>
                <div className="flexCenter search-bar">
                    <HiLocationMarker color="var(--blue)" size={25}/>
                    <input type='text'/>
                    <button className='button'>Search</button>
                </div>
                <div className="flexCenter stats">
                <div className=" flexColStart stat">
                    <span>
                        <CountUp start={8800} end={9000} duration={4} />
                        <span>+</span>
                    </span>
                    <span className='secondaryText'>Premium Products</span>
                </div>
                <div className=" flexColStart stat">
                    <span>
                        <CountUp start={1950} end={2000} duration={4} />
                        <span>+</span>
                    </span>
                    <span className='secondaryText'>Happy Customers</span>
                </div>
                <div className=" flexColStart stat">
                    <span>
                        <CountUp end={9000} />
                        <span>+</span>
                    </span>
                    <span className='secondaryText'>Award winnings</span>
                </div>
                </div>
                
            </div>
            {/*Right Side */}
            <div className="flexCenter hero-right">
                <div className="image-container">
                    <img src='./hero-image.png' alt='hero'/>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Hero
