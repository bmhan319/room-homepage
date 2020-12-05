import React from 'react'

export default function Header() {
  return (
    <div className="headerComponent">
      <div className="mobileHeaderContainer">
        <div className="hamburgerContainer">
          <div className="burger burgerTop"></div>
          <div className="burger burgerMid"></div>
          <div className="burger burgerBot"></div>
        </div>
        <div className="mobileLogoConatiner">
          <h2 className="mobileLogo">room</h2>
        </div>
      </div>
      
      <div className="desktopHeaderContainer">
        <div className="desktopLogoConatiner">
          <h2 className="desktopLogo">room</h2>
        </div>
        <ul className="desktopMenuContainer">
          <li className="menuItem menuHome">home</li>
          <li className="menuItem menuShop">shop</li>
          <li className="menuItem menuAbout">about</li>
          <li className="menuItem menuContact">contact</li>
        </ul>
      </div>
    </div>
  )
}
