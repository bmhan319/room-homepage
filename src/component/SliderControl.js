import React from 'react'

export default function SliderControl(props) {
  return (
    <div className="sliderControlComponent">
      <div className="sliderButton sliderLeft" onClick={()=>{props.slider(100)}} >&lt;</div>
      <div className="sliderButton sliderRight" onClick={()=>{props.slider(-100)}} >&gt;</div>
    </div>
  )
}
