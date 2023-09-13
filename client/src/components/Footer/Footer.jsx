import './Footer.css'

const Footer = (props) => {
    return(
        <footer className="footer section">
        <div className="footer__container bd-grid">
            <div className="footer__box">
                <h3 className="footer__title">UrbanKicks</h3>
                <p className="footer__description">New collection of shoes 2023.</p>
            </div>

            <div className="footer__box">
                <h3 className="footer__title">EXPLORE</h3>
                <ul>
                    <li><a href="/home" className="footer__link">Home</a></li>
                    <li><a href="/featured" className="footer__link">Featured</a></li>
                    <li><a href="/women" className="footer__link">Women</a></li>
                    <li><a href="/new" className="footer__link">New</a></li>
                </ul>
            </div>

            <div className="footer__box">
                <h3 className="footer__title">SUPPORT</h3>
                <ul>
                    <li><a href="/" className="footer__link">Product Help</a></li>
                    <li><a href="/" className="footer__link">Costumer Care</a></li>
                    <li><a href="/" className="footer__link">Authorized service</a></li>
                </ul>
            </div>

            <div className="footer__box">
                <a href="/" className="footer__social"><i className="fa-brands fa-facebook-f"></i></a>
                <a href="/" className="footer__social"><i className="fa-brands fa-instagram"></i></a>
                <a href="/" className="footer__social"><i className="fa-brands fa-tiktok"></i></a>
                <a href="/" className="footer__social"><i className="fa-brands fa-pinterest"></i></a>
            </div>
        </div>

        <p className="footer__copy">2023 UrbanKicks. All right reserved</p>
    </footer>
    )
}

export default Footer;