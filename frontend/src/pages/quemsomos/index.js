import './style.css';

import perfilAngelina from '../../assets/img/quemsomos/perfil-angelina.png';

const Quemsomos = () => {
    return (<>

        <main>

            {/*<!-- SEÇÃO QUEM SOMOS -->*/}

            <section className="py-5">
                <div className="container px-5 my-5 px-5">
                    <h2 style={{ marginBottom: "35px" }} className="display-4">QUEM SOMOS</h2>

                    {/* <!-- TEXTO --> */}
                    <p className="lead text-justify">"Sur Produções</p>
                    <p className="lead text-justify">O que é</p>
                    <p className="lead text-justify">
                        Espaço digital para divulgação de trabalhos culturais e colaborativos realizados pela produtora e
                        pesquisadora
                        independente Angelina Oliveira e uma rede de artistas do Brasil Subtropical, Rio Grande, que juntes estão
                        trabalhando na criação da Estética Pampraieira: Mar Sur.
                    </p>
                    <p className="lead text-justify">
                        * resumo de trampo meu
                    </p>
                    <p className="lead text-justify">
                        . Diretrizes *política pública de Cultura Viva e Cultura livre .
                    </p>
                    <p className="lead text-justify">
                        Objetivos : fomentar a implementação da política pública de cultura viva na cidade do Rio Grande.
                    </p>
                    <p className="lead text-justify">
                        Criação de Rede entre trabalhadores locais e profissionais da área da economia da cultura de centros
                        culturais.
                    </p>
                    <p className="lead text-justify">
                        * abrir o debate sobre cidades criativas e uma futura implementação de um curso de música e produção
                        fonográfica na Furg.
                    </p>
                    <p className="lead text-justify">
                        Meus corres meu currículo Vida
                        Como me construí uma produtora cultural pesquisadora independente no extremo Brasil Subtropical. "
                    </p>
                    {/* <!-- FIM DO TEXTO --> */}

                    {/* <!-- FOTOS --> */}
                    <div>
                        <img
                            className="featurette-image img-fluid mx-auto img-thumbnail"
                            src={perfilAngelina}
                            alt="Angelina Oliveira Produtora Cultural" />
                    </div>
                    {/* <!-- FIM DAS FOTOS --> */}
                </div>
            </section>

        </main>

    </>);
}

export default Quemsomos;