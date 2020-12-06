import React, { Component } from 'react'
import Header from './component/Header'
import Overlay from './component/Overlay'
import Slider from './component/Slider'
import Stills from './component/Stills'

import './css/sliderWindow.css'
import './css/header.css'
import './css/overlay.css'
import './css/slider.css'
import './css/sliderControl.css'
import './css/sliderText.css'
import './css/stills.css'

//Global Variable for Count
let count = 0

export default class App extends Component {
  //To Open/Close Mobile Menu
  mobileMenuToggle = (pos) => {
    const menu = document.querySelector('.mobileMenu')
    const overlay = document.querySelector('.overlayComponent')

    if (pos === 'open') {
      menu.style.top = '0px'
      overlay.style.opacity = '.7'
      overlay.style.bottom = "calc(-110px + 0vh)"
    } else {
      menu.style.top = '-110px'
      overlay.style.opacity = '0'
      overlay.style.bottom = "-100vh"
    }
  }

  //Controls the slideshow buttons
  slider = (num) => {
    const slides = document.querySelector('.sliderWindowContainer')
    const text = document.querySelector('.sliderTextContainer')
    count = count + num
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
