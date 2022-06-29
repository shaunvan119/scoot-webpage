import locate from "../assets/icons/locate.svg"
import ride from "../assets/icons/ride.svg"
import scootericon from "../assets/icons/scooter.svg"


function MidBodyHome() {
    
    return (

        <div className="mid-body-home-container">
            
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
       
           
    )
}

export default MidBodyHome