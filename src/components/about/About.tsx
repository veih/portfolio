

import { BsAward } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

import "./about.css";

const About = () => {

  return (
    <section id="about">
      <h5>Quer me conhecer?</h5>
      <h2>Sobre me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img
              src="https://veih.github.io/portfolio.github.oi/assets/marcelo-9edcd4ac.jpg"
              alt="marcelo"
            />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <BsAward className="about__icon" />
              <h5>Experiência</h5>
              <small>1 Ano e 6 meses</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clientes</h5>
              <small>2 clientes</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projetos</h5>
              <small>10 projetos</small>
            </article>
          </div>

          <p>
            Eu sou uma pessoa muito dedicada e trabalhadora. Gosto de aprender
            coisas novas e sempre busco me desenvolver tanto pessoal quanto
            profissionalmente. Sou uma pessoa amigável e gosto de estar rodeado
            de pessoas queridas. Além disso, gosto de aproveitar meu tempo livre
            fazendo atividades ao ar livre, viajando e experimentando cozinhar
            novos pratos. Acredito que a vida é uma constante jornada de
            aprendizado e crescimento e sempre busco me esforçar para ser uma
            pessoa melhor.
          </p>

          <a href="#contact" className="btn btn-primary">
            Vamos conversar
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
