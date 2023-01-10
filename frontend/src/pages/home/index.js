import './style.css';

import { Link } from "react-router-dom";

import carrosselImage1 from '../../assets/img/carrossel/1.png';
import carrosselImage2 from '../../assets/img/carrossel/2.png';
import carrosselImage3 from '../../assets/img/carrossel/3.png';

import lojaImage1 from '../../assets/img/loja/1.png';
import lojaImage2 from '../../assets/img/loja/2.png';
import lojaImage3 from '../../assets/img/loja/3.png';

const Home = () => {

    const carrossel1 = {
        backgroundImage: `url(${carrosselImage1})`
    }

    const carrossel2 = {
        backgroundImage: `url(${carrosselImage2})`
    }

    const carrossel3 = {
        backgroundImage: `url(${carrosselImage3})`
    }



    return (<>

        {/*<!-- CARROSSEL -->*/}
        <header>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"
                        aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" style={carrossel1}>
                        <div className="carousel-caption">
                            <Link className="btn btn-dark" to='/quemsomos'>Saiba mais</Link>
                        </div>
                    </div>
                    <div className="carousel-item" style={carrossel2}>
                        <div className="carousel-caption">
                            <Link className="btn btn-dark" to='/projetopampraieiro'>Saiba mais</Link>
                        </div>
                    </div>
                    <div className="carousel-item" style={carrossel3}>
                        <div className="carousel-caption">
                            <Link className="btn btn-dark" to='/projetopampraieiro'>Saiba mais</Link>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Anterior</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Posterior</span>
                </button>
            </div>
        </header>
        {/* <!-- FIM DO CARROSSEL --> */}

        <main>

            <div className="container">
                <hr className="featurette-divider" />
            </div>

            <section>

                <div className="container">

                    {/*<!-- LOJA -->*/}

                    <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                        <h1 className="display-4">LOJA</h1>
                        <p className="lead">Confira os nossos produtos.</p>
                    </div>

                    <div className="row row-cols-1 row-cols-md-3 g-3">

                        {/*<!-- CANECAS -->*/}
                        <div className="col">
                            <div className="card h-100">
                                <img src={lojaImage1} className="card-img-top" alt="Canecas" />
                                <div className="card-body">
                                    <h5 className="card-title">Canecas</h5>
                                    <p className="card-text">Coleção completa no instagram.</p>
                                    <div className="d-grid gap-2">
                                        <a
                                            className="btn btn-dark"
                                            target="_blank" rel="noreferrer"
                                            href="https://www.instagram.com/surproducoes/"
                                        >Acesse o site</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*<!-- FIM CANECAS -->*/}

                        {/*<!-- ROUPAS -->*/}

                        <div className="col">
                            <div className="card h-100">
                                <img src={lojaImage2} className="card-img-top" alt="Roupas" />
                                <div className="card-body">
                                    <h5 className="card-title">Roupas</h5>
                                    <p className="card-text">Coleção completa no instagram.</p>
                                    <div className="d-grid gap-2">
                                        <a
                                            className="btn btn-dark"
                                            target="_blank" rel="noreferrer"
                                            href="https://www.instagram.com/surproducoes/"
                                        >Acesse o site</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*<!-- FIM ROUPAS -->*/}

                        {/*<!-- BOLSAS -->*/}
                        <div className="col">
                            <div className="card h-100">
                                <img src={lojaImage3} className="card-img-top" alt="Bolsas" />
                                <div className="card-body">
                                    <h5 className="card-title">Bolsas</h5>
                                    <p className="card-text">Coleção completa no instagram.</p>
                                    <div className="d-grid gap-2">
                                        <a
                                            className="btn btn-dark"
                                            target="_blank" rel="noreferrer"
                                            href="https://www.instagram.com/surproducoes/"
                                        >Acesse o site</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*<!-- FIM BOLSAS -->*/}

                    </div>
                    {/*<!-- FIM DA LOJA -->*/}

                </div>
            </section>

            <div className="container">
                <hr className="featurette-divider" />
            </div>

            {/*<!-- GOOGLE MAPAS -->*/}
            <div className="container">
                <iframe
                    title="mapa cassino"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19102.950809072103!2d-52.167975346065454!3d-32.178447337055935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9511860738879071%3A0x4667872adf766709!2sCassino%20-%20Rio%20Grande%2C%20RS%2C%2096206-040!5e0!3m2!1spt-BR!2sbr!4v1668567361264!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="450"
                    style={{ border: "0px" }}
                    loading="lazy"
                ></iframe>
            </div>
            {/*<!-- FIM DO GOOGLE MAPS -->*/}

        </main>

    </>);
}

export default Home;