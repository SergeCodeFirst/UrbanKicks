import Collection from "../../components/Collection/Collection";
import Featured from "../../components/Featured/Featured";
import Header from "../../components/Header/Header";
import Women from "../../components/Women/Women";
import "./Home.css"

const Home = (props) => {
    return(
        <main className="l-main">
            <Header />
            <Featured />
            <Collection />
            <Women />
        </main>
    )
}

export default Home;