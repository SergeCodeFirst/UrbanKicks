import Collection from "../../components/Collection/Collection";
import Featured from "../../components/Featured/Featured";
import Header from "../../components/Header/Header";
import Newcollection from "../../components/Newcollection/Newcollection";
import Newsletter from "../../components/Newsletter/Newsletter";
import Offer from "../../components/Offer/Offer";
import Women from "../../components/Women/Women";

import "./Home.css";

const Home = (props) => {
    return(
        <main className="l-main">
            <Header />
            <Featured />
            <Collection />
            <Women />
            <Offer />
            <Newcollection />
            <Newsletter />
        </main>
    )
}

export default Home;