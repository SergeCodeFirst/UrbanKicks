import featured1 from '../../assets/images/featured1.png';
import featured2 from '../../assets/images/featured2.png';
import featured3 from '../../assets/images/featured3.png';

import './Featured.css'
import axios from 'axios';



const Featured = (props) => {
    const checkout = (event) => {
        event.preventDefault()
        const Items = [
            {id: 1, quantity: 2, pricePerUnitInCents: 20000, productName: "Nike Jordan"}, // acrticle to buy
            {id: 2, quantity: 1, pricePerUnitInCents: 10000, productName: "Nike Mercurial"},
        ]

        axios.post("https://localhost:7193/testcheckout", Items)
            .then(res => {
                console.log({result: res});
                window.location = res.data.url
            })
            .catch(err => {
                console.log({errors: err});
            })
    }
    return (
        <section className="featured section" id="featured">
            <h2 className="section-title">FEATURED</h2>

            <div className="featured__container bd-grid">
                <article className="sneaker">
                    <div className="sneaker__sale">Sale</div>
                        <img src={featured1} alt="sneaker" className="sneaker__img"/>
                        <span className="sneaker__name">Nike Jordan</span>
                        <span className="sneaker__price">$143.99</span>
                        <a href="/" className="button-light" id='sneaker__sale_a'>Check Out <i className="fa-solid fa-arrow-right button-icon"></i></a>
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
                </article>

            </div>
        </section>
    )
}

export default Featured;