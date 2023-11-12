import './Featured.css'
import React from 'react';

import axios from 'axios';
import { Products, Items } from '../../stores/TempData';
import { useShoppingCard } from '../../context/shoppingCartContext';



const Featured = (props) => {
    const checkout = (event) => {
        event.preventDefault()
        axios.post("https://localhost:7193/testcheckout", Items)
            .then(res => {
                console.log({result: res});
                window.location = res.data.url
            })
            .catch(err => {
                console.log({errors: err});
            })
    }

    const { incrementCardQuantity, addToCart } = useShoppingCard();
    return (
        <section className="featured section" id="featured">
            <h2 className="section-title">FEATURED</h2>

            <div className="featured__container bd-grid">
                {/* <article className="sneaker">
                    <div className="sneaker__sale">Sale</div>
                        <img src={featured1} alt="sneaker" className="sneaker__img"/>
                        <span className="sneaker__name">Nike Jordan</span>
                        <span className="sneaker__price">$143.99</span>
                        <a href="/" className="button-light" id='sneaker__sale_a'>Add to card<i className="fa-solid fa-arrow-right button-icon"></i></a>
                </article>

                <article className="sneaker">
                    <div className="sneaker__sale">Sale</div>
                        <img src={featured2} alt="sneaker" className="sneaker__img"/>
                        <span className="sneaker__name">Nike Jordan</span>
                        <span className="sneaker__price">$143.99</span>
                        <button onClick={checkout} className="button-light" id='sneaker__sale_a'>Test Backend <i className="fa-solid fa-arrow-right button-icon"></i></button>
                </article>

                <article className="sneaker">
                    <div className="sneaker__sale">Sale</div>
                        <img src={featured3} alt="sneaker" className="sneaker__img"/>
                        <span className="sneaker__name">Nike Free RN</span>
                        <span className="sneaker__price">$143.99</span>
                        <a href="/" className="button-light" id='sneaker__sale_a'>Add to Card <i className="fa-solid fa-arrow-right button-icon"></i></a>
                </article> */}
                {
                    Products.map((product) => 
                    (
                        <article key={ product.id } className="sneaker">
                            <div className="sneaker__sale">Sale</div>
                            <img src={ product.image } alt="sneaker" className="sneaker__img" />
                            <span className="sneaker__name">{ product.name }</span>
                            <span className="sneaker__price">$143.99</span>
                            <button className="button-light" id='sneaker__sale_a' onClick={() => addToCart(product)}>Add to card {product.id}<i className="fa-solid fa-arrow-right button-icon"></i></button>
                        </article>
                    ))
                }
            </div>
        </section>
    )
}

export default Featured;