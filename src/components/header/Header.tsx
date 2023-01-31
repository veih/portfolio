
import CTA from './CTA'
import HeaderSocials from "./HeaderSocials";
import Clock from '../clock/Clock';
import WeatherForecast from '../Weather/Weather';

import './header.css'

const Header = () => {
  return (
    <header>
      <div id='clock'>
        <Clock />
      </div>
      <div id='weather'>
        <WeatherForecast city={''} />
      </div>
      <div className="container header__container">
        <h5> Oi, eu sou </h5>
        <h1>Marcelo Evangelista</h1>
        <h5 className="text-light"> Desenvolvedor Front - End</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img
            src="https://veih.github.io/portifolio/assets/images/marcelo.jpg"
            alt="marcelo"
          />
        </div>

        <a href="#contact" className="scroll__down">
          Rolar para baixo
        </a>
      </div>
    </header>
  );
}

export default Header