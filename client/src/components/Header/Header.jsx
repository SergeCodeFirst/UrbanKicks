import './Header.css'
// images
import homeImage from '../../assets/images/imghome.png';

const Header = (props) => {
    return (
        <section className="header" id="header">
            <div className="header__container bd-grid">
                <div className="header__sneaker">
                    <div className="header__shape"></div>
                    <img src={homeImage} alt="header" className="header__img" />
                </div>

                <div className="header__data">
                    <span className="header__new">New in</span>
                    <h1>YEEZY BOOST <br/> SPLY - 360</h1>
                    <p className="header__description">Explore the new collections of sneakers</p>
                    <a href="/" className="button">Explore Now</a>
                </div>
            </div>
        </section>
    )
}


export default Header;