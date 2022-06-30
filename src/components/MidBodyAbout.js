import girlphoneTwo from "../assets/images/phoneabout.png"
import rightarrowabout from "../assets/patterns/left-downward-arrow.svg"
import circleaboutone from "../assets/patterns/circle.svg"
import citycircleabout from "../assets/images/citycircle.png"
import leftarrowabout from "../assets/patterns/right-arrow.svg"
import circletwoabout from "../assets/patterns/circle.svg"
import valueone from "../assets/images/valueone.png"
import valuetwo from "../assets/images/valuetwo.png"
import valuethree from "../assets/images/valuethree.png"


function MidBodyAbout() {


    return (

     <div className="mid-body-about">

             <div className="about-container-one">
                <div className="mobility">
                <h2 className="mobility-h2">Easy to use<br/>riding telemetry</h2>
                <p className="mobility-p">The Scoot app is available with riding telemetry. This means<br/> 
                it can show you your average speed, how long you've been<br/>
                using the scooter, your traveling distance, and many more<br/> 
                things all in an easy to use app.</p>
                
                </div>
                <img src={girlphoneTwo} alt="line" className="girlphone-two" /> 
                <img src={rightarrowabout} alt="line" className="rightarrow-two" />
                <img src={circleaboutone} alt="line" className="circle-about-one" />  

            </div>

            <div className="about-container-two">
                <img src={citycircleabout} alt="line" className="about-circle-one" /> 
                <img src={leftarrowabout} alt="line" className="left-arrow-about" />
                <img src={circletwoabout} alt="line" className="circle-two-about" />  
                <div className="better">
                <h2 className="better-h2">Coming to a city<br/>near you</h2>
                <p className="better-p">Scoot is available in 4 major cities so far. We’re expanding<br/>
                    rapidly, so be sure to let us know if you want to see us in<br/>
                    your hometown. We’re aiming to let our scooters loose on 23<br/>
                    cities over the coming year.</p>
                </div>
                
            </div>

            <div className="values-container">
           
            
            <div className="values-one">
                <div className="our-tech">
                    <img src={valueone} alt="phone" className="value-one" />  
                    <h2 className="our-tech-h2">Locate with app</h2>
                    <p className="our-tech-p">Use the app to find the nearest scooter to you.<br/>
                     We are continuously placing scooters in the<br/>
                      areas with most demand, so one should never<br/> 
                      be too far away. </p>
                </div>
            </div>
            <div className="values-two">
                <div className="our-integrity">
                    <img src={valuetwo} alt="line" className="value-two" /> 
                    <h2 className="integrity-h2">Pick your scooter</h2>
                    <p className="integrity-p">We show the most important info for the<br/>
                    scooters closest to you. So you know how much<br/>
                     charge they have left and can see roughly how<br/>
                      much it will cost.</p>
                </div>
            </div>
            <div className="values-three">
                <div className="our-community">
                    <img src={valuethree} alt="line" className="value-three" /> 
                    <h2 className="community-h2">Enjoy the ride</h2>
                    <p className="community-p">Scan the QR code and the bike will<br/> 
                    unlock. Retract the cable lock, put on a helmet, and <br/>
                     you’re off! Always lock bikes away from<br/> 
                     walkways and accessibility ramps.</p>
                </div>
            </div>   
        </div>         
       </div>            
       
           
    )
}

export default MidBodyAbout