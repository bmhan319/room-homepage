import React from 'react'
import aboutDarkImg from '../img/image-about-dark.jpg'
import aboutLightImg from '../img/image-about-light.jpg'


export default function Stills() {
  return (
    <div className="stillsComponent">
      <div className="stillsContainer">

        <div className="aboutImgLeftContainer">
          <img className="aboutImg" src={aboutDarkImg} alt='imageDark' />
        </div>

        <div className="aboutContainer">
          <h3 className="aboutTitle">ABOUT OUR FURNITURE</h3>
          <p className="aboutText">Our multifunctional collection blends design and function to suit your individual taste.
            Make each room unique, or pick a cohesive theme that best express your interests and what
            inspires you. Find the furniture pieces you need, from traditional to contemporary styles
            or anything in between. Product specialists are available to help you create your dream space.</p>
        </div>

        <div className="aboutImgRightContainer">
          <img className="aboutImg" src={aboutLightImg} alt='imageLight' />
        </div>
      </div>
    </div>
  )
}
