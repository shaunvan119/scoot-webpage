import Header from "../components/Header"
import TopSectionHome from "../components/TopSectionHome"
import MidBodyHome from "../components/MidBodyHome"
import Footer from "../components/Footer"


function Home() {
    
    return (
        <div className="home-page">
            <Header/>
            <TopSectionHome/>
            <MidBodyHome/>
            <Footer/>
        </div>
    )
}

export default Home