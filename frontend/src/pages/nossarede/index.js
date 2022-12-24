import './style.css';

import { Link } from "react-router-dom";

const Nossarede = () => {
    return (<>

        <main>

            {/*<!-- SEÇÃO NOSSA REDE -->*/}

            <section className="bg-light py-5">

                <div className="container px-5 my-5 px-5">

                    <h2 style={{ marginBottom: "35px" }} className="display-4">NOSSA REDE</h2>
                    <div className="row row-cols-1 row-cols-md-3 g-3">

                        {/*<!-- SALVADOR -->*/}
                        <div className="col">
                            <div className="card h-100">
                                <img
                                    height="250"
                                    style={{ objectFit: "cover" }}
                                    src="./assets/img/nossarede/salvador.png"
                                    className="card-img-top"
                                    alt="omega"
                                />
                                <div className="card-body">
                                    <h5 className="card-title">Salvador</h5>
                                    <p className="card-text">José Luis Soares Salvador.</p>
                                    <div className="d-grid gap-2">
                                        <Link
                                            className="btn btn-dark"
                                            to="https://salvador34.webnode.page/">Acesse o site</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*<!-- FIM SALVADOR -->*/}

                        {/*<!-- OMEGA -->*/}
                        <div className="col">
                            <div className="card h-100">
                                <img
                                    height="250" style={{ objectFit: "cover" }}
                                    src="./assets/img/nossarede/wrap.gif"
                                    className="card-img-top"
                                    alt="omega"
                                />
                                <div className="card-body">
                                    <h5 className="card-title">Omega</h5>
                                    <p className="card-text">Sparks Omega.</p>
                                    <div className="d-grid gap-2">
                                        <Link
                                            className="btn btn-dark"
                                            to="https://sparks-omega.neocities.org/">Acesse o site</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*<!-- FIM OMEGA -->*/}

                        {/*<!-- MALOCA -->*/}
                        <div className="col">
                            <div className="card h-100">
                                <img
                                    height="250"
                                    style={{ objectFit: "cover" }}
                                    src="./assets/img/nossarede/maloca.jpg"
                                    className="card-img-top"
                                    alt="omega"
                                />
                                <div className="card-body">
                                    <h5 className="card-title">Maloca</h5>
                                    <p className="card-text">Maloca colaborativa.</p>
                                    <div className="d-grid gap-2">
                                        <Link
                                            className="btn btn-dark"
                                            to="https://www.facebook.com/malocacolaborativa">Acesse o site</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*<!-- FIM MALOCA -->*/}

                    </div>
                </div>
            </section>
            {/*<!-- FIM DA SEÇÃO NOSSA REDE -->*/}

        </main>

    </>);
}

export default Nossarede;