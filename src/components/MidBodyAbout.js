import topgraphic from "../assets/images/phoneabout.png"
import rightarrowabout from "../assets/patterns/left-downward-arrow.svg"
import citycircleabout from "../assets/images/citycircle.png"
import leftarrowabout from "../assets/patterns/right-arrow.svg"
import circletwoabout from "../assets/patterns/circle.svg"
import valueone from "../assets/images/valueone.png"
import valuetwo from "../assets/images/valuetwo.png"
import valuethree from "../assets/images/valuethree.png"
import aboutmobile from "../assets/images/aboutmobile.png"



function MidBodyAbout() {


    return (

     <div className="mid-body-about">

             <div className="about-container-one">
             <img src={aboutmobile} alt="line" className="topgraphicmobile" /> 
                <div className="mobility">
                <h2 className="about-h2">Mobility for the<br/>digital era</h2>
                <p className="about-p">Getting around should be simple (and even fun!) for<br/>
                 everyone. We embrace technology to provide low cost, smart<br/>
                  access to scooters at your fingertips.</p>
                </div>
                <img src={topgraphic} alt="line" className="topgraphic" /> 
                <img src={rightarrowabout} alt="line" className="rightarrow-two" />
            </div>

            <div className="about-container-two">
                <img src={citycircleabout} alt="line" className="about-circle-one-mobile" /> 
                <img src={citycircleabout} alt="line" className="about-circle-one" /> 
                <img src={leftarrowabout} alt="line" className="left-arrow-about" />
                <img src={circletwoabout} alt="line" className="circle-two-about" />  
                <div className="better">
                <h2 className="about-h2">Better urban<br/>living</h2>
                <p className="about-p">We’re helping connect cities and bring people closer<br/>
                 together. Our scooters are also fully-electric and we offset<br/>
                  the minimal carbon footprint for each ride.</p>
                </div>
                
            </div>
<h2 className="values-header">Our values</h2>
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

export default MidBodyAbout