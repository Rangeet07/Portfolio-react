import React from 'react'
import CTA from './CTA'
import './header.css'

const Header = () => {
  return (
    <header>
        <div className="container header__container">
            <h5>Hello I'm</h5>
            <h1>Rangeet Nandy</h1>
            <h5 className="text-light">Fullstack Developer</h5>
            <CTA/>
        </div>
    </header>
  )
}

export default Header