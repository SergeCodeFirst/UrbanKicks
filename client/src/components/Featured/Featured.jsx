import featured1 from '../../assets/images/featured1.png';
import featured2 from '../../assets/images/featured2.png';
import featured3 from '../../assets/images/featured3.png';

import './Featured.css'



const Featured = (props) => {
    return (
        <section class="featured section" id="featured">
            <h2 class="section-title">FEATURED</h2>

            <div class="featured__container bd-grid">
                <article class="sneaker">
                    <div class="sneaker__sale">Sale</div>
                        <img src={featured1} alt="sneaker" className="sneaker__img"/>
                        <span class="sneaker__name">Nike Jordan</span>
                        <span class="sneaker__price">$143.99</span>
                        <a href="" class="button-light" id='sneaker__sale_a'>Add to Card <i class="fa-solid fa-arrow-right button-icon"></i></a>
                </article>

                <article class="sneaker">
                    <div class="sneaker__sale">Sale</div>
                        <img src={featured2} alt="sneaker" className="sneaker__img"/>
                        <span class="sneaker__name">Nike Jordan</span>
                        <span class="sneaker__price">$143.99</span>
                        <a href="" class="button-light" id='sneaker__sale_a'>Add to Card <i class="fa-solid fa-arrow-right button-icon"></i></a>
                </article>

                <article class="sneaker">
                    <div class="sneaker__sale">Sale</div>
                        <img src={featured3} alt="sneaker" className="sneaker__img"/>
                        <span class="sneaker__name">Nike Free RN</span>
                        <span class="sneaker__price">$143.99</span>
                        <a href="#" class="button-light" id='sneaker__sale_a'>Add to Card <i class="fa-solid fa-arrow-right button-icon"></i></a>
                </article>

            </div>
        </section>
    )
}

export default Featured;