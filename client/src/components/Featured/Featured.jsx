import './Featured.css'
import React from 'react';

import { Products } from '../../stores/TempData';
import { useShoppingCard } from '../../context/shoppingCartContext';



const Featured = (props) => {
    const { addToCart } = useShoppingCard();
    return (
        <section className="featured section" id="featured">
            <h2 className="section-title">FEATURED</h2>
            <div className="featured__container bd-grid">
                {
                    Products.map((product) => 
                    (
                        <article key={ product.id } className="sneaker">
                            <div className="sneaker__sale">Sale</div>
                            <img src={ product.image } alt="sneaker" className="sneaker__img" />
                            <span className="sneaker__name">{ product.name }</span>
                            <span className="sneaker__price">{  product.price }</span>
                            <button className="button-light" id='sneaker__sale_a' onClick={() => addToCart(product)}>Add to card {product.id}<i className="fa-solid fa-arrow-right button-icon"></i></button>
                        </article>
                    ))
                }
            </div>
        </section>
    )
}

export default Featured;