import React from 'react'
import CTA from './CTA'
import marcelo from './../../assets/marcelo.jpeg'
import HeaderSocials from "./HeaderSocials";

import './header.css'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5> Oi, eu sou </h5>
        <h1>Marcelo Evangelista</h1>
        <h5 className="text-light"> Desenvolvedor Front - End</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={marcelo} alt="marcelo" />
        </div>

        <a href="#contact" className="scroll__down">
          Rolar para baixo
        </a>
      </div>
    </header>
  );
}

export default Header