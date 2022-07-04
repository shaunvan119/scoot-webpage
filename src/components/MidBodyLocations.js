import worldmap from "../assets/images/worldmap.png"
import { Link } from "react-router-dom"

function MidBodyLocations() {


    return (

     <div className="mid-body-locations">
            <img src={worldmap} alt="line" className="worldmap" />
             <div className="city-not-listed">
                <h2 className="location-h2">Your city?<br/>not listed</h2>
                <p className="location-p">If you’d like to see Scoot in your hometown, be sure to let us<br/>
                know. We track requests and plan launches based on<br/>
                  demand. Feel free to message us by clicking the link or<br/>
                  messaging us on social.</p>
                  <Link to="/contactUs"><button className="getSctootin-button">Message Us</button></Link>   
                   
            </div>                
       </div>            
       
           
    )
}

export default MidBodyLocations