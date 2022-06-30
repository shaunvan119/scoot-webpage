
import aboutimage from "../assets/images/about-hero-desktop.jpg"


function TopSectionAbout() {

  var backgroundAbout = {
  width: "100%",
  height: "200px",
  backgroundImage: `url(${aboutimage})`
};
    
    return (

      <div className="about-header-style" style={ backgroundAbout }>
        <h1 className="about-h1">About</h1>
           
            
        </div>               
       
           
    )
}

export default TopSectionAbout