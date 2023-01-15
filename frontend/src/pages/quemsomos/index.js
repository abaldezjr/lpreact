import './style.css';

import perfilAngelina from '../../assets/img/quemsomos/nina.jfif';

export default function Quemsomos () {
    return (<>

        <main>

            {/*<!-- SEÇÃO QUEM SOMOS -->*/}

            <section className="py-5">
                <div className="container px-5 my-5 px-5">
                    <h2 style={{ marginBottom: "35px" }} className="display-4">QUEM SOMOS</h2>
                    <div className="row row-cols-1 row-cols-md-2 g-2">
                        <div className="col">
                            <img src={perfilAngelina} alt="Angelina Oliveira" width="100%" />
                        </div>
                        <div className="col">
                            <p className="lead" style={{ textAlign: "justify" }}>
                                A Sur Produções é um espaço digital para divulgação de trabalhos culturais e colaborativos realizados pela
                                produtora e pesquisadora independente Angelina Oliveira e uma rede de artistas do Brasil Subtropical, Rio
                                Grande, que juntes estão trabalhando na criação da Estética Pampraieira: Mar Sur.
                            </p>
                            <p className="lead" style={{ textAlign: "justify" }}>
                                Diretrizes: políticas públicas de Cultura Viva e Cultura livre
                            </p>
                            <p className="lead">
                                Objetivos:
                                <ul className="lead">
                                    <li>Fomentar a implementação da política pública de cultura viva na cidade do Rio Grande. </li>
                                    <li>Criação de Rede entre trabalhadores locais e profissionais da área da economia da cultura de centros
                                        culturais.</li>
                                    <li>Abrir o debate sobre cidades criativas e uma futura implementação de um curso de música e produção
                                        fonográfica na Furg.</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                    <div style={{ textAlign: "center", padding: "10px" }}>
                        <a className="btn btn-dark" href="./portfolio">Visualizar portfólio</a>
                    </div>
                </div>
            </section>

        </main>

    </>);
}