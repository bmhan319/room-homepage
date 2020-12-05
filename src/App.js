import React, { Component } from 'react'
import Header from './component/Header'
import Overlay from './component/Overlay'
import Slider from './component/Slider'
import Stills from './component/Stills'

import './css/sliderWindow.css'
import './css/header.css'
import './css/sliderControl.css'
import './css/sliderText.css'
import './css/aboutImgLeft.css'
import './css/aboutImgRight.css'
import './css/about.css'
import './css/overlay.css'

let count = 0

export default class App extends Component {
  mobileMenuToggle = (pos) => {
    const menu = document.querySelector('.mobileMenu')
    const overlay = document.querySelector('.overlayComponent')

    if (pos === 'open') {
      menu.style.top = '0px'
      overlay.style.opacity = '.7'
      overlay.style.top = "110px"
    } else {
      menu.style.top = '-110px'
      overlay.style.opacity = '0'
      overlay.style.top = "-100vh"
    }
  }

  slider = (num) => {
    count = count + num
    const slides = document.querySelector('.sliderWindowContainer')
    const text = document.querySelector('.sliderTextContainer')
    if (count === -300) {
      count = 0
    } else if (count === 100) {
      count = -200
    }
    slides.style.left = `${count}%`
    text.style.left = `${count}%`
  }

  render() {
    return (
      <div className="App">
        <Header mobileMenuToggle={this.mobileMenuToggle} />
        <Overlay />
        <Slider slider={this.slider} />
        <Stills />
      </div>
    )
  }
}
