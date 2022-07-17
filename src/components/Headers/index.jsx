import { Link } from 'react-router-dom';

import './Header.css';

export const Header = (props) => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-link" to="/">Home</Link>
                            <Link className="nav-link" to="/pages/Cocacola">Coca Cola</Link>
                            <Link className="nav-link" to="/pages/Cursos">Cursos</Link>
                            <Link className="nav-link" to="#">Pricing</Link>
                        </div>
                    </div>
                </div>
                <div className=" icons">
                    <a href="https://github.com/veih" target="_blank" rel="noopener noreferrer">

                        <i className="bi bi-github" id="github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/marcelo-evangelista-847515175/" target="_blank"
                        rel="noopener noreferrer">
                        <i className="bi bi-linkedin" id="linkedin"></i>

                    </a>
                    <a href="https://www.instagram.com/marceloveih/" target="_blank" rel="noopener noreferrer">

                        <i className="bi bi-instagram" id="instagram"></i>
                    </a>
                    <a href="https://www.facebook.com/veihbabal/" target="_blank" rel="noopener noreferrer">

                        <i className="bi bi-facebook" id="facebook"></i>
                    </a>
                    <a href="#(85)999568243" onClick={() => { alert("Para contato, entre em contato pelo telefone: (85)9995-68243") }}
                        rel="noopener noreferrer">

                        <i className="bi bi-whatsapp" id="whatsapp"></i>
                    </a>
                    <a href="https://twitter.com/Babal92258376" target="_blank" rel="noopener noreferrer">

                        <i className="bi bi-twitter" id="twitter"></i>
                    </a>
                </div>
            </nav>
        </header>
    )
}