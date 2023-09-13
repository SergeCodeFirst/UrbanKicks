import './Newsletter.css'

const Newsletter = (props) => {
    return(
        <section className="newletter section">
        <div className="newsletter__container bd-grid">
            <div>
                <h3 className="newsletter__title">Subscribe And <span>Get 10% OFF</span></h3>
                <p className="newsletter__description">Get 10% discount for all products</p>
            </div>

            <form action="" className="newsletter__subscribe">
                <input type="text" placeholder="email.com" className="newsletter__input" />
                <a href="/" className="button">Subscribe</a>
            </form>
        </div>
    </section>
    )
}

export default Newsletter;