import logo from './img/animalshelterlogo.png';
import { Link } from 'react-router-dom';

const Nav = () => (


    <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
            <a className="navbar-item" href="#">
                <img src={logo} width="112" height="28"/>
            </a>

            <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
                <a className="navbar-item">
                    <Link to='/' className="button is-light">
                        Home
                    </Link>
                </a>

                <a className="navbar-item">
                    <Link to='/about' className="button is-light">
                        About
                    </Link>
                </a>

                <a className="navbar-item">
                    <Link to='/animals' className="button is-light">
                        Animals
                    </Link>
                </a>

                <a className="navbar-item">
                    <Link to='/adoption' className="button is-light">
                        Adoption
                    </Link>
                </a>

                <a className="navbar-item">
                    <Link to='/donate' className="button is-light">
                        Donate
                    </Link>
                </a>

                <a className="navbar-item">
                    <Link to='/petcare' className="button is-light">
                        Pet Care
                    </Link>
                </a>

                <a className="navbar-item">
                    <Link to='/contact' className="button is-light">
                        Contact
                    </Link>
                </a>
                
                <a className="navbar-item">
                    <Link to='/administrative' className="button is-light">
                        Administrative
                    </Link>
                </a>

            </div>
        </div>
    </nav>


);

export default Nav;