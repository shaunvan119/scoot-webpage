import appstore from "../assets/icons/app-store.svg"
import googleplay from "../assets/icons/google-play.svg"
import logo from "../assets/logo.svg"
import { Link } from "react-router-dom"
import facebook from "../assets/icons/facebook.svg"
import twitter from "../assets/icons/twitter.svg"
import instagram from "../assets/icons/instagram.svg"




function Footer() {
    
    return (
        <footer>
            <div class="footer-container">
            <div className="sign-up-footer">
                <h2 className="sign-up">Sign up and<br/>Scoot off today</h2>
                <div className="incons-google-app">
                 <img src={appstore} alt="Logo" className="appstore"/> 
                 <img src={googleplay} alt="Logo" className="googleplay"/>
                </div>
            </div>
            <div className="bottom-footer">
                <div class="site-nav-bottom">  
                 <img src={logo} alt="Logo" className="logo-bottom" />    
                <nav className="nav-headings">
                    <ul>
                        <li><Link style={{textDecoration: 'none', color:'#939CAA'}}  to="/About" >About</Link></li>
                        <li><Link  style={{textDecoration: 'none', color:'#939CAA'}}  to="/Location">Location</Link></li>
                        <li><Link  style={{textDecoration: 'none', color:'#939CAA'}}  to="/Careers">Careers</Link></li>
                    </ul>
                </nav>
                  
            </div>
            <div className="socail-icons">
                    <img src={facebook} alt="Logo" className="facebook"/> 
                    <img src={twitter} alt="Logo" className="twitter"/>
                    <img src={instagram} alt="Logo" className="instagram"/>
                    
                </div>
            </div>
              
            </div>
        </footer>
    )
}

export default Footer