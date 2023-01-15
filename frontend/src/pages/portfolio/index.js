
import './style.css';

import pdfbio from '../../assets/pdf/bio.pdf';

export default function Portfolio(props) {

    return (<>
        {/*<!-- SEÇÃO PORTFOLIO -->*/}
        <section className="py-5">
            <div className="container px-5 my-5 px-5">
                <h2 style={{ marginBottom: "35px" }} className="display-4">PORTFÓLIO</h2>

                <p className="lead">
                    Documento Disponível:
                </p>

                <p className="lead">
                    Acesso e Download do documento de Apresentação e Portfólio de trabalho da Produtora Cultural Angelina
                    Oliveira.
                </p>

                <div style={{ textAlign: "center" }}>
                    <a href={pdfbio} download>
                        <button className="btn btn-dark" style={{ margin: "10px" }}>Baixar PDF</button>
                    </a>
                </div>

                <div class="videoresponsivo-embedcontainer">
                    <iframe
                        title='pdfiframe'
                        src={pdfbio}
                        id="iframe_container"
                        frameborder="0"
                        webkitallowfullscreen=""
                        mozallowfullscreen=""
                        allow="autoplay; fullscreen"
                        height="1000px"
                        width="100%"
                    ></iframe>
                </div>

            </div>
        </section>
        {/*<!-- FIM DA PORTFOLIO -->*/}
    </>);
}