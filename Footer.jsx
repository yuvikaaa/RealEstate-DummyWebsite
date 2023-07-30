import React from 'react'

const Footer = () => {
  return (
    <section className="f-wrapper">
        <div className="paddings innerWidth flexCenter f-container">
            {/*Left side */}
            <div className="flexColStart f-left">
                <img src='./logo2.png' alt='' width={120}/>
            </div>
            {/*Right side */}
            <div className="flexColStart f-right">
                <span className='secondaryText'>145 New York, FL 4571, USA</span>
                <div className="flexCenter f-menu">
                    <span>Property Product Service About Us</span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer
