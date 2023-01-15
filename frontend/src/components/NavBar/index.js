import './style.css';

import { Link } from "react-router-dom";
import SocialBar from '../SocialBar';

import camarao from '../../assets/img/camarao-logo.png';

export default function Navbar() {
    return (<>
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <div className="container">
                <Link className="navbar-brand" to='/'>
                    <img className='navbar-customlogo' src={camarao} alt="SUR Produções" />
                </Link>
                <Link className="navbar-brand" to='/'>SUR Produções</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive"
                    aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active"><Link className="nav-link" to='/'>Home</Link></li>
                        <li className="nav-item"><Link className="nav-link" to='/projetopampraieiro'>Projeto pampraieiro</Link></li>
                        <li className="nav-item"><Link className="nav-link" to='/quemsomos'>Quem somos</Link></li>
                        <li className="nav-item"><Link className="nav-link" to='/portfolio'>Portfólio</Link></li>
                        <li className="nav-item"><Link className="nav-link" to='/nossarede'>Nossa rede</Link></li>
                        <li className="nav-item"><Link className="nav-link" to='/contato'>Contato</Link></li>
                    </ul>
                    <SocialBar />
                </div>
            </div>
        </nav>
    </>);
}