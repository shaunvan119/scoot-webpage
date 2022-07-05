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
import cashpic from "../assets/images/cashpic.png"
import rightarrowbottom from "../assets/patterns/left-downward-arrow.svg"
import circlethree from "../assets/patterns/circle.svg"
import tabletgirl from "../assets/images/tabletgirlmobile.png"
import { Link } from "react-router-dom"



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
                <img src={tabletgirl} alt="line" className="tabletgirl" /> 
                <div className="left-easy">
                <h2 className="easy-h2">Easy to use<br/>riding telemetry</h2>
                <p className="easy-p">The Scoot app is available with riding telemetry. This means<br/> 
                it can show you your average speed, how long you've been<br/>
                using the scooter, your traveling distance, and many more<br/> 
                things all in an easy to use app.</p>
                <Link to="/contactUs"><button className="learn-more-button">Learn More</button></Link>
                </div>
                <img src={girlphone} alt="line" className="girlphone" /> 
                <img src={rightarrow} alt="line" className="rightarrow" />
                <img src={circleone} alt="line" className="circleone" />  

            </div>

            <div className="mid-body-home-container-three">
            <img src={citycircle} alt="line" className="citycircletablet" /> 
                <img src={citycircle} alt="line" className="citycircle" /> 
                <img src={leftarrow} alt="line" className="leftarrow" />
                <img src={circletwo} alt="line" className="circletwo" />  
                <div className="right-easy">
                <h2 className="easy-h2">Coming to a city<br/>near you</h2>
                <p className="easy-p">Scoot is available in 4 major cities so far. We’re expanding<br/>
                    rapidly, so be sure to let us know if you want to see us in<br/>
                    your hometown. We’re aiming to let our scooters loose on 23<br/>
                    cities over the coming year.</p>
                <Link to="/contactUs"><button className="learn-more-button">Learn More</button></Link>
                </div>
                
            </div>

            <div className="mid-body-home-container-four">
            <img src={cashpic} alt="line" className="cashpictablet" /> 
                <div className="left-easy-bottom">
                <h2 className="easy-h2">Zero hassle<br/>payments</h2>
                <p className="easy-p">Our payment is as easy as one two three. We accept most<br/>
                credit cards and debit cards. You can also link your PayPal <br/>
                account inside the app. Need to pay later? No worries! You<br/>
                can defer payment for up to a month.</p>
                <Link to="/contactUs"><button className="learn-more-button">Learn More</button></Link>
                </div>
                <img src={cashpic} alt="line" className="cashpic" /> 
                <img src={rightarrowbottom} alt="line" className="rightarrowbottom" />
                <img src={circlethree} alt="line" className="circlethree" />  

            </div>          
       </div>
        
    )
}

export default MidBodyHome