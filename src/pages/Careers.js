import Header from "../components/Header"
import TopSectionCareers from "../components/TopSectionCareers"
import MidBodyCareers from "../components/MidBodyCareers"
import CareersApply from "../components/CareersApply"
import Footer from "../components/Footer"


function Careers() {
    
    return (
        <div className="careers-page">
            <Header/>
            <TopSectionCareers/>
            <MidBodyCareers/>
            <CareersApply/>
            <Footer/>
        </div>
    )
}

export default Careers