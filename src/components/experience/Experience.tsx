import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>Quais as minhas habilidades</h5>
      <h2>Minhas experiências</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Desenvolvedor Frontend</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <a href="/public/assets/certificados/certificadoHTML5.jpg" target='_blank'><h4>HTML 5</h4></a>
                
                <small className="text-light">Esperiênte</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <a href="/public/assets/certificados/certificadoHTML5.jpg" target='_blank'><h4>CSS 3</h4></a>
                
                <small className="text-light">Esperiênte</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <a href="/public/assets/certificados/certificadoJavascript.jpg" target='_blank'><h4>Javascript</h4></a>
                
                <small className="text-light">Esperiênte</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <a href="/public/assets/certificados/certificadoReactJS.jpg" target='_blank'><h4>React JS</h4></a>
                
                <small className="text-light">Esperiênte</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <a href="/public/assets/certificados/certificadoVueJS.jpg" target='_blank'><h4>Vue JS</h4></a>
                
                <small className="text-light">Intermediário</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <a href="/public/assets/certificados/certificadoAngular.jpg" target='_blank'><h4>Angular</h4></a>
                
                <small className="text-light">Intermediário</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Desenvolvedor Backend</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>PHP</h4>
                <small className="text-light">Basico</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Node JS</h4>
                <small className="text-light">Intermediário</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Laravel</h4>
                <small className="text-light">Basico</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Basico</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Basico</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Python</h4>
                <small className="text-light">Em conclusão</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
