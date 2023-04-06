import "./portfolio.css";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Meus trabalhos recentes</h5>
      <h2>Portifólio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img
              src="https://veih.github.io/portifolio/assets/images/unblock.jpg"
              alt="trabalho"
            />
          </div>
          <h3>Projetos unblock</h3>
          <div className="portfolio__item-cta">
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
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img
              src="https://veih.github.io/portifolio/assets/images/unblock.jpg"
              alt="trabalho"
            />
          </div>
          <h3>Projetos para meu portifólio</h3>
          <div className="portfolio__item-cta">
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
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img
              src="https://veih.github.io/portifolio/assets/images/unblock.jpg"
              alt="trabalho"
            />
          </div>
          <h3>Projetos para meu portifólio</h3>
          <div className="portfolio__item-cta">
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
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
