import './style.css';

import { BsWhatsapp, BsTwitter, BsYoutube, BsFacebook, BsInstagram } from 'react-icons/bs';
import { FaBlogger } from 'react-icons/fa';

export default function Socialbar () {
    return (<>
        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3">
                <a className="link-dark" target="_blank" rel="noreferrer" href="https://api.whatsapp.com/send?phone=555391920073&text=Ol%C3%A1!">
                    <BsWhatsapp className='socialbar-redes' />
                </a>
            </li>
            <li className="ms-3">
                <a className="link-dark" target="_blank" rel="noreferrer" href="https://www.twitter.com/aresdenina/">
                    <BsTwitter className='socialbar-redes' />
                </a>
            </li>
            <li className="ms-3">
                <a className="link-dark" target="_blank" rel="noreferrer" href="https://www.youtube.com/aresdenina/">
                    <BsYoutube className='socialbar-redes' />
                </a>
            </li>
            <li className="ms-3">
                <a className="link-dark" target="_blank" rel="noreferrer" href="https://www.instagram.com/surproducoes/">
                    <BsFacebook className='socialbar-redes' />
                </a>
            </li>
            <li class="ms-3">
                <a class="text-muted" href="./blog.html">
                    <FaBlogger className='socialbar-redes'/>
                </a>
            </li>
            <li className="ms-3">
                <a className="link-dark" target="_blank" rel="noreferrer" href="https://www.instagram.com/surproducoes/">
                    <BsInstagram className='socialbar-redes' />
                </a>
            </li>
        </ul >
    </>);
}