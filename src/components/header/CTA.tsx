
import CV from "https://veih.github.io/portfolio/assets/CV.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className='btn'> Download CV</a>
      <a href="#contact" className='btn btn-primary'> Vamos conversar</a>
    </div>
  );
}

export default CTA