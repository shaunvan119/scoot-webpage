import topgraphic from "../assets/images/careers-guy.png"
import rightarrowabout from "../assets/patterns/left-downward-arrow.svg"
import valueone from "../assets/images/valueone.png"
import valuetwo from "../assets/images/valuetwo.png"
import valuethree from "../assets/images/valuethree.png"
import guycareers from "../assets/images/guycareers.png"


function MidBodyCareers() {


    return (

     <div className="mid-body-careers">

             <div className="about-container-one">
             <img src={guycareers} alt="line" className="topgraphicmobile" /> 
                <div className="mobility">
                <h2 className="about-h2">Mobility for the<br/>digital era</h2>
                <p className="about-p">Getting around should be simple (and even fun!) for<br/>
                 everyone. We embrace technology to provide low cost, smart<br/>
                  access to scooters at your fingertips.</p>
                </div>
                <img src={topgraphic} alt="line" className="topgraphic" /> 
                <img src={rightarrowabout} alt="line" className="rightarrow-two" />
            </div>

            
            <h2 className="values-header">Why join us?</h2>
            <div className="values-container">
            <div className="values-one">
                <div className="our-tech">
                    <img src={valueone} alt="phone" className="value-one" />  
                    <h2 className="values-h2">Our tech</h2>
                    <p className="values-p">We’re using cutting edge technology to drive<br/>
                     accessible urban transportation forward. Our<br/>
                      fully electric scooters are a joy to ride!</p>
                </div>
            </div>
            <div className="values-two">
                <div className="our-integrity">
                    <img src={valuetwo} alt="line" className="value-two" /> 
                    <h2 className="values-h2">Our integrity</h2>
                    <p className="values-p">We are fully committed to deliver a great yet<br/>
                     safe, sustainable micro-mobility experience in<br/>
                     every city we serve.</p>
                </div>
            </div>
            <div className="values-three">
                <div className="our-community">
                    <img src={valuethree} alt="line" className="value-three" /> 
                    <h2 className="values-h2">Our community</h2>
                    <p className="values-p">We support every community we serve. All<br/>
                     workers are paid a living wage based on their<br/>
                      location and are Scoot employees.</p>
                </div>
            </div>   
        </div>         
       </div>            
       
           
    )
}

export default MidBodyCareers