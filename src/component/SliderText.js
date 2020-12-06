import React from 'react'
//import arrow from '../img/icon-arrow.svg'

export default function SliderText() {
  return (
    <div className="sliderTextComponent">
      <div className="sliderTextContainer">

        <div className="sliderText sliderText1">
          <h1 className="introTitle">Discover innovative ways to decorate</h1>
          <p className="introText">We provide unmatched quality, comfort, and style for property owners across the country. 
            Our experts combine form and function in bringing your vision to life. Create a room in your 
            own style with our collection and make your property a reflection of you and what you love.</p>
          <div className="shopLinkContainer">
            <a tabIndex="-1" className="shopLink" href="shop">SHOP NOW <span className="arrowContainer">
              <svg className="arrowLink" fill="#000" width="40" height="12" xmlns="http://www.w3.org/2000/svg">
                <path className="arrowPath" d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z" fillRule="nonzero"/>
              </svg>
            </span></a>
          </div>
        </div>

        <div className="sliderText sliderText2">
          <h1 className="introTitle">We are available all across the globe</h1>
          <p className="introText">With stores all over the world, it's easy for you to find furniture for your home or place of business. 
            Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
            store locator. Any questions? Don't hesitate to contact us today.</p>
          <div className="shopLinkContainer">
            <a tabIndex="-1" className="shopLink" href="shop">SHOP NOW <span className="arrowContainer">
              <svg className="arrowLink" fill="#000" width="40" height="12" xmlns="http://www.w3.org/2000/svg">
                <path className="arrowPath" d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z" fillRule="nonzero"/>
              </svg>
            </span></a>
          </div>
        </div>

        <div className="sliderText sliderText3">
          <h1 className="introTitle">Manufactured with the best materials</h1>
          <p className="introText">Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
            to ensure that every product is made as perfect and as consistent as possible. With three decades of 
            experience in this industry, we understand what customers want for their home and office.</p>
          <div className="shopLinkContainer">
            <a tabIndex="-1" className="shopLink" href="shop">SHOP NOW <span className="arrowContainer">
              <svg className="arrowLink" fill="#000" width="40" height="12" xmlns="http://www.w3.org/2000/svg">
                <path className="arrowPath" d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z" fillRule="nonzero"/>
              </svg>
            </span></a>
          </div>
        </div>
        
      </div>
    </div>
  )
}
