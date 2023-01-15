import './style.css';

import { Link } from 'react-router-dom';

export default function Projetopampraieiro () {
    return (<>
        <main>

            {/*<!-- SEÇÃO PROJETO PAMPRAIEIRO -->*/}
            <section className="py-5">
                <div className="container px-5 my-5 px-5">
                    <h2 style={{ marginBottom: "35px" }} className="display-4">PROJETO PAMPRAIEIRO</h2>

                    <p class="lead text-justify">
                        Conheça o projeto pampraieiro e a diversidade de artistas e canções praianas que imprimem a estética
                        PamPraieira,
                        conectando Rio Grande do Sul, Uruguai e Argentina através de sua costa Pampiana.
                    </p>
                    <p class="lead text-justify">
                        Acesse o blog Pampraieiro
                    </p>
                    <p>
                        <Link class=" btn btn-dark" to='/blog'>Blog Pampraieiro</Link>
                    </p>

                    <div className="videoresponsivo-embedcontainer">
                        <iframe
                            title="slide prezi"
                            src="https://prezi.com/p/embed/sumqw1tohlva/"
                            id="iframe_container"
                            frameborder="0"
                            webkitallowfullscreen=""
                            mozallowfullscreen=""
                            allowfullscreen=""
                            allow="autoplay;fullscreen"
                            height="315"
                            width="560">
                        </iframe>
                    </div>

                    <div className="videoresponsivo-embedcontainer">
                        <iframe
                            src="https://www.youtube.com/embed/KYbzTjrEi1w"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen="">
                        </iframe>
                    </div>

                </div>
            </section>
            {/*<!-- FIM DA SEÇÃO PROJETO PAMPRAIEIRO -->*/}

        </main>

    </>);
}