import React from 'react';
import Header from './Header';
import Feature from './feature';
import Home from "./Home";
import ControlledCarousel from './Carousel';
import Buynow from './Buynow';
import Design from './Design';
import Footer from './Footer';
import {BrowserRouter as Router , Routes, Route} from "react-router-dom";


function App() {
  return (
    <div className="App"> 
    <Router>
  <Header />
 
   <Routes>
  <Route exact path='/' element={<div>
  <Home /> 
  <Feature />
   <ControlledCarousel />
    <Buynow /> 
    <Design />
     <Footer />
     </div>} />
  <Route  path='/feature' element={<Feature />} />
  <Route  path='/gallery' element={<ControlledCarousel />} />
  <Route  path='/buynow' element={<Buynow />} />
  <Route  path='/design' element={ <Design />} />
 </Routes>

 </Router>
    </div>
  );
}

export default App;
