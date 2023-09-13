import './Women.css'


import women1 from '../../assets/images/women1.png';
import women2 from '../../assets/images/women2.png';
import women3 from '../../assets/images/women3.png';
import women4 from '../../assets/images/women4.png';


const Women = (props) => {
    return(
        <section class="women section" id="women">
        <h2 class="section-title">WOMEN SNEAKERS</h2>

        <div class="women__container bd-grid">
            <article class="sneaker">
                <img src={women1} alt="women1" class="sneaker__img" />
                <span class="sneaker__name">Nike Free TR</span>
                <span class="sneaker__price">$129.99</span>
                <a href="/" class="button-light" id='notunderline'>Add to Card <i className="fa-solid fa-arrow-right button-icon"></i></a>
            </article>

            <article class="sneaker">
                <img src={women2} alt="women2" />
                <span class="sneaker__name">Nike Get 5</span>
                <span class="sneaker__price">$129.99</span>
                <a href="/" class="button-light" id='notunderline'>Add to Card <i className="fa-solid fa-arrow-right button-icon"></i></a>
            </article>

            <article class="sneaker">
                <img src={women3} alt="women3" />
                <span class="sneaker__name">Nike GS Pink</span>
                <span class="sneaker__price">$129.99</span>
                <a href="/" class="button-light" id='notunderline'>Add to Card <i className="fa-solid fa-arrow-right button-icon"></i></a>
            </article>
            <article class="sneaker">
                <img src={women4} alt="women4" />
                <span class="sneaker__name">Nike GS Pink</span>
                <span class="sneaker__price">$129.99</span>
                <a href="/" class="button-light" id='notunderline'>Add to Card <i className="fa-solid fa-arrow-right button-icon"></i></a>
            </article>
        </div>
    </section>
    )
}

export default Women;