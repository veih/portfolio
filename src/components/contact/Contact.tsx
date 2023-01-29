import { TfiEmail } from "react-icons/tfi";

import "./contact.css";
import { AiOutlineMessage } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Procurando Dev?</h5>
      <h2>Esta aqui meu contato</h2>

      <div className="contact__container contact">
        <div className="contact__options">
          <article className="contact__option">
            <TfiEmail />
            <h4>E-mail</h4>
            <h5>tancker@hotmail.com</h5>
            <a href="mailto:tancker@hitmail.com">Mande sua mensagem</a>
          </article>
          <article className="contact__option">
            <AiOutlineMessage />
            <h4>Mensagem</h4>
            <h5>Marcelo Evangelista</h5>
            <a href="https://www.linkedin.com/in/marcelo-evangelista-847515175/">
              Mande sua mensagem
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp />
            <h4>WhatsApp</h4>
            <h5>(85)9 99568243</h5>
            <a href="https://api.whatsapp.com/send?phone+85999568243">Mande sua mensagem</a>
          </article>
        </div>
        <form action="">
          <input type="text" name="name" placeholder="Nome completo" required/>
          <input type="email" name="email" placeholder="Seu e-mail" />
          <textarea name="message" placeholder="Sua mensagem" required ></textarea>
          <button className="btn btn-primary" type="submit">Enviando sua mensagem</button>
        </form>
      </div>
    </section>
  );
};
  
export default Contact;
