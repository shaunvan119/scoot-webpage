import locate from "../assets/icons/locate.svg"
import ride from "../assets/icons/ride.svg"
import scootericon from "../assets/icons/scooter.svg"
import greyline from "../assets/patterns/greyline.png"
import girlphone from "../assets/images/girlphone.png"
import rightarrow from "../assets/patterns/left-downward-arrow.svg"
import circleone from "../assets/patterns/circle.svg"
import citycircle from "../assets/images/citycircle.png"
import leftarrow from "../assets/patterns/right-arrow.svg"
import circletwo from "../assets/patterns/circle.svg"



function MidBodyHome() {
    
    return (

        <div className="mid-body-wrapper">

        <div className="mid-body-home-container-one">
            <img src={greyline} alt="line" className="greyline" />  
            
            <div className="mid-body-one">
                <div className="locate-app">
                    <img src={locate} alt="line" className="locate" />  
                    <h2 className="mid-body-h2">Locate with app</h2>
                    <p className="mid-body-p">Use the app to find the nearest scooter to you.<br/>
                     We are continuously placing scooters in the<br/>
                      areas with most demand, so one should never<br/> 
                      be too far away. </p>
                </div>
            </div>
            <div className="mid-body-two">
                <div className="pick-scoot">
                    <img src={ride} alt="line" className="ride" /> 
                    <h2 className="mid-body-h2">Pick your scooter</h2>
                    <p className="mid-body-p">We show the most important info for the<br/>
                    scooters closest to you. So you know how much<br/>
                     charge they have left and can see roughly how<br/>
                      much it will cost.</p>
                </div>
            </div>
            <div className="mid-body-three">
                <div className="enjoy-ride">
                    <img src={scootericon} alt="line" className="scooter-icon" /> 
                    <h2 className="mid-body-h2">Enjoy the ride</h2>
                    <p className="mid-body-p">Scan the QR code and the bike will<br/> 
                    unlock. Retract the cable lock, put on a helmet, and <br/>
                     you’re off! Always lock bikes away from<br/> 
                     walkways and accessibility ramps.</p>
                </div>
            </div>   
        </div> 

             <div className="mid-body-home-container-two">
                <div className="left-easy">
                <h2 className="easy-h2">Easy to use<br/>riding telemetry</h2>
                <p className="easy-p">The Scoot app is available with riding telemetry. This means<br/> 
                it can show you your average speed, how long you've been<br/>
                using the scooter, your traveling distance, and many more<br/> 
                things all in an easy to use app.</p>
                <button className="learn-more-button">Learn More</button>
                </div>
                <img src={girlphone} alt="line" className="girlphone" /> 
                <img src={rightarrow} alt="line" className="rightarrow" />
                <img src={circleone} alt="line" className="circleone" />  

            </div>

            <div className="mid-body-home-container-three">
                <img src={citycircle} alt="line" className="citycircle" /> 
                <img src={leftarrow} alt="line" className="leftarrow" />
                <img src={circletwo} alt="line" className="circletwo" />  
                <div className="right-easy">
                <h2 className="easy-h2">Easy to use<br/>riding telemetry</h2>
                <p className="easy-p">The Scoot app is available with riding telemetry. This means<br/> 
                it can show you your average speed, how long you've been<br/>
                using the scooter, your traveling distance, and many more<br/> 
                things all in an easy to use app.</p>
                <button className="learn-more-button">Learn More</button>
                </div>
                
            </div>

            <div className="mid-body-home-container-four">

            </div>          
       </div>
        
    )
}

export default MidBodyHome