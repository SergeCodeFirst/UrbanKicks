import './Newcollection.css';

import new1 from '../../assets/images/new1.png';
import new2 from '../../assets/images/new2.png';
import new3 from '../../assets/images/new3.png';
import new4 from '../../assets/images/new4.png';
import new5 from '../../assets/images/new5.png';


const Newcollection = (props) => {
    return(
        <section className="new section" id="new">
    <h2 className="section-title">NEW COLLECTION</h2>

    <div className="new__container bd-grid">
        <div className="new__mens">
            <img src={new1} alt="new1" className="new__mens-img"/>
            <h3 className="new__title">Mens Shoes</h3>
            <span className="new__price">From $79.99</span>
            <a href="/" className="button-light">View Collection <i className="fa-solid fa-arrow-right button-icon"></i></a>
        </div>

        <div className="new__sneaker">
            <div className="new__sneaker-card">
                <img src={new2} alt="new2"  className="new__sneaker-img"/>
                <div className="new__sneaker-overlay">
                    <a href="/" className="button">Add to Card</a>
                </div>
            </div>

            <div className="new__sneaker-card">
                <img src={new3} alt="new3"  className="new__sneaker-img" />
                <div className="new__sneaker-overlay">
                    <a href="/" className="button">Add to Card</a>
                </div>
            </div>

            <div className="new__sneaker-card">
                <img src={new4} alt="new4"  className="new__sneaker-img" />
                <div className="new__sneaker-overlay">
                    <a href="/" className="button">Add to Card</a>
                </div>
            </div>

            <div className="new__sneaker-card">
                <img src={new5} alt="new5"  className="new__sneaker-img" />
                <div className="new__sneaker-overlay">
                    <a href="/" className="button">Add to Card</a>
                </div>
            </div>
        </div>
    </div>
    </section>
    )
}

export default Newcollection;