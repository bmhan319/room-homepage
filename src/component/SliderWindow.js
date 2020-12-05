import React from 'react'

import SliderControl from './SliderControl'

export default function SliderWindow(props) {
  return (
    <div className="sliderWindowComponent">
      <div className="sliderWindowContainer">
        <div className="slides slide1"></div>
        <div className="slides slide2"></div>
        <div className="slides slide3"></div>
        <div className="slides slide1"></div>
      </div>
      <SliderControl />
    </div>
  )
}
