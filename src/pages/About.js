import Header from "../components/Header"
import TopSectionAbout from "../components/TopSectionAbout"
import MidBodyAbout from "../components/MidBodyAbout"
import Footer from "../components/Footer"


function About() {
    
    return (
        <div className="about-page">
            <Header/>
            <TopSectionAbout/>
            <MidBodyAbout/>
            <Footer/> 
        </div>
    )
}

export default About