import scooter from "../assets/images/scooter.jpg"
import line from "../assets/patterns/line.svg"
import arrowRight from "../assets/patterns/right-arrow.svg"
import whiteCircles from "../assets/patterns/white-circles.svg"
import { Link } from "react-router-dom"


var backgroundScooter = {
  width: "1440px",
  height: "652px",
  backgroundImage: `url(${scooter})`
};

function TopSectionHome() {
    
    return (

      <div className="top-section-home" style={ backgroundScooter }>
          <img src={line} alt="line" className="line" />  
          <img src={arrowRight} alt="arrow" className="right-arrow" />
          <img src={whiteCircles} alt="oval" className="whiteCircles" /> 

          <div className="header-home">
          <h1 className="scooter-sharing-heading">Scooter sharing<br/>made simple</h1>
          <p className="sharing-p">Scoot takes the hassle out of urban mobility. Our bikes<br/>
               are placed in convenient locations in each of our cities.<br/>
               Use our app to locate the nearest bike, unlock it with a<br/>
               tap, and you’re away!</p>
          <Link to="/contactUs"><button className="scooter-sharing-button">Get Scootin</button></Link> 
        </div>
      </div>                
       
           
    )
}

export default TopSectionHome