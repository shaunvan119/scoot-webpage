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
                 <a href="https://www.apple.com/au/app-store/" target="_blank" rel="noreferrer"><img src={appstore} alt="Logo" className="appstore"/></a> 
                 <a href="https://play.google.com/store/apps/" target="_blank" rel="noreferrer"><img src={googleplay} alt="Logo" className="googleplay"/></a>
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
                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><img src={facebook} alt="Logo" className="facebook"/></a> 
                    <a href="https://twitter.com/?lang=en" target="_blank" rel="noreferrer"><img src={twitter} alt="Logo" className="twitter"/></a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><img src={instagram} alt="Logo" className="instagram"/></a> 
                </div>
            </div>
            </div>
        </footer>
    )
}

export default Footer