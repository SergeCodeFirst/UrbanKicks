import Collection from "../../components/Collection/Collection";
import Featured from "../../components/Featured/Featured";
import Header from "../../components/Header/Header";
import "./Home.css"

const Home = (props) => {
    return(
        <main className="l-main">
            <Header />
            <Featured />
            <Collection />
            
        </main>
    )
}

export default Home;