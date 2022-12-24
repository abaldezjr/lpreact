import './style.css';

const Contato = () => {
    return (<>
        <section className="bg-light py-5">
            <div className="container px-5 my-5 px-5">
                <div className="text-center mb-5">
                    <h2 className="display-4">CONTATO</h2>
                    <p className="lead mb-0">Nós amamos te ouvir!</p>
                </div>
                <div className="row gx-5 justify-content-center">
                    <div className="col-lg-6">
                        <form id="contactForm" data-sb-form-api-token="API_TOKEN" action="https://formsubmit.co/abaldezjr@gmail.com"
                            method="POST">
                                <input type="hidden" name="_next" value="http://localhost:3000/sucesso" />
                            <input type="hidden" name="_cc" value="abaldezjr@outlook.com" />
                            <input type="hidden" name="_autoresponse"
                                value="Recebemos sua mensagem, obrigado pelo contato e logo responderemos!" />
                            <div className="form-floating mb-3">
                                <input className="form-control" id="name" name="name" type="text" placeholder="Enter your name..."
                                    data-sb-validations="required" required />
                                <label for="name">Nome</label>
                                <div className="invalid-feedback" data-sb-feedback="name:required">O nome é obrigatório.</div>
                            </div>
                            <div className="form-floating mb-3">
                                <input className="form-control" id="email" name="email" type="email" placeholder="name@example.com"
                                    data-sb-validations="required,email" required />
                                <label for="email">Email</label>
                                <div className="invalid-feedback" data-sb-feedback="email:required">O email é obrigatório.</div>
                                <div className="invalid-feedback" data-sb-feedback="email:email">O email não é valido.</div>
                            </div>
                            <div className="form-floating mb-3">
                                <input className="form-control" id="name" name="subject" type="text" placeholder="Enter your name..."
                                    data-sb-validations="required" required />
                                <label for="subject">Assunto</label>
                                <div className="invalid-feedback" data-sb-feedback="name:required">O nome é obrigatório.</div>
                            </div>
                            <div className="form-floating mb-3">
                                <textarea className="form-control" id="message" type="text" placeholder="Enter your message here..."
                                    style={{ height: "10rem" }} data-sb-validations="required" required></textarea>
                                <label for="message">Mensagem</label>
                                <div className="invalid-feedback" data-sb-feedback="message:required">A mensagem é obrigatória.</div>
                            </div>
                            <div className="d-grid"><button className="btn btn-dark btn-lg" id="submitButton"
                                type="submit">Enviar email</button></div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </>);
}

export default Contato;