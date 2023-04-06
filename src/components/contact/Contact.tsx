import { useRef, useState } from "react";
import { TfiEmail } from "react-icons/tfi";
import { AiOutlineMessage } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "emailjs-com";
import "./contact.css";


const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = formRef.current;
    if (!form) return;
    emailjs
      .sendForm(
        "service_4sukxt9",
        "template_klzy7ot",
        form,
        "dXXBNkqlVdLj4PQMr"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }

      );

     return form.reset(), alert('Em breve responderei sua mensagem!')
  };

  return (
    <section id="contact">
      <h5>Procurando Dev?</h5>
      <h2>Estão aqui meus contatos</h2>

      <div className="contact__container container">
        <div className="contact__options">
          <article className="contact__option">
            <TfiEmail className="contact__option-icon" />
            <h4>E-mail</h4>
            <h5>tancker@hotmail.com</h5>
            <a href="mailto:tancker@hotmail.com">Mande sua mensagem</a>
          </article>
          <article className="contact__option">
            <AiOutlineMessage className="contact__option-icon" />
            <h4>Mensagem</h4>
            <h5>Marcelo Evangelista</h5>
            <a href="https://www.linkedin.com/in/marcelo-evangelista-847515175/">
              Mande sua mensagem
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>(85)9 99401626</h5>
            <a href="https://api.whatsapp.com/send?phone=85999568243">
              Mande sua mensagem
            </a>
          </article>
        </div>
        <form ref={formRef} onSubmit={sendEmail} className="form">
          <input
            type="text"
            name='name'
            placeholder="Nome completo"
            required
          />
          <input
            type='email'
            name="email"
            placeholder="Seu e-mail"
          />
          <textarea
            name="message"
            rows={7}
            placeholder="Sua mensagem"
            required
          ></textarea>
          <button
            className="btn btn-primary"
            type="submit"
          >
            Enviando sua mensagem
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
