import React from 'react'
import AboutImgLeft from './AboutImgLeft'
import About from './About'
import AboutImgRight from './AboutImgRight'

export default function Stills() {
  return (
    <div className="stillsComponent">
      <div className="stillsContainer">
        <AboutImgLeft />
        <About />
        <AboutImgRight />
      </div>
    </div>
  )
}
