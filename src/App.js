//import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages/index";
import About from "./pages/about";
import Experience from "./pages/experience";
import DeveloperClients from "./pages/clients/developer";
import MarketingClients from "./pages/clients/marketing";
import Contact from "./pages/contact";

function App() {

  
  return (
        <Router>
            <Navbar />
            <div className='container'>
              <div className='row'>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/experience" element={<Experience />} />
                    <Route path="/clients/developer" element={<DeveloperClients />} />
                    <Route path="/clients/marketing" element={<MarketingClients />} />                    
                    <Route path="/contact" element={<Contact />} />
                </Routes>
              </div>
            </div>
        </Router>
        
  );
}

export default App;
