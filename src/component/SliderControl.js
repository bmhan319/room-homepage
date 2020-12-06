import React from 'react'

export default function SliderControl(props) {
  return (
    <div className="sliderControlComponent">
      <div tabindex="0" className="sliderButton sliderLeft" onClick={()=>{props.slider(100)}} >
        <svg className="sliderLeftSVG" viewBox="0 0 6 24" width="14" height="24" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 0L1 12l12 12" stroke="#FFF" fill="none" fillRule="evenodd"/>
        </svg>
      </div>
      <div tabindex="0" className="sliderButton sliderRight" onClick={()=>{props.slider(-100)}} >
        <svg className="sliderRightSVG" viewBox="4 0 14 24" width="14" height="24" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 0l12 12L1 24" stroke="#FFF" fill="none" fillRule="evenodd"/>
        </svg>
      </div>
    </div>
  )
}
