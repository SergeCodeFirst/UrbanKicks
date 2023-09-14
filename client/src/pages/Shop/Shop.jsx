import './Shop.css'

import featured1 from '../../assets/images/featured1.png'
import featured2 from '../../assets/images/featured2.png'
import featured3 from '../../assets/images/featured3.png'

import new2 from '../../assets/images/new2.png'
import new3 from '../../assets/images/new3.png'
import new4 from '../../assets/images/new4.png'
import new5 from '../../assets/images/new5.png'

import women1 from '../../assets/images/women1.png'
import women2 from '../../assets/images/women2.png'
import women3 from '../../assets/images/women3.png'
import women4 from '../../assets/images/women4.png'

const Shop = (props) => {
    return(
        <main className="l-main">
            <section className="featured section" id="shop">
            <h2 className="section-title">ALL Products</h2>

            <div className="featured__container bd-grid">
                <article className="sneaker">
                    <img src={featured1} alt="featured1"  className="sneaker__img"/>
                    <span className="sneaker__name">Nike Jordan</span>
                    <span className="sneaker__price">$143.99</span>
                    <a href="/" className="button-light">Add to Card <i className="fa-solid fa-arrow-right button-icon"></i></a>
                </article>

                <article className="sneaker">
                    <div className="sneaker__sale">Sale</div>
                    <img src={featured2} alt="featured2"  className="sneaker__img"/>
                    <span className="sneaker__name">Nike Jordan</span>
                    <span className="sneaker__price">$143.99</span>
                    <a href="/" className="button-light">Add to Card <i className="fa-solid fa-arrow-right button-icon"></i></a>
                </article>

                <article className="sneaker">
                    <img src={featured3} alt="featured3"  className="sneaker__img"/>
                    <span className="sneaker__name">Nike Free RN</span>
                    <span className="sneaker__price">$143.99</span>
                    <a href="/" className="button-light">Add to Card <i className="fa-solid fa-arrow-right button-icon"></i></a>
                </article>

                <article className="sneaker">
                    <img src={new2} alt="new2" className="sneaker__img"/>
                    <span className="sneaker__name">Nike Sply</span>
                    <span className="sneaker__price">$79.99</span>
                    <a href="/" className="button-light">Add to Card <i className="fa-solid fa-arrow-right button-icon"></i></a>
                </article>

                <article className="sneaker">
                    <img src={new3} alt="new3" className="sneaker__img"/>
                    <span className="sneaker__name">Nike Sply</span>
                    <span className="sneaker__price">$79.99</span>
                    <a href="/" className="button-light">Add to Card <i className="fa-solid fa-arrow-right button-icon"></i></a>
                </article>

                <article className="sneaker">
                    <img src={new4} alt="new4" className="sneaker__img"/>
                    <span className="sneaker__name">Nike Sply</span>
                    <span className="sneaker__price">$79.99</span>
                    <a href="/" className="button-light">Add to Card <i className="fa-solid fa-arrow-right button-icon"></i></a>
                </article>

                <article className="sneaker">
                    <img src={new5} alt="new5" className="sneaker__img"/>
                    <span className="sneaker__name">Nike Sply</span>
                    <span className="sneaker__price">$79.99</span>
                    <a href="/" className="button-light">Add to Card <i className="fa-solid fa-arrow-right button-icon"></i></a>
                </article>

                <article className="sneaker">
                    <img src={women1} alt="women1" className="sneaker__img"/>
                    <span className="sneaker__name">Nike Women</span>
                    <span className="sneaker__price">$129.99</span>
                    <a href="/" className="button-light">Add to Card <i className="fa-solid fa-arrow-right button-icon"></i></a>
                </article>

                <article className="sneaker">
                    <img src={women2} alt="women2" className="sneaker__img"/>
                    <span className="sneaker__name">Nike Women</span>
                    <span className="sneaker__price">$129.99</span>
                    <a href="/" className="button-light">Add to Card <i className="fa-solid fa-arrow-right button-icon"></i></a>
                </article>

                <article className="sneaker">
                    <img src={women3} alt="women3" className="sneaker__img"/>
                    <span className="sneaker__name">Nike Women</span>
                    <span className="sneaker__price">$129.99</span>
                    <a href="/" className="button-light">Add to Card <i className="fa-solid fa-arrow-right button-icon"></i></a>
                </article>

                <article className="sneaker">
                    <img src={women4} alt="women4" className="sneaker__img"/>
                    <span className="sneaker__name">Nike Women</span>
                    <span className="sneaker__price">$129.99</span>
                    <a href="/" className="button-light">Add to Card <i className="fa-solid fa-arrow-right button-icon"></i></a>
                </article>

            </div>
            <div className="sneaker__pages bd-grid">
                <div>
                    <span className="sneaker__pag">1</span>
                    <span className="sneaker__pag">2</span>
                    <span className="sneaker__pag">3</span>
                    <span className="sneaker__pag">4</span>
                    <span className="sneaker__pag">&#8594;</span>
                </div>
            </div>
        </section>

        </main>

    )
}

export default Shop;