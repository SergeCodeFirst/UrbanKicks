import { useState } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css'

// import featured3 from '../../assets/images/featured3.png'
import { ProductInCard } from '../../stores/TempData';
import { formatCurenccy } from '../../utils/formatCurrency'

const Navbar = (props) => {
    const [navOpen, setNavOpen] = useState(false)
    const [shopCardOpen, setShopCardOpen] = useState(false)

    const toggleNavBar = () => {
        setShopCardOpen(false)
        setNavOpen(!navOpen)
    }

    const toogleShopCard = () => {
        setNavOpen(false)
        setShopCardOpen(!shopCardOpen)
    }

    const quantity = 2;
    return (
        <header className='l-header' id="header">
            <nav className="nav bd-grid">
                <div className="nav__toggle" id="nav-toggle" onClick={toggleNavBar}>
                    <i className="fa-solid fa-bars" ></i>
                </div>
                <a href="/" style={{ textDecoration: 'none', color: '#141414' }} className="nav__logo">Rody</a>

                <div className={navOpen ? "nav__menu show" : "nav__menu"} id="nav-menu">
                    <ul className="nav__list">
                        <li className="nav__item"><a href="/" className="nav__link">Home</a></li>
                        <li className="nav__item"><Link to="featured" smooth={true} spy={true} offset={-50} duration={500} className="nav__link" id="link" onClick={toggleNavBar}>Featured</Link></li>
                        <li className="nav__item"><Link to="women" smooth={true} spy={true} offset={-50} duration={500} className="nav__link" id="link" onClick={toggleNavBar}>Women</Link></li>
                        <li className="nav__item"><Link to="new" smooth={true} spy={true} offset={-50} duration={500} className="nav__link" id="link" onClick={toggleNavBar} >New</Link></li>
                        <li className="nav__item"><a href="shop" className="nav__link">Shop</a></li>
                    </ul>
                </div>

                <div className="nav__shop">
                    <span className='card_icon_group'>
                        <i className="fa-solid fa-bag-shopping" onClick={toogleShopCard}></i>
                        <span className='card_item_number'>{ProductInCard.length}</span>
                    </span>
                    <div className={shopCardOpen ? "card__menu show_card" : "card__menu"}>
                        {
                            ProductInCard.length === 0 ?
                                <div className="sad_card">
                                    <i className="fa-regular fa-face-sad-tear"></i>
                                    <p>Your card is empty</p>
                                </div>
                                :
                                <div className="card__item_wrapper">
                                    {
                                        ProductInCard.map((product) => (
                                            <article key={product.id} className='card__item_article'>
                                                <div className="card__item_img">
                                                    <img src={product.image} alt="featured3" className='items__img' />
                                                </div>
                                                <div className="card__item__info">
                                                    <p className='card__item__title'> { product.name} ...<br /> <span className='card__item__price'> { formatCurenccy(product.price) }</span> </p>
                                                    <div className="item__counter">
                                                        { quantity === 1 ?
                                                        <i className="fa-solid fa-trash small_font" ></i>
                                                        :
                                                        <i className="fa-solid fa-minus small_font" ></i>
                                                        }
                                                        <span className='small_font'>{quantity}</span>
                                                        <i className="fa-solid fa-plus small_font" ></i>
                                                    </div>
                                                </div>
                                            </article>
                                        ))
                                    }

                                    <button>Checkout</button>
                                </div>
                        }
                    </div>
                </div>


            </nav>
        </header>
    )
}

export default Navbar;