import React from 'react'

export default function Header(props) {
  return (
    <div className="headerComponent">
      <div className="mobileHeaderContainer">
        <div className="hamburgerContainer" onClick={ ()=>{props.mobileMenuToggle('open')} } >
          <div className="burger burgerTop"></div>
          <div className="burger burgerMid"></div>
          <div className="burger burgerBot"></div>
        </div>
        <div className="mobileLogoConatiner">
          <h2 className="mobileLogo">room</h2>
        </div>
      </div>

      
      <div className="mobileMenu">
        <div className="closeContainer" onClick={ ()=>{props.mobileMenuToggle('close')} }>
          <svg className="closeIcon" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
            <path className="closePath" d="M14.364.222l1.414 1.414L9.414 8l6.364 6.364-1.414 1.414L8 9.414l-6.364 6.364-1.414-1.414L6.586 8 .222 1.636 1.636.222 8 6.586 14.364.222z" fill="#000" fillRule="evenodd" opacity=".201"/>
          </svg>
        </div>
        <ul className="mobileMenuConatiner">
          <li className="mobileMenuItem">home</li>
          <li className="mobileMenuItem">shop</li>
          <li className="mobileMenuItem">about</li>
          <li className="mobileMenuItem">contact</li>
        </ul>
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
