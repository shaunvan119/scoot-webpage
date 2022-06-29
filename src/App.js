import Home from "./pages/Home";
import About from "./pages/About";
import Careers from "./pages/Careers";
import Locations from "./pages/Locations";
import { Routes, Route } from "react-router-dom";




function App() {
  return (
    <div className="wrapper">
     <Routes>
        <Route exact path="/" element={[<Home/>]}/> 
        <Route path="/About" element={<About/>}/>
        <Route path="/Careers" element={<Careers/>}/>
        <Route path="/Location" element={<Locations/>}/>
     </Routes>
            
            
      

      
    </div>
  );
}

export default App;
