import React from 'react'
import SliderWindow from './SliderWindow'
import SliderText from './SliderText'

export default function Slider(props) {
  return (
    <div className="sliderComponent">
      <div className="sliderContainer">
        <SliderWindow slider={props.slider} />
        <SliderText />
      </div>
    </div>
  )
}
