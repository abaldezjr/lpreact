import './style.css';

import whatsapp from '../../assets/img/socialbar/whatsapp.svg';
import twitter from '../../assets/img/socialbar/twitter.svg';
import youtube from '../../assets/img/socialbar/youtube.svg';
import facebook from '../../assets/img/socialbar/facebook.svg';
import instagram from '../../assets/img/socialbar/instagram.svg';

const Socialbar = () => {
    return (<>
        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3">
                <a className="text-muted" target="_blank" rel="noreferrer" href="https://api.whatsapp.com/send?phone=555391920073&text=Ol%C3%A1!">
                    <img className="socialbar-redes" src={whatsapp} alt="whatsapp" />
                </a>
            </li>
            <li className="ms-3">
                <a className="text-muted" target="_blank" rel="noreferrer" href="https://www.twitter.com/aresdenina/">
                    <img className="socialbar-redes" src={twitter} alt="twitter" />
                </a>
            </li>
            <li className="ms-3">
                <a className="text-muted" target="_blank" rel="noreferrer" href="https://www.youtube.com/aresdenina/">
                    <img className="socialbar-redes" src={youtube} alt="youtube" />
                </a>
            </li>
            <li className="ms-3">
                <a className="text-muted" target="_blank" rel="noreferrer" href="https://www.instagram.com/nauproducoes/">
                    <img className="socialbar-redes" src={facebook} alt="facebook" />
                </a>
            </li>
            <li className="ms-3">
                <a className="text-muted" target="_blank" rel="noreferrer" href="https://www.instagram.com/nauproducoes/">
                    <img className="socialbar-redes" src={instagram} alt="instagram" />
                </a>
            </li>
        </ul>
    </>);
}

export default Socialbar;