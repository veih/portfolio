
import { BsLinkedin, BsGithub, BsFacebook } from 'react-icons/bs';

import './footer.css'

const Footer = () => {
  return (
    <footer>
      <a href="" className="footer__logo">
        Marcelo Evangelista
      </a>

      <ul>
        <li className="permalinks">
          <a href="">Home</a>
          <a href="#about">About</a>
          <a href="#experience">Experiência</a>
          <a href="#services">Serviços</a>
          <a href="#portfolio">Portifólio</a>
          <a href="#contact">Contatos</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/marcelo-evangelista-847515175/">
          <BsLinkedin />
        </a>
        <a href="https://github.com/veih"><BsGithub /></a>
        <a href="https://www.facebook.com/veihbabal"><BsFacebook /></a>
      </div>

      <div className="footer__copyright">
        <small>Todos os direito resevado para Marcelo</small>
      </div>
    </footer>
  );
}

export default Footer