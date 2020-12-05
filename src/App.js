import React, { Component } from 'react'
import SliderWindow from './component/SliderWindow'
import SliderText from './component/SliderText'
import AboutImgLeft from './component/AboutImgLeft'
import About from './component/About'
import AboutImgRight from './component/AboutImgRight'
import './css/sliderWindow.css'
import './css/header.css'
import './css/sliderControl.css'
import './css/sliderText.css'
import './css/aboutImgLeft.css'
import './css/aboutImgRight.css'
import './css/about.css'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <SliderWindow />
        <SliderText />
        <AboutImgLeft />
        <About />
        <AboutImgRight />
      </div>
    )
  }
}
