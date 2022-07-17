import "./Icons.css";

export const Icons = () => {

    return (
        <>
            <div className="Container">

                <div className="loader">
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

            </div>

            <div id="cursor">

                <a href="https://alunos2.b7web.com.br/media/certificates/certificado_3585115.jpg" target="_blank">
                    <i className="bi bi-filetype-html" title="Certificado HTML 5"></i>
                </a>
                <a href="https://alunos2.b7web.com.br/media/certificates/certificado_3585115.jpg"
                    target="_blank"><i className="bi bi-filetype-css" title="Certificado CSS 3"></i></a>
                <a href="https://alunos2.b7web.com.br/media/certificates/certificado_1450239.jpg"
                    target="_blank"><i className="bi bi-filetype-js" title="Certificado Javasrcipt"></i></a>
                <a href="https://alunos2.b7web.com.br/media/certificates/certificado_3479737.jpg"
                    target="_blank"><i className="bi bi-filetype-tsx"
                        title="Certificado Typescript"></i></a>
                <a href="https://alunos2.b7web.com.br/media/certificates/certificado_8533619.jpg"
                    target="_blank"><i className="bi bi-filetype-jsx" title="Certificado React,js"></i></a>
                <a href="https://alunos2.b7web.com.br/media/certificates/certificado_6145494.jpg"
                    target="_blank"><i className="bi bi-bootstrap" title="Certificado Bootstrap 4"></i></a>
            </div>
        </>
    )
}