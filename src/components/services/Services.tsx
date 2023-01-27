
import { BiCheck } from "react-icons/bi";

import './services.css'

const Services = () => {
  return (
    <section id="services">
      <h5>O que eu ofereço</h5>
      <h2>Serviços</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Em breve!</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Em breve!</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Em breve!</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Em breve!</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Em breve!</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Desenvolvimento de sites</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Em breve!</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Em breve!</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Em breve!</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Em breve!</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Em breve!</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Desenvolvimento de Apps</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Em breve!</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Em breve!</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Em breve!</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Em breve!</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Em breve!</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
