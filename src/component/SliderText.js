import React from 'react'
import arrow from '../img/icon-arrow.svg'

export default function SliderText() {
  return (
    <div className="sliderTextComponent">
      <div className="sliderTextContainer sliderTextContainer1">
        <h1 className="introTitle">Discover innovative ways to decorate</h1>
        <p className="introText"> We provide unmatched quality, comfort, and style for property owners across the country. 
          Our experts combine form and function in bringing your vision to life. Create a room in your 
          own style with our collection and make your property a reflection of you and what you love.</p>
        <div className="shopLinkContainer">
          <a className="shopLink" href="shop">SHOP NOW <span className="arrowContainer"><img className="arrowLink" src={arrow} alt="arrow"/></span></a>
        </div>
      </div>
    </div>
  )
}
