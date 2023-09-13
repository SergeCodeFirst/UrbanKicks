import './Collection.css';

import collection1 from  '../../assets/images/collection1.png';
import collection2 from  '../../assets/images/collection2.png';

const Collection = (props) => {
    return(
        <section className="collection section">
        <h2 className="section-title">COLLECTION</h2>
        <div className="collection__container bd-grid">
            <div className="collection_card">
                <div className="collection__data">
                    <h3 className="collection__name">Nike</h3>
                    <p className="collection__description">New collection 2020</p>
                    <a href="/" className="button-light"> Buy now<i className="fa-solid fa-arrow-right button-icon"></i></a>
                </div>
                <img className="collection__img" src={collection1} alt="collection2" />
            </div>

            <div className="collection_card">
                <div className="collection__data">
                    <h3 className="collection__name">Addidas</h3>
                    <p className="collection__description">New collection 2020</p>
                    <a href="/" className="button-light"> Buy now<i className="fa-solid fa-arrow-right button-icon"></i></a>
                </div>
                <img className="collection__img"  src={collection2} alt="collection2" />
            </div>
        </div>
    </section>
    )
}

export default Collection;