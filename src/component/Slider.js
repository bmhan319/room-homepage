import React from 'react'
import SliderWindow from './SliderWindow'
import SliderText from './SliderText'

export default function Slider() {
  return (
    <div className="sliderComponent">
      <div className="sliderContainer">
        <SliderWindow />
        <SliderText />
      </div>
    </div>
  )
}
