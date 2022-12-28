import './style.css';

import { BsWhatsapp, BsTwitter, BsYoutube, BsFacebook, BsInstagram } from 'react-icons/bs';

const Socialbar = () => {
    return (<>
        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3">
                <a className="link-dark" target="_blank" rel="noreferrer" href="https://api.whatsapp.com/send?phone=555391920073&text=Ol%C3%A1!">
                    <BsWhatsapp className='socialbar-redes'/>
                </a>
            </li>
            <li className="ms-3">
                <a className="link-dark" target="_blank" rel="noreferrer" href="https://www.twitter.com/aresdenina/">
                    <BsTwitter className='socialbar-redes'/>
                </a>
            </li>
            <li className="ms-3">
                <a className="link-dark" target="_blank" rel="noreferrer" href="https://www.youtube.com/aresdenina/">
                    <BsYoutube className='socialbar-redes'/>
                </a>
            </li>
            <li className="ms-3">
                <a className="link-dark" target="_blank" rel="noreferrer" href="https://www.instagram.com/nauproducoes/">
                    <BsFacebook className='socialbar-redes'/>
                </a>
            </li>
            <li className="ms-3">
                <a className="link-dark" target="_blank" rel="noreferrer" href="https://www.instagram.com/nauproducoes/">
                    <BsInstagram className='socialbar-redes'/>
                </a>
            </li>
        </ul >
    </>);
}

export default Socialbar;