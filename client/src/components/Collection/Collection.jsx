import './Collection.css';

import collection1 from  '../../assets/images/collection1.png';
import collection2 from  '../../assets/images/collection2.png';

const Collection = (props) => {
    return(
        <section class="collection section">
        <h2 class="section-title">COLLECTION</h2>
        <div class="collection__container bd-grid">
            <div class="collection_card">
                <div class="collection__data">
                    <h3 class="collection__name">Nike</h3>
                    <p class="collection__description">New collection 2020</p>
                    <a href="/" class="button-light"> Buy now<i className="fa-solid fa-arrow-right button-icon"></i></a>
                </div>
                <img class="collection__img" src={collection1} alt="collection2" />
            </div>

            <div class="collection_card">
                <div class="collection__data">
                    <h3 class="collection__name">Addidas</h3>
                    <p class="collection__description">New collection 2020</p>
                    <a href="/" class="button-light"> Buy now<i className="fa-solid fa-arrow-right button-icon"></i></a>
                </div>
                <img class="collection__img"  src={collection2} alt="collection2" />
            </div>
        </div>
    </section>
    )
}

export default Collection;