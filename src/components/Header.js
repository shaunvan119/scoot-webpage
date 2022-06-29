import { Link } from "react-router-dom";
import logo from "../assets/logo.svg"



function Header() {
    
    return (
        <header>
            <div class="header-container">
                <div class="site-nav">
                    <img src={logo} alt="Logo" className="logo" />  
                    <nav>
                    <ul>
                        <li><Link to="/About">About</Link></li>
                        <li><Link to="/Location">Location</Link></li>
                        <li><Link to="/Careers">Careers</Link></li>
                    </ul>
                </nav>
                </div>
                 <button className="GetSctootin-button">GetScootin</button>   
            </div>
        </header>
    )
}

export default Header