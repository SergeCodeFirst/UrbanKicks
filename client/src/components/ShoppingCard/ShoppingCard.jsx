import './ShoppingCard.css'
import React from "react";

import { featured3 } from '../../assets/images/featured3.png'

const ShoppingCard = (props) => {
    return(
        <div className="nav__shop">
            <i className="fa-solid fa-bag-shopping"></i>

            <div className="card__menu">
                <div className="card__item empty ">
                    <div className="card__item_img">
                        <img src={featured3} alt="featured3" className='items__img' />
                    </div>
                    <div className="card__item__info">
                        <p className='card__item__title'>yeezy boost ...<br /> <span className='card__item__price'>$400.56</span> </p>
                        <div className="item__counter">
                            <i className="fa-solid fa-minus small_font" ></i>
                            <i class="fa-solid fa-trash small_font" ></i>
                            <span className='small_font'>1</span>
                            <i className="fa-solid fa-plus small_font" ></i>
                        </div>
                    </div>
                </div>

                <div className="sad_card ">
                    <i class="fa-regular fa-face-sad-tear"></i>
                    <p>Your card is empty</p>
                </div>
            </div>
        </div>
    )
}

export default ShoppingCard;