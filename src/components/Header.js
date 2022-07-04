import { Link } from "react-router-dom";
import logo from "../assets/logo.svg"



function Header() {
    
    return (
        <header>
            <div class="header-container">
                
                <div class="site-nav">  
                 <Link to="/"><img src={logo} alt="Logo" className="logo" /></Link>    
                <nav className="nav-headings">
                    <ul>
                        <li><Link style={{textDecoration: 'none', color:'#939CAA'}}  to="/About" >About</Link></li>
                        <li><Link  style={{textDecoration: 'none', color:'#939CAA'}}  to="/Location">Location</Link></li>
                        <li><Link  style={{textDecoration: 'none', color:'#939CAA'}}  to="/Careers">Careers</Link></li>
                    </ul>
                </nav>
                </div>
                 <Link to="/contactUs"><button className="getSctootin-button">Get Scootin</button></Link>   
            </div>
        </header>
    )
}

export default Header