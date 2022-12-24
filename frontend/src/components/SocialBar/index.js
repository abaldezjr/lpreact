import './style.css';

const Socialbar = () => {
    return (<>
        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3">
                <a className="text-muted" href="https://api.whatsapp.com/send?phone=555391920073&text=Ol%C3%A1!">
                    <img className="socialbar-redes" src="./assets/img/socialbar/whatsapp.svg" alt="whatsapp" />
                </a>
            </li>
            <li className="ms-3">
                <a className="text-muted" href="https://www.twitter.com/aresdenina/">
                    <img className="socialbar-redes" src="./assets/img/socialbar/twitter.svg" alt="twitter" />
                </a>
            </li>
            <li className="ms-3">
                <a className="text-muted" href="https://www.youtube.com/aresdenina/">
                    <img className="socialbar-redes" src="../../assets/img/socialbar/youtube.svg" alt="youtube" />
                </a>
            </li>
            <li className="ms-3">
                <a className="text-muted" href="https://www.instagram.com/nauproducoes/">
                    <img className="socialbar-redes" src="../../assets/img/socialbar/facebook.svg" alt="facebook" />
                </a>
            </li>
            <li className="ms-3">
                <a className="text-muted" href="https://www.instagram.com/nauproducoes/">
                    <img className="socialbar-redes" src="../../assets/img/socialbar/instagram.svg" alt="instagram" />
                </a>
            </li>
        </ul>
    </>);
}

export default Socialbar;