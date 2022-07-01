import { Link } from "react-router-dom";




function CareersApply() {
    
    return (
        
            <div class="CareersApply-container">
                
                <div class="career-box">
                    <div className="box-titles">
                    <h2 className="box-h2">General Manager</h2>
                    <p className="box-p">Jakarta, Indonesia</p>  
                 <Link to="/contactUs"><button className="getSctootin-button">Get Scootin</button></Link> 
                   </div>
                </div>

                <div class="career-box">
                    <div className="box-titles">
                    <h2 className="box-h2">UI/UX Designer</h2>
                    <p className="box-p">Yokohama, Japan</p> 
                    </div>
                 <Link to="/contactUs"><button className="getSctootin-button">Apply</button></Link>   
                </div>

                <div class="career-box"> 
                    <div className="box-titles">
                    <h2 className="box-h2">Blog Content Copywriter</h2>
                    <p className="box-p">New York, United States</p>  
                     </div>
                 <Link to="/contactUs"><button className="getSctootin-button">Apply</button></Link>   
                </div>

                <div class="career-box">  
                    <div className="box-titles">
                    <h2 className="box-h2">Graphic Designer</h2>
                    <p className="box-p">New York, United States</p>  
                    </div>
                 <Link to="/contactUs"><button className="getSctootin-button">Apply</button></Link>   
                </div>
                
                <div class="career-box">  
                    <div className="box-titles">
                    <h2 className="box-h2">Fleet Supervisor</h2>
                    <p className="box-p">Jakarta, Indonesia</p>  
                    </div>
                 <Link to="/contactUs"><button className="getSctootin-button">Apply</button></Link>   
                </div>

                <div class="career-box"> 
                    <div className="box-titles">
                    <h2 className="box-h2">UX Analyst</h2>
                    <p className="box-p">London, United Kingdom</p>  
                    </div> 
                 <Link to="/contactUs"><button className="getSctootin-button">Apply</button></Link> 
                   
                </div>
                 
            </div>
       
    )
}

export default CareersApply