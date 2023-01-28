import "./portfolio.css";
import unblock from "./../../assets/unblock.jpg";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Meus trabalhos recentes</h5>
      <h2>Portifólio</h2>

      <div className="container portifolio__container">
        <article className="portifolio__item">
          <div className="portifolio__item-image">
            <img src={unblock} alt="trabalho" />
          </div>
          <h3>Projetos para meu portifólio</h3>
          <a href="#" className="btn" target="_blank">
            Github
          </a>
          <a
            href="https://unblockrealestate.com.br"
            className="btn btn-primary"
            target="_blank"
          >
            Demostração
          </a>
        </article>
        <article className="portifolio__item">
          <div className="portifolio__item-image">
            <img src={unblock} alt="trabalho" />
          </div>
          <h3>Projetos para meu portifólio</h3>
          <a href="#" className="btn" target="_blank">
            Github
          </a>
          <a
            href="https://unblockrealestate.com.br"
            className="btn btn-primary"
            target="_blank"
          >
            Demostração
          </a>
        </article>
        <article className="portifolio__item">
          <div className="portifolio__item-image">
            <img src={unblock} alt="trabalho" />
          </div>
          <h3>Projetos para meu portifólio</h3>
          <a href="#" className="btn" target="_blank">
            Github
          </a>
          <a
            href="https://unblockrealestate.com.br"
            className="btn btn-primary"
            target="_blank"
          >
            Demostração
          </a>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
