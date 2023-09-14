import { useState } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css'

const Navbar = (props) =>{
    const [navOpen, setNavOpen] = useState(false)

    const toggleNavBar = () => {
        setNavOpen(!navOpen)
    }
    return(
        <header className='l-header' id="header">
            <nav className="nav bd-grid">
                <div className="nav__toggle" id="nav-toggle" onClick={toggleNavBar}>
                    <i className="fa-solid fa-bars" ></i>
                </div>
                <a href="/" style={{textDecoration: 'none', color:'#141414' }} className="nav__logo">Rody</a>

                <div className={navOpen? "nav__menu show" : "nav__menu"} id="nav-menu">
                    <ul className="nav__list">
                        <li className="nav__item"><a href="/" className="nav__link">Home</a></li>
                        <li className="nav__item"><Link to="featured" smooth={true} spy={true} offset={-50} duration={500} className="nav__link" id="link" onClick={toggleNavBar}>Featured</Link></li>
                        <li className="nav__item"><Link to="women" smooth={true} spy={true} offset={-50} duration={500} className="nav__link" id="link" onClick={toggleNavBar}>Women</Link></li>
                        <li className="nav__item"><Link to="new" smooth={true} spy={true} offset={-50} duration={500} className="nav__link" id="link" onClick={toggleNavBar} >New</Link></li>
                        <li className="nav__item"><a href="shop" className="nav__link">Shop</a></li>
                    </ul>
                </div>

                <div className="nav__shop">
                    <i className="fa-solid fa-bag-shopping"></i>
                </div>

            </nav>
        </header>
    )
}

export default Navbar;