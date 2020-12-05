import React from 'react'
import Header from './Header'
import SliderControl from './SliderControl'

export default function SliderWindow(props) {
  return (
    <div className="sliderWindowComponent">
      <Header mobileMenuToggle={props.mobileMenuToggle}/>
      <SliderControl />
    </div>
  )
}
