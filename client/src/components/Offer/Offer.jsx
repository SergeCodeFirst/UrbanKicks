import './Offer.css'

import OffertPic from '../../assets/images/offert.png'

const Offer = (props) => {
    return(
        <section className="offer section">
        <div className="offer__container bd-grid">
            <div className="offer__data">
                <h3 className="offer__title"> 50% OFF</h3>
                <p className="offer__description">In Addidas Superstart sneakers</p>
                <a href="#" className="button">Shop Now</a>
            </div>

            <img src={OffertPic} alt="shoes" className="offer__img" />
        </div>
    </section>
    )
}

export default Offer;